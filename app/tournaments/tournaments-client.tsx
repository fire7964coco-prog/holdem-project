"use client";

import { useState } from "react";
import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, Globe, MapPin, Calendar, Users, DollarSign, ChevronRight, Star, Info, BookOpen, Target, Zap, ExternalLink } from "lucide-react";
import {
  TOURNAMENTS,
  computeStatus,
  formatDateRange,
  formatMonthBadge,
  buildEventSchemas,
  STATUS_LABEL,
} from "@/lib/tournaments";
/** 2026 한국 개최 행 수 — 손으로 적지 않는다(«13개+»가 목록 11개·일정표 17행과 셋 다 달랐다 · M-082). */
const KR_2026 = TOURNAMENTS.filter((t) => t.country === "KR" && (t.startDate ?? "").startsWith("2026")).length;
/**
 * 히어로 문장·메타를 만드는 단일 소스. layout.tsx의 generateMetadata도 같은 함수를 쓴다.
 * ★todayISO는 반드시 서버에서 내려온 prop을 넘긴다 — 여기서 new Date()를 부르면
 *   하이드레이션 불일치가 난다(page.tsx 주석 참조).
 */
import { buildHeroLine, buildMetaTitle, buildMetaDescription } from "@/lib/tournaments-digest";

const DOMESTIC = [
  {
    // 🔴 2026-09-03 M-082(검수장 2회차 §3): 「KPT (Korea Poker Tour)」는 스파인 0건·공식 페이지 0 — 정체를 확인할 수 없는 브랜드였다.
    //    NHN 공식 뉴스룸(inside.nhn.com/news/956 · 2026-07-10)이 실재하는 HPT로 교체. 값은 그 원문 축어(lib/tournaments.ts `hpt-5`와 동일 출처).
    id: "hpt",
    name: "HPT (Hangame Poker Tour)",
    badge: "내국인 참가 가능",
    badgeColor: "bg-primary/20 text-primary border-primary/40",
    emoji: "🏆",
    desc: "NHN 「한게임 로얄홀덤」이 여는 국내 오프라인 홀덤 투어. 온라인 새틀라이트 토너먼트에서 참가권을 따 오프라인 메인이벤트에 나가는 구조로, 제5회(2026)는 9월 11~13일 스위스 그랜드 호텔 컨벤션센터에서 열리고 총상금 16억 원이 빗썸 계좌를 통해 원화로 지급됩니다. 카지노가 아닌 호텔 컨벤션 베뉴라 일반 한국 국적자도 참가할 수 있는 국내 대회입니다.",
    details: [
      { label: "개최 시기", value: "제5회 2026-09-11~13 (새틀 7/10~9/10)" },
      { label: "바이인", value: "온라인 새틀라이트 참가권 2장 (현금 바이인 없음)" },
      { label: "형식", value: "No-Limit Texas Hold'em" },
      { label: "특징", value: "온라인 새틀 → 오프라인 결선 · 총상금 16억 원" },
    ],
    tip: "새틀라이트는 7/10~9/10 매일 4회(17:30·19:30·21:30·23:30) 「한게임 로얄홀덤」에서 열리고 별도 신청 없이 참여할 수 있습니다. 토너먼트당 오프라인 참가권 29장 — 상위 20명 1장, TOP9은 1장 추가.",
    link: "https://inside.nhn.com/news/956",
  },
  {
    id: "pmang",
    // 2026-09-03 M-082(검수장 2회차 §1-1·§3): 운영사는 ㈜네오위즈(pmang 운영정책 축어) · 공식 명칭은 «피망 쇼다운»(공지 6273 「피망 쇼다운입니다 … 오프라인 대회 진출권을 획득할 수 있는 온라인 새틀라이트」).
    name: "피망 쇼다운",
    badge: "네오위즈 공식 운영",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    emoji: "🃏",
    desc: "네오위즈가 운영하는 피망 포커의 공식 온라인 홀덤 대회. 별도 장비 없이 PC·모바일에서 참가할 수 있고, 게임머니(비환금) 기반으로 운영됩니다. 오프라인 대회 진출권을 거는 온라인 새틀라이트가 함께 열립니다.",
    details: [
      { label: "플랫폼", value: "피망 포커 (PC·모바일)" },
      { label: "바이인", value: "게임머니 기반 (무료 가능)" },
      { label: "형식", value: "No-Limit Texas Hold'em" },
      { label: "특징", value: "실명 인증 · 게임머니(비환금) 기반" },
    ],
    tip: "피망 포커는 게임머니 기반이라 실제 현금 리스크 없이 홀덤 대회 경험을 쌓기 좋습니다. 초보자의 첫 대회 경험으로 강력 추천합니다.",
    link: "https://poker.pmang.com",
  },
  {
    id: "hangame",
    name: "한게임 포커 클래식",
    badge: "NHN 운영",
    badgeColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    emoji: "🎴",
    desc: "NHN(엔에이치엔㈜)이 운영하는 한게임 플랫폼의 홀덤 대회. 국내 최장수 온라인 포커 서비스로 풍부한 사용자 기반을 보유합니다. 텍사스 홀덤 외 다양한 포커 형식의 대회도 운영됩니다.",
    details: [
      { label: "플랫폼", value: "한게임 포커 (PC·모바일)" },
      { label: "바이인", value: "하트(게임머니) 기반" },
      { label: "형식", value: "Texas Hold'em, 7 Card Stud" },
      { label: "특징", value: "국내 최다 사용자 기반" },
    ],
    tip: "한게임 포커는 7카드 스터드 등 다양한 포커 형식의 대회를 지원해 홀덤 외 다른 게임도 경험할 수 있습니다.",
    link: "https://poker.hangame.com",
  },
  {
    id: "hpl",
    name: "홀덤펍 리그 (HPL)",
    badge: "전국 펍 리그",
    badgeColor: "bg-green-500/15 text-green-400 border-green-500/30",
    emoji: "🍺",
    desc: "전국 홀덤펍(Holdem Pub)이 참가하는 리그 형태의 홀덤 대회. 동네 홀덤펍에서 시작해 지역 결선, 전국 결선까지 올라가는 피라미드 구조로 운영됩니다. 가장 접근성 높은 오프라인 홀덤 대회입니다.",
    details: [
      { label: "형식", value: "지역 예선 → 전국 결선" },
      { label: "바이인", value: "무료 또는 소액 (펍마다 상이)" },
      { label: "장소", value: "전국 홀덤펍 참가 매장" },
      { label: "특징", value: "현장 실전 대회 경험" },
    ],
    tip: "초보자도 부담 없이 참가 가능한 낮은 진입장벽이 매력. 가까운 홀덤펍에서 리그 일정을 확인하세요.",
    link: null,
  },
];

