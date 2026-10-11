"use client";

/**
 * «내 기록» 카드 3장 — 커뮤니티 프로필 탭(로그인 상태) · «내 기록» 회차 D(2026-10-11)
 * 설계 = docs/my-records-design.md §2-1 · 표 = supabase/my-records.sql · schema.sql §10(trainer_attempts)
 *
 * - 세 표 모두 RLS «본인 행만» — 여기서는 읽기만 하고, 지우기는 퀴즈 카드에만 둔다.
 * 🔴 트레이너·솔버 저장 목록은 여기서 지우지 않는다: 솔버 앱이 동기화할 때 기기 기록을 전부 다시 올린다
 *    (solver/src/account.ts syncAttempts — client_id upsert). 본체에서 지우면 다음 동기화 때 되살아난다.
 * 🔴 그렇다고 «솔버에서 지울 수 있다»도 거짓이었다(10-11 첫 배포 · MA-436 WRONG ×12): 솔버 «학습 기록 초기화»는
 *    기기만 비우고 clearRemoteAttempts는 호출처가 없다 → 트레이너 계정 기록은 지금 지울 곳이 없다고 그대로 쓴다(S-071 (가)).
 *    함수가 «있다»는 것과 «불린다»는 다르다 — 안내 문구를 쓰기 전에 호출처까지 grep한다.
 * - 로그인은 본체(쿠키)와 솔버(다른 출처)가 따로라, 본체 로그인만으로 트레이너 기록이 남지 않는다(MA-436 ② · loginLine).
 * - 숫자 라벨은 각 도구 화면과 같은 이름·식만 쓴다(설계 §5): 평균 오차 %p = 퀴즈 · 평균 EV 손실 bb·좋은 선택 = 솔버
 *   TrainerPage.vue avgLossLabel·goodRateLabel 축어 · 종류 이름 = 솔버 trainer.ts trainerCategoryLabel 축어(S-068).
 */

import { useEffect, useState, type ReactNode } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  fetchAccountQuiz, uploadQuizHands, deleteAccountQuiz, readQuizStore, pendingQuizTotals, addQuizTotals,
  type QuizTotals,
} from "@/lib/win-rate-quiz-records";
import { BORDER, CARD, GOLD, INK, MUTED, RED } from "./post-card";

/** S-068 «좋은 선택» 기준 — ev_loss_bb ≤ 이 값(팟 1% · 최소 0.05bb). 솔버 프리셋이 바뀌면 솔버가 다시 보낸다 */
const GOOD_MAX: Record<Cat, number> = { srp: 0.055, "3bp": 0.225, blind: 0.06 };
type Cat = "srp" | "3bp" | "blind";
const CATS: Cat[] = ["srp", "3bp", "blind"];

/** 솔버가 받는 lang 15개(S-068) — 그 밖은 en */
const SOLVER_LANGS = ["ko", "en", "ja", "es", "pt", "de", "zh", "zh-hant", "fr", "id", "ms", "hi", "tr", "vi", "ru"];

type Labels = {
  title: string; sub: string;
  loading: string; loadError: string; empty: string;
  quizTitle: string; quizHands: string; quizAvgErr: string; quizHit: string; quizLast7: string; quizOpen: string;
  quizClear: string; quizClearConfirm: string; quizClearFail: string;
  trainerTitle: string; trainerSolved: string; avgLoss: string; goodRate: string; trainerOpen: string;
  cat: Record<Cat, string>;
  savedTitle: string; savedRanges: string; savedConfigs: string; savedOpen: string;
  /** 지우기 안내 — 저장 목록은 솔버에서 지우면 빠지고, 트레이너 계정 기록은 지금 어디서도 못 지운다(MA-436 · S-071 (가)) */
  solverClearNote: string;
  /** 로그인 안 한 프로필 카드에 더하는 한 줄(설계 §2-1 끝) */
  loginLine: string;
};

