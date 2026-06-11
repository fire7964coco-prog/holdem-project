import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament-vs-cash-game",
  title: "Poker tournament या cash game: शुरुआती क्या खेलें?",
  seoTitle: "आपकी chips हमेशा पैसा नहीं होतीं — Tournament या cash game?",
  desc: "Cash game और tournament दोनों Texas Hold'em जैसे दिखते हैं, लेकिन chip value, blinds, bankroll, variance और ICM pressure बिल्कुल अलग होते हैं। शुरुआती के लिए साफ़ तुलना।",
  tldr: "Cash game में chips असली पैसे जैसी होती हैं और blinds आमतौर पर fixed रहते हैं। Tournament में chips आपकी tournament life हैं, blinds बढ़ते हैं और payout आपकी final position पर निर्भर करता है।",
  category: "토너먼트",
  date: "2026-06-11",
  updated: "2026-06-11",
  hideSummaryImageSlot: true,
  readTime: "16 मिनट",
  emoji: "🏆",
  tags: [
    "poker tournament या cash game",
    "cash game poker",
    "poker tournament beginners",
    "पोकर टूर्नामेंट",
    "poker bankroll management",
    "ICM poker",
    "bubble poker",
    "texas holdem beginners",
  ],
  content: `
लगभग हर नया Hold'em खिलाड़ी एक समय पर यही सवाल पूछता है:

*"मुझे ==cash game== खेलना चाहिए या ==tournament==?"*

ऊपर से दोनों एक जैसे लगते हैं। आपको 2 hole cards मिलते हैं, 5 community cards खुलते हैं, और preflop से river तक 4 betting rounds होते हैं। लेकिन strategy के हिसाब से ये लगभग दो अलग दुनिया हैं। Cash game में आपकी chips पैसा हैं। Tournament में आपकी chips आपकी tournament life हैं।

यह guide ==poker tournament vs cash game== को शुरुआती के नज़रिए से समझाती है: chip value, blind structure, time commitment, variance, bankroll, ICM, stack depth और कौन-सा format पहले खेलना चाहिए।

![Texas Hold'em टेबल जहाँ tournament और cash game अलग chip value और strategy बनाते हैं](/images/tournament-table-action.webp "Poker tournament और cash game comparison")

### 15 सेकंड का जवाब

- **Cash game:** chips real money जैसी होती हैं, blinds fixed रहते हैं, और आप जब चाहें उठ सकते हैं।
- **Tournament:** आप एक buy-in देते हैं, tournament chips मिलती हैं, और bust या win होने तक खेलते हैं।
- **Cash game fundamentals जल्दी सिखाता है** क्योंकि stacks गहरे होते हैं और गलतियाँ साफ़ दिखती हैं।
- **Tournament में बड़ा upside होता है**, लेकिन variance ज़्यादा, sessions लंबे और ICM pressure कड़ा होता है।
- **ज़्यादातर beginners के लिए cash game साफ़ starting point है।** Basics automatic हो जाएँ, फिर छोटे tournaments जोड़ें।

---

## Cash game और tournament का मुख्य अंतर

सबसे सरल बात:

**Cash game में आप टेबल पर real money के साथ profitable decisions लेते हैं। Tournament में आप prize तक पहुँचने के लिए survive करते हैं।**

Cash game में अगर आप $200 buy-in करते हैं, तो सामने की chips $200 represent करती हैं। Stack $450 हो जाए तो आप $450 लेकर उठ सकते हैं। $120 बचे तो वही आपका पैसा है। हर chip की direct cash value है।

Tournament में आप $100 buy-in देकर 20,000 chips पा सकते हैं। वे $20,000 नहीं हैं, और event के बीच उन्हें cash out नहीं कर सकते। वे इसलिए मायने रखती हैं क्योंकि उनसे आप survive करते हैं, pressure डालते हैं और payout ladder चढ़ते हैं।

टेबल पर फर्क ऐसे महसूस होता है: $1/$2 cash game में river पर one pair के साथ $60 call करना मतलब अभी $60 risk करना। Call गलत हो तो आप reload कर सकते हैं या अगले दिन खेल सकते हैं। $50 tournament में bubble के पास 18BB all-in call पूरी event life खत्म कर सकता है।

| चीज़ | Cash game | Tournament |
|------|------|------|
| Chip value | Real money | Tournament equity |
| Entry | चुने हुए amount से buy-in | Fixed buy-in |
| बाहर निकलना | जब चाहें | Bust या finish तक |
| Blinds | आमतौर पर fixed | समय के साथ बढ़ते हैं |
| Goal | Long-term EV maximize करना | Survive करके payout चढ़ना |
| Key strategy | Deep-stack postflop | Stack pressure, ICM, bubble play |

---

## Tournament chips cash नहीं होतीं

यह सबसे ज़रूरी अंतर है।

Cash game में stack double करना पैसा double करना है। $200 से शुरू करके $200 जीतें तो आपके पास $400 हैं। इसलिए cash decisions सीधे Chip EV से देखे जा सकते हैं: *यह call profitable है? यह bet long term पैसा बना रही है?*

Tournament में stack double करना **real-money equity** double करना नहीं है। Payout finishing position पर आधारित है, उस समय आपकी exact chip count पर नहीं।

10-player tournament सोचिए, हर कोई $100 देता है।

| Finish | Prize |
|------|------|
| 1st | $500 |
| 2nd | $300 |
| 3rd | $200 |
| 4th-10th | $0 |

अगर आपकी chips 10% से 20% हो जाती हैं, money जीतने की chance बढ़ती है, लेकिन prize equity सीधी double नहीं होती। Bubble पर सारी chips खो दें तो tournament equity तुरंत zero हो जाती है।

![Tournament chip stacks ICM में prize money में one-to-one convert नहीं होते](/images/icm-chips-not-money-real.webp "Tournament chip value और ICM in poker")

---

## Fixed blinds या rising blinds?

$1/$2 cash game में blinds $1/$2 ही रहते हैं। एक घंटे बाद भी, तीन घंटे बाद भी। आप better spots का wait कर सकते हैं, जरूरत पड़े तो reload कर सकते हैं और deep stack खेलते रहते हैं।

Tournament में blinds level के साथ बढ़ते हैं। जो stack शुरुआत में 100BB था, वह बिना एक hand हारे बाद में 25BB हो सकता है। फिर 12BB। आखिर में सिर्फ wait करना भी महँगा हो जाता है।

| Stage | Cash game | Tournament |
|------|------|------|
| Early | Deep stacks common रहते हैं | ज़्यादातर player deep शुरू करते हैं |
| Middle | Blind pressure stable | Average stack छोटा होता है |
| Late | Reload या leave कर सकते हैं | Short-stack all-ins common |
| Pressure | कम और steady | हर level पर बढ़ता है |

इसलिए tournament में "सिर्फ premium hand का wait करो" हमेशा काफी नहीं। Rising blinds आपको steal, defend, reshove और controlled risks लेने पर मजबूर करते हैं।

---

## Time और flexibility

Cash game flexible है। आप 30 मिनट खेल सकते हैं, दो घंटे बैठ सकते हैं या table खराब लगे तो उठ सकते हैं। अगर tired, tilted या busy हैं, तो बस game छोड़ सकते हैं।

Tournament अलग है। Register करने के बाद end time uncertain होता है। आप eliminate होने, ITM पहुँचने, final table तक जाने या जीतने तक खेलते हैं। छोटा local event भी कई घंटे ले सकता है। बड़ा MTT पूरा दिन खा सकता है।

| Player situation | Better fit |
|------|------|
| Free time unpredictable है | Cash game |
| Short sessions चाहिए | Cash game |
| कई घंटे focus कर सकते हैं | Tournament |
| Ranking, pressure, trophy पसंद है | Tournament |
| अचानक जाना पड़ सकता है | Cash game |

---

## Profit structure और variance

Cash game results आमतौर पर **bb/100** या hourly win rate से measure होते हैं। कोई player बड़ी sample में 100 hands पर 5 big blinds जीतता है, तो वह stable edge है। Feedback tournament से तेज़ और साफ़ होता है।

Tournament results **ROI**, cash rate, final tables और big scores से measure होते हैं। Winning tournament player 20 या 30 events तक cash न करे, फिर एक deep run सब cover कर दे।

| Metric | Cash game | Tournament |
|------|------|------|
| Result unit | bb/100 या hourly | ROI और finishing position |
| Variance | Medium | बहुत high |
| Big score chance | Lower | Higher |
| Skill feedback | Faster | Slower |
| Mental challenge | Session by session | लंबे no-cash stretches |

Variance को skill समझने की गलती न करें। एक big score आपको crusher नहीं बनाता। एक bad cash session यह नहीं कहता कि आप खेल नहीं सकते।

---

## Bankroll: tournaments को बड़ा cushion चाहिए

Bankroll management दोनों formats में ज़रूरी है, लेकिन tournament में swings ज़्यादा होते हैं इसलिए cushion बड़ा चाहिए।

Cash game के लिए beginner rule लगभग **20-40 buy-ins** है। अगर आपका normal buy-in $200 है, तो conservative bankroll करीब $4,000-$8,000 होगा।

Tournament में कई players **50-100+ buy-ins** रखते हैं; बड़े MTT fields और भी ज़्यादा मांग सकते हैं। $50 tournament $200 cash buy-in से सस्ता दिख सकता है, पर variance बहुत कठोर हो सकती है।

| Format | Beginner bankroll guide | क्यों |
|------|------|------|
| Cash game | 20-40 buy-ins | Lower variance, reload possible |
| Small Sit & Go | 40-60 buy-ins | Payout variance higher |
| Large MTT | 100+ buy-ins | Long no-cash stretches normal |

Bankroll सिर्फ पैसा नहीं है। यह decision-making बचाता है। Under-rolled होने पर हर all-in personal लगता है, और strategy की जगह डर ले लेता है।

---

## ICM: cash game में न होने वाला tournament concept

Cash game और tournament के बीच सबसे बड़ा strategic split ==ICM== है।

ICM यानी **Independent Chip Model**। यह stack sizes, remaining players और payout structure के आधार पर tournament stack की real-money value estimate करता है। Cash game में ICM की ज़रूरत नहीं क्योंकि chips पहले से money हैं।

ICM bubble और final table पर सबसे ज़्यादा मायने रखता है। मान लीजिए आप bubble पर medium stack हैं। कोई player all-in shove करता है, आपके पास AKo है। Cash game में pot odds और equity ठीक हों तो call कर सकते हैं। Tournament में hand हारना $0 के साथ bust होना हो सकता है, जबकि जीतना आपकी payout equity double नहीं करता।

| Decision factor | Cash game | Tournament |
|------|------|------|
| Call logic | Pot odds + equity | Pot odds + equity + ICM |
| Stack खोना | एक buy-in खोना | Elimination |
| Strong hands की value | ज़्यादा stable | Payout pressure से बदलती है |
| Bubble pressure | नहीं | बहुत बड़ा |

![Tournament bubble table जहाँ ICM pressure all-in call को cash game से कठिन बनाता है](/images/holdem-bubble-table.webp "Tournament bubble pressure और ICM decision")

---

## Deep stack vs short stack push/fold

Cash game आमतौर पर deep-stack skill को reward करता है। आप अक्सर 100BB के आसपास खेलते हैं, इसलिए flop, turn और river decisions बहुत मायने रखते हैं। Value bet, bluff, board texture, position और opponent ranges समझने पड़ते हैं।

Tournament deep शुरू होता है लेकिन अक्सर short-stack poker बन जाता है। 25BB, 15BB या 10BB पर preflop decisions ज़्यादा अहम हो जाते हैं। तीन streets plan करने के बजाय आप open, reshove, call off या fold चुनते हैं।

| Stack depth | ज़्यादा common | Main skill |
|------|------|------|
| 100BB+ | Cash game | Postflop play और value betting |
| 40-60BB | Early/mid tournament | Open ranges और 3-bet response |
| 15-25BB | Mid/late tournament | Resteals और shove pressure |
| 10BB या कम | Late tournament | Push/fold discipline |

---

## Beginners पहले क्या खेलें?

ज़्यादातर beginners के लिए **cash game बेहतर first classroom है**।

इसलिए नहीं कि cash game आसान है। आसान नहीं है। लेकिन यह साफ़ repetition देता है। Blinds stable रहते हैं, stacks गहरे होते हैं, और आप call, raise या value bet review कर सकते हैं बिना ICM, pay jumps और blind pressure को साथ में खोलने के।

Tournament भी अच्छे हैं अगर आपको competition पसंद है और variance संभाल सकते हैं। बस एक deep run को पूरी strategy सही होने का proof न मानें।

| Goal | Better start |
|------|------|
| Fundamentals जल्दी सीखना | Cash game |
| Postflop decisions सुधारना | Cash game |
| Scheduled event खेलना | Tournament |
| Big score chase करना | Tournament |
| Short sessions चाहिए | Cash game |
| ICM और bubble pressure सीखना | Tournament |

अगर आप बिल्कुल नए हैं, पहले [Texas Hold'em hand कैसे चलता है](/hi/blog/holdem-game-order) और [poker hand rankings](/hi/blog/holdem-hand-rankings) सीखें। Format चुनना तब आसान होता है जब rules automatic हो जाएँ।

---

## Live poker room में पहले क्या पूछें?

किसी poker room या local event में बैठने से पहले format पूछें। वही table, वही chips और वही cards अलग structure में बिल्कुल अलग decisions बना सकते हैं।

| सवाल | क्यों ज़रूरी |
|------|------|
| यह cash game है या tournament? | Chip value और strategy बदलती है |
| Blinds या blind levels क्या हैं? | Stack pressure तय करता है |
| Re-entry, rebuy या add-on है? | Total cost और risk बदलता है |
| Payout structure कैसा है? | Bubble और ICM decisions बदलते हैं |
| Event आमतौर पर कितना लंबा है? | Time-pressure mistakes रोकता है |

अगर structure समझा नहीं सकते, buy-in मत करें। पहले पूछें, फिर खेलें।

---

## FAQ

**Q. क्या poker tournaments cash games से कठिन हैं?**

A. वे अलग तरीके से कठिन हैं। Cash game में deep postflop skill चाहिए क्योंकि आप अक्सर 100BB खेलते हैं। Tournament में rising blinds, short stacks, ICM और bubble pressure जुड़ते हैं।

**Q. क्या tournaments cash games से ज़्यादा profitable हैं?**

A. Tournaments बड़े single scores दे सकते हैं, लेकिन variance भी बहुत ज़्यादा होती है। Cash game समय के साथ अधिक stable results देता है।

**Q. Beginner को cash game शुरू करना चाहिए या tournament?**

A. ज़्यादातर beginners को low-stakes cash game या बहुत छोटे tournaments से शुरू करना चाहिए। Fundamentals जल्दी सीखने हैं तो cash game ज़्यादा साफ़ है।

**Q. क्या ICM cash game में important है?**

A. नहीं। ICM tournament के लिए है क्योंकि tournament chips direct money नहीं हैं और payout finishing position पर निर्भर करता है। Cash game में chips पहले से पैसा हैं।

**Q. क्या re-entry tournament cash game जैसा है?**

A. नहीं। Re-entry सिर्फ कुछ समय तक दोबारा entry देता है। Chips फिर भी cash नहीं हैं, blinds बढ़ते हैं और बाद में ICM मायने रखता है।

**Q. Cash game और tournament के लिए कितने buy-ins चाहिए?**

A. Simple rule: cash game के लिए 20-40 buy-ins और tournament के लिए 50-100+ buy-ins। बड़े MTTs को और ज़्यादा चाहिए हो सकता है।

---

## याद रखने वाली 3 बातें

1. **Cash game chips पैसा हैं; tournament chips survival equity हैं।**
2. **Cash game fundamentals जल्दी सिखाता है; tournament pressure बेहतर test करता है।**
3. **Bankroll और time मायने रखते हैं।** अगर long sessions या long downswings नहीं झेल सकते, cash game बेहतर शुरुआत है।

पहले cash fundamentals मजबूत करें, फिर rising blinds, ICM pressure और deep run की emotional swing के लिए तैयार होने पर tournaments जोड़ें।
`.trim(),
};
