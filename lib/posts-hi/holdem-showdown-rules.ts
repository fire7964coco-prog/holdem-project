import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "टेक्सस होल्डम showdown नियम: कार्ड पहले कौन दिखाता है, mucking और slow rolling",
  seoTitle: "कार्ड पहले कौन खोलता है? — Holdem showdown नियम",
  desc: "Showdown पर कार्ड पहले कौन दिखाता है? बिना दिखाए muck कर सकते हैं? last aggressor, cards speak, slow roll और all-in — सारे showdown नियम आसान भाषा में।",
  tldr: "Non-all-in टूर्नामेंट showdown में river का last aggressor पहले दिखाता है; river check through हो तो button के बाएँ पहला active खिलाड़ी। कोई all-in हो और betting पूरी हो जाए तो सभी live हैंड दिखानी होती हैं। अपने कार्ड रखे या table किए river caller को last aggressor की हैंड माँगने का हक़ है। Cash game में house rule लागू होता है।",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-09-22",
  masterUpdated: "2026-07-12",
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
| non-all-in टूर्नामेंट; river पर bet या raise | ==सबसे आख़िर में bet या raise करने वाला== पहले दिखाता है |
| river पर सब ने check किया | dealer button के बाईं ओर का पहला active खिलाड़ी पहले दिखाता है |
| टूर्नामेंट; all-in और सारी betting पूरी | runout से पहले सभी live हैंड तुरंत face-up table; muck नहीं |

</div>

![टेक्सस होल्डम में showdown क्रम का इन्फोग्राफ़िक — J♥ 9♠ 4♦ 2♠ K♥ बोर्ड पर पहले कौन दिखाता है](/images/holdem-showdown-who-shows-first.webp)

==g:non-all-in टूर्नामेंट में "last aggressor" मुख्य है।== River bet call हो तो bettor पहले दिखाता है। अपने कार्ड रखे या table किए river caller को last aggressor की हैंड माँगने का हक़ है; cash game में house rule लागू होता है।

---

## क्या showdown पर बिना दिखाए muck कर सकते हैं?

हाँ — **अगर आप हार गए हैं**।

एक बार last aggressor अपनी हैंड दिखा दे, तो बाक़ी खिलाड़ी या तो:
- **अपनी हैंड दिखा सकते हैं** अगर उन्हें लगे कि वे जीत रहे हैं
- **face-down muck कर सकते हैं** अगर हार पक्की हो—पर अधिकृत hand-viewing request हो सकती है। टूर्नामेंट में कोई all-in हो और betting पूरी हो जाए तो सभी live हैंड तुरंत table करनी होती हैं; muck नहीं (TDA 2024 Rule 16)। Cash game में house rule।

==r:अहम अपवाद:== TDA 2024 Rule 18 में अपने कार्ड रखे या table किए river caller को last aggressor की हैंड देखने का अटूट हक़ है। बाक़ी माँग tournament director के विवेक पर है; face-down muck करने पर caller यह हक़ खो देता है। Cash game में house rule और floor/collusion context लागू होता है। इसे "show one, show all" से न उलझाएँ।

व्यावहारिक नियम: non-all-in टूर्नामेंट में ==last aggressor कार्ड पलटता है—called bluff भी।== अपने कार्ड रखे या table किए river caller को आपकी हैंड माँगने का हक़ है। Cash game में house rule मानें और जीत पक्की जाँचे बिना muck न करें।

---

## जब river पर सब ने check किया — showdown का क्रम

अगर river पर किसी ने bet नहीं किया (सब ने check किया), तो showdown **dealer button के बाईं ओर के पहले active खिलाड़ी** से शुरू होता है और clockwise आगे बढ़ता है।

उदाहरण: button, small blind और big blind river तक पहुँचते हैं। SB check, BB check, Button check करता है। showdown SB से शुरू होता है (button के बाईं ओर का पहला active खिलाड़ी)। SB दिखा या muck कर सकता है। फिर BB। फिर सबसे आख़िर में button।

==g:इस हालत में button सबसे आख़िर में दिखाता है== — जो असल में एक फ़ायदा है। button यह देख सकता है कि कोई उसे हरा रहा है या नहीं, इससे पहले कि वह अपने कार्ड पलटने का फ़ैसला करे।

---

## All-in showdown नियम — क्या all-in खिलाड़ी पहले दिखाता है?

टूर्नामेंट में कोई all-in हो और सारी betting पूरी हो जाए तो board चलाने से पहले सभी live हैंड **तुरंत face-up** table करनी होती हैं (TDA 2024 Rule 16)। Cash game में house rule और WSOP 2026 B149 का अलग क्रम।

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in हालात | showdown नियम |
|----------------|---------------|
| टूर्नामेंट; all-in, बाक़ी call, betting पूरी | runout से पहले सभी live हैंड तुरंत face-up; muck नहीं |
| टूर्नामेंट; river all-in call | सभी live हैंड तुरंत table; first-show order का इंतज़ार नहीं |
| कई all-in और side pot, betting पूरी | सभी live हैंड table; हर pot अलग सुलझे |

