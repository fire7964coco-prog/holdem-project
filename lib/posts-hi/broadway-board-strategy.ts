import type { Post } from "../posts";

export const POST: Post = {
  slug: "broadway-board-strategy",
  title: "Draws हैं, फिर BB इतना check क्यों?",
  seoTitle: "QJT पर कौन आगे है? — पोकर GTO nut advantage",
  desc: "QJT पर BB की 68.4% range में draw है, फिर भी वह 99.9% check करता है। GTO उदाहरण से range और nut advantage का फर्क समझें।",
  tldr: "BTN के open और BB के call के बाद Q♠J♦T♠ पर BB 99.9% check करता है, जबकि उसकी 68.4% range में draw है। BTN के पक्ष में straight 10.5% बनाम 7.1%, set 2.0% बनाम 0.7% और overpair 2.6% बनाम 0% हैं। EQR 77.9% बनाम 119.4% है।",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  readTime: "10 मिनट",
  emoji: "🎴",
  image: "/images/gto-srp-broadway-oop-hi.webp",
  imageAlt: "जुड़े Broadway two-tone flop पर HoldemMaster GTO सॉल्वर का BB परिणाम; grid में हरा check और दाईं ओर Draws panel",
  keepImagesInBody: true,
  tags: ["पोकर nut advantage", "range advantage", "dynamic बोर्ड", "two-tone बोर्ड", "GTO सॉल्वर", "Broadway flop", "equity realization"],
  content: `Flop पर **Q♠ J♦ T♠** आते हैं। आप BB में KQ पकड़े हैं—top pair के साथ open-ended straight draw। ऐसे हैंड से check करना गलत लग सकता है।

पिछले दो स्पॉट—[A-high](/hi/blog/a-high-board-cbet) और [K-high](/hi/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-hi.webp")—पर तुरंत पूरे होने वाले draws लगभग नहीं थे। यहाँ स्थिति उलटी है: **BB की range का 68.4% किसी draw के साथ है।** फिर भी सॉल्वर ==99.9%== check करता है। Lead पहले से भी *कम* हो गई।

“बहुत draws हैं” और “आप पहले bet कर सकते हैं” अलग बातें हैं। नीचे के सभी आँकड़े HoldemMaster के [मुफ़्त GTO सॉल्वर](/hi/solver) के अभ्यास स्पॉट परिणाम से 2026-08-19 को पढ़े गए थे।


:::stripe
स्पॉट | BTN 2.5 bb open करता है → BB call करता है (heads-up)
Flop | Q♠ J♦ T♠ (two-tone—दो spades)
Pot · stack | Pot 5.5 bb · बचा हुआ effective stack 97.5 bb
परिणाम | BB 99.9% check करता है—इतने draws के बावजूद लगभग कोई lead नहीं
:::

> **सीधा जवाब**
> Q♠J♦T♠ पर BB **99.9%** check करता है, जबकि उसकी 68.4% range में draw है। वजह **nut advantage** है: BTN बनाम BB straight 10.5% और 7.1%, set 2.0% और 0.7%, overpair 2.6% और 0%। सबसे मजबूत श्रेणियों में BTN आगे है; सिर्फ two pair लगभग बराबर, BB 6.0% बनाम BTN 5.9%, है। पहले bet करने से अक्सर वे हैंड fold होते हैं जिन्हें आप हरा रहे हैं, जबकि मजबूत हिस्से से call मिलता है।

## ये आँकड़े किन शर्तों पर निकले हैं?

पिछले दोनों स्पॉट की वही संरचना है: BTN 2.5 bb तक open करता है, BB call करता है और बाकी सभी fold करते हैं। दो खिलाड़ी, pot 5.5 bb, पीछे 97.5 bb, मानक 100 bb online ranges। उपलब्ध bet sizes pot के लगभग एक-तिहाई और तीन-चौथाई हैं। बदला सिर्फ flop है।

| सेटिंग | मान |
|---|---|
| Preflop | BTN 2.5 bb open · BB call · बाकी सभी fold |
| Ranges | मानक 100 bb online play के अनुमान |
| Flop | Q♠ J♦ T♠, two-tone (दो spades) |
| Pot · stack | Pot 5.5 bb · बचा हुआ effective stack 97.5 bb |
| Bet sizes | Pot के लगभग 33% और 75% |
| Rake | शामिल नहीं |
| जाँच | 2026-08-19, अभ्यास स्पॉट का परिणाम |

## इतना wet बोर्ड, फिर BB 99.9% check क्यों करता है?

**क्योंकि action को बने हुए हैंडों की *ताकत* तय करती है, सिर्फ draws की *संख्या* नहीं।**

| BB का पहला action | आवृत्ति | कॉम्बो |
|---|---|---|
| Check | **99.9%** | 452.5 |
| Bet 1.8 bb (33% pot) | 0.1% | 0.3 |
| Bet 4.1 bb (75% pot) | 0.0% | 0.2 |

Dry K-high flop पर check 99.8% था। **यहाँ लगभग दो-तिहाई range draw कर रही है, फिर भी check और अधिक हो गया।** यही उलटा दिखने वाला परिणाम इस स्पॉट को अभ्यास सूची में रखने की वजह है।

## Q-J-T पर nut advantage किसके पास है?

**यह सवाल range के सबसे मजबूत हिस्से का है।** Q-J-T पर क्रम है straight → set → **two pair** → overpair। Two pair को छोड़कर इन सभी में BTN का हिस्सा ज्यादा है।

| ऊपरी श्रेणी | BB (OOP) | BTN (IP) | अंतर की वजह |
|---|---|---|---|
| Straight | 7.1% | **10.5%** | BB के पास **AK नहीं** |
| Trips (set) | 0.7% | **2.0%** | BB के पास **QQ और JJ नहीं** |
| Two Pair | **6.0%** | 5.9% | लगभग बराबर—इस पंक्ति में BB थोड़ा आगे |
| Overpair | 0.0% | **2.6%** | BB के पास **AA और KK नहीं** |

क्रम सही रखें: **Two pair यहाँ तीसरी सबसे मजबूत श्रेणी है, overpair से ऊपर।** Q-J-T पर JT की पाँच कार्ड की हैंड ==J-J-T-T-Q== है—two pair—जबकि AA सिर्फ एक pair है। इसलिए “सबसे मजबूत हिस्सा पूरी तरह BTN का है” कहना बढ़ा-चढ़ाकर होगा। निष्कर्ष फिर भी कायम है: straight और set में BTN आगे है और लगभग बराबर वाली two-pair पंक्ति इन दोनों से हारती है।

हर अंतर preflop में बना। BB AA, KK, QQ, JJ और AK को 3-bet करता है, इसलिए वे calling range के साथ flop पर नहीं आते। BTN इन सबको open करके साथ लाता है।

कॉम्बो की गणना भी मेल खाती है। यहाँ सिर्फ तीन rank जोड़े straight बनाते हैं: ==AK (A-K-Q-J-T)==, ==K9 (K-Q-J-T-9)== और ==98 (Q-J-T-9-8)==। जरूरी ace, king, nine और eight में से कोई बोर्ड पर नहीं है, इसलिए हर जोड़ा 4 × 4 = 16 कॉम्बो है। BB के K9 और 98 मिलाकर **32 कॉम्बो**; BTN में AK जोड़ें तो **48**। सॉल्वर के 7.1% और 10.5% क्रमशः 32.2 और 48.1 weighted कॉम्बो दिखाते हैं—इसी गिनती के करीब।

**पूरा अंतर एक हैंड से आता है: AK।** उसे preflop 3-bet में रखने से flop पर सबसे मजबूत हैंडों का इतना हिस्सा अलग हो जाता है।

## Range advantage और nut advantage में क्या फर्क है?

**Range advantage औसत मजबूती है; nut advantage सबसे मजबूत हैंडों में बढ़त है।** अक्सर दोनों साथ चलते हैं। इस flop पर औसत equity करीब है, लेकिन ऊपरी हिस्सा एक तरफ ज्यादा है।

| | Range advantage | Nut advantage |
|---|---|---|
| किस सवाल का जवाब? | पूरी range में किसकी equity अधिक है? | सबसे मजबूत हैंड किसके पास हैं? |
| Q-J-T पर | करीब—46.7% बनाम 53.3% | असमान—straight, set और overpair में BTN आगे |
| किस फैसले पर असर? | Bet करने की प्रवृत्ति और frequency | **Bet कितनी बड़ी हो और raise का दबाव कौन डाल सके** |

औसत equity देखें तो स्थिति लगभग बराबरी की लगती है। ऊपरी हिस्सा देखें तो एक खिलाड़ी की बड़ी bet को **विरोधी के लिए raise करना कठिन** है, जबकि दूसरे के पास पहले बड़ी bet करने का आधार नहीं है। जब दोनों संकेत अलग हों, **nut advantage sizing को दिशा देता है**—और जिसके पास यह फायदा नहीं है, उसके लिए यहाँ lead लगभग हट जाती है।

## दोनों ranges का कितना हिस्सा draw कर रहा है?

**सिर्फ सीधे पूरे हो सकने वाले draws गिनें: BB 68.4%, BTN 68.7%।** Backdoor flush जोड़ने पर 75.2% और 74.4%—दोनों ranges के लगभग तीन-चौथाई।

![जुड़े Broadway two-tone बोर्ड पर BB और BTN की हैंड श्रेणियों की तुलना](/images/gto-srp-broadway-ranges-hi.webp "Q♠J♦T♠ · श्रेणीवार तुलना—ऊपरी चार पंक्तियाँ इस flop का मुख्य अंतर दिखाती हैं")

| Draw | BB (OOP) | BTN (IP) |
|---|---|---|
| Combo draw (straight + flush) | 5.3% | 4.1% |
| Flush draw | 2.4% | 2.0% |
| Open-ended straight draw | 28.7% | 27.7% |
| Gutshot | 32.0% | 34.9% |
| Backdoor flush | 6.8% | 5.7% |
| Draw नहीं | **24.7%** | **25.5%** |

**Draws लगभग बराबर बँटे हैं।** K-high flop पर BB की 72.2% range में कोई draw नहीं था; यहाँ लगभग एक-चौथाई में नहीं है। यह हैंड श्रेणियों से अलग वर्गीकरण है: दोनों तालिकाएँ अपने-अपने आधार पर लगभग 100% बनती हैं। Draw वाला वर्गीकरण **सिर्फ अभी अधूरे सुधार को** देखता है। जैसे K♠9♠ की straight बन चुकी है, लेकिन दो spades होने से वह flush वाली draw पंक्ति में आएगा। बना हुआ straight जिसके साथ कोई बाकी draw नहीं, “Draw नहीं” में आएगा।

इसलिए मुकाबला ज्यादा draws होने का नहीं है। उनका लगभग बराबर हिस्सा एक-दूसरे को संतुलित करता है। जो अंतर बचता है, वह nut advantage है। Outs गिनने की बुनियाद मजबूत करनी हो तो [draws और खेल के शुरुआती नियम](/hi/blog/texas-holdem-rules-for-beginners) से शुरू करें।

## यहाँ top pair कमजोर क्यों पड़ जाता है?

**क्योंकि BTN की range का 21.0% हिस्सा पहले से उसे हराता है।** Straight 10.5% + set 2.0% + two pair 5.9% + overpair 2.6%।

Dry K-high पर वही जोड़ **3.6%** था—set 1.9%, two pair 0.4%, overpair 1.3%।

| BTN की range का हिस्सा जो top pair से पहले ही आगे है | |
|---|---|
| Dry K-high flop (K-8-3) | 3.6% |
| **Broadway flop (Q-J-T)** | **21.0%** |

**नाम वही “top pair”, लेकिन सामने पहले से बेहतर हैंडों का हिस्सा लगभग छह गुना।** अलग से, विरोधी की 68.7% range के पास कोई न कोई draw है। यह अलग पैमाना है, जो पहले से आपसे आगे वाले बने हैंडों से overlap करता है, उनके ऊपर जुड़ा अतिरिक्त 68.7% नहीं; इसलिए जिन हैंडों को आप अभी हरा रहे हैं, वे भी turn और river पर आगे निकल सकते हैं। Q-J-T पर एक pair से तीन streets की value निकालने की जिद करें, तो वापस मिलने वाला बड़ा action अक्सर ऐसे हैंड से होगा जिसे आप नहीं हराते। यहाँ pot को नियंत्रित करना बेहतर है, लगातार बढ़ाना नहीं।

## Equity 47 बनाम 53, फिर EQR 78 बनाम 119 क्यों?

**बोर्ड जितने कठिन बाद के फैसले पैदा करता है, बाद में action करने की कीमत उतनी बढ़ती है।**

| माप | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46.7% | 53.3% |
| EV (bb) | 2.00 | 3.50 |
| **Equity realization (EQR)** | **77.9%** | **119.4%** |

गणना का तरीका [K-high स्पॉट](/hi/blog/k-high-board-cbet) में है। यहाँ BB का equity वाला हिस्सा ==5.5 × 46.7% = 2.57 bb== है, लेकिन EV 2.00 bb—इसी से 77.9% EQR। BTN का 2.93 bb का raw हिस्सा 3.50 bb EV बनता है।

तीनों flops को साथ रखें:

| Flop | BB EQR | BTN EQR | अंतर |
|---|---|---|---|
| A-7-2 (dry) | 84.0% | 113.1% | 29.1 points |
| K-8-3 (dry) | 80.7% | 116.7% | 36.0 points |
| **Q-J-T (जुड़ा हुआ, two-tone)** | **77.9%** | **119.4%** | **41.5 points** |

तीन उदाहरणों से लगता है कि *बोर्ड जितना जुड़ा, अंतर उतना बड़ा*। लेकिन **अगले ही स्पॉट में यह नियम टूटता है**। [9♥8♥7♣](/hi/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-hi.webp") भी Q-J-T की तरह तीन लगातार कार्डों वाला two-tone बोर्ड है। वहाँ EQR का अंतर **13.2 points है—इन सात single-raised pots में सबसे कम**। BB का 93.2% EQR इन सात में सबसे ऊँचा है; पूरी सीरीज में Q-T-7 के 3-bet pot का 117.8% इससे अधिक है। फर्क बोर्ड के व्यस्त दिखने से नहीं, **सबसे मजबूत हैंड किस range के हिस्से में आते हैं**, उससे बनता है। Q-J-T पर AK, QQ, JJ, AA और KK से BTN को सीधे मजबूत हैंड मिलते हैं, जबकि 9-8-7 पर वही कार्ड बोर्ड से नहीं जुड़ते। ⚠ वे बेकार नहीं हो जाते: 9-8-7 पर overpairs 1.3% बनाम 6.4% हैं, Q-J-T के 0% बनाम 2.6% से बड़ा अंतर। लेकिन जुड़े बोर्ड पर overpair का फायदा नाजुक है, इसलिए उससे सबसे मजबूत हिस्सा अपने नियंत्रण में नहीं आता। बाद में action करने की बुनियाद के लिए [खेल का क्रम और position](/hi/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp") पढ़ें।

## BTN ऐसे dynamic बोर्ड पर किस size से bet करे?

**सिर्फ छोटी size नहीं—बड़ी size की भी जगह बनती है।** Nut advantage होने पर BTN की बड़ी bet को विरोधी के लिए raise करना मुश्किल होता है। Straights, sets और overpairs ज़्यादातर BTN की तरफ हैं (BB के पास सिर्फ 7.1% straights और 0.7% sets), इसलिए दूसरे पक्ष के पास जवाबी दबाव का आधार कम है।

यह dry बोर्ड के तरीके से अलग है। वहाँ छोटा और अक्सर bet करना काम करता था क्योंकि लक्ष्य खाली हैंडों से fold लेना था। यहाँ विरोधी की **68.4%** range में draw है, इसलिए **fold हासिल करना महँगा है**। सिर्फ छोटी size से काम पूरा नहीं होता; बड़ी size का भी कारण है। ⚠ इससे यह निष्कर्ष न निकालें कि “इसलिए C-bet frequency घटती है।” यह अभ्यास स्पॉट सिर्फ flop का पहला action solve करता है; BTN की वास्तविक sizing split और C-bet frequency इसमें नहीं है। [बोर्ड बदलकर C-bet का सिद्धांत सॉल्वर में देखें](/hi/solver)।

:::note[⚠ ऊपर के संख्यात्मक परिणाम सॉल्वर से हैं; यह भाग उनकी रणनीतिक व्याख्या है। अभ्यास स्पॉट में सिर्फ BB का पहला action पहले से गणना किया गया है, इसलिए BTN की sizing split इस स्क्रीन पर नहीं है। वास्तविक frequencies के लिए “इस स्पॉट की गणना खुद करें” खोलकर tree चलाएँ।]:::

## टेबल पर इससे क्या बदलना चाहिए?

- **Draw होना BB से lead करने की वजह अपने-आप नहीं बनता।** दोनों तरफ draws लगभग बराबर हैं, इसलिए सिर्फ draw से बढ़त नहीं मिलती। Lead उस मजबूत made-hand हिस्से से टकराती है जिसमें विरोधी आगे है।
- **Q-J-T पर top pair से तीन streets की value निकालने की योजना न बनाएँ।** BTN की 21.0% range पहले ही आगे है और बड़े हिस्से में draws भी हैं। लगातार bet करने के बजाय स्थिति के अनुसार call की योजना बेहतर है।
- **Check के भीतर मौजूद मजबूत हैंड याद रखें।** BB के 99.9% check में straight के 32 कॉम्बो (K9, 98) और two pair के 27 कॉम्बो हैं। वे कमजोरी से check नहीं करते—**BTN से अक्सर C-bet आने की प्रवृत्ति हो तो action वापस देना lead से ज्यादा कमा सकता है**, और checking range पूरी तरह खाली हैंडों की नहीं बनती। इसलिए check देखकर check-raise की संभावना मत हटाएँ। ⚠ Check-raise की *frequency* यह solve नहीं बताता: अभ्यास स्पॉट **flop के पहले action** पर रुकता है। आगे की गणना के लिए “इस स्पॉट की गणना खुद करें” जरूरी है।
- **जो खिलाड़ी draws कभी fold नहीं करते, उनके खिलाफ अधिक बार bet करने से बेहतर size बढ़ाना है।** Fold खरीदने की कोशिश विफल होती है; draw को सही कीमत देना काम आता है।

:::readnext[आगे पढ़ें]
/hi/blog/donk-bet-strategy | 9-8-7 पर BB की donk bet सही क्यों? | /images/gto-srp-middle-connected-oop-hi.webp
/hi/blog/3bet-pot-bet-sizing | दो sizes, फिर 98.4% एक पर क्यों? | /images/gto-3bp-dynamic-oop-hi.webp
:::

## सॉल्वर में यही स्पॉट कैसे देखें?

[मुफ़्त GTO सॉल्वर](/hi/solver) खोलें और **अभ्यास स्पॉट → जुड़ा हुआ Broadway board, two-tone → [⚡ परिणाम देखें]** चुनें। ऊपर वाला परिणाम बिना गणना का इंतजार किए खुलता है।

इस स्पॉट में **दाईं ओर Draws panel** पढ़ें। Open-ended और gutshot मिलकर 60% से ऊपर हैं, सीरीज में पहली बार। फिर खिलाड़ी selector **IP (BTN)** पर करें और Straight 10.5% देखें: यह एक पंक्ति पूरे लेख का मुख्य अंतर समझाती है।

पढ़ने के बजाय अभ्यास करना हो तो sidebar में **GTO Trainer** खोलें। वह वास्तविक range weights से हैंड देता है और आपके action में छूटे हुए EV को big blinds में आँकता है। मुफ़्त है; install या account जरूरी नहीं।

## अक्सर पूछे जाने वाले सवाल

**Q. Q-J-T पर कौन से हैंड straight बनाते हैं?**

A. तीन rank जोड़े: AK से A-K-Q-J-T, K9 से K-Q-J-T-9, और 98 से Q-J-T-9-8। जरूरी ace, king, nine और eight बोर्ड पर नहीं हैं, इसलिए हर जोड़ा 4 × 4 = 16 कॉम्बो, कुल 48। BB preflop AK को 3-bet करता है, इसलिए उसकी calling range में 32 बचते हैं।

**Q. क्या wet बोर्ड पर semi-bluff lead नहीं करनी चाहिए?**

A. सिर्फ draws की संख्या से फैसला नहीं होता। बने हुए हैंडों का वितरण, nut advantage और blockers साथ देखने होते हैं। यहाँ open-ended draws 28.7% बनाम 27.7%—लगभग बराबर—हैं, लेकिन बने हुए straights BTN के पक्ष में 7.1% बनाम 10.5% हैं। Lead को सिर्फ औसत equity नहीं, range के ऊपरी हिस्से का सहारा चाहिए। यहाँ वह दूसरी तरफ है। अभ्यास सूची का [middle connected 9-8-7](/hi/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-hi.webp") वह उदाहरण है जहाँ BB को कुछ lead मिलती है।

**Q. Range advantage और nut advantage में क्या अंतर है?**

A. Range advantage औसत का सवाल है: सभी हैंड मिलाकर किसकी equity अधिक है। Nut advantage सबसे ऊपरी हिस्से का है; Q-J-T पर क्रम straight, set, two pair, overpair है। Equity 46.7% बनाम 53.3% है, लेकिन straight और set दोनों में BTN आगे है। सिर्फ two pair करीब है, BB 6.0% बनाम BTN 5.9%। ऐसे अंतर में nut advantage bet size को दिशा देता है।

**Q. क्या ये आँकड़े हर stake पर इस्तेमाल कर सकते हैं?**

A. शर्तें समान हों तो आधार के रूप में: heads-up, 100 bb, मानक open और call ranges, rake नहीं। इस बोर्ड पर ज्यादा गहराई के साथ सबसे मजबूत हैंडों का अंतर और महँगा पड़ता है। 200 bb पर straight हिस्से के 3.4 points का फर्क ज्यादा मायने रखता है, क्योंकि जिस हैंड को आप रख ही नहीं सकते, उसके खिलाफ खोने के लिए ज्यादा stack बचा है।`,
};

export default POST;
