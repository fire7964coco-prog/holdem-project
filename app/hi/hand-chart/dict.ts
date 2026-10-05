import type { HandChartDict } from "@/components/hand-chart/dict";

// `/hi/hand-chart` 사전 — ★2026-10-05 신설(로케일 도구 확장 회차 1 · docs/tools-locale-rollout-plan.md).
// 키워드 실측(2026-10-05 · DFS google_ads/search_volume · location 2356 India · language 미지정):
//   poker chart 14,800 · poker hand chart 1,900 · poker starting hand chart 90 · preflop chart 40 · poker range chart 40 ·
//   starting hands poker 30 · पोकर हैंड चार्ट null. 🔴 poker chart·poker hand chart는 족보 차트 의도가 섞인다
//   (ms 뱅크 SERP 7:2 선례 · 인도 SERP는 미실측) → 제목 머리어 = «Poker Starting Hand Chart»(프리플랍 의도 명시).
//   데바나가리 검색어는 볼륨 없음 → 술어 = 영어 토큰, 본문 = 힌디(hi 하우스 스타일).
// hi에는 holdem-starting-hands-chart·position-play·when-to-fold 글이 없다 → 각주 ①은 링크 없이, related는 실재 글만.
// 용어: docs/translation-terms-hi.md 코퍼스 실측(हैंड · range · equity · fold · raise 라틴) · कॉम्बो 297 : combo 24 ·
//   suited/offsuit/pocket pair 라틴 · 포지션명 영어(약어 영어 원칙) · numberLocale = app/hi/calculator/dict.ts(percentGap 없음).