</div>

बारीकी: side pot पहले **दिया** जाता है, पर reveal order अलग है। टूर्नामेंट में सारी betting पूरी होने पर सभी live हैंड तुरंत table होती हैं। WSOP 2026 cash B149 में side-pot players पहले; No-Limit betting river से पहले पूरी हो तो all-in player पहले।

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

आपके पास nuts है। प्रतिद्वंद्वी एक मज़बूत हैंड दिखाता है। आप रुकते हैं, सोचने का नाटक करते हैं, धीरे-धीरे अपने कार्ड झाँकते हैं, सबको इंतज़ार करवाते हैं — फिर जीतने वाली हैंड पलट देते हैं। तकनीकी तौर पर वैध। सर्वत्र नापसंद।

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

### ग़लती 1: call करने वाले के पहले दिखाने का इंतज़ार करना

आपने river पर bet किया। किसी ने call किया। आप ठिठक कर उसके दिखाने का इंतज़ार करते हैं। यह उल्टा है। ==आप पहले दिखाते हैं — आप ही last aggressor थे।== इंतज़ार करना slow rolling जैसा लगता है, भले ही न हो।

### ग़लती 2: dealer के हैंड पढ़ने से पहले muck कर देना

आपने कार्ड face-down बढ़ाए। Dealer लेने से पहले, या वे 100% identifiable और retrievable हों, तो floor हैंड table कर सकता है। Muck में मिलने या पहचान अनिश्चित होने पर हैंड dead। ==पक्का हुए बिना muck न करें।==

### ग़लती 3: हर call की गई हैंड देखने की ज़िद करना

टूर्नामेंट में अपने कार्ड रखे या table किए river caller को last aggressor की हैंड माँगने का हक़ है (TDA 2024 Rule 18); बाकी floor decision। Face-down muck से यह अटूट हक़ जाता है। Cash game में house rule; WSOP 2026 B147 इसे floor/collusion context में रखता है।

### ग़लती 4: यह न जानना कि आप जल्दी दिखा सकते हैं

Betting पूरी होने पर showdown में जल्दी table कर सकते हैं। Action बाक़ी रहते कार्ड दिखाने पर ==WSOP Tournament Rules 2026 Rule 117== के तहत penalty मिलेगी; हैंड अपने आप dead नहीं होती। पहले betting पूरी होना पक्का करें।

---

:::readnext[पढ़ते रहें]
/hi/blog/holdem-game-order | खेल का क्रम | /images/blog-holdem-game-flow.webp
/hi/blog/holdem-all-in-rules | All-In नियम और side pots | /images/holdem-all-in-rules-hero.webp
:::

## अक्सर पूछे जाने वाले सवाल

**Q. पोकर showdown पर कार्ड पहले कौन दिखाता है?**

A. non-all-in टूर्नामेंट में final-round last aggressor पहले; check through हो तो button के बाएँ पहला active खिलाड़ी। टूर्नामेंट all-in में betting पूरी होते ही सभी live हैंड table। Cash game में house rule और WSOP 2026 B149 order।

**Q. अगर showdown पर call मिल जाए तो क्या कार्ड दिखाना ज़रूरी है?**

A. non-all-in टूर्नामेंट में river last aggressor call मिलने पर पहले दिखाता है। अपने कार्ड रखे या table किए river caller को उसकी हैंड माँगने का हक़ है (TDA 2024 Rule 18); face-down muck से हक़ जाता है। All-in और cash के नियम अलग हैं।

**Q. क्या showdown पर बिना दिखाए muck कर सकते हैं?**

A. non-all-in showdown में हार पक्की हो तो muck कर सकते हैं, पर authorized hand-viewing request हो सकती है। टूर्नामेंट all-in में betting पूरी होने पर सभी live हैंड table होती हैं। संदेह हो तो dealer पढ़ने से पहले muck न करें।

**Q. पोकर में slow rolling क्या है और यह बुरी बात क्यों है?**

A. Slow rolling यानी एक जीतने वाली हैंड, जिसे आप पहले से सबसे अच्छी जानते हैं, दिखाने में जान-बूझ कर देर लगाना। यह वैध है, पर सर्वत्र नापसंद, क्योंकि इसे प्रतिद्वंद्वी को जान-बूझ कर बेइज़्ज़त करने के तौर पर देखा जाता है। अगर आपके पास nuts या साफ़ जीतने वाली हैंड है, तो अपने कार्ड तुरंत पलट दें। आप कितनी जल्दी दिखाते हैं, यह टेबल पर आपके चरित्र के बारे में बहुत कुछ कहता है।

**Q. All-in हालात में कार्ड पहले कौन दिखाता है?**

A. टूर्नामेंट में side pot betting जारी हो तो all-in भर से सभी हैंड तुरंत नहीं खुलतीं; सारी betting पूरी होने पर सब live हैंड table। WSOP 2026 cash B149 में side-pot players पहले; No-Limit betting river से पहले पूरी हो तो all-in player पहले, वरना river order।

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
