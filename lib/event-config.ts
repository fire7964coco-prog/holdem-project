/**
 * 이벤트 설정 — 이 파일만 수정하면 전체 이벤트 동작이 바뀝니다.
 *
 * 추첨 방식: 매주 일요일 19:00 KST에 Vercel Cron이 실행되어
 * 그 시점의 최신 비트코인 블록 해시를 시드로 당첨번호 6개를 결정합니다.
 * 누구나 블록 탐색기에서 해시를 확인해 결과를 검증할 수 있습니다.
 */

/**
 * ISO 주차 ID 계산 (YYYY-WNN, UTC 기준 — 타임존 무관).
 * 앱(참여·조회)과 크론(추첨)이 반드시 같은 함수를 써야 event_id가 일치한다.
 */
export function getIsoWeekId(date: Date): string {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
}

/**
 * 현재 이벤트 ID — 실행 시점의 ISO 주차로 자동 계산.
 * (구버전 하드코딩 상수를 제거 — 크론과 자동 동기화되어 회차가 어긋나지 않음)
 */
export function getCurrentEventId(): string {
  return getIsoWeekId(new Date());
}

/** 참여 조건 */
export const EVENT_CONDITION = {
  minPosts: 1,   // 커뮤니티 글 최소 작성 수
  minLikes: 1,   // 내 글에 받은 좋아요 합계 최솟값
};

/**
 * 추첨 스케줄
 * - cronUtc: Vercel cron 표현식 (UTC 기준)
 * - 매주 일요일 10:00 UTC = 19:00 KST
 */
export const DRAW_SCHEDULE = {
  cronUtc: "0 10 * * 0",
  displayKST: "매주 일요일 오후 7시",
  utcHour: 10,
};

/** 기존 주간 접수 동작. 운영 중단 시 이 설정을 바꾸면 안내와 서버 접수가 함께 닫힌다. */
export const EVENT_OPERATION = { acceptingEntries: true };

/** 회차는 UTC ISO 주차를 유지한다. 일요일 추첨 후 다음 월요일 00:00 UTC까지 접수 마감. */
export function getEventState(now: Date) {
  const monday = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  monday.setUTCDate(monday.getUTCDate() - ((monday.getUTCDay() + 6) % 7));
  const draw = new Date(monday);
  draw.setUTCDate(draw.getUTCDate() + 6);
  draw.setUTCHours(DRAW_SCHEDULE.utcHour, 0, 0, 0);
  const nextOpen = new Date(monday);
  nextOpen.setUTCDate(nextOpen.getUTCDate() + 7);
  return {
    eventId: getIsoWeekId(now),
    drawAt: draw.toISOString(),
    nextOpenAt: nextOpen.toISOString(),
    isOpen: EVENT_OPERATION.acceptingEntries && now.getTime() < draw.getTime(),
    isPaused: !EVENT_OPERATION.acceptingEntries,
  };
}

const EVENT_STATUS_LABELS: Record<string, { open: string; closed: string; paused: string; draw: string; next: string; round: string; conditions: (posts: number, likes: number) => string }> = {
  ko: { open: "접수 중", closed: "이번 회차 접수 마감", paused: "이벤트 준비 중", draw: "추첨 예정", next: "다음 회차 접수", round: "회차", conditions: (p, l) => `로그인 · 커뮤니티 글 ${p}개 작성 · 내 글에 좋아요 ${l}개 받기` },
  en: { open: "Entries open", closed: "Entries closed", paused: "Coming soon", draw: "Scheduled draw", next: "Next entries open", round: "Round", conditions: (p, l) => `Log in · Write ${p} community post · Receive ${l} like on your posts` },
  ja: { open: "受付中", closed: "今週の受付終了", paused: "準備中", draw: "抽選予定", next: "次回受付開始", round: "回", conditions: (p, l) => `ログイン・投稿${p}件・自分の投稿にいいね${l}件` },
  zh: { open: "报名中", closed: "本期报名结束", paused: "准备中", draw: "计划开奖", next: "下期报名", round: "期数", conditions: (p, l) => `登录 · 发帖${p}篇 · 自己的帖子获得${l}个赞` },
  es: { open: "Inscripciones abiertas", closed: "Inscripciones cerradas", paused: "Próximamente", draw: "Sorteo previsto", next: "Próxima inscripción", round: "Ronda", conditions: (p, l) => `Inicia sesión · Publica ${p} entrada · Recibe ${l} me gusta` },
  de: { open: "Teilnahme offen", closed: "Teilnahme geschlossen", paused: "Demnächst", draw: "Geplante Ziehung", next: "Nächste Teilnahme", round: "Runde", conditions: (p, l) => `Anmelden · ${p} Beitrag schreiben · ${l} Like erhalten` },
  pt: { open: "Inscrições abertas", closed: "Inscrições encerradas", paused: "Em breve", draw: "Sorteio previsto", next: "Próxima inscrição", round: "Rodada", conditions: (p, l) => `Entre · Publique ${p} postagem · Receba ${l} curtida` },
  id: { open: "Pendaftaran dibuka", closed: "Pendaftaran ditutup", paused: "Segera hadir", draw: "Jadwal undian", next: "Pendaftaran berikutnya", round: "Putaran", conditions: (p, l) => `Login · Tulis ${p} postingan · Terima ${l} suka` },
  ms: { open: "Penyertaan dibuka", closed: "Penyertaan ditutup", paused: "Akan datang", draw: "Jadual cabutan", next: "Penyertaan seterusnya", round: "Pusingan", conditions: (p, l) => `Log masuk · Tulis ${p} siaran · Terima ${l} suka` },
  vi: { open: "Đang nhận đăng ký", closed: "Đã đóng đăng ký", paused: "Sắp ra mắt", draw: "Lịch quay thưởng", next: "Mở đăng ký tiếp theo", round: "Kỳ", conditions: (p, l) => `Đăng nhập · Viết ${p} bài · Nhận ${l} lượt thích` },
  tr: { open: "Katılım açık", closed: "Katılım kapandı", paused: "Yakında", draw: "Planlanan çekiliş", next: "Sonraki katılım", round: "Tur", conditions: (p, l) => `Giriş yap · ${p} gönderi yaz · ${l} beğeni al` },
  hi: { open: "प्रविष्टियाँ खुली हैं", closed: "प्रविष्टियाँ बंद हैं", paused: "जल्द आ रहा है", draw: "निर्धारित ड्रा", next: "अगली प्रविष्टियाँ", round: "राउंड", conditions: (p, l) => `लॉगिन करें · ${p} पोस्ट लिखें · ${l} लाइक पाएँ` },
  ar: { open: "التسجيل مفتوح", closed: "التسجيل مغلق", paused: "قريبًا", draw: "موعد السحب", next: "التسجيل القادم", round: "الجولة", conditions: (p, l) => `سجّل الدخول · اكتب ${p} منشورًا · احصل على ${l} إعجاب` },
};

export function getEventLabels(lang: string) {
  return EVENT_STATUS_LABELS[lang === "zh-hant" ? "zh" : lang] ?? EVENT_STATUS_LABELS.en;
}

/**
 * 당첨 번호 — DB(event_draws 테이블)에서 fetch됩니다.
 * 아래는 레거시 폴백용 (null = 미발표)
 */
export const WINNING_NUMBERS: number[] | null = null;

/** 상금 테이블 (한국어 결과 표시용) */
export const PRIZE_TABLE: Record<number, string> = {
  3: "기프트콘 5만원",
  4: "기프트콘 30만원",
  5: "기프트콘 100만원",
  6: "기프트콘 100만원",
};
