/**
 * 족보 10단계 데이터 — 서버(page.tsx의 JSON-LD)와 클라이언트(hands-client.tsx의 표·카드)가
 * **같은 배열 하나**를 본다.
 *
 * ★2026-08-13 분리 이유: 스키마가 클라이언트에만 있어 실제로는 출력되지 않았다.
 *   `components/seo.tsx`는 `schema` prop을 받기만 하고 렌더하지 않는다(구조분해에 없다) —
 *   라이브 HTML의 ld+json이 루트 layout의 WebSite 1개뿐이었던 원인이다.
 *   JSON-LD는 서버에서 내보내야 크롤러가 본다. 그래서 데이터를 여기로 빼고
 *   page.tsx가 ItemList·BreadcrumbList를 직접 렌더한다.
 *
 * ★prob = 홀덤 실제 조건인 **7장 기준** 확률이다(홀카드 2장 + 보드 5장에서 최강 5장).
 *   필라 `lib/posts.ts` holdem-hand-rankings의 itemList 2026-08-01 검산본을 그대로 이식했다 —
 *   C(52,7)=133,784,560 전수 census로 검산된 값이라 여기서 다시 계산하지 않는다.
 *   🔴 값을 고칠 일이 생기면 **필라와 이 파일을 반드시 함께** 고칠 것. 한 사이트가 같은 족보에
 *   다른 숫자를 말하면 E-E-A-T가 무너진다(CLAUDE.md §13).
 *
 * ⚠ 강약 순위와 출현 빈도는 뒤집힌다: 하이카드는 10위지만 7장에서는 17.4%로
 *   투페어(23.5%)·원페어(43.8%)보다 드물다. 5장 기준(하이카드 50.1%)과 정반대다.
 */
export type HandRank = {
  rank: number;
  name: string;
  description: string;
  /** 홀덤 7장 기준 출현 확률 */
  prob: string;
  example: string[];
  /** UI 전용 — 카드 테두리/배경 */
  color: string;
};

/**
 * FAQ — 화면(`hands-client.tsx`)과 FAQPage JSON-LD(`page.tsx`)가 **같은 배열**을 본다.
 * 스키마에만 있고 본문에 없는 정보는 LLM이 못 읽는다(posting.mdc §GEO).
 *
 * 🔴 **카니발 방지 규율**: 여기 답은 «표를 보는 그 자리의 즉답»으로 끝낸다.
 *   근거·확률 유도·실전 판정은 필라(blog/holdem-hand-rankings)와 전용 글이 소유한다.
 *   설명을 여기서 길게 쓰면 두 페이지가 같은 쿼리를 다시 나눠 먹는다 —
 *   그래서 각 항목이 «한 줄 답 + 자세히는 저쪽» 구조다.
 */
export const FAQS: { q: string; a: string; href?: string; linkLabel?: string }[] = [
  {
    q: "플러시와 풀하우스 중 어느 것이 더 강한가요?",
    a: "풀하우스(4위)가 플러시(5위)보다 강합니다. 7장 기준으로 풀하우스는 2.60%, 플러시는 3.03%라 풀하우스가 더 드뭅니다.",
  },
  {
    q: "스트레이트와 플러시 중에는 뭐가 더 강한가요?",
    a: "플러시가 강합니다. 7장 기준 플러시 3.03% vs 스트레이트 4.62%로 플러시가 더 드물기 때문입니다.",
    href: "/blog/holdem-flush-vs-straight",
    linkLabel: "플러시 vs 스트레이트 자세히 보기",
  },
  {
    q: "스트레이트에서 A는 어떻게 쓰나요?",
    a: "양쪽 끝에 다 씁니다. A-K-Q-J-10이 가장 높은 스트레이트, A-2-3-4-5(휠)가 가장 낮은 스트레이트입니다. 단 K-A-2처럼 A를 사이에 두고 이을 수는 없습니다.",
  },
  {
    q: "족보가 서로 같으면 누가 이기나요?",
    a: "족보를 이루는 카드부터 비교하고, 그것까지 같으면 키커(족보에 쓰이지 않은 나머지 카드)로 가립니다. 다섯 장이 완전히 같으면 팟을 나눕니다(스플릿).",
    href: "/blog/holdem-tiebreak-rules",
    linkLabel: "키커·스플릿 판정 순서 보기",
  },
  {
    q: "홀덤 족보를 빨리 외우는 방법이 있나요?",
    a: "앞 글자만 이어서 «로·스·포·풀·플·스·트·투·원·하»로 외우면 됩니다. 다만 순서의 근거는 희귀도라, 만들기 어려운 족보가 그대로 더 강하다는 것만 이해하면 굳이 암기하지 않아도 됩니다.",
  },
  {
    q: "세븐포커와 홀덤은 족보가 같나요?",
    a: "10단계 순위 자체는 같습니다. 다만 세븐포커는 마운틴·백스트레이트처럼 부르는 이름이 달라 헷갈리기 쉽습니다.",
    href: "/blog/holdem-vs-7poker-hand-rankings",
    linkLabel: "세븐포커와 홀덤 족보 비교",
  },
  {
    q: "무늬(수트)에도 순서가 있나요?",
    a: "공식 텍사스 홀덤에서 무늬는 승패를 가리지 않습니다. 플러시끼리는 숫자로만 비교하고, 다섯 장이 같으면 무늬와 무관하게 스플릿입니다. 「스다하클」은 일부 매장의 하우스 룰입니다.",
  },
];

