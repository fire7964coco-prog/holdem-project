// 자리별 프리플랍 레인지 — 상대가 «어떤 패로 이 팟에 들어왔나»의 출발점 (언어 중립).
//
// ★2026-10-11 신설 (솔버 요청 S-034 ①). 그 전엔 상대 홀카드가 **완전 무작위**라
//   72o도 팟에 들어왔고, 프리플랍 승률이 실전보다 높게 나왔다(무작위 상대 기준).
//
// 🔴 출처 = 솔버(solver.holdemmaster.com) `src/preflop-charts.ts`의 **숫자표만**(커밋 a1c99cb · 10-10).
//   솔버 소스는 AGPL-3.0이라 **코드는 옮기지 않는다** — 아래 파서는 이 파일이 따로 짰다.
//   표가 바뀌면 이 DATA 블록만 다시 뽑는다(스크립트로 뽑았다 · 손으로 고치지 말 것).
//   전제: 6맥스 캐시 100bb · 오픈 2.5bb · 공개 자료 여러 곳의 합의 레인지 ·
//   경계 핸드는 75/50/25% 혼합 빈도(출처 검증 = 솔버 `참고자료/프리플랍차트_출처검증.md`).
//
// ★이건 «이 도구의 가정»이다. 권장 플레이를 가르치려는 표가 아니다 — 화면 규칙 설명에 그렇게 적는다.

import type { Position } from "./_table";

type TierMap = { [freq: string]: string };

