import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-betting-actions",
  title: "টেক্সাস হোল্ডেম betting actions: check, call, raise আর fold-এর মানে",
  seoTitle: "check, call নাকি fold? — পোকার betting actions ও raise নিয়ম",
  desc: "turn আপনার হাতে, অথচ মাথা ফাঁকা? জানুন check, call, raise আর fold-এর মানে, min-raise নিয়ম, আর কতবার re-raise করা যায়।",
  tldr: "টেক্সাস হোল্ডেমে 5টি betting action আছে: check (ফ্রি-তে পাস), bet (রাউন্ড শুরু), call (bet সমান করা), raise (বাড়ানো — minimum raise আগের bet বা raise-এর সমান), আর fold। check শুধু তখনই করা যায় যখন সেই street-এ এখনও কেউ bet করেনি।",
  category: "rules",
  date: "2026-06-14",
  updated: "2026-07-13",
  masterUpdated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "9 min",
  emoji: "🃏",
  tags: [
    "poker betting actions",
    "check ki poker",
    "call ki poker",
    "min raise poker niyom",
    "poker e kotobar raise kora jay",
    "check raise poker",
    "string bet",
  ],
  image: "/images/holdem-betting-actions-hero.webp",
  imageAlt: "টেক্সাস হোল্ডেম টেবিল, যেখানে CHECK, CALL, RAISE, FOLD-এর chip-এর স্তূপ — একজন খেলোয়াড় নিজের hole কার্ড ধরে নিজের action ভাবছেন",
  content: `
আমার প্রথম live session-এ ডিলার বললেন "action is on you", আর আমি জমে গেলাম — কয়েক সেকেন্ডের নীরবতা, পুরো টেবিল আমার দিকে তাকিয়ে।

check? call? raise? হ্যান্ড র‍্যাঙ্কিং তো আমি জানতাম। কিন্তু ==action-গুলোর নিজস্ব নিয়ম== আসলে জানতাম না — আর এই ফাঁকটাই এই গাইড ভরাট করে।

টেক্সাস হোল্ডেমে মাত্র ==5টি betting action== আছে, কিন্তু এদের ঘিরে থাকা নিয়ম (check কখন legal, raise কত বড় হতে হবে, কতবার re-raise করা যায়) নতুন খেলোয়াড়দের সপ্তাহের পর সপ্তাহ ধাঁধায় ফেলে। আপনি একদম নতুন হলে, আগে [টেক্সাস হোল্ডেমের পুরো নিয়মের গাইড](/bn/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp")-এ একবার চোখ বুলিয়ে নিন — তারপর এখানে ফিরে এসে action-ধরে-action নিয়ম পড়ুন।

---

### ঝটপট সারাংশ

:::stripe
5 | betting action: check, bet, call, raise, fold
1 BB | No-Limit Hold'em-এ minimum opening bet
= last raise | minimum re-raise-এর আকার (increment নিয়ম)
No cap | No-Limit-এ re-raise-এ — কেউ all-in না হওয়া পর্যন্ত raise করা যায়
:::

## টেক্সাস হোল্ডেমের 5টি betting action কোনগুলো?

পোকার টেবিলে আপনার প্রতিটা সিদ্ধান্ত এই পাঁচটার মধ্যেই একটা:

| Action | কখন সম্ভব | chip-এ খরচ |
|--------|---------------|-----------|
| Fold | যখনই action আপনার ওপর থাকে | ফ্রি — কিন্তু pot-এ আগে রাখা chips ছেড়ে দিতে হয় |
| Check | শুধু তখন, যখন এই রাউন্ডে কেউ এখনও bet করেনি | ফ্রি — chips না দিয়ে পাস করেন |
| Call | কেউ bet বা raise করার পরে | আপনি চলতি bet-টা ঠিক ঠিক সমান করেন |
| Bet | রাউন্ডের প্রথম দান | আপনার বেছে নেওয়া অঙ্ক (minimum = 1 big blind) |
| Raise | কেউ bet করার পরে | আগের bet বা raise-এর আকারের অন্তত সমান ওপরে |

==all-in== আলাদা কোনো ষষ্ঠ action নয় — এটা আপনার বাকি প্রতিটা chip নিয়ে করা একটা bet, call বা raise। এ নিয়ে নিচে আরও কথা।

সবচেয়ে গুরুত্বপূর্ণ যে নিয়মটা নতুনরা মিস করে: ==r:একবার কেউ bet করে ফেললে আপনি আর check করতে পারবেন না==। chips ভেতরে যাওয়ামাত্র আপনার অপশন সংকুচিত হয়ে fold, call বা raise-এ নেমে আসে।

---

## পোকারে check কী?

check-এর মানে: ==g:"আমি পাস করছি — আমার তরফ থেকে কোনো bet নেই, কিন্তু আমি হ্যান্ডে টিকে আছি।"==

এতে কোনো খরচ নেই। live পোকারে এর ইঙ্গিত টেবিলে আঙুল ঠুকে বা "check" বলে দেওয়া হয়। action আপনার বাঁ দিকের খেলোয়াড়ের কাছে চলে যায়। সবাই check করলে পরের community কার্ড দেওয়া হয় — অথবা river-এ সরাসরি showdown-এ পৌঁছে যান।

check করা হার মেনে নেওয়া নয়। আপনার কার্ড আপনার কাছেই থাকে, প্রতিটা অপশন খোলা থাকে, আর পরে কী হয় তা দেখতে আপনি একটা পয়সাও দেননি।

---

## পোকারে check কখন করা যায়?

আপনি ঠিক দুটো পরিস্থিতিতে check করতে পারেন:

- **চলতি street-এ (flop, turn বা river) এখনও কেউ bet করেনি**
- **আপনি preflop-এ big blind আর কেউ raise করেনি** — আপনার blind আগে থেকেই একটা live bet হিসেবে গোনা হয়, তাই আপনি check করে flop ফ্রি-তে দেখতে পারেন

আপনার check-এর পর কেউ bet করলে সামনে নতুন সিদ্ধান্ত আসে: fold, call বা raise। আগে check করে তারপর প্রতিপক্ষের bet-এ raise করাকে বলে ==check-raise== — এটা টেক্সাস হোল্ডেমে পুরোপুরি legal এবং খেলার একটা স্ট্যান্ডার্ড অস্ত্র, কোনো চালাকি নয়।

কে কখন action করে, তার street-ধরে-street পুরো ছবি জানতে দেখুন [টেক্সাস হোল্ডেমের খেলার ক্রম](/bn/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp")।

---

## পোকারে call কী? (check vs call)

call-এর মানে হলো হ্যান্ডে টিকে থাকতে আপনি ==চলতি bet-টা ঠিক ঠিক সমান করেন==। কেউ $10 bet করে, আপনি $10 call করেন — বেশিও না, কমও না।

check vs call নতুনদের সবচেয়ে সাধারণ গোলমাল, তাই এই যে পরিষ্কার তফাত:

| | Check | Call |
|-|-------|------|
| কখন থাকে | এই রাউন্ডে কেউ bet করেনি | আপনার আগে কেউ bet করেছে |
| chip-এ খরচ | ফ্রি | আপনি চলতি bet সমান করেন |
| কী বলছে | "আমি পাস করছি, তবু ভেতরে আছি" | "চালিয়ে যেতে আমি দাম দিচ্ছি" |

আসল উদাহরণ: আপনি flop-এ K♠ 8♦ নিয়ে আছেন। কেউ bet করেনি, তাই আপনি ==check== করেন। পরের খেলোয়াড় $10 bet করে। এখন আপনার অপশন $10 ==call==, ==raise== ($20 বা তার বেশি পর্যন্ত), বা ==fold==। check শেষ — bet ভেতরে যাওয়ামাত্র সেই জানালা বন্ধ হয়ে গেছে।

---

## পোকারে fold কী — যেকোনো সময় fold করা যায়?

fold করার মানে নিজের কার্ড ছেড়ে হ্যান্ড থেকে বেরিয়ে যাওয়া। নতুন করে কিছু দেন না, কিন্তু ==r:যে chips আগে দিয়ে ফেলেছেন সেগুলো pot-এই থেকে যায়==।

হ্যাঁ — যখনই action আপনার ওপর থাকে আপনি fold করতে পারেন, কিছু bet করার আগেও, এমনকি যখন check ফ্রি হতো তখনও। কিন্তু এই শেষ কথাটায় একটা ফাঁদ আছে: **যখন check ফ্রি-তে করা যেত তখন fold করা মানে বিনা কারণে একটা হ্যান্ড ফেলে দেওয়া**। কেউ bet না করলে শুধু check করুন।

live etiquette-এর একটা নিয়ম: ==out of turn== fold করবেন না। action আপনার কাছে পৌঁছানোর অপেক্ষা করুন — তাড়াতাড়ি fold করলে এখনও ভাবছেন এমন খেলোয়াড়দের তথ্য দিয়ে দেওয়া হয়, আর বেশিরভাগ cardroom এতে সতর্ক করে বা জরিমানা করে। fold করা *কখন* সঠিক খেলা, সেটা জানা নিজেই একটা দক্ষতা।

---

## min-raise কী? টেক্সাস হোল্ডেমের bet ও raise নিয়ম

![পোকার min-raise নিয়ম দেখানো ইনফোগ্রাফিক: $6-এর bet-এ অন্তত $12 পর্যন্ত raise করা লাগে, আর $6 পর্যন্ত preflop raise-এ min re-raise $10 পর্যন্ত করতে হয়](/images/holdem-betting-actions-min-raise.webp "min-raise নিয়ম — প্রতিটা raise-এ অন্তত আগের bet বা raise-এর সমান যোগ করা লাগে")

No-Limit Hold'em-এ (এই ফরম্যাটই আপনি প্রায় সবসময় খেলবেন):

- **Minimum bet**: 1 big blind
- **Minimum raise (মানে min-raise)**: অন্তত ==আগের bet বা raise-এর আকার== ওপরে যোগ করা
- **Maximum**: আপনার পুরো stack — এটাই "no limit"

দুটো কষা উদাহরণ:

| Street | এ পর্যন্ত action | Minimum raise |
|--------|--------------|---------------|
| Flop | খেলোয়াড় $6 bet করে | $6 আরও → মোট $12 |
| Preflop (blinds $1/$2) | খেলোয়াড় $6 পর্যন্ত raise করে ($2 blind-এর ওপরে $4-এর raise) | $4 আরও → মোট $10 |

মূল কথা: min-raise আগের bet বা raise-এর ==increment==-এর সমান হয়, big blind-এর নয়। preflop-এ big blind-কে opening bet ধরা হয়, এজন্যই সবচেয়ে ছোট open-raise 2 big blind পর্যন্ত হয়।

raise-এর সঙ্গে আসা দুটো live পোকার নিয়ম:

1. **chips নাড়ার আগে "raise" বলুন।** "call" বলে তারপর আরও chips সামনে ঠেলে দেওয়া? সেই বাড়তি অংশটা ==string bet==, আর বেশিরভাগ room-এ ডিলার একে call ধরে নেবেন।
2. **এক মুভমেন্ট।** না বললে আপনার chips একটাই সামনের গতিতে ভেতরে যেতে হবে।

*কতটা* raise করা উচিত (2.5x open, 3x 3-bet, board texture অনুযায়ী sizing) সেটা strategy, নিয়ম নয়।

---

## পোকারে কতবার raise করা যায়?

**No-Limit Hold'em-এ: কোনো cap নেই**। আপনি raise করতে পারেন, আপনার ওপর re-raise হতে পারে, আর আপনি আবার raise করতে পারেন ("re-raise", "raise a raise" — একই ব্যাপার) যতক্ষণ না কারও chips শেষ হয়ে যায়। raise → 3-bet → 4-bet → 5-bet → all-in একটা legal, যদিও ভয়ংকর, ক্রম।

তবুও দুটো সীমা বহাল থাকে:

- প্রতিটা re-raise-কে ওপরের ==min-raise increment নিয়ম==-এ উতরাতে হবে
- ==r:আপনি নিজের bet-এর ওপর raise করতে পারবেন না।== আপনি bet করলে আর সবাই শুধু call করলে রাউন্ড শেষ হয়ে যায় — আবার raise-এর সুযোগ পান তখনই, যখন কেউ *আপনার* ওপর আগে raise করে।

**Fixed-Limit** গেমে বেশিরভাগ cardroom প্রতি রাউন্ড এক bet আর তিন raise-এ সীমাবদ্ধ (একটা "capped" pot) রাখে, যা সাধারণত শুধু দুজন খেলোয়াড় বাকি থাকলে উঠে যায় — house rules একেক জায়গায় একেক রকম, তাই ডিলারকে জিজ্ঞেস করে নিন।

---

## all-in যাওয়ার মানে কী?

all-in-এর মানে আপনার ==বাকি সব chips== bet করে দেওয়া। যখনই action আপনার ওপর থাকে আপনি এটা করতে পারেন — bet, call বা raise হিসেবে।

আপনার all-in চলতি bet-এর চেয়ে *ছোট* হলে আপনি fold হননি: আপনি শুধু নিজের অবদান পর্যন্ত সীমিত একটা ==main pot==-এর জন্য লড়েন, আর বড় stack-এর বাড়তি chips একটা ==side pot== বানায় যা আপনি জিততে পারবেন না। আর যে all-in *পুরো min-raise-এর চেয়ে কম*, সেটা সাধারণত ওই খেলোয়াড়দের জন্য raise আবার খোলে না যারা আগেই action করে ফেলেছে — একটা সূক্ষ্ম নিয়ম যা নিয়মিত খেলোয়াড়দেরও চমকে দেয়।

পুরো মেকানিক্স — side pot-এর হিসাব, কে আগে কার্ড দেখায়, table stakes — [all-in নিয়ম আর side pots](/bn/blog/holdem-all-in-rules)-এ আছে, আর all-in হ্যান্ড টাই হলে কী হয় তা [showdown নিয়ম](/bn/blog/holdem-showdown-rules)-এ পাবেন।

---

## action জানা প্রথম ধাপ — সেগুলো বেছে নেওয়া strategy

এই গাইড বলে প্রতিটা action *কী* আর কখন *legal*। কোনটা বাছবেন — কখন bet করবেন, কখন call লাভজনক, কখন একটা ভালো হ্যান্ডও fold করতে হয় — সেটা আলাদা দক্ষতা:

- আগে নিজের হ্যান্ডের কাঁচা শক্তি যাচাই করুন: পোকার হ্যান্ড র‍্যাঙ্কিং
- প্রতিটা সিদ্ধান্তের কাঠামো: টেক্সাস হোল্ডেম strategy আর তার 5 সিদ্ধান্ত
- আপনার সিট কেন সব বদলে দেয়: পোকারের positions

ততক্ষণ পর্যন্ত একটা থাম্ব রুল যা নতুনদের সত্যিকারের টাকা বাঁচায়: ==কোনো হ্যান্ড raise করার মতো যথেষ্ট শক্ত না হলে, fold করা সাধারণত call-এর চেয়ে ভালো।==

---

## live betting-এর যে ভুলগুলো আমি প্রতি সপ্তাহে দেখি

আমি প্রতি সপ্তাহে একটা low-stakes live গেম খেলি, আর সেই একই action-এর ভুল ঘড়ির কাঁটার মতো ফিরে ফিরে আসে:

### ভুল 1 — যখন check করা যেত তখন call করা

flop-এ প্রথম action আপনার, কেউ bet করেনি, আর একজন নতুন খেলোয়াড় "to call" বলে chips ফেলে দেয়। এখানে call করার মতো কিছুই নেই — ওটা তো bet। street খোলা না থাকলে check করুন আর কার্ড ফ্রি-তে দেখুন।

### ভুল 2 — string raise

"আমি call... না, raise!" নাহ। live পোকারে আপনার action সেই মুহূর্তেই আটকে যায় যখন আপনি সেটা বলেন। ডিলারকে এটা বাক্যের মাঝপথেই flat call ধরতে আমি এত বার দেখেছি যে গুনতে পারব না। আগে "raise" বলুন, *তারপর* chips নাড়ুন।

### ভুল 3 — big blind-এর ফ্রি flop fold করা

সবাই limp করে, action big blind পর্যন্ত পৌঁছায়, আর সে fold করে দেয়। এটা একটা ফ্রি flop muck-এ ছুড়ে ফেলা। ==g:কেউ raise না করলে BB check করে কোনো বাড়তি খরচ ছাড়াই তিনটা কার্ড দেখতে পারে== — blind আগে থেকেই live। এটা প্রতি orbit-এ সামনে আসে।

### ভুল 4 — চুপচাপ একটা বড় chip

$10-এর bet-এর সামনে খেলোয়াড় চুপচাপ একটা $100 chip ফেলে দেয়, বদলে change *আর* একটা raise-এর আশায়। বেশিরভাগ cardroom-এ ==one-chip নিয়ম== বলে, না বলে ফেলা একটা বড় chip শুধুই call। raise করতে চাইলে "raise" বলুন।

---

:::readnext[পড়তে থাকুন]
/bn/blog/holdem-all-in-rules | all-in নিয়ম আর side pots | /images/holdem-all-in-rules-hero.webp
:::

## প্রায়ই জিজ্ঞেস করা প্রশ্ন

**Q. পোকারে check-এর পর raise করা যায়?**

A. হ্যাঁ — আপনার check-এর পর কেউ bet করলে, action আপনার কাছে ফিরলে আপনি raise করতে পারেন। এটাই check-raise, আর এটা পুরোপুরি legal। সবাই আপনার পেছনে check করলে raise করার মতো কোনো bet-ই থাকে না, আর street শুধু শেষ হয়ে যায়।

**Q. নিজের bet-এর ওপর raise করা যায়?**

A. না। আপনি bet করলে আর প্রতিপক্ষ শুধু call করলে আপনি আর যোগ করতে পারবেন না — betting রাউন্ড শেষ হয়ে যায়। আপনি আবার raise তখনই করতে পারেন যখন অন্য কোনো খেলোয়াড় আগে আপনার ওপর raise করে, যাতে action আবার খুলে যায়।

**Q. টেক্সাস হোল্ডেমে কতবার raise করা যায়?**

A. No-Limit-এ raise-এর সংখ্যায় কোনো cap নেই — যতক্ষণ প্রতিটা raise minimum increment-এ উতরায়, ততক্ষণ কেউ all-in না হওয়া পর্যন্ত re-raise চলতে পারে। Fixed-Limit গেমে সাধারণত রাউন্ডকে এক bet আর তিন raise-এ সীমাবদ্ধ রাখা হয়।

**Q. out of turn fold করা যায়?**

A. করা উচিত নয়। action ঘড়ির কাঁটার দিকে ক্রম মেনে এগোতে হয়, আর out-of-turn fold এখনও ভাবছেন এমন খেলোয়াড়দের কাছে তথ্য ফাঁস করে দেয়। বেশিরভাগ cardroom একে বাধ্যতামূলক ধরে আর বারবার করলে সতর্কতা বা জরিমানা দিতে পারে। আপনার ডান দিকের খেলোয়াড় action করা পর্যন্ত অপেক্ষা করুন।

**Q. preflop-এ check করা যায়?**

A. শুধু big blind হিসেবে, আর শুধু তখন যখন কেউ raise করেনি। BB আগে থেকেই একটা live bet পোস্ট করে ফেলেছে, তাই সে check করে flop ফ্রি-তে দেখতে পারে। preflop-এর বাকি প্রতিটা position-কে call, raise বা fold করতেই হয়।

**Q. কেউ all-in যাওয়ার পর raise করা যায়?**

A. এটা all-in-এর আকারের ওপর নির্ভর করে। all-in একটা পুরো legal raise হলে action আবার খুলে যায় আর আপনি re-raise করতে পারেন। সেটা পুরো min-raise-এর চেয়ে *কম* হলে, যারা আগেই action করে ফেলেছে তারা সাধারণত শুধু call বা fold করতে পারে — বেশিরভাগ cardroom-এ ওই ছোট all-in তাদের জন্য raise আবার খোলে না।

**Q. পোকারে string bet কী?**

A. কয়েকটা মুভমেন্টে chips ফেলা, অথবা "call" বলে তারপর আগে "raise" না বলে একটা raise যোগ করা। ডিলার string bet-কে আসল অঙ্কের call ধরে। আপনার action বলে জানান, নয়তো সব chips একটাই মুভমেন্টে ফেলুন।

**Q. পোকারে limp করার মানে কী?**

A. limp করা মানে preflop-এ raise না করে শুধু big blind call করে pot-এ ঢোকা। এটা legal, কিন্তু সাধারণত দুর্বল খেলা — কিছু বিশেষ পরিস্থিতিতে এটা ঠিকও হয়, তবে সেগুলো ব্যতিক্রম।

---

## সম্পর্কিত পোস্ট

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/bn/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">নতুনদের জন্য টেক্সাস হোল্ডেমের নিয়ম</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">পুরো নিয়ম গাইড — blinds থেকে showdown</div>
  </a>
  <a href="/bn/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Game Flow</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">টেক্সাস হোল্ডেমের খেলার ক্রম</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">আসল হ্যান্ড উদাহরণ নিয়ে preflop থেকে river</div>
  </a>
  <a href="/bn/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Blinds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">small blind vs big blind</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">কার্ড দেখার আগেই কেন টাকা দেন</div>
  </a>
</div>
`.trim(),
};
