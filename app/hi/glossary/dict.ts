// /hi/glossary — पोकर शब्दावली (GlossaryDict · 도구 확장 회차 2 · 2026-10-05)
//
// 정의 출처: hi에는 holdem-glossary 글이 없다 → 전부 EN desc 번역.
// - 글 축어 0개 · 번역 46개 전량(EN과 같은 용어 이름·같은 순서·같은 cat).
// - 표기 = docs/translation-terms-hi.md 코퍼스 실측: 포커 용어는 라틴 인라인(bet·raise·fold·call·check·pot·stack·range·equity),
//   «패»만 हैंड · 족보 라틴(Three of a Kind) · 카드 코드·숫자 라틴 · आप체. term 이름은 EN 그대로라 aka 생략.
//
// seo.title 근거 — DataForSEO google_ads search_volume live(India·hi · 2026-10-05 · 1회):
//   poker terms 590 · poker glossary 10 · poker terms in hindi / पोकर शब्दावली / poker terms meaning (데이터 없음)
//   → 앞머리 «Poker Terms»(실측 볼륨이 있는 유일한 헤드텀) + 데바나가리 «पोकर शब्दावली» 병기.
//   (language 파라미터는 볼륨을 나누지 않는다 — 590은 인도 전체 영어 검색 포함.) hi엔 glossary 글이 없어 seoTitle 겹침 없음.
import type { GlossaryDict } from "@/components/glossary/dict";