// ── DATA (솔버 차트에서 스크립트로 추출 · RFI = 앞이 전부 폴드했을 때 오픈 · DEFEND = 오픈을 만난 수비) ──
const DATA: { RFI: Record<string, TierMap>; DEFEND: Record<string, { threeBet: TierMap; call: TierMap }> } =
{
  "RFI": {
    "UTG": {
      "25": "A8s-A6s,A3s-A2s,76s,65s,54s,QJo",
      "50": "44-22,K9s,Q9s,J9s,87s,KJo",
      "75": "55,A9s,A4s,98s",
      "100": "66+,ATs+,A5s,KTs+,QTs+,JTs,T9s,AJo+,ATo,KQo"
    },
    "HJ": {
      "25": "K7s-K6s,Q8s,J8s,97s,JTo,A9o",
      "50": "T8s,65s,54s,QTo",
      "75": "A7s-A6s,K8s,76s,KTo",
      "100": "22+,A8s+,A5s-A2s,K9s+,Q9s+,J9s+,T9s,98s,87s,ATo+,KJo+,QJo"
    },
    "CO": {
      "25": "K4s-K3s,Q6s,J7s,96s,85s,53s,K9o,T9o",
      "50": "K5s,Q7s,75s,64s,54s,A8o",
      "75": "K7s-K6s,Q8s,J8s,T7s,86s,65s",
      "100": "22+,A2s+,K8s+,Q9s+,J9s+,T8s+,97s+,87s,76s,A9o+,KTo+,QTo+,JTo"
    },
    "BTN": {
      "25": "Q3s-Q2s,J4s,K7o,Q8o,J8o",
      "50": "J5s,T6s,K8o,87o",
      "75": "K4s-K2s,Q5s-Q4s,J6s,96s,85s,53s",
      "100": "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"
    },
    "SB": {
      "25": "J4s,43s",
      "50": "Q3s-Q2s,J5s,87o,K7o,Q8o,J8o",
      "75": "85s,53s",
      "100": "22+,A2s+,K2s+,Q4s+,J6s+,T6s+,96s+,86s+,75s+,64s+,54s,A2o+,K8o+,Q9o+,J9o+,T9o-T8o,98o"
    }
  },
  "DEFEND": {
    "bb-vs-utg": {
      "threeBet": {
        "25": "99,AJs,KQs,76s,65s",
        "50": "TT,AQo,A5s-A4s",
        "75": "JJ,AQs",
        "100": "QQ+,AKs,AKo"
      },
      "call": {
        "25": "JJ,AQs,K5s,T7s,96s,85s,53s,A9o-A8o,T9o",
        "50": "TT,AQo,A5s-A4s,A3s-A2s,K7s-K6s,Q8s,J8s,97s,86s,75s,64s,KTo,QTo,JTo",
        "75": "99,AJs,KQs,76s,65s,Q9s,J9s,T8s,54s,ATo,KJo,QJo",
        "100": "88-22,ATs,A9s-A6s,KTs-K8s,KJs,QJs-QTs,JTs,T9s,98s,87s,AJo,KQo"
      }
    },
    "bb-vs-hj": {
      "threeBet": {
        "25": "ATs,A3s-A2s,KJs,76s,65s",
        "50": "99,AJs,A5s-A4s,KQs",
        "75": "TT,AQo",
        "100": "JJ+,AQs+,AKo"
      },
      "call": {
        "25": "TT,AQo,K2s,Q5s-Q4s,J5s,96s,85s,74s,43s,A8o,K9o,Q9o,J9o,T9o",
        "50": "99,AJs,KQs,A5s-A4s,K5s-K3s,Q8s-Q6s,J8s-J6s,T7s-T6s,97s,86s,75s,64s,53s,KTo,QTo,JTo,A9o",
        "75": "ATs,A3s-A2s,KJs,76s,65s",
        "100": "88-22,A9s-A6s,KTs,K9s-K6s,QJs-Q9s,JTs-J9s,T9s-T8s,98s,87s,54s,AJo-ATo,KQo-KJo,QJo"
      }
    },
    "bb-vs-btn": {
      "threeBet": {
        "25": "88-77,A3s-A2s,KQs,KJs,QJs,JTs,76s,65s,AJo,KQo",
        "50": "99,ATs,A5s-A4s,T8s,97s,86s",
        "75": "AQo,AJs",
        "100": "TT+,AQs+,AKo"
      },
      "call": {
        "25": "AQo,AJs",
        "50": "99,ATs,A5s-A4s,T8s,97s,86s,J3s-J2s,T5s-T4s,95s,74s,43s,K8o,Q8o,J8o,87o",
        "75": "88-77,A3s-A2s,KQs,KJs,QJs,JTs,76s,65s,AJo,KQo,53s",
        "100": "66-22,A9s-A6s,KTs-K2s,QTs-Q2s,J9s-J4s,T9s,T7s-T6s,98s,96s,87s,85s,75s,64s,54s,ATo-A2o,KJo-K9o,QJo-Q9o,JTo-J9o,T9o-T8o,98o"
      }
    },
    "bb-vs-co": {
      "threeBet": {
        "25": "ATs,A3s-A2s,KJs,76s,65s",
        "50": "99,AJs,A5s-A4s,KQs",
        "75": "TT,AQo",
        "100": "JJ+,AQs+,AKo"
      },
      "call": {
        "25": "TT,AQo,96s,85s,74s,43s,A7o-A5o,T8o,98o,87o",
        "50": "99,AJs,KQs,A5s-A4s,K4s-K2s,Q7s-Q4s,J7s-J5s,T7s-T6s,97s,86s,75s,64s,53s,A9o-A8o,K9o,Q9o,J9o,T9o",
        "75": "ATs,A3s-A2s,KJs,76s,65s",
        "100": "88-22,A9s-A6s,KTs,K9s-K5s,QJs-Q8s,JTs-J8s,T9s-T8s,98s,87s,54s,AJo-ATo,KQo-KTo,QJo-QTo,JTo"
      }
    },
    "bb-vs-sb": {
      "threeBet": {
        "25": "66,A8s,K9s,QJo",
        "50": "88-77,A9s,KTs,QTs,QJs,JTs,T9s,98s,ATo,KJo,KQo",
        "75": "99,ATs,KJs,AJo",
        "100": "TT+,AQs+,AJs,AQo+,KQs"
      },
      "call": {
        "25": "99,ATs,KJs,AJo",
        "50": "88-77,A9s,KTs,QTs,QJs,JTs,T9s,98s,ATo,KJo,KQo,J4s-J2s,T5s-T4s,84s,63s",
        "75": "66,A8s,K9s,QJo",
        "100": "55-22,A7s-A2s,K8s-K2s,Q9s-Q2s,J9s-J5s,T8s-T6s,97s-95s,87s-85s,76s-74s,65s-64s,54s-53s,43s,A9o-A2o,KTo-K8o,QTo-Q8o,JTo-J7o,T9o-T7o,98o-97o,87o,76o"
      }
    },
    "btn-vs-utg": {
      "threeBet": {
        "25": "TT,AQo,KQs,65s",
        "50": "A5s-A4s",
        "75": "JJ,AQs",
        "100": "QQ+,AKs,AKo"
      },
      "call": {
        "25": "JJ,AQs,AQo,KTs,QTs,87s,76s",
        "50": "KJs,QJs,98s",
        "75": "TT,33-22,KQs,T9s",
        "100": "99-44,AJs-ATs,JTs"
      }
    },
    "btn-vs-hj": {
      "threeBet": {
        "25": "AJs,KQs,A3s-A2s,65s",
        "50": "AQo,A5s-A4s",
        "75": "TT",
        "100": "JJ+,AQs+,AKo"
      },
      "call": {
        "25": "TT,AQo,AJo,KQo,A9s,76s",
        "50": "KTs,QTs,87s",
        "75": "AJs,KQs,KJs,QJs,98s",
        "100": "99-22,ATs,JTs,T9s"
      }
    },
    "btn-vs-co": {
      "threeBet": {
        "25": "KQs,A3s-A2s,76s,65s",
        "50": "AJs,A5s-A4s",
        "75": "TT,AQo",
        "100": "JJ+,AQs+,AKo"
      },
      "call": {
        "25": "TT,AQo,ATo,AJo,KJo,QJo,76s,65s",
        "50": "AJs,A9s,KTs,QTs,KQo,87s",
        "75": "KQs,KJs,QJs,98s",
        "100": "99-22,ATs,JTs,T9s"
      }
    },
    "co-vs-utg": {
      "threeBet": {
        "25": "TT,AQo,KQs",
        "50": "A5s-A4s",
        "75": "JJ,AQs",
        "100": "QQ+,AKs,AKo"
      },
      "call": {
        "25": "JJ,44,AQs,QJs,KJs,T9s,98s",
        "50": "66-55,KQs",
        "75": "TT,ATs,AJs,JTs",
        "100": "99-77"
      }
    },
    "co-vs-hj": {
      "threeBet": {
        "25": "KQs,AJs",
        "50": "AQo,A5s-A4s",
        "75": "TT",
        "100": "JJ+,AQs+,AKo"
      },
      "call": {
        "25": "TT,KJs,KTs,QTs,87s",
        "50": "44-22,QJs,98s",
        "75": "AJs,66-55,KQs,T9s",
        "100": "99-77,ATs,JTs"
      }
    },
    "sb-vs-btn": {
      "threeBet": {
        "25": "66-55,A8s-A6s,Q9s,J9s,65s,54s,QJo,KTo",
        "50": "77,K9s,QTs,JTs,T9s,98s,87s,76s,ATo,KJo",
        "75": "88,A9s,KTs,A3s-A2s",
        "100": "99+,ATs+,A5s-A4s,KQs,KJs,QJs,AJo+,KQo"
      },
      "call": {}
    }
  }
};

