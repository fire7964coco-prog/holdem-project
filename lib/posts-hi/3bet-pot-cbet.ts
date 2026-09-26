import type { Post } from "../posts";

export const POST: Post = {
  slug: "3bet-pot-cbet",
  title: "इस flop पर BB check क्यों नहीं करता?",
  seoTitle: "3-bet pot में छोटी bet क्यों? — पोकर GTO C-bet",
  desc: "A-K-2 पर BB के सभी 63 कॉम्बो bet करते हैं। 12 मिनट में जानें कि 3-bet pot, SPR 4 और BTN की range से sizing कैसे बदलती है।",
  tldr: "A♦K♠2♥ वाले इस 3-bet pot में BB पूरी range से bet करता है: check rounding में 0.0% है, और 63 में से कोई भी कॉम्बो 0.1% बार भी check नहीं करता। पहले के single-raised उदाहरणों में उसका check 76.2% से 99.9% था। यहाँ BB ने preflop 3-bet किया और सबसे ऊँचे Sets उसी के पास हैं; BTN की calling range में AA और KK नहीं हैं। SPR 4.0 पर pot बढ़ाने का फैसला बहुत देर टालने की गुंजाइश भी कम है।",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  readTime: "12 मिनट",
  emoji: "🔥",
  image: "/images/gto-3bp-ace-king-oop-hi.webp",
  imageAlt: "A-high 3-bet pot पर HoldemMaster का BB परिणाम: सभी 63 कॉम्बो betting में और Check 0.0%",
  keepImagesInBody: true,
  tags: ["पोकर SPR", "3-bet pot c-bet", "A-K-high flop", "effective stack", "range advantage", "पोकर GTO सॉल्वर"],
  content: `
पिछले सात स्पॉट में BB का जवाब अधिकतर check था। [9-8-7 flop](/hi/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-hi.webp") पर lead सबसे अधिक थी, तब भी bet सिर्फ 23.7% थी। बाकी में check 88.8% से 99.9% के बीच रहा।

यहाँ उलटा है: **BB पूरी range से bet करता है** — सभी 63 कॉम्बो, हर एक कम से कम 99.9% बार।

मुख्य बदलाव preflop action है। BB ने call करने के बजाय **3-bet** किया, इसलिए pot 5.5 bb से 22.5 bb हो गया। बोर्ड भी अलग है: ① में A♥7♦2♣ था, यहाँ A♦K♠2♥। इसलिए इसे केवल preflop बदलकर किया गया नियंत्रित प्रयोग न मानें। इन बदलावों से flop की रणनीति बदल जाती है। नीचे के सभी आँकड़े HoldemMaster के [मुफ़्त GTO सॉल्वर](/hi/solver) से हैं।

:::stripe
स्पॉट | BB 3-bet करता है → BTN call करता है (heads-up)
Flop | A♦ K♠ 2♥ (rainbow)
Pot · stack | Pot 22.5 bb · बचा effective stack 89 bb · **SPR 4.0**
नतीजा | BB 100% bet — check 0.0%
:::

> **सीधा जवाब**
> BB पूरी range से bet करता है। छोटी size 7.4 bb, यानी 33% pot, 57.8% बार; बड़ी size 14.9 bb, यानी 66%, 42.2% बार। हर हैंड बहुत मज़बूत नहीं है: 38.1% range King से नीचे का pocket pair है। अहम बात यह है कि **BTN के AA और KK इस उदाहरण में preflop 4-bet range में चले गए**, इसलिए सबसे ऊँचे Sets BB के पास हैं। SPR 4.0 पर pot बढ़ाने का फैसला बाद के लिए टालने की गुंजाइश कम है; इसका अर्थ यह नहीं कि turn और river बचे ही नहीं।

## ये आँकड़े किन शर्तों पर निकले हैं?

**पहले सात स्पॉट से शर्तें बदल गई हैं।** Pot, stack और खिलाड़ियों की भूमिका अलग है, इसलिए पहले तालिका देखें।

| सेटिंग | यह स्पॉट (3-bet pot) | ①–⑦ (single-raised pot) |
|---|---|---|
| Preflop | BTN open → **BB कुल 11 bb तक 3-bet** → BTN call | BTN 2.5 bb तक open → BB call |
| OOP (पहले action) | **BB — 3-bettor** | BB — caller |
| IP | BTN — caller | BTN — opener |
| Pot | **22.5 bb** | 5.5 bb |
| Effective stack | **89 bb** | 97.5 bb |
| **SPR** | **4.0** | 17.7 |
| Bet sizes | लगभग 1/3 और 2/3 pot | लगभग 33% और 75% (⑦ में एक size) |
| Rake | शामिल नहीं | शामिल नहीं |
| जाँच की तारीख | 2026-08-20 | 2026-08-20 |

22.5 bb pot का हिसाब ==11 की 3-bet + 11 का call + 0.5 fold कर चुके SB का blind== है। Effective stack ==100 − 11 = 89 bb== है।

## क्या check की frequency सचमुच 0% है?

**स्क्रीन पर 0.0%।** Raw output में थोड़ा अवशेष ज़रूर है: 63 में से 41 कॉम्बो में check का बहुत छोटा अंश है, सबसे बड़ा K♥K♦ में 0.09%, और सब मिलाकर एक कॉम्बो के सौवें हिस्से से भी कम। यह सॉल्वर का noise है, रणनीति नहीं, इसलिए इसे शून्य ही पढ़ें। Betting दो sizes में बँटी है: 7.4 bb की छोटी bet 57.8%, 14.9 bb की बड़ी bet 42.2%। पिछले सात single-raised pots में BB का सामान्य व्यवहार इसके उलट था।

| BB का पहला action | आवृत्ति | कॉम्बो |
|---|---|---|
| Bet 7.4 bb (33% pot) | **57.8%** | 36.6 |
| Bet 14.9 bb (66% pot) | 42.2% | 26.4 |
| Check | **0.0%** | **0.0** |

सॉल्वर की frequencies और combo counts अलग aggregation से आते हैं और सीधा भाग देने पर पूरी तरह नहीं मिलते। ==36.6 ÷ 63 = 58.1%==, जबकि प्रदर्शित frequency 57.8% है। **ऊपर स्क्रीन के मान जस के तस रखे हैं।** Check के शून्य-कॉम्बो नतीजे पर यह फर्क असर नहीं डालता।

0.0% का अर्थ check करना मना होना नहीं। इसका अर्थ है कि **इस tree और इन ranges की निकली रणनीति check का उपयोग नहीं करती**। केवल action frequency देखकर यह साबित नहीं होता कि हर कॉम्बो का check EV, bet EV से सख्ती से कम ही है; उसके लिए action-wise EV देखना होगा।

पहले स्पॉट में बहुत कम इस्तेमाल होने वाला action भी कभी 0.2% या 0.1% बचा था। यहाँ check उतना भी नहीं बचता।

## एक भी कॉम्बो check क्यों नहीं करता?

**क्योंकि बोर्ड के सबसे ऊँचे Sets BB के पास हैं।** A-K-2 पर तीन pocket pairs से Set बन सकता है, और उनमें ऊपर के दोनों BB के हैं। पहले action करने वाले खिलाड़ी के पास सबसे अच्छे हैंड अधिक हों तो वह पूरे range से दबाव डाल सकता है। नीचे की श्रेणियाँ इस बढ़त का आकार दिखाती हैं; check 0% से हर action के EV अंतर का अलग दावा नहीं किया जा रहा।

| श्रेणी | BB (OOP) | कॉम्बो | BTN (IP) | कॉम्बो |
|---|---|---|---|---|
| Set | **9.5%** | 6 | 2.3% | **3** |
| Two Pair | **14.3%** | 9 | 6.9% | 9 |
| Top Pair (एक Ace) | **33.3%** | 21 | 20.8% | 27 |
| Second Pair (एक King) | 4.8% | 3 | **11.5%** | 15 |
| Underpair | 38.1% | 24 | **46.2%** | 60 |
| बना हुआ हैंड नहीं | **0.0%** | **0** | 12.3% | 16 |

स्क्रीन पर BB के लिए “बना हुआ हैंड नहीं” पंक्ति आती ही नहीं; 0% श्रेणी दिखाई नहीं जाती।

पहली पंक्ति देखें। **A-K-2 पर AA, KK और 22 से Set बनते हैं; BTN के पास सिर्फ आखिरी है।** ऐप में संयुक्त श्रेणी “Set/Trips” है। Board pair न होने पर pocket pair से बना यह हैंड **Set** है; फर्क [paired-board स्पॉट](/hi/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-hi.webp") में देखें। इस उदाहरण की BTN calling range से AA और KK preflop 4-bet में गए हैं, इसलिए उसके Set तीन कॉम्बो हैं और BB के छह।

यही इस स्पॉट का केंद्र है। जब सामने वाला आपकी range के सबसे ऊँचे हैंड नहीं रख सकता, तब कमज़ोर हिस्से से भी bet करना संभव होता है। यहाँ 38.1% range का pocket pair, King से *नीचे* है।

**फिर भी “बना हुआ हैंड नहीं: 0.0%” मुख्य कारण नहीं है।** उसी 3-bet range का low board पर व्यवहार इसे दिखाता है। आगे के [8-5-2 flop](/hi/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-hi.webp") में BB की 48.2% range A-high है, pair भी नहीं बना, फिर भी check सिर्फ **2.0%**। बिना pair का हिस्सा शून्य से लगभग 48% होने पर check सिर्फ दो points बदलता है। Check का सवाल सिर्फ “कमज़ोर हैंड कितने हैं?” नहीं, बल्कि बोर्ड 3-bettor की range से कितना मेल खाता है।

:::note[यह [single-raised pot के A-high flop](/hi/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-hi.webp") की उलटी स्थिति है। वहाँ BB की range **capped** थी: AA, AK और AQ preflop 3-bet होने से calling range में नहीं थे, और BB 98.2% check करता था। यहाँ A-high परिवार का बोर्ड है, लेकिन preflop भूमिका उलट गई: 3-bet करने वाला ऊपर के मजबूत हैंड रखता है।]:::

## पोकर में SPR क्या है?

**SPR, stack-to-pot ratio है: flop की शुरुआत में बचा effective stack ÷ pot।** यहाँ ==89 ÷ 22.5 = 4.0==, यानी पीछे बचा stack बीच में पड़े pot का लगभग चार गुना है। इसलिए flop की sizing पूरे stack की योजना को जल्दी प्रभावित करती है; फैसला लंबे समय तक टालने की जगह कम है।

| स्थिति | Pot | Effective stack | SPR |
|---|---|---|---|
| Single-raised pot (①–⑦) | 5.5 bb | 97.5 bb | **17.7** |
| 3-bet pot (यह स्पॉट) | 22.5 bb | 89 bb | **4.0** |

यह अनुपात इसलिए उपयोगी है कि इससे **stack लगाने के लिए कितनी bets चाहिए**, समझ आता है। रकम का आकार अकेले यह नहीं बताता। उपलब्ध 66% size से शुरू करके, हर bet के call होने पर हिसाब देखें:

- Flop **14.9 bb** → call के बाद pot 52.3 bb, पीछे 74.1 bb
- Turn **34.5 bb** → call के बाद पीछे 39.6 bb
- River बची **39.6 bb** की all-in bet

**तीन bets से पूरा stack: ==14.9 + 34.5 + 39.6 = 89.0==।** पहली दो लगभग 66% pot हैं; river पर बाकी stack लगाया गया है, वह फिर 66% नहीं है। दो bets का कुल 49.4 bb है, stack का 55.5%, पूरा stack नहीं। तीनों streets पर एक ही अनुपात से ठीक all-in पहुँचना हो तो वह ==लगभग 54% pot== होगा।

Single-raised pot में तीनों बार लगभग दो-तिहाई pot bet करें तो कुल ==3.67 + 8.56 + 19.96 = 32.2 bb== लगेगा, stack का करीब एक-तिहाई। **SPR 17.7 और SPR 4.0 का असली फर्क यही है:** समान relative bet से stack कितनी जल्दी खेल में आता है। कम SPR पर pot बढ़ाने की योजना बाद के लिए बहुत देर नहीं छोड़ सकते। यह chip arithmetic है, solver की मापी हुई turn/river रणनीति नहीं।

## छोटी size अधिक क्यों चुनी जाती है?

**Range के आकार और बोर्ड के कारण, सिर्फ stack depth के कारण नहीं।** सभी 63 कॉम्बो Pair या बेहतर हैं। **Range में बिना pair का निचला हिस्सा नहीं बचा**, इसलिए यह “nuts या कुछ नहीं” वाले दो छोरों में नहीं बँटती। कमजोर बने हैंड और मजबूत value hands का यह मिश्रण छोटी bet को जगह देता है, इसलिए 57.8% एक-तिहाई pot bet करता है। इसे सामान्य अर्थ में “condensed” range कहना भी ठीक नहीं: condensed में ऊपर और नीचे दोनों छोर कम होते हैं, जबकि यहाँ BB सबसे ऊँचे AA/KK Sets के सभी छह कॉम्बो रखता है। BTN के 22 Set फिर भी अलग मौजूद हैं।

A-K-2 rainbow बहुत कम सीधे draws देता है, इसलिए draws को महँगा call देने की जरूरत भी कम है। इन दोनों पहलुओं से range की बनावट sizing में काम करती है।

**“Stack छोटा, इसलिए bet छोटी” नियम यहाँ पर्याप्त नहीं।** अगले दो स्पॉट का SPR भी 4.0 है, मगर लगभग हर बार बड़ी size आती है: Q-T-7 पर **98.4%**, [8-5-2](/hi/blog/3bet-pot-low-board) पर **97.8%**। वजहें अलग हैं। Q-T-7 पर draws के लिए कीमत बढ़ाने का कारण है। 8-5-2 यहाँ की तरह dry है, मगर range का बड़ा हिस्सा Overpair और A-high में बँटता है; ऐसे polar रूप में बड़ी bet का आधार अलग है। Stack depth वही, sizing उलटी।

**बड़ी size सिर्फ “मज़बूत हैंडों का प्रतिशत” भी नहीं है।** Sets, Two Pair और Top Pair, जो उपयुक्त प्रतिद्वंद्वी के खिलाफ बड़ा stack खेल सकते हैं, जोड़ें तो ==6 + 9 + 21 = 36 कॉम्बो, 57.1%==। यह बड़ी bet के 42.2% से अधिक है। इसका अर्थ हर Top Pair से 89 bb call करना नहीं; kicker का फर्क आगे है।

एक संकेत है कि **combo counts पूरे अंक नहीं हैं**: बड़ी bet 26.4, छोटी 36.6। इस unweighted range में पूरी-पूरी श्रेणियाँ अलग sizes को दी जातीं तो counts पूरे होते। **एक ही हैंड दोनों sizes मिला सकता है।** 42.2% पूरी range की weighted action frequency है, किसी निश्चित hand tier का नाम नहीं। इससे size देखकर हैंड पढ़ना आसान नहीं रहता।

## BTN के पास वास्तव में क्या है?

**Calling range का लगभग आधा, 46.2%, ऐसे pocket pairs हैं जिनमें Ace या King नहीं है।** Flop पर दोनों आ गए हैं।

![A-K-2 के 3-bet pot में BB के AA और KK Sets तथा BTN के अधिक middle pocket pairs की तुलना](/images/gto-3bp-ace-king-ranges-hi.webp "A-K-2 3-bet pot · सबसे ऊँचे Sets BB के पास, BTN का बड़ा हिस्सा बीच के pairs में")

Underpairs 46.2%, यानी 60 कॉम्बो हैं: QQ से 33, दस pocket pairs के छह-छह कॉम्बो। इस बोर्ड पर उनसे लगातार दो barrels call करना कठिन है।

एक जरूरी सीमा: ये 130 कॉम्बो **इस solve को दी गई calling range** हैं: tree में लिखी गई preflop सेटिंग, सॉल्वर द्वारा निकाला गया defense नहीं। वास्तविक प्रतिद्वंद्वी middle pairs fold करके अधिक A-Q, A-J और K-Q call कर सकता है। उस खिलाड़ी के सामने 46.2% वही नहीं रहेगा। इसलिए live खेल में इन frequencies से पहले देखें कि उसने सचमुच किन हैंडों से preflop call किया होगा।

## एक-तिहाई pot c-bet पर BTN कैसे प्रतिक्रिया दे?

**Underpairs के साथ अंत तक call करना कठिन है।** बोर्ड का Ace और King दोनों उन pocket pairs से ऊपर हैं, और SPR 4.0 पर बड़ी sizing से पूरा stack जल्दी खेल में आ सकता है।

किस street की bet all-in होगी, यह **size** पर निर्भर है। बड़ी size से शुरू करने पर 14.9 → 34.5 → 39.6 तीन bets हैं; तीसरी बचा stack है। लेकिन यहाँ चर्चा की **7.4 bb, एक-तिहाई pot** size तीनों streets पर चलाएँ तो ==7.4 + 12.3 + 20.4 = 40.1 bb==, stack का सिर्फ 45%। इस अभ्यास परिणाम में turn node नहीं है: यह flop के पहले action पर रुकता है। आगे की बातें range की बनावट और गणित की व्याख्या हैं।

22.5 bb pot में 7.4 bb के खिलाफ शून्य-equity pure bluff को तुरंत लाभ न देने वाला **MDF** है ==22.5 ÷ (22.5 + 7.4) = 75.3%==। मगर A-K-2 से जुड़े BTN के हैंड जोड़ें तो सिर्फ ==20.8 + 11.5 + 6.9 + 2.3 = 41.5%==। इसमें 2.3% Sets **22** हैं: उनका pair deuce से बना, Ace या King से नहीं। सिर्फ Ace या King से जुड़े हैंड **39.2%** हैं।

**यहाँ MDF की सरल धारणा से सीधा optimal defense नहीं मिलता।** MDF शून्य equity वाले **pure bluff** को indifferent करने का संदर्भ है। BB की betting range में **0.0% “बना हुआ हैंड नहीं”**, एक भी ऐसा कॉम्बो नहीं है। इस पूरी range को शून्य-equity bluff मानना गलत होगा और उसी सूत्र से बहुत call करने का आदेश नहीं निकलता। दो सीमाएँ याद रखें: ① “0% no-made-hand” का अर्थ “0% bluffs” नहीं — कमजोर Underpair bluff या protection bet का काम कर सकता है; ② BTN का response node इस solve में नहीं है, इसलिए सही defense frequency यहाँ पक्की नहीं की जा सकती। 41.5% देखकर “बाकी middle pairs भी जरूरी call हैं” न निकालें। छोटी size उन 60 कॉम्बो को call लायक कीमत देती भी है या नहीं, यह संदिग्ध है: BB की पूरी range के सामने केवल QQ और JJ के पास उसकी माँगी 19.8% से अधिक equity है, जबकि 99 से 33 तक 7.6–9.2% पर हैं। जो भी हो, size की वजह पिछला range-shape तर्क है; यह उसका एक असर है।

:::note[MDF, bet को शून्य-equity pure bluff मानकर सरल करता है। यहाँ पूरी betting range Pair या बेहतर है, इसलिए उस धारणा को वास्तविक flop defense की निश्चित सीमा न समझें। बने हुए कमजोर हैंड bluff हो सकते हैं; उनकी equity और आगे की streets पर हैंड कितना टिकेगा, दोनों देखें।]:::

## OOP होकर भी BB का EQR 109.6% क्यों है?

**क्योंकि पर्याप्त range advantage, position की कमी से बड़ा हो सकता है।** इस क्रम में पहली बार OOP खिलाड़ी अपने equity वाले हिस्से से अधिक realize करता है। 68.9% बनाम 31.1% की equity बढ़त पहले के single-raised pots से अलग स्तर की है; वहाँ OOP **45.1% से 48.5%**, IP **51.5% से 54.9%** था।

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | **68.9%** | 31.1% |
| EV (bb) | 16.99 | 5.51 |
| **Equity realization** | **109.6%** | 78.7% |

22.5 bb pot में 68.9% equity का मूल्य ==22.5 × 68.9% = 15.50 bb== है। BB का EV **16.99 bb** है, और ==16.99 ÷ 15.50== का अनुपात EQR **109.6%** देता है।

:::pull[Position मौजूदा बढ़त का लाभ बढ़ाती है; अपने-आप बढ़त पैदा नहीं करती।]:::

BTN का 78.7% कोई अलग स्वतंत्र प्रमाण नहीं; वही तथ्य दूसरी तरफ से है। दोनों EV का जोड़ pot है, इसलिए एक तरफ realization 100% से ऊपर जाए तो दूसरी नीचे होगी। ध्यान अंतर के आकार पर दें। ①–⑦ में OOP का EQR **77.9% से 93.2%** था; यहाँ 100% से अधिक है और BTN के folds से BB को pot मिलता है। Action order और position की बुनियाद [खेल के क्रम वाले लेख](/hi/blog/holdem-game-order) में देखें।

## टेबल पर क्या बदलें?

- **ऐसे heads-up 3-bet pot में c-bet की योजना size से शुरू कर सकते हैं।** इस A-K-high dry board पर, इन ranges में 3-bettor सबसे ऊपर है और पूरी range bet करती है। Cold-caller से flop तीन लोगों का हो जाए तो “हर हैंड bet” लागू नहीं रहेगा; extra player के साथ Underpairs को betting range से कम करने पर विचार करें। इसे किसी भी A-high बोर्ड की निश्चित frequency न समझें।
- **Flop से पहले pot और बचा stack देखकर SPR गिनें।** बड़ा pot बताता है कि समान relative sizing से stack लगाने के लिए कम bets लगेंगी। **SPR 4 पर दो बड़ी bets और river का बचा stack तीन bets में 89 bb लगा सकते हैं**। Sizes चुनते समय आगे की पूरी योजना देखें।
- **पूरी range से bet करना, पूरी range से stack लगाना नहीं है।** यहाँ betting range का 38.1% King से नीचे का pocket pair है। इनमें भी फर्क है: QQ, BTN की preflop calling range के आधे से अधिक हिस्से से आगे है और turn पर check का उम्मीदवार है। TT तथा 99 raise आने पर पहले fold उम्मीदवारों में हैं। ये hand-class आधारित व्याख्याएँ हैं, इस output के turn या raise-response आँकड़े नहीं।
- **Top Pair में kicker से फैसला बदलता है।** उन 21 कॉम्बो में **A5s और A4s** भी हैं, जिन्हें preflop blocker के रूप में 3-bet किया गया। 89 bb call-off करने वाली range संकरी हो सकती है: मुख्यतः **22 और A-K**, साथ में प्रतिद्वंद्वी के अनुसार A-Q जैसे मजबूत Top Pair। **A-4 इनमें किसी से आगे नहीं**। AA और KK Sets सबको हराते हैं। **A-K बीच में है**: सामने A-K से split और 22 से हारता है। इसलिए इस संकरे उदाहरण में AA/KK का stack-off आधार सबसे साफ़ है; A-K का फैसला सामने की range कितनी चौड़ी है, उससे जुड़ा है।
- **Flop पर raise आए तो पूरे stack की योजना अभी जाँचें।** SPR 4 पर raise के आकार के अनुसार बाकी stack भी दाँव पर आ सकता है। बिना सोचे call करके turn पर फैसला छोड़ना सही योजना नहीं। Sets जारी रहने के मजबूत उम्मीदवार हैं; नीचे के Underpairs और कमजोर kicker वाले Top Pair अधिक सावधानी माँगते हैं। फिर भी हर raise पर तुरंत jam-or-fold जरूरी नहीं: **इस उदाहरण में raise का सामना करने वाला node नहीं है**, इसलिए सही jam/call/fold सीमा मापी नहीं गई। A-K Two Pair भी raise range की चौड़ाई पर निर्भर है; सिर्फ Sets और A-K के खिलाफ वह कभी अकेले आगे नहीं होता।
- **“Check 0%” को हर 3-bet pot में न ले जाएँ।** वही 3-bet range [8-5-2](/hi/blog/3bet-pot-low-board) पर 2.0% check करती है। Caller को अनुकूल बोर्ड पर check की जरूरत अलग हो सकती है। **इस उदाहरण में Ace और King का साथ आना इस शून्य का हिस्सा है; हर 3-bet pot की शर्त नहीं**। Preflop raise और re-raise का क्रम [betting actions](/hi/blog/holdem-betting-actions) में देखें।

:::readnext[आगे पढ़ें]
/hi/blog/3bet-pot-bet-sizing | दो sizes, फिर 98.4% एक पर क्यों? | /images/gto-3bp-dynamic-oop-hi.webp
/hi/blog/3bet-pot-low-board | 8-5-2 पर 97.8% बड़ा bet क्यों? | /images/gto-3bp-low-oop-hi.webp
:::

## सॉल्वर में खुद कैसे देखें?

[मुफ़्त GTO सॉल्वर](/hi/solver) खोलें और **अभ्यास स्पॉट → A-high board, 3-bettor को फ़ायदा → ⚡ परिणाम देखें** चुनें।

पहले header देखें: **Pot 22.5 bb · Stack 89 bb**। पिछले उदाहरणों के 5.5 bb और 97.5 bb की जगह ये मान देखना ही लेख का मुख्य बदलाव दिखाता है। फिर गायब श्रेणी देखें: BB के “हैंड” panel में सिर्फ **पाँच** categories हैं; “बना हुआ हैंड नहीं” अनुपस्थित है। ऊपर action strip में check **0.0% / 0.0 कॉम्बो** है।

फिर sidebar में **GTO Trainer** खोलें। वास्तविक range weights के अनुसार हैंड मिलता है और चुने action की EV हानि bb में दिखती है। मुफ़्त है, installation या account ज़रूरी नहीं।

## आम सवाल

**Q. पोकर में SPR का मतलब क्या है?**

A. Stack-to-pot ratio: बचा effective stack ÷ pot। यह समझने में मदद करता है कि stack लगाने के लिए कितनी bets चाहिए, सिर्फ कितने chips हैं यह नहीं। समान 100 bb शुरुआती stack से इस स्पॉट में SPR 4.0, single-raised pot में 17.7 मिलता है। इसलिए आगे के फैसलों की गुंजाइश बहुत अलग है।

**Q. SPR 4 पर कितनी bets में all-in पहुँच सकते हैं?**

A. इस उदाहरण में लगभग 66% pot की पहली दो bets, फिर बची रकम river पर: 14.9 → 34.5 → 39.6 bb, कुल 89 bb। तीसरी bet बचा stack है, 66% pot नहीं। दो bets तक 49.4 bb, यानी आधे से थोड़ा अधिक stack लगता है। बड़ी sizes से दो bets में भी पहुँच सकते हैं; छोटी sizes से तीन में भी पूरा stack नहीं लगता। इसलिए size योजना तय करती है।

**Q. क्या 3-bettor को हमेशा c-bet करना चाहिए?**

A. इस बोर्ड और इन ranges में सॉल्वर check 0.0% करता है। लेकिन सिर्फ preflop 3-bet करना काफी शर्त नहीं। वही range 8-5-2 पर 48.2% A-high होने के बावजूद सिर्फ 2.0% check करती है; caller को अधिक अनुकूल boards पर व्यवहार अलग होगा। यहाँ Ace और King साथ आने और caller के AA/KK न रखने से सबसे ऊपरी हिस्सा BB के पास है।

**Q. BTN के पास pocket Aces और Kings क्यों नहीं हैं?**

A. इस उदाहरण की preflop calling range में वे रखे नहीं गए; AA और KK 4-bet करने वाले हिस्से में हैं। यह input range की शर्त है, postflop solver ने preflop strategy निकालकर ऐसा नहीं किया। दूसरे setups में calling range को सुरक्षित रखने के लिए कुछ AA/KK रखे जा सकते हैं। ऐसा बदलेंगे तो Set की पंक्ति भी बदलेगी।

**Q. छोटी bet बड़ी से अधिक क्यों आती है?**

A. Range और बोर्ड का आकार कारण है: सभी 63 कॉम्बो Pair या बेहतर हैं, इसलिए “nuts या कुछ नहीं” वाला बँटवारा नहीं है। **सिर्फ stack छोटा होना कारण नहीं**: [Q-T-7 स्पॉट](/hi/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-hi.webp") का SPR भी 4.0 है और वहाँ बड़ी size 98.4% आती है।

**Q. क्या ये आँकड़े मेरे stakes पर भी लागू होंगे?**

A. शर्तें मिलें तो शुरुआती संदर्भ मानें। इस solve में सिर्फ एक-तिहाई और दो-तिहाई pot की bet sizes थीं। Overbet का विकल्प देने पर frequencies अलग बँट सकती हैं। दूसरी 3-bet range या stack depth से भी परिणाम बदलता है; यहाँ rake शामिल नहीं है।
`.trim(),
};

export default POST;
