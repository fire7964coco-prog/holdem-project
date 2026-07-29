/**
 * 대회 일정 데이터 (단일 정본)
 *
 * ★ 이 파일이 유일한 대회 데이터 소스다.
 *   - `/tournaments` 페이지 카드
 *   - Event JSON-LD (구조화 데이터)
 *   둘 다 여기서 읽는다. 예전처럼 두 군데에 날짜를 따로 적어 어긋나는 일이 없어야 한다.
 *
 * ★ status는 직접 적지 않는다. startDate/endDate에서 자동 계산된다.
 *   (2026-07-28에 "WSOP 진행중" 배너가 13일간 묵어 있던 사고의 구조적 방지)
 *
 * ★ 값의 출처·원문 인용·검증 등급은 `docs/tournament-spine.md`에 있다.
 *   값을 고치기 전에 반드시 그 문서의 정본 URL을 먼저 열어볼 것.
 *
 * 검증 등급(sourceTier)
 *   'A' — 작성자가 직접 정본을 열어 원문 확인
 *   'B' — 조사관이 정본 원문 인용 확보 (작성자 미대조)
 *   'C' — 2차 출처(취재매체)만. 정본에 해당 정보 없음
 */

export type TournamentType = "domestic" | "international";
export type TournamentStatus = "upcoming" | "ongoing" | "ended";
export type SourceTier = "A" | "B" | "C";

export interface Tournament {
  id: string;
  name: string;
  type: TournamentType;

  /** ISO 'YYYY-MM-DD'. null이면 상시 개최(status는 항상 ongoing) */
  startDate: string | null;
  endDate: string | null;
  /** 날짜 옆에 덧붙일 부가 설명. 예: "(ME 파이널 8/3~5)" */
  dateNote?: string;
  /** 날짜가 없는 상시 대회의 표시 문구 */
  dateLabelOverride?: string;

  /** 카드 표시용 장소 문자열 */
  location: string;
  /** JSON-LD용 */
  city: string;
  /** ISO 2자리 국가코드 (다국어 확장 시 비자 레이어 조인 키) */
  country: string;
  venue: string;

  /** 카드 표시용 바이인 문자열 */
  buyin: string;

  emoji: string;
  color: string;
  note?: string;
  highlight?: boolean;
  /** 우리 블로그 상세 가이드 */
  blogLink?: string;

  /**
   * ★ 독자에게 링크할 URL.
   * "클릭했을 때 우리 데이터와 같은 내용을 보는 페이지"여야 한다.
   * 공식 사이트라도 낡은 페이지면 링크하지 않는다. (docs/tournament-spine.md §2-1)
   */
  sourceUrl: string | null;
  sourceTier: SourceTier | null;
  /** 'YYYY-MM-DD' — 이 값을 마지막으로 원문 확인한 날 */
  verifiedAt: string | null;

  /** JSON-LD organizer */
  organizer?: { name: string; url: string };
  /** JSON-LD description. 없으면 스키마에서 제외 */
  schemaDescription?: string;
}

/* ────────────────────────────────────────────────────────────
   상태 계산 — 날짜에서 자동 도출. 손으로 적지 않는다.
   ──────────────────────────────────────────────────────────── */

export function computeStatus(t: Tournament, todayISO: string): TournamentStatus {
  if (!t.startDate || !t.endDate) return "ongoing"; // 상시 개최
  if (todayISO < t.startDate) return "upcoming";
  if (todayISO > t.endDate) return "ended";
  return "ongoing";
}

export const STATUS_LABEL: Record<TournamentStatus, string> = {
  upcoming: "예정",
  ongoing: "진행중",
  ended: "종료",
};

/** '2026.08.07~08.16' 형태로 표시 문자열 생성 */
export function formatDateRange(t: Tournament): string {
  if (t.dateLabelOverride) return t.dateLabelOverride;
  if (!t.startDate || !t.endDate) return "";
  const [sy, sm, sd] = t.startDate.split("-");
  const [ey, em, ed] = t.endDate.split("-");
  const base =
    sy === ey ? `${sy}.${sm}.${sd}~${em}.${ed}` : `${sy}.${sm}.${sd}~${ey}.${em}.${ed}`;
  return t.dateNote ? `${base} ${t.dateNote}` : base;
}

/** 카드 상단 월 배지 */
export function formatMonthBadge(t: Tournament): string {
  if (!t.startDate) return "연중";
  const sm = Number(t.startDate.slice(5, 7));
  if (!t.endDate) return `${sm}월`;
  const em = Number(t.endDate.slice(5, 7));
  return sm === em ? `${sm}월` : `${sm}~${em}월`;
}

/* ────────────────────────────────────────────────────────────
   대회 목록
   ★ 순서는 신경 쓰지 말고 추가할 것. 아래에서 시작일 오름차순으로 자동 정렬한다.
     (손으로 순서를 맞추면 반드시 어긋난다 — 실제로 한 번 어긋났다)
   ──────────────────────────────────────────────────────────── */