// ── 파서 ─────────────────────────────────────────────────────────────────────
const RANK_CHARS = "23456789TJQKA"; // 인덱스 + 2 = 엔진의 랭크 숫자(2~14)

/** "AKs" → [[14,13,true]] 같은 손 모양 목록. 범위 표기(66+ · A5s-A2s · ATs+ · KQo)를 푼다 */
function expand(token: string): Array<[number, number, "s" | "o" | "p"]> {
  const t = token.trim();
  if (!t) return [];
  const out: Array<[number, number, "s" | "o" | "p"]> = [];
  const r = (ch: string) => RANK_CHARS.indexOf(ch) + 2;
  const dash = t.indexOf("-");
  if (dash > 0) {
    const a = t.slice(0, dash), b = t.slice(dash + 1);
    if (a[0] === a[1]) {
      // 페어 범위 "88-22"
      for (let x = r(a[0]); x >= r(b[0]); x--) out.push([x, x, "p"]);
    } else {
      // 같은 높은 카드에 낮은 카드 범위 "A5s-A2s"
      const hi = r(a[0]), kind = a[2] as "s" | "o";
      for (let lo = r(a[1]); lo >= r(b[1]); lo--) out.push([hi, lo, kind]);
    }
    return out;
  }
  const plus = t.endsWith("+");
  const body = plus ? t.slice(0, -1) : t;
  if (body[0] === body[1]) {
    const x = r(body[0]);
    if (plus) for (let y = x; y <= 14; y++) out.push([y, y, "p"]);
    else out.push([x, x, "p"]);
    return out;
  }
  const hi = r(body[0]), lo = r(body[1]), kind = body[2] as "s" | "o";
  if (plus) for (let y = lo; y < hi; y++) out.push([hi, y, kind]); // "ATs+" = ATs·AJs·AQs·AKs
  else out.push([hi, lo, kind]);
  return out;
}

