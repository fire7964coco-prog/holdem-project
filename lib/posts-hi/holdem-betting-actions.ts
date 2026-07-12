import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-betting-actions",
  title: "टेक्सस होल्डम betting actions: check, call, raise और fold का मतलब",
  seoTitle: "check, call या fold? — पोकर betting actions और raise नियम",
  desc: "turn आपका है और दिमाग़ ख़ाली हो गया? जानें check, call, raise और fold का मतलब, min-raise नियम, और कितनी बार re-raise कर सकते हैं।",
  tldr: "टेक्सस होल्डम में 5 betting actions हैं: check (मुफ़्त में पास), bet (राउंड खोलना), call (bet बराबर करना), raise (बढ़ाना — minimum raise पिछले bet या raise के बराबर होती है), और fold। check सिर्फ़ तब कर सकते हैं जब उस street पर अभी तक किसी ने bet न किया हो।",
  category: "rules",
  date: "2026-06-14",
  updated: "2026-07-13",
  masterUpdated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "9 min",
  emoji: "🃏",
  tags: [
    "poker betting actions",
    "check kya hota hai poker",
    "call kya hota hai poker",
    "min raise poker niyam",
    "poker me kitni baar raise kar sakte hain",
    "check raise poker",
    "string bet",
  ],
  image: "/images/holdem-betting-actions-hero.webp",
  imageAlt: "टेक्सस होल्डम टेबल जिस पर CHECK, CALL, RAISE, FOLD के chip के ढेर हैं — एक खिलाड़ी अपने hole कार्ड पकड़े अपनी action सोच रहा है",
  content: `
मेरी पहली live session में डीलर ने कहा "action is on you" और मैं जम गया — कई सेकंड की चुप्पी, और पूरी टेबल मुझे घूरती रही।

check? call? raise? मुझे हैंड रैंकिंग तो आती थी। पर ==actions के अपने नियम== मुझे सच में नहीं आते थे — और यही खाई यह गाइड भरती है।

टेक्सस होल्डम में सिर्फ़ ==5 betting actions== हैं, पर उनके इर्द-गिर्द के नियम (check कब legal है, raise कितनी बड़ी होनी चाहिए, कितनी बार re-raise कर सकते हैं) शुरुआती को हफ़्तों उलझाए रखते हैं। अगर आप बिल्कुल नए हैं, तो पहले [टेक्सस होल्डम के पूरे नियमों की गाइड](/hi/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") पर एक नज़र डालें — फिर यहाँ लौटकर action-दर-action नियमों को पढ़ें।

---

### झटपट सारांश

:::stripe
5 | betting actions: check, bet, call, raise, fold
1 BB | No-Limit Hold'em में minimum opening bet
= last raise | minimum re-raise का आकार (increment नियम)
No cap | No-Limit में re-raise पर — जब तक कोई all-in न हो, raise कर सकते हैं
:::

## टेक्सस होल्डम की 5 betting actions कौन-सी हैं?

पोकर टेबल पर आपका हर फ़ैसला इन्हीं पाँच में से एक होता है:

| Action | कब उपलब्ध | chip में लागत |
|--------|---------------|-----------|
| Fold | जब भी action आप पर हो | मुफ़्त — पर pot में डाले हुए chips छोड़ने पड़ते हैं |
| Check | सिर्फ़ तब जब इस राउंड में किसी ने अभी bet न किया हो | मुफ़्त — chips डाले बिना पास करते हैं |
| Call | किसी के bet या raise करने के बाद | आप मौजूदा bet को ठीक-ठीक बराबर करते हैं |
| Bet | राउंड का पहला दांव | आपकी चुनी रकम (minimum = 1 big blind) |
| Raise | किसी के bet करने के बाद | पिछले bet या raise के आकार जितना कम से कम ऊपर |

==all-in== कोई अलग छठी action नहीं है — यह आपके बचे हर chip के साथ किया गया bet, call या raise है। इस पर नीचे और बात।

सबसे अहम नियम जो शुरुआती चूक जाते हैं: ==r:एक बार किसी के bet करने के बाद आप check नहीं कर सकते==। जैसे ही chips अंदर जाते हैं, आपके विकल्प सिमटकर fold, call या raise रह जाते हैं।

---

## पोकर में check क्या होता है?

check का मतलब है: ==g:"मैं पास करता हूँ — मेरी तरफ़ से कोई bet नहीं, पर मैं हैंड में बना हुआ हूँ।"==

इसकी कोई लागत नहीं। live पोकर में इसका इशारा टेबल पर उँगली से थपथपाकर या "check" बोलकर देते हैं। action आपके बाईं ओर के खिलाड़ी को चली जाती है। अगर सब check कर दें, तो अगला community कार्ड बँटता है — या river पर सीधे showdown तक पहुँच जाते हैं।

check करना हार मान लेना नहीं है। आपके कार्ड आपके पास रहते हैं, हर विकल्प खुला रहता है, और आगे क्या होता है यह देखने के लिए आपने कुछ नहीं चुकाया।

---

## पोकर में check कब कर सकते हैं?

आप ठीक दो हालात में check कर सकते हैं:

- **मौजूदा street (flop, turn या river) पर अभी तक किसी ने bet न किया हो**
- **आप preflop में big blind हैं और किसी ने raise नहीं किया** — आपका blind पहले से ही एक live bet गिना जाता है, तो आप check करके flop मुफ़्त में देख सकते हैं

अगर आपके check के बाद कोई bet करता है, तो आपके सामने नया फ़ैसला आता है: fold, call या raise। पहले check करना और फिर विरोधी के bet पर raise करना ==check-raise== कहलाता है — यह टेक्सस होल्डम में पूरी तरह legal है और खेल का एक मानक हथियार है, कोई चालबाज़ी नहीं।

कौन कब action करता है, इसकी street-दर-street पूरी तस्वीर के लिए देखें [टेक्सस होल्डम का खेल क्रम](/hi/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp")।

---

## पोकर में call क्या होता है? (check vs call)

call का मतलब है कि हैंड में बने रहने के लिए आप ==मौजूदा bet को ठीक-ठीक बराबर करते हैं==। कोई $10 bet करता है, आप $10 call करते हैं — न ज़्यादा, न कम।

check vs call शुरुआती की सबसे आम गड़बड़ी है, तो यह रहा साफ़ फ़र्क़:

| | Check | Call |
|-|-------|------|
| कब मौजूद होता है | इस राउंड में किसी ने bet नहीं किया | आपसे पहले किसी ने bet किया है |
| chip में लागत | मुफ़्त | आप मौजूदा bet बराबर करते हैं |
| क्या कहता है | "मैं पास करता हूँ, पर अंदर हूँ" | "मैं जारी रखने के लिए चुकाता हूँ" |

असली उदाहरण: आप flop पर K♠ 8♦ के साथ हैं। किसी ने bet नहीं किया, तो आप ==check== करते हैं। अगला खिलाड़ी $10 bet करता है। अब आपके विकल्प हैं $10 ==call==, ==raise== ($20 या ज़्यादा तक), या ==fold==। check ख़त्म हो गया — जैसे ही bet अंदर गया, वह खिड़की बंद हो गई।

---

## पोकर में fold क्या होता है — क्या किसी भी वक़्त fold कर सकते हैं?

fold करने का मतलब है अपने कार्ड छोड़कर हैंड से निकल जाना। आप कुछ नया नहीं चुकाते, पर ==r:जो chips पहले से डाल चुके हैं वे pot में ही रहते हैं==।

हाँ — जब भी action आप पर हो आप fold कर सकते हैं, कुछ भी bet करने से पहले भी, और तब भी जब check मुफ़्त होता। पर इस आख़िरी बात में एक जाल है: **जब check मुफ़्त हो सकता था तब fold करना बिना वजह हैंड फेंक देना है**। अगर किसी ने bet नहीं किया, तो बस check करें।

live etiquette का एक नियम: ==out of turn== fold न करें। action के आप तक पहुँचने का इंतज़ार करें — जल्दी fold करना अभी सोच रहे खिलाड़ियों को जानकारी दे देता है, और ज़्यादातर cardroom इस पर चेतावनी या जुर्माना देते हैं। fold करना *कब* सही खेल है, यह जानना अपने आप में एक हुनर है।

---

## min-raise क्या है? टेक्सस होल्डम के bet और raise नियम

![पोकर min-raise नियम दिखाती इन्फोग्राफ़िक: $6 के bet पर कम से कम $12 तक raise करना ज़रूरी है, और $6 तक की preflop raise पर min re-raise $10 तक करनी होती है](/images/holdem-betting-actions-min-raise.webp "min-raise नियम — हर raise में कम से कम पिछले bet या raise जितना जोड़ना ज़रूरी है")

No-Limit Hold'em में (यही फ़ॉर्मैट आप लगभग हमेशा खेलेंगे):

- **Minimum bet**: 1 big blind
- **Minimum raise (यानी min-raise)**: कम से कम ==पिछले bet या raise के आकार== जितना ऊपर जोड़ना
- **Maximum**: आपका पूरा stack — यही "no limit" है

दो हल किए हुए उदाहरण:

| Street | अब तक की action | Minimum raise |
|--------|--------------|---------------|
| Flop | खिलाड़ी $6 bet करता है | $6 और → कुल $12 |
| Preflop (blinds $1/$2) | खिलाड़ी $6 तक raise करता है ($2 blind के ऊपर $4 की raise) | $4 और → कुल $10 |

मुख्य बात: min-raise पिछले bet या raise के ==increment== के बराबर होती है, big blind के नहीं। preflop में big blind को opening bet गिना जाता है, इसीलिए सबसे छोटी open-raise 2 big blind तक होती है।

raise के साथ आने वाले दो live पोकर नियम:

1. **chips हिलाने से पहले "raise" बोलें।** "call" बोलकर फिर और chips आगे धकेलना? वह अतिरिक्त हिस्सा ==string bet== है और ज़्यादातर room में डीलर इसे call ठहरा देंगे।
2. **एक ही मूवमेंट।** अगर आप बोलते नहीं, तो आपके chips एक ही आगे की गति में अंदर जाने चाहिए।

*कितना* raise करना चाहिए (2.5x open, 3x 3-bet, board texture के हिसाब से sizing) यह strategy है, नियम नहीं।

---

## पोकर में कितनी बार raise कर सकते हैं?

**No-Limit Hold'em में: कोई cap नहीं**। आप raise कर सकते हैं, आप पर re-raise हो सकती है, और आप फिर raise कर सकते हैं ("re-raise", "raise a raise" — एक ही बात) जब तक किसी के chips ख़त्म न हो जाएँ। raise → 3-bet → 4-bet → 5-bet → all-in एक legal, भले ही डरावना, क्रम है।

फिर भी दो सीमाएँ लागू रहती हैं:

- हर re-raise को ऊपर वाले ==min-raise increment नियम== पर खरा उतरना होगा
- ==r:आप अपनी ही bet पर raise नहीं कर सकते।== अगर आप bet करें और सब बस call कर दें, तो राउंड ख़त्म हो जाता है — आपको फिर से raise तभी मिलता है जब कोई *आप* पर पहले raise करे

**Fixed-Limit** गेम में ज़्यादातर cardroom हर राउंड को एक bet और तीन raise तक सीमित (एक "capped" pot) रखते हैं, जो आम तौर पर सिर्फ़ दो खिलाड़ी बचने पर हट जाता है — house rules अलग-अलग होते हैं, तो डीलर से पूछ लें।

---

## all-in जाने का क्या मतलब है?

all-in का मतलब है अपने ==सारे बचे chips== bet कर देना। जब भी action आप पर हो आप यह कर सकते हैं — bet, call या raise के रूप में।

अगर आपका all-in मौजूदा bet से *छोटा* है, तो आप fold नहीं हुए: आप बस अपने योगदान तक सीमित एक ==main pot== के लिए मुक़ाबला करते हैं, जबकि बड़े stack के अतिरिक्त chips एक ==side pot== बनाते हैं जिसे आप नहीं जीत सकते। और जो all-in *पूरी min-raise से कम* हो, वह आम तौर पर उन खिलाड़ियों के लिए raise दोबारा नहीं खोलता जो पहले action कर चुके हैं — एक बारीक नियम जो नियमित खिलाड़ियों तक को चौंका देता है।

पूरी मैकेनिक्स — side pot की गणित, कौन पहले कार्ड दिखाता है, table stakes — [all-in नियम और side pots](/hi/blog/holdem-all-in-rules) में है, और all-in हैंड टाई होने पर क्या होता है यह [showdown नियमों](/hi/blog/holdem-showdown-rules) में मिलेगा।

---

## actions जानना पहला क़दम है — उन्हें चुनना strategy है

यह गाइड बताती है कि हर action *क्या है* और कब *legal है*। कौन-सी चुनें — कब bet करें, कब call फ़ायदेमंद है, कब एक अच्छी हैंड को fold करना पड़े — यह अलग हुनर है:

- पहले अपनी हैंड की कच्ची ताक़त परखें: [पोकर हैंड रैंकिंग](/hi/blog/holdem-hand-rankings)
- हर फ़ैसले का ढाँचा: टेक्सस होल्डम strategy और उसके 5 फ़ैसले
- आपकी सीट सब कुछ क्यों बदल देती है: पोकर की positions

तब तक एक थंब रूल जो शुरुआती के असली पैसे बचाता है: ==अगर कोई हैंड raise करने लायक़ मज़बूत नहीं है, तो fold करना आम तौर पर call से बेहतर है।==

---

## live betting की ग़लतियाँ जो मैं हर हफ़्ते देखता हूँ

मैं हर हफ़्ते एक low-stakes live गेम खेलता हूँ, और वही action की ग़लतियाँ घड़ी की तरह दोहराई जाती हैं:

### ग़लती 1 — जब check कर सकते थे तब call करना

flop पर पहले action करना है, किसी ने bet नहीं किया, और एक नया खिलाड़ी "to call" कहकर chips डाल देता है। यहाँ call करने के लिए कुछ है ही नहीं — वह तो bet है। जब street खुली न हो, तो check करें और कार्ड मुफ़्त में देखें।

### ग़लती 2 — string raise

"मैं call... नहीं, raise!" नहीं। live पोकर में आपकी action उसी पल फ़िक्स हो जाती है जब आप उसे बोलते हैं। मैंने डीलरों को इसे वाक्य के बीच में ही flat call ठहराते इतनी बार देखा है कि गिन नहीं सकता। पहले "raise" बोलें, *फिर* chips हिलाएँ।

### ग़लती 3 — big blind का मुफ़्त flop fold करना

सब limp करते हैं, action big blind तक पहुँचती है, और वह fold कर देता है। यह एक मुफ़्त flop muck में फेंकना है। ==g:अगर किसी ने raise नहीं किया, तो BB check करके तीन कार्ड बिना किसी अतिरिक्त लागत के देख सकता है== — blind पहले से live है। यह हर orbit में सामने आती है।

### ग़लती 4 — चुपचाप एक बड़ा chip

$10 के bet के सामने खिलाड़ी चुपचाप एक $100 chip डाल देता है, बदले में change *और* एक raise की उम्मीद में। ज़्यादातर cardroom में ==one-chip नियम== कहता है कि बिना बोले डाला गया एक बड़ा chip सिर्फ़ call है। raise करना चाहते हैं तो "raise" बोलें।

---

:::readnext[पढ़ते रहें]
/hi/blog/holdem-all-in-rules | all-in नियम और side pots | /images/holdem-all-in-rules-hero.webp
:::

## अक्सर पूछे जाने वाले सवाल

**Q. क्या पोकर में check के बाद raise कर सकते हैं?**

A. हाँ — अगर आपके check के बाद कोई bet करता है, तो action आप तक लौटने पर आप raise कर सकते हैं। यही check-raise है, और यह पूरी तरह legal है। अगर सब आपके पीछे check कर दें, तो raise करने के लिए कोई bet ही नहीं होता, और street बस ख़त्म हो जाती है।

**Q. क्या आप अपनी ही bet पर raise कर सकते हैं?**

A. नहीं। अगर आप bet करें और विरोधी सिर्फ़ call करें, तो आप और नहीं जोड़ सकते — betting राउंड ख़त्म हो जाता है। आप फिर से raise तभी कर सकते हैं जब कोई और खिलाड़ी पहले आप पर raise करे, जिससे action दोबारा खुलती है।

**Q. टेक्सस होल्डम में कितनी बार raise कर सकते हैं?**

A. No-Limit में raise की संख्या पर कोई cap नहीं — जब तक हर raise minimum increment पर खरी उतरे, re-raise तब तक चल सकती है जब तक कोई खिलाड़ी all-in न हो। Fixed-Limit गेम में आम तौर पर राउंड को एक bet और तीन raise तक सीमित रखते हैं।

**Q. क्या out of turn fold कर सकते हैं?**

A. नहीं करना चाहिए। action को घड़ी की दिशा में क्रम से आगे बढ़ना चाहिए, और out-of-turn fold अभी सोच रहे खिलाड़ियों को जानकारी लीक कर देता है। ज़्यादातर cardroom इसे बाध्यकारी मानते हैं और बार-बार करने पर चेतावनी या जुर्माना दे सकते हैं। अपनी दाईं ओर के खिलाड़ी के action करने तक रुकें।

**Q. क्या preflop पर check कर सकते हैं?**

A. सिर्फ़ big blind के तौर पर, और सिर्फ़ तब जब किसी ने raise न किया हो। BB पहले ही एक live bet पोस्ट कर चुका है, तो वह check करके flop मुफ़्त में देख सकता है। preflop की बाक़ी हर position को call, raise या fold करना ही पड़ता है।

**Q. क्या किसी के all-in जाने के बाद raise कर सकते हैं?**

A. यह all-in के आकार पर निर्भर करता है। अगर all-in एक पूरी legal raise है, तो action दोबारा खुलती है और आप re-raise कर सकते हैं। अगर वह पूरी min-raise से *कम* है, तो जो खिलाड़ी पहले action कर चुके हैं वे आम तौर पर सिर्फ़ call या fold कर सकते हैं — ज़्यादातर cardroom में वह छोटा all-in उनके लिए raise दोबारा नहीं खोलता।

**Q. पोकर में string bet क्या है?**

A. कई मूवमेंट में chips डालना, या "call" बोलकर फिर पहले "raise" कहे बिना एक raise जोड़ना। डीलर string bet को असली रकम का call ठहराते हैं। अपनी action बोलकर बताएँ या सारे chips एक ही मूवमेंट में डालें।

**Q. पोकर में limp करने का क्या मतलब है?**

A. limp करना यानी preflop में raise करने के बजाय सिर्फ़ big blind call करके pot में घुसना। यह legal है पर आम तौर पर कमज़ोर खेल है — कुछ ख़ास हालात में यह ठीक भी होता है, पर वे अपवाद हैं।

---

## संबंधित पोस्ट

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/hi/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">शुरुआती के लिए टेक्सस होल्डम के नियम</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">पूरी नियम गाइड — blinds से showdown तक</div>
  </a>
  <a href="/hi/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Game Flow</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">टेक्सस होल्डम का खेल क्रम</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">असली हैंड उदाहरणों के साथ preflop से river तक</div>
  </a>
  <a href="/hi/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Blinds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">small blind vs big blind</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">आप कार्ड देखने से पहले क्यों चुकाते हैं</div>
  </a>
</div>
`.trim(),
};