export const HANDS: HandRank[] = [
  {
    rank: 1,
    name: "로열 플러시 (Royal Flush)",
    description: "같은 무늬의 10, J, Q, K, A — 포커 최강의 패.",
    prob: "0.0032%",
    example: ["A♠", "K♠", "Q♠", "J♠", "10♠"],
    color: "border-primary shadow-[0_0_30px_rgba(212,175,55,0.4)] bg-primary/10",
  },
  {
    rank: 2,
    name: "스트레이트 플러시 (Straight Flush)",
    description: "같은 무늬의 연속된 카드 5장. 로열 플러시 다음으로 강한 패.",
    prob: "0.0279%",
    example: ["9♥", "8♥", "7♥", "6♥", "5♥"],
    color: "border-primary/70 bg-card",
  },
  {
    rank: 3,
    name: "포카드 (Four of a Kind)",
    description: "동일한 숫자 4장. 포카드 중에선 숫자가 높을수록 강합니다.",
    prob: "0.168%",
    example: ["8♣", "8♦", "8♥", "8♠", "K♥"],
    color: "border-border bg-card",
  },
  {
    rank: 4,
    name: "풀하우스 (Full House)",
    description: "트리플(3장)과 원페어(2장)의 결합. 트리플 숫자가 높을수록 강합니다.",
    prob: "2.60%",
    example: ["Q♠", "Q♥", "Q♦", "5♣", "5♠"],
    color: "border-border bg-card",
  },
  {
    rank: 5,
    name: "플러시 (Flush)",
    description: "숫자 무관, 같은 무늬 5장. 최고 카드 숫자가 높을수록 강합니다.",
    prob: "3.03%",
    example: ["A♦", "J♦", "8♦", "6♦", "2♦"],
    color: "border-border bg-card",
  },
  {
    rank: 6,
    name: "스트레이트 (Straight)",
    description: "무늬 무관, 연속된 숫자 5장. A는 최고(A-K-Q-J-10) 또는 최저(A-2-3-4-5)로 사용 가능.",
    prob: "4.62%",
    example: ["7♠", "6♥", "5♣", "4♦", "3♠"],
    color: "border-border bg-card",
  },
  {
    rank: 7,
    name: "트리플 / 쓰리카드 (Three of a Kind)",
    description: "동일한 숫자 3장. 세트(포켓페어+커뮤니티 1장)와 트립스(커뮤니티 페어+홀카드 1장)로 나뉩니다.",
    prob: "4.83%",
    example: ["J♣", "J♠", "J♥", "A♦", "4♠"],
    color: "border-border bg-card",
  },
  {
    rank: 8,
    name: "투페어 (Two Pair)",
    description: "서로 다른 숫자의 페어 2개. 높은 페어 → 낮은 페어 → 키커 순으로 비교합니다.",
    prob: "23.5%",
    example: ["10♠", "10♥", "8♣", "8♦", "A♠"],
    color: "border-border bg-card",
  },
  {
    rank: 9,
    name: "원페어 (One Pair)",
    description: "동일한 숫자 2장. 페어 숫자 → 키커(나머지 카드) 순으로 우열을 가립니다.",
    prob: "43.8%",
    example: ["K♠", "K♦", "9♥", "6♣", "2♠"],
    color: "border-border bg-card",
  },
  {
    rank: 10,
    name: "하이카드 (High Card)",
    description: "아무런 족보도 없을 때, 가장 높은 숫자의 카드로 비교합니다. 에이스 하이카드가 최강.",
    prob: "17.4%",
    example: ["A♣", "Q♠", "9♥", "5♦", "3♣"],
    color: "border-border bg-card",
  },
];