const INTERNATIONAL = [
  {
    id: "wsop",
    name: "WSOP (World Series of Poker)",
    location: "라스베이거스, 미국",
    season: "매년 5월 말 ~ 7월 중순 (2026: 5/26~7/15 브레이슬릿 100개 · 메인 파이널 8/3~5)",
    prize: "메인이벤트 바이인 $10,000",
    emoji: "🌎",
    badge: "세계 최고 권위",
    badgeColor: "bg-primary/20 text-primary border-primary/40",
    desc: "1970년부터 시작된 세계 포커의 올림픽. 2026년에는 라스베이거스 Horseshoe·Paris 카지노에서 100개의 브레이슬릿 이벤트가 열립니다. 골드 브레이슬릿(Gold Bracelet) 획득은 포커 선수 최고의 영예입니다. 한국 선수들도 매년 수십 명이 참가하는 세계적 홀덤 대회입니다.",
    highlights: [
      "2025 시리즈 총 참가 246,960명·상금 $4.82억 — 역대 최고 기록",
      "2026 메인이벤트 7/2 시작, 파이널 테이블은 8/3~5 ESPN 생중계",
      "온라인 예선은 공식 서킷 페이지가 GGPoker·ClubGG 퀄리파이어를 안내",
      "WSOP Circuit 지역 대회에서는 브레이슬릿이 아니라 골드 링을 겁니다",
    ],
    link: "https://www.wsop.com",
    blogLink: "/blog/wsop-2026-tournament-guide",
    blogLabel: "🏆 WSOP 2026 완전 가이드",
  },
  {
    id: "wpt",
    name: "WPT (World Poker Tour)",
    location: "전 세계 순회 (미국·유럽·아시아)",
    season: "연중 상시 (시즌별 운영)",
    prize: "WPT Prime $1,100 · 메인 투어 $3,500~$5,300 (지역 통화 예: WPT Seoul ₩1,750,000)",
    emoji: "🌍",
    badge: "세계 순회 투어",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    desc: "2002년 창설된 세계 포커 투어. 전 세계 주요 카지노를 돌며 홀덤 대회 시리즈를 개최합니다. 한국에서도 WPT Korea 시리즈가 개최된 바 있어 국내 선수들의 참가율이 높습니다.",
    highlights: [
      "시즌 챔피언십 우승 상금 $1,000,000 이상",
      "WPT Asia 별도 운영 (아시아 선수 참가 용이)",
      "ClubWPT 온라인 예선으로 진출 가능",
      "WPT Korea 개최 이력 (국내 개최 경험)",
    ],
    link: "https://www.worldpokertour.com/event/schedule",
  },
  {
    id: "ept",
    name: "EPT (European Poker Tour)",
    location: "유럽 주요 도시 (바르셀로나, 몬테카를로 등)",
    season: "연 4~6회",
    prize: "메인이벤트 €5,300",
    emoji: "🌐",
    badge: "PokerStars 주최",
    badgeColor: "bg-red-500/15 text-red-400 border-red-500/30",
    desc: "PokerStars가 주관하는 유럽 최대 홀덤 대회 투어. 바르셀로나, 프라하, 몬테카를로 등 유럽 주요 도시를 순회합니다. PokerStars 온라인에서 위성 예선으로 진출 가능합니다.",
    highlights: [
      "메인이벤트 상금 총액 €5,000,000+ 규모",
      "PokerStars 앱에서 온라인 새틀라이트 참가",
      "Super High Roller 등 하이롤러 이벤트 병행",
      "LIVE 스트리밍 제공 (한국에서도 시청 가능)",
    ],
    link: "https://www.pokerstars.com/poker/ept",
  },
  {
    id: "apt",
    // 2026-09-03 M-082(검수장 2회차 §1-3·4): «Asia Pacific Poker Tour»는 PokerStars의 APPT다. APT 공식 명칭 = Asian Poker Tour ·
    //    2026 일정 원문 「five exciting stops in three amazing Asian destinations」= 제주 클래식 · 타이베이 · 인천 · 제주 · 타이베이 챔피언십.
    name: "APT (Asian Poker Tour)",
    location: "제주·타이베이·인천 (2026 시즌 5스톱)",
    season: "연 4~6회",
    prize: "한국 스톱 메인 ₩230만~₩270만 · 챔피언십 타이베이 메인 USD 10,000",
    emoji: "🗺️",
    badge: "아시아 최대 투어",
    badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    desc: "2026년에 20주년을 맞는 아시아 대표 홀덤 대회 투어. 2026 시즌은 제주·타이베이·인천 5스톱으로 짜여 한국 선수 참가율이 가장 높고, 첫 해외(또는 국내 카지노) 홀덤 대회 도전에 가장 적합한 투어입니다. 한국 스톱은 외국인 전용 카지노 베뉴라 참가 자격을 먼저 확인하세요.",
    highlights: [
      "바이인이 WSOP보다 낮아 첫 해외 홀덤 대회에 최적",
      "2026 한국 스톱 3개 — 제주 클래식(1~2월)·인천(8월)·제주(9~10월)",
      "시즌 피날레 APT Championship 타이베이 — 메인 USD 10,000 / USD 5,000,000 GTD",
      "온라인 예선으로 비용 절감 진출 가능",
    ],
    link: "https://www.theasianpokertour.com",
    blogLink: "/blog/apt-incheon-2026-guide",
    blogLabel: "📖 APT 인천 2026 참가 가이드",
  },
];

const TOURNAMENT_STRUCTURE = [
  {
    title: "블라인드 레벨 (Blind Level)",
    emoji: "⏱️",
    desc: "홀덤 대회는 일정 시간마다 스몰블라인드·빅블라인드가 올라갑니다. 대부분 15~20분 간격으로 레벨이 올라가며, 레벨이 높아질수록 게임 압박이 커집니다. 대회 구조표(Structure Sheet)를 반드시 사전에 확인하세요.",
  },
  {
    title: "스타팅 스택과 M-Ratio",
    emoji: "📊",
    desc: "스타팅 스택 대비 블라인드 비율(M-Ratio)을 항상 계산해야 합니다. M값이 20 이상이면 여유 있게, 10~20은 중간, 10 이하면 푸시/폴드 전략으로 전환해야 합니다. 스택 관리는 홀덤 대회에서 가장 중요한 기술입니다.",
  },
  {
    title: "리바이와 애드온",
    emoji: "💰",
    desc: "일부 홀덤 대회는 탈락 후 재참가(Rebuy)나 추가 칩 구매(Add-on)가 가능합니다. 리바이 여부와 횟수는 대회마다 다르므로 사전 확인이 필수입니다. 리바이 구조를 이해해야 초반 플레이 스타일을 결정할 수 있습니다.",
  },
  {
    title: "버블과 ITM (입상권)",
    emoji: "🫧",
    desc: "상금 순위 바로 직전 단계를 버블(Bubble)이라고 합니다. 버블에서는 스택 크기에 따른 ICM 압박이 극도로 커집니다. 빅스택은 버블을 공격적으로 활용하고, 숏스택은 폴드 에퀴티를 최대화해야 합니다.",
  },
  {
    title: "파이널 테이블",
    emoji: "🎯",
    desc: "홀덤 대회의 최종 단계로 보통 9~10명이 남은 테이블을 말합니다. 파이널 테이블에서는 ICM 계산이 더욱 중요해지며, 상금 점프가 크기 때문에 스팟별 EV 계산이 필요합니다. 딜(Deal)을 제안받을 경우 ICM 기반으로 판단하세요.",
  },
  {
    title: "앤티 (Ante)",
    emoji: "♠️",
    desc: "많은 홀덤 대회에서 특정 레벨부터 앤티가 추가됩니다. 최근에는 빅블라인드 앤티(BB Ante) 방식이 주류입니다. 앤티가 추가되면 팟이 커져 더 공격적인 플레이가 요구됩니다.",
  },
];

