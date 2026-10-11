import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * 승률 시뮬레이터 퀴즈 기록 — 브라우저 보관 + 계정 저장 («내 기록» 회차 C · 2026-10-11)
 * 설계 = docs/my-records-design.md §3-1·§3-2 · 표 = supabase/my-records.sql 2) win_rate_quiz_hands
 *
 * - 퀴즈 1판 = 1행. 로그인 안 함 → 이 브라우저(localStorage)에만 쌓는다.
 * - 로그인함 → 판이 끝날 때 올린다. 처음 로그인하면 브라우저에 쌓인 판을 한 번에 올린다
 *   (client_id로 중복 없음 · insert … on conflict do nothing — 표에 update 정책이 없다).
 * - 실패해도 화면은 막지 않는다 — 올리지 못한 판은 브라우저에 남아 다음 방문 때 다시 올린다.
 * - 브라우저에는 «누적 합계 + 아직 올리지 않은 판»만 둔다. 올린 판의 행은 지운다(합계는 남는다).
 * - «내 기록» 카드(회차 D)가 fetchAccountTotals를 같이 쓴다.
 */

export interface QuizTotals {
  hands: number;
  guesses: number;
  /** 오차 합(%p) — 평균 오차 = errSum ÷ guesses */
  errSum: number;
  decisions: number;
  hits: number;
  points: number;
}
export const EMPTY_TOTALS: QuizTotals = { hands: 0, guesses: 0, errSum: 0, decisions: 0, hits: 0, points: 0 };

/** 표의 열 이름 그대로(user_id·created_at 제외) */
export interface QuizHandRow {
  client_id: string;
  table_size: 6 | 9;
  players: number;
  guesses: number;
  err_sum: number;
  decisions: number;
  hits: number;
  points: number;
  played_at: string;
}
/** done = 판이 끝났다(올려도 된다) · 진행 중인 판은 올리지 않는다 */
type PendingRow = QuizHandRow & { done: boolean };
interface Store { v: 1; totals: QuizTotals; pending: PendingRow[] }

export const QUIZ_TABLE = "win_rate_quiz_hands";
const KEY = "wrq-quiz-records-v1";
/** 올리지 않은 판을 브라우저에 쌓아 두는 상한 — 넘으면 오래된 판의 행부터 버린다(합계는 그대로) */
const PENDING_MAX = 5000;
const UPLOAD_CHUNK = 500;

const emptyStore = (): Store => ({ v: 1, totals: { ...EMPTY_TOTALS }, pending: [] });

const num = (x: unknown) => (typeof x === "number" && Number.isFinite(x) && x >= 0 ? x : 0);

export function readQuizStore(): Store {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return emptyStore();
    const s = JSON.parse(raw) as Partial<Store>;
    if (s?.v !== 1 || !s.totals || !Array.isArray(s.pending)) return emptyStore();
    const t = s.totals;
    return {
      v: 1,
      totals: {
        hands: num(t.hands), guesses: num(t.guesses), errSum: num(t.errSum),
        decisions: num(t.decisions), hits: num(t.hits), points: num(t.points),
      },
      pending: s.pending.filter((r) => r && typeof r.client_id === "string" && r.guesses >= 1),
    };
  } catch {
    return emptyStore();
  }
}

function writeStore(s: Store) {
  try { window.localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* 저장소 막힘 — 이번 방문 동안만 */ }
}

export function newClientId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}

/** 짐작 1번을 기록한다 — 합계를 올리고 그 판의 행을 고친다(없으면 만든다) */
export function recordQuizAnswer(
  clientId: string,
  hand: { tableSize: 6 | 9; players: number; first: boolean },
  a: { err: number; decided: boolean; hit: boolean; points: number },
): Store {
  const s = readQuizStore();
  s.totals = {
    hands: s.totals.hands + (hand.first ? 1 : 0),
    guesses: s.totals.guesses + 1,
    errSum: s.totals.errSum + a.err,
    decisions: s.totals.decisions + (a.decided ? 1 : 0),
    hits: s.totals.hits + (a.hit ? 1 : 0),
    points: s.totals.points + a.points,
  };
  const now = new Date().toISOString();
  const row = s.pending.find((r) => r.client_id === clientId);
  if (row) {
    // 표 제약(짐작 1~4 · 콜/폴드 0~4) 안에서만 — 한 판은 스트리트 4개뿐이라 넘을 일이 없지만 저장 실패를 막는다
    if (row.guesses < 4) {
      row.guesses += 1;
      row.err_sum = Math.round((row.err_sum + a.err) * 100) / 100;
      row.points += a.points;
      if (a.decided && row.decisions < 4) { row.decisions += 1; if (a.hit) row.hits += 1; }
    }
    row.played_at = now;
  } else {
    s.pending.push({
      client_id: clientId, table_size: hand.tableSize, players: hand.players,
      guesses: 1, err_sum: Math.round(a.err * 100) / 100,
      decisions: a.decided ? 1 : 0, hits: a.decided && a.hit ? 1 : 0,
      points: a.points, played_at: now, done: false,
    });
    if (s.pending.length > PENDING_MAX) s.pending.splice(0, s.pending.length - PENDING_MAX);
  }
  writeStore(s);
  return s;
}

