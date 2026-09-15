import type { Post } from "../posts";

export const POST: Post = {
  slug: "blind-battle-cbet",
  title: "OOP होकर SB 67.4% bet क्यों?",
  seoTitle: "SB पहले bet क्यों करता है? — पोकर GTO blind battle",
  desc: "K-T-6 पर SB पहले खेलता है, फिर भी 67.4% bet करता है। Blind battle में raiser की range, बोर्ड और 103.1% EQR का संबंध समझें।",
  tldr: "SB के open और BB के call के बाद K♥T♦6♠ पर पहला action 67.4% bet और 32.6% check है। पहले सात single-raised pots में OOP खिलाड़ी केवल 0.1% से 23.7% bet करता था। यहाँ दो बातें बदलीं: OOP अब caller की जगह raiser है, और बोर्ड उसकी range को सूट करता है। दोनों मिलकर OOP का EQR 103.1% तक पहुँचाते हैं।",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "10 मिनट",
  emoji: "⚔️",
  image: "/images/gto-sb-king-mid-oop-hi.webp",
  imageAlt: "K♥T♦6♠ rainbow flop पर HoldemMaster GTO सॉल्वर में SB की अधिकांश range नारंगी bet रंग में",
  keepImagesInBody: true,
  tags: ["blind vs blind poker", "SB c-bet", "small blind open", "king high flop", "equity realization", "GTO सॉल्वर"],
  content: `
इस सीरीज़ के पहले सात single-raised pots में एक तस्वीर बार-बार दिखी: **पहले action करने वाला अधिकतर check करता है।** OOP का सबसे अधिक bet [9-8-7 जुड़े बोर्ड](/hi/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-hi.webp") पर 23.7% था; बाकी छह में अधिकतम 11.2%। अब तक बहुत अधिक bet का अपवाद 3-bet pot था।

यह 3-bet pot नहीं। SB कुल 3 bb तक open करता है, BB call करता है। और **पहले action करने वाला 67.4% bet करता है।**

क्या बदला? Pot छोटा, 6 bb, और stack गहरा, 97 bb है। बदली हैं **पहले खेलने वाले की भूमिका और बोर्ड पर बढ़त रखने वाली range, दोनों**। नीचे हर आँकड़ा [HoldemMaster GTO सॉल्वर](/hi/solver) से है।

:::stripe
स्पॉट | SB 3 bb open → BB call (blind vs blind)
Flop | K♥ T♦ 6♠ (rainbow)
Pot · stack | Pot 6 bb · प्रभावी stack 97 bb · **SPR 16.2**
नतीजा | SB **67.4%** bet — OOP के आधे से अधिक bet वाला पहला single-raised उदाहरण
:::

> **सीधा जवाब**
> K-T-6 के blind battle में SB का पहला action **67.4% bet, 32.6% check** है। यह ①–⑦ के 0.1%–23.7% OOP bet से अलग है। **दो बातें** बदलीं: OOP खिलाड़ी **caller के बजाय raiser** है, और king तथा broadway kicker वाला बोर्ड उसकी range को सूट करता है। केवल सीट वजह नहीं; वही SB raiser आगे [7-6-5 पर](/hi/blog/blind-battle-connected-board) केवल **9.6%** bet करता है। यहाँ preflop पहल, पहले action करने की भूमिका और range की बढ़त एक ओर हैं। नतीजा **OOP EQR 103.1%** है: इस सीरीज़ के single-raised pots में पहली बार 100% से ऊपर।

## इन परिणामों की शर्तें क्या हैं?

★ **Setup फिर बदला है।** पिछले स्पॉटों से pot, stack और भूमिकाएँ अलग हैं, इसलिए पहले तालिका पढ़ें।

| माप | यह स्पॉट (blind vs blind) | ①–⑦ (BTN vs BB) | ⑧–⑩ (3-bet pot) |
|---|---|---|---|
| Preflop | **SB 3 bb open → BB call** | BTN 2.5 bb open → BB call | BB कुल 11 bb तक 3-bet → BTN call |
| OOP (पहले action) | **SB — opener** | BB — caller | BB — 3-bettor |
| IP | BB — caller | BTN — opener | BTN — caller |
| Pot | **6 bb** | 5.5 bb | 22.5 bb |
| प्रभावी stack | **97 bb** | 97.5 bb | 89 bb |
| SPR | **16.2** | 17.7 | 4.0 |
| Bet sizes | लगभग एक-तिहाई pot, **केवल एक size** | लगभग एक-तिहाई और तीन-चौथाई (⑦ में एक) | लगभग एक-तिहाई और दो-तिहाई |
| Rake | शामिल नहीं | शामिल नहीं | शामिल नहीं |
| सत्यापन | 2026-08-08 (अभ्यास स्पॉट) | 2026-08-08 | 2026-08-08 |

6 bb pot है ==SB के 3 + BB के 3==। दोनों blind लगाने वाले खिलाड़ी हैंड में हैं; अलग dead blind नहीं है। प्रभावी stack ==100 − 3 = 97 bb== है।

स्क्रीन **big blinds** में है: “Bet 2bb (33% pot)” रकम और pot का अनुपात दिखाता है, तथा EV का नाम “EV (bb)” है।

## SB कितनी बार bet करता है?

**67.4% bet, 32.6% check।** 538 कॉम्बो में 362.1 का भार bet में जाता है।

| SB का पहला action | आवृत्ति | कॉम्बो |
|---|---|---|
| Bet 2 bb (33% pot) | **67.4%** | 362.1 |
| Check | 32.6% | 175.9 |

सीरीज़ के बाकी परिणामों के साथ रखने पर फ़र्क़ साफ़ है।

| स्पॉट | OOP कौन है | OOP bet आवृत्ति |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB caller | 0.1%–1.9% |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB caller | 3.0%–3.2% |
| **7♦6♦5♣ blind battle (⑫)** | **SB opener** | **9.6%** |
| Q♠9♠2♠ monotone (⑤) | BB caller | 11.2% |
| 9♥8♥7♣ जुड़ा हुआ (④) | BB caller | 23.7% |
| **K♥T♦6♠ blind battle (⑪)** | **SB opener** | **67.4%** |
| **A♠A♥6♦ blind battle (⑬)** | **SB opener** | **80.1%** |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB 3-bettor | 98–100% |

**इसे “केवल सीट मायने रखती है” न पढ़ें।** उसी SB opener में ⑫ पर 9.6%, यहाँ 67.4% और ⑬ पर 80.1%: **70.5 प्रतिशत अंक का फैलाव**। ⑫ का 9.6%, callers वाले ⑤ (11.2%) और ④ (23.7%) से भी कम है। उन उदाहरणों को हटाकर ही caller और aggressor के बीच सीधी खाई बनाई जा सकती है। स्पष्ट अंतर **3-bet pots के 98–100%** में है; बाकी फैलाव **सीट और बोर्ड के संबंध** से आता है।

## OOP खिलाड़ी यहाँ पहले bet क्यों करता है?

**यहाँ preflop aggressor ही flop पर पहले action करता है।** ⚠ इस c-bet वाली संरचना के लिए यह ज़रूरी है, पर अपने-आप पर्याप्त नहीं। वही बनावट [⑫ पर](/hi/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-hi.webp") **9.6%** और [⑬ पर](/hi/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-hi.webp") **80.1%** देती है। भूमिका आधार बनाती है; कितना bet होगा, बोर्ड तय करने में मदद करता है।

BTN open और BB call में दोनों भूमिकाएँ बँटती हैं: **aggressor BTN है, पर पहले action BB करता है**। यही check के बाद c-bet की संरचना बनाता है; ①–⑦ में हमने यही देखा।

Blind battle में दोनों एक हो जाती हैं। SB ने raise किया और वही flop पर पहले है। **इस K-T-6 बोर्ड पर range की बढ़त और action का पहला अवसर एक खिलाड़ी के पास हैं।**

| | Preflop aggressor | Flop पर पहले action | OOP bet |
|---|---|---|---|
| BTN vs BB (①–⑦) | BTN | **BB** | अलग भूमिकाएँ → 0.1%–23.7% |
| SB vs BB (⑪ K-T-6) | **SB** | **SB** | एक भूमिका → **67.4%** |
| SB vs BB (⑫ 7-6-5) | **SB** | **SB** | एक भूमिका, फिर भी → **9.6%** |

⚠ **तीसरी पंक्ति न भूलें।** भूमिकाएँ एक होने से संभावना बनती है, आवृत्ति तय नहीं होती। [⑫](/hi/blog/blind-battle-connected-board) की सीटें ठीक यही हैं, फिर भी bet 9.6%। पहली पंक्ति में OOP lead कम है; लेकिन aggressor होकर भी आपको **अपनी range से मेल खाने वाला बोर्ड** चाहिए।

Equity इस बढ़त को संख्या देती है: **SB 55.3%, BB 44.7%**। ①–⑦ में OOP 45.1%–48.5% था, हर बार आधे से कम। यहाँ दिशा उलटी है।

:::pull[पहले bet करने का निर्णय केवल position से नहीं, इस बोर्ड पर आपकी पूरी range की ताक़त से करें।]:::

Position की कमी ①–⑦ के BB और यहाँ के SB, दोनों में है। फ़र्क़ **range और बोर्ड के संबंध** का है। ⚠ केवल “range” कहना भी अधूरा है: [7-6-5](/hi/blog/blind-battle-connected-board) पर range *बिल्कुल वही* है, पर check 90.4% तक जाता है।

## 3-bet pot में 100%, यहाँ लगभग 67% क्यों?

**क्योंकि BB की defending range चौड़ी है।** यह उस 3-bet उदाहरण से अलग है जहाँ पूरी range bet करती है।

यहाँ दोनों ranges लगभग बराबर हैं: **SB 538 कॉम्बो, BB 525**। इतने हैंड fold होने के बजाय आगे आए। SB ने कुल 3 bb तक raise किया; BB पहले 1 bb लगा चुका था, इसलिए केवल 2 bb और देने थे। इस कीमत पर उसकी defense चौड़ी है।

चौड़ी range के सामने **हर हैंड केवल fold मिलने की उम्मीद में bet नहीं हो सकता**। इसलिए 32.6% check रहता है।

Check करने वाले हैंडों के अलग काम हैं: **bet के लिए कमज़ोर हैंड** और **प्रतिद्वंद्वी से bet निकलवाने वाले हैंड**, दोनों। सामने वाला check को कमजोरी समझकर bet करे तो [check-raise](/hi/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-hi.webp") रणनीति का हिस्सा हो सकता है; इस स्पॉट का उसके बाद वाला node यहाँ दिखता नहीं।

:::note[⚠ इस अभ्यास स्पॉट के tree में केवल एक-तिहाई pot का bet था। बड़ा size जोड़ने पर 67.4% भी बदल सकता है। इसे “इन शर्तों पर छोटा और व्यापक bet” समझें।]:::

## दोनों ranges की बनावट में क्या अंतर है?

**ऊपरी मज़बूत श्रेणियाँ SB की ओर अधिक हैं; बना हुआ हैंड नहीं वाली श्रेणी BB में बड़ी है।**

![K♥T♦6♠ पर SB और BB की hand-class range की तुलना](/images/gto-sb-king-mid-ranges-hi.webp "K-T-6 blind battle · BB में बना हुआ हैंड नहीं वाली श्रेणी लगभग 10 प्रतिशत अंक अधिक")

| श्रेणी | SB (OOP · opener) | BB (IP · caller) |
|---|---|---|
| Set/trips | **1.7%** | 0.6% |
| Two pair | 2.4% | **2.5%** |
| Overpair (AA) | **1.1%** | 0.0% |
| Top pair (K) | **15.6%** | 10.9% |
| Second pair (T) | 11.7% | **13.7%** |
| कमज़ोर Pair | 6.1% | **8.0%** |
| Underpair | **10.0%** | 8.0% |
| Ace-high | **26.8%** | 22.1% |
| बना हुआ हैंड नहीं | 24.5% | **34.3%** |

दो पंक्तियाँ अहम हैं: **Top pair 15.6% बनाम 10.9% SB के पक्ष में है; बना हुआ हैंड नहीं, 24.5% बनाम 34.3%, यानी BB में लगभग 10 अंक अधिक।**

⚠ “बना हुआ हैंड नहीं” का मतलब कोई संभावना नहीं, ऐसा नहीं। सॉल्वर draws को अलग गिनता है। **नीचे चारों पंक्तियाँ एक-दूसरे से अलग हैं और हर कॉलम का योग 100% है।**

| Draw | SB (OOP) | BB (IP) |
|---|---|---|
| Open-ended straight draw | 3.0% | 2.3% |
| Gutshot | **16.4%** | **16.0%** |
| Backdoor flush draw | 17.8% | **21.1%** |
| Draw नहीं | **62.8%** | 60.6% |

**Flush Draw पंक्ति है ही नहीं।** बोर्ड rainbow है, इसलिए किसी खिलाड़ी के पास flop पर flush के चार कार्ड नहीं हो सकते। Backdoor हिस्सा मौजूद है, पर उसे लगातार दो सही कार्ड चाहिए; वह कम बार पूरा होता है।

3.0% open-ender लगभग ==0.030 × 538 = लगभग 16 कॉम्बो== है। इस बोर्ड पर ठीक एक हैंड-प्रकार open-ender बनाता है: **Q-J**। K-Q-J-T में A या 9 चाहिए, यानी **आठ outs**। Q-J के कॉम्बो भी ठीक 16 हैं। Gutshot पंक्ति बड़ी है, क्योंकि A-Q, A-J, Q-9, J-9, 9-8 और 8-7 सभी उसमें आते हैं।

प्रतिद्वंद्वी के एक-तिहाई हिस्से ने नया pair नहीं बनाया और आपका ऊपरी हिस्सा अधिक मज़बूत हो तो छोटा, व्यापक bet समझ आता है। लेकिन उस बिना-pair हिस्से में draws भी हैं।

Sets भी इसी दिशा में हैं। इस बोर्ड पर K-K, T-T, 6-6 set बनाते हैं। **SB के पास तीनों, कुल नौ कॉम्बो (1.7%), जबकि BB के पास केवल 6-6, तीन कॉम्बो (0.6%) हैं**। इस उदाहरण में BB, SB open के विरुद्ध K-K और T-T से call की जगह 3-bet करता है। इसी कारण overpair A-A के छह कॉम्बो भी केवल SB में हैं।

## Position के बिना EQR 103.1% कैसे मिलता है?

**Range की बढ़त position की कमी से थोड़ा अधिक लाभ देती है।** सीरीज़ के दूसरे आँकड़ों के साथ तुलना इसे स्पष्ट करती है।

| माप | SB (OOP) | BB (IP) |
|---|---|---|
| Equity |55.3%|44.7%|
| EV (bb) |3.42|2.58|
| **EQR (equity realization)** |**103.1%**|96.1%|

Pot 6 bb में SB की raw share ==6 × 55.3% = 3.32 bb== है, वास्तविक EV 3.42 bb। इसलिए ==3.42 ÷ 3.32 ≈ 103.1%==।

सीरीज़ से सात उदाहरण चुनकर EQR के क्रम में देखें:

| स्पॉट | OOP कौन | OOP equity | OOP EQR |
|---|---|---|---|
| A♥7♦2♣ dry (①) |caller|45.1%|84.0%|
| 6♠5♥2♦ low (⑦) |caller|48.3%|84.3%|
| 9♥8♥7♣ जुड़ा हुआ (④) |caller|48.5%|93.2%|
| **K♥T♦6♠ blind battle (⑪)** |**opener**|**55.3%**|**103.1%**|
| 8♦5♣2♠ 3-bet pot (⑩) |3-bettor|58.6%|106.9%|
| A♦K♠2♥ 3-bet pot (⑧) |3-bettor|68.9%|109.6%|
| Q♥T♥7♠ 3-bet pot (⑨) |3-bettor|58.3%|117.8%|

**ऊपर 100% से अधिक वाली सभी पंक्तियों में खिलाड़ी caller नहीं है।** ⚠ उलटा निष्कर्ष न निकालें: **caller न होना, 100% से ऊपर होने की गारंटी नहीं**। इस चुनी हुई तालिका के बाहर [7-6-5](/hi/blog/blind-battle-connected-board) का वही SB opener **85.3%** पर callers के बीच है। यह K-T-6, 103.1% पर 100 की सीमा थोड़ा ही पार करता है।

⚠ **ऊँचा EQR हमेशा बड़ी बढ़त नहीं दिखाता।** सबसे बड़ी raw-equity बढ़त वाले ⑧ में **68.9%** equity पर **109.6%** EQR है। उससे लगभग दस अंक कम, **58.3%** equity वाला ⑨ **117.8%** EQR दिखाता है। EQR ==EV ÷ (equity × pot)== है, इसलिए **equity हर में आती है**: समान EV के लिए छोटा आधार बड़ा अनुपात देगा। एक open-raise की बढ़त यहाँ 103.1% तक पहुँचती है; इसे 117.8% तक न पहुँच पाने की कमी न समझें।

BB का 96.1% उसी कहानी का दूसरा पक्ष है: **position होते हुए भी raw share से कम EV**। Position सामान्यतः क्यों मदद करती है, उसकी बुनियाद [action order और position](/hi/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp") में देखें।

## टेबल पर क्या बदलें?

- **Blind battle में “OOP हूँ, इसलिए check” को default न बनाएँ।** SB से open किया हो तो **preflop** range की बढ़त आपके पास है; इस बोर्ड पर सॉल्वर 67.4% bet करता है। **बोर्ड फिर भी पढ़ें**: K और broadway kicker opener को सूट करते हैं। Caller से जुड़ने वाले बोर्ड पर check लौटता है: [7♦6♦5♣](/hi/blog/blind-battle-connected-board) पर वही SB केवल 9.6% bet करता है।
- **यहाँ size एक-तिहाई pot है।** BB 525 कॉम्बो defend करता है, इसलिए छोटा और व्यापक bet काम करता है। ⚠ इसे “बड़ा bet बदतर है” न बनाएँ: **tree में केवल 33% size था**। बड़ा size गणना में नहीं था, इसलिए उससे तुलना यहाँ नहीं हो सकती। आगे [A-A-6](/hi/blog/ace-paired-board-strategy) में 75% भी साथ खुला है।
- **★ SPR 16.2 पर raise का मतलब पहले तय करें।** Range का 67.4% bet करने पर raise झेलने की स्थितियाँ आती हैं। पीछे pot के लगभग **16 गुना stack** बचा हो तो top pair को अपने-आप stack-off हैंड न मानें। यह SPR 4.0 के 3-bet pot से अलग है, जहाँ raise अधिक जल्दी बचे stack से जुड़ सकता है। यहाँ call करके turn देखना range के अधिक हिस्से के लिए संभव है। नौ sets और **two pair (KT, K6, T6)** के बाहर पूरा stack लगाने की वजह कम है। 🪶 **AA, two pair से नीचे है।** बोर्ड का K उसे “दबाता” नहीं; overpair भी one pair है और one pair, two pair से हारता है। तालिका का क्रम set → two pair → overpair यही है। साथ के 1.7% · 2.4% · 1.1% range के हिस्से हैं, ताक़त की rating नहीं। ⚠ Raise के बाद का node इस solve में नहीं है। यह SPR से निकली व्याख्या है, सॉल्वर की मापी हुई आवृत्ति नहीं।
- **BB से defend करते समय KK और TT को 3-bet करने का असर समझें।** इस range में उसके कारण बोर्ड पर केवल 66 का set रहता है। Calling range का ऊपरी हिस्सा उतना कम हो जाता है।
- **32.6% checks को कमजोरी न पढ़ें।** मज़बूत हैंड भी check में मिलते हैं; check-raise की योजना हो सकती है। सामान्य c-bet धारणाओं को इस सीट पर [सॉल्वर में जाँचें](/hi/solver)।

:::readnext[आगे पढ़ें]
/hi/blog/blind-battle-connected-board | वही SB, पर bet सिर्फ़ 9.6% क्यों? | /images/gto-sb-connected-oop-hi.webp
/hi/blog/ace-paired-board-strategy | दो Ace आते ही bet 80.1% क्यों? | /images/gto-sb-paired-ace-oop-hi.webp
:::

## सॉल्वर में यह उदाहरण कैसे देखें?

[GTO सॉल्वर](/hi/solver) खोलकर **अभ्यास स्पॉट → “K-high board पर T” → [⚡ परिणाम देखें]** चुनें। अभ्यास प्रश्न चाहिए तो sidebar से [GTO Trainer](/hi/solver) खोलें। वह यादृच्छिक हैंड देता है; action चुनने के बाद mixed frequency और आपके चुनाव का **EV loss (bb)** दिखाता है। बिना login का इतिहास ब्राउज़र में रहता है। Study/Daily रिकॉर्ड वैकल्पिक login से sync हो सकते हैं; सीधे गणना किए स्पॉट के प्रश्न और रिकॉर्ड login के बाद भी डिवाइस तक सीमित हैं।

पहले खिलाड़ी का label देखें: **“OOP (SB (opener))”**। पहले स्पॉटों के “OOP (BB (caller))” से उसका अंतर भूमिका के बदलाव को तुरंत स्पष्ट करता है। मुफ़्त है; install या account आवश्यक नहीं।

**Q. SB को blind battle में हमेशा c-bet करना चाहिए?**

A. नहीं। इस बोर्ड पर 67.4% bet और 32.6% check है। सामान्य BTN-vs-BB single-raised उदाहरणों के OOP 0.1%–23.7% से यह अलग है। **भूमिका बदले तो default बदल सकता है**, पर K-T-6 opener की range से मेल भी खाता है। Caller से जुड़ने वाले बोर्ड पर SB की bet आवृत्ति गिरती है, जैसे पहले बोर्डों में 0.1% से 23.7% का फ़र्क़ था।

**Q. क्या OOP होना पोकर में हमेशा नुकसान है?**

A. Position की कमी हानि है, पर अकेली निर्णायक नहीं। यहाँ SB बिना position अपनी raw-equity share का 103.1% realize करता है, जबकि IP में BB 96.1%। पर्याप्त range बढ़त, position की बढ़त से अधिक हो सकती है; कमज़ोर range IP में भी कम realize कर सकती है।

**Q. केवल एक-तिहाई pot का bet क्यों?**

A. BB की defending range चौड़ी है; दोनों ranges 538 और 525 कॉम्बो की हैं। उपलब्ध tree में छोटा size व्यापक range से दबाव देने के लिए काम करता है। याद रखें, इस अभ्यास स्पॉट में केवल 33% size उम्मीदवार था, इसलिए यह बड़े size से बेहतर होने का निष्कर्ष नहीं है।

**Q. BB के पास केवल 66 का set क्यों है?**

A. इस उदाहरण में KK और TT, SB open के खिलाफ call के बजाय 3-bet होते हैं। इसलिए BB के पास 66 के तीन कॉम्बो (0.6%) रहते हैं; SB के पास KK, TT, 66 के नौ (1.7%)। उसी वजह से BB में AA भी नहीं है।
`.trim(),
};

export default POST;