const STRATEGY_TIPS = [
  {
    phase: "초반 (얼리 스테이지)",
    icon: BookOpen,
    color: "text-blue-400",
    tips: [
      "스타팅 스택이 충분할 때 타이트하게 플레이해 칩 손실 최소화",
      "상대 플레이어 성향 파악에 집중 (타이트/루즈, 어그레시브/패시브)",
      "포켓페어로 셋 마이닝 시도 가능 (M값 20 이상일 때)",
      "리바이 대회라면 초반에 약간 더 공격적으로 플레이 가능",
    ],
  },
  {
    phase: "중반 (미들 스테이지)",
    icon: Target,
    color: "text-yellow-400",
    tips: [
      "M값 20 이하 진입 시 스틸 레인지 확장 (BTN·CO 위치에서 적극 스틸)",
      "빅스택 상대로 무리한 플레이 자제, 미들스택과의 팟 집중",
      "버블이 다가올수록 숏스택 스틸 빈도 조절",
      "위치(포지션) 활용이 캐시게임보다 더 중요해지는 구간",
    ],
  },
  {
    phase: "후반·버블·파이널",
    icon: Zap,
    color: "text-primary",
    tips: [
      "버블에서 숏스택은 빅스택의 공격을 피하는 전략 우선",
      "ICM 관점에서 코인플립 상황을 최대한 회피",
      "파이널 테이블 진입 후 상금 점프 계산해 딜 협상 준비",
      "헤즈업(1:1) 상황에서는 레인지를 대폭 넓혀 공격적으로 플레이",
    ],
  },
];

const KOREA_HUB_2026 = [
  {
    city: "제주",
    flag: "🌊",
    venue: "신화월드 리조트 (외국인 전용 카지노 · 내국인 참가 불가)",
    color: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    events: [
      { name: "KPC x LPT Series", date: "1.03~1.18" },
      { name: "APT 제주 클래식", date: "1.30~2.08", hot: true },
      { name: "Triton Poker (ONE+SHR)", date: "3.05~4.01", hot: true },
      { name: "APT 제주 (가을)", date: "9.25~10.07" },
      { name: "GOP 제주 (Olympus Return)", date: "12.04~12.13" },
    ],
  },
  {
    city: "인천",
    flag: "🏙️",
    venue: "파라다이스 시티 리조트 (외국인 전용 카지노 · 내국인 참가 불가)",
    color: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    // 2026-09-03 M-082: ASPT Korea(#89)는 일정표가 «베뉴 공식 미기재»인데 이 카드가 파라다이스시티로 못 박고 있었다 → 분리.
    // 🔴 2026-09-04 M-087: 같은 결함이 형제 행에 남아 있었다 — `ajpc-incheon-1`(4.10~4.19)의 venue도
    //    🪶 이 주석에 그 행의 표시명을 축어로 적지 않는다 — 검수장 회귀 앵커가 그 문자열의 출현 수를 세어
    //       «0 = 이행»으로 읽기 때문이다(M-067 교훈).
    //    «공식 미기재»인데 이 카드가 파라다이스 시티로 못 박고 있었다. 베뉴를 모르면 「내국인 참가 불가」 배지도 근거가 없다
    //    (자격은 베뉴에서 나온다) → ASPT와 동일 처리로 분리. `ajpc-incheon-2`(8.21~8.30 · «미정 (공식 미기재)»)는 원래부터 없다.
    //    🔴 되돌리지 마라: 베뉴 라벨의 「외국인 전용 카지노 · 내국인 참가 불가」는 Paradise City 4행에는 맞다(APPT Korea 공식
    //    「24/7 foreigner-exclusive casino」). 문제는 배지가 아니라 «베뉴가 다른 행이 같은 배지 밑에 있는 것»이었다.
    events: [
      { name: "GOP 인천 (Prophecy)", date: "5.15~5.24" },
      { name: "APT 인천", date: "8.07~8.16", hot: true },
      { name: "APPT 코리아", date: "9.03~9.14", hot: true },
      { name: "GOP 인천 II (Labyrinth)", date: "10.30~11.08" },
    ],
  },
  {
    city: "서울",
    flag: "🏆",
    venue: "호텔 컨벤션 · 시내 베뉴 (내국인 참가 가능)",
    color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    events: [
      { name: "제5회 HPT (스위스 그랜드 호텔)", date: "9.11~9.13", hot: true },
      { name: "APL 서울 Winter Prelims · Circuit I", date: "10.23~10.25" },
    ],
  },
];

const BUYIN_LEVELS = [
  {
    level: "입문",
    range: "무료 ~ 소액",
    color: "bg-green-500/15 text-green-400 border-green-500/30",
    emoji: "🎮",
    examples: "피망포커, 한게임 포커",
    target: "처음 홀덤 대회를 경험하는 초보자",
    tip: "현금 리스크 없이 대회 포맷 학습 최적",
  },
  {
    level: "초급",
    range: "₩1만 ~ ₩30만",
    color: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    emoji: "🍺",
    examples: "홀덤펍 리그(HPL), HPT 새틀라이트",
    target: "오프라인 실전을 처음 경험하는 단계",
    tip: "홀덤펍 리그는 무료~소액, HPT 새틀라이트로 오프라인 메인 참가권 도전",
  },
  {
    level: "중급",
    range: "$500 ~ $2,000",
    color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    emoji: "🌊",
    examples: "APT 인천·제주, ASPT Korea, GOP",
    target: "국내·아시아 주요 대회 도전 단계",
    tip: "한국에서 직접 참가 가능한 세계급 대회들",
  },
  {
    level: "고급",
    range: "$3,000 ~ $10,000",
    color: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    emoji: "🌎",
    examples: "WSOP 메인($10K), EPT 메인(€5,300)",
    target: "해외 대형 메이저 대회 도전",
    tip: "온라인 위성 예선으로 $100 미만 비용 진출 가능",
  },
  {
    level: "하이롤러",
    range: "$50,000+",
    color: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    emoji: "💎",
    examples: "Triton Poker SHR 제주($150K)",
    target: "세계 최상위 프로·하이롤러 전용",
    tip: "2026 Triton SHR이 제주에서 개최 — 세계 최상급 대회를 한국에서",
  },
];