/** 판이 끝났다(리버까지 갔거나 새 판으로 넘어감) — 이제 올려도 된다. clientId 없으면 전부(페이지를 새로 열었을 때) */
export function finishQuizHands(clientId?: string): Store {
  const s = readQuizStore();
  let changed = false;
  for (const r of s.pending) if (!r.done && (!clientId || r.client_id === clientId)) { r.done = true; changed = true; }
  if (changed) writeStore(s);
  return s;
}

/** 이 브라우저의 퀴즈 기록을 지운다(로그인 안 한 상태의 «초기화») — 계정에 올라간 행은 건드리지 않는다 */
export function clearQuizStore(): Store {
  const s = emptyStore();
  writeStore(s);
  return s;
}

/** 행들의 합계(한 행 = 한 판) */
export function sumQuizRows(rows: Pick<QuizHandRow, "guesses" | "err_sum" | "decisions" | "hits" | "points">[]): QuizTotals {
  const t = { ...EMPTY_TOTALS };
  for (const r of rows) {
    t.hands += 1;
    t.guesses += Number(r.guesses) || 0;
    t.errSum += Number(r.err_sum) || 0;
    t.decisions += Number(r.decisions) || 0;
    t.hits += Number(r.hits) || 0;
    t.points += Number(r.points) || 0;
  }
  return t;
}

export function addQuizTotals(a: QuizTotals, b: QuizTotals): QuizTotals {
  return {
    hands: a.hands + b.hands, guesses: a.guesses + b.guesses, errSum: a.errSum + b.errSum,
    decisions: a.decisions + b.decisions, hits: a.hits + b.hits, points: a.points + b.points,
  };
}

/** 아직 올리지 않은 판(진행 중 포함)의 합계 — 로그인 화면에서 «계정 합계 + 이것»을 보여 준다 */
export function pendingQuizTotals(s: Store): QuizTotals {
  return sumQuizRows(s.pending);
}

/**
 * 끝난 판을 계정에 올린다. 새로 들어간 행의 합계를 돌려준다(이미 있던 client_id는 빠진다).
 * 실패하면 null — 행은 브라우저에 남는다(상한 20,000판에 닿은 경우도 같다).
 */
export async function uploadQuizHands(sb: SupabaseClient, userId: string): Promise<QuizTotals | null> {
  const ready = readQuizStore().pending.filter((r) => r.done);
  if (!ready.length) return { ...EMPTY_TOTALS };
  const inserted: QuizHandRow[] = [];
  for (let i = 0; i < ready.length; i += UPLOAD_CHUNK) {
    const chunk = ready.slice(i, i + UPLOAD_CHUNK);
    const { data, error } = await sb
      .from(QUIZ_TABLE)
      .upsert(chunk.map((r) => ({
        user_id: userId, client_id: r.client_id, table_size: r.table_size, players: r.players,
        guesses: r.guesses, err_sum: r.err_sum, decisions: r.decisions, hits: r.hits, points: r.points,
        played_at: r.played_at,
      })), { onConflict: "user_id,client_id", ignoreDuplicates: true })
      .select("client_id, guesses, err_sum, decisions, hits, points");
    if (error) {
      // 앞 묶음은 올라갔다 — 그만큼은 브라우저에서 지운다
      dropUploaded(new Set(ready.slice(0, i).map((r) => r.client_id)));
      return null;
    }
    inserted.push(...((data ?? []) as QuizHandRow[]));
  }
  dropUploaded(new Set(ready.map((r) => r.client_id)));
  return sumQuizRows(inserted);
}

function dropUploaded(ids: Set<string>) {
  if (!ids.size) return;
  const s = readQuizStore();
  // 올리는 사이 다른 탭이 같은 판을 이어 썼을 수 있다 — done인 행만 지운다
  s.pending = s.pending.filter((r) => !(r.done && ids.has(r.client_id)));
  writeStore(s);
}

/** 계정에 쌓인 퀴즈 합계 — 1,000행씩 넘겨 읽는다(PostgREST 기본 상한) · 실패하면 null */
export async function fetchAccountTotals(sb: SupabaseClient, userId: string): Promise<QuizTotals | null> {
  const rows: QuizHandRow[] = [];
  const PAGE = 1000;
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await sb
      .from(QUIZ_TABLE)
      .select("guesses, err_sum, decisions, hits, points")
      .eq("user_id", userId)
      .order("id")
      .range(from, from + PAGE - 1);
    if (error) return null;
    rows.push(...((data ?? []) as QuizHandRow[]));
    if (!data || data.length < PAGE) break;
  }
  return sumQuizRows(rows);
}