const LABELS: Record<string, Labels> = {
  ko: {
    title: "내 기록", sub: "계정에 쌓인 기록이에요 — 나만 볼 수 있어요.",
    loading: "불러오는 중…", loadError: "기록을 불러오지 못했어요. 잠시 뒤 다시 열어 주세요.", empty: "아직 기록이 없어요",
    quizTitle: "🎯 승률 퀴즈", quizHands: "푼 판", quizAvgErr: "평균 오차", quizHit: "콜/폴드 판정 맞힘", quizLast7: "최근 7일", quizOpen: "퀴즈 계속하기 →",
    quizClear: "이 기록 지우기", quizClearConfirm: "계정에 남은 승률 퀴즈 기록을 모두 지울까요? 되돌릴 수 없어요.", quizClearFail: "지우지 못했어요. 잠시 뒤 다시 해 주세요.",
    trainerTitle: "🧠 GTO 트레이너", trainerSolved: "푼 문제", avgLoss: "평균 EV 손실", goodRate: "좋은 선택", trainerOpen: "트레이너 열기 →",
    cat: { srp: "싱글레이즈팟", "3bp": "3벳팟", blind: "블라인드전" },
    savedTitle: "📁 솔버 저장 목록", savedRanges: "레인지", savedConfigs: "벳 설정", savedOpen: "솔버 열기 →",
    solverClearNote: "저장 목록은 솔버에서 지우면 여기서도 빠져요. 트레이너 기록은 지금은 계정에서 지울 수 없어요(솔버의 초기화는 이 기기만 지웁니다).",
    loginLine: "승률 퀴즈는 로그인하면 계정에 남고, GTO 트레이너는 솔버에서 같은 계정으로 로그인하면 남아요.",
  },
  en: {
    title: "My records", sub: "Saved to your account — only you can see them.",
    loading: "Loading…", loadError: "Couldn't load your records. Please try again shortly.", empty: "No records yet",
    quizTitle: "🎯 Equity quiz", quizHands: "Hands", quizAvgErr: "Avg off", quizHit: "Call/fold right", quizLast7: "Last 7 days", quizOpen: "Keep quizzing →",
    quizClear: "Delete these records", quizClearConfirm: "Delete all equity quiz records saved to your account? This can't be undone.", quizClearFail: "Couldn't delete. Please try again shortly.",
    trainerTitle: "🧠 GTO Trainer", trainerSolved: "Questions", avgLoss: "Avg EV loss", goodRate: "Good-play rate", trainerOpen: "Open the trainer →",
    cat: { srp: "Single Raised", "3bp": "3-Bet Pot", blind: "Blind vs Blind" },
    savedTitle: "📁 Solver saved list", savedRanges: "Ranges", savedConfigs: "Bet settings", savedOpen: "Open the solver →",
    solverClearNote: "Items you delete from the saved list in the solver disappear here too. Trainer records can't be deleted from your account yet (the solver's reset only clears this device).",
    loginLine: "Log in and your equity quiz records stay in your account. GTO trainer records are kept when you log in to the solver with the same account.",
  },
  ja: {
    title: "マイ記録", sub: "アカウントに保存された記録です。本人だけが見られます。",
    loading: "読み込み中…", loadError: "記録を読み込めませんでした。しばらくしてからもう一度開いてください。", empty: "まだ記録がありません",
    quizTitle: "🎯 勝率クイズ", quizHands: "プレイ数", quizAvgErr: "平均誤差", quizHit: "コール/フォールド正解", quizLast7: "直近7日", quizOpen: "クイズを続ける →",
    quizClear: "この記録を削除", quizClearConfirm: "アカウントに保存された勝率クイズの記録をすべて削除しますか？元に戻せません。", quizClearFail: "削除できませんでした。しばらくしてからもう一度お試しください。",
    trainerTitle: "🧠 GTOトレーナー", trainerSolved: "解いた問題", avgLoss: "平均EVロス", goodRate: "良い選択", trainerOpen: "トレーナーを開く →",
    cat: { srp: "シングルレイズポット", "3bp": "3ベットポット", blind: "ブラインド戦" },
    savedTitle: "📁 ソルバー保存リスト", savedRanges: "レンジ", savedConfigs: "ベット設定", savedOpen: "ソルバーを開く →",
    solverClearNote: "保存リストはソルバーで削除するとここからも消えます。トレーナーの記録は現在アカウントから削除できません（ソルバーのリセットはこの端末の記録だけを消します）。",
    loginLine: "勝率クイズはログインするとアカウントに残ります。GTOトレーナーの記録は、ソルバーで同じアカウントにログインすると残ります。",
  },
  zh: {
    title: "我的记录", sub: "保存在你账号里的记录——只有你自己能看到。",
    loading: "加载中…", loadError: "无法加载记录，请稍后再试。", empty: "还没有记录",
    quizTitle: "🎯 胜率测验", quizHands: "已玩手数", quizAvgErr: "平均误差", quizHit: "跟注/弃牌判断正确", quizLast7: "最近 7 天", quizOpen: "继续测验 →",
    quizClear: "删除这些记录", quizClearConfirm: "要删除账号里保存的全部胜率测验记录吗？删除后无法恢复。", quizClearFail: "删除失败，请稍后再试。",
    trainerTitle: "🧠 GTO 训练器", trainerSolved: "已做题数", avgLoss: "平均 EV 损失", goodRate: "好选择率", trainerOpen: "打开训练器 →",
    cat: { srp: "单加注底池", "3bp": "3bet 底池", blind: "盲位对战" },
    savedTitle: "📁 求解器保存列表", savedRanges: "范围", savedConfigs: "下注设置", savedOpen: "打开求解器 →",
    solverClearNote: "在求解器里删除保存列表的项目，这里也会一起消失。训练器记录目前无法从账号中删除（求解器的重置只清除这台设备上的记录）。",
    loginLine: "登录后，胜率测验记录会保存在账号里；GTO 训练器记录要在求解器里用同一个账号登录才会保存。",
  },
  "zh-hant": {
    title: "我的紀錄", sub: "儲存在你帳號裡的紀錄——只有你自己看得到。",
    loading: "載入中…", loadError: "無法載入紀錄，請稍後再試。", empty: "還沒有紀錄",
    quizTitle: "🎯 勝率測驗", quizHands: "已玩手數", quizAvgErr: "平均誤差", quizHit: "跟注/蓋牌判斷正確", quizLast7: "最近 7 天", quizOpen: "繼續測驗 →",
    quizClear: "刪除這些紀錄", quizClearConfirm: "要刪除帳號裡儲存的全部勝率測驗紀錄嗎？刪除後無法復原。", quizClearFail: "刪除失敗，請稍後再試。",
    trainerTitle: "🧠 GTO 訓練器", trainerSolved: "已做題數", avgLoss: "平均 EV 損失", goodRate: "達標率", trainerOpen: "開啟訓練器 →",
    cat: { srp: "單加注底池", "3bp": "3bet 底池", blind: "盲位對戰" },
    savedTitle: "📁 求解器儲存清單", savedRanges: "範圍", savedConfigs: "下注設定", savedOpen: "開啟求解器 →",
    solverClearNote: "在求解器裡刪除儲存清單的項目，這裡也會一起消失。訓練器紀錄目前無法從帳號中刪除（求解器的重設只會清除這台裝置上的紀錄）。",
    loginLine: "登入後，勝率測驗紀錄會保存在帳號裡；GTO 訓練器紀錄要在求解器裡用同一個帳號登入才會保存。",
  },
  es: {
    title: "Mis registros", sub: "Guardados en tu cuenta — solo tú puedes verlos.",
    loading: "Cargando…", loadError: "No se pudieron cargar tus registros. Inténtalo de nuevo en un momento.", empty: "Aún no hay registros",
    quizTitle: "🎯 Quiz de equity", quizHands: "Manos", quizAvgErr: "Error medio", quizHit: "Call/fold acertados", quizLast7: "Últimos 7 días", quizOpen: "Seguir con el quiz →",
    quizClear: "Borrar estos registros", quizClearConfirm: "¿Borrar todos los registros del quiz de equity guardados en tu cuenta? No se puede deshacer.", quizClearFail: "No se pudo borrar. Inténtalo de nuevo en un momento.",
    trainerTitle: "🧠 Entrenador GTO", trainerSolved: "Preguntas", avgLoss: "Pérdida de EV media", goodRate: "Buenas decisiones", trainerOpen: "Abrir el entrenador →",
    cat: { srp: "Single Raised", "3bp": "Bote 3-bet", blind: "Guerra de ciegas" },
    savedTitle: "📁 Lista guardada del solver", savedRanges: "Rangos", savedConfigs: "Ajustes de apuesta", savedOpen: "Abrir el solver →",
    solverClearNote: "Lo que borres de la lista guardada en el solver también desaparece aquí. Los registros del entrenador aún no se pueden borrar de tu cuenta (el reinicio del solver solo limpia este dispositivo).",
    loginLine: "Al iniciar sesión, tus registros del quiz de equity se guardan en tu cuenta. Los del entrenador GTO se guardan si inicias sesión en el solver con la misma cuenta.",
  },
  de: {
    title: "Meine Statistik", sub: "In deinem Konto gespeichert — nur du kannst sie sehen.",
    loading: "Wird geladen…", loadError: "Deine Daten konnten nicht geladen werden. Bitte versuch es gleich noch einmal.", empty: "Noch keine Einträge",
    quizTitle: "🎯 Equity-Quiz", quizHands: "Hände", quizAvgErr: "Ø Abweichung", quizHit: "Call/Fold richtig", quizLast7: "Letzte 7 Tage", quizOpen: "Weiter mit dem Quiz →",
    quizClear: "Diese Einträge löschen", quizClearConfirm: "Alle in deinem Konto gespeicherten Equity-Quiz-Einträge löschen? Das lässt sich nicht rückgängig machen.", quizClearFail: "Löschen fehlgeschlagen. Bitte versuch es gleich noch einmal.",
    trainerTitle: "🧠 GTO-Trainer", trainerSolved: "Aufgaben", avgLoss: "EV-Verlust im Schnitt", goodRate: "Gute Entscheidungen", trainerOpen: "Trainer öffnen →",
    cat: { srp: "Single Raised", "3bp": "3-Bet-Pot", blind: "Blind vs Blind" },
    savedTitle: "📁 Gespeicherte Liste im Solver", savedRanges: "Ranges", savedConfigs: "Bet-Einstellungen", savedOpen: "Solver öffnen →",
    solverClearNote: "Was du in der gespeicherten Liste im Solver löschst, verschwindet auch hier. Trainer-Einträge lassen sich derzeit nicht aus dem Konto löschen (der Reset im Solver leert nur dieses Gerät).",
    loginLine: "Mit Anmeldung bleiben deine Equity-Quiz-Einträge im Konto. GTO-Trainer-Einträge bleiben, wenn du dich im Solver mit demselben Konto anmeldest.",
  },
  pt: {
    title: "Meus registros", sub: "Salvos na sua conta — só você pode vê-los.",
    loading: "Carregando…", loadError: "Não foi possível carregar seus registros. Tente de novo daqui a pouco.", empty: "Ainda não há registros",
    quizTitle: "🎯 Quiz de equity", quizHands: "Mãos", quizAvgErr: "Erro médio", quizHit: "Call/fold certos", quizLast7: "Últimos 7 dias", quizOpen: "Continuar o quiz →",
    quizClear: "Apagar estes registros", quizClearConfirm: "Apagar todos os registros do quiz de equity salvos na sua conta? Não dá para desfazer.", quizClearFail: "Não foi possível apagar. Tente de novo daqui a pouco.",
    trainerTitle: "🧠 Treinador GTO", trainerSolved: "Questões", avgLoss: "Perda de EV média", goodRate: "Boas decisões", trainerOpen: "Abrir o treinador →",
    cat: { srp: "Single Raised", "3bp": "Pote 3-bet", blind: "Blind vs Blind" },
    savedTitle: "📁 Lista salva do solver", savedRanges: "Ranges", savedConfigs: "Ajustes de aposta", savedOpen: "Abrir o solver →",
    solverClearNote: "O que você apagar da lista salva no solver também some daqui. Os registros do treinador ainda não podem ser apagados da sua conta (o reset do solver só limpa este dispositivo).",
    loginLine: "Com login, seus registros do quiz de equity ficam na sua conta. Os do treinador GTO ficam quando você faz login no solver com a mesma conta.",
  },
  id: {
    title: "Catatanku", sub: "Tersimpan di akunmu — hanya kamu yang bisa melihatnya.",
    loading: "Memuat…", loadError: "Catatan tidak bisa dimuat. Coba lagi sebentar lagi.", empty: "Belum ada catatan",
    quizTitle: "🎯 Kuis equity", quizHands: "Tangan", quizAvgErr: "Rata-rata meleset", quizHit: "Call/fold tepat", quizLast7: "7 hari terakhir", quizOpen: "Lanjut kuis →",
    quizClear: "Hapus catatan ini", quizClearConfirm: "Hapus semua catatan kuis equity di akunmu? Tidak bisa dibatalkan.", quizClearFail: "Gagal menghapus. Coba lagi sebentar lagi.",
    trainerTitle: "🧠 Trainer GTO", trainerSolved: "Soal", avgLoss: "Rerata kerugian EV", goodRate: "% keputusan baik", trainerOpen: "Buka trainer →",
    cat: { srp: "Single Raised", "3bp": "Pot 3-bet", blind: "Blind vs Blind" },
    savedTitle: "📁 Daftar simpanan solver", savedRanges: "Range", savedConfigs: "Pengaturan bet", savedOpen: "Buka solver →",
    solverClearNote: "Item yang kamu hapus dari daftar simpanan di solver juga hilang dari sini. Catatan trainer belum bisa dihapus dari akun (reset di solver hanya membersihkan perangkat ini).",
    loginLine: "Login, dan catatan kuis equity tersimpan di akunmu. Catatan trainer GTO tersimpan jika kamu login di solver dengan akun yang sama.",
  },
  ms: {
    title: "Rekod saya", sub: "Disimpan dalam akaun anda — hanya anda boleh melihatnya.",
    loading: "Memuatkan…", loadError: "Rekod tidak dapat dimuatkan. Sila cuba lagi sebentar.", empty: "Belum ada rekod",
    quizTitle: "🎯 Kuiz equity", quizHands: "Tangan", quizAvgErr: "Purata tersasar", quizHit: "Call/fold tepat", quizLast7: "7 hari lepas", quizOpen: "Teruskan kuiz →",
    quizClear: "Padam rekod ini", quizClearConfirm: "Padam semua rekod kuiz equity dalam akaun anda? Tindakan ini tidak boleh dibatalkan.", quizClearFail: "Gagal memadam. Sila cuba lagi sebentar.",
    trainerTitle: "🧠 Jurulatih GTO", trainerSolved: "Soalan", avgLoss: "Purata kerugian EV", goodRate: "% keputusan baik", trainerOpen: "Buka jurulatih →",
    cat: { srp: "Single Raised", "3bp": "Pot 3-bet", blind: "Blind vs Blind" },
    savedTitle: "📁 Senarai simpanan solver", savedRanges: "Range", savedConfigs: "Tetapan bet", savedOpen: "Buka solver →",
    solverClearNote: "Item yang anda padam daripada senarai simpanan dalam solver turut hilang di sini. Rekod jurulatih belum boleh dipadam daripada akaun (tetapan semula solver hanya mengosongkan peranti ini).",
    loginLine: "Log masuk dan rekod kuiz equity kekal dalam akaun anda. Rekod jurulatih GTO disimpan apabila anda log masuk ke solver dengan akaun yang sama.",
  },
  vi: {
    title: "Lịch sử luyện tập", sub: "Lưu trong tài khoản của bạn — chỉ bạn xem được.",
    loading: "Đang tải…", loadError: "Không tải được dữ liệu. Hãy thử lại sau ít phút.", empty: "Chưa có dữ liệu",
    quizTitle: "🎯 Quiz equity", quizHands: "Số ván", quizAvgErr: "Sai lệch trung bình", quizHit: "Call/fold đúng", quizLast7: "7 ngày qua", quizOpen: "Chơi tiếp quiz →",
    quizClear: "Xóa dữ liệu này", quizClearConfirm: "Xóa toàn bộ dữ liệu quiz equity trong tài khoản? Không thể hoàn tác.", quizClearFail: "Chưa xóa được. Hãy thử lại sau ít phút.",
    trainerTitle: "🧠 GTO Trainer", trainerSolved: "Số câu", avgLoss: "EV mất trung bình", goodRate: "Tỷ lệ chơi tốt", trainerOpen: "Mở trainer →",
    cat: { srp: "Single raised", "3bp": "Pot 3-bet", blind: "Blind vs blind" },
    savedTitle: "📁 Danh sách đã lưu của solver", savedRanges: "Range", savedConfigs: "Thiết lập bet", savedOpen: "Mở solver →",
    solverClearNote: "Mục bạn xóa khỏi danh sách đã lưu trong solver cũng biến mất ở đây. Hiện chưa thể xóa dữ liệu trainer khỏi tài khoản (nút đặt lại trong solver chỉ xóa trên thiết bị này).",
    loginLine: "Đăng nhập thì dữ liệu quiz equity được lưu vào tài khoản. Dữ liệu GTO trainer được lưu khi bạn đăng nhập solver bằng cùng tài khoản.",
  },
  tr: {
    title: "Kayıtlarım", sub: "Hesabınıza kaydedildi — yalnızca siz görebilirsiniz.",
    loading: "Yükleniyor…", loadError: "Kayıtlar yüklenemedi. Lütfen biraz sonra tekrar deneyin.", empty: "Henüz kayıt yok",
    quizTitle: "🎯 Equity testi", quizHands: "El", quizAvgErr: "Ort. sapma", quizHit: "Doğru call/fold", quizLast7: "Son 7 gün", quizOpen: "Teste devam →",
    quizClear: "Bu kayıtları sil", quizClearConfirm: "Hesabınızdaki tüm equity testi kayıtları silinsin mi? Bu işlem geri alınamaz.", quizClearFail: "Silinemedi. Lütfen biraz sonra tekrar deneyin.",
    trainerTitle: "🧠 GTO Trainer", trainerSolved: "Soru", avgLoss: "Ortalama EV kaybı", goodRate: "İyi karar oranı", trainerOpen: "Trainer'ı aç →",
    cat: { srp: "Single raised", "3bp": "3-bet pot", blind: "Blind vs blind" },
    savedTitle: "📁 Solver kayıtlı listesi", savedRanges: "Range", savedConfigs: "Bet ayarları", savedOpen: "Solver'ı aç →",
    solverClearNote: "Solver'da kayıtlı listeden sildiğiniz öğeler burada da kaybolur. Trainer kayıtları şu an hesaptan silinemez (solver'daki sıfırlama yalnızca bu cihazı temizler).",
    loginLine: "Giriş yaptığınızda equity testi kayıtlarınız hesabınızda kalır. GTO trainer kayıtları ise solver'da aynı hesapla giriş yaptığınızda saklanır.",
  },
};

