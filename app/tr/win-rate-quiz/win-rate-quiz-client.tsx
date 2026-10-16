"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

/**
 * 터키어(tr-TR)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 여섯 번째 언어).
 *
 * 정본 = `app/en/win-rate-quiz/win-rate-quiz-client.tsx` — 구조·분기·숫자 그대로, 문자열만 재저작(형제 = pt·fr·id·ms·vi).
 * 테이블 UI·엔진은 전 언어 공용(`_simulator.tsx`·`_engine`) — 숫자는 전 언어 동일(§13).
 * 독자 = 튀르키예(sen체 — docs/translation-terms-tr.md «문체» · 계산기 사전과 같은 register).
 * 용어 출처: docs/translation-terms-tr.md → app/tr/calculator/dict.ts(족보 = 코퍼스 표 형 «Yüksek Kart … Kare» + 영어 Flush·Full House·Straight Flush ·
 *   «kazanma/beraberlik %'si» · «pot oranı») → lib/posts-tr + 계산기 사전 코퍼스 빈도(10-13 grep):
 *   fold 302(fold et 72) · call 500 · check 330 · all-in 268 · showdown 164 · beraberlik 52 · pot bölün 40(split pot 17) ·
 *   preflop 163 · kent draw 19(straight draw 0) · flush draw 8 · top pair 49 · overpair 34 · overcard 23 · pot odds 76 · pot oranı 60 ·
 *   implied odds 45 · kombo 47(kombinasyon 23 · combo 3) · board 443 · range 218(aralık 9) · rakip 96 · equity 205 · yüzde puan 4 · agresif 24.
 *   🔴 «pas» 금지(check/fold 갈림 · 10-06 사장님 확정) — fold·check는 영어 그대로.
 *   «%p» = «yüzde puan»(점수 «puan»과 붙여 써서 구분 — MA-521 fr «points» 혼동 선례).
 * 숫자 = 터키식(`fmtNum` tr-TR «1.000» · 산문 소수 쉼표 «0,25» · 🔴 퍼센트 기호 앞 «%35» — 계산기 percentPrefix와 같음).
 *   ⚠ 공용 UI의 % 표기(toFixed + 뒤 «%»)는 전 언어 공통(id·fr·vi와 같음 · 공용 회차 몫). 사전 문장만 «%N»·`dec` 쉼표.
 * 스트리트 + 처소격(«turn'de»·«river'da»)은 모음조화가 이름마다 달라 STREET_LOC 표로 고정한다.
 * 솔버 메뉴명 «Flop çalışması» = 솔버 앱 flop-study-labels.ts tr.title 축어.
 * 헤드텀 실측(DFS Türkiye · 2026-10-13) → page.tsx 머리 주석 · docs/keyword-bank/win-rate-quiz-ltr.md §tr.
 */

const n = (x: number) => x.toLocaleString("tr-TR");
/** 공용 UI가 toFixed(1)로 넘기는 오차·격차(«3.5»)를 터키식 소수 쉼표로(id·fr·vi 선례). «—»는 그대로. */
const dec = (x: string) => x.replace(".", ",");
/** «… -de/-da» — 문장 머리용(대문자). 스트리트 이름은 공용 streets 배열과 같은 영어 */
const STREET_LOC: Record<string, string> = { Preflop: "Preflop'ta", Flop: "Flop'ta", Turn: "Turn'de", River: "River'da" };

const TR_NAMES: HandNames = {
  categories: ["Yüksek Kart", "Çift", "İki Çift", "Üçlü", "Kent", "Flush", "Full House", "Kare", "Straight Flush"],
  drawingDead: "Drawing dead",
  flushDraw: "Flush draw",
  straightDraw: "Kent draw",
};

