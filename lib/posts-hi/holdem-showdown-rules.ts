import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "टेक्सस होल्डम showdown नियम: कार्ड पहले कौन दिखाता है, mucking और slow rolling",
  seoTitle: "कार्ड पहले कौन खोलता है? — Holdem showdown नियम",
  desc: "Showdown पर कार्ड पहले कौन दिखाता है? बिना दिखाए muck कर सकते हैं? last aggressor, cards speak, slow roll और all-in — सारे showdown नियम आसान भाषा में।",
  tldr: "Non-all-in टूर्नामेंट showdown में river का last aggressor पहले दिखाता है; river check through हो तो button के बाएँ पहला active खिलाड़ी। कोई all-in हो और betting पूरी हो जाए तो सभी live हैंड दिखानी होती हैं। अपने कार्ड रखे या table किए river caller को last aggressor की हैंड माँगने का हक़ है। Cash game में house rule लागू होता है।",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-10-14",
  masterUpdated: "2026-10-13",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🃏",
  tags: [
    "texas holdem showdown niyam",
    "poker mein card pehle kaun dikhata hai",
    "muck poker",
    "slow roll poker",
    "all in showdown niyam",
  ],
  image: "/images/holdem-showdown-rules-hero.webp",
  imageAlt: "टेक्सस होल्डम showdown इन्फोग्राफ़िक — 4♥ 7♣ Q♦ K♠ 2♥ बोर्ड पर A♠ K♥ pair of kings और ace kicker के साथ जीतता है",
  content: `
आपने river की bet call कर दी। अब आप दोनों एक-दूसरे को घूर रहे हैं, इंतज़ार में कि कार्ड पहले कौन खोलेगा।

कोई हिलता नहीं।

Dealer इधर-उधर देखता है। टेबल के बाक़ी खिलाड़ी झल्ला उठते हैं।

==यही जमी हुई तनातनी लगभग हर live टेबल पर होती है== — क्योंकि ज़्यादातर शुरुआती ने कभी सीखा ही नहीं कि असल में पहले कार्ड किसे दिखाने होते हैं। यह गाइड हर showdown हालात को कवर करती है: सामान्य हैंड, check-through वाले river, all-in, और यह कि slow rolling करने पर बाक़ी पूरी session आप पर तिरछी नज़रें क्यों पड़ती हैं।

## Showdown पर कार्ड पहले किसे दिखाने होते हैं?

नियम इस बात पर निर्भर करता है कि आख़िरी betting राउंड कैसे ख़त्म हुआ (यहाँ तक पहुँचाने वाले पूरे street-दर-street क्रम के लिए देखें [खेल का क्रम](/hi/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp"))।

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| आख़िरी street की action | कार्ड पहले कौन दिखाता है |
|--------------------|-----------------|
| river पर किसी ने bet या raise किया | ==सबसे आख़िर में bet या raise करने वाला== पहले दिखाता है — पर टूर्नामेंट में, अगर हैंड में कोई all-in है (river पर या किसी पिछली street पर), तो betting पूरी होते ही हर हैंड face up होती है (नीचे देखें) |
| river पर सब ने check किया | dealer button के बाईं ओर का पहला active खिलाड़ी पहले दिखाता है — जब हैंड में कोई all-in न हो; टूर्नामेंट में पिछली street का all-in हो तो इसके बजाय हर हैंड face up होती है |
| किसी पिछली street पर all-in (betting river से पहले ख़त्म) | टूर्नामेंट: सारी betting पूरी होते ही हर हैंड बिना देर table (TDA 2024 Rule 16)। Cash: side pot हो तो side-pot वाले खिलाड़ी पहले दिखाते हैं; और No-Limit गेम में all-in push करने वाला खिलाड़ी पहले कार्ड पलटता है (Live Action Rule 149) |

</div>

![टेक्सस होल्डम में showdown क्रम का इन्फोग्राफ़िक — J♥ 9♠ 4♦ 2♠ K♥ बोर्ड पर पहले कौन दिखाता है](/images/holdem-showdown-who-shows-first.webp)

==g:non-all-in टूर्नामेंट में "last aggressor" मुख्य है।== River bet call हो तो bettor पहले दिखाता है। अपने कार्ड रखे या table किए river caller को last aggressor की हैंड माँगने का हक़ है; cash game में house rule लागू होता है।

---

## क्या showdown पर बिना दिखाए muck कर सकते हैं?

हाँ — **अगर आप हार गए हैं**।

एक बार last aggressor अपनी हैंड दिखा दे, तो बाक़ी खिलाड़ी या तो:
- **अपनी हैंड दिखा सकते हैं** अगर उन्हें लगे कि वे जीत रहे हैं
- **face-down muck कर सकते हैं** अगर उन्हें दिख जाए कि वे हार गए हैं — अपने कार्ड दिखाने की ज़रूरत नहीं। यह तभी तक सही है जब तक कोई all-in न हो: टूर्नामेंट में, एक बार कोई खिलाड़ी all-in हो **और बाक़ी खिलाड़ियों की सारी betting action पूरी हो जाए**, तो ==TDA 2024 Rule 16== के तहत pot की हर हैंड table करनी होती है, और कोई muck नहीं कर सकता। जब तक बाक़ी खिलाड़ियों के पास chips हैं और वे bet कर सकते हैं, सब कुछ face-down रहता है (cash game house rule पर चलते हैं, और ज़्यादातर caller को muck करने देते हैं)

==r:पर एक अहम अपवाद है:== अगर आपकी river bet call हुई, तो caller ने आपकी हैंड देखने की पूरी क़ीमत चुकाई है। वह माँग — dealer से muck हुई हैंड पलटवाना — **"I want to see that hand"** नियम है। टूर्नामेंट में ==TDA 2024 Rule 18== इसे कसकर बाँधता है: showdown पर जिसके पास कार्ड नहीं बचे, या जिसने face-down muck कर दिया, वह माँगने का हक़ खो देता है। यह हक़ अटूट सिर्फ़ उस खिलाड़ी का है जिसने river bet call की और अपने कार्ड table किए या अपने पास रखे — और सिर्फ़ ==last aggressor== की हैंड के लिए, जिसे देखने की उसने क़ीमत चुकाई। बाक़ी सब tournament director के विवेक पर है। Cash game house rule पर चलते हैं, और वे अपने-आप ज़्यादा ढीले नहीं होते: WSOP Live Action नियमों में न दिखाई गई हैंड देखने की माँग के लिए collusion का संदेह **और** floor person की मौजूदगी, दोनों चाहिए (==Live Action Rule 147==)। (इसे "show one, show all" से न उलझाएँ, जिसका मतलब है कि अगर आप अपनी मर्ज़ी से एक खिलाड़ी को कार्ड दिखाते हैं, तो टेबल पर सबको उन्हें देखने का हक़ मिल जाता है।)

व्यावहारिक नियम: ==last aggressor के तौर पर अपने कार्ड पलट दें — call हुआ bluff हो तब भी।== फिर caller आपकी हैंड देखकर दिखाता है या muck करता है। Bettor के तौर पर आप आमतौर पर दिखाने के बजाय muck करके pot छोड़ सकते हैं; WSOP टूर्नामेंट इसका अपवाद हैं, जहाँ दिखाने से इनकार करके जान-बूझकर muck करने वाले खिलाड़ी को penalty मिलती है (==WSOP Tournament Rule 72==)। पर जल्दबाज़ी में muck करें तो आप दो बार हारते हैं: टूर्नामेंट में पैसे देकर देखने वाला caller फिर भी आपकी हैंड माँग सकता है (==TDA 2024 Rule 18==) — WSOP cash game में collusion के संदेह और floor person के बिना वह नहीं माँग सकता (Live Action Rule 147) — और चूँकि cards speak, कई खिलाड़ियों ने ऐसे pot फेंक दिए हैं जिनमें उनका ace-high असल में आगे था।

---

## जब river पर सब ने check किया — showdown का क्रम

अगर river पर किसी ने bet नहीं किया (सब ने check किया) और कोई all-in नहीं है, तो showdown **dealer button के बाईं ओर के पहले active खिलाड़ी** से शुरू होता है और clockwise आगे बढ़ता है।

उदाहरण: button, small blind और big blind river तक पहुँचते हैं। SB check, BB check, Button check करता है। showdown SB से शुरू होता है (button के बाईं ओर का पहला active खिलाड़ी)। SB दिखा या muck कर सकता है। फिर BB। फिर सबसे आख़िर में button।

==g:इस हालत में button सबसे आख़िर में दिखाता है== — जो असल में एक फ़ायदा है। button यह देख सकता है कि कोई उसे हरा रहा है या नहीं, इससे पहले कि वह अपने कार्ड पलटने का फ़ैसला करे।

---

## All-in showdown नियम — क्या all-in खिलाड़ी पहले दिखाता है?

**टूर्नामेंट** में कोई all-in हो और सारी betting पूरी हो जाए तो board चलाने से पहले सभी live हैंड **तुरंत face-up** table करनी होती हैं (TDA 2024 Rule 16)। इससे हैंड की निष्पक्षता बनी रहती है — all-in हालात में किसी खिलाड़ी को रणनीति के तहत muck करने का मौक़ा नहीं मिलना चाहिए। (एक अपवाद: money के पास hand-for-hand play के दौरान WSOP Tournament Rules 2026 Rule 126.g के तहत all-in पर call होने के बाद pot की सारी हैंड — caller की भी — face-down ही रहती हैं और staff के कहने तक आगे कार्ड नहीं बाँटे जाते।) **Cash game house rule पर चलते हैं**, और WSOP Live Action नियम इसे उलटी तरफ़ से रखते हैं: **No-Limit गेम में**, अगर betting river से पहले ख़त्म हुई, तो all-in push करने वाले खिलाड़ी को पहले कार्ड पलटने होते हैं; और किसी भी cash game में, side pot हो तो उसके लिए लड़ रहे खिलाड़ी उस हर खिलाड़ी से पहले दिखाते हैं जो केवल main pot के लिए all-in है (==Live Action Rule 149==)।

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in हालात | showdown नियम |
|----------------|---------------|
| किसी पिछली street पर all-in, बाक़ी call करते हैं, आगे betting मुमकिन नहीं | टूर्नामेंट: सारी betting पूरी होते ही हर हैंड बिना देर table। Cash: side pot हो तो side-pot वाले खिलाड़ी पहले दिखाते हैं; और No-Limit गेम में all-in push करने वाला पहले कार्ड पलटता है (Live Action Rule 149) |
| river पर all-in bet call होती है | Cash: all-in bettor last aggressor के तौर पर पहले दिखाता है। टूर्नामेंट: पहले दिखाने का कोई क्रम ही नहीं — TDA 2024 Rule 16 के तहत हर हैंड एक साथ खुलती है और ==r:यहाँ कोई muck नहीं कर सकता== |
| कई all-in से कई side pot | हर pot अलग से सुलझाया जाता है। टूर्नामेंट: शामिल हर हैंड table होती है। Cash: pot का कोई भी हिस्सा जीतने के लिए खिलाड़ी को अपने कार्ड दिखाने होते हैं, जब तक कि उसकी हैंड ही इकलौती live हैंड न बची हो (WSOP Live Action Rule 143) |

</div>

एक बारीकी: अगर **side pot** है (बाक़ी खिलाड़ियों के पास chips हैं और वे bet करते रहते हैं), तो side pot पहले दिया जाता है और फिर main pot। यह **payout का क्रम** है। टूर्नामेंट में इसका कार्ड खुलने के वक़्त से कोई लेना-देना नहीं — all-in खिलाड़ी की हैंड उसी पल face-up हो चुकी होती है जब आगे betting मुमकिन नहीं रहती; TDA 2024 में Rule 16 का illustration साफ़ कहता है: all-in की हैंड पलटने से पहले side pot बँटने का इंतज़ार *न* करें। WSOP Live Action नियमों वाले cash game में दिखाने का क्रम pots के हिसाब से चलता है: पहले side-pot वाले खिलाड़ी, फिर वह खिलाड़ी जो केवल main pot के लिए all-in है (Rule 149)।

जब खिलाड़ी all-in हों तो side pot कैसे बनते और चुकाए जाते हैं, इसके लिए देखें [all-in नियम और side pots](/hi/blog/holdem-all-in-rules); बँटे हुए pot के लिए split pot और chop नियम देखें।

---

## "Cards speak" नियम क्या है?

![Cards speak नियम इन्फोग्राफ़िक — 8♠ 9♣ 10♥ J♦ Q♠ बोर्ड queen-high straight बनाता है, और showdown पर कार्ड ख़ुद अपनी बात कहते हैं](/images/holdem-showdown-cards-speak.webp)

"Cards speak" का मतलब है ==खिलाड़ी चाहे जो कहें, सबसे अच्छी हैंड ही जीतती है==।

अगर कोई खिलाड़ी अपनी हैंड ग़लत पढ़ ले और कहे "मेरे पास pair है", जबकि असल में उसके पास straight है — तो straight जीतता है। dealer कार्ड पढ़ता है और सबसे अच्छी दिखाई गई हैंड को pot देता है।

Face-down कार्ड अपने आप dead नहीं होते। TDA 2024 Rule 14 में हैंड 100% identifiable और retrievable हो तो floor उसे table कर सकता है; muck में मिल जाने या निश्चित पहचान/वापसी न रहने पर dead। Dealer को पहले हैंड पढ़ने दें।

असली हालात: आपके पास J♥ 10♥ है, बोर्ड Q♥ 9♥ 8♥ 2♣ 5♦ है। आपके पास queen-high straight flush है (Q-J-10-9-8 पान में)। प्रतिद्वंद्वी K♣ Q♦ दिखाता है (queens का एक pair)। आप बहुत बड़े अंतर से जीतते हैं। सिर्फ़ उसकी queen देख कर muck मत कर दें।

---

## पोकर में slow rolling क्या है?

Slow rolling यानी ==जब आपको पता हो कि आप जीत चुके हैं, तब जान-बूझ कर एक बहुत मज़बूत हैंड दिखाने में देर लगाना==।

आपके पास nuts है। प्रतिद्वंद्वी एक मज़बूत हैंड दिखाता है। आप रुकते हैं, सोचने का नाटक करते हैं, धीरे-धीरे अपने कार्ड झाँकते हैं, सबको इंतज़ार करवाते हैं — फिर जीतने वाली हैंड पलट देते हैं। TDA और WSOP की टूर्नामेंट rulebooks में इसे नाम लेकर मना करने वाला कोई नियम नहीं है, पर इसे सुरक्षा भी नहीं मिलती: नाटक करके प्रतिद्वंद्वी को चिढ़ाना (WSOP Tournament Rule 47) और खेल में लगातार देरी करना (TDA 2024 Rule 70), दोनों पर penalty लग सकती है। और यह सर्वत्र नापसंद है।

![पोकर में slow rolling — एक खिलाड़ी जान-बूझ कर जीतने वाली हैंड दिखाने में देर लगाता है और बाक़ी खिलाड़ी झुँझला जाते हैं](/images/holdem-showdown-slow-roll.webp)

==r:पोकर टेबल पर दुश्मन बनाने का सबसे तेज़ तरीक़ा slow rolling है।== इसे जान-बूझ कर जीत रगड़ने के तौर पर लिया जाता है। अनकहा नियम: अगर आपके पास सबसे अच्छी मुमकिन हैंड है, तो उसे तुरंत पलट दें। slow rolling का कोई रणनीतिक फ़ायदा नहीं है। इसका इकलौता नतीजा है तनाव।

इसे **tanking** से अलग समझें — किसी मुश्किल फ़ैसले के लिए वाजिब तौर पर वक़्त लेना। वह मंज़ूर है, बल्कि इज़्ज़त पाता है। nuts के साथ slow roll करना अलग बात है।

---

## अगर बिना showdown जीत जाएँ तो क्या hole कार्ड दिखाने ज़रूरी हैं?

नहीं। ==g:अगर showdown से पहले सब fold कर जाएँ, तो आप एक भी कार्ड दिखाए बिना pot जीत लेते हैं।==

चाहें तो दिखा सकते हैं — कुछ खिलाड़ी प्रतिद्वंद्वी को tilt करने के लिए bluff दिखाते हैं, या tight image बनाने के लिए मज़बूत हैंड दिखाते हैं। पर जब बाक़ी सब के fold करने से आप जीतते हैं, तब आप कभी अपने कार्ड दिखाने के लिए बाध्य नहीं होते।

यही एक वजह है कि पोकर दिलचस्प है। हमेशा सबसे अच्छी हैंड नहीं जीतती — आख़िर तक टिका रहने वाला जीतता है।

---

## Showdown शिष्टाचार — शुरुआती क्या ग़लत करते हैं

ग़लत ढंग से सँभाले गए showdown जितनी जल्दी कोई और चीज़ टेबल का माहौल नहीं बिगाड़ती। इसमें ज़्यादातर नियमों की बात नहीं — ये वो आदतें हैं जो नए खिलाड़ी को किसी ने सिखाई ही नहीं। ये रहीं वो चार जिन्हें मैं सबसे ज़्यादा बार सुधारता हूँ।

### ग़लती 1: call करने वाले के पहले दिखाने का इंतज़ार करना

आपने river पर bet किया। किसी ने call किया। आप ठिठक कर उसके दिखाने का इंतज़ार करते हैं। यह उल्टा है। ==आप पहले दिखाते हैं — आप ही last aggressor थे।== इंतज़ार करना slow rolling जैसा लगता है, भले ही न हो — मैंने एक दोस्ताना गेम को पूरे एक orbit तक ठंडा पड़ते देखा है, क्योंकि एक खिलाड़ी जीतने वाली हैंड पलटने से पहले caller को बार-बार तड़पाता रहा।

### ग़लती 2: dealer के हैंड पढ़ने से पहले muck कर देना

आपको लगभग यक़ीन है कि आप हार गए। आप अपने कार्ड face-down muck की ओर सरका देते हैं। Dealer उन्हें खींच लेता है। पता चलता है कि जीतने वाली हैंड आपकी थी। ==TDA 2024 Rule 14== के तहत dealer के muck में धकेलते ही हैंड dead हो जाती है, और लगभग तय है कि pot आपके हाथ से निकल गया — पर हार मानने से पहले floor को बुलाएँ: WSOP टूर्नामेंट नियम management को ऐसी हैंड वापस निकालने देते हैं जो अब भी साफ़ पहचानी जा सके, और अगर muck dealer की ग़लती या ग़लत जानकारी से हुआ हो तो अतिरिक्त कोशिश की जाती है (WSOP Tournament Rules 109 और 110)। ==पक्का हुए बिना muck न करें।== Dealer को दोनों हैंड पढ़ने दें।

### ग़लती 3: हर call की गई हैंड देखने की ज़िद करना

ज़्यादातर cardrooms में आप dealer से muck हुई हैंड खुलवाने को कह सकते हैं। टूर्नामेंट में यह हक़ कसकर बँधा है: आप तभी माँग सकते हैं जब आपने अपने कार्ड table किए हों या अब भी आपके पास हों, और face-down muck करने वाला खिलाड़ी यह हक़ पूरी तरह खो देता है (==TDA 2024 Rule 18-A==)। उसके आगे सिर्फ़ एक माँग की गारंटी है: last aggressor की हैंड, जिसे देखने की caller ने क़ीमत चुकाई। बाक़ी सब — कभी call न हुई हैंड या बिना bet वाला river भी — director के विवेक पर है, जिसका मतलब इनकार नहीं है (==TDA 2024 Rule 18-B==)। Fold की हुई हैंड muck में जाते ही dead है, और सिर्फ़ वही हैंड वापस निकाली जा सकती है जो अब भी साफ़ पहचानी जा सके (WSOP Tournament Rule 109)। यह माँगने का नियम collusion से बचाने के लिए है, जिज्ञासा मिटाने के लिए नहीं, और इसका दुरुपयोग बदतमीज़ी माना जाता है। इसे कम ही इस्तेमाल करें।

### ग़लती 4: यह न जानना कि आप जल्दी दिखा सकते हैं

Showdown पर — सारी betting पूरी हो जाने के बाद — अपनी बारी आने से पहले हैंड पलटने के ख़िलाफ़ कोई नियम नहीं है। जब तक हैंड live है और कोई action बाक़ी है, तब उल्टा लागू होता है: कार्ड दिखाने पर ==WSOP Tournament Rule 117== के तहत penalty लगती है (Live Action rulebook अपनी धाराओं को अलग नंबर देती है); हैंड अपने आप dead नहीं होती। ==g:अगर आपके पास nuts या बहुत मज़बूत हैंड है, तो तुरंत दिखाएँ।== बाक़ी खिलाड़ी इसकी क़द्र करते हैं। इससे गेम तेज़ चलता है। और यह slow rolling का ठीक उल्टा है।

---

:::readnext[पढ़ते रहें]
/hi/blog/holdem-game-order | खेल का क्रम | /images/blog-holdem-game-flow.webp
/hi/blog/holdem-all-in-rules | All-In नियम और side pots | /images/holdem-all-in-rules-hero.webp
:::

## अक्सर पूछे जाने वाले सवाल

**Q. पोकर showdown पर कार्ड पहले कौन दिखाता है?**

A. जब कोई all-in न हो, तो आख़िरी betting राउंड में सबसे आख़िर में aggressive action (bet या raise) लेने वाले खिलाड़ी को पहले दिखाना होता है। अगर आख़िरी राउंड में सब ने check किया, तो dealer button के बाईं ओर का पहला active खिलाड़ी पहले दिखाता है, और क्रम clockwise चलता है। All-in वाले pot का अपना नियम है — नीचे all-in वाला सवाल देखें।

**Q. अगर showdown पर call मिल जाए तो क्या कार्ड दिखाना ज़रूरी है?**

A. हाँ — अगर river पर आख़िरी bet या raise आपकी थी, तो call मिलने पर आप पहले दिखाते हैं; बचने का इकलौता रास्ता है muck करके pot छोड़ देना, जिस पर WSOP टूर्नामेंट penalty लगाते हैं (WSOP Tournament Rule 72)। एक हालत में दिखाना ही नहीं पड़ता: अगर caller पहले face down muck कर दे और कोई और live हैंड न बचे, तो आपकी हैंड बिना दिखाए pot जीत जाती है (==TDA 2024 Rule 17-B==; WSOP Rule 72 भी pot इकलौती बची live हैंड को देता है)। अगर आपने किसी और की bet call की, तो उसकी हैंड देखकर हारने पर आप face-down muck कर सकते हैं। अपवाद है टूर्नामेंट का all-in: ==TDA 2024 Rule 16== के तहत तब caller को भी table करना होता है। और टूर्नामेंट में माँगने का पक्का हक़ उसी का है जिसने **river bet call की** — बशर्ते उसने अपने कार्ड table किए हों या अब भी उसके पास हों — और यह सिर्फ़ last aggressor की हैंड पर लागू होता है, जिसे देखने की उसने क़ीमत चुकाई (==TDA 2024 Rule 18==)। Face-down muck करने वाले खिलाड़ी को माँगने का कोई हक़ नहीं, और बाक़ी हर माँग director के विवेक पर है।

**Q. क्या showdown पर बिना दिखाए muck कर सकते हैं?**

A. हाँ — पर muck करने का मतलब pot छोड़ना है, इसलिए ऐसा तभी करें जब हार पक्की हो। जीतने वाले की हैंड दिख जाने के बाद हारने वाले खिलाड़ी face-down muck कर सकते हैं। अपवाद टूर्नामेंट नियम हैं: river पर आख़िरी bet आपने की और call मिला, तो पैसे देकर देखने वाला caller आपकी हैंड माँग सकता है, बशर्ते उसके अपने कार्ड अब भी उसके पास हों या table हों (TDA 2024 Rule 18-B; WSOP cash game में collusion के संदेह के बिना नहीं); और एक बार कोई खिलाड़ी all-in हो और सारी betting action पूरी हो जाए, तो main और side pot की हर हैंड table करनी होती है — कोई muck नहीं कर सकता (TDA 2024 Rule 16)। संदेह हो तो dealer पढ़ने से पहले muck न करें।

**Q. पोकर में slow rolling क्या है और यह बुरी बात क्यों है?**

A. Slow rolling यानी एक जीतने वाली हैंड, जिसे आप पहले से सबसे अच्छी जानते हैं, दिखाने में जान-बूझ कर देर लगाना। TDA और WSOP की टूर्नामेंट rulebooks इसे नाम लेकर मना नहीं करतीं, पर यह सर्वत्र नापसंद है, क्योंकि इसे प्रतिद्वंद्वी को जान-बूझ कर बेइज़्ज़त करने के तौर पर देखा जाता है — और चिढ़ाने या खेल में लगातार देरी पर penalty लग सकती है (WSOP Tournament Rule 47 · TDA 2024 Rule 70)। अगर आपके पास nuts या साफ़ जीतने वाली हैंड है, तो अपने कार्ड तुरंत पलट दें। आप कितनी जल्दी दिखाते हैं, यह टेबल पर आपके चरित्र के बारे में बहुत कुछ कहता है।

**Q. All-in हालात में कार्ड पहले कौन दिखाता है?**

A. टूर्नामेंट में, जब कोई खिलाड़ी all-in हो और आगे betting मुमकिन न हो, तो सारी betting action पूरी होते ही उस pot की सभी हैंड बिना देर table होती हैं — बचे हुए community कार्ड बाँटे जाने से पहले (TDA 2024 Rule 16)। Side pot हो तो वह पहले दिया जाता है और main pot उसके बाद — पर all-in खिलाड़ी के कार्ड उससे बहुत पहले face-up हो चुके होते हैं। No-Limit cash game में, अगर betting river से पहले ख़त्म हुई, तो WSOP Live Action नियमों में all-in push करने वाला पहले कार्ड पलटता है; किसी भी cash game में side-pot वाले खिलाड़ी उस हर खिलाड़ी से पहले दिखाते हैं जो केवल main pot के लिए all-in है (Rule 149)। जब तक बाक़ी खिलाड़ियों के पास chips हैं और वे bet कर सकते हैं, सब कुछ face-down रहता है।

**Q. पोकर में "cards speak" का क्या मतलब है?**

A. Cards speak में tabled cards हैंड तय करते हैं। Face-down कार्ड अपने आप dead नहीं: 100% identifiable और retrievable हों तो floor table कर सकता है। Muck में मिलें या पहचान/वापसी निश्चित न रहे तो dead—dealer पढ़ने से पहले muck न करें।

**Q. अगर बिना showdown जीत जाएँ तो क्या कार्ड दिखाने ज़रूरी हैं?**

A. नहीं। अगर river showdown से पहले बाक़ी सब fold कर जाएँ, तो आप तुरंत pot जीत लेते हैं और आपको कभी अपने hole कार्ड दिखाने की ज़रूरत नहीं। दिखाना वैकल्पिक है — कुछ खिलाड़ी प्रतिद्वंद्वी को छेड़ने के लिए bluff पलट देते हैं, पर बिना मुक़ाबले जीती हुई हैंड दिखाने के लिए आप कभी बाध्य नहीं होते।

---

## संबंधित लेख

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/hi/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">शुरुआती के लिए टेक्सस होल्डम नियम</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">पूरे नियम — blinds से showdown तक</div>
  </a>
</div>
`.trim(),
};