/** 프로필 탭 라벨(community-client getL)과 같은 폴백 — 사전에 없는 로케일은 en */
export function myRecordsLabels(locale: string): Labels {
  return LABELS[locale] ?? LABELS.en;
}

type TrainerSummary = { solved: number; avgLoss: number; goodRate: number; byCat: Record<Cat, number> };
type Data = {
  quiz: { totals: QuizTotals; last7: number } | null;
  trainer: TrainerSummary | null;
  saved: { ranges: number; configs: number } | null;
};

async function fetchTrainer(sb: ReturnType<typeof createClient>, userId: string): Promise<TrainerSummary | null> {
  const rows: { category: string; ev_loss_bb: number | string }[] = [];
  const PAGE = 1000;
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await sb
      .from("trainer_attempts")
      .select("category, ev_loss_bb")
      .eq("user_id", userId)
      .order("id")
      .range(from, from + PAGE - 1);
    if (error) return null;
    rows.push(...(data ?? []));
    if (!data || data.length < PAGE) break;
  }
  const byCat: Record<Cat, number> = { srp: 0, "3bp": 0, blind: 0 };
  let lossSum = 0, good = 0;
  for (const r of rows) {
    const loss = Number(r.ev_loss_bb) || 0;
    lossSum += loss;
    const c = (CATS as string[]).includes(r.category) ? (r.category as Cat) : null;
    if (c) { byCat[c] += 1; if (loss <= GOOD_MAX[c]) good += 1; }
  }
  const n = rows.length;
  return { solved: n, avgLoss: n ? lossSum / n : 0, goodRate: n ? good / n : 0, byCat };
}