const BEGINNER_GUIDE = [
  {
    step: "01",
    title: "온라인 무료 홀덤 대회로 시작",
    desc: "피망 포커, 한게임 등 게임머니 기반 홀덤 대회에서 대회 포맷에 익숙해지세요. 실제 현금 리스크 없이 토너먼트 구조를 완전히 이해할 수 있습니다.",
    icon: "🎮",
  },
  {
    step: "02",
    title: "홀덤펍 리그 오프라인 도전",
    desc: "가까운 홀덤펍에서 리그전에 참가하세요. 실제 사람과 대면으로 진행하는 홀덤 대회는 온라인과 전혀 다른 경험을 제공합니다. 대부분 소액 또는 무료 참가 가능합니다.",
    icon: "🏠",
  },
  {
    step: "03",
    title: "HPT 새틀라이트 토너먼트 도전",
    desc: "HPT는 현금 바이인이 없고 「한게임 로얄홀덤」 온라인 새틀라이트에서 딴 참가권 2장으로 오프라인 메인이벤트에 나갑니다. 새틀라이트로 시트를 따는 습관이 해외 대회 참가 비용 절감의 핵심이기도 합니다.",
    icon: "🛰️",
  },
  {
    step: "04",
    title: "해외 홀덤 대회 온라인 예선",
    desc: "WSOP, EPT, APT 등 세계적인 홀덤 대회 모두 온라인 위성 예선을 운영합니다. 수십 달러로 수천 달러짜리 메인이벤트 시트에 도전할 수 있습니다.",
    icon: "✈️",
  },
];

