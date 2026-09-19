"use client";

import Link from "next/link";
import { SOLVER_FAQ_HI } from "./faq";

const SOLVER_URL = "https://solver.holdemmaster.com/?lang=hi";

const SPEC: [string, string][] = [
  ["कीमत", "मुफ़्त — सभी सुविधाएँ, इस्तेमाल की कोई सीमा नहीं"],
  ["इंस्टॉलेशन", "ज़रूरी नहीं — WebAssembly की मदद से ब्राउज़र में चलता है"],
  ["खाता", "ज़रूरी नहीं। लॉग इन करने पर अभ्यास स्पॉट और आज की चुनौती का इतिहास सिंक होता है; मेरे स्पॉट के सवाल और उनका अभ्यास इतिहास इसी डिवाइस पर रहते हैं"],
  ["दायरा", "Postflop, heads-up — flop · turn · river"],
  ["गणना कहाँ होती है", "आपके अपने डिवाइस पर — हमारे सर्वर पर नहीं"],
  ["कहाँ इस्तेमाल कर सकते हैं", "Windows, macOS, Linux और मोबाइल के आधुनिक ब्राउज़र में"],
  ["इंजन", "ओपन सोर्स WASM Postflop (AGPL-3.0) · बदलावों सहित सोर्स कोड प्रकाशित है"],
];

// 🔴 ★2026-09-19 (hi 계산기 회차) — 계산기 행 3개 신설. 09-17에 `/hi/calculator`가 생겼는데도 이 표가
//   outs·pot odds·equity·ICM 의도를 전부 «이 페이지의 솔버»나 블로그로 보내고 있었다(도구→도구 카니발 ·
//   브리프 §3-J ⑨ · §3-K ④). ms와 동형으로 **처음부터 계산기 행이 없던** 경우다(id는 낡은 주석이 원인이었다).
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["किसी खास postflop स्थिति की रणनीति निकालना", "इस पेज का सॉल्वर", null],
  ["सॉल्वर चलाए बिना outs और pot odds निकालना", "Poker Odds Calculator", "/hi/calculator"],
  ["दो हैंड भिड़ाकर जीत का प्रतिशत देखना", "Equity कैलकुलेटर", "/hi/calculator"],
  ["Bubble या deal पर prize की कीमत निकालना", "ICM कैलकुलेटर", "/hi/calculator"],
  ["पोकर के नियम और खेल का तरीका सीखना", "शुरुआती के लिए Texas Hold'em की गाइड", "/hi/blog/texas-holdem-rules-for-beginners"],
  ["bet, check, call, raise और fold समझना", "Betting actions की गाइड", "/hi/blog/holdem-betting-actions"],
  ["small blind और big blind समझना", "पोकर blinds की गाइड", "/hi/blog/holdem-blind-meaning"],
];

const STEPS = [
  { n: "①", title: "OOP Range", desc: "OOP खिलाड़ी flop के बाद पहले action लेता है। उसके हैंड 13×13 grid में चुनें, या 22+, A2s+ और KTo+ जैसे टेक्स्ट से range भरें। तिरछी पंक्ति में pocket pairs, ऊपर दाईं तरफ़ suited हैंड (AKs) और नीचे बाईं तरफ़ offsuit हैंड (AKo) होते हैं।" },
  { n: "②", title: "IP Range", desc: "IP खिलाड़ी flop के बाद दूसरे खिलाड़ी के बाद action लेता है। उसकी range भी इसी तरह तय करें। शुरुआत आसान रखने के लिए कोई अभ्यास स्पॉट लोड करें और उसमें दी हुई range बदलें।" },
  { n: "③", title: "Board", desc: "Flop के लिए तीन कार्ड चुनें या random flop लें। किसी खास runout का अध्ययन करना हो, तो turn और river के कार्ड भी तय कर सकते हैं।" },
  { n: "④", title: "Bet size", desc: "सेटिंग में शुरुआती pot, effective stack और हर street के bet व raise sizes तय करें। पहली बार default सेटिंग रखें और पहले pot व stack की जाँच करें।" },
  { n: "⑤", title: "गणना करें", desc: "पहले Tree बनाएँ, फिर Solver चलाएँ चुनें। गणना आपके डिवाइस पर होती है; समय decision tree के आकार और चुनी गई सटीकता पर निर्भर करता है। गणना पूरी होने पर परिणाम खोलें।" },
];