async function fetchSaved(sb: ReturnType<typeof createClient>, userId: string) {
  const count = (kind: "range" | "config") => sb
    .from("solver_saved_items")
    .select("id", { count: "exact", head: true })
    .eq("user_id", userId).eq("kind", kind).eq("is_group", false).is("deleted_at", null);
  const [r, c] = await Promise.all([count("range"), count("config")]);
  if (r.error || c.error) return null;
  return { ranges: r.count ?? 0, configs: c.count ?? 0 };
}

export default function MyRecords({ userId, locale }: { userId: string; locale: string }) {
  const L = myRecordsLabels(locale);
  const [data, setData] = useState<Data | null>(null);
  const [clearing, setClearing] = useState(false);

  useEffect(() => {
    let alive = true;
    const sb = createClient();
    (async () => {
      // 이 브라우저에 끝난 판이 남아 있으면 먼저 올린다(퀴즈 화면을 다시 안 열어도 계정에 모이게 · 실패해도 그대로)
      await uploadQuizHands(sb, userId).catch(() => null);
      const [quiz, trainer, saved] = await Promise.all([
        fetchAccountQuiz(sb, userId).catch(() => null),
        fetchTrainer(sb, userId).catch(() => null),
        fetchSaved(sb, userId).catch(() => null),
      ]);
      if (!alive) return;
      // 아직 올리지 않은 판(진행 중)은 퀴즈 화면처럼 합계에 더한다
      // 최근 7일도 같은 범위로 센다 — 안 그러면 «푼 판 1 · 최근 7일 0»이 나온다(MA-436 ③)
      const store = readQuizStore();
      const since = Date.now() - 7 * 24 * 60 * 60 * 1000;
      const pending7 = store.pending.filter((r) => Date.parse(r.played_at) >= since).length;
      const q = quiz && { totals: addQuizTotals(quiz.totals, pendingQuizTotals(store)), last7: quiz.last7 + pending7 };
      setData({ quiz: q, trainer, saved });
    })();
    return () => { alive = false; };
  }, [userId]);

  const intlLocale = locale === "zh-hant" ? "zh-Hant" : LABELS[locale] ? locale : "en";
  const fmt = (n: number, digits: number) => {
    try { return new Intl.NumberFormat(intlLocale, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(n); }
    catch { return n.toFixed(digits); }
  };
  const pct = (r: number) => {
    try { return new Intl.NumberFormat(intlLocale, { style: "percent", maximumFractionDigits: 0 }).format(r); }
    catch { return `${Math.round(r * 100)}%`; }
  };

  const solverLang = SOLVER_LANGS.includes(locale) ? locale : "en";
  const solverHref = (view: string) => `https://solver.holdemmaster.com/?view=${view}&lang=${solverLang}`;
  const quizHref = locale === "ko" ? "/win-rate-quiz" : "/en/win-rate-quiz";

  async function clearQuiz() {
    if (!window.confirm(L.quizClearConfirm)) return;
    setClearing(true);
    const ok = await deleteAccountQuiz(createClient(), userId);
    setClearing(false);
    if (!ok) { window.alert(L.quizClearFail); return; }
    setData((d) => d && { ...d, quiz: { totals: { hands: 0, guesses: 0, errSum: 0, decisions: 0, hits: 0, points: 0 }, last7: 0 } });
  }

  const sans = "var(--font-inter),sans-serif";
  const serif = "var(--font-lora),serif";

  const Stat = ({ label, val }: { label: string; val: string }) => (
    <div className="min-w-0">
      <p className="text-base font-semibold tabular-nums" style={{ color: INK, fontFamily: serif }}>{val}</p>
      <p className="text-[10.5px] leading-tight" style={{ color: MUTED, fontFamily: sans }}>{label}</p>
    </div>
  );

  const Card = ({ title, href, open, external, empty, children }: {
    title: string; href: string; open: string; external?: boolean; empty: boolean; children?: ReactNode;
  }) => (
    <div className="rounded p-4" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-[14px] font-medium" style={{ color: INK, fontFamily: serif }}>{title}</p>
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener" } : {})}
          className="text-[12px] font-semibold shrink-0 hover:underline"
          style={{ color: GOLD, fontFamily: sans }}
        >{open}</a>
      </div>
      {empty
        ? <p className="text-[12.5px] mt-1" style={{ color: MUTED, fontFamily: sans }}>{L.empty}</p>
        : <div className="mt-3">{children}</div>}
    </div>
  );

  return (
    <section className="space-y-2.5" aria-label={L.title}>
      <div className="px-1 pt-1">
        <p className="text-[11px] font-bold tracking-widest uppercase" style={{ color: MUTED, fontFamily: sans }}>{L.title}</p>
        <p className="text-[11.5px] mt-0.5" style={{ color: MUTED, fontFamily: sans }}>{L.sub}</p>
      </div>

      {!data ? (
        <div className="rounded p-4 text-[12.5px]" style={{ background: CARD, border: `1px solid ${BORDER}`, color: MUTED, fontFamily: sans }}>{L.loading}</div>
      ) : (
        <>
          {/* 🎯 승률 퀴즈 */}
          {data.quiz === null
            ? <Card title={L.quizTitle} href={quizHref} open={L.quizOpen} empty={false}><p className="text-[12.5px]" style={{ color: RED, fontFamily: sans }}>{L.loadError}</p></Card>
            : (() => {
              const t = data.quiz.totals;
              return (
                <Card title={L.quizTitle} href={quizHref} open={L.quizOpen} empty={t.hands === 0}>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Stat label={L.quizHands} val={fmt(t.hands, 0)} />
                    <Stat label={L.quizAvgErr} val={t.guesses ? `${fmt(t.errSum / t.guesses, 1)}%p` : "—"} />
                    <Stat label={L.quizHit} val={t.decisions ? `${pct(t.hits / t.decisions)} · ${t.hits}/${t.decisions}` : "—"} />
                    <Stat label={L.quizLast7} val={fmt(data.quiz.last7, 0)} />
                  </div>
                  <button
                    onClick={clearQuiz}
                    disabled={clearing}
                    className="text-[11px] underline mt-3 disabled:opacity-50"
                    style={{ color: MUTED, fontFamily: sans }}
                  >{L.quizClear}</button>
                </Card>
              );
            })()}

          {/* 🧠 GTO 트레이너 */}
          {data.trainer === null
            ? <Card title={L.trainerTitle} href={solverHref("trainer")} open={L.trainerOpen} external empty={false}><p className="text-[12.5px]" style={{ color: RED, fontFamily: sans }}>{L.loadError}</p></Card>
            : (
              <Card title={L.trainerTitle} href={solverHref("trainer")} open={L.trainerOpen} external empty={data.trainer.solved === 0}>
                <div className="grid grid-cols-3 gap-3">
                  <Stat label={L.trainerSolved} val={fmt(data.trainer.solved, 0)} />
                  <Stat label={L.avgLoss} val={`${fmt(data.trainer.avgLoss, 3)}bb`} />
                  <Stat label={L.goodRate} val={pct(data.trainer.goodRate)} />
                </div>
                <p className="text-[11.5px] mt-2.5" style={{ color: MUTED, fontFamily: sans }}>
                  {CATS.map((c) => `${L.cat[c]} ${fmt(data.trainer!.byCat[c], 0)}`).join(" · ")}
                </p>
              </Card>
            )}

          {/* 📁 솔버 저장 목록 */}
          {data.saved === null
            ? <Card title={L.savedTitle} href={solverHref("oop-range")} open={L.savedOpen} external empty={false}><p className="text-[12.5px]" style={{ color: RED, fontFamily: sans }}>{L.loadError}</p></Card>
            : (
              <Card title={L.savedTitle} href={solverHref("oop-range")} open={L.savedOpen} external empty={data.saved.ranges + data.saved.configs === 0}>
                <div className="grid grid-cols-2 gap-3">
                  <a href={solverHref("oop-range")} target="_blank" rel="noopener" className="hover:opacity-80"><Stat label={L.savedRanges} val={fmt(data.saved.ranges, 0)} /></a>
                  <a href={solverHref("tree-config")} target="_blank" rel="noopener" className="hover:opacity-80"><Stat label={L.savedConfigs} val={fmt(data.saved.configs, 0)} /></a>
                </div>
              </Card>
            )}

          {((data.trainer?.solved ?? 0) > 0 || (data.saved && data.saved.ranges + data.saved.configs > 0)) && (
            <p className="text-[11px] px-1" style={{ color: MUTED, fontFamily: sans }}>{L.solverClearNote}</p>
          )}
        </>
      )}
    </section>
  );
}