const TR_UI: QuizUI = {
  names: TR_NAMES,
  streets: ["Preflop", "Flop", "Turn", "River"],
  hero: "Sen",
  folded: "Fold etti",
  raise: "Raise",
  call: "Call",
  bet: "Bet",
  check: "Check",
  allIn: "All-in",
  tableNote: "6-max ya da 9 kişilik masa · flop'u kaç kişinin göreceğini seç (2–6)",
  playersBtn: (k) => `${k} oyuncu`,
  playersLabel: "Oyuncu",
  tableBtn: (k) => `${k}-max`,
  styleLabel: "Rakip tarzı",
  styleHint: "Rakip tarzı — yalnızca flop'tan itibaren aksiyon kurallarını değiştirir; preflop range'leri aynı kalır",
  styleNames: { standard: "Normal", tight: "Tight", loose: "Loose", aggressive: "Agresif" },
  loading: "Kartlar karılıyor, hesaplanıyor…",

  myEquity: "Equity'n",
  vsOpponents: (k) => (k === 0 ? "rakip kalmadı" : `${k} rakibe karşı`),
  basisSeat: "pozisyon range'lerine karşı",
  basisRange: "aksiyonlarına uyan ellere karşı",
  roleOpen: "Open",
  roleDefend: "Defend",
  // 390 승률 패널 한 줄(whitespace-nowrap)에 맞춘 짧은 꼴 — «Kazanma · Beraberlik · Kaybetme»는 29px 넘침(10-13 실측).
  winShort: "Kazan",
  tieShort: "Berabere",
  loseShort: "Kaybet",
  revealedLabel: "👀 Açılan ellerin tam kendilerine karşı",
  revealedNote: (gap) =>
    `Üstteki sayı, rakiplerin kartlarını göremediğini varsayar — ikisi arasında ${dec(gap)} yüzde puan fark olmasının nedeni bu. Kararı gerçekte üstteki sayıyla verirdin.`,

  potOddsTitle: "Pot oranı — call'un başabaş olması için gereken equity",
  potLabel: "Pot",
  potBeforeLabel: "Pot (bahisten önce)",
  toCallLabel: "Call tutarı",
  requiredLabel: "Gereken equity",
  noBet: "Kimse bet yapmadı. Sıradaki kartı bedavaya görüyorsun.",
  noBetAllIn: (river) =>
    river
      ? "Elde kalan herkes zaten all-in, bet yapılacak çip kalmadı. El doğrudan showdown'a gidiyor."
      : "Elde kalan herkes zaten all-in, bet yapılacak çip kalmadı. Kalan kartlar açılıyor, sonra el showdown'a gidiyor.",
  verdictCall: "Call",
  verdictFold: "Fold",
  impliedNote: "Yine de elin tuttuğunda daha fazlasını kazanabileceksen (implied odds), call doğru olabilir.",

  revealBtn: (next) => `Sıradaki: ${next} →`,
  newHandBtn: "Yeni el dağıt 🔄",
  showCards: "👀 Rakip kartlarına bak",
  hideCards: "🙈 Rakip kartlarını gizle",

  wonByFold: (pot) => `Herkes fold etti — ${n(pot)} çiplik pot senin`,
  splitLabel: (names) => `Pot bölünüyor — ${names.length > 1 ? names.slice(0, -1).join(", ") + " ve " + names[names.length - 1] : names[0]} berabere`,
  winLabel: (name, cat) => `${name} kazandı · ${cat}`,
  winLabelHero: (cat) => `Sen kazandın · ${cat}`,

  reviewTitle: "📋 İnceleme — nerede fold etmeliydin?",
  reviewCols: ["Street", "Equity'n", "Gereken", "Karar"],
  reviewNoMistake: "✅ Baştan sona call doğruydu.",
  reviewMistake: (street) => `⚠️ ${STREET_LOC[street] ?? street} fold etmek artık doğru karardı. Elden çıkman gereken yer orasıydı.`,
  reviewInvested: (invested, pot) => `Koyduğun: ${n(invested)} · son pot ${n(pot)}`,

  formulaTitle: "📐 Bu sayı nereden geliyor",
  outsLabel: (k) => `Elini tamamlayan ya da güçlendiren ${k} kart`,
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `flush için ${o.flush}` : "",
      o.straight > 0 ? `kent için ${o.straight}` : "",
      o.set > 0 ? `set ya da üçlü için ${o.set}` : "",
      o.twoPair > 0 ? `iki çift için ${o.twoPair}` : "",
      o.over > 0 ? `overcard'ını çifte çevirmek için ${o.over}` : "",
      both > 0 ? `${both} kart iki gruba birden giriyor (bir kez sayıldı)` : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "Bu kartlardan birinin gelme ihtimali (masa hesabı)",
  winLabel2: "Pottaki equity'n (simülasyon · beraberlikte potta payına düşen kısım sayılır)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "Bu ikisi farklı şeyleri ölçer. Üstteki, elinin TUTMA ihtimali; alttaki ise KAZANARAK pottan alacağın pay (beraberlikte payına düşen kısım sayılır). Elin tutsa da rakibin daha da güçlenirse kaybedebilirsin, tutmasa da kazanabilirsin. Karar alttaki sayıyla verilir.",
  noDrawNote: (basis, k) =>
    basis === "seat"
      ? `Hâlâ preflop'tayız, bu yüzden «out × 2/4» kestirmesi henüz geçerli değil. Üstteki equity, her rakibin kendi pozisyonundan pota girebileceği ellere karşı oynanan ${k} el simülasyonundan geliyor.`
      : `Bu aracın saydığı out'lardan hiçbiri sende yok — hiçbir kart flush ya da kent tamamlamıyor veya elini bir kategori yukarı (set, iki çift ya da overcard'ın çift olması) taşımıyor — bu yüzden «out × 2/4» kestirmesi burada geçerli değil. Üstteki equity, gördüğün aksiyonlara uyan tüm ellere karşı oynanan ${k} el simülasyonundan geliyor.`,
  foldWinNote: "Tüm rakipler fold etti, pot senin. Üstteki %100 bir simülasyon sonucu değil — bu elin sonucu.",
  riverNote: "Burası river; açılacak kart kalmadı, bu yüzden «out × 2/4» kestirmesi geçerli değil. Üstteki equity, son elini gördüğün aksiyonlara uyan tüm ellerle karşılaştırır.",
  chartTitle: "📈 Street street equity — tüm kartlar açıkken",
  resultTabs: ["📋 İnceleme", "📈 Equity akışı", "🃏 Hesap"],
  solverTitle: (info) =>
    info.kind === "spot" ? "Bu spotu GTO solver'da gör" : info.kind === "notReady" ? "Benzer bir spotu GTO solver'da gör" : "Heads-up bir spotu GTO solver'da gör",
  solverOpen: "Solver'da «Flop çalışması»nı aç",
  solverNote: (info) => {
    const gto = "Solver, iki oyuncu da GTO oynadığında flop stratejisini gösterir (önceden hesaplanmış sonuçlar · 6-max 100bb · yalnızca flop); bu yüzden range'ler, bet boyutları ve rakip kuralları bu simülatördekinden farklıdır.";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener} open · ${info.caller} call (solver'da single-raised pot) · flop ${info.flop.map((c) => c.rank + c.suit).join("")} — bu link, solver'ın «Flop çalışması» bölümünde aynı iki pozisyonu ve aynı flop'u açar. ${gto}`
          : `${info.opener} open · ${info.caller} call — bu el flop'tan önce bitti, bu yüzden yalnızca pozisyon eşleşmesi açılır. Üç flop kartını solver'da kendin seç. ${gto}`;
      case "notReady":
        return `«${info.opener} open · ${info.caller} call» eşleşmesi, solver'ın «Flop çalışması» bölümünde henüz önceden hesaplanmadı. Yakın bir pozisyon eşleşmesi seç ya da solver'da kendin hesapla.`;
      case "multiway":
        return `Bu flop'u ${info.players} oyuncu gördü. Solver'ın önceden hesaplanmış sonuçları yalnızca heads-up potları kapsıyor, bu yüzden bu el olduğu gibi açılamaz — «Flop çalışması» bölümünde tek rakibe karşı bir eşleşme seç.`;
      case "table9":
        return "Solver'ın önceden hesaplanmış sonuçları 6-max masalar için, bu yüzden 9 kişilik masadaki bir el olduğu gibi açılamaz — «Flop çalışması» bölümünde en yakın pozisyon eşleşmesini seç.";
    }
  },
  solverLang: "tr",
  fmtNum: n,
  decimalComma: true,
  percentPrefix: true,
  chartRangeLegend: "Senin gördüğün",
  chartNote: "Düz çizgiler, tüm eller açıkken her koltuğun equity'sidir; kesikli çizgi, rakip kartlarını bilmeden ekranda gördüğün equity'dir. Fold eden oyuncunun çizgisi, fold ettiği street'ten bir önceki street'te biter.",
  quizToggle: "🎯 Quiz",
  quizGuessTitle: "Equity'n kaç?",
  quizGuessHint: "Tahminini kaydırıcıyla ayarla",
  quizSubmit: "Kontrol et",
  quizCallSubmit: "Call → kontrol et",
  quizFoldSubmit: "Fold → kontrol et",
  quizResult: (guess, err, points) => `Tahminin %${guess} · ${dec(err)} yüzde puan sapma · ${points} puan`,
  quizChoiceResult: (ok, verdict) => (ok ? `Doğru karar (${verdict})` : `Yanlış — doğru cevap ${verdict}`),
  quizNotCounted: "Quiz istatistiklerine eklenmedi — equity'yi ya da rakiplerin kartlarını zaten görmüştün",
  quizStats: (s) => `${s.hands} el · ortalama sapma ${dec(s.avgErr)} yüzde puan · ${s.hits}/${s.decisions} doğru karar · ${n(s.points)} puan`,
  quizReset: "Sıfırla",
  quizResetConfirm: "Bu tarayıcıda kayıtlı quiz geçmişi silinsin mi? Bu işlem geri alınamaz.",
  quizInvite: "Bu geçmişi hesabında saklamak ve her telefon ya da bilgisayarda görmek için giriş yap.",
  quizInviteLink: "Giriş yap",
  quizGuessCol: "Tahmin",
  quizChoiceCol: "Seçim",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `Bu el: ortalama sapma ${dec(avgErr)} yüzde puan${decisions > 0 ? ` · ${hits}/${decisions} doğru karar` : ""} · ${points} puan`,
  quizGuessLegend: "Tahminin",
  customToggle: "✍️ El kur",
  customTitle: "El kur — oynadığın bir eli yeniden oyna",
  customHint: "Bir kutuya dokun, sonra aşağıdan bir kart seç. Boş kutular rastgele dağıtılır; rakipler yine pozisyon range'lerinden el alır.",
  customPos: "Pozisyonun",
  customRandom: "Rastgele",
  customHero: "Elin",
  customBoard: "Board",
  customBoardSlots: ["Flop", "Flop", "Flop", "Turn", "River"],
  customStart: "Bu eli dağıt →",
  customClear: "Hepsini temizle",
  customClose: "Kapat",
  customOff: "Rastgele ellere dön",
  customActive: "Senin kurduğun el · yeni eller bu kartları korur",
  customEdit: "Düzenle",
  shareBtn: "Bu elin linkini kopyala",
  shareCopied: "Kopyalandı. Linki açan herkes bu eli preflop'tan, aynı kartlar ve aynı equity'lerle oynar.",
  shareManual: "Otomatik kopyalama engellendi. Aşağıdaki adresi kopyala.",
  sharedActive: "Paylaşılan el · gönderenle aynı kartlar ve aynı equity'ler (quiz istatistiklerine eklenmez)",
  sharedInvalid: "Paylaşılan link okunamadı, bu yüzden bu yeni bir rastgele el (link kesilmiş ya da değiştirilmiş olabilir)",
  rangeToggle: "Rakip range'ini göster",
  rangeTitle: "Rakip range'i — şu ana kadarki aksiyona uyan eller",
  rangeCombos: (pre, cur, pct) => `Preflop ${pre} kombo → şimdi ${cur} kombo (%${pct} kaldı)`,
  // MA-524 ② 처방 꼴: 색 = 칸별 잔존 «비율»(콤보 «수» 아님).
  rangeLegend: ["Hâlâ range'de (koyu = kalan payı büyük)", "Aksiyonla elendi", "Hiç range'de değildi", "Gerçek el", "Senin elin ya da board tarafından bloklandı"],
  rangeNote: "Rakibin pozisyonuna göre preflop range'inden başlar ve her street'te, rakip kurallarına göre farklı davranacak her eli çıkarır. Üstteki equity aynı range'i kullanır. Senin elinle ya da board'la çakışan kombolar sayılmaz.",
  quizKinds: ["Equity tahmini + karar", "Sadece karar (call/fold?)"],
  decideTitle: "Call mı, fold mu?",
  decideHint: "Rakiplerin kartlarını görmeden call ya da fold seç. Fold etsen de el sonuna kadar oynanır. Bu mod quiz istatistiklerine eklenmez.",
  decideSummary: (hits, decisions) => `Bu el: pot oranına göre ${hits}/${decisions} doğru karar`,
  actualCol: "Kartlar bilinse",
  actualSummary: (hits, decisions) => `Rakiplerin kartlarını bilseydin doğru olan kararlar: ${hits}/${decisions} — yalnızca referans. Masada ölçüt, rakip kartlarını görmeden pot oranıdır.`,

  ruleTitle: "Bu simülatör neyi varsayıyor",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">Rakipler yalnızca aşağıdaki kurallara uyar, başka hiçbir şeye değil.</b> Gerçek hiçbir oyuncu
        böyle oynamaz — pozisyon, rakip, stack derinliği ve masa imajı her şeyi değiştirir. Bunu bir fizik
        problemindeki «sürtünmeyi yok say» varsayımı gibi düşün.
      </p>
      <p className="mb-1">
        Şu anki rakip tarzı: <b className="text-foreground">{TR_UI.styleNames[style]}</b> (tüm masa aynı tarzda oynar · yukarıdaki seçiciden değiştir)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>İki çift ya da daha iyisi → <b className="text-foreground">{style === "aggressive" ? "potun %150'si kadar raise (overbet)" : "pot büyüklüğünde raise"}</b></li>
        {style === "standard" && <li>Çift, ya da flush/kent draw → <b className="text-foreground">yarım pot bet</b></li>}
        {style === "tight" && <>
          <li>Kapalı kartla yapılmış top pair ya da daha iyi bir çift (overpair dahil), ya da flush/kent draw → <b className="text-foreground">yarım pot bet</b></li>
          <li>Daha zayıf her çift (yalnızca board&apos;daki çift dahil) → <b className="text-foreground">fold</b></li>
        </>}
        {style === "loose" && <li>Çift, flush/kent draw, ya da board&apos;daki her karttan yüksek bir kapalı kart (overcard) → <b className="text-foreground">yarım pot bet</b></li>}
        {style === "aggressive" && <>
          <li>Flush/kent draw → <b className="text-foreground">raise (semi-blöf)</b></li>
          <li>Çift → <b className="text-foreground">yarım pot bet</b></li>
          <li>Çift yok, draw yok ama overcard var → <b className="text-foreground">raise (blöf)</b></li>
        </>}
        <li>Geri kalan her şey → <b className="text-foreground">fold</b> (canlı oyundaki gibi kartlar kapalı atılır)</li>
      </ul>
      <p className="mb-2">
        Kurallar yukarıdan aşağı kontrol edilir; uyan ilk satır aksiyonu belirler. Draw, flop&apos;ta ya da turn&apos;de en az bir kapalı kartı kullanan dört kartlık flush ya da kent dizilimidir (river&apos;da draw olmaz).{" "}
        {style === "aggressive" && "Agresif tarzın semi-blöf ve blöf dahil her raise'i potun %150'sidir. "}
        Biri raise yaptığında elde kalan her oyuncu o raise miktarını call eder; kalan stack&apos;ten büyük bir bet
        o stack&apos;e indirilir: oyuncu all-in olur. All-in&apos;den sonra kimse fold etmez — board&apos;un geri kalanı açılır ve el showdown&apos;a gider. Check-raise yoktur — her rakip kurallara göre her street&apos;te bir kez hareket eder; check yapıp sonra yeniden karşılık verme adımı yoktur. Burada sen hiç bet yapmazsın; river&apos;a kadar yalnızca call edersin.
        Preflop range&apos;leri (aşağıda) tarz ne olursa olsun aynıdır.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Equity&apos;n, rakiplerin kartlarını göremiyormuşsun gibi hesaplanır.</b> Flop&apos;tan
        itibaren her rakibin range&apos;i, pozisyona göre preflop range&apos;indeki (aşağıda) eller arasından, seçili tarzın kurallarına göre
        gördüğün aksiyonları yapacak olanlardır — Normal rakiplerde bir raise geriye yalnızca iki çift ve daha iyisini
        bırakır; Agresif rakiplerde draw&apos;lar ve overcard blöfleri de range&apos;de kalır. Ekranda fold eden oyuncular
        da hesaptan çıkar.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Rakiplerin preflop elleri pozisyon range&apos;lerinden gelir.</b> Pottaki
        oyunculardan preflop&apos;ta ilk hareket eden open yapan sayılır; geri kalan herkes o open&apos;a karşı call ya da 3-bet ile
        defend etmiş sayılır (open range&apos;i · defend range&apos;i). Bu range&apos;ler, birkaç açık kaynakla karşılaştırılmış 6-max
        100bb cash game uzlaşı range&apos;leridir; sınırdaki eller %25/50/75 oranında karıştırılır. Tablo olmayan
        durumlarda (UTG open&apos;ına karşı HJ · UTG, HJ ya da CO open&apos;ına karşı SB) ve üçüncü oyuncudan itibaren en yakın
        defend tablosu kullanılır. 9 kişilik tablo yoktur: 9 kişilik masada UTG, UTG+1, UTG+2 ve LJ, 6-max&apos;ın UTG
        tablosunu; diğer her koltuk 6-max&apos;taki aynı adlı tabloyu kullanır (erken bir pozisyonun başka bir erken pozisyonun
        open&apos;ını ya da HJ&apos;nin böyle bir open&apos;ı defend etmesi, CO vs UTG tablosunu kullanır) — bu yüzden 9 kişilik masanın ilk üç
        koltuğu gerçekte olduğundan geniş çıkar. Yalnızca senin elin rastgeledir (kendin kurmadıysan) — bu araç
        herhangi iki kartla river&apos;a kadar oynamanı sağlar. Burada 3-bet pot büyüklüğünü değiştirmez (basitleştirme).
      </p>
      <p className="mb-2">
        <b className="text-foreground">Karar yalnızca pot oranına dayanır.</b> Implied odds hesaba katılmaz;
        rakip eğilimleri ve blöfler de range&apos;lere ancak seçili tarzın kuralları kadar girer. Özellikle draw&apos;lar, pot oranı
        tek başına biraz yetmediğinde bile çoğu zaman call&apos;u haklı çıkarır.
      </p>
      <p>
        Her oyuncu {ANTE} ante koyar ve {n(STACK)} stack&apos;le başlar. Sen hiç fold etmezsin — amaç zaten bu:
        river&apos;ı görüp eli incelemen. Equity, sabit örnek sayısıyla yapılan bir simülasyon tahminidir:{" "}
        preflop&apos;ta <b className="text-foreground">{n(SAMPLES.preflop)} simülasyon</b>, flop&apos;tan itibaren{" "}
        <b className="text-foreground">{n(SAMPLES.postflop)} simülasyon</b> (standart hata yaklaşık 0,25–0,35 yüzde puan).
        Her el sabit bir rastgele seed kullanır, bu yüzden aynı el her cihazda aynı sayıları gösterir. Beraberlikte pot,
        berabere kalan oyuncular arasında eşit bölünür (iki kişi berabereyse yarı yarıya).
      </p>
      <p className="mt-2">
        <b className="text-foreground">Rakip kartlarını açtığında</b>, her koltuk tüm eller bilindiğindeki equity&apos;sini alır. Flop&apos;tan
        itibaren bu hesap kalan her kartı tek tek, kesin olarak sayar (yalnızca preflop {n(SAMPLES.known)} simülasyondur)
        ve ekrandaki equity&apos;ye ya da call/fold kararına hiç girmez — gerçek masada bu bilgiye
        sahip olmazdın.
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 Quiz açıkken</b>, equity ve karar sen cevap verene kadar gizli kalır. «Equity tahmini + karar»
        modunda her street&apos;te equity&apos;ni tahmin edersin; birinin bet yaptığı street&apos;lerde ayrıca call ya da fold seçersin.
        «Sadece karar (call/fold?)» modunda tahmin yoktur: yalnızca birinin bet yaptığı street&apos;lerde call ya da fold seçersin ve bu
        mod quiz istatistiklerine eklenmez. Doğru cevap yukarıdaki «Equity&apos;n»dir (rakip kartlarını
        görmeden çıkan sayı) ve her tahmin <b className="text-foreground">100 − 4 × sapma (yüzde puan)</b>
        {" "}puan alır; sonuç tam sayıya yuvarlanır ve sıfırın altına inmez (sapma 25 yüzde puan ya da daha fazlaysa sıfır). Call/fold seçimin pot oranı kararıyla aynıysa doğru sayılır.
        Toplamların bu tarayıcıda saklanır; giriş yaptıysan hesabına da kaydedilir ve diğer cihazlarda da
        görünür (kartlar ve board kaydedilmez).
      </p>
      <p className="mt-2">
        <b className="text-foreground">✍️ El kur</b> ile pozisyonunu, kapalı kartlarını ve board&apos;u seçip gerçekten oynadığın
        bir eli yeniden oynayabilirsin. Boş kutular rastgele dağıtılır. Rakiplerin kartlarını seçemezsin — gerçek
        masada da bilmezsin — bu yüzden onların kartları yine pozisyon range&apos;lerinden gelir ve ekrandaki equity
        aynı «kartlar bilinmiyor» varsayımını korur. Board önceden seçilmiş olsa bile her street&apos;in equity&apos;si yalnızca
        o ana kadar açılmış kartları kullanır. Aynı eli tekrar oynamak cevapları ezberletebileceği için kurduğun eller
        quiz geçmişine eklenmez.
      </p>
    </>
  ),
  footer: (
    <>
      Hesabın nasıl yapıldığını mı merak ediyorsun?{" "}
      <a href="/tr/blog/holdem-pot-odds" className="text-primary underline">Pot odds nedir, nasıl hesaplanır →</a>
      {" · "}
      <a href="/tr/blog/holdem-positions" className="text-primary underline">Poker pozisyonları</a>
      {" · "}
      <a href="/tr/calculator" className="text-primary underline">Poker hesaplayıcı</a>
    </>
  ),
};

export default function WinRateQuizClientTr() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">Poker Simulator 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">Rakibin kartlarını görmeden oyna — sonra nerede fold etmen gerektiğini gör</p>
      </div>
      <WinRateSimulator ui={TR_UI} />
    </div>
  );
}