/** 데이터 정본: lib/tournaments.ts — 값 출처·원문 인용은 docs/tournament-spine.md */
function ScheduleSection({
  todayISO,
  blogLinks,
}: {
  todayISO: string;
  /** 대회 id → 가이드 경로. 한국어 글이 실제로 있는 대회만 들어 있다 */
  blogLinks: Record<string, string>;
}) {
  const [filter, setFilter] = useState<"all" | "domestic" | "international">("all");
  const filtered = filter === "all" ? TOURNAMENTS : TOURNAMENTS.filter(t => t.type === filter);

  return (
    <motion.section
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-5">
        <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
        <h2 className="text-2xl font-serif font-bold text-foreground">2026 홀덤 대회 일정표</h2>
        <span className="text-xs bg-primary/15 text-primary border border-primary/30 px-2.5 py-0.5 rounded-full font-bold">{todayISO.replace(/-/g, ".")} 기준</span>
      </div>
      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
        각 대회 <strong className="text-foreground">공식 사이트 원문</strong>을 직접 확인해 기록했고, 카드마다 그 출처를 링크했습니다. 진행 상태는 날짜에서 자동 계산됩니다. 변경·연기는 공식 사이트를 우선 확인하세요.
      </p>

      {/* 일정 검증 방법 — 2026-08-02 holdem-tournament-schedule-check(noindex)에서 흡수.
          그 글이 「일정」 쿼리를 이 페이지와 나눠 갖고 있어 색인에서 뺐고, 고유 가치인
          "공식 사이트 1순위 목록 + 확인 순서 + 체크 항목"만 여기로 옮겼다. */}
      <details className="mb-6 bg-card border border-border rounded-xl overflow-hidden group">
        <summary className="px-4 py-3 cursor-pointer text-sm font-bold text-foreground hover:bg-primary/5 transition-colors list-none flex items-center gap-2">
          <span className="text-primary">🔍</span>
          이 일정이 맞는지 직접 확인하는 법
          <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground transition-transform group-open:rotate-90" />
        </summary>
        <div className="px-4 pb-4 pt-1 text-sm text-muted-foreground leading-relaxed space-y-3 border-t border-border">
          <p className="pt-3">
            대회 일정은 <strong className="text-foreground">장소·시작일·메인 이벤트 날짜·보장 상금·바이인</strong>이 시즌 중에도 바뀝니다.
            항공·숙박을 잡기 전에는 아래 순서로 한 번 더 확인하세요.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { k: "1순위 — 공식 사이트", v: "WSOP는 wsop.com/schedule, APT는 theasianpokertour.com, APPT·EPT는 pokerstarslive.com, WPT는 worldpokertour.com" },
              { k: "2순위 — 전문 캘린더", v: "PokerNews(라이브 리포팅) · SoMuchPoker(아시아권 비교)" },
              { k: "3순위 — 과거 데이터", v: "The Hendon Mob에서 이전 시즌 규모·입상 기록 확인" },
              { k: "4순위 — 커뮤니티", v: "현장 후기·분위기. 일정 근거로는 쓰지 않는다" },
            ].map((r) => (
              <div key={r.k} className="bg-background/60 border border-border rounded-lg px-3 py-2">
                <div className="text-xs font-bold text-primary mb-0.5">{r.k}</div>
                <div className="text-xs">{r.v}</div>
              </div>
            ))}
          </div>
          <p>
            <strong className="text-foreground">날짜만 보면 절반만 본 것입니다.</strong> 페스티벌 전체 기간과 내가 나갈 이벤트 시작일은 다릅니다.
            장소·카지노명, 바이인과 수수료 구분, 레이트 레지 마감, 리엔트리 가능 여부, 신분증·나이 제한까지 함께 확인하세요.
            <span className="text-foreground"> 예약 전과 출발 1주 전, 두 번 확인하는 것이 안전합니다.</span>
          </p>
        </div>
      </details>

      <div className="flex gap-2 mb-6">
        {(["all","domestic","international"] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${filter===f ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/50"}`}>
            {f==="all" ? "전체" : f==="domestic" ? "🇰🇷 국내" : "🌍 해외"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((t, i) => (
          <motion.div
            key={t.id}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className={`bg-card border rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden ${"highlight" in t && t.highlight ? "border-yellow-500/40 shadow-lg shadow-yellow-500/10" : "border-border"}`}
          >
            {"highlight" in t && t.highlight && (
              <div className="absolute top-0 right-0 bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2.5 py-1 rounded-bl-xl">
                {t.type === "domestic" ? "⭐ 추천" : "⭐ 세계 최대"}
              </div>
            )}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{t.emoji}</span>
                <div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${t.color} mb-1 inline-block`}>
                    {formatMonthBadge(t)}
                  </span>
                  <h3 className="text-sm font-bold text-foreground leading-snug">{t.name}</h3>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${
                computeStatus(t, todayISO) === "ongoing"
                  ? "bg-green-500/15 text-green-400 border-green-500/30"
                  : computeStatus(t, todayISO) === "ended"
                    ? "bg-muted/20 text-muted-foreground/80 border-border"
                    : "bg-primary/10 text-primary border-primary/25"
              }`}>
                {STATUS_LABEL[computeStatus(t, todayISO)]}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-background/50 rounded-lg p-2">
                <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">일정</div>
                <div className="font-semibold text-foreground">{formatDateRange(t)}</div>
              </div>
              <div className="bg-background/50 rounded-lg p-2">
                <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">바이인</div>
                <div className="font-semibold text-foreground">{t.buyin}</div>
              </div>
              <div className="bg-background/50 rounded-lg p-2 col-span-2">
                <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">장소</div>
                <div className="font-semibold text-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3 flex-shrink-0" />{t.location}
                </div>
              </div>
            </div>

            {"note" in t && t.note && (
              <div className="flex items-start gap-1.5 bg-primary/8 border border-primary/20 rounded-lg px-2.5 py-2">
                <Star className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-[11px] text-foreground/80 leading-snug">{t.note}</span>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-2 mt-auto">
              {t.sourceUrl && (
                <a href={t.sourceUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] text-primary font-semibold hover:underline">
                  공식 사이트 <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {/* ★ t.blogLink를 그대로 걸지 않는다. blogLink는 "가이드 slug"일 뿐이고
                  한국어판이 없는 가이드도 있어서(EN 마스터로만 쓰인 것) 404가 났다.
                  서버에서 한국어 글 존재를 확인해 내려준 blogLinks만 신뢰한다. */}
              {blogLinks[t.id] && (
                <Link href={blogLinks[t.id]}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/15 border border-primary/35 text-[11px] text-primary font-bold hover:bg-primary/25 transition-colors">
                  📖 상세 가이드 <ChevronRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

const FAQS = [
  {
    q: "홀덤 대회는 합법인가요?",
    a: "국내 게임사(네오위즈 피망, NHN 한게임)의 대회는 게임머니(비환금) 기반으로 운영되고, HPT처럼 온라인 새틀라이트로 참가권을 따 오프라인 결선을 치르는 대회도 있습니다. 한국의 카지노 베뉴 대회(APT 인천·제주 등)는 외국인·재외국민 대상이라 일반 한국 국적자는 참가할 수 없고, 해외 대회는 개최국 카지노 규정에 따라 운영됩니다. 참가 자격과 신분증 규정은 대회마다 공식 페이지에서 먼저 확인하세요.",
  },
  {
    q: "초보자도 홀덤 대회에 참가할 수 있나요?",
    a: "네. 피망 포커·한게임 홀덤 대회는 레벨 제한 없이 참가 가능하며, 홀덤펍 리그도 초보자를 환영합니다. HPT 온라인 새틀라이트는 별도 신청 없이 「한게임 로얄홀덤」 이용자 누구나 참여할 수 있습니다. 홀덤 대회 참가 자체가 실력 향상에 큰 도움이 됩니다.",
  },
  {
    q: "WSOP 홀덤 대회에 한국인도 참가할 수 있나요?",
    a: "물론입니다. WSOP는 국적 제한이 없으며 매년 수십 명의 한국 선수들이 참가합니다. $10,000 바이인이 부담된다면 온라인 새틀라이트로 시트를 딸 수 있습니다. WSOP 공식 서킷 페이지는 GGPoker와 ClubGG 퀄리파이어를 안내합니다(2026-09-04 확인).",
  },
  {
    q: "홀덤 대회와 캐시게임의 차이점은 무엇인가요?",
    a: "가장 큰 차이는 칩의 가치와 블라인드 구조입니다. 홀덤 대회에서는 블라인드가 시간에 따라 올라가고 탈락하면 게임이 끝납니다. 캐시게임은 블라인드가 고정되고 언제든 테이블을 떠날 수 있습니다. 대회에서는 ICM 개념이 추가로 중요합니다.",
  },
  {
    q: "홀덤 대회 참가 전 어떤 전략을 배워야 하나요?",
    a: "토너먼트 특화 전략으로 M-Ratio 계산법, ICM 기초, 버블 플레이, 스택별 올인 레인지(푸시/폴드 차트), 파이널 테이블 딜 협상 등을 공부하세요. 캐시게임 기초(포지션, 팟 오즈, 핸드 선택)도 필수입니다.",
  },
  {
    q: "APT와 WSOP 중 첫 해외 홀덤 대회로 어느 쪽이 좋을까요?",
    a: "첫 해외 홀덤 대회 도전이라면 APT를 추천합니다. 바이인이 낮고 아시아 선수 비율이 높아 언어·문화 장벽이 낮습니다. 2026 시즌은 제주·인천·타이베이 개최라 이동 거리도 WSOP(라스베이거스)보다 훨씬 유리합니다.",
  },
  {
    q: "해외 홀덤 대회 상금에 한국 세금이 붙나요?",
    a: "WSOP, EPT 등 해외에서 받은 포커 대회 상금은 원칙적으로 한국 소득세 신고 대상입니다. 기타소득으로 분류되어 필요경비 공제 후 20%(지방세 포함 22%) 세율이 적용됩니다. 필요경비를 뺀 기타소득금액이 연 300만원을 넘으면 종합소득세 신고 대상입니다. 해외 대회 개최국에서 먼저 원천징수된 경우 외국납부세액공제를 받을 수 있는데, 공제한도 안에서만 공제되고 초과분은 이월됩니다. 고액 상금 수령 시 세무사 상담을 강력히 권장합니다.",
  },
];

export default function Tournaments({
  todayISO,
  blogLinks,
}: {
  todayISO: string;
  blogLinks: Record<string, string>;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "홀덤 대회 완벽 가이드 — 국내·해외 포커 토너먼트 총정리 2026",
    "description": "HPT·피망 쇼다운·한게임 등 국내 홀덤 대회와 WSOP·WPT·EPT·APT 해외 포커 토너먼트를 한눈에 정리. 대회 구조, 전략, 참가 방법과 초보 로드맵 포함.",
    "author": { "@type": "Organization", "name": "홀덤마스터", "url": "https://www.holdemmaster.com" },
    "publisher": { "@type": "Organization", "name": "홀덤마스터", "url": "https://www.holdemmaster.com", "logo": { "@type": "ImageObject", "url": "https://www.holdemmaster.com/favicon.svg" } },
    "datePublished": "2026-03-26",
    "dateModified": "2026-09-03",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.holdemmaster.com/tournaments" },
    "image": "https://www.holdemmaster.com/images/tournament-hall-wsop.webp",
    "keywords": "홀덤 대회, 포커 토너먼트, HPT 한게임 포커 투어, WSOP, 홀덤 대회 참가방법, 피망 쇼다운, 한게임 포커 대회",
    "inLanguage": "ko-KR",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.holdemmaster.com/" },
      { "@type": "ListItem", "position": 2, "name": "홀덤 대회", "item": "https://www.holdemmaster.com/tournaments" },
    ],
  };

  const eventSchemas = buildEventSchemas(todayISO);

  const combinedSchema = { "@context": "https://schema.org", "@graph": [articleSchema, breadcrumbSchema, faqSchema, ...eventSchemas] };

  return (
    <>
      {/* 구조화 데이터 — SEO 컴포넌트는 schema prop을 렌더하지 않으므로 여기서 직접 주입한다 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <SEO
        /* ★★layout.tsx의 generateMetadata와 **같은 함수**를 쓴다 — 여기에 문자열을 적으면 안 된다.
             components/seo.tsx는 받은 props를 useEffect에서 **무조건** document.title·
             description에 덮어쓴다. 그래서 서버가 layout.tsx로 옳은 제목을 내보내도
             JS가 돌면서 이 props로 되돌린다. 2026-08-05까지 실제로 그 상태였다:
             정적 HTML은 "APT 인천 2026 8/7 개막"인데 브라우저에서는
             "WSOP 파이널 8/3~5"(이미 지난 일정)로 바뀌어 있었다. curl로는 안 잡힌다. */
        title={buildMetaTitle(todayISO)}
        description={buildMetaDescription(todayISO)}
        keywords="홀덤 대회, 홀덤대회, 포커 토너먼트, HPT 한게임 포커 투어, 피망 쇼다운, 한게임 포커 대회, WSOP 참가방법, WPT, EPT, APT 아시아, 홀덤펍 리그, 포커 대회 일정 2026, 홀덤 토너먼트 전략, 포커 대회 참가 방법"
        path="/tournaments"
        /* ★2026-08-13: `schema={combinedSchema}` prop을 뺐다. `components/seo.tsx`는 `schema`를
             구조분해에서 받지도 않아 **아무 일도 하지 않는 인자**였고, 실제 출력은 바로 위
             `<script type="application/ld+json">`가 이미 하고 있다. 남겨 두면 «여기가 스키마를
             내보낸다»고 오해하게 만든다 — 이 오해가 다른 13개 파일에서 죽은 코드를 낳았다. */
        type="article"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        {/* Hero */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest mb-5">
            <Trophy className="w-3.5 h-3.5" /> Tournament Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-5 leading-tight">
            홀덤 대회 완벽 가이드
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            국내 HPT·피망 쇼다운·한게임·홀덤펍 리그부터<br className="hidden md:block" />
            세계 최대 <strong className="text-foreground">WSOP·WPT·EPT·APT</strong>까지.<br />
            홀덤 대회의 모든 것을 한눈에 정리했습니다.
            {/* ★손으로 적지 말 것 — lib/tournaments-digest.ts가 대회 데이터에서 만든다.
                2026-08-05까지 이 자리에 "2026년 7월 28일 기준 … 파이널 테이블만 8월 3~5일
                남았습니다"가 굳어 있었다. 시한폭탄이 셋이었다(기준일·8/3~5 만료·브레이슬릿
                "99개 수여"는 8/5 이후 100개). 매일 도는 리빌드가 이제 이 줄도 갱신한다. */}
            <span className="block mt-3 text-sm text-primary/90">{buildHeroLine(todayISO)}</span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 max-w-2xl mx-auto">
            {[
              { icon: MapPin, label: "한국 개최 대회 (2026)", value: `${KR_2026}개` },
              { icon: Globe, label: "2026 전체 일정", value: "20개+" },
              { icon: Users, label: "WSOP 참가자", value: "24만명+" },
              { icon: DollarSign, label: "WSOP 메인 역대 최대 상금풀 (2024)", value: "$9,404만" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-card border border-border rounded-xl p-4 text-center">
                <Icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
                <div className="text-lg font-bold text-foreground">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 2026 대회 일정표 */}
        <ScheduleSection todayISO={todayISO} blogLinks={blogLinks} />

        {/* 🇰🇷 한국 포커 허브 2026 */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <Trophy className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-foreground">2026 한국 포커 허브</h2>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full border bg-primary/20 text-primary border-primary/40">아시아 최대 개최국</span>
          </div>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            2026년 한국(제주·인천·서울)에서 <strong className="text-foreground">{KR_2026}개</strong>의 홀덤 대회가 일정표에 올라 있습니다.
            제주 신화월드와 인천 파라다이스 시티는 아시아 최대 포커 허브로 자리잡았지만, <strong className="text-foreground">두 곳은 외국인 전용 카지노</strong>라
            APT·Triton·GOP 같은 카지노 대회는 외국인·재외국민(재외국민은 한국 여권 + 영주권 등 증빙)만 등록할 수 있습니다.
            일반 한국 국적자가 실제로 나갈 수 있는 국내 대회는 서울의 <strong className="text-foreground">HPT</strong>(호텔 컨벤션 베뉴)와 APL 서울 같은 비카지노 대회입니다.
          </p>

          {/* 🔴 2026-09-04 M-087 ③ 라벨 정직화 — 이 카드는 «전수»가 아니다(도시별 대표 대회만).
              카드를 19개로 늘리지 않기로 확정했으므로(손으로 적는 목록을 늘리면 드리프트가 그 경로로 돌아온다),
              대신 «전수가 아님»을 드러내는 낱말과 «전체는 일정표»라는 안내를 한 자리에 둔다.
              🪶 M-087은 「하단 일정표」라 적었으나 실제 렌더 순서는 일정표가 이 절 «위»다 — 문안은 실물대로 「위」로 적는다. */}
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-3">
            <h3 className="text-sm font-bold text-foreground">도시별 주요 대회</h3>
            <span className="text-xs text-muted-foreground">
              도시별 주요 대회만 추린 목록입니다 — 2026년 한국 대회 {KR_2026}개 전체는 위 <strong className="text-foreground/80">2026 홀덤 대회 일정표</strong>에서 볼 수 있습니다.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {KOREA_HUB_2026.map((hub) => (
              <div key={hub.city} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{hub.flag}</span>
                  <div>
                    <div className={`text-xs font-bold px-2 py-0.5 rounded-full border ${hub.color} mb-1 inline-block`}>
                      {hub.venue}
                    </div>
                    <h3 className="text-base font-bold text-foreground">🇰🇷 {hub.city}</h3>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {hub.events.map((ev) => (
                    <li key={ev.name} className="flex items-center justify-between gap-2 text-xs">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        {ev.hot && <Star className="w-3 h-3 text-primary flex-shrink-0" />}
                        {!ev.hot && <ChevronRight className="w-3 h-3 text-muted-foreground/50 flex-shrink-0" />}
                        <span className={ev.hot ? "text-foreground font-semibold" : ""}>{ev.name}</span>
                      </span>
                      <span className="text-muted-foreground/60 tabular-nums flex-shrink-0">{ev.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-primary/8 border border-primary/25 rounded-xl p-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary mb-1">{KR_2026}개</div>
                <div className="text-xs text-muted-foreground">2026 한국 홀덤 대회</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary mb-1">₩49억+</div>
                <div className="text-xs text-muted-foreground">APT 제주 클래식 보장 상금</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary mb-1">$150K</div>
                <div className="text-xs text-muted-foreground">Triton SHR 제주 바이인</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 홀덤 대회란 무엇인가 — 도입 텍스트 */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06 }}
          className="mb-12 bg-card border border-border rounded-2xl p-7 md:p-10"
        >
          <h2 className="text-2xl font-serif font-bold text-foreground mb-5">홀덤 대회란 무엇인가</h2>

          <figure className="mb-6">
            <img
              src="/images/tournament-hall-wsop.webp"
              alt="세계 최대 홀덤 대회 WSOP(World Series of Poker) 메인이벤트 토너먼트 홀 전경 — 수백 명의 선수들이 그린펠트 테이블에서 경쟁하는 장면"
              width={1200}
              height={675}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full rounded-xl border border-border"
            />
            <figcaption className="text-center text-xs text-muted-foreground mt-2 italic">
              세계 최대 홀덤 대회 WSOP — 매년 수만 명이 참가하는 포커 올림픽
            </figcaption>
          </figure>

          <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
            <p>
              <strong className="text-foreground">홀덤 대회(Hold'em Tournament)</strong>는 텍사스 홀덤 포커를 기반으로 다수의 플레이어가 경쟁하는 토너먼트 방식의 게임입니다. 캐시게임과 달리 모든 참가자가 동일한 양의 칩을 받고 시작하며, 탈락한 플레이어는 게임을 이어갈 수 없습니다. 마지막까지 살아남은 플레이어가 최고의 상금을 받는 구조입니다.
            </p>
            <p>
              홀덤 대회의 가장 큰 특징은 <strong className="text-foreground">블라인드가 시간에 따라 올라간다</strong>는 점입니다. 처음에는 낮은 블라인드로 여유 있게 시작하지만, 레벨이 올라갈수록 팟 규모가 커지고 스택 압박이 심해집니다. 이 구조 덕분에 캐시게임보다 훨씬 다이나믹한 전략 변화가 요구됩니다.
            </p>
            <p>
              국내 홀덤 대회는 HPT(한게임 포커 투어)·APL 같은 오프라인 대회와 피망 쇼다운·한게임의 온라인 대회, 홀덤펍 리그 등 다양한 형태로 운영되고 있습니다. 해외에서는 WSOP, WPT, EPT, APT 등 세계 4대 투어가 수만 명의 선수들을 모으는 거대 이벤트로 자리잡고 있습니다. 포커가 합법적인 스포츠로 인정받는 세계적 추세에 맞춰 한국에서도 홀덤 대회에 대한 관심이 빠르게 높아지고 있습니다.
            </p>
          </div>
        </motion.section>

        {/* 홀덤 대회 구조 이해 */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.09 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-foreground">홀덤 대회 구조 완전 이해</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            홀덤 대회에 처음 참가하기 전에 반드시 알아야 할 토너먼트 구조 6가지입니다. 이 개념들을 이해해야 올바른 전략을 세울 수 있습니다.
          </p>

          <figure className="mb-6">
            <img
              src="/images/tournament-table-action.webp"
              alt="홀덤 대회 토너먼트 테이블 — 컬러풀한 토너먼트 칩이 쌓여 있고 딜러 버튼과 홀 카드가 그린펠트 위에 놓인 홀덤 대회 현장"
              width={1200}
              height={675}
              loading="lazy"
              decoding="async"
              className="w-full rounded-xl border border-border"
            />
            <figcaption className="text-center text-xs text-muted-foreground mt-2 italic">
              홀덤 대회 테이블 — 토너먼트 칩 스택과 블라인드 레벨이 결과를 결정한다
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TOURNAMENT_STRUCTURE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="bg-card border border-border rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{item.emoji}</span>
                  <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 국내 홀덤 대회 */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-foreground">국내 포커·홀덤 대회 4종</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            국내에서 참가 가능한 대표적인 홀덤 대회를 정리했습니다. 온라인 무료 대회부터 국내 최대 오프라인 홀덤 대회까지 수준별로 도전해 보세요.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {DOMESTIC.map((t, i) => (
              <motion.div
                key={t.id}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.13 + i * 0.06 }}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{t.emoji}</span>
                  <div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${t.badgeColor} mb-1 inline-block`}>
                      {t.badge}
                    </span>
                    <h3 className="text-base font-bold text-foreground leading-snug">{t.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {t.details.map(d => (
                    <div key={d.label} className="bg-background/50 rounded-lg p-2.5">
                      <div className="text-[10px] text-muted-foreground/70 uppercase tracking-wider mb-0.5">{d.label}</div>
                      <div className="text-xs font-semibold text-foreground">{d.value}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-2 bg-primary/8 border border-primary/20 rounded-lg px-3 py-2.5">
                  <Star className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground/85 leading-relaxed">{t.tip}</p>
                </div>
                {t.link && (
                  <a href={t.link} target="_blank" rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline">
                    공식 사이트 방문 <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 해외 4대 투어 */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-foreground">세계 4대 포커 홀덤 대회 투어</h2>
          </div>

          <figure className="mb-6">
            <img
              src="/images/tournament-trophy.webp"
              alt="포커 홀덤 대회 우승 트로피 — 황금빛 트로피와 카지노 칩이 어우러진 포커 토너먼트 우승자의 영예를 상징하는 장면"
              width={1200}
              height={675}
              loading="lazy"
              decoding="async"
              className="w-full rounded-xl border border-border"
            />
            <figcaption className="text-center text-xs text-muted-foreground mt-2 italic">
              세계 4대 홀덤 대회 투어의 우승 트로피 — WSOP 골드 브레이슬릿은 포커계 최고의 영예
            </figcaption>
          </figure>

          <div className="flex flex-col gap-5">
            {INTERNATIONAL.map((t, i) => (
              <motion.div
                key={t.id}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.17 + i * 0.07 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="flex items-center gap-3 md:w-72 flex-shrink-0">
                    <span className="text-4xl">{t.emoji}</span>
                    <div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${t.badgeColor} mb-1.5 inline-block`}>
                        {t.badge}
                      </span>
                      <h3 className="text-lg font-bold text-foreground leading-tight">{t.name}</h3>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-3 mb-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-primary" />{t.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-primary" />{t.season}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-primary" />{t.prize}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                      {t.highlights.map(h => (
                        <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2 items-center">
                      <a href={t.link} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline">
                        공식 사이트 <ExternalLink className="w-3 h-3" />
                      </a>
                      {"blogLink" in t && t.blogLink && (
                        <Link href={t.blogLink as string}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/15 border border-primary/35 text-xs text-primary font-bold hover:bg-primary/25 transition-colors">
                          {"blogLabel" in t && t.blogLabel ? (t.blogLabel as string) : "📖 상세 가이드"} <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 홀덤 대회 전략 */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-foreground">홀덤 대회 단계별 전략</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            캐시게임과 다른 홀덤 대회만의 전략 포인트입니다. 초반·중반·후반 단계별로 핵심 전략을 정리했습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STRATEGY_TIPS.map((s, i) => (
              <motion.div
                key={s.phase}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.21 + i * 0.06 }}
                className="bg-card border border-border rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <s.icon className={`w-5 h-5 ${s.color}`} />
                  <h3 className="font-bold text-foreground text-sm">{s.phase}</h3>
                </div>
                <ul className="space-y-2">
                  {s.tips.map(tip => (
                    <li key={tip} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <ChevronRight className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 초보 로드맵 */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-foreground">초보자 홀덤 대회 도전 로드맵</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BEGINNER_GUIDE.map((g, i) => (
              <motion.div
                key={g.step}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.06 }}
                className="bg-card border border-border rounded-xl p-5 flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/15 border border-primary/30 text-primary font-serif font-bold text-sm flex items-center justify-center">
                  {g.step}
                </div>
                <div>
                  <div className="text-xl mb-1">{g.icon}</div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{g.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{g.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 바이인 단계별 가이드 */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.27 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-foreground">홀덤 대회 바이인 단계별 가이드</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            내 수준에 맞는 홀덤 대회를 찾으려면 바이인 범주부터 파악해야 합니다. 무료 온라인 대회부터 세계 최상급 하이롤러 대회까지 단계별로 정리했습니다.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card border-b border-border">
                  <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">단계</th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">바이인</th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:table-cell">대표 대회</th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">추천 대상</th>
                </tr>
              </thead>
              <tbody>
                {BUYIN_LEVELS.map((b, i) => (
                  <tr key={b.level} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-background/30" : "bg-card"}`}>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full border ${b.color} inline-flex items-center gap-1`}>
                        {b.emoji} {b.level}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-semibold text-foreground">{b.range}</span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-xs text-muted-foreground">{b.examples}</span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-xs text-muted-foreground">{b.target}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
            💡 <strong className="text-foreground">팁:</strong> 어떤 단계든 위성 토너먼트(Satellite)를 활용하면 바이인을 1/10 수준으로 줄일 수 있습니다. WSOP $10,000 메인이벤트도 $100 위성으로 진출한 사례가 매년 나옵니다.
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Info className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-foreground">홀덤 대회 자주 묻는 질문</h2>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.29 + i * 0.05 }}
                className="bg-card border border-border rounded-xl p-5"
              >
                <h3 className="font-bold text-foreground text-sm mb-2 flex items-start gap-2">
                  <span className="text-primary font-serif text-base flex-shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-5">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 관련 가이드 내부 링크 */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.31 }}
          className="mb-8"
        >
          <h2 className="text-lg font-serif font-bold text-foreground mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" /> 홀덤 대회 준비에 도움이 되는 가이드
          </h2>

          {/* WSOP 2026 Featured */}
          <Link href="/blog/wsop-2026-tournament-guide">
            <div className="mb-4 p-5 bg-card border-2 border-yellow-500/40 rounded-2xl hover:border-yellow-500/70 transition-colors cursor-pointer shadow-lg shadow-yellow-500/8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2.5 py-1 rounded-bl-xl tracking-wide">⏳ 8/3~5 파이널</div>
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0 mt-0.5">🏆</div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest mb-1">WSOP 2026 · 메인이벤트 파이널 테이블 8월 3~5일</div>
                  <div className="text-base font-bold text-foreground mb-1 leading-tight">WSOP 2026 완전 가이드 — 일정·메인이벤트·한국인 참가 방법</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">메인이벤트 9,208명 참가·상금풀 $8,563만 · 파이널 9명 확정, 우승 상금 $1,000만을 놓고 8/3~5 ESPN 방송</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-xs text-primary font-bold">
                    자세히 보기 <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: "/blog/holdem-tournament-schedule-check", emoji: "📅", title: "홀덤 대회 일정 확인법", desc: "WSOP·APT·APPT 공식 일정 교차검증" },
              { href: "/blog/holdem-tournament-tax-guide", emoji: "🧾", title: "홀덤 대회 세금·신고", desc: "상금 원천징수·WSOP 30%·외국납부세액" },
              { href: "/blog/holdem-tournament-buy-in-cost", emoji: "💰", title: "홀덤 대회 바이인·참가비", desc: "홀덤펍·APT·WSOP 비용과 총예산 계산" },
              { href: "/blog/holdem-tournament-how-to-enter", emoji: "🎫", title: "홀덤 대회 참가 방법", desc: "온라인 무료부터 WSOP까지 단계별 신청법" },
              { href: "/calculator", emoji: "🎲", title: "포커 확률 계산기", desc: "아웃츠·팟오즈·승률을 실시간 계산" },
              { href: "/blog/holdem-hand-rankings", emoji: "🃏", title: "족보 순위표", desc: "로열 플러시~하이카드 완벽 정리" },
              { href: "/blog/holdem-starting-hand-range", emoji: "📊", title: "스타팅 핸드 169가지", desc: "대회 핸드 선택 완전 가이드" },
              { href: "/blog/holdem-outs-calculation", emoji: "📐", title: "홀덤 아웃츠 계산법", desc: "드로우 상황별 승률 계산법" },
              { href: "/blog/position-is-everything-in-holdem", emoji: "🎯", title: "포지션 전략 가이드", desc: "대회에서 포지션 활용하는 법" },
              { href: "/blog/when-to-fold-preflop-holdem", emoji: "♠", title: "프리플랍 폴드 기준", desc: "대회 초반 핸드 선택 기준표" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-colors cursor-pointer flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <div className="text-sm font-bold text-foreground mb-0.5">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="bg-card border border-primary/30 rounded-2xl p-8 text-center"
        >
          <div className="text-4xl mb-3">♠</div>
          <h2 className="text-xl font-serif font-bold text-foreground mb-2">홀덤 대회 전략을 더 갈고닦고 싶다면</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            홀덤 대회에서 실제로 이기기 위한 스타팅 핸드 선택, 프리플랍 폴드 기준, ICM 이해 등을 홀덤마스터 블로그에서 무료로 확인하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/strategy">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:brightness-110 transition-all cursor-pointer">
                전략 가이드 보기 <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/calculator">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card border border-border text-foreground font-bold text-sm hover:border-primary/40 transition-all cursor-pointer">
                확률 계산기 사용하기 <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </motion.div>

      </div>

    </>
  );
}