/** 169칸 손 모양 키 — 높은 랭크·낮은 랭크·모양 */
const shapeKey = (hi: number, lo: number, kind: "s" | "o" | "p") => `${hi}-${lo}-${kind}`;

/** 티어 표 → 손 모양별 빈도(0~100) */
function freqMap(...tiers: TierMap[]): Map<string, number> {
  const m = new Map<string, number>();
  for (const tier of tiers) {
    for (const [f, text] of Object.entries(tier)) {
      for (const tok of text.split(",")) {
        for (const [hi, lo, kind] of expand(tok)) {
          const k = shapeKey(hi, lo, kind);
          m.set(k, Math.min(100, (m.get(k) ?? 0) + Number(f)));
        }
      }
    }
  }
  return m;
}

/** 엔진 카드 표기 [랭크 2~14, 무늬 0~3] */
export type NCard = [number, number];

/** 레인지 안의 콤보 하나와 그 빈도(25·50·75·100) */
export interface WeightedHole {
  hole: [NCard, NCard];
  /** 혼합 빈도 — 표본에서 이 비율만큼 뽑힌다 */
  w: number;
}

function combosOf(m: Map<string, number>): WeightedHole[] {
  const out: WeightedHole[] = [];
  for (let a = 2; a <= 14; a++) {
    for (let b = 2; b <= a; b++) {
      for (let s1 = 0; s1 < 4; s1++) {
        for (let s2 = 0; s2 < 4; s2++) {
          if (a === b && s2 <= s1) continue; // 페어 6콤보
          const kind = a === b ? "p" : s1 === s2 ? "s" : "o";
          const w = m.get(shapeKey(a, b, kind)) ?? 0;
          if (w > 0) out.push({ hole: [[a, s1], [b, s2]], w });
        }
      }
    }
  }
  return out;
}

/**
 * 수비 표가 없는 조합은 가장 가까운 표로 대신한다 (가정 — 화면 규칙 설명에 적는다).
 *   · HJ vs UTG → CO vs UTG (뒤에 사람이 남은 IP 수비 중 가장 가까운 것)
 *   · SB vs UTG·HJ·CO → BTN vs 같은 오프너 (SB 플랫 표는 BTN 오픈 상대뿐이다)
 */
const DEFEND_FALLBACK: Record<string, string> = {
  "hj-vs-utg": "co-vs-utg",
  "sb-vs-utg": "btn-vs-utg",
  "sb-vs-hj": "btn-vs-hj",
  "sb-vs-co": "btn-vs-co",
};

export type EntryRole = { kind: "open"; pos: Position } | { kind: "defend"; pos: Position; vs: Position };

const cache = new Map<string, WeightedHole[]>();

/**
 * 이 역할로 팟에 들어온 사람이 가질 수 있는 콤보 전부(빈도 포함).
 * 수비는 «콜 + 3벳»을 합친다 — 이 도구는 프리플랍 팟 크기를 단순화해서(전원 같은 금액) 3벳 팟도
 * 플랍을 본 팟으로 친다. 두 빈도 합은 100에서 자른다.
 */
export function rangeFor(role: EntryRole): WeightedHole[] {
  const id = role.kind === "open" ? `open-${role.pos}` : `${role.pos}-vs-${role.vs}`.toLowerCase();
  const hit = cache.get(id);
  if (hit) return hit;
  let m: Map<string, number>;
  if (role.kind === "open") {
    m = freqMap(DATA.RFI[role.pos]);
  } else {
    const key = DATA.DEFEND[id] ? id : DEFEND_FALLBACK[id];
    const d = DATA.DEFEND[key];
    if (!d) throw new Error(`수비 레인지 없음: ${id}`);
    m = freqMap(d.threeBet, d.call);
  }
  const combos = combosOf(m);
  cache.set(id, combos);
  return combos;
}

/** 이 역할의 레인지가 1,326콤보 중 몇 %인가 (빈도 가중) — 화면 표시·검증용 */
export function rangePct(role: EntryRole): number {
  const total = rangeFor(role).reduce((a, c) => a + c.w / 100, 0);
  return (total / 1326) * 100;
}

/** 표에 실린 수비 조합 id 목록 (검증 스크립트용) */
export const DEFEND_IDS = Object.keys(DATA.DEFEND);
