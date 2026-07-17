"use client";

import { useState, useTransition, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { createPost, toggleLike, updateNickname } from "./actions";
import PostCard, {
  type FeedPost,
  Avatar,
  FLAG,
  GOLD,
  BG,
  CARD,
  BORDER,
  INK,
  MUTED,
  RED,
  NAV,
} from "./post-card";
import EventTab from "./event-tab";
import ChatTab from "./chat-tab";
import FeedNavArrows from "@/components/feed-nav-arrows";
import type { Post } from "@/lib/posts";
import { isSecondaryLocale } from "@/lib/intl";
import { getCurrentEventId } from "@/lib/event-config";

export type { FeedPost } from "./post-card";

// 허브 페이지 목록 — 데스크탑 왼쪽 사이드바에 표시 (한국어 피드 전용)
const HUB_PAGES = [
  { href: "/tournaments",     icon: "🏆", label: "홀덤 대회 일정" },
  { href: "/pub",             icon: "🍺", label: "내 근처 홀덤펍" },
  { href: "/strategy",        icon: "⚡", label: "전략 가이드" },
  { href: "/rules",           icon: "📋", label: "홀덤 규칙" },
  { href: "/calculator",      icon: "🧮", label: "팟오즈 계산기" },
  { href: "/ranking",         icon: "🃏", label: "족보 정리" },
  { href: "/hand-chart",      icon: "📊", label: "핸드 차트" },
  { href: "/quiz",            icon: "🎯", label: "실력 테스트" },
  { href: "/glossary",        icon: "📖", label: "용어 사전" },
  { href: "/holdem-practice", icon: "🎮", label: "홀덤 연습장" },
] as const;

export type CurrentUser = {
  id: string;
  nickname: string;
  language: string;
  avatar_url: string | null;
  badge: string | null;
};

// ── 다국어 UI 라벨 ──────────────────────────────────────────
const LABELS = {
  ko: {
    siteTitle: "홀덤마스터",
    siteSubtitle: "Global Poker Community",
    filterAll: "전체",
    filterStrategy: "전략",
    filterCommunity: "커뮤니티",
    logout: "로그아웃",
    login: "로그인",
    loginArrow: "로그인 →",
    loginSignup: "로그인 / 회원가입 →",
    feed: "피드",
    chat: "채팅",
    event: "이벤트",
    profile: "프로필",
    writePost: "✏️ 글 쓰기",
    searchPlaceholder: "전략, 핸드, 플레이어 검색...",
    writePlaceholder: "핸드, 전략, 결과를 공유해보세요...",
    postButton: "게시",
    posting: "게시 중...",
    postNow: "게시하기",
    writeModalTitle: "새 글 작성",
    draftPlaceholder: "무슨 생각을 하고 계신가요?",
    cancel: "취소",
    multiLangBannerFull: "모든 언어 포스팅을 표시합니다. 타언어 글에는 번역 버튼이 있습니다.",
    strategyPosts: "✦ 전략 포스팅",
    communityTab: "🌏 커뮤니티",
    communityPostsLong: "🌏 커뮤니티 글",
    emptyFeedTitle: "아직 글이 없습니다",
    emptyFeedSub: "첫 번째 글을 남겨보세요!",
    emptyStrategyTitle: "전략 글이 없습니다",
    emptyCommunityTitle: "커뮤니티 글이 없습니다",
    comingSoon: "곧 추가됩니다",
    eventComing: "이벤트 준비 중",
    eventComingSub: "로또형 이벤트가 곧 열립니다",
    loginRequired: "로그인이 필요합니다",
    loginRequiredSub: "내 글과 활동 내역을 확인하려면 로그인하세요",
    myPostsStat: "내 글",
    likesStat: "받은 좋아요",
    commentsStat: "댓글",
    myPostsSection: "내가 쓴 글",
    noPostsTitle: "아직 작성한 글이 없습니다",
    noPostsSub: "첫 글을 남겨보세요!",
    trendingTitle: "🔥 이번 주 인기글",
    eventBadge: "🎰 이벤트 · 준비 중",
    eventTitle: "번호 6개 선택\n기프트콘 증정!",
    eventDesc: "3개 → 5만원 · 4개 → 30만원\n5개 → 100만원",
    eventDrawSchedule: "🔗 매주 일요일 오후 7시 (KST)\n비트코인 블록 해시로 자동 추첨",
    eventButton: "이벤트 보기 →",
    communityLang: "🌐 커뮤니티 언어",
    badge_winner: "🏆 우승자",
    badge_hot: "🔥 인기 유저",
    badge_top: "⭐ TOP 유저",
    badge_participant: "🎟️ 이벤트 참여",
  },
  en: {
    siteTitle: "HoldemMaster",
    siteSubtitle: "Global Poker Community",
    filterAll: "All",
    filterStrategy: "Strategy",
    filterCommunity: "Community",
    logout: "Logout",
    login: "Log in",
    loginArrow: "Log in →",
    loginSignup: "Log in / Sign up →",
    feed: "Feed",
    chat: "Chat",
    event: "Events",
    profile: "Profile",
    writePost: "✏️ Write Post",
    searchPlaceholder: "Search strategy, hands, players...",
    writePlaceholder: "Share your hand, strategy, or results...",
    postButton: "Post",
    posting: "Posting...",
    postNow: "Post",
    writeModalTitle: "New Post",
    draftPlaceholder: "What's on your mind?",
    cancel: "Cancel",
    multiLangBannerFull: "Showing posts in all languages. Posts in other languages have a Translate button.",
    strategyPosts: "✦ Strategy Posts",
    communityTab: "🌏 Community",
    communityPostsLong: "🌏 Community Posts",
    emptyFeedTitle: "No posts yet",
    emptyFeedSub: "Be the first to post!",
    emptyStrategyTitle: "No strategy posts yet",
    emptyCommunityTitle: "No community posts yet",
    comingSoon: "Coming soon",
    eventComing: "Events Coming Soon",
    eventComingSub: "Lotto-style events opening soon",
    loginRequired: "Login Required",
    loginRequiredSub: "Log in to see your posts and activity",
    myPostsStat: "Posts",
    likesStat: "Likes",
    commentsStat: "Comments",
    myPostsSection: "My Posts",
    noPostsTitle: "No posts yet",
    noPostsSub: "Write your first post!",
    trendingTitle: "🔥 Trending This Week",
    eventBadge: "🎰 Event · Coming Soon",
    eventTitle: "Pick 6 Numbers\nWin Gift Cards!",
    eventDesc: "3 match → $30 · 4 match → $200\n5 match → $1,000",
    eventDrawSchedule: "🔗 Every Sunday 7 PM KST\nAuto-draw via Bitcoin block hash",
    eventButton: "View Event →",
    communityLang: "🌐 Community Languages",
    badge_winner: "🏆 Winner",
    badge_hot: "🔥 Popular",
    badge_top: "⭐ Top User",
    badge_participant: "🎟️ Event Participant",
  },
  ja: {
    siteTitle: "HoldemMaster",
    siteSubtitle: "Global Poker Community",
    filterAll: "すべて",
    filterStrategy: "戦略",
    filterCommunity: "コミュニティ",
    logout: "ログアウト",
    login: "ログイン",
    loginArrow: "ログイン →",
    loginSignup: "ログイン / 登録 →",
    feed: "フィード",
    chat: "チャット",
    event: "イベント",
    profile: "プロフィール",
    writePost: "✏️ 投稿する",
    searchPlaceholder: "戦略、ハンド、プレイヤーを検索...",
    writePlaceholder: "ハンド、戦略、結果をシェアしよう...",
    postButton: "投稿",
    posting: "投稿中...",
    postNow: "投稿する",
    writeModalTitle: "新規投稿",
    draftPlaceholder: "何を考えていますか？",
    cancel: "キャンセル",
    multiLangBannerFull: "全言語の投稿を表示しています。他言語の投稿には翻訳ボタンがあります。",
    strategyPosts: "✦ 戦略投稿",
    communityTab: "🌏 コミュニティ",
    communityPostsLong: "🌏 コミュニティ投稿",
    emptyFeedTitle: "まだ投稿がありません",
    emptyFeedSub: "最初の投稿をしてみよう！",
    emptyStrategyTitle: "戦略投稿がありません",
    emptyCommunityTitle: "コミュニティ投稿がありません",
    comingSoon: "近日公開",
    eventComing: "イベント準備中",
    eventComingSub: "ロト形式のイベントが近日開催",
    loginRequired: "ログインが必要です",
    loginRequiredSub: "投稿と活動履歴を確認するにはログインしてください",
    myPostsStat: "投稿",
    likesStat: "いいね",
    commentsStat: "コメント",
    myPostsSection: "自分の投稿",
    noPostsTitle: "まだ投稿がありません",
    noPostsSub: "最初の投稿をしよう！",
    trendingTitle: "🔥 今週のトレンド",
    eventBadge: "🎰 イベント · 準備中",
    eventTitle: "6つの数字を選んで\nギフト券をゲット！",
    eventDesc: "3一致 → $30 · 4 → $200\n5 → $1,000",
    eventDrawSchedule: "🔗 毎週日曜 午後7時 (KST)\nBitcoin block hashで自動抽選",
    eventButton: "イベントを見る →",
    communityLang: "🌐 コミュニティ言語",
    badge_winner: "🏆 優勝者",
    badge_hot: "🔥 人気ユーザー",
    badge_top: "⭐ TOPユーザー",
    badge_participant: "🎟️ イベント参加",
  },
  zh: {
    siteTitle: "HoldemMaster",
    siteSubtitle: "Global Poker Community",
    filterAll: "全部",
    filterStrategy: "策略",
    filterCommunity: "社区",
    logout: "退出登录",
    login: "登录",
    loginArrow: "登录 →",
    loginSignup: "登录 / 注册 →",
    feed: "动态",
    chat: "聊天",
    event: "活动",
    profile: "我的",
    writePost: "✏️ 发帖",
    searchPlaceholder: "搜索策略、手牌、玩家...",
    writePlaceholder: "分享你的手牌、策略或战果...",
    postButton: "发布",
    posting: "发布中...",
    postNow: "发布",
    writeModalTitle: "新帖子",
    draftPlaceholder: "你在想什么？",
    cancel: "取消",
    multiLangBannerFull: "显示所有语言的帖子。其他语言的帖子有翻译按钮。",
    strategyPosts: "✦ 策略帖子",
    communityTab: "🌏 社区",
    communityPostsLong: "🌏 社区帖子",
    emptyFeedTitle: "暂无帖子",
    emptyFeedSub: "来发第一条帖子吧！",
    emptyStrategyTitle: "暂无策略帖子",
    emptyCommunityTitle: "暂无社区帖子",
    comingSoon: "即将推出",
    eventComing: "活动准备中",
    eventComingSub: "彩票式活动即将开启",
    loginRequired: "需要登录",
    loginRequiredSub: "登录以查看你的帖子和活动记录",
    myPostsStat: "帖子",
    likesStat: "获赞",
    commentsStat: "评论",
    myPostsSection: "我的帖子",
    noPostsTitle: "暂无帖子",
    noPostsSub: "写下第一条帖子！",
    trendingTitle: "🔥 本周热帖",
    eventBadge: "🎰 活动 · 准备中",
    eventTitle: "选6个数字\n赢取礼品券！",
    eventDesc: "3个匹配 → $30 · 4 → $200\n5 → $1,000",
    eventDrawSchedule: "🔗 每周日晚7点 (KST)\n比特币区块哈希自动抽签",
    eventButton: "查看活动 →",
    communityLang: "🌐 社区语言",
    badge_winner: "🏆 冠军",
    badge_hot: "🔥 人气用户",
    badge_top: "⭐ TOP用户",
    badge_participant: "🎟️ 活动参与者",
  },
  es: {
    siteTitle: "HoldemMaster", siteSubtitle: "Global Poker Community",
    filterAll: "Todo", filterStrategy: "Estrategia", filterCommunity: "Comunidad",
    logout: "Cerrar sesión", login: "Iniciar sesión", loginArrow: "Iniciar sesión →", loginSignup: "Iniciar sesión / Registrarse →",
    feed: "Feed", chat: "Chat", event: "Eventos", profile: "Perfil",
    writePost: "✏️ Escribir", searchPlaceholder: "Buscar estrategia, manos, jugadores...", writePlaceholder: "Comparte tu mano, estrategia o resultado...",
    postButton: "Publicar", posting: "Publicando...", postNow: "Publicar", writeModalTitle: "Nueva publicación", draftPlaceholder: "¿Qué estás pensando?", cancel: "Cancelar",
    multiLangBannerFull: "Mostrando publicaciones en todos los idiomas. Las publicaciones en otros idiomas tienen botón de traducción.",
    strategyPosts: "✦ Publicaciones de estrategia", communityTab: "🌏 Comunidad", communityPostsLong: "🌏 Publicaciones de la comunidad",
    emptyFeedTitle: "Aún no hay publicaciones", emptyFeedSub: "¡Sé el primero en publicar!", emptyStrategyTitle: "No hay publicaciones de estrategia", emptyCommunityTitle: "No hay publicaciones de comunidad",
    comingSoon: "Próximamente", eventComing: "Eventos próximamente", eventComingSub: "Eventos estilo lotería abrirán pronto",
    loginRequired: "Inicio de sesión requerido", loginRequiredSub: "Inicia sesión para ver tus publicaciones y actividad",
    myPostsStat: "Publicaciones", likesStat: "Me gusta", commentsStat: "Comentarios", myPostsSection: "Mis publicaciones", noPostsTitle: "Sin publicaciones", noPostsSub: "¡Escribe tu primera publicación!",
    trendingTitle: "🔥 Tendencias esta semana", eventBadge: "🎰 Evento · Próximamente", eventTitle: "Elige 6 números\n¡Gana tarjetas regalo!", eventDesc: "3 coincidencias → $30 · 4 → $200\n5 → $1,000",
    eventDrawSchedule: "🔗 Cada domingo 7 PM KST\nSorteo automático via Bitcoin block hash",
    eventButton: "Ver evento →", communityLang: "🌐 Idiomas de la comunidad",
    badge_winner: "🏆 Campeón", badge_hot: "🔥 Popular", badge_top: "⭐ Top Usuario", badge_participant: "🎟️ Participante",
  },
  de: {
    siteTitle: "HoldemMaster", siteSubtitle: "Global Poker Community",
    filterAll: "Alle", filterStrategy: "Strategie", filterCommunity: "Community",
    logout: "Abmelden", login: "Anmelden", loginArrow: "Anmelden →", loginSignup: "Anmelden / Registrieren →",
    feed: "Feed", chat: "Chat", event: "Events", profile: "Profil",
    writePost: "✏️ Schreiben", searchPlaceholder: "Strategie, Hände, Spieler suchen...", writePlaceholder: "Hand, Strategie oder Ergebnis teilen...",
    postButton: "Posten", posting: "Posten...", postNow: "Posten", writeModalTitle: "Neuer Beitrag", draftPlaceholder: "Was denkst du?", cancel: "Abbrechen",
    multiLangBannerFull: "Zeigt Beiträge in allen Sprachen. Beiträge in anderen Sprachen haben eine Übersetzungsschaltfläche.",
    strategyPosts: "✦ Strategiebeiträge", communityTab: "🌏 Community", communityPostsLong: "🌏 Community-Beiträge",
    emptyFeedTitle: "Noch keine Beiträge", emptyFeedSub: "Sei der Erste!", emptyStrategyTitle: "Keine Strategiebeiträge", emptyCommunityTitle: "Keine Community-Beiträge",
    comingSoon: "Demnächst", eventComing: "Events demnächst", eventComingSub: "Lotto-Events öffnen bald",
    loginRequired: "Anmeldung erforderlich", loginRequiredSub: "Melde dich an, um deine Beiträge zu sehen",
    myPostsStat: "Beiträge", likesStat: "Likes", commentsStat: "Kommentare", myPostsSection: "Meine Beiträge", noPostsTitle: "Keine Beiträge", noPostsSub: "Schreibe deinen ersten Beitrag!",
    trendingTitle: "🔥 Trends dieser Woche", eventBadge: "🎰 Event · Demnächst", eventTitle: "6 Zahlen wählen\nGeschenkkarten gewinnen!", eventDesc: "3 Treffer → $30 · 4 → $200\n5 → $1,000",
    eventDrawSchedule: "🔗 Jeden Sonntag 19 Uhr KST\nAuto-Ziehung per Bitcoin Block Hash",
    eventButton: "Event ansehen →", communityLang: "🌐 Community-Sprachen",
    badge_winner: "🏆 Gewinner", badge_hot: "🔥 Beliebt", badge_top: "⭐ Top User", badge_participant: "🎟️ Teilnehmer",
  },
  pt: {
    siteTitle: "HoldemMaster", siteSubtitle: "Global Poker Community",
    filterAll: "Tudo", filterStrategy: "Estratégia", filterCommunity: "Comunidade",
    logout: "Sair", login: "Entrar", loginArrow: "Entrar →", loginSignup: "Entrar / Cadastrar →",
    feed: "Feed", chat: "Chat", event: "Eventos", profile: "Perfil",
    writePost: "✏️ Escrever", searchPlaceholder: "Buscar estratégia, mãos, jogadores...", writePlaceholder: "Compartilhe sua mão, estratégia ou resultado...",
    postButton: "Publicar", posting: "Publicando...", postNow: "Publicar", writeModalTitle: "Nova publicação", draftPlaceholder: "O que você está pensando?", cancel: "Cancelar",
    multiLangBannerFull: "Mostrando publicações em todos os idiomas. Publicações em outros idiomas têm botão de tradução.",
    strategyPosts: "✦ Publicações de estratégia", communityTab: "🌏 Comunidade", communityPostsLong: "🌏 Publicações da comunidade",
    emptyFeedTitle: "Sem publicações ainda", emptyFeedSub: "Seja o primeiro a publicar!", emptyStrategyTitle: "Sem publicações de estratégia", emptyCommunityTitle: "Sem publicações da comunidade",
    comingSoon: "Em breve", eventComing: "Eventos em breve", eventComingSub: "Eventos estilo loteria abrirão em breve",
    loginRequired: "Login necessário", loginRequiredSub: "Faça login para ver suas publicações e atividades",
    myPostsStat: "Publicações", likesStat: "Curtidas", commentsStat: "Comentários", myPostsSection: "Minhas publicações", noPostsTitle: "Sem publicações", noPostsSub: "Escreva sua primeira publicação!",
    trendingTitle: "🔥 Tendências desta semana", eventBadge: "🎰 Evento · Em breve", eventTitle: "Escolha 6 números\nGanhe vales-presente!", eventDesc: "3 acertos → $30 · 4 → $200\n5 → $1,000",
    eventDrawSchedule: "🔗 Todo domingo 19h KST\nSorteio automático via Bitcoin block hash",
    eventButton: "Ver evento →", communityLang: "🌐 Idiomas da comunidade",
    badge_winner: "🏆 Campeão", badge_hot: "🔥 Popular", badge_top: "⭐ Top Usuário", badge_participant: "🎟️ Participante",
  },
  id: {
    siteTitle: "HoldemMaster", siteSubtitle: "Global Poker Community",
    filterAll: "Semua", filterStrategy: "Strategi", filterCommunity: "Komunitas",
    logout: "Keluar", login: "Masuk", loginArrow: "Masuk →", loginSignup: "Masuk / Daftar →",
    feed: "Feed", chat: "Chat", event: "Event", profile: "Profil",
    writePost: "✏️ Tulis", searchPlaceholder: "Cari strategi, kartu, pemain...", writePlaceholder: "Bagikan kartu, strategi, atau hasilmu...",
    postButton: "Posting", posting: "Memposting...", postNow: "Posting", writeModalTitle: "Postingan Baru", draftPlaceholder: "Apa yang kamu pikirkan?", cancel: "Batal",
    multiLangBannerFull: "Menampilkan postingan semua bahasa. Postingan bahasa lain memiliki tombol terjemahan.",
    strategyPosts: "✦ Postingan Strategi", communityTab: "🌏 Komunitas", communityPostsLong: "🌏 Postingan Komunitas",
    emptyFeedTitle: "Belum ada postingan", emptyFeedSub: "Jadilah yang pertama posting!", emptyStrategyTitle: "Belum ada postingan strategi", emptyCommunityTitle: "Belum ada postingan komunitas",
    comingSoon: "Segera hadir", eventComing: "Event segera hadir", eventComingSub: "Event gaya lotre akan segera dibuka",
    loginRequired: "Login diperlukan", loginRequiredSub: "Login untuk melihat postingan dan aktivitasmu",
    myPostsStat: "Postingan", likesStat: "Suka", commentsStat: "Komentar", myPostsSection: "Postinganku", noPostsTitle: "Belum ada postingan", noPostsSub: "Tulis postingan pertamamu!",
    trendingTitle: "🔥 Trending Minggu Ini", eventBadge: "🎰 Event · Segera", eventTitle: "Pilih 6 Angka\nMenangkan Voucher!", eventDesc: "3 cocok → $30 · 4 → $200\n5 → $1,000",
    eventDrawSchedule: "🔗 Setiap Minggu jam 7 malam KST\nUndian otomatis via Bitcoin block hash",
    eventButton: "Lihat event →", communityLang: "🌐 Bahasa Komunitas",
    badge_winner: "🏆 Juara", badge_hot: "🔥 Populer", badge_top: "⭐ Top User", badge_participant: "🎟️ Peserta",
  },
  ms: {
    siteTitle: "HoldemMaster", siteSubtitle: "Global Poker Community",
    filterAll: "Semua", filterStrategy: "Strategi", filterCommunity: "Komuniti",
    logout: "Log keluar", login: "Log masuk", loginArrow: "Log masuk →", loginSignup: "Log masuk / Daftar →",
    feed: "Feed", chat: "Chat", event: "Acara", profile: "Profil",
    writePost: "✏️ Tulis", searchPlaceholder: "Cari strategi, kad, pemain...", writePlaceholder: "Kongsi kad, strategi atau keputusan anda...",
    postButton: "Hantar", posting: "Menghantar...", postNow: "Hantar", writeModalTitle: "Siaran Baru", draftPlaceholder: "Apa yang anda fikirkan?", cancel: "Batal",
    multiLangBannerFull: "Menunjukkan siaran semua bahasa. Siaran bahasa lain mempunyai butang terjemahan.",
    strategyPosts: "✦ Siaran Strategi", communityTab: "🌏 Komuniti", communityPostsLong: "🌏 Siaran Komuniti",
    emptyFeedTitle: "Belum ada siaran", emptyFeedSub: "Jadilah yang pertama!", emptyStrategyTitle: "Tiada siaran strategi", emptyCommunityTitle: "Tiada siaran komuniti",
    comingSoon: "Akan datang", eventComing: "Acara akan datang", eventComingSub: "Acara gaya loteri akan dibuka",
    loginRequired: "Log masuk diperlukan", loginRequiredSub: "Log masuk untuk melihat siaran dan aktiviti anda",
    myPostsStat: "Siaran", likesStat: "Suka", commentsStat: "Komen", myPostsSection: "Siaran saya", noPostsTitle: "Tiada siaran", noPostsSub: "Tulis siaran pertama anda!",
    trendingTitle: "🔥 Trending Minggu Ini", eventBadge: "🎰 Acara · Akan datang", eventTitle: "Pilih 6 Nombor\nMenang Baucar!", eventDesc: "3 padanan → $30 · 4 → $200\n5 → $1,000",
    eventDrawSchedule: "🔗 Setiap Ahad jam 7 petang KST\nCabutan automatik via Bitcoin block hash",
    eventButton: "Lihat acara →", communityLang: "🌐 Bahasa Komuniti",
    badge_winner: "🏆 Juara", badge_hot: "🔥 Popular", badge_top: "⭐ Top User", badge_participant: "🎟️ Peserta",
  },
  vi: {
    siteTitle: "HoldemMaster", siteSubtitle: "Global Poker Community",
    filterAll: "Tất cả", filterStrategy: "Chiến lược", filterCommunity: "Cộng đồng",
    logout: "Đăng xuất", login: "Đăng nhập", loginArrow: "Đăng nhập →", loginSignup: "Đăng nhập / Đăng ký →",
    feed: "Feed", chat: "Chat", event: "Sự kiện", profile: "Hồ sơ",
    writePost: "✏️ Viết bài", searchPlaceholder: "Tìm kiếm chiến lược, bài, người chơi...", writePlaceholder: "Chia sẻ bài của bạn, chiến lược hoặc kết quả...",
    postButton: "Đăng", posting: "Đang đăng...", postNow: "Đăng", writeModalTitle: "Bài viết mới", draftPlaceholder: "Bạn đang nghĩ gì?", cancel: "Hủy",
    multiLangBannerFull: "Hiển thị bài viết tất cả ngôn ngữ. Bài viết ngôn ngữ khác có nút dịch.",
    strategyPosts: "✦ Bài chiến lược", communityTab: "🌏 Cộng đồng", communityPostsLong: "🌏 Bài cộng đồng",
    emptyFeedTitle: "Chưa có bài viết", emptyFeedSub: "Hãy là người đầu tiên đăng!", emptyStrategyTitle: "Chưa có bài chiến lược", emptyCommunityTitle: "Chưa có bài cộng đồng",
    comingSoon: "Sắp ra mắt", eventComing: "Sự kiện sắp tới", eventComingSub: "Sự kiện kiểu xổ số sắp mở",
    loginRequired: "Cần đăng nhập", loginRequiredSub: "Đăng nhập để xem bài viết và hoạt động của bạn",
    myPostsStat: "Bài viết", likesStat: "Lượt thích", commentsStat: "Bình luận", myPostsSection: "Bài của tôi", noPostsTitle: "Chưa có bài", noPostsSub: "Viết bài đầu tiên của bạn!",
    trendingTitle: "🔥 Xu hướng tuần này", eventBadge: "🎰 Sự kiện · Sắp tới", eventTitle: "Chọn 6 số\nNhận thẻ quà tặng!", eventDesc: "3 khớp → $30 · 4 → $200\n5 → $1,000",
    eventDrawSchedule: "🔗 Mỗi Chủ nhật 7 tối KST\nQuay thưởng tự động via Bitcoin block hash",
    eventButton: "Xem sự kiện →", communityLang: "🌐 Ngôn ngữ cộng đồng",
    badge_winner: "🏆 Vô địch", badge_hot: "🔥 Phổ biến", badge_top: "⭐ Top User", badge_participant: "🎟️ Người tham gia",
  },
  tr: {
    siteTitle: "HoldemMaster", siteSubtitle: "Global Poker Community",
    filterAll: "Tümü", filterStrategy: "Strateji", filterCommunity: "Topluluk",
    logout: "Çıkış yap", login: "Giriş yap", loginArrow: "Giriş yap →", loginSignup: "Giriş / Kayıt →",
    feed: "Feed", chat: "Sohbet", event: "Etkinlikler", profile: "Profil",
    writePost: "✏️ Yaz", searchPlaceholder: "Strateji, el, oyuncu ara...", writePlaceholder: "El, strateji veya sonucunu paylaş...",
    postButton: "Paylaş", posting: "Paylaşılıyor...", postNow: "Paylaş", writeModalTitle: "Yeni Gönderi", draftPlaceholder: "Ne düşünüyorsun?", cancel: "İptal",
    multiLangBannerFull: "Tüm dillerdeki gönderiler gösteriliyor. Diğer dillerdeki gönderilerde çeviri butonu var.",
    strategyPosts: "✦ Strateji Gönderileri", communityTab: "🌏 Topluluk", communityPostsLong: "🌏 Topluluk Gönderileri",
    emptyFeedTitle: "Henüz gönderi yok", emptyFeedSub: "İlk gönderinizi yapın!", emptyStrategyTitle: "Strateji gönderisi yok", emptyCommunityTitle: "Topluluk gönderisi yok",
    comingSoon: "Yakında", eventComing: "Etkinlikler yakında", eventComingSub: "Piyango tarzı etkinlikler yakında açılıyor",
    loginRequired: "Giriş gerekli", loginRequiredSub: "Gönderi ve etkinliğinizi görmek için giriş yapın",
    myPostsStat: "Gönderi", likesStat: "Beğeni", commentsStat: "Yorum", myPostsSection: "Gönderilerim", noPostsTitle: "Gönderi yok", noPostsSub: "İlk gönderinizi yazın!",
    trendingTitle: "🔥 Bu Haftanın Trendleri", eventBadge: "🎰 Etkinlik · Yakında", eventTitle: "6 Numara Seç\nHediye Kartı Kazan!", eventDesc: "3 eşleşme → $30 · 4 → $200\n5 → $1,000",
    eventDrawSchedule: "🔗 Her Pazar 19:00 KST\nBitcoin block hash ile otomatik çekiliş",
    eventButton: "Etkinliği gör →", communityLang: "🌐 Topluluk Dilleri",
    badge_winner: "🏆 Kazanan", badge_hot: "🔥 Popüler", badge_top: "⭐ Top Kullanıcı", badge_participant: "🎟️ Katılımcı",
  },
} as const;

type LangKey = keyof typeof LABELS;

function getL(lang: string) {
  return LABELS[(lang as LangKey) in LABELS ? (lang as LangKey) : "en"];
}

const FILTER_PILLS = ["All", "Strategy", "Community"] as const;
type FilterKey = (typeof FILTER_PILLS)[number];

function getTrending(posts: FeedPost[]) {
  return [...posts].sort((a, b) => b.likeCount - a.likeCount).slice(0, 4);
}

type EventData = {
  myEntry: { numbers: number[] } | null;
  myPostCount: number;
  myLikeCount: number;
} | null;

// ── 정적 피드 구성 (SSR/첫 페인트용 — 모듈 레벨 순수 데이터/함수) ──────────
// 한국어 페이지용 정적 티저 카드 (페이지 로드 즉시 노출)
// GSC 클릭 순 (2026-06-26 기준): tournaments 25 > pub 7 > strategy > rules > calculator > ranking > hand-chart > quiz > glossary > holdem-practice
const KO_PAGE_TEASERS: FeedPost[] = [
  { id: "page:tournaments", type: "admin", language: "ko", title: "2026 홀덤 대회 일정", content: "WSOP 진행 중 · APT 인천(8/7)·APPT 코리아(9/3) 예정. 국내외 대회 일정 한눈에.", imageUrl: null, likeCount: 0, commentCount: 0, createdAt: "2026-01-10T00:00:00Z", authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false, pageHref: "/tournaments", pageIcon: "🏆" },
  { id: "page:pub", type: "admin", language: "ko", title: "내 근처 홀덤펍 찾기", content: "서울·경기 홀덤펍 위치, 바이인, 블라인드 구조 한 번에 비교.", imageUrl: null, likeCount: 0, commentCount: 0, createdAt: "2026-01-09T00:00:00Z", authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false, pageHref: "/pub", pageIcon: "🍺" },
  { id: "page:strategy", type: "admin", language: "ko", title: "홀덤 전략 가이드", content: "포지션·핸드 선택·3-bet·버블 전략까지. 실전에서 바로 쓰는 전략 모음.", imageUrl: null, likeCount: 0, commentCount: 0, createdAt: "2026-01-08T00:00:00Z", authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false, pageHref: "/strategy", pageIcon: "⚡" },
  { id: "page:rules", type: "admin", language: "ko", title: "홀덤 규칙 완전 정리", content: "딜링부터 쇼다운까지 — 텍사스 홀덤 기본 규칙을 순서대로 정리했습니다.", imageUrl: null, likeCount: 0, commentCount: 0, createdAt: "2026-01-07T00:00:00Z", authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false, pageHref: "/rules", pageIcon: "📋" },
  { id: "page:calculator", type: "admin", language: "ko", title: "팟오즈 & 에퀴티 계산기", content: "내 핸드의 에퀴티와 팟오즈를 실시간으로 계산해보세요.", imageUrl: null, likeCount: 0, commentCount: 0, createdAt: "2026-01-06T00:00:00Z", authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false, pageHref: "/calculator", pageIcon: "🧮" },
  { id: "page:ranking", type: "admin", language: "ko", title: "홀덤 족보 완전 정리", content: "로열플러시부터 하이카드까지 — 10가지 핸드 랭킹을 한눈에 확인하세요.", imageUrl: null, likeCount: 0, commentCount: 0, createdAt: "2026-01-05T00:00:00Z", authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false, pageHref: "/ranking", pageIcon: "🃏" },
  { id: "page:hand-chart", type: "admin", language: "ko", title: "스타팅 핸드 차트", content: "포지션별 오픈/콜/3-bet 핸드 범위를 차트로 확인하세요.", imageUrl: null, likeCount: 0, commentCount: 0, createdAt: "2026-01-04T00:00:00Z", authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false, pageHref: "/hand-chart", pageIcon: "📊" },
  { id: "page:quiz", type: "admin", language: "ko", title: "홀덤 실력 테스트 퀴즈", content: "10문제로 내 홀덤 수준을 확인해보세요. 결과 공유도 가능!", imageUrl: null, likeCount: 0, commentCount: 0, createdAt: "2026-01-03T00:00:00Z", authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false, pageHref: "/quiz", pageIcon: "🎯" },
  { id: "page:glossary", type: "admin", language: "ko", title: "홀덤 용어 사전", content: "올인, 블러프, ICM, 팟오즈… 헷갈리는 용어를 한 번에 정리.", imageUrl: null, likeCount: 0, commentCount: 0, createdAt: "2026-01-02T00:00:00Z", authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false, pageHref: "/glossary", pageIcon: "📖" },
  { id: "page:holdem-practice", type: "admin", language: "ko", title: "홀덤 연습장 🎮", content: "실제 핸드 상황을 시뮬레이션하며 폴드·콜·레이즈 판단력을 키워보세요.", imageUrl: null, likeCount: 0, commentCount: 0, createdAt: "2026-01-01T00:00:00Z", authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false, pageHref: "/holdem-practice", pageIcon: "🎮" },
];

// GSC 클릭 기준 상위 고정 (2026-06-26) — 이 순서대로 피드 최상단에 고정
const PINNED_IDS = [
  "page:tournaments",
  "blog:holdem-masters-7th-guide",
  "blog:apt-incheon-2026-guide",
  "blog:holdem-tiebreak-rules",
  "blog:appt-korea-2026-guide",
  "blog:pocket-kings-kk-strategy",
];

/** 고정글 우선 + 최신순 정렬 (초기 정적 렌더와 Supabase 로드 후가 동일한 규칙을 쓰도록 공유) */
function sortFeed(list: FeedPost[]): FeedPost[] {
  return [...list].sort((a, b) => {
    const ai = PINNED_IDS.indexOf(a.id);
    const bi = PINNED_IDS.indexOf(b.id);
    if (ai !== -1 && bi === -1) return -1;
    if (ai === -1 && bi !== -1) return 1;
    if (ai !== -1 && bi !== -1) return ai - bi;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

/** 정적 블로그 티저 + (ko 한정) 페이지 티저 — props만으로 동기 계산 가능 → SSR/첫 페인트부터 렌더 */
function buildStaticTeasers(
  pageLocale: string | undefined,
  blogPosts: Omit<Post, "content">[]
): FeedPost[] {
  const blogTeasers: FeedPost[] = pageLocale && isSecondaryLocale(pageLocale)
    ? blogPosts.map((p) => ({
        id: `blog:${p.slug}`,
        type: "admin" as const,
        language: pageLocale,
        title: p.title,
        content: p.tldr || p.desc,
        imageUrl: p.image ?? null,
        likeCount: 0,
        commentCount: 0,
        createdAt: new Date(p.updated || p.date).toISOString(),
        authorNickname: "HoldemMaster",
        authorAvatar: null,
        authorBadge: null,
        liked: false,
        blogSlug: p.slug,
        blogLocale: pageLocale,
        category: p.category,
        readTime: p.readTime,
      }))
    : blogPosts.map((p) => ({
        id: `blog:${p.slug}`,
        type: "admin" as const,
        language: "ko",
        title: p.title,
        content: p.tldr || p.desc,
        imageUrl: p.image ?? null,
        likeCount: 0,
        commentCount: 0,
        createdAt: new Date(p.updated || p.date).toISOString(),
        authorNickname: "HoldemMaster",
        authorAvatar: null,
        authorBadge: null,
        liked: false,
        blogSlug: p.slug,
        category: p.category,
        readTime: p.readTime,
      }));
  return [...blogTeasers, ...(pageLocale ? [] : KO_PAGE_TEASERS)];
}

export default function CommunityClient({
  pageLocale,
  blogPosts,
}: {
  /** locale 전용 피드 페이지에서 전달 — UI 언어를 강제 지정 */
  pageLocale?: string;
  /** 블로그 티저용 메타데이터(본문 content 제외). 서버(community-home)에서 전달 — 클라이언트가 전체 본문을 번들하지 않게. */
  blogPosts: Omit<Post, "content">[];
}) {
  const router = useRouter();

  // 정적 티저(블로그 + ko 페이지) — props만으로 동기 계산되므로 SSR/첫 페인트부터 렌더 가능.
  // 이걸 posts 초기값으로 시딩해 LCP 콘텐츠가 처음부터 존재하게 하고(Supabase 대기 X),
  // 로딩→피드 스왑으로 인한 대규모 레이아웃 시프트(CLS)를 제거한다.
  const staticTeasers = useMemo(
    () => buildStaticTeasers(pageLocale, blogPosts),
    [pageLocale, blogPosts]
  );

  // loading = "Supabase 커뮤니티 글 로딩 중" (정적 티저는 이미 렌더된 상태)
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [myLanguage, setMyLanguage] = useState(pageLocale ?? "ko");
  const [tab, setTab] = useState<"home" | "chat" | "event" | "profile">("home");
  const [feedFilter, setFeedFilter] = useState<FilterKey>("All");
  const [posts, setPosts] = useState<FeedPost[]>(() => sortFeed(staticTeasers));
  const [writeOpen, setWriteOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [isPending, startTransition] = useTransition();
  const [myPosts, setMyPosts] = useState<FeedPost[]>([]);
  const [eventData, setEventData] = useState<EventData>(null);

  const [editingNickname, setEditingNickname] = useState(false);
  const [nicknameInput, setNicknameInput] = useState("");
  const [nicknameErr, setNicknameErr] = useState<string | null>(null);

  // ── 무한스크롤 ────────────────────────────────────────────
  const PAGE_SIZE = 20;
  const [communityOffset, setCommunityOffset] = useState(PAGE_SIZE);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // ── 피드 스크롤 위치 복원 ──────────────────────────────────
  // 모바일은 내부 overflow-y-auto div가 스크롤러(window 아님)라 브라우저 기본
  // 스크롤 복원이 동작하지 않는다. 데스크톱은 window 스크롤. 둘 다 세션에 저장 후
  // 뒤로가기로 재진입해 피드가 렌더된 뒤 복원한다.
  const feedScrollRef = useRef<HTMLDivElement>(null);
  const desktopHeaderRef = useRef<HTMLElement>(null); // 데스크톱 sticky 마스트헤드 (피드 화살표 오프셋 측정용)
  const scrollRestoredRef = useRef(false);
  const restoringRef = useRef(false); // 복원 중에는 저장 잠금(프로그램적 스크롤이 저장값 덮어쓰기 방지)
  const SCROLL_KEY = `feedScroll:${pageLocale ?? "ko"}`;
  const OFFSET_KEY = `feedOffset:${pageLocale ?? "ko"}`; // 로드했던 커뮤니티 글 수(무한스크롤 깊이)

  // 외부 링크(블로그 CTA 등)에서 ?tab=event 로 진입 시 해당 탭 바로 열기
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("tab");
    if (t === "event" || t === "chat" || t === "profile") setTab(t);
  }, []);

  // 탭 변경 시 URL(?tab=)에 동기화 → 도구(계산기 등)에 갔다가 뒤로가기 시 직전 탭(예: 채팅) 복원.
  const tabSynced = useRef(false);
  useEffect(() => {
    if (!tabSynced.current) { tabSynced.current = true; return; } // 첫 렌더는 마운트 읽기와 충돌 방지로 skip
    try {
      const url = new URL(window.location.href);
      if (tab === "home") url.searchParams.delete("tab");
      else url.searchParams.set("tab", tab);
      window.history.replaceState(window.history.state, "", url.toString());
    } catch { /* noop */ }
  }, [tab]);

  useEffect(() => {
    // OAuth 에러 파라미터 처리
    const params = new URLSearchParams(window.location.search);
    if (params.get("error") || params.get("error_code")) {
      router.push("/login?error=oauth");
      return;
    }

    const supabase = createClient();

    async function load() {
      // 인증 + 프로필
      const { data: { user } } = await supabase.auth.getUser();
      let currentUserData: CurrentUser | null = null;
      let lang = pageLocale ?? "ko";

      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("id, nickname, language, avatar_url, badge")
          .eq("id", user.id)
          .single();
        if (profile) {
          currentUserData = profile as CurrentUser;
          if (!pageLocale) lang = profile.language;
        }
      }
      setCurrentUser(currentUserData);
      setMyLanguage(lang);

      // 커뮤니티 글 fetch — 뒤로가기 재진입 시 이전에 무한스크롤로 로드했던
      // 만큼(savedOffset) 한 번에 불러와 스크롤 높이를 그대로 재구성한다. (최대 500개 캡)
      const adminLang = pageLocale ?? lang;
      let savedOffset = PAGE_SIZE;
      try {
        savedOffset = Math.min(Math.max(PAGE_SIZE, Number(sessionStorage.getItem(OFFSET_KEY)) || PAGE_SIZE), 500);
      } catch { /* sessionStorage 접근 불가 시 기본값 */ }
      const { data: postsRaw } = await supabase
        .from("posts")
        .select("id, type, language, title, content, image_url, like_count, comment_count, created_at, author_id, profiles(nickname, avatar_url, badge)")
        .or(`type.eq.community,and(type.eq.admin,language.eq.${adminLang})`)
        .order("created_at", { ascending: false })
        .range(0, savedOffset - 1);
      if ((postsRaw?.length ?? 0) < savedOffset) setHasMore(false);
      setCommunityOffset(savedOffset);
      try { sessionStorage.setItem(OFFSET_KEY, String(savedOffset)); } catch { /* noop */ }

      // 좋아요 목록
      let likedIds: string[] = [];
      if (user) {
        const { data: likes } = await supabase
          .from("likes")
          .select("post_id")
          .eq("user_id", user.id);
        likedIds = (likes ?? []).map((l) => l.post_id);
      }

      const toFeedPost = (p: any): FeedPost => ({
        id: p.id,
        type: p.type,
        language: p.language,
        title: p.title,
        content: p.content,
        imageUrl: p.image_url,
        likeCount: p.like_count,
        commentCount: p.comment_count,
        createdAt: p.created_at,
        authorId: p.author_id ?? null,
        authorNickname: p.profiles?.nickname ?? currentUserData?.nickname ?? "Unknown",
        authorAvatar: p.profiles?.avatar_url ?? currentUserData?.avatar_url ?? null,
        authorBadge: p.profiles?.badge ?? currentUserData?.badge ?? null,
        liked: likedIds.includes(p.id),
      });

      const communityPosts: FeedPost[] = (postsRaw ?? []).map(toFeedPost);

      // 초기 정적 렌더와 동일한 규칙(sortFeed)으로 병합 — 고정 상단 6개는 그대로 유지되어
      // 뷰포트 상단이 밀리지 않고, 커뮤니티 글은 그 아래(대부분 폴드 밑)에 끼어든다.
      setPosts(sortFeed([...communityPosts, ...staticTeasers]));
      setLoading(false);

      // 내 글 + 이벤트 데이터 (로그인 시)
      if (user) {
        const { data: mine } = await supabase
          .from("posts")
          .select("id, type, language, title, content, image_url, like_count, comment_count, created_at, author_id")
          .eq("author_id", user.id)
          .order("created_at", { ascending: false });
        setMyPosts((mine ?? []).map(toFeedPost));

        const [entryRes, postsForEvent] = await Promise.all([
          supabase.from("event_entries").select("numbers").eq("user_id", user.id).eq("event_id", getCurrentEventId()).maybeSingle(),
          supabase.from("posts").select("like_count").eq("author_id", user.id).eq("type", "community"),
        ]);
        setEventData({
          myEntry: entryRes.data ?? null,
          myPostCount: postsForEvent.data?.length ?? 0,
          myLikeCount: postsForEvent.data?.reduce((s, p) => s + (p.like_count ?? 0), 0) ?? 0,
        });
      }
    }

    load();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageLocale]);

  const L = getL(pageLocale ?? myLanguage);

  const badgeLabel: Record<string, string> = {
    winner: L.badge_winner,
    hot: L.badge_hot,
    top: L.badge_top,
    participant: L.badge_participant,
  };

  // ── 추가 로드 (무한스크롤) ──────────────────────────────────
  const loadMorePosts = useCallback(async () => {
    // loading 가드: 초기 렌더부터 sentinel이 존재하므로, 초기 Supabase 로드와의 경합 방지
    if (loading || !hasMore || loadingMore || tab !== "home") return;
    setLoadingMore(true);
    const supabase = createClient();
    const adminLang = pageLocale ?? myLanguage;
    const { data: postsRaw } = await supabase
      .from("posts")
      .select("id, type, language, title, content, image_url, like_count, comment_count, created_at, author_id, profiles(nickname, avatar_url, badge)")
      .or(`type.eq.community,and(type.eq.admin,language.eq.${adminLang})`)
      .order("created_at", { ascending: false })
      .range(communityOffset, communityOffset + PAGE_SIZE - 1);

    const count = postsRaw?.length ?? 0;
    if (count < PAGE_SIZE) setHasMore(false);

    if (count > 0) {
      let likedIds: string[] = [];
      if (currentUser) {
        const { data: likes } = await supabase
          .from("likes").select("post_id")
          .eq("user_id", currentUser.id)
          .in("post_id", postsRaw!.map((p: any) => p.id));
        likedIds = (likes ?? []).map((l: any) => l.post_id);
      }
      const newPosts: FeedPost[] = postsRaw!.map((p: any) => ({
        id: p.id, type: p.type, language: p.language,
        title: p.title, content: p.content, imageUrl: p.image_url,
        likeCount: p.like_count, commentCount: p.comment_count,
        createdAt: p.created_at, authorId: p.author_id ?? null,
        authorNickname: p.profiles?.nickname ?? "Unknown",
        authorAvatar: p.profiles?.avatar_url ?? null,
        authorBadge: p.profiles?.badge ?? null,
        liked: likedIds.includes(p.id),
      }));
      setPosts(prev => {
        const existingIds = new Set(prev.map(p => p.id));
        const fresh = newPosts.filter(p => !existingIds.has(p.id));
        return [...prev, ...fresh].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
    }
    setCommunityOffset(prev => prev + PAGE_SIZE);
    try { sessionStorage.setItem(OFFSET_KEY, String(communityOffset + PAGE_SIZE)); } catch { /* noop */ }
    setLoadingMore(false);
  }, [loading, hasMore, loadingMore, tab, communityOffset, myLanguage, currentUser, pageLocale, OFFSET_KEY]);

  // IntersectionObserver — sentinel 400px 전에 미리 로드 (딜레이 없음)
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) loadMorePosts(); },
      { rootMargin: "0px 0px 400px 0px", threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMorePosts]);

  // 스크롤 위치 저장 (home 탭에서 스크롤할 때마다, rAF 스로틀)
  // loading 의존성: 로딩 중엔 스피너만 렌더돼 feedScrollRef가 null이므로,
  // 피드가 렌더된 뒤 재실행해 내부 컨테이너에 리스너를 붙인다.
  useEffect(() => {
    if (loading || tab !== "home") return;
    const el = feedScrollRef.current;
    let raf = 0;
    const save = () => {
      raf = 0;
      if (restoringRef.current) return; // 복원 중 프로그램적 스크롤은 저장하지 않음
      // 활성 스크롤러: 모바일=내부 div(scrollTop>0), 데스크톱=window
      const top = el && el.scrollTop > 0 ? el.scrollTop : window.scrollY;
      // 0(상단)은 저장하지 않는다: 다른 페이지로 이동할 때 프레임워크가 window를
      // 상단으로 스크롤하며 발생하는 scroll 이벤트가 저장된 좋은 값을 0으로
      // 덮어쓰는 것을 막는다.
      if (top <= 0) return;
      try { sessionStorage.setItem(SCROLL_KEY, String(top)); } catch { /* noop */ }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(save); };
    window.addEventListener("scroll", onScroll, { passive: true });
    el?.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      el?.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [tab, loading, SCROLL_KEY]);

  // 스크롤 위치 복원 루틴 (재사용)
  // ① 콘텐츠 높이가 저장 위치만큼 찰 때까지 rAF 대기(무한스크롤 재구성/렌더 대기)
  // ② 이미지 지연 로딩·Next 기본 스크롤 등으로 위치가 밀리는 것을 몇 차례 재보정
  // ③ 단, 사용자가 직접 스크롤(휠/터치/키)하면 즉시 보정 중단(방해 방지)
  const doRestore = useCallback(() => {
    if (tab !== "home") return;
    let saved = 0;
    try { saved = Number(sessionStorage.getItem(SCROLL_KEY) || "0"); } catch { /* noop */ }
    if (saved <= 0) return;

    restoringRef.current = true;
    let userTookOver = false;
    const onUserScroll = () => { userTookOver = true; restoringRef.current = false; };
    window.addEventListener("wheel", onUserScroll, { passive: true });
    window.addEventListener("touchmove", onUserScroll, { passive: true });
    window.addEventListener("keydown", onUserScroll);

    const apply = () => {
      const el = feedScrollRef.current;
      if (el) el.scrollTop = saved;   // 모바일 내부 컨테이너
      window.scrollTo(0, saved);       // 데스크톱 window (비활성 레이아웃엔 무해)
    };

    let tries = 0;
    const rafRestore = () => {
      if (userTookOver) return;
      const el = feedScrollRef.current;
      const maxContainer = el ? el.scrollHeight - el.clientHeight : 0;
      const maxWindow = document.documentElement.scrollHeight - window.innerHeight;
      if (Math.max(maxContainer, maxWindow) >= saved || tries > 80) {
        apply();
        return;
      }
      tries++;
      requestAnimationFrame(rafRestore);
    };
    requestAnimationFrame(rafRestore);

    // 이미지 지연 로딩·프레임워크 기본 스크롤로 위치가 밀리는 것을 재보정
    const timers = [200, 450, 800, 1300].map((ms) =>
      setTimeout(() => { if (!userTookOver) apply(); }, ms)
    );
    setTimeout(() => {
      restoringRef.current = false; // 복원 종료 → 저장 재개
      window.removeEventListener("wheel", onUserScroll);
      window.removeEventListener("touchmove", onUserScroll);
      window.removeEventListener("keydown", onUserScroll);
      timers.forEach(clearTimeout);
    }, 1500);
  }, [tab, SCROLL_KEY]);

  // (a) 리마운트로 재로드되는 경우: 로딩 완료 후 1회 복원
  useEffect(() => {
    if (loading || tab !== "home" || scrollRestoredRef.current) return;
    scrollRestoredRef.current = true;
    doRestore();
  }, [loading, tab, doRestore]);

  // (b) 컴포넌트가 보존(리마운트 없음)되는 경우: 뒤로가기 이벤트에서 직접 복원
  useEffect(() => {
    const onBack = () => { doRestore(); };
    window.addEventListener("popstate", onBack);
    window.addEventListener("pageshow", onBack);
    return () => {
      window.removeEventListener("popstate", onBack);
      window.removeEventListener("pageshow", onBack);
    };
  }, [doRestore]);

  function onLike(postId: string) {
    if (!currentUser) { router.push("/login"); return; }
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, liked: !p.liked, likeCount: p.likeCount + (p.liked ? -1 : 1) }
          : p
      )
    );
    startTransition(async () => { await toggleLike(postId); });
  }

  const [signingOut, setSigningOut] = useState(false);
  function onSignOut() {
    if (signingOut) return;
    setSigningOut(true);
    // 즉시 로그아웃 상태로 UI 갱신(옵티미스틱) → 로그인 버튼이 바로 보임
    setCurrentUser(null);
    setTab("home");
    const supabase = createClient();
    supabase.auth.signOut().finally(() => {
      setSigningOut(false);
      router.refresh();
    });
  }

  function onSubmitPost() {
    if (!draft.trim()) return;
    const fd = new FormData();
    fd.append("content", draft);
    startTransition(async () => {
      const res = await createPost(fd);
      if (!res?.error) { setDraft(""); setWriteOpen(false); router.refresh(); }
    });
  }

  const filteredPosts =
    feedFilter === "Strategy"
      ? posts.filter((p) => p.type === "admin")
      : feedFilter === "Community"
      ? posts.filter((p) => p.type === "community")
      : posts;

  const trending = getTrending(posts);
  const totalLikes = myPosts.reduce((s, p) => s + p.likeCount, 0);
  const totalComments = myPosts.reduce((s, p) => s + p.commentCount, 0);

  // ── 탭별 컨텐츠 ────────────────────────────────────────────
  function TabContent({ desktop = false }: { desktop?: boolean }) {
    return (
      <>
        {/* 피드 */}
        {tab === "home" && (
          filteredPosts.length === 0
            ? (loading
                // 로딩 중(예: Community 필터인데 아직 커뮤니티 글 미도착)엔 빈 화면 대신
                // 카드 높이에 맞춘 정적 스켈레톤으로 공간 예약 → 도착 시 시프트 최소화
                ? <>{[0, 1, 2].map((i) => <SkeletonCard key={i} />)}</>
                : <EmptyState icon="🃏" title={L.emptyFeedTitle} sub={L.emptyFeedSub} />)
            : filteredPosts.map((p, i) => (
                // 첫 3장만 eager(LCP 후보) — 나머지 수십 장의 티저 이미지는 lazy로 대역폭 양보
                <PostCard key={p.id} post={p} myLanguage={myLanguage} myUserId={currentUser?.id} onLike={onLike} imgPriority={i < 3} />
              ))
        )}

        {/* 채팅 */}
        {tab === "chat" && (
          <ChatTab
            currentUser={currentUser}
            lang={pageLocale ?? myLanguage}
          />
        )}

        {/* 이벤트 */}
        {tab === "event" && (
          <EventTab
            isLoggedIn={!!currentUser}
            initialData={eventData}
            lang={pageLocale ?? myLanguage}
          />
        )}

        {/* 프로필 */}
        {tab === "profile" && (
          !currentUser
            ? (
              <div className="px-5 pt-6">
                <div className="rounded p-6 text-center" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                  <div className="text-3xl mb-3">👤</div>
                  <p className="text-[15px] font-medium mb-1" style={{ color: INK, fontFamily: "var(--font-lora),serif" }}>{L.loginRequired}</p>
                  <p className="text-sm mb-4" style={{ color: MUTED, fontFamily: "var(--font-inter),sans-serif" }}>{L.loginRequiredSub}</p>
                  <Link href="/login" className="inline-block px-5 py-2.5 rounded text-sm font-semibold transition-transform active:scale-95 hover:opacity-90" style={{ background: INK, color: BG, fontFamily: "var(--font-inter),sans-serif" }}>
                    {L.loginSignup}
                  </Link>
                </div>
              </div>
            ) : (
              <div className="px-5 pt-4 space-y-4">
                <div className="flex flex-col items-center py-6 rounded" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                  <Avatar post={{ type: "community", authorAvatar: currentUser.avatar_url, authorNickname: currentUser.nickname }} size={64} />
                  {editingNickname ? (
                    <form
                      action={async (fd) => {
                        const res = await updateNickname(fd);
                        if (res?.error) { setNicknameErr(res.error); }
                        else { setEditingNickname(false); setNicknameErr(null); router.refresh(); }
                      }}
                      className="flex flex-col items-center gap-1.5 mt-3 w-full px-6"
                    >
                      <input
                        name="nickname"
                        value={nicknameInput}
                        maxLength={20}
                        autoFocus
                        className="w-full px-3 py-2 rounded text-sm text-center outline-none"
                        style={{ background: BG, color: INK, border: `1px solid ${BORDER}`, fontFamily: "var(--font-inter),sans-serif" }}
                        onChange={(e) => setNicknameInput(e.target.value)}
                      />
                      {nicknameErr && <p className="text-[11px]" style={{ color: RED }}>{nicknameErr}</p>}
                      <div className="flex gap-2 w-full">
                        <button
                          type="button"
                          onClick={() => { setEditingNickname(false); setNicknameErr(null); }}
                          className="flex-1 py-1.5 rounded text-xs font-semibold"
                          style={{ background: BORDER, color: MUTED, fontFamily: "var(--font-inter),sans-serif" }}
                        >취소</button>
                        <button
                          type="submit"
                          className="flex-[2] py-1.5 rounded text-xs font-semibold"
                          style={{ background: INK, color: BG, fontFamily: "var(--font-inter),sans-serif" }}
                        >저장</button>
                      </div>
                    </form>
                  ) : (
                    <div className="flex items-center gap-1.5 mt-3">
                      <p className="font-medium text-base" style={{ color: INK, fontFamily: "var(--font-lora),serif" }}>{FLAG[currentUser.language] ?? "🌐"} {currentUser.nickname}</p>
                      <button
                        onClick={() => { setEditingNickname(true); setNicknameInput(currentUser.nickname); }}
                        className="text-[13px] opacity-50 hover:opacity-100 transition-opacity"
                        title="닉네임 변경"
                      >✏️</button>
                    </div>
                  )}
                  {currentUser.badge && badgeLabel[currentUser.badge] && (
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded mt-2" style={{ background: BORDER, color: MUTED, fontFamily: "var(--font-inter),sans-serif" }}>
                      {badgeLabel[currentUser.badge]}
                    </span>
                  )}
                  <div className="flex gap-8 mt-4">
                    {[
                      { label: L.myPostsStat, val: myPosts.length },
                      { label: L.likesStat, val: totalLikes },
                      { label: L.commentsStat, val: totalComments },
                    ].map((s) => (
                      <div key={s.label} className="text-center">
                        <p className="text-base font-semibold" style={{ color: INK, fontFamily: "var(--font-lora),serif" }}>{s.val}</p>
                        <p className="text-[10px]" style={{ color: MUTED, fontFamily: "var(--font-inter),sans-serif" }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] font-bold tracking-widest uppercase px-1 pt-1" style={{ color: MUTED, fontFamily: "var(--font-inter),sans-serif" }}>{L.myPostsSection}</p>
                {myPosts.length === 0
                  ? <EmptyState icon="✍️" title={L.noPostsTitle} sub={L.noPostsSub} />
                  : myPosts.map((p) => (
                      <div key={p.id} className="-mx-3">
                        <PostCard post={p} myLanguage={myLanguage} myUserId={currentUser?.id} onLike={onLike} />
                      </div>
                    ))
                }
              </div>
            )
        )}
      </>
    );
  }

  const FONT_SANS = "var(--font-inter), var(--font-noto-sans-kr), sans-serif";
  const FONT_SERIF = "var(--font-lora), Georgia, serif";

  // ── 글쓰기 모달 ────────────────────────────────────────────
  const WriteModal = writeOpen && (
    <div
      className="fixed inset-0 z-50 flex items-end lg:items-center justify-center"
      style={{ background: "rgba(32,49,42,0.5)", backdropFilter: "blur(4px)" }}
      onClick={() => setWriteOpen(false)}
    >
      <div
        className="w-full max-w-lg rounded-t-2xl lg:rounded-xl p-5"
        style={{ background: BG, borderTop: `2px solid ${INK}` }}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-base font-medium mb-3" style={{ color: INK, fontFamily: FONT_SERIF }}>{L.writeModalTitle}</p>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={L.draftPlaceholder}
          rows={4}
          className="w-full px-3 py-2.5 rounded text-sm outline-none resize-none"
          style={{ background: CARD, color: INK, border: `1px solid ${BORDER}`, fontFamily: FONT_SANS }}
        />
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => setWriteOpen(false)}
            className="flex-1 py-2.5 rounded text-sm font-semibold"
            style={{ background: CARD, color: MUTED, border: `1px solid ${BORDER}`, fontFamily: FONT_SANS }}
          >{L.cancel}</button>
          <button
            onClick={onSubmitPost}
            disabled={isPending || !draft.trim()}
            className="flex-[2] py-2.5 rounded text-sm font-semibold disabled:opacity-50"
            style={{ background: INK, color: BG, fontFamily: FONT_SANS }}
          >{isPending ? L.posting : L.postNow}</button>
        </div>
      </div>
    </div>
  );

  // 주의: 과거엔 loading 동안 전체 화면 스피너만 렌더 → 데이터 도착 시 페이지 전체가
  // 한 번에 교체되며 CLS 0.5+, LCP 7s+ 발생. 이제 정적 티저를 posts 초기값으로 시딩해
  // 셸+피드를 SSR/첫 페인트부터 렌더하고, Supabase 글은 아래쪽에 병합만 한다.
  return (
    <div style={{ background: BG, fontFamily: FONT_SANS }}>

      {/* ════════════════════════════════════════════════════════
          MOBILE  (< lg)
      ════════════════════════════════════════════════════════ */}
      <div className="lg:hidden min-h-screen flex flex-col">
        {/* 모바일 마스트헤드 */}
        <header
          className="sticky top-0 z-40 px-5"
          style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}
        >
          {/* 상단 줄: 서브 라벨 + 로그인 */}
          <div className="flex items-center justify-between pt-3 pb-1">
            <span
              className="text-[11px] font-bold tracking-widest uppercase"
              style={{ color: MUTED, fontFamily: FONT_SANS }}
            >
              {L.siteSubtitle}
            </span>
            {currentUser ? (
              <div className="flex items-center gap-2">
                <span className="text-[11px]" style={{ color: MUTED }}>
                  {FLAG[currentUser.language] ?? "🌐"} {currentUser.nickname}
                </span>
                <button
                  onClick={onSignOut}
                  disabled={signingOut}
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-full transition-transform active:scale-90"
                  style={{ background: CARD, color: MUTED, border: `1px solid ${BORDER}`, opacity: signingOut ? 0.55 : 1 }}
                >
                  {L.logout}
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-[11px] font-bold px-3 py-1 rounded-full transition-transform active:scale-90 hover:opacity-90"
                style={{ background: INK, color: BG }}
              >
                {L.login}
              </Link>
            )}
          </div>

          {/* 마스트헤드 타이틀 */}
          <h1
            className="text-[28px] leading-tight pb-3"
            style={{ color: INK, fontFamily: FONT_SERIF, fontWeight: 500, letterSpacing: "-0.4px" }}
          >
            {L.siteTitle}
          </h1>

          {/* 필터 탭 (언더라인 스타일) */}
          {tab === "home" && (
            <div className="flex items-center gap-5 -mx-1">
              {FILTER_PILLS.map((f) => {
                const labels: Record<string, string> = { All: L.filterAll, Strategy: L.filterStrategy, Community: L.filterCommunity };
                const active = feedFilter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setFeedFilter(f)}
                    className="pb-2 text-[14px] transition-all"
                    style={{
                      color: active ? INK : MUTED,
                      fontWeight: active ? 700 : 400,
                      fontStyle: active ? "normal" : "italic",
                      borderBottom: active ? `2px solid ${INK}` : "2px solid transparent",
                      fontFamily: FONT_SERIF,
                    }}
                  >
                    {labels[f]}
                  </button>
                );
              })}
            </div>
          )}
        </header>

        {/* 모바일 본문 */}
        <div ref={feedScrollRef} className="flex-1 overflow-y-auto pb-24">
          <TabContent />
          {/* 무한스크롤 sentinel — 400px 미리 감지해 선제 로드 */}
          {tab === "home" && (
            <div ref={sentinelRef} style={{ height: 1 }} />
          )}
          {tab === "home" && !hasMore && posts.length > PAGE_SIZE && (
            <div className="flex justify-center py-5">
              <span style={{ fontSize: 11, color: MUTED, fontFamily: FONT_SANS }}>♠ 모든 글을 다 봤습니다</span>
            </div>
          )}
        </div>

        {/* 모바일 FAB */}
        {tab === "home" && (
          <button
            onClick={() => currentUser ? setWriteOpen(true) : router.push("/login")}
            className="fixed flex items-center justify-center rounded-full active:scale-95 transition-transform"
            style={{ bottom: 80, right: 20, width: 48, height: 48, background: INK, boxShadow: "0 4px 16px rgba(32,49,42,0.35)", zIndex: 45 }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: BG }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        )}

        {/* 모바일 하단 네비 (다크그린) */}
        <nav
          className="fixed bottom-0 left-0 right-0 flex items-center"
          style={{ background: NAV, borderTop: `1px solid rgba(255,255,255,0.06)`, height: 62, zIndex: 40 }}
        >
          {([
            { key: "home",    label: L.feed,    icon: "⊞" },
            { key: "chat",    label: L.chat,    icon: "💬" },
            { key: "event",   label: L.event,   icon: "🎰" },
            { key: "profile", label: L.profile, icon: "👤" },
          ] as const).map((n) => (
            <button
              key={n.key}
              onClick={() => setTab(n.key)}
              className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2"
              style={{ color: tab === n.key ? BG : "rgba(244,240,231,0.4)" }}
            >
              <span className="text-[16px]">{n.icon}</span>
              <span className="text-[10px] font-semibold" style={{ fontFamily: FONT_SANS }}>{n.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* ════════════════════════════════════════════════════════
          DESKTOP  (≥ lg)
      ════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block min-h-screen">

        {/* 데스크탑 마스트헤드 헤더 */}
        <header
          ref={desktopHeaderRef}
          className="sticky top-0 z-50"
          style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}
        >
          <div className="flex items-center gap-6 px-8 max-w-screen-xl mx-auto">
            {/* 마스트헤드 타이틀 */}
            <div className="flex flex-col justify-center py-3 mr-4 flex-shrink-0" style={{ borderRight: `1px solid ${BORDER}`, paddingRight: 24 }}>
              <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: MUTED, fontFamily: FONT_SANS }}>
                {L.siteSubtitle}
              </span>
              <span
                className="text-[22px] leading-tight"
                style={{ color: INK, fontFamily: FONT_SERIF, fontWeight: 500, letterSpacing: "-0.3px" }}
              >
                {L.siteTitle}
              </span>
            </div>

            {/* 상단 네비 (언더라인) */}
            <nav className="flex items-center gap-6">
              {([
                { key: "home",    label: L.feed },
                { key: "chat",    label: L.chat },
                { key: "event",   label: L.event },
              ] as const).map((n) => (
                <button
                  key={n.key}
                  onClick={() => setTab(n.key)}
                  className="py-4 text-sm transition-all"
                  style={{
                    color: tab === n.key ? INK : MUTED,
                    fontWeight: tab === n.key ? 700 : 400,
                    fontStyle: tab === n.key ? "normal" : "italic",
                    borderBottom: tab === n.key ? `2px solid ${INK}` : "2px solid transparent",
                    fontFamily: FONT_SERIF,
                  }}
                >
                  {n.label}
                </button>
              ))}
            </nav>

            {/* 우측 */}
            <div className="flex items-center gap-3 ml-auto">
              <span className="text-sm" style={{ color: MUTED, fontFamily: FONT_SANS }}>
                {FLAG[myLanguage] ?? "🌐"} {myLanguage.toUpperCase()}
              </span>
              {currentUser ? (
                <>
                  <button
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: INK, color: BG, fontFamily: FONT_SANS }}
                    onClick={() => setTab("profile")}
                  >
                    {currentUser.nickname.slice(0, 2).toUpperCase()}
                  </button>
                  <button
                    onClick={onSignOut}
                    disabled={signingOut}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full transition-transform active:scale-90"
                    style={{ background: CARD, color: MUTED, border: `1px solid ${BORDER}`, fontFamily: FONT_SANS, opacity: signingOut ? 0.55 : 1 }}
                  >
                    {L.logout}
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="text-sm font-semibold px-4 py-2 rounded-full transition-transform active:scale-95 hover:opacity-90"
                  style={{ background: INK, color: BG, fontFamily: FONT_SANS }}
                >
                  {L.loginArrow}
                </Link>
              )}
            </div>
          </div>
        </header>

        {/* 데스크탑 3컬럼 */}
        <div className="flex max-w-screen-xl mx-auto px-4 py-6 gap-6">

          {/* ── 왼쪽 사이드바 ── */}
          <aside style={{ width: 200, flexShrink: 0 }}>
            <div className="sticky top-20 flex flex-col gap-0.5">
              {([
                { key: "home",    icon: "⊞", label: L.feed },
                { key: "chat",    icon: "💬", label: L.chat },
                { key: "event",   icon: "🎰", label: L.event, badge: "Soon" },
                { key: "profile", icon: "👤", label: L.profile },
              ] as const).map((item) => (
                <button
                  key={item.key}
                  onClick={() => setTab(item.key)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-all"
                  style={{
                    background: tab === item.key ? CARD : "transparent",
                    color: tab === item.key ? INK : MUTED,
                    fontWeight: tab === item.key ? 600 : 400,
                    fontFamily: FONT_SANS,
                    borderLeft: tab === item.key ? `3px solid ${INK}` : "3px solid transparent",
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className="ml-auto text-[9px] px-1.5 py-0.5 rounded font-bold"
                      style={{ background: "#7a2e2e", color: "#f4f0e7" }}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}

              <div style={{ borderTop: `1px solid ${BORDER}`, margin: "10px 0" }} />

              <button
                onClick={() => currentUser ? setWriteOpen(true) : router.push("/login")}
                className="w-full py-2.5 rounded-lg text-sm font-semibold"
                style={{ background: INK, color: BG, fontFamily: FONT_SANS }}
              >
                {L.writePost}
              </button>

              {/* 허브 메뉴 — 한국어 피드에서만 표시 */}
              {!pageLocale && (
                <>
                  <div style={{ borderTop: `1px solid ${BORDER}`, margin: "10px 0 6px" }} />
                  <p
                    className="text-[10px] font-bold tracking-widest uppercase px-3 mb-1"
                    style={{ color: MUTED, fontFamily: FONT_SANS }}
                  >
                    홀덤 가이드
                  </p>
                  {HUB_PAGES.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition-colors"
                      style={{ color: MUTED, fontFamily: FONT_SANS }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = CARD)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <span style={{ fontSize: 14 }}>{p.icon}</span>
                      <span>{p.label}</span>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </aside>

          {/* ── 메인 피드 ── */}
          <main style={{ flex: 1, maxWidth: 640 }}>
            {/* 필터 (언더라인, Home 탭에서만) */}
            {tab === "home" && (
              <>
                <div className="flex items-center gap-6 mb-5" style={{ borderBottom: `1px solid ${BORDER}` }}>
                  {FILTER_PILLS.map((f) => {
                    const labels: Record<string, string> = { All: L.filterAll, Strategy: L.filterStrategy, Community: L.filterCommunity };
                    const active = feedFilter === f;
                    return (
                      <button
                        key={f}
                        onClick={() => setFeedFilter(f)}
                        className="pb-3 text-sm transition-all"
                        style={{
                          color: active ? INK : MUTED,
                          fontWeight: active ? 700 : 400,
                          fontStyle: active ? "normal" : "italic",
                          borderBottom: active ? `2px solid ${INK}` : "2px solid transparent",
                          marginBottom: -1,
                          fontFamily: FONT_SERIF,
                        }}
                      >
                        {labels[f]}
                      </button>
                    );
                  })}
                  <span className="ml-auto text-xs pb-3" style={{ color: MUTED, fontFamily: FONT_SANS }}>
                    🌏 {Object.keys(FLAG).length}개 언어
                  </span>
                </div>

                {/* 글쓰기 박스 */}
                <div
                  className="rounded p-4 mb-5 flex items-center gap-3 cursor-pointer"
                  style={{ background: CARD, border: `1px solid ${BORDER}` }}
                  onClick={() => currentUser ? setWriteOpen(true) : router.push("/login")}
                >
                  {currentUser ? (
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: INK, color: BG, fontFamily: FONT_SANS }}
                    >
                      {currentUser.nickname.slice(0, 2).toUpperCase()}
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: BORDER }}>
                      <span style={{ color: MUTED }}>👤</span>
                    </div>
                  )}
                  <div
                    className="flex-1 px-4 py-2 rounded text-sm"
                    style={{ background: BG, color: MUTED, border: `1px solid ${BORDER}`, fontFamily: FONT_SANS }}
                  >
                    {L.writePlaceholder}
                  </div>
                  <button
                    className="px-4 py-2 rounded text-sm font-semibold flex-shrink-0"
                    style={{ background: INK, color: BG, fontFamily: FONT_SANS }}
                  >
                    {L.postButton}
                  </button>
                </div>

                {/* 다국어 배너 */}
                <div
                  className="rounded px-4 py-2.5 mb-5 flex items-center gap-2"
                  style={{ background: CARD, border: `1px solid ${BORDER}` }}
                >
                  <span>🌐</span>
                  <p className="text-xs" style={{ color: MUTED, fontFamily: FONT_SANS }}>
                    {L.multiLangBannerFull}
                  </p>
                </div>
              </>
            )}

            <TabContent desktop />
          </main>

          {/* ── 오른쪽 사이드바 ── */}
          <aside style={{ width: 240, flexShrink: 0 }}>
            <div className="sticky top-20 flex flex-col gap-5">

              {/* 트렌딩 */}
              {trending.length > 0 && (
                <div>
                  <p
                    className="text-[11px] font-bold tracking-widest uppercase mb-3"
                    style={{ color: MUTED, fontFamily: FONT_SANS }}
                  >
                    🔥 이번 주 인기
                  </p>
                  {trending.map((t, i) => (
                    <Link
                      href={t.blogSlug ? (t.blogLocale ? `/${t.blogLocale}/blog/${t.blogSlug}` : `/blog/${t.blogSlug}`) : `/post/${t.id}`}
                      key={t.id}
                      className="flex items-start gap-3 mb-3 last:mb-0 group"
                    >
                      <span
                        className="text-sm font-bold w-4 flex-shrink-0 mt-0.5"
                        style={{ color: i === 0 ? RED : MUTED, fontFamily: FONT_SANS }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <p
                          className="text-[13px] leading-snug line-clamp-2 group-hover:underline"
                          style={{ color: INK, fontFamily: FONT_SERIF }}
                        >
                          {FLAG[t.language] ?? "🌐"} {t.title || t.content.slice(0, 40)}
                        </p>
                        <p className="text-[11px] mt-0.5" style={{ color: MUTED, fontFamily: FONT_SANS }}>
                          ❤️ {t.likeCount} · 💬 {t.commentCount}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <div style={{ borderBottom: `1px solid ${BORDER}`, marginTop: 8 }} />
                </div>
              )}

              {/* 이벤트 배너 */}
              <div className="rounded p-4" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: RED, fontFamily: FONT_SANS }}>
                  {L.eventBadge}
                </p>
                <p
                  className="text-[16px] font-medium mb-1.5 whitespace-pre-line"
                  style={{ color: INK, fontFamily: FONT_SERIF }}
                >
                  {L.eventTitle}
                </p>
                <p className="text-[12px] mb-2 whitespace-pre-line" style={{ color: MUTED, fontFamily: FONT_SANS }}>
                  {L.eventDesc}
                </p>
                {/* 추첨 일정 안내 */}
                <div
                  className="rounded px-3 py-2 mb-3 whitespace-pre-line"
                  style={{ background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.18)" }}
                >
                  <p className="text-[11px] leading-relaxed" style={{ color: MUTED, fontFamily: FONT_SANS }}>
                    {L.eventDrawSchedule}
                  </p>
                  <LocalDrawTime fontFamily={FONT_SANS} muted={MUTED} />
                </div>
                <button
                  onClick={() => setTab("event")}
                  className="w-full py-2 rounded text-sm font-semibold"
                  style={{ background: INK, color: BG, fontFamily: FONT_SANS }}
                >
                  {L.eventButton}
                </button>
              </div>

              {/* 커뮤니티 언어 */}
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: MUTED, fontFamily: FONT_SANS }}>
                  {L.communityLang}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {(["ko", "en", "ja", "zh", "es", "de"] as const).map((l) => (
                    <span
                      key={l}
                      className="text-[11px] px-2 py-1 rounded font-semibold"
                      style={{
                        background: l === myLanguage ? INK : CARD,
                        color: l === myLanguage ? BG : MUTED,
                        border: `1px solid ${BORDER}`,
                        fontFamily: FONT_SANS,
                      }}
                    >
                      {FLAG[l]} {l.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </aside>
        </div>

        {/* 홈피드 이전/다음 글 화살표 (유튜브 스타일, 데스크톱 홈 탭 전용) */}
        {tab === "home" && <FeedNavArrows headerRef={desktopHeaderRef} />}
      </div>

      {/* 공용 글쓰기 모달 */}
      {WriteModal}
    </div>
  );
}

/** 일요일 오후 7시 KST를 방문자 현지 시간으로 변환해 표시 */
function LocalDrawTime({ fontFamily, muted }: { fontFamily: string; muted: string }) {
  const [localStr, setLocalStr] = useState<string | null>(null);
  useEffect(() => {
    const tzOffsetMin = -new Date().getTimezoneOffset();
    if (tzOffsetMin === 9 * 60) return; // 이미 KST면 표시 불필요
    // 다음 일요일 KST 19:00 = UTC 10:00
    const now = new Date();
    const day = now.getDay();
    const daysUntil = day === 0 ? 7 : 7 - day;
    const nextSun = new Date(now);
    nextSun.setDate(now.getDate() + daysUntil);
    nextSun.setUTCHours(10, 0, 0, 0);
    const fmt = nextSun.toLocaleString([], {
      weekday: "short", hour: "2-digit", minute: "2-digit", timeZoneName: "short",
    });
    setLocalStr(fmt);
  }, []);
  // 항상 한 줄을 예약(minHeight) — 마운트 후 텍스트가 삽입되며 아래 버튼을 밀지 않게(CLS 방지)
  return (
    <p className="text-[10px] mt-1" style={{ color: muted, fontFamily, opacity: 0.75, minHeight: 15 }}>
      {localStr ? `📍 현지 시간: ${localStr}` : " "}
    </p>
  );
}

/** 피드 카드와 유사한 높이의 정적 스켈레톤 — 공간 예약용(CLS 방지). 무한 애니메이션 없음. */
function SkeletonCard() {
  return (
    <div
      aria-hidden
      className="mx-3 lg:mx-0 mb-3 rounded-2xl p-4"
      style={{ background: CARD, border: `1px solid ${BORDER}` }}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-9 h-9 rounded-full flex-shrink-0" style={{ background: BORDER }} />
        <div className="flex-1 min-w-0">
          <div className="h-3 w-24 rounded mb-1.5" style={{ background: BORDER }} />
          <div className="h-2.5 w-16 rounded" style={{ background: BORDER, opacity: 0.7 }} />
        </div>
      </div>
      <div className="h-3.5 w-3/4 rounded mb-2" style={{ background: BORDER }} />
      <div className="h-3 w-full rounded mb-1.5" style={{ background: BORDER, opacity: 0.7 }} />
      <div className="h-3 w-2/3 rounded" style={{ background: BORDER, opacity: 0.7 }} />
    </div>
  );
}

function EmptyState({ icon, title, sub }: { icon: string; title: string; sub: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
      <span className="text-3xl mb-3">{icon}</span>
      <p className="text-[15px] font-medium mb-1" style={{ color: INK, fontFamily: "var(--font-lora), Georgia, serif" }}>{title}</p>
      <p className="text-sm" style={{ color: MUTED, fontFamily: "var(--font-inter), sans-serif" }}>{sub}</p>
    </div>
  );
}