export const HAND_CHART_DICT_HI: HandChartDict = {
  numberLocale: "en-US",
  seo: {
    title: "Poker Starting Hand Chart — हर position की open range",
    description:
      "Interactive poker starting hand chart: सभी 169 हैंड UTG, HJ, CO, BTN और SB के हिसाब से रंगों में। Position चुनें और देखें कौन-से हैंड open करने हैं।",
    path: "/hi/hand-chart",
    keywords: [
      "poker starting hand chart",
      "poker hand chart",
      "preflop chart",
      "poker range chart",
      "पोकर स्टार्टिंग हैंड चार्ट",
      "starting hands poker",
    ],
  },
  hero: {
    badge: "♠ Interactive स्टार्टिंग हैंड टूल",
    h1: "Poker Starting Hand Chart",
    lead: "सभी 169 हैंड position के हिसाब से रंगों में (UTG → SB)। किसी position पर tap करें — सिर्फ़ वही हैंड हाइलाइट होंगे जिन्हें आप उस सीट से open कर सकते हैं।",
    handsUnit: "हैंड",
    positionsUnit: "positions",
    tapHint: "Tap · hover करें, तुरंत दिखेगा",
  },
  filter: {
    caption: "Position चुनें → खेलने लायक हैंड हाइलाइट होंगे",
    basisNote: [
      "हर position पर लिखा % ",
      { b: "169 प्रकारों में से हिस्सा" },
      " है (कॉम्बो के हिसाब से आँकड़ा नीचे की टेबल में साथ लिखा है)",
    ],
    showAll: "सब दिखाएँ",
    selected: "{pos} की open range · {count} / 169 ({pct}%)",
    handsCount: "{n} हैंड",
  },
  positions: ["Under the Gun (UTG)", "Hijack (HJ)", "Cutoff (CO)", "Button (BTN)", "Small Blind (SB)"],
  typePct: "~{n}",
  grid: {
    swipe: "← पूरा चार्ट देखने के लिए स्वाइप करें →",
    pocketPair: "Pocket pair",
    suited: "Suited",
    offsuit: "Offsuit",
    openFrom: "{pos}+ से open",
    legendNote: "ऊपर-दाएँ त्रिकोण = suited (s) · विकर्ण = pocket pair · नीचे-बाएँ त्रिकोण = offsuit (o)",
  },
  legend: {
    heading: "रंगों का मतलब",
    seatLine: "169 प्रकारों में से {pct}",
    fold: "Fold",
    foldSub: "सभी positions",
  },
  table: {
    heading: "हर position की open range",
    swipe: "← “Range · उदाहरण हैंड” देखने के लिए स्वाइप करें",
    position: "Position",
    hands: "हैंड की संख्या",
    handsSub: "(169 प्रकारों में से)",
    range: "Range",
    rangeSub: "प्रकार / कॉम्बो",
    examples: "उदाहरण हैंड",
    comboCell: "/ कॉम्बो {pct}",
    notes: [
      [
        "* ",
        { b: "आधार दो हैं।" },
        " “169 प्रकारों में से 12%” हैंड के ",
        { b: "प्रकार" },
        " के आधार पर है (169 प्रकारों में से कितने), जबकि ",
        { b: "कॉम्बो" },
        " आधार 1,326 कार्ड-जोड़ों में से कितने, यह गिनता है। एक ही range के दोनों आँकड़े अलग आते हैं — AA एक तरह है पर 6 कॉम्बो, AKo एक तरह है पर 12 कॉम्बो। सॉल्वर और strategy लेख आम तौर पर कॉम्बो आधार इस्तेमाल करते हैं।",
      ],
      [
        "* यह standard open range का अनुमान है। असली सॉल्वर आँकड़े open size, stack और सामने वाले की range के साथ बदलते हैं — जैसे ",
        { href: "/hi/solver", text: "HoldemMaster GTO सॉल्वर" },
        " के blind battle उदाहरण में SB open, 3bb size पर 46.6% (92 प्रकार, 618 कॉम्बो) है। असली टेबल पर खिलाड़ियों के अंदाज़ और stack की गहराई के हिसाब से और adjust करें।",
      ],
    ],
  },
  why: {
    heading: "हैंड चुनने में position इतना अहम क्यों है",
    items: [
      {
        title: "Position = जानकारी",
        desc: "Flop के बाद button (BTN) हमेशा सबसे आख़िर में बोलता है। सबके bet और check पहले देख लेने से वही हैंड कहीं ज़्यादा फ़ायदेमंद हो जाता है।",
      },
      {
        title: "UTG के पीछे 8 खिलाड़ी",
        desc: "9 खिलाड़ियों की टेबल पर UTG से open-raise करते समय आपको नहीं पता कि पीछे के 8 खिलाड़ी क्या करेंगे। Re-raise की संभावना ज़्यादा है, इसलिए suited connector जैसे speculative हैंड अपनी value नहीं निकाल पाते — premium हैंड तक सीमित रहें।",
      },
      {
        title: "Suited की क़ीमत",
        desc: "Suited हैंड को उसी offsuit हैंड पर लगभग 3–5% equity की बढ़त मिलती है। इसीलिए A8s को hijack से open कर सकते हैं, पर A8o के लिए button तक रुकना पड़ता है।",
      },
      {
        title: "SB की दुविधा",
        desc: "Flop के बाद small blind हमेशा सबसे पहले बोलता है। Button से चौड़ी range होने के बावजूद वह कम equity realize कर पाता है, इसलिए मध्यम ताक़त वाले हैंड कम फ़ायदेमंद हो जाते हैं।",
      },
    ],
  },
  faqHeading: "अक्सर पूछे जाने वाले सवाल",
  related: {
    heading: "आगे क्या पढ़ें — संबंधित गाइड",
    items: [
      { href: "/hi/blog/holdem-hand-rankings", tag: "हैंड रैंकिंग", title: "पोकर हैंड रैंकिंग — सबसे मज़बूत से सबसे कमज़ोर तक", desc: "Royal flush से high card तक सभी 10 हैंड" },
      { href: "/hi/blog/holdem-blind-meaning", tag: "Blinds", title: "पोकर में blinds क्या होते हैं? Small blind बनाम big blind", desc: "SB और BB कौन लगाता है और कितना" },
      { href: "/hi/blog/holdem-game-order", tag: "खेल का क्रम", title: "टेक्सस होल्डम कैसे खेलें: blind से showdown तक खेल का पूरा क्रम", desc: "Preflop से showdown तक, किसकी बारी कब आती है" },
      { href: "/hi/blog/texas-holdem-rules-for-beginners", tag: "शुरुआत", title: "टेक्सस होल्डम कैसे खेलें — शुरुआती के लिए नियम", desc: "Blinds, chips, हैंड और पहली स्ट्रैटेजी" },
      { href: "/hi/calculator", tag: "टूल", title: "Poker Odds Calculator", desc: "किसी भी हैंड की सटीक equity और pot odds" },
    ],
  },
};