export const GLOSSARY_DICT_HI: GlossaryDict = {
  sortLocale: "hi-IN",
  grouping: "category",
  seo: {
    title: "Poker Terms हिंदी में — पोकर शब्दावली, आसान मतलब के साथ",
    description:
      "टेक्सस होल्डम के poker terms का आसान हिंदी मतलब: nuts, outs, pot odds, 3-bet, c-bet, ICM, SPR, kicker, tilt और भी। शब्द खोजें या category से छाँटें।",
    keywords:
      "poker terms, poker terms in hindi, पोकर शब्दावली, poker glossary, texas holdem terms, nuts meaning poker, outs poker, pot odds kya hai, 3-bet meaning, c-bet, ICM poker, SPR poker",
    path: "/hi/glossary",
  },
  hero: {
    badge: "♠ {n} शब्द · खोज के साथ",
    h1: "पोकर शब्दावली (Poker Terms)",
    leadBefore: "टेबल पर सुनाई देने वाला टेक्सस होल्डम का हर शब्द — ",
    leadStrong: "nuts, outs, pot odds, 3-bet, ICM",
    leadAfter: " और भी — साफ़ और सही मतलब के साथ। शब्द खोजें या category से छाँटें।",
  },
  searchPlaceholder: "शब्द खोजें (जैसे nuts, pot odds, outs)...",
  allLabel: "सभी",
  cats: {
    Action: "Action",
    Hand: "हैंड",
    Position: "Position",
    Math: "गणित",
    Board: "Board",
    Slang: "Slang",
  },
  empty: { title: "“{q}” से मेल खाता कोई शब्द नहीं मिला।", hint: "कोई दूसरा शब्द या category आज़माएँ।" },
  related: {
    ariaLabel: "संबंधित गाइड",
    heading: "आगे सीखें",
    items: [
      { href: "/hi/blog/texas-holdem-rules-for-beginners", label: "नियम", desc: "blinds, showdown और बुनियादी बातें" },
      { href: "/hi/blog/holdem-hand-rankings", label: "हैंड रैंकिंग", desc: "सभी 10 हैंड, क्रम से" },
      { href: "/hi/solver", label: "GTO सॉल्वर", desc: "अपने स्पॉट की range और equity देखें" },
      { href: "/hi/hand-chart", label: "Starting Hands", desc: "पोज़िशन के हिसाब से open range" },
      { href: "/hi/calculator", label: "कैलकुलेटर", desc: "odds, pot odds, ICM" },
    ],
  },
  terms: [
    { term: "3-Bet", cat: "Action", desc: "हैंड का पहला re-raise। big blind को पहला bet और open-raise को दूसरा गिना जाता है, इसलिए उसके बाद का re-raise 3-bet कहलाता है। यह बहुत मज़बूत हैंड का संकेत देता है — या bluff का।" },
    { term: "All-in", cat: "Action", desc: "एक ही बार में अपना पूरा stack दांव पर लगा देना। all-in होने के बाद आप आगे bet नहीं कर सकते, और अगर विरोधियों के पास ज़्यादा chips बचे हों तो side pot बनता है।" },
    { term: "Ante", cat: "Action", desc: "deal से पहले हर खिलाड़ी द्वारा डाला जाने वाला छोटा अनिवार्य दांव, जिससे pot बनता है। टूर्नामेंट के बाद के levels में आम है — blinds से अलग, जिन्हें सिर्फ़ दो खिलाड़ी डालते हैं।" },
    { term: "Backdoor", cat: "Board", desc: "ऐसा draw जिसे पूरा होने के लिए turn और river दोनों चाहिए — जैसे backdoor flush, जब flop पर आपके suit का सिर्फ़ एक अतिरिक्त कार्ड आया हो।" },
    { term: "Bad Beat", cat: "Slang", desc: "ऐसी हैंड हारना जिसमें आप भारी favourite थे, आमतौर पर turn या river के किसी असंभावित कार्ड से।" },
    { term: "Bankroll", cat: "Slang", desc: "सिर्फ़ पोकर के लिए अलग रखा गया पैसा, रोज़मर्रा के ख़र्चों से अलग — ताकि downswing का असर आपकी ज़िंदगी पर न पड़े।" },
    { term: "Blinds", cat: "Action", desc: "कार्ड बाँटे जाने से पहले डाले जाने वाले अनिवार्य दांव: small blind (SB) button के बाईं ओर बैठता है, big blind (BB) उसके बाद। इनसे हर हैंड में action बनता है।" },
    { term: "Bluff", cat: "Action", desc: "कमज़ोर हैंड के साथ bet या raise करना ताकि बेहतर हैंड fold कर दे। बेपरवाह bluff से chips बहते जाते हैं; सही समय के bluff वे pot जिताते हैं जो वरना आप हार जाते।" },
    { term: "Board", cat: "Board", desc: "टेबल के बीच के community कार्ड। “wet” board पर draws ज़्यादा होते हैं और वह ख़तरनाक होता है; “dry” board पर draws कम होते हैं।" },
    { term: "Button (BTN)", cat: "Position", desc: "dealer की पोज़िशन, जिसे एक गोल disc से चिह्नित किया जाता है। flop के बाद यह सबसे आख़िर में act करता है — सबसे फ़ायदेमंद सीट — और हर हैंड के बाद एक सीट clockwise आगे बढ़ता है।" },
    { term: "Call", cat: "Action", desc: "हैंड में बने रहने के लिए मौजूदा bet को बराबर करना। जो खिलाड़ी बहुत ज़्यादा call करता है उसे “calling station” कहते हैं।" },
    { term: "Check", cat: "Action", desc: "बिना bet किए action आगे बढ़ा देना — यह तभी संभव है जब उस राउंड में आपसे पहले किसी ने bet न किया हो।" },
    { term: "Check-Raise", cat: "Action", desc: "पहले check करना, फिर विरोधी के bet करने के बाद raise करना। मज़बूत हैंड के साथ विरोधियों को फँसाने, या आदतन bet करने वालों को सज़ा देने का दमदार तरीका।" },
    { term: "Continuation Bet (C-Bet)", cat: "Action", desc: "preflop में raise करने वाले खिलाड़ी का flop पर bet, जिससे वह पहले से मिली पहल (initiative) बनाए रखता है। यह असरदार है क्योंकि विरोधी अक्सर flop miss कर देते हैं।" },
    { term: "Cooler", cat: "Slang", desc: "ऐसी हैंड जिसमें दो बहुत मज़बूत हैंड टकराती हैं और किसी एक का बड़ा नुकसान होना तय था — जैसे set का उससे ऊँचे set से टकराना। इससे बचना शायद ही कभी संभव होता है।" },
    { term: "Draw", cat: "Hand", desc: "अधूरी हैंड जो सही कार्ड आने पर मज़बूत बन जाती है — सबसे आम हैं flush draw और straight draw।" },
    { term: "Equity", cat: "Math", desc: "जीतने की आपकी संभावना के आधार पर pot में आपका हिस्सा। जिस हैंड के जीतने की संभावना 60% है, उसकी मौजूदा pot में 60% equity है।" },
    { term: "Flop", cat: "Board", desc: "पहले तीन community कार्ड, जो एक साथ बाँटे जाते हैं; इसके बाद दूसरा betting राउंड होता है।" },
    { term: "Fold", cat: "Action", desc: "हैंड छोड़ देना और pot में पहले डाले गए chips भी गँवा देना। इससे आगे का नुकसान रुक जाता है। इसे “muck” करना भी कहते हैं।" },
    { term: "GTO", cat: "Math", desc: "Game Theory Optimal — एक संतुलित, unexploitable strategy जिसे लंबे समय में हराया नहीं जा सकता, भले ही विरोधी ठीक-ठीक जानते हों कि आप क्या कर रहे हैं।" },
    { term: "Gutshot", cat: "Hand", desc: "inside straight draw जिसे एक ख़ास rank का कार्ड चाहिए — सिर्फ़ 4 outs। उदाहरण: 5-6-8-9 को 7 चाहिए।" },
    { term: "Hand Range", cat: "Math", desc: "किसी स्पॉट में विरोधी के पास हो सकने वाली सभी हैंड का पूरा सेट। किसी को “range पर रखना” का मतलब है उसकी संभावित हैंड को छाँटकर कम करते जाना।" },
    { term: "ICM", cat: "Math", desc: "Independent Chip Model — टूर्नामेंट chips को असली cash prize value में बदलता है। bubble और final table पर सही call/fold फ़ैसलों के लिए ज़रूरी।" },
    { term: "Kicker", cat: "Hand", desc: "साइड कार्ड जो तब टाई तोड़ता है जब दो खिलाड़ियों के पास एक जैसी बनी हैंड हो। उदाहरण: ace की pair पर A-K, A-Q को हराता है क्योंकि king, queen से ऊँचा kicker है।" },
    { term: "Limp", cat: "Action", desc: "preflop में raise करने के बजाय सिर्फ़ big blind call करना। आमतौर पर passive, कमज़ोर खेल जो दूसरों को सस्ते में अंदर आने देता है।" },
    { term: "Nuts", cat: "Hand", desc: "मौजूदा board पर बन सकने वाली सबसे अच्छी हैंड। अगर आपके पास “nuts” है, तो अभी की स्थिति में आप यह हैंड हार नहीं सकते।" },
    { term: "Offsuit", cat: "Hand", desc: "अलग-अलग suit के दो कार्ड (जैसे A♠K♦)। उसी हैंड के suited रूप से थोड़ा कमज़ोर, क्योंकि इससे flush बनने की संभावना बहुत कम होती है।" },
    { term: "Outs", cat: "Math", desc: "deck में बचे वे कार्ड जो आपको जीतने वाली हैंड तक पहुँचाते हैं। flush draw के 9 outs होते हैं; open-ended straight draw के 8।" },
    { term: "Overpair", cat: "Hand", desc: "ऐसी pocket pair जो board के हर कार्ड से ऊँची हो — जैसे J-7-3 flop पर QQ।" },
    { term: "Position", cat: "Position", desc: "betting क्रम में आप कहाँ act करते हैं। बाद में act करना (“in position”) बड़ा फ़ायदा है, क्योंकि फ़ैसला लेने से पहले आप विरोधियों का action देख लेते हैं।" },
    { term: "Pot", cat: "Board", desc: "एक हैंड में दांव पर लगे कुल chips। जीतने वाला सब ले जाता है; बराबरी वाली हैंड में pot बराबर बँटता है (split pot)।" },
    { term: "Pot Odds", cat: "Math", desc: "आपके call और pot का अनुपात: call ÷ (pot + call)। अगर आपकी जीतने की संभावना इस प्रतिशत से ज़्यादा है, तो लंबे समय में call फ़ायदेमंद है।" },
    { term: "Preflop", cat: "Board", desc: "पहला betting राउंड, किसी भी community कार्ड से पहले, जब हर खिलाड़ी के पास सिर्फ़ उसके दो hole कार्ड होते हैं।" },
    { term: "Rake", cat: "Slang", desc: "हर pot या टूर्नामेंट entry से house या पोकर साइट द्वारा लिया जाने वाला छोटा हिस्सा — इसी से रूम की कमाई होती है।" },
    { term: "Raise", cat: "Action", desc: "मौजूदा bet को बढ़ाना। इससे पहल आपके हाथ आती है और विरोधियों पर fold करने या और chips लगाने का दबाव बनता है।" },
    { term: "River", cat: "Board", desc: "पाँचवाँ और आख़िरी community कार्ड, जिसके बाद showdown से पहले का आख़िरी betting राउंड होता है।" },
    { term: "Semi-Bluff", cat: "Action", desc: "ऐसी हैंड से bet करना जो अभी कमज़ोर है पर सुधर सकती है — जैसे flush draw। pure bluff से ज़्यादा सुरक्षित, क्योंकि call होने पर भी आप कार्ड लगाकर जीत सकते हैं।" },
    { term: "Set", cat: "Hand", desc: "pocket pair और board के एक मेल खाते कार्ड से बना Three of a Kind। बहुत अच्छी तरह छिपा रहता है — विरोधी शायद ही इसे आते देख पाते हैं। (“Trips” से तुलना करें।)" },
    { term: "Showdown", cat: "Board", desc: "आख़िरी bet के बाद बचे हुए खिलाड़ी अपने कार्ड दिखाते हैं। सबसे अच्छी पाँच-कार्ड हैंड pot जीतती है।" },
    { term: "SPR", cat: "Math", desc: "Stack-to-Pot Ratio — effective stack ÷ pot। कम SPR में मज़बूत बनी हैंड के साथ commit करना फ़ायदेमंद होता है; ज़्यादा SPR में draws और post-flop skill का इनाम मिलता है।" },
    { term: "Stack", cat: "Slang", desc: "टेबल पर किसी खिलाड़ी के chips। “deep stack” blinds के मुक़ाबले बड़ा होता है; “short stack” छोटा।" },
    { term: "Tilt", cat: "Slang", desc: "bad beat या झुँझलाहट के बाद भावनाओं में बहकर ख़राब खेलना। यही वह leak है जो ज़्यादातर खिलाड़ियों को किसी भी एक हैंड से कहीं ज़्यादा महँगा पड़ता है।" },
    { term: "Trips", cat: "Hand", desc: "एक hole कार्ड और board की pair से बना Three of a Kind। विरोधियों को यह set से ज़्यादा मज़बूत दिखता है, इसलिए इससे कम value मिलती है। (“Set” से तुलना करें।)" },
    { term: "Turn", cat: "Board", desc: "flop के बाद बाँटा जाने वाला चौथा community कार्ड, जिसके बाद उसका अपना betting राउंड होता है।" },
    { term: "Value Bet", cat: "Action", desc: "मज़बूत हैंड से bet करना ताकि कमज़ोर हैंड call करे — bluff का उलटा, और लंबे समय का ज़्यादातर मुनाफ़ा यहीं से आता है।" },
    { term: "Wheel", cat: "Hand", desc: "सबसे नीची straight, A-2-3-4-5, जिसमें ace नीचे (low) खेलता है।" },
  ],
};
