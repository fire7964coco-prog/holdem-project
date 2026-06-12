"use client";

import { useState } from "react";
import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, Globe, MapPin, Calendar, Users, DollarSign, ChevronRight, Star, Info, BookOpen, Target, Zap, ExternalLink } from "lucide-react";

const DOMESTIC = [
  {
    id: "kpt",
    name: "KPT (Korea Poker Tour)",
    badge: "국내 최대 규모",
    badgeColor: "bg-primary/20 text-primary border-primary/40",
    emoji: "🏆",
    desc: "대한민국 최대 규모의 공식 텍사스 홀덤 대회 시리즈. 온라인 예선을 통해 누구나 메인이벤트에 도전할 수 있습니다. 프로·아마추어 구분 없이 참가 가능한 오픈 대회로, 국내 홀덤 대회 중 가장 높은 권위를 자랑합니다.",
    details: [
      { label: "개최 시기", value: "연 2~4회 (시즌제)" },
      { label: "바이인", value: "위성부터 메인까지 다양" },
      { label: "형식", value: "No-Limit Texas Hold'em" },
      { label: "특징", value: "온라인 예선 → 오프라인 결선" },
    ],
    tip: "위성 토너먼트(Satellite) 우승 시 메인이벤트 시트를 저렴하게 확보할 수 있습니다. 소액 바이인으로 큰 대회에 도전하는 가장 효율적인 방법입니다.",
    link: null,
  },
  {
    id: "pmang",
    name: "피망 포커 챔피언십",
    badge: "NHN 공식 운영",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    emoji: "🃏",
    desc: "NHN이 운영하는 피망 포커에서 개최하는 공식 온라인 홀덤 대회. 별도 장비 없이 PC·모바일에서 참가 가능하며, 게임머니 기반으로 운영되어 법적으로 문제없이 즐길 수 있는 합법적 홀덤 대회입니다.",
    details: [
      { label: "플랫폼", value: "피망 포커 (PC·모바일)" },
      { label: "바이인", value: "게임머니 기반 (무료 가능)" },
      { label: "형식", value: "No-Limit Texas Hold'em" },
      { label: "특징", value: "실명 인증 합법 대회" },
    ],
    tip: "피망 포커는 게임머니 기반이라 실제 현금 리스크 없이 홀덤 대회 경험을 쌓기 좋습니다. 초보자의 첫 대회 경험으로 강력 추천합니다.",
    link: "https://poker.pmang.com",
  },
  {
    id: "hangame",
    name: "한게임 포커 클래식",
    badge: "카카오게임즈 운영",
    badgeColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    emoji: "🎴",
    desc: "카카오게임즈가 운영하는 한게임 플랫폼의 홀덤 대회. 국내 최장수 온라인 포커 서비스로 풍부한 사용자 기반을 보유합니다. 텍사스 홀덤 외 다양한 포커 형식의 대회도 운영됩니다.",
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
    season: "매년 5월 말 ~ 7월 초 (약 6주)",
    prize: "메인이벤트 바이인 $10,000",
    emoji: "🌎",
    badge: "세계 최고 권위",
    badgeColor: "bg-primary/20 text-primary border-primary/40",
    desc: "1970년부터 시작된 세계 포커의 올림픽. 2026년에는 라스베이거스 Horseshoe·Paris 카지노에서 100개의 브레이슬릿 이벤트가 열립니다. 골드 브레이슬릿(Gold Bracelet) 획득은 포커 선수 최고의 영예입니다. 한국 선수들도 매년 수십 명이 참가하는 세계적 홀덤 대회입니다.",
    highlights: [
      "2025 시리즈 총 참가 246,960명·상금 $4.81억 — 역대 최고 기록",
      "2026 메인이벤트 7/2 시작, 파이널 테이블은 8/3~5 ESPN 생중계",
      "WSOP.com·GGPoker 온라인 예선으로 위성 진출 가능",
      "WSOP Circuit 지역 대회로 브레이슬릿 도전 가능",
    ],
    link: "https://www.wsop.com",
  },
  {
    id: "wpt",
    name: "WPT (World Poker Tour)",
    location: "전 세계 순회 (미국·유럽·아시아)",
    season: "연중 상시 (시즌별 운영)",
    prize: "이벤트별 $3,500~$25,000",
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
    link: "https://www.wpt.com",
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
    name: "APT (Asia Pacific Poker Tour)",
    location: "마닐라, 마카오, 서울, 호치민 등",
    season: "연 4~6회",
    prize: "메인이벤트 바이인 $1,100~$3,300",
    emoji: "🗺️",
    badge: "아시아 최대 투어",
    badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    desc: "아시아·태평양 지역을 대표하는 홀덤 대회 투어. 한국 선수들의 참가율이 가장 높으며, 서울에서 별도 시리즈가 개최된 바 있습니다. 첫 해외 홀덤 대회 도전에 가장 적합한 투어입니다.",
    highlights: [
      "바이인이 WSOP보다 낮아 첫 해외 홀덤 대회에 최적",
      "한국 개최 이력 다수 (APT Seoul 등)",
      "마닐라 솔레어 리조트 상설 개최",
      "온라인 예선으로 비용 절감 진출 가능",
    ],
    link: "https://www.theasianpokertour.com",
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
    venue: "신화월드 리조트",
    color: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    events: [
      { name: "KPC x LPT Series", date: "1.03~1.18" },
      { name: "APT 제주 클래식", date: "1.30~2.08", hot: true },
      { name: "Triton Poker (ONE+SHR)", date: "3.05~4.01", hot: true },
      { name: "APT 제주 (가을)", date: "9.25~10.04" },
      { name: "GOP 제주 (Olympus Return)", date: "12.04~12.13" },
    ],
  },
  {
    city: "인천",
    flag: "🏙️",
    venue: "파라다이스 시티 리조트",
    color: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    events: [
      { name: "ASPT Korea", date: "1.23~2.01" },
      { name: "AJPC 사무라이 서킷", date: "4.10~4.19" },
      { name: "GOP 인천 (Prophecy)", date: "5.15~5.24" },
      { name: "APT 인천", date: "8.07~8.16", hot: true },
      { name: "APPT 코리아", date: "9.03~9.14", hot: true },
      { name: "GOP 인천 II (Labyrinth)", date: "10.30~11.08" },
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
    examples: "홀덤펍 리그(HPL), KPT 위성",
    target: "오프라인 실전을 처음 경험하는 단계",
    tip: "홀덤펍 리그는 무료~소액, KPT 위성으로 메인 시트 도전",
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
    title: "KPT 위성 토너먼트 도전",
    desc: "KPT 메인이벤트 바이인이 부담된다면 위성(Satellite) 토너먼트를 이용하세요. 소액 바이인으로 메인이벤트 티켓을 따는 것이 홀덤 대회 참가 비용 절감의 핵심입니다.",
    icon: "🛰️",
  },
  {
    step: "04",
    title: "해외 홀덤 대회 온라인 예선",
    desc: "WSOP, EPT, APT 등 세계적인 홀덤 대회 모두 온라인 위성 예선을 운영합니다. 수십 달러로 수천 달러짜리 메인이벤트 시트에 도전할 수 있습니다.",
    icon: "✈️",
  },
];

/** 2026-06-12 기준. WSOP·APT·EPT·GOP·AJPC·APPT·Triton 등 공식 일정 웹검색 재확인 후 반영. */
const SCHEDULE_2026 = [
  {
    id: "kpc-jeju",
    name: "KPC x LPT Series 2026",
    type: "domestic" as const,
    month: "1월",
    monthNum: 1,
    dateRange: "2026.01.03~01.18",
    location: "한국 제주 (LES A Casino)",
    buyin: "₩90만~",
    emoji: "🃏",
    color: "bg-primary/20 text-primary border-primary/40",
    status: "ended" as const,
    link: "https://koreapokercup.com",
    note: "K Poker Cup 공식 · 54개 메인 이벤트",
  },
  {
    id: "aspt-korea",
    name: "ASPT Korea 2026",
    type: "domestic" as const,
    month: "1~2월",
    monthNum: 1,
    dateRange: "2026.01.23~02.01",
    location: "한국 인천 (파라다이스 시티)",
    buyin: "다양",
    emoji: "🏙️",
    color: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    status: "ended" as const,
    link: "https://aspt.world/events/aspt-korea-2026/",
  },
  {
    id: "apt-jeju-classic",
    name: "APT 제주 클래식 2026",
    type: "domestic" as const,
    month: "1~2월",
    monthNum: 1,
    dateRange: "2026.01.30~02.08",
    location: "한국 제주 (신화월드)",
    buyin: "다양",
    emoji: "🌊",
    color: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    status: "ended" as const,
    link: "https://www.theasianpokertour.com/series/apt-jeju-classic-south-korea-2026",
    highlight: true,
    note: "APT 공식 · 총 KRW 49억 GTD · 99개 이벤트",
  },
  {
    id: "ept-paris",
    name: "EPT 파리 2026",
    type: "international" as const,
    month: "2~3월",
    monthNum: 2,
    dateRange: "2026.02.18~03.01",
    location: "프랑스 파리",
    buyin: "€5,300 (메인)",
    emoji: "🗼",
    color: "bg-red-500/15 text-red-400 border-red-500/30",
    status: "ended" as const,
    link: "https://www.pokerstars.com/poker/ept",
  },
  {
    id: "triton-jeju",
    name: "Triton Poker Series 제주",
    type: "domestic" as const,
    month: "3~4월",
    monthNum: 3,
    dateRange: "2026.03.05~04.01",
    location: "한국 제주 (LES A Casino)",
    buyin: "$2,000~$150,000",
    emoji: "💎",
    color: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    status: "ended" as const,
    link: "https://www.tritonpokerseries.com",
    note: "Triton ONE(3/5~15) + SHR(3/15~4/1) · 공식 일정",
  },
  {
    id: "triton-montenegro",
    name: "Triton SHR 몬테네그로",
    type: "international" as const,
    month: "5월",
    monthNum: 5,
    dateRange: "2026.05.13~05.28",
    location: "몬테네그로 부드바 (Budva)",
    buyin: "$25,000~$100,000+",
    emoji: "💎",
    color: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    status: "ended" as const,
    link: "https://www.tritonpokerseries.com",
    note: "Triton 10주년 · $100K PLO·NLH 메인 + Triton Invitational",
  },
  {
    id: "wsop-europe-spring",
    name: "WSOP Europe 2026",
    type: "international" as const,
    month: "3~4월",
    monthNum: 3,
    dateRange: "2026.03.31~04.10",
    location: "체코 프라하 (King's Casino)",
    buyin: "€5,300 (메인)",
    emoji: "🏰",
    color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    status: "ended" as const,
    link: "https://www.wsop.com/tournaments/2026-wsop-europe/",
    note: "WSOP 공식 · 로즈바도프→프라하 이전 · 15개 브레이슬릿 · 메인(€10M GTD) 4/3~9",
  },
  {
    id: "ajpc-incheon-1",
    name: "AJPC 사무라이 서킷 인천 1차",
    type: "domestic" as const,
    month: "4월",
    monthNum: 4,
    dateRange: "2026.04.10~04.19",
    location: "한국 인천 (파라다이스 시티)",
    buyin: "다양",
    emoji: "⚔️",
    color: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    status: "ended" as const,
    link: "https://samurai.ajpc.jp",
    note: "AJPC 공식 · Paradise City · 35개 이벤트",
  },
  {
    id: "apt-taipei",
    name: "APT Taipei 2026",
    type: "international" as const,
    month: "4~5월",
    monthNum: 4,
    dateRange: "2026.04.22~05.03",
    location: "대만 타이베이 (Red Space)",
    buyin: "다양",
    emoji: "🏙️",
    color: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    status: "ended" as const,
    link: "https://www.theasianpokertour.com/series",
    note: "APT 공식 · 20주년 시즌 2번째 스톱",
  },
  {
    id: "ept-monte-carlo",
    name: "EPT 몬테카를로 2026",
    type: "international" as const,
    month: "4~5월",
    monthNum: 4,
    dateRange: "2026.04.30~05.10",
    location: "모나코 (Sporting Monte-Carlo)",
    buyin: "€5,300 (메인)",
    emoji: "🎰",
    color: "bg-red-500/15 text-red-400 border-red-500/30",
    status: "ended" as const,
    link: "https://www.pokerstars.com/poker/ept",
    note: "EPT 공식 · 21주년 · €5,300 메인",
  },
  {
    id: "gop-incheon-1",
    name: "Gods of Poker (GOP) 인천",
    type: "domestic" as const,
    month: "5월",
    monthNum: 5,
    dateRange: "2026.05.15~05.24",
    location: "한국 인천 (Paradise City)",
    buyin: "다양",
    emoji: "👑",
    color: "bg-primary/20 text-primary border-primary/40",
    status: "ended" as const,
    link: "https://godsofpoker.com/series/incheon-2026",
    note: "GOP 공식 · 'The Prophecy Unfolds' · 79개 트로피 · 메인 우승 Kyung Min Lee(₩1.48억)",
  },
  {
    id: "wsop-2026",
    name: "제57회 WSOP 2026",
    type: "international" as const,
    month: "5~7월",
    monthNum: 5,
    dateRange: "2026.05.26~07.15",
    location: "미국 라스베이거스 (Horseshoe & Paris)",
    buyin: "$300~$250,000",
    emoji: "🌎",
    color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    status: "ongoing" as const,
    link: "https://www.wsop.com/tournaments/2026-57th-annual-world-series-of-poker/",
    highlight: true,
    note: "진행중 · 100개 브레이슬릿 · 메인이벤트 7/2~13",
  },
  {
    id: "apt-incheon",
    name: "APT 인천 2026",
    type: "domestic" as const,
    month: "8월",
    monthNum: 8,
    dateRange: "2026.08.07~08.16",
    location: "한국 인천 (파라다이스 시티)",
    buyin: "다양",
    emoji: "🌊",
    color: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    status: "upcoming" as const,
    link: "https://www.theasianpokertour.com/series/apt-incheon-south-korea-2026",
    note: "APT 공식 · Paradise City · 메인 KRW 15억 GTD",
  },
  {
    id: "ept-barcelona",
    name: "EPT 바르셀로나 2026",
    type: "international" as const,
    month: "8~9월",
    monthNum: 8,
    dateRange: "2026.08.16~08.29",
    location: "스페인 바르셀로나",
    buyin: "€5,300 (메인)",
    emoji: "🏖️",
    color: "bg-red-500/15 text-red-400 border-red-500/30",
    status: "upcoming" as const,
    link: "https://www.pokerstars.com/poker/ept",
    note: "PokerStars·Casino Barcelona 공식 · 8/16~29",
  },
  {
    id: "gop-manila",
    name: "GOP Manila 2026 (The Arena of Champions)",
    type: "international" as const,
    month: "8월",
    monthNum: 8,
    dateRange: "2026.08.21~08.30",
    location: "필리핀 마닐라 (City of Dreams)",
    buyin: "다양",
    emoji: "👑",
    color: "bg-primary/20 text-primary border-primary/40",
    status: "upcoming" as const,
    link: "https://godsofpoker.com/series/manila-2026",
    note: "GOP 공식 · 'The Arena of Champions' · 82개 이벤트 · 메인 PHP 30M GTD",
  },
  {
    id: "appt-korea",
    name: "APPT 코리아 2026",
    type: "domestic" as const,
    month: "9월",
    monthNum: 9,
    dateRange: "2026.09.03~09.14",
    location: "한국 인천 (파라다이스 시티)",
    buyin: "₩600K~₩5M",
    emoji: "♠️",
    color: "bg-red-500/15 text-red-400 border-red-500/30",
    status: "upcoming" as const,
    link: "https://www.pokerstarslive.com/appt/korea/",
    highlight: true,
    note: "PokerStars 공식 · 6년 만의 한국 복귀 · 메인 9/10~14(₩1.8M) · 총 ₩20억+ GTD",
  },
  {
    id: "gop-taipei-2",
    name: "GOP Taipei II (The Trial of Wisdom)",
    type: "international" as const,
    month: "9월",
    monthNum: 9,
    dateRange: "2026.09.18~09.27",
    location: "대만 타이베이",
    buyin: "다양",
    emoji: "👑",
    color: "bg-primary/20 text-primary border-primary/40",
    status: "upcoming" as const,
    link: "https://godsofpoker.com/series",
    note: "GOP 공식 · 타이베이 2번째 스톱",
  },
  {
    id: "apt-jeju-fall",
    name: "APT 제주 2026 (가을)",
    type: "domestic" as const,
    month: "9~10월",
    monthNum: 9,
    dateRange: "2026.09.25~10.04",
    location: "한국 제주",
    buyin: "다양",
    emoji: "🍂",
    color: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    status: "upcoming" as const,
    link: "https://www.theasianpokertour.com/series",
    note: "APT 공식 · 제주 신화월드 · 가을 시리즈",
  },
  {
    id: "gop-incheon-2",
    name: "GOP Incheon II (The Labyrinth Trail)",
    type: "domestic" as const,
    month: "10~11월",
    monthNum: 10,
    dateRange: "2026.10.30~11.08",
    location: "한국 인천 (Paradise City)",
    buyin: "다양",
    emoji: "👑",
    color: "bg-primary/20 text-primary border-primary/40",
    status: "upcoming" as const,
    link: "https://godsofpoker.com/series",
    note: "GOP 공식 · 10/30~11/8",
  },
  {
    id: "apt-championship",
    name: "APT 챔피언십 2026",
    type: "international" as const,
    month: "11월",
    monthNum: 11,
    dateRange: "2026.11.12~11.29",
    location: "대만 타이베이 (Red Space)",
    buyin: "다양",
    emoji: "🏆",
    color: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    status: "upcoming" as const,
    link: "https://www.theasianpokertour.com/series/apt-championship-taipei-2026/info",
    note: "APT 공식 · 메인 $500만 GTD(11/23~27) · 20주년 피날레",
  },
  {
    id: "wsop-paradise",
    name: "WSOP Paradise 2026",
    type: "international" as const,
    month: "12월",
    monthNum: 12,
    dateRange: "2026.12.01~12.18",
    location: "바하마 나소 (Baha Mar)",
    buyin: "다양",
    emoji: "🌴",
    color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    status: "upcoming" as const,
    link: "https://www.wsop.com/tournaments/2026-wsop-paradise/",
    note: "WSOP 공식 · Baha Mar(나소) 신규 이전 · 이벤트 12/3~17 · 15+ 브레이슬릿",
  },
  {
    id: "ept-prague",
    name: "EPT 프라하 2026",
    type: "international" as const,
    month: "12월",
    monthNum: 12,
    dateRange: "2026.12.02~12.13",
    location: "체코 프라하",
    buyin: "€5,300 (메인)",
    emoji: "🏰",
    color: "bg-red-500/15 text-red-400 border-red-500/30",
    status: "upcoming" as const,
    link: "https://www.pokerstars.com/poker/ept",
    note: "PokerStars 공식 · 2026 EPT 시즌 피날레",
  },
  {
    id: "gop-jeju-2026",
    name: "GOP Jeju 2026 (The Olympus Return)",
    type: "domestic" as const,
    month: "12월",
    monthNum: 12,
    dateRange: "2026.12.04~12.13",
    location: "한국 제주 (신화월드 LES A)",
    buyin: "다양",
    emoji: "🎄",
    color: "bg-primary/20 text-primary border-primary/40",
    status: "upcoming" as const,
    link: "https://godsofpoker.com/series",
    note: "GOP 공식 · 2026 시즌 피날레",
  },
  {
    id: "wpt-championship",
    name: "WPT 월드 챔피언십",
    type: "international" as const,
    month: "12월",
    monthNum: 12,
    dateRange: "2026.12 예정 (미발표)",
    location: "미국 라스베이거스 (Wynn)",
    buyin: "$10,400 예상",
    emoji: "🌍",
    color: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    status: "upcoming" as const,
    link: "https://www.worldpokertour.com",
    note: "WPT 공식 · Prime 챔피언십 12/8~14 발표 · 메인($10,400) 일정 발표 대기",
  },
  {
    id: "hpl-league",
    name: "홀덤펍 리그 (HPL)",
    type: "domestic" as const,
    month: "연중",
    monthNum: 0,
    dateRange: "매월 상시 진행",
    location: "전국 홀덤펍 참가 매장",
    buyin: "무료~소액",
    emoji: "🍺",
    color: "bg-green-500/15 text-green-400 border-green-500/30",
    status: "ongoing" as const,
    link: null,
  },
];

function ScheduleSection() {
  const [filter, setFilter] = useState<"all" | "domestic" | "international">("all");
  const filtered = filter === "all" ? SCHEDULE_2026 : SCHEDULE_2026.filter(t => t.type === filter);

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
        <span className="text-xs bg-primary/15 text-primary border border-primary/30 px-2.5 py-0.5 rounded-full font-bold">2026.06.12 기준</span>
      </div>
      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
        WSOP·APT·APPT·EPT·GOP·AJPC·Triton 공식 발표 일정을 웹검색으로 재확인해 반영했습니다. 변경·연기는 각 대회 공식 사이트를 우선 확인하세요.
      </p>

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
                    {t.month}
                  </span>
                  <h3 className="text-sm font-bold text-foreground leading-snug">{t.name}</h3>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${
                t.status === "ongoing"
                  ? "bg-green-500/15 text-green-400 border-green-500/30"
                  : t.status === "ended"
                    ? "bg-muted/20 text-muted-foreground/80 border-border"
                    : "bg-primary/10 text-primary border-primary/25"
              }`}>
                {t.status === "ongoing" ? "진행중" : t.status === "ended" ? "종료" : "예정"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-background/50 rounded-lg p-2">
                <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">일정</div>
                <div className="font-semibold text-foreground">{t.dateRange}</div>
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
            {t.link && (
              <a href={t.link} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] text-primary font-semibold hover:underline mt-auto">
                공식 사이트 <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

const FAQS = [
  {
    q: "홀덤 대회는 합법인가요?",
    a: "국내 합법 플랫폼(피망 포커, 한게임)의 게임머니 기반 홀덤 대회는 완전히 합법입니다. KPT 등 오프라인 홀덤 대회는 민간 기업이 주최하는 게임 스포츠 행사로 운영됩니다. 해외 홀덤 대회(WSOP 등)는 해당 국가의 카지노 규정에 따라 합법적으로 운영됩니다.",
  },
  {
    q: "초보자도 홀덤 대회에 참가할 수 있나요?",
    a: "네. 피망 포커·한게임 홀덤 대회는 레벨 제한 없이 참가 가능하며, 홀덤펍 리그도 초보자를 환영합니다. KPT 위성 토너먼트도 소액으로 도전할 수 있습니다. 홀덤 대회 참가 자체가 실력 향상에 큰 도움이 됩니다.",
  },
  {
    q: "WSOP 홀덤 대회에 한국인도 참가할 수 있나요?",
    a: "물론입니다. WSOP는 국적 제한이 없으며 매년 수십 명의 한국 선수들이 참가합니다. $10,000 바이인이 부담된다면 WSOP.com에서 $1~$100 수준의 온라인 새틀라이트로 홀덤 대회 시트를 딸 수 있습니다.",
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
    a: "첫 해외 홀덤 대회 도전이라면 APT를 추천합니다. 바이인이 낮고 아시아 선수 비율이 높아 언어·문화 장벽이 낮습니다. 마닐라·서울 개최가 많아 이동 거리도 WSOP(라스베이거스)보다 유리합니다.",
  },
  {
    q: "해외 홀덤 대회 상금에 한국 세금이 붙나요?",
    a: "WSOP, EPT 등 해외에서 받은 포커 대회 상금은 원칙적으로 한국 소득세 신고 대상입니다. 기타소득으로 분류되어 필요경비 공제 후 20%(지방세 포함 22%) 세율이 적용됩니다. 연간 상금이 300만원 초과 시 반드시 종합소득세 신고를 해야 합니다. 해외 대회 개최국에서 먼저 원천징수된 경우 외국납부세액공제로 이중과세를 피할 수 있습니다. 고액 상금 수령 시 세무사 상담을 강력히 권장합니다.",
  },
];

export default function Tournaments() {
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
    "description": "KPT·피망포커·한게임 등 국내 홀덤 대회와 WSOP·WPT·EPT·APT 해외 포커 토너먼트를 한눈에 정리. 대회 구조, 전략, 참가 방법과 초보 로드맵 포함.",
    "author": { "@type": "Organization", "name": "홀덤마스터", "url": "https://www.holdemmaster.com" },
    "publisher": { "@type": "Organization", "name": "홀덤마스터", "url": "https://www.holdemmaster.com", "logo": { "@type": "ImageObject", "url": "https://www.holdemmaster.com/favicon.svg" } },
    "datePublished": "2026-03-26",
    "dateModified": "2026-06-12",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.holdemmaster.com/tournaments" },
    "image": "https://www.holdemmaster.com/images/tournament-hall-wsop.webp",
    "keywords": "홀덤 대회, 포커 토너먼트, KPT, WSOP, 홀덤 대회 참가방법, 피망 포커 대회, 한게임 포커 대회",
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

  const eventSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "WSOP World Series of Poker 2026",
      "description": "세계 최대 홀덤 대회. 메인이벤트 바이인 $10,000, 100개 브레이슬릿 이벤트.",
      "startDate": "2026-05-26",
      "endDate": "2026-07-15",
      "location": { "@type": "Place", "name": "Horseshoe Las Vegas", "address": { "@type": "PostalAddress", "addressLocality": "Las Vegas", "addressCountry": "US" } },
      "organizer": { "@type": "Organization", "name": "WSOP", "url": "https://www.wsop.com" },
      "url": "https://www.wsop.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "APT Incheon 2026 (Asian Poker Tour)",
      "description": "아시아 최대 홀덤 대회 투어 APT의 2026 인천 스톱. 파라다이스 시티 카지노 개최.",
      "startDate": "2026-08-07",
      "endDate": "2026-08-16",
      "location": { "@type": "Place", "name": "Paradise City Casino", "address": { "@type": "PostalAddress", "addressLocality": "Incheon", "addressCountry": "KR" } },
      "organizer": { "@type": "Organization", "name": "Asian Poker Tour", "url": "https://www.theasianpokertour.com" },
      "url": "https://www.theasianpokertour.com/series/apt-incheon-south-korea-2026",
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "APPT Korea 2026 (Asia Pacific Poker Tour)",
      "description": "PokerStars APPT가 6년 만에 한국 복귀. 파라다이스 시티 인천에서 ₩20억+ 보장 개최.",
      "startDate": "2026-09-03",
      "endDate": "2026-09-14",
      "location": { "@type": "Place", "name": "Paradise City Casino", "address": { "@type": "PostalAddress", "addressLocality": "Incheon", "addressCountry": "KR" } },
      "organizer": { "@type": "Organization", "name": "PokerStars LIVE", "url": "https://www.pokerstarslive.com/appt/korea/" },
      "url": "https://www.pokerstarslive.com/appt/korea/",
    },
  ];

  const combinedSchema = { "@context": "https://schema.org", "@graph": [articleSchema, breadcrumbSchema, faqSchema, ...eventSchemas] };

  return (
    <>
      <SEO
        title="⚡ 홀덤 대회 일정 2026 — WSOP 진행중·APT 인천 예정"
        description="【홀덤 대회 일정】WSOP 라스베이거스 진행중(~7/15) · APT 인천 8/7·EPT 바르셀로나 8/16 예정. ⚡2026 국내외 공식 일정·종료/진행중/예정 표시 — 참가 전 확인하세요."
        keywords="홀덤 대회, 홀덤대회, 포커 토너먼트, KPT 코리아포커투어, 피망 포커 대회, 한게임 포커 대회, WSOP 참가방법, WPT, EPT, APT 아시아, 홀덤펍 리그, 포커 대회 일정 2026, 홀덤 토너먼트 전략, 포커 대회 참가 방법"
        path="/tournaments"
        schema={combinedSchema}
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
            국내 피망포커·한게임·KPT·홀덤펍 리그부터<br className="hidden md:block" />
            세계 최대 <strong className="text-foreground">WSOP·WPT·EPT·APT</strong>까지.<br />
            홀덤 대회의 모든 것을 한눈에 정리했습니다.
            <span className="block mt-3 text-sm text-primary/90">2026년 6월 12일 기준 — WSOP 라스베이거스 진행 중(~7/15, 메인 7/2~13) · 하반기 APT 인천(8/7)·APPT 코리아(9/3)·EPT 바르셀로나(8/16) 예정 · 공식 일정 웹검색 재확인 반영</span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 max-w-2xl mx-auto">
            {[
              { icon: MapPin, label: "한국 개최 대회 (2026)", value: "13개+" },
              { icon: Globe, label: "2026 전체 일정", value: "20개+" },
              { icon: Users, label: "WSOP 참가자", value: "15만명+" },
              { icon: DollarSign, label: "WSOP 최고 상금", value: "$121억" },
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
        <ScheduleSection />

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
            2026년 한국(제주·인천)에서만 <strong className="text-foreground">13개 이상</strong>의 세계급 홀덤 대회가 열립니다.
            제주 신화월드와 인천 파라다이스 시티는 아시아 최대 포커 허브로 자리잡았습니다.
            굳이 해외에 나가지 않아도 WSOP·EPT 수준의 국제 대회를 국내에서 직접 경험할 수 있습니다.
          </p>

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
                <div className="text-2xl font-serif font-bold text-primary mb-1">13개+</div>
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
              국내 홀덤 대회는 KPT(코리아 포커 투어)를 중심으로 피망 포커, 한게임, 홀덤펍 리그 등 다양한 형태로 운영되고 있습니다. 해외에서는 WSOP, WPT, EPT, APT 등 세계 4대 투어가 수만 명의 선수들을 모으는 거대 이벤트로 자리잡고 있습니다. 포커가 합법적인 스포츠로 인정받는 세계적 추세에 맞춰 한국에서도 홀덤 대회에 대한 관심이 빠르게 높아지고 있습니다.
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
                    <a href={t.link} target="_blank" rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline">
                      공식 사이트 <ChevronRight className="w-3.5 h-3.5" />
                    </a>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: "/blog/holdem-tournament-buy-in-cost/", emoji: "💰", title: "홀덤 대회 바이인·참가비", desc: "홀덤펍·APT·WSOP 비용과 총예산 계산" },
              { href: "/blog/holdem-tournament-how-to-enter/", emoji: "🎫", title: "홀덤 대회 참가 방법", desc: "온라인 무료부터 WSOP까지 단계별 신청법" },
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
