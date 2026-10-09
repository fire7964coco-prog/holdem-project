import type { SolverFeedbackLocale } from "@/lib/solver-feedback-config";

/**
 * /s/<id> 공유 스팟 미리보기 문구 (2026-10-09 · 후기창 코드 2)
 * - board·pot·stack = 솔버 앱 라벨 축어(solver/src/custom-trainer-labels.ts board·pot·stack — 문구만 참조 · 코드 이식 아님)
 * - open = 각 언어 솔버 랜딩의 CTA 축어(app/<locale>/solver/solver-client.tsx «솔버 열기» 꼴)
 * - 화면 언어 = 보는 사람의 Accept-Language(공유한 사람이 아니라) · 없거나 못 받는 언어면 en.
 * - 문구 규칙 = docs/solver-factsheet.md §5 («미리 계산» 금지 · 비교 금지 · 무료).
 */
export type SpotShareDict = {
  title: string;
  lead: string;
  board: string;
  pot: string;
  stack: string;
  open: string;
  landing: string;
  notFound: string;
  notFoundBody: string;
};

export const SPOT_SHARE_I18N: Record<SolverFeedbackLocale, SpotShareDict> = {
  ko: {
    title: "공유된 솔버 스팟", lead: "누군가 홀덤마스터 GTO 솔버에서 이 스팟을 공유했습니다. 레인지·벳 사이즈 설정이 그대로 열립니다.",
    board: "보드", pot: "팟", stack: "스택", open: "솔버에서 열기 →", landing: "무료 GTO 솔버 소개",
    notFound: "스팟을 찾지 못했습니다", notFoundBody: "주소가 잘못됐거나 지워진 링크입니다. 솔버에서 직접 스팟을 만들어 보세요.",
  },
  en: {
    title: "Shared solver spot", lead: "Someone shared this spot from the HoldemMaster GTO solver. It opens with the same ranges and bet sizes.",
    board: "Board", pot: "Pot", stack: "Stack", open: "Open in the solver →", landing: "About the free GTO solver",
    notFound: "Spot not found", notFoundBody: "The link is wrong or no longer exists. You can build the spot yourself in the solver.",
  },
  ja: {
    title: "共有されたソルバースポット", lead: "ホールデムマスターのGTOソルバーで共有されたスポットです。レンジとベットサイズの設定がそのまま開きます。",
    board: "ボード", pot: "ポット", stack: "スタック", open: "ソルバーで開く →", landing: "無料GTOソルバーの紹介",
    notFound: "スポットが見つかりません", notFoundBody: "リンクが間違っているか、削除されています。ソルバーで直接スポットを作ってみてください。",
  },
  es: {
    title: "Spot de solver compartido", lead: "Alguien compartió este spot desde el solver GTO de HoldemMaster. Se abre con los mismos rangos y tamaños de apuesta.",
    board: "Board", pot: "Bote", stack: "Stack", open: "Abrir en el solver →", landing: "Sobre el solver GTO gratis",
    notFound: "No encontramos el spot", notFoundBody: "El enlace es incorrecto o ya no existe. Puedes armar el spot tú mismo en el solver.",
  },
  pt: {
    title: "Spot de solver compartilhado", lead: "Alguém compartilhou este spot no solver GTO do HoldemMaster. Ele abre com os mesmos ranges e tamanhos de aposta.",
    board: "Board", pot: "Pote", stack: "Stack", open: "Abrir no solver →", landing: "Sobre o solver GTO grátis",
    notFound: "Spot não encontrado", notFoundBody: "O link está errado ou não existe mais. Você pode montar o spot no solver.",
  },
  de: {
    title: "Geteilter Solver-Spot", lead: "Jemand hat diesen Spot aus dem GTO Solver von HoldemMaster geteilt. Er öffnet sich mit denselben Ranges und Einsatzgrößen.",
    board: "Board", pot: "Pot", stack: "Stack", open: "Im Solver öffnen →", landing: "Mehr zum kostenlosen GTO Solver",
    notFound: "Spot nicht gefunden", notFoundBody: "Der Link ist falsch oder existiert nicht mehr. Du kannst den Spot selbst im Solver anlegen.",
  },
  zh: {
    title: "分享的求解器场景", lead: "有人从 HoldemMaster GTO 求解器分享了这个场景。打开后范围和下注尺度设置保持不变。",
    board: "公共牌", pot: "底池", stack: "筹码量", open: "在求解器中打开 →", landing: "了解免费 GTO 求解器",
    notFound: "找不到这个场景", notFoundBody: "链接有误或已不存在。你可以直接在求解器里设置这个场景。",
  },
  "zh-hant": {
    title: "分享的 Solver 場景", lead: "有人從 HoldemMaster GTO Solver 分享了這個場景。打開後範圍和下注尺度設定保持不變。",
    board: "公共牌", pot: "底池", stack: "籌碼量", open: "在 Solver 中打開 →", landing: "了解免費的 GTO Solver",
    notFound: "找不到這個場景", notFoundBody: "連結有誤或已不存在。你可以直接在 Solver 裡設定這個場景。",
  },
  fr: {
    title: "Spot de solver partagé", lead: "Quelqu’un a partagé ce spot depuis le solver GTO de HoldemMaster. Il s’ouvre avec les mêmes ranges et tailles de mise.",
    board: "Board", pot: "Pot", stack: "Stack", open: "Ouvrir dans le solver →", landing: "Découvrir le solver GTO gratuit",
    notFound: "Spot introuvable", notFoundBody: "Le lien est erroné ou n’existe plus. Tu peux construire le spot toi-même dans le solver.",
  },
  id: {
    title: "Spot solver yang dibagikan", lead: "Seseorang membagikan spot ini dari solver GTO HoldemMaster. Spot terbuka dengan range dan ukuran bet yang sama.",
    board: "Board", pot: "Pot", stack: "Stack", open: "Buka di solver →", landing: "Tentang solver GTO gratis",
    notFound: "Spot tidak ditemukan", notFoundBody: "Tautan salah atau sudah tidak ada. Anda bisa menyusun spot sendiri di solver.",
  },
  ms: {
    title: "Spot solver yang dikongsi", lead: "Seseorang berkongsi spot ini daripada solver GTO HoldemMaster. Spot dibuka dengan range dan saiz bet yang sama.",
    board: "Board", pot: "Pot", stack: "Stack", open: "Buka dalam solver →", landing: "Tentang solver GTO percuma",
    notFound: "Spot tidak dijumpai", notFoundBody: "Pautan salah atau sudah tiada. Anda boleh menyediakan spot sendiri dalam solver.",
  },
  hi: {
    title: "शेयर किया गया सॉल्वर स्पॉट", lead: "किसी ने HoldemMaster GTO सॉल्वर से यह स्पॉट शेयर किया है। यह उन्हीं रेंज और बेट साइज़ के साथ खुलता है।",
    board: "बोर्ड", pot: "पॉट", stack: "स्टैक", open: "सॉल्वर में खोलें →", landing: "मुफ़्त GTO सॉल्वर के बारे में",
    notFound: "स्पॉट नहीं मिला", notFoundBody: "लिंक गलत है या अब मौजूद नहीं है। आप सॉल्वर में खुद यह स्पॉट बना सकते हैं।",
  },
  tr: {
    title: "Paylaşılan solver spotu", lead: "Biri bu spotu HoldemMaster GTO solver'dan paylaştı. Aynı range ve bet boyutlarıyla açılır.",
    board: "Board", pot: "Pot", stack: "Stack", open: "Solver'da aç →", landing: "Ücretsiz GTO solver hakkında",
    notFound: "Spot bulunamadı", notFoundBody: "Bağlantı hatalı ya da artık yok. Spotu solver'da kendin kurabilirsin.",
  },
  vi: {
    title: "Spot solver được chia sẻ", lead: "Có người đã chia sẻ spot này từ GTO solver của HoldemMaster. Spot mở ra với đúng range và kích thước cược đã đặt.",
    board: "Board", pot: "Pot", stack: "Stack", open: "Mở trong solver →", landing: "Tìm hiểu GTO solver miễn phí",
    notFound: "Không tìm thấy spot", notFoundBody: "Đường dẫn sai hoặc không còn tồn tại. Bạn có thể tự dựng spot trong solver.",
  },
};

/** Accept-Language → 화면 언어 (zh-TW·zh-HK·zh-Hant = zh-hant · 못 받는 언어는 en) */
export function spotShareLocale(acceptLanguage: string | null | undefined, override?: string | null): SolverFeedbackLocale {
  const known = Object.keys(SPOT_SHARE_I18N) as SolverFeedbackLocale[];
  if (override && (known as string[]).includes(override)) return override as SolverFeedbackLocale;
  const tags = (acceptLanguage ?? "")
    .split(",")
    .map((s) => {
      const [tag, ...params] = s.trim().split(";");
      const q = params.map((p) => /^q=([\d.]+)$/.exec(p.trim())).find(Boolean);
      return { tag: tag.toLowerCase(), q: q ? Number(q[1]) : 1 };
    })
    .filter((x) => x.tag && x.q > 0)
    .sort((a, b) => b.q - a.q);
  for (const { tag } of tags) {
    if (/^zh-(tw|hk|mo|hant)/.test(tag)) return "zh-hant";
    const base = tag.split("-")[0];
    if ((known as string[]).includes(base)) return base as SolverFeedbackLocale;
  }
  return "en";
}
