/**
 * 전략 글 «당신이라면?» 투표 정의 (2026-09-28 · 설계 docs/participation-event-redesign-design.md §3)
 *
 * 본문에 `:::poll[<id>]:::` 한 줄을 두면 그 자리에 위젯이 들어간다(KO 일반 글 레이아웃만).
 *
 * 🔴 «솔버 답»은 우리 GTO 시리즈 글에 **이미 실린 표의 값을 한 글자도 바꾸지 않고** 옮긴다.
 *    - freq 문자열은 source 글 표의 «빈도» 칸과 같아야 한다(굵게 표시만 뺀다).
 *    - scripts/check-participation.mjs 가 source 글에서 `| <sourceRow> | <freq> |` 행을 찾아 대조한다.
 *    - 새 수치를 만들지 않는다. 계산이 필요하면 솔버에서 먼저 뽑아 GTO 글에 싣고, 그다음 여기로 옮긴다.
 * 🔴 질문은 «레인지 전체의 빈도»를 묻는다. 특정 핸드 하나의 답처럼 쓰지 않는다
 *    (표는 레인지 빈도다 — 핸드 하나로 물으면 없는 수치를 지어내게 된다).
 * 🔴 이 파일은 import 가 없어야 한다 — 검사기가 그대로 읽는다.
 */

export type PollOption = {
  /** 버튼·막대 라벨 */
  label: string;
  /** 솔버 빈도 — source 글 표의 값 그대로 (예: "98.2%") */
  freq: string;
  /** source 글 표에서 이 행의 첫 칸(행 찾기용) */
  sourceRow: string;
};

export type Poll = {
  id: string;
  /** 위젯이 들어가는 글 */
  hostSlug: string;
  /** 수치를 옮겨 온 GTO 시리즈 글 */
  sourceSlug: string;
  /** 스팟 한 줄 — source 글의 조건과 같아야 한다 */
  spot: string;
  /** 보드(카드 칩으로 그린다) */
  board: string[];
  question: string;
  options: PollOption[];
  /** 결과 아래 해설 한 줄 — source 글 본문의 결론과 같은 뜻 */
  explain: string;
  /** «자세히» 링크 라벨 */
  sourceLabel: string;
};

export const POLLS: Poll[] = [
  {
    id: "srp-a72-bb-first",
    hostSlug: "holdem-cbet-strategy",
    sourceSlug: "a-high-board-cbet",
    spot: "BTN 오픈 · BB 콜 · 팟 5.5bb · 유효 스택 97.5bb",
    board: ["A♥", "7♦", "2♣"],
    question: "BB가 먼저 행동합니다. BB 레인지 전체로 보면 가장 많이 고르는 액션은?",
    options: [
      { label: "체크", freq: "98.2%", sourceRow: "체크" },
      { label: "작게 벳 (33% 팟)", freq: "1.0%", sourceRow: "벳 1.8bb (33% 팟)" },
      { label: "크게 벳 (75% 팟)", freq: "0.9%", sourceRow: "벳 4.1bb (75% 팟)" },
    ],
    explain: "탑 페어를 맞은 핸드까지 체크합니다 — 포지션이 없는 BB는 자기 에퀴티를 84.0%만 실현해서, 먼저 팟을 키우면 손해입니다.",
    sourceLabel: "A72 레인보우 솔버 해설 보기",
  },
  {
    id: "srp-987-bb-first",
    hostSlug: "donk-bet-strategy",
    sourceSlug: "donk-bet-strategy",
    spot: "BTN 오픈 · BB 콜 · 팟 5.5bb · 유효 스택 97.5bb",
    board: ["9♥", "8♥", "7♣"],
    question: "BB가 먼저 행동합니다. BB 레인지 전체로 보면 이 보드에서 어떻게 나눌까요?",
    options: [
      { label: "체크", freq: "76.2%", sourceRow: "체크" },
      { label: "작게 리드 (33% 팟)", freq: "16.8%", sourceRow: "벳 1.8bb (33% 팟)" },
      { label: "크게 리드 (75% 팟)", freq: "6.9%", sourceRow: "벳 4.1bb (75% 팟)" },
    ],
    explain: "A72·K83에서 2%도 안 되던 리드가 23.7%까지 올라옵니다 — 그래도 기본값은 체크이고, 리드의 3분의 2 이상이 작은 사이즈입니다.",
    sourceLabel: "987 투톤 솔버 표 보기",
  },
  {
    id: "3bp-ak2-bb-first",
    hostSlug: "holdem-3bet-strategy",
    sourceSlug: "3bet-pot-cbet",
    spot: "BB 3벳 · BTN 콜 · 팟 22.5bb · 유효 스택 89bb",
    board: ["A♦", "K♠", "2♥"],
    question: "3벳한 BB가 먼저 행동합니다. BB 레인지 전체로 보면?",
    options: [
      { label: "체크", freq: "0.0%", sourceRow: "체크" },
      { label: "작게 벳 (33% 팟)", freq: "57.8%", sourceRow: "벳 7.4bb (33% 팟)" },
      { label: "크게 벳 (66% 팟)", freq: "42.2%", sourceRow: "벳 14.9bb (66% 팟)" },
    ],
    explain: "레인지 전체가 벳합니다 — 체크하는 콤보가 하나도 없습니다. BB가 콜만 했던 A72 싱글 레이즈 팟에서는 체크가 98.2%였습니다(보드도 달라 1:1 비교는 아닙니다).",
    sourceLabel: "AK2 3벳팟 솔버 해설 보기",
  },
];

export function pollById(id: string): Poll | undefined {
  return POLLS.find((p) => p.id === id);
}

/** 독자 선택 %를 보이기 시작하는 투표 수(이보다 적으면 한두 표에 크게 흔들린다) */
export const POLL_MIN_VISIBLE = 20;