const RAW_TOURNAMENTS: Tournament[] = [
  {
    id: "kpc-jeju",
    name: "KPC x LPT Series 2026",
    type: "domestic",
    startDate: "2026-01-03",
    endDate: "2026-01-18",
    location: "한국 제주 (LES A Casino)",
    city: "Jeju",
    country: "KR",
    venue: "LES A Casino",
    buyin: "₩90만~",
    emoji: "🃏",
    color: "bg-primary/20 text-primary border-primary/40",
    note: "KPC x LPT 시리즈 + 킹 포커 시리즈 합동 개최",
    // koreapokercup.com은 526 SSL로 다운. KPC 산하 브랜드 부문 kpclive.com에 일정이 게시돼 있다.
    // (개런티·이벤트 수는 공식 미기재 → 적지 않는다)
    sourceUrl: "https://www.kpclive.com/ko-KR",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "aspt-korea",
    name: "ASPT Korea 2026",
    type: "domestic",
    startDate: "2026-01-23",
    endDate: "2026-02-01",
    // ⚠️ 공식 페이지(aspt.world)에 베뉴 표기가 없다. 추측으로 채우지 않는다.
    location: "한국 (베뉴 공식 미기재)",
    city: "Incheon",
    country: "KR",
    venue: "공식 미기재",
    buyin: "메인 ₩150만",
    emoji: "🏙️",
    color: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    note: "90개+ 토너먼트 · 메인이벤트 Day 1A 바이인 1,500,000",
    sourceUrl: "https://aspt.world/events/aspt-korea-2026/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "apt-jeju-classic",
    name: "APT 제주 클래식 2026",
    type: "domestic",
    startDate: "2026-01-30",
    endDate: "2026-02-08",
    location: "한국 제주 (신화월드 LES A)",
    city: "Jeju",
    country: "KR",
    venue: "LES A Casino, Jeju Shinhwa World",
    buyin: "메인 ₩230만",
    emoji: "🌴",
    color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    note: "한국 개최 국제 대회 사상 최대 — 1,718 엔트리 (종전 1,693 경신)",
    sourceUrl:
      "https://www.theasianpokertour.com/series/apt-jeju-classic-south-korea-2026/events",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
    organizer: { name: "Asian Poker Tour", url: "https://www.theasianpokertour.com" },
  },
  {
    id: "ept-paris",
    name: "EPT 파리 2026",
    type: "international",
    startDate: "2026-02-18",
    endDate: "2026-03-01",
    location: "프랑스 파리 (Le Palais des Congrès)",
    city: "Paris",
    country: "FR",
    venue: "Le Palais des Congrès",
    buyin: "€825~€100,000",
    emoji: "🇫🇷",
    color: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
    note: "메인이벤트 €5,300 (2/23~3/1)",
    sourceUrl: "https://www.pokerstarslive.com/ept/paris/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "triton-jeju-1",
    name: "Triton 제주 2026 (ONE + SHR)",
    type: "domestic",
    startDate: "2026-03-05",
    endDate: "2026-04-01",
    location: "한국 제주 (LES A Casino)",
    city: "Jeju",
    country: "KR",
    venue: "LES A Casino, Jeju Shinhwa World",
    buyin: "$2,000~$150,000",
    emoji: "💎",
    color: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    note: "ONE 3/5~15 + Super High Roller Series 3/15~4/1 · SHRS 타이틀 스폰서 Jupiter Exchange",
    // ⚠️ 종료된 대회라 공식 페이지에서 전체 스케줄이 내려갔다(결과 3건만 노출).
    //    날짜·바이인 범위는 조사관 확인분 — 작성자 직접 대조 미완료
    sourceUrl: "https://tritonpokerseries.com/en-US/events/Triton_SHRS_Jeju_S5",
    sourceTier: "B",
    verifiedAt: "2026-07-29",
  },
  {
    id: "wsope",
    name: "WSOP Europe 2026",
    type: "international",
    // ★ 정정: 종료일 04.10 → 04.12 / 베뉴 King's Resort Rozvadov → Hilton Prague
    startDate: "2026-03-31",
    endDate: "2026-04-12",
    location: "체코 프라하 (Hilton Prague)",
    city: "Prague",
    country: "CZ",
    venue: "Hilton Prague (King's Casino Prague 운영)",
    buyin: "€5,300 (메인)",
    emoji: "🇨🇿",
    color: "bg-red-500/15 text-red-400 border-red-500/30",
    note: "로즈바도프 King's Resort를 떠나 프라하 힐튼으로 이전 · 브레이슬릿 15개",
    sourceUrl: "https://www.wsop.com/tournaments/2026-wsop-europe/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "ajpc-incheon-1",
    name: "AJPC 사무라이 서킷 인천 1차",
    type: "domestic",
    startDate: "2026-04-10",
    endDate: "2026-04-19",
    // 공식(samurai.ajpc.jp)은 지역·날짜만 표기하고 베뉴는 적지 않는다
    location: "한국 인천",
    city: "Incheon",
    country: "KR",
    venue: "공식 미기재",
    buyin: "다양",
    emoji: "⛩️",
    color: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    sourceUrl: "https://samurai.ajpc.jp/en/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "apt-taipei",
    name: "APT Taipei 2026",
    type: "international",
    startDate: "2026-04-22",
    endDate: "2026-05-03",
    location: "대만 타이베이 (Red Space + Asia Poker Arena)",
    city: "Taipei",
    country: "TW",
    venue: "Red Space 多元商務空間 / Asia Poker Arena",
    buyin: "TWD 3,000~800,000",
    emoji: "🇹🇼",
    color: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    note: "메인 #54 TWD 55,000 / TWD 70,000,000 GTD · 투어 20년 역사상 최대 비(非)챔피언십 페스티벌 (26,009 엔트리)",
    sourceUrl: "https://www.theasianpokertour.com/series/apt-taipei-taiwan-2026/events",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "ept-montecarlo",
    name: "EPT 몬테카를로 2026",
    type: "international",
    startDate: "2026-04-30",
    endDate: "2026-05-10",
    location: "모나코 (Sporting Monte-Carlo)",
    city: "Monte Carlo",
    country: "MC",
    venue: "Sporting Monte-Carlo",
    buyin: "€1,650~€250,000",
    emoji: "🎰",
    color: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    note: "메인이벤트 €5,300 (5/4~10) · €250,000 슈퍼 하이롤러 편성",
    sourceUrl: "https://www.pokerstarslive.com/ept/montecarlo/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "ajpc-taipei",
    name: "AJPC 사무라이 서킷 타이베이",
    type: "international",
    startDate: "2026-05-11",
    endDate: "2026-05-18",
    // 공식은 지역·날짜만 표기하고 베뉴는 적지 않는다
    location: "대만 타이베이",
    city: "Taipei",
    country: "TW",
    venue: "공식 미기재",
    buyin: "다양",
    emoji: "⛩️",
    color: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    sourceUrl: "https://samurai.ajpc.jp/en/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "triton-montenegro",
    name: "Triton SHR 몬테네그로 2026",
    type: "international",
    startDate: "2026-05-13",
    endDate: "2026-05-28",
    location: "몬테네그로 부드바 (Maestral Resort)",
    city: "Budva",
    country: "ME",
    venue: "Maestral Resort & Casino, Pržno",
    buyin: "$25,000~$200,000",
    emoji: "💎",
    color: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    note: "$200K Invitational 상금풀 $27.4M · 메인이벤트 우승 Danny Tang $3,522,000",
    // ⚠️ 종료된 대회라 공식 페이지에서 이벤트 목록이 내려갔다.
    //    날짜·베뉴·바이인은 조사관 확인분 — 작성자 직접 대조 미완료
    sourceUrl: "https://tritonpokerseries.com/en-US/events/Triton_SHRS_Montenegro_S5",
    sourceTier: "B",
    verifiedAt: "2026-07-29",
  },
  {
    id: "gop-incheon-1",
    name: "GOP 인천 2026 (The Prophecy Unfolds)",
    type: "domestic",
    startDate: "2026-05-15",
    endDate: "2026-05-24",
    location: "한국 인천 (파라다이스 시티)",
    city: "Incheon",
    country: "KR",
    venue: "Paradise City Casino",
    buyin: "메인 ₩220만",
    emoji: "⚡",
    color: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    note: "메인이벤트 개런티 ₩7억 (시리즈 총액 아님)",
    sourceUrl: "https://godsofpoker.com/series/incheon-2026",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "holdem-masters-7",
    name: "제7회 홀덤 마스터스",
    type: "domestic",
    startDate: "2026-05-29",
    endDate: "2026-08-02",
    location: "한국 서울 (야자수 서울센터)",
    city: "Seoul",
    country: "KR",
    venue: "야자수 서울센터",
    buyin: "초대권 전용 (현금 바이인 없음)",
    emoji: "👑",
    color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    note: "총상금 15억 GTD · 챌린저스 결승 8/1 · 챔피언스 결승 8/2",
    highlight: true,
    blogLink: "/blog/holdem-masters-7th-guide",
    sourceUrl: "https://wpl.winjoygame.com/holdem-masters-7",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
    organizer: { name: "WeLive", url: "https://wpl.winjoygame.com" },
    schemaDescription:
      "후원 WPL · 주관 WeLive · 협력 YAJASU. 총상금 15억원 보장, 초대권 전용 참가.",
  },
  {
    id: "wsop-2026",
    name: "제57회 WSOP 2026",
    type: "international",
    startDate: "2026-05-26",
    endDate: "2026-08-05",
    dateNote: "(ME 파이널 8/3~5)",
    location: "미국 라스베이거스 (Horseshoe & Paris)",
    city: "Las Vegas",
    country: "US",
    venue: "Horseshoe Las Vegas / Paris Las Vegas",
    buyin: "$300~$250,000",
    emoji: "🏆",
    color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    note: "브레이슬릿 100개는 7/15 종료 · 메인이벤트 파이널 테이블만 8/3~5 (ESPN)",
    highlight: true,
    blogLink: "/blog/wsop-2026-tournament-guide",
    sourceUrl:
      "https://www.wsop.com/tournaments/2026-57th-annual-world-series-of-poker/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
    organizer: { name: "WSOP", url: "https://www.wsop.com" },
    schemaDescription:
      "세계 최대 홀덤 대회. 브레이슬릿 100개 5/26~7/15, 메인이벤트 9,208 엔트리·상금풀 $85,634,400, 파이널 테이블 8/3~5 ESPN 중계.",
  },
  {
    id: "kpc-king-july",
    name: "K Poker Cup + King Poker Cup 2026",
    type: "domestic",
    startDate: "2026-07-25",
    endDate: "2026-08-10",
    location: "한국 제주 (LES A Casino)",
    city: "Jeju",
    country: "KR",
    venue: "LES A Casino",
    buyin: "~₩700만 (하이롤러)",
    emoji: "🃏",
    color: "bg-primary/20 text-primary border-primary/40",
    note: "17일 페스티벌 · 총 20억 GTD · 7/25~8/4 K Poker Cup → 8/3부터 King Poker Cup(메인 11억 GTD)",
    highlight: true,
    sourceUrl: "https://www.kpclive.com/ko-KR",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
    organizer: { name: "K Poker Cup", url: "https://www.kpclive.com" },
    schemaDescription:
      "제주 LES A Casino에서 열리는 17일 포커 페스티벌. 총 20억원 보장, King Poker Cup 메인이벤트 11억 GTD.",
  },
  {
    id: "apt-incheon",
    name: "APT 인천 2026",
    type: "domestic",
    startDate: "2026-08-07",
    endDate: "2026-08-16",
    location: "한국 인천 (파라다이스 시티)",
    city: "Incheon",
    country: "KR",
    venue: "Paradise City Casino",
    buyin: "메인 ₩250만",
    emoji: "🇰🇷",
    color: "bg-primary/20 text-primary border-primary/40",
    note: "총 40억원+ 보장 · 메인이벤트 8/9~15 (15억 GTD) · APTC 시트 9석",
    highlight: true,
    blogLink: "/blog/apt-incheon-2026-guide",
    sourceUrl:
      "https://www.theasianpokertour.com/series/apt-incheon-south-korea-2026/events",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
    organizer: { name: "Asian Poker Tour", url: "https://www.theasianpokertour.com" },
    schemaDescription:
      "아시아 최대 홀덤 투어 APT의 2026 인천 스톱. 파라다이스 시티 개최, 총 40억원+ 보장, 메인이벤트 15억 GTD.",
  },
  {
    id: "ept-barcelona",
    name: "EPT 바르셀로나 2026",
    type: "international",
    startDate: "2026-08-16",
    endDate: "2026-08-29",
    location: "스페인 바르셀로나 (Casino Barcelona)",
    city: "Barcelona",
    country: "ES",
    venue: "Casino Barcelona",
    buyin: "€825~€100,000",
    emoji: "🇪🇸",
    color: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    note: "듀얼 페스티벌 — PokerStars Open ME €1,650 (8/16~22) → EPT ME €5,300 (8/22~29)",
    sourceUrl: "https://www.pokerstarslive.com/ept/barcelona/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "gop-manila",
    name: "GOP Manila 2026 (The Arena of Champions)",
    type: "international",
    startDate: "2026-08-21",
    endDate: "2026-08-30",
    location: "필리핀 마닐라 (City of Dreams)",
    city: "Manila",
    country: "PH",
    venue: "City of Dreams Manila",
    buyin: "₱11,000~₱682,500",
    emoji: "🇵🇭",
    color: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    note: "시리즈 개런티 ₱60,000,000 · 메인이벤트 ₱30M GTD",
    sourceUrl: "https://godsofpoker.com/series/manila-2026",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "ajpc-incheon-2",
    name: "AJPC 사무라이 서킷 인천 2차",
    type: "domestic",
    startDate: "2026-08-21",
    endDate: "2026-08-30",
    location: "한국 인천",
    city: "Incheon",
    country: "KR",
    venue: "미정 (공식 미기재)",
    buyin: "다양",
    emoji: "⛩️",
    color: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    sourceUrl: "https://samurai.ajpc.jp/en/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "holdem-masters-8",
    name: "제8회 홀덤 마스터스",
    type: "domestic",
    startDate: "2026-08-03",
    endDate: "2026-10-05",
    location: "한국 서울 (야자수 서울센터)",
    city: "Seoul",
    country: "KR",
    venue: "야자수 서울센터",
    buyin: "초대권 전용",
    emoji: "👑",
    color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    note: "총상금 20억 GTD — 역대 최대 · 메인이벤트 18억 + NLH 딥스택 5개",
    highlight: true,
    sourceUrl: "https://wpl.winjoygame.com/holdem-masters-8",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
    organizer: { name: "WeLive", url: "https://wpl.winjoygame.com" },
    schemaDescription:
      "제8회 홀덤 마스터스. 총상금 20억원 보장으로 시리즈 역대 최대. 메인이벤트 18억 GTD.",
  },
  {
    id: "appt-korea",
    name: "APPT 코리아 2026",
    type: "domestic",
    startDate: "2026-09-03",
    endDate: "2026-09-14",
    location: "한국 인천 (파라다이스 시티)",
    city: "Incheon",
    country: "KR",
    venue: "Paradise City",
    buyin: "₩350K~₩5M",
    emoji: "♠️",
    color: "bg-teal-500/15 text-teal-400 border-teal-500/30",
    note: "메인이벤트 9/10~14 — ₩180만 바이인 · ₩10억 GTD",
    highlight: true,
    blogLink: "/blog/appt-korea-2026-guide",
    sourceUrl: "https://www.pokerstarslive.com/appt/korea/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
    organizer: { name: "PokerStars LIVE", url: "https://www.pokerstarslive.com/appt/" },
    schemaDescription:
      "PokerStars APPT의 2026 한국 스톱. 파라다이스 시티 인천 개최, 메인이벤트 ₩10억 보장.",
  },
  {
    id: "triton-jeju-2",
    name: "Triton SHR 제주 II 2026",
    type: "domestic",
    startDate: "2026-09-04",
    endDate: "2026-09-17",
    location: "한국 제주 (LES A Casino)",
    city: "Seogwipo",
    country: "KR",
    venue: "LES A Casino, Jeju Shinhwa World",
    buyin: "$15,000~$200,000",
    emoji: "💎",
    color: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    note: "14개 하이롤러 · 새틀라이트 없음(추천제) · $200K Invitational 9/12~14",
    sourceUrl: "https://tritonpokerseries.com/en-US/events/Triton_SHRS_Jeju_II_S5",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
    organizer: { name: "Triton Poker Series", url: "https://tritonpokerseries.com" },
    schemaDescription:
      "Triton Super High Roller Series 제주 2차. 14개 하이롤러 토너먼트, 바이인 $15,000~$200,000.",
  },
  {
    id: "gop-taipei-2",
    name: "GOP Taipei II (The Trial of Wisdom)",
    type: "international",
    startDate: "2026-09-18",
    endDate: "2026-09-27",
    location: "대만 타이베이 (CTP Asia Poker Arena)",
    city: "Taipei",
    country: "TW",
    venue: "CTP Asia Poker Arena",
    buyin: "다양",
    emoji: "🇹🇼",
    color: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    sourceUrl: "https://godsofpoker.com/series/taipei-2026-ii",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "apt-jeju-fall",
    name: "APT 제주 2026 (가을)",
    type: "domestic",
    startDate: "2026-09-25",
    endDate: "2026-10-07",
    location: "한국 제주 (신화월드 LES A)",
    city: "Jeju",
    country: "KR",
    venue: "LES A Casino, Jeju Shinhwa World",
    buyin: "메인 ₩270만",
    emoji: "🌴",
    color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    note: "136개 이벤트 · 메인이벤트 22억 GTD · APTC 시트 12석",
    highlight: true,
    blogLink: "/blog/apt-jeju-2026-fall-guide",
    sourceUrl: "https://www.theasianpokertour.com/series/apt-jeju-south-korea-2026/events",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
    organizer: { name: "Asian Poker Tour", url: "https://www.theasianpokertour.com" },
    schemaDescription:
      "APT의 2026 제주 가을 스톱. 136개 이벤트, 메인이벤트 22억원 보장.",
  },
  {
    id: "gop-incheon-2",
    name: "GOP Incheon II (The Labyrinth Trail)",
    type: "domestic",
    startDate: "2026-10-30",
    endDate: "2026-11-08",
    location: "한국 인천 (파라다이스 시티)",
    city: "Incheon",
    country: "KR",
    venue: "Paradise City Casino",
    buyin: "다양",
    emoji: "⚡",
    color: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    note: "같은 기간 영종도에서 WPT Seoul도 동시 개최 (베뉴 다름)",
    sourceUrl: "https://godsofpoker.com/series/incheon-2026-ii",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "wpt-seoul",
    name: "WPT Seoul 2026",
    type: "domestic",
    startDate: "2026-10-30",
    endDate: "2026-11-09",
    location: "한국 인천 영종도 (INSPIRE)",
    city: "Incheon",
    country: "KR",
    venue: "YY Poker Club, INSPIRE Entertainment Resort",
    buyin: "₩30만~₩800만",
    emoji: "🌟",
    color: "bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30",
    note: "46개 이벤트 · 메인 11/5~9 (₩175만, 10억 GTD) · 70테이블 신설 포커룸",
    highlight: true,
    // ⚠️ worldpokertour.com은 Cloudflare 403이라 독자도 못 열 수 있음
    //    → INSPIRE 공식 보도자료를 정본으로 승격 (docs/tournament-spine.md §2-1)
    sourceUrl: "https://prtimes.jp/main/html/rd/p/000000091.000128436.html",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
    organizer: { name: "World Poker Tour", url: "https://www.worldpokertour.com" },
    schemaDescription:
      "WPT가 INSPIRE 엔터테인먼트 리조트에서 처음 개최하는 대회. 46개 이벤트, 메인이벤트 ₩10억 보장.",
  },
  {
    id: "apt-championship",
    name: "APT 챔피언십 2026",
    type: "international",
    // 정본 시리즈 페이지 헤더는 "12 Nov to 29 Nov". 11/12 첫 이벤트(#1000 Event 0)는
    // "restricted to casino employees and poker industry persons only" — 일반 참가자는 11/13부터.
    // 원칙(정본 우선)에 따라 11-12를 쓰고 note로 구분한다.
    startDate: "2026-11-12",
    endDate: "2026-11-29",
    location: "대만 타이베이 (Red Space + Asia Poker Arena)",
    city: "Taipei",
    country: "TW",
    venue: "Red Space 多元商務空間 / Asia Poker Arena",
    buyin: "TWD 3,300~1,500,000",
    emoji: "👑",
    color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    note: "210개 트로피 이벤트 · 메인 #14 TWD 311.9K / TWD 165,000,000 GTD (11/23~) · 11/12는 업계 관계자 전용, 일반 참가자는 11/13부터",
    sourceUrl: "https://www.theasianpokertour.com/series/apt-championship-taipei-2026",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "wsop-paradise",
    name: "WSOP Paradise 2026",
    type: "international",
    // ★ 정정: 12.01~12.18 → 12.03~12.17 (공식 대회 페이지 기준)
    startDate: "2026-12-03",
    endDate: "2026-12-17",
    location: "바하마 나소 (Baha Mar)",
    city: "Nassau",
    country: "BS",
    venue: "Baha Mar Resort",
    buyin: "미발표",
    emoji: "🏝️",
    color: "bg-teal-500/15 text-teal-400 border-teal-500/30",
    note: "Atlantis에서 Baha Mar로 이전 · 상세 일정 미발표",
    // ⚠️ wsop.com/paradise/ 랜딩은 아직 2025년 정보(Atlantis) 표시 → 대회 페이지로 링크
    sourceUrl: "https://www.wsop.com/tournaments/2026-wsop-paradise/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "ept-prague",
    name: "EPT 프라하 2026",
    type: "international",
    startDate: "2026-12-02",
    endDate: "2026-12-13",
    location: "체코 프라하 (Hilton Prague)",
    city: "Prague",
    country: "CZ",
    venue: "Hilton Hotel Prague",
    buyin: "€1,650~€5,300",
    emoji: "🇨🇿",
    color: "bg-red-500/15 text-red-400 border-red-500/30",
    note: "듀얼 페스티벌 — PokerStars Open ME €1,650 (12/2~7) → EPT ME €5,300 (12/7~13)",
    sourceUrl: "https://www.pokerstarslive.com/ept/prague/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "gop-jeju",
    name: "GOP Jeju 2026 (The Olympus Return)",
    type: "domestic",
    startDate: "2026-12-04",
    endDate: "2026-12-13",
    location: "한국 제주 (신화월드 LES A)",
    city: "Jeju",
    country: "KR",
    venue: "LES A Casino, Jeju Shinhwa World",
    buyin: "다양",
    emoji: "⚡",
    color: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    sourceUrl: "https://godsofpoker.com/series",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  /* ── 🇯🇵 일본 JOPT — 한국에서 2~3시간, 아시아 최대급 필드 ────────── */
  {
    id: "jopt-fukuoka-1",
    name: "JOPT 2026 Fukuoka #01",
    type: "international",
    startDate: "2026-07-30",
    endDate: "2026-08-02",
    location: "일본 후쿠오카 (UNITEDLAB)",
    city: "Fukuoka",
    country: "JP",
    venue: "UNITEDLAB, Daimyo",
    buyin: "¥2,000~¥300,000",
    emoji: "🇯🇵",
    color: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    note: "JOPT 사상 첫 후쿠오카 개최 · 메인이벤트 ¥15,000,000 GTD",
    sourceUrl: "https://japanopenpoker.com/events/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "jopt-sapporo-2",
    name: "JOPT 2026 Sapporo #02",
    type: "international",
    startDate: "2026-09-18",
    endDate: "2026-09-23",
    location: "일본 삿포로",
    city: "Sapporo",
    country: "JP",
    venue: "サッポロファクトリーホール",
    buyin: "¥3,000~¥200,000",
    emoji: "🇯🇵",
    color: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    sourceUrl: "https://japanopenpoker.com/events/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "jopt-tokyo-3",
    name: "JOPT 2026 Tokyo #03",
    type: "international",
    startDate: "2026-10-08",
    endDate: "2026-10-12",
    location: "일본 도쿄 (베르사르 다카다노바바)",
    city: "Tokyo",
    country: "JP",
    venue: "ベルサール高田馬場, 新宿区",
    buyin: "다양",
    emoji: "🇯🇵",
    color: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    sourceUrl: "https://japanopenpoker.com/events/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "jopt-osaka-2",
    name: "JOPT 2026 Osaka #02",
    type: "international",
    startDate: "2026-10-29",
    endDate: "2026-11-03",
    location: "일본 오사카 (도지마 리버 포럼)",
    city: "Osaka",
    country: "JP",
    venue: "堂島リバーフォーラム",
    buyin: "다양",
    emoji: "🇯🇵",
    color: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    sourceUrl: "https://japanopenpoker.com/events/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "jopt-tokyo-2027-1",
    name: "JOPT 2027 Tokyo #01",
    type: "international",
    startDate: "2026-12-24",
    endDate: "2027-01-03",
    location: "일본 도쿄 (베르사르 다카다노바바)",
    city: "Tokyo",
    country: "JP",
    venue: "ベルサール高田馬場, 新宿区",
    buyin: "다양",
    emoji: "🇯🇵",
    color: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    note: "연말연시 개최 — 2027 시즌 개막전",
    sourceUrl: "https://japanopenpoker.com/events/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },

  /* ── 🇵🇭 마닐라 (Okada) — PokerStars Live 아시아 거점 ────────── */
  {
    id: "appt-manila",
    name: "APPT Manila 2026",
    type: "international",
    startDate: "2026-07-28",
    endDate: "2026-08-10",
    location: "필리핀 마닐라 (Okada Manila)",
    city: "Parañaque",
    country: "PH",
    venue: "Cove Manila, Okada Manila",
    buyin: "₱9,000~₱300,000",
    emoji: "🇵🇭",
    color: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    note: "총 ₱132M+ 보장 · 메인이벤트 8/6~10 (₱80,000 / ₱60M GTD)",
    sourceUrl: "https://www.pokerstarslive.com/appt/manila/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
    organizer: { name: "PokerStars LIVE", url: "https://www.pokerstarslive.com/appt/" },
    schemaDescription:
      "PokerStars APPT의 2026 마닐라 스톱. Okada Manila 개최, 총 ₱132M 보장.",
  },
  {
    id: "manila-super-series-24",
    name: "Manila Super Series 24",
    type: "international",
    startDate: "2026-09-18",
    endDate: "2026-09-27",
    location: "필리핀 마닐라 (Okada Manila)",
    city: "Parañaque",
    country: "PH",
    venue: "Okada Manila",
    buyin: "공식 미기재",
    emoji: "🇵🇭",
    color: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    sourceUrl: "https://www.pokerstarslive.com/appt/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "appt-manila-championship",
    name: "APPT Manila Championship",
    type: "international",
    startDate: "2026-10-08",
    endDate: "2026-10-19",
    location: "필리핀 마닐라 (Okada Manila)",
    city: "Parañaque",
    country: "PH",
    venue: "Coral Lounge, Okada Manila",
    buyin: "₱3,500~₱500,000",
    emoji: "🇵🇭",
    color: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    note: "APPT 시즌 피날레 · 총 ₱116.75M 보장 · 메인 10/15~19 (₱165,000 / ₱60M GTD)",
    sourceUrl: "https://www.pokerstarslive.com/appt/manilachampionship/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },
  {
    id: "manila-megastack-25",
    name: "Manila Megastack 25",
    type: "international",
    startDate: "2026-11-28",
    endDate: "2026-12-07",
    location: "필리핀 마닐라 (Okada Manila)",
    city: "Parañaque",
    country: "PH",
    venue: "Okada Manila",
    buyin: "공식 미기재",
    emoji: "🇵🇭",
    color: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    sourceUrl: "https://www.pokerstarslive.com/appt/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },

  /* ── 🇻🇳 베트남 — 가성비 원정지 ────────── */
  {
    id: "usop-vietnam-2",
    name: "USOP Vietnam 2026 (하롱베이)",
    type: "international",
    startDate: "2026-08-27",
    endDate: "2026-09-09",
    location: "베트남 하롱베이 (InterContinental)",
    city: "Ha Long",
    country: "VN",
    venue: "InterContinental Halong Resort",
    buyin: "₫2,300,000~₫152,000,000",
    emoji: "🇻🇳",
    color: "bg-lime-500/15 text-lime-400 border-lime-500/30",
    note: "90개+ 이벤트 · 메인이벤트 9/5~9 (₫30,000,000 / ₫30 Billion GTD)",
    sourceUrl:
      "https://userieschampionship.com/tournament/vietnam-series-2026-halong-v2/",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },

  /* ── 🇦🇺 호주 ────────── */
  {
    id: "wpt-australia",
    name: "WPT Australia 2026",
    type: "international",
    startDate: "2026-09-10",
    endDate: "2026-09-30",
    location: "호주 시드니 (The Star Sydney)",
    city: "Sydney",
    country: "AU",
    venue: "The Star Sydney",
    buyin: "AUD $1,150~$5,000",
    emoji: "🇦🇺",
    color: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    note: "36개 이벤트 · Prime Championship AUD $1,500 + Championship AUD $5,000",
    sourceUrl: "https://www.starpoker.com.au/wpt-australia",
    sourceTier: "A",
    verifiedAt: "2026-07-29",
  },

  /* ── 🇨🇾 북키프로스 Triton ────────── */
  {
    id: "triton-one-cyprus",
    name: "Triton ONE 북키프로스 2026",
    type: "international",
    startDate: "2026-11-04",
    endDate: "2026-11-15",
    location: "북키프로스 키레니아 (Merit Royal Diamond)",
    city: "Kyrenia",
    country: "CY",
    venue: "Merit Royal Diamond Hotel & Casino",
    buyin: "공식 미기재",
    emoji: "💎",
    color: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    // ⚠️ Triton 공식 이벤트 페이지가 "Coming Soon" 상태라 상세 미공개. 날짜는 2차 출처 확인분
    sourceUrl: "https://tritonpokerseries.com/en-US/events",
    sourceTier: "B",
    verifiedAt: "2026-07-29",
  },
  {
    id: "triton-shrs-cyprus",
    name: "Triton SHR 북키프로스 2026",
    type: "international",
    startDate: "2026-11-15",
    endDate: "2026-11-28",
    location: "북키프로스 키레니아 (Merit Royal Diamond)",
    city: "Kyrenia",
    country: "CY",
    venue: "Merit Royal Diamond Hotel & Casino",
    buyin: "$25,000~$150,000",
    emoji: "💎",
    color: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    note: "Triton ONE 종료 직후 연속 개최 — 시즌 최종 스톱",
    // ⚠️ 공식 이벤트 페이지 "Coming Soon". 바이인 범위는 2차 출처 확인분
    sourceUrl: "https://tritonpokerseries.com/en-US/events",
    sourceTier: "B",
    verifiedAt: "2026-07-29",
  },

  {
    id: "wpt-world-championship",
    name: "WPT 월드 챔피언십",
    type: "international",
    // ★ 2026년 날짜는 공식 미발표. (12/2~12/22는 2025년 날짜이므로 쓰지 않는다)
    startDate: null,
    endDate: null,
    dateLabelOverride: "2026.12 예정 (날짜 미발표)",
    location: "미국 라스베이거스 (Wynn)",
    city: "Las Vegas",
    country: "US",
    venue: "Wynn Las Vegas",
    buyin: "미발표",
    emoji: "🌎",
    color: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    note: "2026년 일정 미발표 — 베뉴(Wynn) 공식 포커 페이지에도 WPT 언급이 없다",
    // ⚠️ 링크할 정본이 없다. worldpokertour.com은 Cloudflare 403이고,
    //    Wynn 공식 포커 페이지에는 WPT 관련 내용이 전혀 없어 링크하면 독자를 오도한다.
    sourceUrl: null,
    sourceTier: null,
    verifiedAt: "2026-07-29",
  },
];

/**
 * 시작일 오름차순 정렬. 날짜 없는 상시 대회(HPL 등)는 맨 뒤.
 * 배열에 추가할 때 위치를 신경 쓸 필요가 없다.
 */
export const TOURNAMENTS: Tournament[] = [...RAW_TOURNAMENTS].sort((a, b) => {
  if (!a.startDate && !b.startDate) return 0;
  if (!a.startDate) return 1;
  if (!b.startDate) return -1;
  return a.startDate < b.startDate ? -1 : a.startDate > b.startDate ? 1 : 0;
});

/** id 중복은 React key 충돌을 일으키므로 빌드 시점에 잡는다 */
{
  const seen = new Set<string>();
  for (const t of RAW_TOURNAMENTS) {
    if (seen.has(t.id)) throw new Error(`[tournaments] id 중복: "${t.id}"`);
    seen.add(t.id);
  }
}

/* ────────────────────────────────────────────────────────────
   Event JSON-LD 자동 생성
   ★ 예전엔 3개를 손으로 적었으나 실제로는 렌더조차 되지 않았다.
     이제 데이터에서 자동 생성하고, 종료된 대회는 제외한다.
   ──────────────────────────────────────────────────────────── */

export function buildEventSchemas(todayISO: string) {
  return TOURNAMENTS.filter(
    (t) =>
      t.startDate &&
      t.endDate &&
      t.schemaDescription && // 설명이 준비된 것만
      computeStatus(t, todayISO) !== "ended", // 끝난 행사는 구조화 데이터에서 제외
  ).map((t) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: t.name,
    description: t.schemaDescription,
    startDate: t.startDate,
    endDate: t.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: t.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: t.city,
        addressCountry: t.country,
      },
    },
    ...(t.organizer && {
      organizer: { "@type": "Organization", name: t.organizer.name, url: t.organizer.url },
    }),
    ...(t.sourceUrl && { url: t.sourceUrl }),
  }));
}