const STARTER_RANGES: [string, string][] = [
  ["OOP — BB (call करने वाला)", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP — BTN (open करने वाला)", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

const READ_SCREEN: string[][] = [
  ["ऊपर की action पट्टी", "हैंड में actions का क्रम, जैसे flop → bet → call → turn", "किसी नोड पर उस फ़ैसले की रणनीति देखें। पहले से गणना किए गए अभ्यास स्पॉट का viewer सिर्फ़ flop का पहला फ़ैसला दिखाता है"],
  ["बाईं तरफ़ 13×13 matrix", "हर तरह के हैंड के लिए एक खाना; रंगों के हिस्से action frequencies बताते हैं", "लाल = bet या raise; गहरा लाल = बड़ा size। हरा = check या call। धुंधला खाना = range से बाहर"],
  ["ऊपर दाईं तरफ़ सारांश", "पूरी range की action frequencies (%) और combos की संख्या", "यहीं आप पढ़ते हैं कि Q♠J♦T♠ पर BB की check frequency 99.9% है"],
  ["बीच में दाईं तरफ़ हैंड की श्रेणियाँ", "Board पर किस range को top pair, draw या कोई मदद नहीं मिली", "दोनों ranges की ताक़त और उपलब्ध draws की तुलना करें"],
  ["नीचे दाईं तरफ़ विस्तृत तालिका", "हर हैंड का weight, equity, EV, equity realization (EQR) और हर action का प्रतिशत", "किसी भी कॉलम के आधार पर क्रम बदलें और सारांश CSV में एक्सपोर्ट करें"],
];

const FEATURES: [string, "yes" | "no", string][] = [
  ["Flop · turn · river की गणना", "yes", "दो खिलाड़ियों के लिए flop के बाद का पूरा decision tree"],
  ["Preflop रणनीति की गणना", "no", "Opening ranges के लिए Preflop चार्ट टैब देखें"],
  ["अपने bet और raise sizes", "yes", "Pot का प्रतिशत, गुणक, all-in और geometric sizing"],
  ["Donk bet का अलग size", "yes", "OOP खिलाड़ी की शुरुआती bet के लिए size अलग से तय करें"],
  ["Rake और rake cap", "yes", "खेल की शर्तों के हिसाब से rake और उसकी अधिकतम सीमा रखें"],
  ["हर नोड पर decision tree में बदलाव", "yes", "किसी खास नोड पर actions जोड़ें या हटाएँ"],
  ["रणनीति लॉक करके फिर गणना", "yes", "किसी नोड की action frequencies तय करके दोबारा गणना करें"],
  ["सटीकता और मेमोरी के मोड", "yes", "Float 32-bit / integer 16-bit · ब्राउज़र की सीमा लगभग 4 GB"],
  ["Exploitability का लक्ष्य", "yes", "कम मान से परिणाम ज़्यादा सटीक होते हैं, लेकिन गणना में ज़्यादा समय लगता है"],
  ["Range और सेटिंग सेव करना", "yes", "सेव, लोड, JSON इंपोर्ट और एक्सपोर्ट"],
  ["सारांश का CSV एक्सपोर्ट", "yes", "परिणाम अपनी spreadsheet में खोलें"],
  ["स्पॉट शेयर करने का लिंक", "yes", "स्पॉट शेयर करें से मिला लिंक वही स्पॉट दूसरे डिवाइस पर खोलता है"],
  ["पहले से गणना किए गए अभ्यास स्पॉट", "yes", "गणना का इंतज़ार किए बिना रणनीति देखें"],
  ["फ़ैसलों का आकलन करने वाला GTO Trainer", "yes", "EV नुकसान के आधार पर कमज़ोरियाँ पहचानें और दोबारा अभ्यास करें"],
  ["अपने गणना किए गए स्पॉट से अभ्यास", "yes", "परिणाम को मेरे स्पॉट के सवालों में बदलें; सवाल और अभ्यास इतिहास लॉग इन करने के बाद भी सिर्फ़ इसी डिवाइस पर रहते हैं"],
];

const COMPARE: string[][] = [
  ["परिणाम कैसे मिलते हैं", "सीधे ब्राउज़र में गणना", "पहले से गणना किए गए परिणाम देखें", "इंस्टॉल करने के बाद कंप्यूटर पर गणना"],
  ["इंस्टॉलेशन", "ज़रूरी नहीं", "ज़रूरी नहीं", "ज़रूरी; प्लेटफ़ॉर्म उत्पाद पर निर्भर करता है"],
  ["दायरा", "Postflop, heads-up", "उपलब्ध कैटलॉग के अनुसार; preflop भी हो सकता है", "उत्पाद और वर्शन के अनुसार"],
  ["Range और decision tree बदलना", "अपनी सेटिंग रख सकते हैं", "कैटलॉग में मौजूद सेटिंग तक सीमित", "अपनी सेटिंग रख सकते हैं"],
  ["गणना कहाँ होती है", "आपके डिवाइस पर", "प्रदाता पहले से गणना करता है", "आपके डिवाइस पर"],
];

// Boards and strategy figures follow docs/gto-solver-series-spec.md §4-B.
const SPOT_GROUPS = [
  {
    label: "Single Raised Pot — BTN vs BB (बुनियाद)",
    cond: "OOP: BB call करता है · IP: BTN open करता है · Pot 5.5bb · Stack 97.5bb",
    items: [
      { slug: "a-high-board-cbet", board: "A♥7♦2♣", name: "सूखा A-high board", note: "Open करने वाले खिलाड़ी के range advantage का उदाहरण: यह board BTN की range के पक्ष में है। पहले फ़ैसले पर BB 98.2% बार check करता है" },
      { slug: "k-high-board-cbet", board: "K♠8♦3♣", name: "सूखा K-high board", note: "A-high से तुलना करें। BTN की range को अब भी फ़ायदा है, लेकिन BB की check frequency बढ़कर 99.8% हो जाती है" },
      { slug: "broadway-board-strategy", board: "Q♠J♦T♠", name: "जुड़ा हुआ Broadway board, two-tone", note: "Board दोनों ranges के लिए अच्छा लग सकता है, लेकिन BB का EQR सिर्फ़ 77.9% है, जबकि BTN का 119.4%। BB 99.9% बार check करता है" },
      { slug: "donk-bet-strategy", board: "9♥8♥7♣", name: "जुड़ा हुआ middle board, two-tone", note: "BB 23.7% बार पहले bet करता है। फिर भी range advantage BTN के पास है: BB की equity 48.5% और BTN की 51.5% है" },
      { slug: "monotone-board-strategy", board: "Q♠9♠2♠", name: "Monotone board (एक ही suit)", note: "बने हुए flush और flush draw वाले हैंड देखें, फिर bet sizes की तुलना करें। पहले फ़ैसले पर BB की check frequency 88.8% है" },
      { slug: "paired-board-strategy", board: "6♣6♦3♥", name: "Paired board", note: "Board पर pair होने से pocket pairs और bluffs की भूमिका कैसे बदलती है, यह देखें। BB 97.0% बार check करता है और bet के लिए दो sizes इस्तेमाल करता है" },
      { slug: "low-board-check-raise", board: "6♠5♥2♦", name: "नीचा rainbow board", note: "BB के पहले फ़ैसले से शुरू करें: check 96.8% और bet 3.2%। यहाँ सिर्फ़ एक bet size उपलब्ध है, pot का 33%" },
    ],
  },
  {
    label: "3-Bet Pot — BB 3-bet, BTN call (कम SPR)",
    cond: "OOP: BB 3-bet करता है · IP: BTN call करता है · Pot 22.5bb · Stack 89bb · SPR 4.0",
    items: [
      { slug: "3bet-pot-cbet", board: "A♦K♠2♥", name: "A-high board, 3-bettor को फ़ायदा", note: "BB की range में AA, KK और AK हैं। BB 100% बार bet करता है: छोटे size से 57.8% और बड़े size से 42.2%। Sizes का यह मिश्रण range की बनावट पर निर्भर है; सिर्फ़ कम SPR इसे नहीं समझाता" },
      { slug: "3bet-pot-bet-sizing", board: "Q♥T♥7♠", name: "Draws वाला two-tone board", note: "BB लगभग दो-तिहाई pot का bet 98.4% बार इस्तेमाल करता है। एक size पर इस ज़ोर की तुलना A♦K♠2♥ के दो sizes वाले मिश्रण से करें" },
      { slug: "3bet-pot-low-board", board: "8♦5♣2♠", name: "नीचा सूखा board", note: "3-bet range के overpairs और A-high हैंड पर ध्यान दें। Board नीचा होने के बावजूद BB पहले फ़ैसले पर 98.1% बार bet करता है" },
    ],
  },
  {
    label: "Blind vs Blind — SB vs BB (चौड़ी ranges)",
    cond: "OOP: SB open करता है · IP: BB call करता है · Pot 6bb · Stack 97bb · SPR 16.2",
    items: [
      { slug: "blind-battle-cbet", board: "K♥T♦6♠", name: "K-high board पर T", note: "SB ने open किया है, लेकिन flop के बाद उसे पहले action लेना पड़ता है। BTN vs BB से तुलना करें; यहाँ bet size pot का 33% है" },
      { slug: "blind-battle-connected-board", board: "7♦6♦5♣", name: "जुड़ा हुआ low board, two-tone", note: "यह board SB की opening range के लिए मुश्किल है: SB 90.4% बार check और सिर्फ़ 9.6% बार bet करता है। इसी समूह के K-high board से तुलना करें" },
      { slug: "ace-paired-board-strategy", board: "A♠A♥6♦", name: "दो Ace वाला board", note: "SB के पास BB से ज़्यादा trips combos हैं। Pot के 33% वाले छोटे bet की frequency 79.6% है, जबकि बड़े bet की सिर्फ़ 0.5%" },
    ],
  },
];

const SPOT_TOTAL = SPOT_GROUPS.reduce((n, g) => n + g.items.length, 0);

function Cta({ label, variant = "solid" }: { label: string; variant?: "solid" | "outline" }) {
  const base = "inline-block rounded-xl px-8 py-3 font-bold transition-opacity";
  return (
    <a
      href={SOLVER_URL}
      target="_blank"
      rel="noopener"
      className={variant === "solid"
        ? `${base} bg-primary text-lg text-primary-foreground hover:opacity-90`
        : `${base} border border-primary text-primary hover:bg-primary hover:text-primary-foreground`}
    >
      {label}
    </a>
  );
}

function Table({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className={`w-full border-collapse text-sm${head.length > 2 ? " min-w-[34rem]" : ""}`}>
        <thead>
          <tr className="border-b border-border text-left">
            {head.map((h) => <th key={h} className="py-2 pr-4 font-semibold">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/50 align-top">
              {r.map((c, j) => (
                <td key={j} className={j === 0 ? "py-2 pr-4 font-medium" : "py-2 pr-4 text-muted-foreground"}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SolverClientHi() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      <section className="mt-6">
        <h1 className="text-center text-2xl font-bold">
          मुफ़्त GTO पोकर सॉल्वर — सीधे ब्राउज़र में
        </h1>
        <p className="mt-3 text-muted-foreground">
          <strong className="text-foreground">GTO poker solver</strong> दोनों खिलाड़ियों की range,
          board और stack के आधार पर बताता है कि 169 तरह के शुरुआती हैंड में से हर हैंड को कितनी बार
          bet, check या fold करना चाहिए। HoldemMaster यह गणना{" "}
          <strong className="text-foreground">सीधे आपके ब्राउज़र में करता है — इंस्टॉल करने, खाता
          बनाने या पैसे देने की ज़रूरत नहीं</strong>। रणनीति का 13×13 grid और हर हैंड की equity, EV
          व equity realization (EQR) साथ में देखें। यह सॉल्वर postflop heads-up, यानी दो खिलाड़ियों
          के बीच flop के बाद का खेल, कवर करता है।
        </p>
        <div className="mt-5 text-center">
          <Cta label="मुफ़्त सॉल्वर खोलें →" />
          <p className="mt-2 text-xs text-muted-foreground">
            कंप्यूटर पर Chrome बेहतर है। iOS और Safari में गणना एक thread पर होती है, इसलिए अपने
            स्पॉट की गणना में ज़्यादा समय लगता है।
          </p>
        </div>
        <Table head={["", "जानकारी"]} rows={SPEC} />
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">पोकर में GTO सॉल्वर क्या होता है?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          GTO का पूरा नाम <strong className="text-foreground">Game Theory Optimal</strong> है।
          सॉल्वर आपकी तय की हुई range, board, stack और bet sizes के आधार पर Nash equilibrium के
          क़रीब पहुँचने वाली रणनीति की गणना करता है। परिणाम हर action की frequency बताता है:
          एक ही हैंड से कभी bet और कभी check हो सकता है, हर बार एक ही action ज़रूरी नहीं।
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          चार्ट में पहले से तैयार जवाब दिखते हैं। सॉल्वर में आप स्पॉट की शर्तें बदलते हैं, तो नई
          गणना होती है। इनमें board, यानी टेबल पर खुले community कार्ड, भी शामिल हैं। इससे आप
          किसी खास postflop स्थिति का अध्ययन कर सकते हैं और समझ सकते हैं कि रणनीति क्यों बदलती है।
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Poker solver</strong>, GTO poker solver और{" "}
          <strong className="text-foreground">postflop solver</strong> इसी तरह के गणना करने वाले
          टूल के नाम हैं। आप जो सीखना चाहते हैं, उसके हिसाब से यहाँ से शुरू करें:
        </p>
        <Table
          head={["आप क्या करना चाहते हैं", "कहाँ से शुरू करें"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
        <p className="mt-4 text-sm text-muted-foreground">
          इसी ऐप का <strong className="text-foreground">Preflop चार्ट</strong> टैब position के
          अनुसार opening ranges दिखाता है। <strong className="text-foreground">Equity</strong>{" "}
          टैब में हैंड या range की equity निकाल सकते हैं। ये दोनों सुविधाएँ postflop सॉल्वर के
          साथ मिलकर अध्ययन में मदद करती हैं; चार्ट टैब preflop रणनीति की नई गणना नहीं करता।
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Board बदलने पर postflop रणनीति क्यों बदलती है?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          मान लें कि BTN ने open और BB ने call किया। दोनों की range और pot एक जैसे रखें।{" "}
          <strong className="text-foreground">Q♠J♦T♠ पर BB सिर्फ़ 0.1% बार bet करता है</strong>।
          Flop को <strong className="text-foreground">9♥8♥7♣ करने पर यह frequency 23.7%</strong>{" "}
          हो जाती है। दोनों boards जुड़े हुए और two-tone हैं, लेकिन वे range के अलग-अलग हिस्सों
          को मदद देते हैं। Equity, draws और equity realize करने की क्षमता भी बदलती है।
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Preflop चार्ट community कार्ड खुलने से पहले हैंड चुनने में मदद करता है। Flop के बाद के
          फ़ैसलों का अध्ययन करने के लिए सॉल्वर उस board और स्पॉट की शर्तों का इस्तेमाल करता है।
          अगर preflop, flop, turn और river का क्रम अभी नया है, तो पहले{" "}
          <Link href="/hi/blog/holdem-game-order" className="font-semibold text-primary hover:underline">
            Texas Hold&apos;em में खेल के क्रम की गाइड
          </Link>{" "}
          पढ़ें।
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">पोकर सॉल्वर कैसे इस्तेमाल करें: पाँच चरण</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          पहली बार सॉल्वर इस्तेमाल कर रहे हैं, तो पहले{" "}
          <strong className="text-foreground">अभ्यास स्पॉट</strong> खोलें और{" "}
          <strong className="text-foreground">परिणाम देखें</strong> चुनें। इनकी गणना पहले से हो
          चुकी है, इसलिए अपने inputs तय करने से पहले आप परिणाम पढ़ना सीख सकते हैं। जब अपना स्पॉट
          बनाना चाहें, तो ऐप की साइडबार में ये पाँच चरण पूरे करें:
        </p>
        <ol className="mt-4 space-y-4">
          {STEPS.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {s.n}
              </span>
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          अपने स्पॉट के inputs में chips की पूर्ण संख्या भरें। Big blinds में समझने के लिए{" "}
          <strong className="text-foreground">10 chips = 1bb</strong> का पैमाना रखें: pot में 55
          भरने का मतलब 5.5bb है। अभ्यास स्पॉट और GTO Trainer इसी पैमाने से इकाई अपने आप बदलते हैं।
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          शुरुआत के लिए नीचे दी गई दोनों ranges को ① और ② में पेस्ट कर सकते हैं। ये{" "}
          <strong className="text-foreground">Single Raised Pot, BTN vs BB वाले अभ्यास स्पॉट की
          ranges</strong> हैं। Position के अनुसार opening ranges देखने के लिए ऐप का Preflop चार्ट
          टैब इस्तेमाल करें।
        </p>
        <Table
          head={["यहाँ पेस्ट करें", "Range"]}
          rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">परिणाम की स्क्रीन कैसे पढ़ें?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          परिणाम की स्क्रीन के पाँच हिस्से हैं: ऊपर action पट्टी, बाईं तरफ़ 13×13 रणनीति matrix,
          और दाईं तरफ़ frequency का सारांश, हैंड की श्रेणियाँ व विस्तृत तालिका। बाईं तरफ़ किसी
          एक हैंड की रणनीति देखें; दाईं तरफ़ पूरी range को समझें।
        </p>
        <Table head={["हिस्सा", "क्या दिखता है", "कैसे पढ़ें"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          Heads-up में <strong className="text-foreground">equity</strong> जीतने की संभावना और
          टाई की संभावना के आधे हिस्से को जोड़ती है। <strong className="text-foreground">EV</strong>{" "}
          किसी action का अपेक्षित मूल्य है। <strong className="text-foreground">EQR</strong>{" "}
          बताता है कि खेल आगे बढ़ने पर equity का कितना मूल्य realize हो पाता है। A♥7♦2♣ पर BB
          की range की equity 45.1% है, लेकिन EQR 84.0%। EQR का 100% से नीचे होना बताता है कि
          range अपनी equity के पूरे मूल्य को realize नहीं कर पा रही। Position, पहल और range
          की बनावट इस नतीजे को प्रभावित करती हैं।
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">मुफ़्त सॉल्वर में कौन-सी सुविधाएँ मिलती हैं?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          नीचे दी गई सभी सुविधाओं के लिए न भुगतान करना है, न भुगतान की जानकारी देनी है। रोज़
          कितने स्पॉट की गणना कर सकते हैं, इसकी भी कोई सीमा नहीं। गणना और अभ्यास के लिए खाता
          बनाना ज़रूरी नहीं है। Rake, सटीकता के मोड और नोड में बदलाव जैसी सेटिंग इसी ऐप में हैं।
          रणनीति की गणना का दायरा <strong className="text-foreground">postflop heads-up</strong> है।
        </p>
        <Table
          head={["सुविधा", "उपलब्ध", "जानकारी"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span className="font-bold text-emerald-600">हाँ</span>
            ) : (
              <span className="font-bold text-muted-foreground">नहीं</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="मुफ़्त सॉल्वर आज़माएँ →" variant="outline" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Postflop गणना में क्या शामिल है?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          यह सॉल्वर flop खुलने के बाद दो खिलाड़ियों की आगे की रणनीति निकालता है। आप दोनों की
          range, flop, turn और river के कार्ड, शुरुआती pot, effective stack और हर street के bet
          व raise sizes तय कर सकते हैं। Rake और rake cap भी बदल सकते हैं, ताकि गणना उसी स्थिति
          की हो जिसका आप अध्ययन करना चाहते हैं।
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          इस इंजन में preflop रणनीति की गणना शामिल नहीं है। Opening hands के लिए{" "}
          <strong className="text-foreground">Preflop चार्ट</strong> देखें, फिर उपयुक्त ranges
          सॉल्वर में भरकर flop के बाद के खेल का अध्ययन करें।
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          इंजन आपके तय किए हुए exploitability लक्ष्य की ओर बार-बार गणना करता है। अंत में मिली
          exploitability ज़रूर देखें: iterations की सीमा पूरी होने पर भी गणना रुक सकती है।
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">किसी नोड की रणनीति लॉक करके फिर गणना करें</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          किसी खास फ़ैसले पर तय रणनीति का असर देखना हो, तो परिणाम की स्क्रीन में{" "}
          <strong className="text-foreground">इस नोड की रणनीति लॉक करें</strong> खोलें। जिन action
          frequencies को स्थिर रखना चाहते हैं, उन्हें तय करें और{" "}
          <strong className="text-foreground">रणनीति लॉक करके फिर गणना करें</strong> चुनें।
          सॉल्वर उस नोड की frequencies लॉक रखकर दोबारा गणना करता है, ताकि आप नए और पुराने
          परिणाम की तुलना कर सकें। नया परिणाम लॉक की गई रणनीति की शर्त पर आधारित होता है;
          यह बिना किसी लॉक वाला GTO equilibrium नहीं है।
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">मुफ़्त GTO Trainer: अभ्यास करें और EV का नुकसान देखें</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          <strong className="text-foreground">GTO Trainer</strong> इसी ऐप में मिलता है। वह गणना
          किए गए स्पॉट को अभ्यास में बदलता है: आपको किसी फ़ैसले पर एक हैंड मिलता है, आप action
          चुनते हैं और उसका आकलन देखते हैं। तैयार उदाहरणों से अभ्यास कर सकते हैं या अपने गणना
          किए हुए स्पॉट इस्तेमाल कर सकते हैं।
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          आकलन <strong className="text-foreground">pot के आकार के मुकाबले EV के नुकसान</strong>{" "}
          पर होता है। GTO रणनीति में एक ही हैंड से कई actions हो सकते हैं, इसलिए कम frequency
          वाला action चुनना अपने आप में ग़लती नहीं है। जवाब देने के बाद trainer हर action की
          frequency और EV के साथ आपके चुनाव से खोया हुआ मूल्य दिखाता है।
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          <li className="text-muted-foreground">
            सीमाएँ pot के मुकाबले तय होती हैं: <span className="font-semibold text-emerald-500">0.35%
            तक</span> सर्वोत्तम · <span className="font-semibold text-blue-500">1% तक</span> स्वीकार्य
            · <span className="font-semibold text-orange-500">उससे ज़्यादा</span> नुकसान वाला चुनाव
          </li>
          <li className="text-muted-foreground">
            0.08bb का नुकसान 5.5bb के pot में 1.45% है, लेकिन 22.5bb के pot में सिर्फ़ 0.36%।
            5.5bb के single raised pot में सीमाएँ लगभग 0.02bb और 0.06bb हैं; 22.5bb के 3-bet
            pot में लगभग 0.08bb और 0.23bb। 0.02bb और 0.05bb की न्यूनतम सीमाएँ रखी गई हैं,
            ताकि गणना की सटीकता से पैदा होने वाले छोटे अंतर आकलन पर ज़्यादा असर न डालें
          </li>
          <li className="text-muted-foreground">
            तैयार उदाहरणों के सवाल हर स्पॉट के कई फ़ैसलों से आते हैं। इनमें{" "}
            <strong className="text-foreground">10,000 से ज़्यादा combinations</strong> हैं और
            उनकी गणना का exploitability लक्ष्य 0.5% है। Single raised pot, 3-bet pot या blind
            vs blind का अभ्यास अलग-अलग चुन सकते हैं
          </li>
          <li className="text-muted-foreground">
            हैंड <strong className="text-foreground">उस स्पॉट की range के वज़न के अनुपात में</strong>{" "}
            दिए जाते हैं, ताकि कोई हैंड उतनी ही बार आए जितनी उस स्पॉट में उसकी संभावना है
          </li>
          <li className="text-muted-foreground">
            अभ्यास इतिहास से लगातार अच्छे जवाबों की गिनती, कमज़ोरियों का विश्लेषण और सबसे ज़्यादा
            EV नुकसान वाले हैंड का दोबारा अभ्यास मिलता है। लॉग इन करने पर{" "}
            <strong className="text-foreground">अभ्यास स्पॉट और आज की चुनौती</strong> का इतिहास
            खाते में सेव होता है, ताकि दूसरे डिवाइस पर आगे बढ़ सकें। मेरे स्पॉट के सवाल और उनका
            अभ्यास इतिहास लॉग इन करने के बाद भी सिर्फ़ इसी डिवाइस पर रहते हैं
          </li>
        </ul>
        <h3 className="mt-5 font-semibold">अपने गणना किए गए स्पॉट से अभ्यास करें</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          स्पॉट की गणना पूरी होने पर परिणाम की स्क्रीन में{" "}
          <strong className="text-foreground">इस स्पॉट का अभ्यास करें</strong> चुनें। उसके सवाल
          trainer के <strong className="text-foreground">मेरे स्पॉट</strong> टैब में सेव हो जाते
          हैं। <strong className="text-foreground">ये सवाल और उनका अभ्यास इतिहास लॉग इन करने के
          बाद भी सिर्फ़ इसी डिवाइस पर रहते हैं</strong>; वे खाते के ज़रिए सिंक नहीं होते।
        </p>
        <div className="mt-5">
          <Cta label="GTO Trainer खोलें →" variant="outline" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">{SPOT_TOTAL} अभ्यास स्पॉट, जिनके परिणाम तुरंत खोल सकते हैं</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          नीचे दिए गए हर उदाहरण की गणना पहले से हो चुकी है, इसलिए खोलते ही रणनीति दिख जाती है।
          Ranges शुरुआती 100bb stack वाले सामान्य ऑनलाइन खेल के क़रीब हैं। उदाहरणों का viewer
          flop का पहला फ़ैसला दिखाता है। रणनीति में बदलाव समझने के लिए उदाहरण लोड करें, range या
          board बदलें और खुद गणना करें।
        </p>
        {SPOT_GROUPS.map((g) => (
          <div key={g.label} className="mt-5">
            <p className="text-sm font-semibold">{g.label}</p>
            <p className="text-xs text-muted-foreground">{g.cond}</p>
            <ul className="mt-2 space-y-1.5">
              {g.items.map((s) => (
                <li key={s.board} className="text-sm">
                  <span className="font-semibold">{s.board}</span>
                  <span className="mx-1.5 text-muted-foreground">·</span>
                  <Link href={`/hi/blog/${s.slug}`} className="font-medium text-primary hover:underline">{s.name}</Link>{" "}
                  <span className="text-muted-foreground">— {s.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">GTO Wizard, PioSolver और TexasSolver से क्या फ़र्क़ है?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          पोकर टूल की तुलना करते समय देखें कि{" "}
          <strong className="text-foreground">गणना कहाँ और कब होती है</strong>। GTO Wizard जैसी
          सेवाओं की solution library में पहले से गणना किए गए परिणाम खोलते हैं। PioSolver या
          TexasSolver जैसे desktop सॉल्वर कंप्यूटर पर इंस्टॉल करके अपनी गणना चलाते हैं। नीचे
          इन तरीकों की तुलना है; किसी उत्पाद की सुविधाएँ उसके चुने हुए मोड या वर्शन पर निर्भर
          करती हैं।
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          HoldemMaster सॉल्वर में <strong className="text-foreground">आप स्पॉट तैयार करते हैं,
          फिर सीधे ब्राउज़र में गणना होती है</strong>। Desktop सॉफ़्टवेयर इंस्टॉल किए बिना range
          और decision tree बदल सकते हैं।
        </p>
        <Table
          head={["", "HoldemMaster सॉल्वर", "Solution library", "Desktop सॉल्वर"]}
          rows={COMPARE}
        />
        <p className="mt-4 text-sm text-muted-foreground">
          यहाँ रजिस्ट्रेशन, रोज़ की सीमा या इस्तेमाल के credits के बिना गणना कर सकते हैं। इंजन
          ओपन सोर्स <strong className="text-foreground">WASM Postflop</strong> पर आधारित है,
          जिसके साथ HoldemMaster का इंटरफ़ेस, अभ्यास स्पॉट और GTO Trainer मिलता है। बदलावों सहित
          सोर्स कोड उसी AGPL-3.0 लाइसेंस के तहत प्रकाशित है।
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">क्या मोबाइल और ऑफ़लाइन भी इस्तेमाल कर सकते हैं?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          हाँ। फ़ोन के ब्राउज़र में सॉल्वर खोलकर बिना इंस्टॉल किए शुरू करें। चाहें तो{" "}
          <strong className="text-foreground">होम स्क्रीन पर जोड़ें</strong> चुनें। फिर अपने आइकन से
          ऐप खोलें और ब्राउज़र की address bar के बिना
          पूरी स्क्रीन पर इस्तेमाल करें।
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          होम स्क्रीन पर जोड़ने और सामग्री डिवाइस पर लोड होने के बाद, अभ्यास स्पॉट और GTO Trainer
          से <strong className="text-foreground">बिना इंटरनेट के अभ्यास</strong> कर सकते हैं।
          अपने स्पॉट की ऑफ़लाइन गणना करने के लिए गणना का इंजन पहले कम-से-कम एक बार लोड होना
          ज़रूरी है।
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          iPhone और Safari में गणना एक thread पर होती है, इसलिए बड़े स्पॉट के लिए कंप्यूटर
          बेहतर है। Chrome और Edge में address bar का इंस्टॉल आइकन इस्तेमाल करें। iPhone पर
          शेयर मेन्यू खोलकर होम स्क्रीन पर जोड़ने का विकल्प चुनें।
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">पोकर की बुनियाद समझने के लिए पढ़ें</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/hi/blog/texas-holdem-rules-for-beginners" className="font-semibold text-primary hover:underline">
              शुरुआती के लिए Texas Hold&apos;em के नियम
            </Link>{" "}
            — रणनीति पढ़ने से पहले कार्ड, chips और एक हैंड का खेल समझें
          </li>
          <li>
            <Link href="/hi/blog/holdem-game-order" className="font-semibold text-primary hover:underline">
              Texas Hold&apos;em में खेल का क्रम
            </Link>{" "}
            — preflop, flop, turn और river कब आते हैं
          </li>
          <li>
            <Link href="/hi/blog/holdem-betting-actions" className="font-semibold text-primary hover:underline">
              Betting actions: check, call, raise और fold
            </Link>{" "}
            — सॉल्वर जिन actions की frequency दिखाता है, उनके नियम समझें
          </li>
          <li>
            <Link href="/hi/blog/holdem-blind-meaning" className="font-semibold text-primary hover:underline">
              पोकर में small blind और big blind
            </Link>{" "}
            — BTN vs BB और blind vs blind उदाहरणों की positions समझें
          </li>
          <li>
            <Link href="/hi/blog/holdem-hand-rankings" className="font-semibold text-primary hover:underline">
              पोकर हैंड रैंकिंग
            </Link>{" "}
            — परिणाम में दिखने वाले pair, straight, flush और दूसरे हैंड पहचानें
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">अक्सर पूछे जाने वाले सवाल</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_HI.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">प्रश्न: {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">उत्तर: {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 text-center">
        <Cta label="मुफ़्त GTO पोकर सॉल्वर खोलें →" />
      </section>
      <p className="mt-8 text-xs text-muted-foreground">
        यह ऐप Wataru Inariba के WASM Postflop (AGPL-3.0) पर आधारित है। HoldemMaster ने इसका
        अनुवाद किया है और सुविधाएँ जोड़ी हैं। बदलावों सहित पूरा सोर्स कोड उसी लाइसेंस के तहत
        प्रकाशित है।
      </p>
    </div>
  );
}
