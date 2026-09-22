import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "টেক্সাস হোল্ডেম All-In নিয়ম: side pot, re-raise ও showdown",
  seoTitle: "All-in গিয়ে গুলিয়ে গেছে? — Hold'em All-in নিয়ম ও side pot",
  desc: "সব chips push করে দিলেন, কিন্তু কী জিততে পারবেন জানেন না? টেক্সাস হোল্ডেম all-in নিয়ম — table stakes, main pot, side pot, re-raise ও showdown-এর পুরো হিসাব।",
  tldr: "All-in যাওয়া মানে নিজের সামনে থাকা প্রতিটি chip বাজি ধরা। প্রতিটি প্রতিপক্ষের কাছ থেকে আপনি ঠিক ততটাই জিততে পারেন যতটা আপনি match করেছেন (অর্থাৎ main pot)। বড় stack-এর অতিরিক্ত বাজি একটা side pot তৈরি করে, যেটা আপনি জিততে পারেন না। একটা full raise-এর কম all-in সেই খেলোয়াড়দের জন্য betting আবার খোলে না, যারা আগেই act করে ফেলেছেন।",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-09-22",
  masterUpdated: "2026-08-12",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "♠",
  tags: [
    "poker all in niyom",
    "texas holdem all in rules bangla",
    "side pot ki poker",
    "all in e betting abar khole ki",
    "poker all in showdown",
  ],
  image: "/images/holdem-all-in-rules-hero.webp",
  imageAlt: "টেক্সাস হোল্ডেম all-in — একজন খেলোয়াড় নিজের সব chips মাঝখানে push করছেন, আর dealer সবুজ felt-এ main pot ও side pot আলাদা করছেন",
  content: `
আপনি short-stacked। আপনি সব কিছু push করে দিলেন। পেছনে বসা খেলোয়াড় call করলেন। তৃতীয় একজন re-raise করে বসলেন। Dealer chips দুটো স্তূপে ভাগ করতে শুরু করলেন।

আর আপনার বিন্দুমাত্র ধারণা নেই যে ঘটছেটা কী।

আমি ওই টেবিলে বসেছি। প্রথমবার যখন একটা live cash game-এ all-in গেলাম, তখন জানতামই না আমি আর কিছু জিততে পারব কিনা, অন্য খেলোয়াড় re-raise করতে পারবেন কিনা, এমনকি chips-এর কোন স্তূপটা আমার সেটাও না। কেউ আমাকে বুঝিয়ে দেয়নি।

==এই গাইড প্রতিটা পরিস্থিতি cover করে: main pot, side pot, কে re-raise করতে পারে, আর showdown-এর ক্রম।== এবার dealer যখন stacks গুনতে শুরু করবেন, তখন আর জমে যাওয়ার দরকার নেই। (betting-এর প্রাথমিক flow এখনও ঝাপসা থাকলে, [শুরুর জন্য নিয়মের গাইড](/bn/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") সেটা আগে বুঝিয়ে দেয়।)

## টেক্সাস হোল্ডেমে "All-In"-এর মানে কী?

All-in যাওয়া মানে নিজের সামনে রাখা প্রতিটি chip বাজি ধরে দেওয়া। একবার commit করার পর আপনি আর chips যোগ করতে পারবেন না — আর আপনাকে fold করতেও বাধ্য করা যাবে না।

এর ভিত্তি হলো **table stakes নিয়ম**: হ্যান্ড শুরু হওয়ার সময় টেবিলে আপনার কাছে যে chips ছিল, কেবল সেটুকুই আপনি বাজি ধরতে পারবেন। পকেট থেকে বাড়তি টাকা বের করতে পারবেন না, বন্ধুর কাছ থেকে ধার নিতে পারবেন না, ঘড়ি বা গাড়ির চাবিও বাজি ধরতে পারবেন না — ওটা সিনেমার পোকার।

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| শব্দ | মানে |
|------|---------|
| Push / Shove / Jam | All-in যাওয়ার slang |
| Table stakes | হ্যান্ড শুরুর সময় আপনার কাছে যা ছিল, কেবল ততটাই বাজি ধরতে পারবেন |
| Double up | একটা all-in জিতে নিজের stack দ্বিগুণ করা |
| Main pot | যে pot সবাই — all-in খেলোয়াড় সহ — জিততে পারে |
| Side pot | যে chips কেবল বড় stack জিততে পারে; all-in খেলোয়াড় বাইরে থাকে |

</div>

==g:একবার আপনি all-in হয়ে গেলে, বাকি সব community কার্ড দেখার গ্যারান্টি আপনি পেয়ে যান।== কেউ bluff দিয়ে আপনাকে হ্যান্ড থেকে সরাতে পারবে না। আপনার কার্ড river পর্যন্ত জীবিত থাকে।

---

## All-In কীভাবে declare করবেন

দুটো বৈধ উপায় আছে:

**1. মুখে ঘোষণা (verbal declaration)** — স্পষ্ট করে "all-in" বলুন, যাতে dealer আর প্রতিপক্ষরা শুনতে পান। এটাই সবচেয়ে নিরাপদ উপায়। একবার বলে ফেললে, আপনি commit হয়ে গেলেন।

**2. সব chips সামনে push করুন** — নিজের পুরো stack একটাই পরিষ্কার নড়াচড়ায় মাঝখানের দিকে সরান। chips টুকরো টুকরো করে সামনে ঠেলা string bet-এর মতো দেখাতে পারে, তাই সব কিছু একসাথে সরান।

![টেক্সাস হোল্ডেম all-in showdown — K♠ 10♣ 7♦ 4♥ 2♣ বোর্ড ও chips লেবেল করা main pot এবং side pot-এ আলাদা করা](/images/holdem-all-in-declare.webp)

==r:কিছু না বলে শুধু একটা chip সামনে কখনও ঠেলবেন না — dealer সেটাকে ঠিক ওই chip-এর মূল্য হিসেবেই গুনবেন, আপনার পুরো stack হিসেবে নয়।== সবসময় জোরে "all-in" বলুন, নয়তো নিজের পুরো stack একসাথে সামনে সরান।

---

## পোকারে side pot কীভাবে কাজ করে? (All-In খেলোয়াড়ের সীমা কেন বাঁধা পড়ে)

All-in খেলোয়াড় কেবল নিজের বাজি, আর pot-এ থাকা অন্য প্রতিটি খেলোয়াড়ের কাছ থেকে match হওয়া সমপরিমাণটুকুই জিততে পারেন। এর ওপরে বাজি ধরা সব chips একটা **side pot** তৈরি করে, যা পুরোপুরি সেই খেলোয়াড়দেরই, যারা সেটা ভরেছেন।

![টেক্সাস হোল্ডেম all-in side pot — dealer chips-কে main pot ও side pot-এ ভাগ করছেন, আর Player A-র সীমা বাঁধা পড়ছে](/images/holdem-all-in-side-pot.webp)

### 3-Player উদাহরণ (স্ট্যান্ডার্ড)

| খেলোয়াড় | Stack | Action |
|--------|-------|--------|
| Player A | 100 chips | All-in |
| Player B | 300 chips | 100 call করে, তারপর আরও 50 bet করে |
| Player C | 300 chips | 100 call করে, তারপর 50 call করে |

**Main pot:** 100 × 3 = **300 chips** (A, B, C সবাই eligible)

**Side pot:** 50 × 2 = **100 chips** (কেবল B আর C eligible)

==Player A showdown-এ 300-chip-এর main pot জিততে পারে। কিন্তু A-র হাতে সব মিলিয়ে সেরা হ্যান্ড থাকলেও, সে 100-chip-এর side pot ছুঁতেও পারবে না।== সেটা B বা C জিতবে।

### 4-Player Multi-Stack উদাহরণ

এখানেই ব্যাপারটা জটিল হয় — আর এখানেই বেশিরভাগ নতুন খেলোয়াড় পথ হারায়।

| খেলোয়াড় | Stack | এত টাকায় all-in যায় |
|:---|:---:|:---:|
| A | 100 | 100 |
| B | 200 | 200 |
| C | 500 | 500 |
| D | 500 | সব call করে |

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pot | পরিমাণ | Eligible খেলোয়াড় |
|:---|:---:|:---|
| Main pot | 100 × 4 = **400** | A, B, C, D |
| Side pot 1 | 100 × 3 = **300** | B, C, D (A-র সীমা বাঁধা) |
| Side pot 2 | 300 × 2 = **600** | C, D (A ও B-র সীমা বাঁধা) |
| **মোট** | **1,300** | — |

</div>

নিয়ম: ==প্রতিটা side pot তৈরি হয় পরবর্তী সবচেয়ে ছোট stack পর্যন্ত পার্থক্য × যারা সেটা match করে তাদের সংখ্যা দিয়ে।== সবচেয়ে ছোট stack থেকে সবচেয়ে বড়র দিকে হিসাব করুন।

---

## All-In যাওয়ায় কি betting আবার খুলে যায়? — যে নিয়ম বেশিরভাগ খেলোয়াড় ভুল বোঝে

==r:live টেবিলে all-in-এর এই একটা নিয়মই সবচেয়ে বেশি তর্ক তৈরি করে — আমি দুজন খেলোয়াড়কে পাঁচ মিনিট ধরে এটা নিয়ে ঝগড়া করতে দেখেছি, পুরো টেবিল অপেক্ষায়। দুজনেই ভুল ছিল।==

**নিয়ম:** যদি কোনো খেলোয়াড় **একটা [full raise](/bn/blog/holdem-betting-actions)-এর কম**-এ all-in যান, তাহলে সেই all-in ওই খেলোয়াড়দের জন্য betting আবার খোলে না, যারা সেই round-এ আগেই act করে ফেলেছেন।

![পোকার re-raise নিয়ম all-in-এর পর — full raise-এর কম একটা ছোট all-in, তাই আগেই অ্যাকশন নেওয়া Player A কেবল call বা fold করতে পারে](/images/holdem-all-in-reraise-rule.webp)

**উদাহরণ:**

Blinds $1/$2। চারজন খেলোয়াড় flop দেখেন।

1. Player A $10 bet করে।
2. Player B **$14**-এ all-in যায় (A-র $10 bet-এর চেয়ে মাত্র $4 বেশি — full raise নয়, যার জন্য কমপক্ষে $20 লাগত)।

Player A আর Player C-র কী হবে, যে এখনও act করেনি?

- Player A আগেই act করে ফেলেছে ($10 bet) আর এখন কেবল একটা অসম্পূর্ণ raise-এর মুখে পড়েছে। যেহেতু B-র $14 all-in **একটা full raise-এর কম**, action Player A-র জন্য আবার খোলে না। ==A কেবল call বা fold করতে পারে — সে re-raise করতে পারে না।==
- Player C এখনও act করেনি — **Player C এখনও স্বাভাবিকভাবে raise করতে পারে**।

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in পরিমাণ | Full raise? | Betting আবার খোলে? |
|--------------|-------------|-----------------|
| Full raise-এর কম | না | না — যারা আগেই act করেছে, তারা কেবল call বা fold করতে পারে |
| Full raise বা তার বেশি | হ্যাঁ | হ্যাঁ — সব খেলোয়াড় আবার re-raise করতে পারে |

</div>

এই নিয়ম আছেই কেন? এটা খেলোয়াড়দের partial all-in-এর জোরে বড় raise-এ ঠেলে দেওয়া থেকে বাঁচায়। একটা full raise আসল আগ্রাসনের সংকেত — কোনো short stack-এর সামান্য কিছু chips-এর all-in নয়।

### Advanced কেস: একাধিক খেলোয়াড় ছোট all-in গেলে কী?

একাধিক ছোট all-in মিলে একটা full raise-এর সমান **যোগ হতে পারে**, তবে betting আবার খোলে কি না তা প্রতিটি খেলোয়াড়ের জন্য আলাদাভাবে, তার শেষ action-এর পর থেকে মাপা হয়। সেই খেলোয়াড়ের সামনে আসা মোট বৃদ্ধি শেষ full bet বা raise-এর সমান হলে তবেই তার raise-এর অধিকার ফিরে আসে।

No-Limit ও Pot-Limit-এর জন্য এটাই TDA 2024 Rule 47-A-এর অফিসিয়াল "re-opening the bet" নিয়ম। Cash game-এ house rule আগে নিশ্চিত করুন।

**উদাহরণ (Blinds $1/$2, flop-এ):**

1. Player A $10 bet করে।
2. Player B **$14**-এ all-in যায় (+$4 increment — একা full raise নয়)
3. Player C **$21**-এ all-in যায় (+$7 increment — একা full raise নয়)

Combined increments: $4 + $7 = **$11** — এটা $10-এর minimum raise threshold পূরণ করে দেয়।

**ফলাফল: Player A-র জন্য betting আবার খুলে যায়।** A এখন $21-এর মুখোমুখি, তাই তার শেষ $10 action থেকে বৃদ্ধি $11 — full $10 raise-এর যথেষ্ট। কিন্তু B ও C-র মাঝখানে $14 call করা কোনো খেলোয়াড়ের সামনে বৃদ্ধি মাত্র $7, তাই তার জন্য betting আবার খোলে না।

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| B-র all-in | C-র all-in | Combined increment | A-র জন্য আবার খোলে? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — $10-এর কম | ❌ না |
| $14 (+$4) | $21 (+$7) | $11 — $10 পূর্ণ | ✅ হ্যাঁ |
| $15 (+$5) | $24 (+$9) | $14 — $10 পূর্ণ | ✅ হ্যাঁ |

</div>

Minimum raise threshold সবসময় *শেষ full valid bet বা raise* — কোনো cumulative total নয়।

### ঝটপট সিদ্ধান্ত গাইড — এই All-In কি betting আবার খোলে?

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| পরিস্থিতি | যারা আগেই act করেছে, তাদের জন্য আবার খোলে? |
|---|---|
| একা all-in < full raise | ❌ না — কেবল call বা fold |
| একা all-in ≥ full raise | ✅ হ্যাঁ — সবাই re-raise করতে পারে |
| একাধিক ছোট all-in, combined < full raise | ❌ না |
| একাধিক ছোট all-in; খেলোয়াড়ের শেষ action থেকে মোট বৃদ্ধি ≥ full bet/raise | ✅ হ্যাঁ — শুধু সেই খেলোয়াড়ের জন্য |
| যে খেলোয়াড় এখনও act করেনি | ✅ সবসময় raise করতে পারে (যা-ই হোক না কেন) |

</div>

---

## All-In Showdown নিয়ম

যখন সব betting শেষ হয়ে যায় এবং কোনো খেলোয়াড় all-in থাকে, তখন showdown-এ যা হয়:

1. **কার্ড face-up করে দেওয়া হয়।** টুর্নামেন্টে, কোনো খেলোয়াড় all-in এবং সব betting শেষ হলে বাকি সব হ্যান্ড অবিলম্বে table করতে হয়—muck করা যায় না (TDA 2024 Rule 16)। Cash game-এ house rule প্রযোজ্য; WSOP 2026 B149 অনুযায়ী side pot-এর খেলোয়াড়রা main-pot-only খেলোয়াড়দের আগে দেখান। No-Limit-এ river-এর আগে betting শেষ হলে all-in খেলোয়াড় আগে দেখান; নইলে river-এর last aggressor আগে, আর river check through হলে button-এর বাঁ দিকের প্রথম active খেলোয়াড় আগে দেখান। বিস্তারিত [showdown নিয়মে](/bn/blog/holdem-showdown-rules)।
2. **Side pot আগে বণ্টন হয়।** Dealer সবচেয়ে সাম্প্রতিক তৈরি হওয়া side pot আগে মেটান, তারপর পেছনের দিকে এগিয়ে main pot পর্যন্ত যান।
3. **কার্ড কথা বলে (cards speak)।** প্রতিটা pot সেই-ই পায় যার সেরা হ্যান্ড এবং যে ওটার জন্য eligible — খেলোয়াড় মুখে যা-ই বলুক না কেন।
4. **একাধিক বিজয়ী সম্ভব।** Player A main pot জিততে পারে। Player B side pot জিততে পারে। শুধু "নিজের" pot জিতে নেওয়া মানেই কেউ সব কিছু নিয়ে যায় না।

==g:একজন খেলোয়াড় main pot জিততে পারে কিন্তু side pot হারতে পারে। দুটো ফলাফলই বৈধ।==

**বিশেষ কেস:** যদি কোনো side pot-এ কেবল একজন খেলোয়াড়ই বাকি থাকে (বাকি সবাই fold করে গেছে), তাহলে সেই খেলোয়াড় ওই chips সঙ্গে সঙ্গে ফেরত পেয়ে যান — ওই pot-এর জন্য showdown-এর দরকার নেই।

---

## All-In ভুল গেলে কী হয়? — এড়ানোর মতো 5টা ভুল

### ভুল 1: এটা ভাবা যে all-in খেলোয়াড় side pot জিততে পারে
সে পারে না। একবার all-in খেলোয়াড়ের সীমা বাঁধা পড়লে, বড় stack-এর বাজি ধরা যেকোনো অতিরিক্ত chip-এ তার কোনো দাবি থাকে না।

### ভুল 2: re-raise eligibility নিয়ম না জানা
partial all-in সেই খেলোয়াড়দের আবার re-raise করার সুযোগ দেয় না যাঁরা ওই রাউন্ডে **আগেই অ্যাকশন নিয়েছেন** — যাঁর পালা এখনও আসেনি, তিনি স্বাভাবিকভাবেই raise করতে পারেন। এটা পাকাপাকিভাবে মনে রাখা তর্ক শুরু হওয়ার আগেই থামিয়ে দেয়।

### ভুল 3: হ্যান্ডের মাঝপথে পকেট থেকে chips যোগ করা
Table stakes। টেবিলে যা আছে, কেবল ততটাই আপনি বাজি ধরতে পারবেন। আপনি $80-এ all-in থাকলে আর pot $400-এর হলে, প্রতিটা caller-এর কাছ থেকে আপনি কেবল $80 জিততে পারবেন।

### ভুল 4: নিজের হ্যান্ড খুব তাড়াতাড়ি muck করে ফেলা
আপনি main pot-এর জন্য all-in। বাকি দুই খেলোয়াড় side pot-এর জন্য লড়ছে। muck করবেন না — আপনার হ্যান্ড main pot-এর জন্য এখনও জীবিত। ==dealer প্রতিটা pot মেটানো পর্যন্ত সবসময় অপেক্ষা করুন, তবেই নিজের কার্ডে হাত দিন।==

### ভুল 5: বিরক্তির চোটে all-in যাওয়া
All-in টেবিলের সবচেয়ে শক্তিশালী চাল। এটা প্রতিপক্ষদের all-or-nothing সিদ্ধান্তে ঠেলে দেয়। কিন্তু আপনি যখন এলোমেলোভাবে shove করেন, তখন সেই শক্তি উবে যায়। সঠিক মুহূর্তে এটা ব্যবহার করুন — short stack-এর চাপ, value হ্যান্ড যেগুলো call করাতে চান, আসল fold equity-ওয়ালা bluff।

---

:::readnext[পড়তে থাকুন]
/bn/blog/texas-holdem-rules-for-beginners | শুরুর জন্য টেক্সাস হোল্ডেম নিয়ম | /images/rules-texas-holdem.webp
/bn/blog/holdem-showdown-rules | Showdown নিয়ম, সহজ ভাষায় | /images/holdem-showdown-rules-hero.webp
:::

## প্রায়ই জিজ্ঞাসিত প্রশ্ন

**Q. big blind-এর কম-এ কি all-in যাওয়া যায়?**

A. হ্যাঁ। আপনার কাছে big blind-এর চেয়ে কম chips বাকি থাকলে, blinds আপনার কাছে এলে যা আছে ততটার জন্যই আপনি নিজে থেকে all-in হয়ে যান। বাকি খেলোয়াড়রা তবুও পুরো big blind দেন — আপনার অবদানের ওপরে যা কিছু, তা একটা side pot-এ যায়।

**Q. all-in জিতে গেলে কিন্তু side pot হেরে গেলে কী হয়?**

A. আপনি main pot নিয়ে নেন (প্রতিটা খেলোয়াড়ের কাছ থেকে যা আপনি match করেছেন), আর অন্য খেলোয়াড় side pot নিয়ে নেন। প্রত্যেকে ঠিক ততটা অংশ জেতে যতটার জন্য সে eligible ছিল।

**Q. all-in যাওয়ায় কি আপনার হ্যান্ড খুলে যায়?**

A. টুর্নামেন্টে, হ্যাঁ—কেউ all-in এবং সব betting শেষ হলে বাকি সব হ্যান্ড অবিলম্বে table করতে হয়; muck করা যায় না (TDA 2024 Rule 16)। Cash game-এ house rule প্রযোজ্য। WSOP 2026 B149-এ side pot-এর খেলোয়াড়রা আগে দেখান; No-Limit-এ betting river-এর আগে শেষ হলে all-in খেলোয়াড় আগে দেখান, নইলে river action অনুযায়ী ক্রম ঠিক হয়।

**Q. পোকার all-in-এ কি "run it twice" করা যায়?**

A. Run it twice (বাকি community কার্ড দুবার বাঁটা আর pot ভাগ করে নেওয়া) অনেক cash game-এ তখন অনুমোদিত, যখন all-in-এর পর দুই খেলোয়াড় রাজি হন। টুর্নামেন্টে এটা সাধারণত অনুমোদিত নয়। বাকি community কার্ড খোলার আগে এতে সম্মতি জরুরি।

**Q. "table stakes" নিয়মটা আসলে কী?**

A. Table stakes মানে হলো, হ্যান্ড শুরু হওয়ার সময় আপনার সামনে যে chips ছিল, কেবল সেটুকুই আপনি বাজি ধরতে পারবেন। হ্যান্ড চলাকালীন আপনি আর টাকা যোগ করতে পারবেন না। এটা দুই পক্ষকেই রক্ষা করে — আপনাকে কখনও নিজের stack-এর চেয়ে বেশি ঝুঁকিতে ফেলতে বাধ্য করা যাবে না, আর প্রতিপক্ষরা হঠাৎ ততটা বাজি ধরতে পারবে না যতটা আপনি cover করতে পারবেন না।

**Q. দুই খেলোয়াড় আলাদা আলাদা পরিমাণে all-in গেলে, আগে কে দেখায়?**

A. ==r:টুর্নামেন্টে আগে-দেখানোর ক্রম নেই==—কেউ all-in এবং betting শেষ হলে বাকি সব হ্যান্ড অবিলম্বে table করতে হয় (TDA 2024 Rule 16)। Cash game-এ house rule প্রযোজ্য; WSOP 2026 B149-এ side pot-এর খেলোয়াড়রা আগে দেখান, এবং No-Limit-এ betting river-এর আগে শেষ হলে all-in খেলোয়াড় আগে দেখান। শুধু all-in-এর পরিমাণ বড় বা ছোট হওয়া প্রথমে কে দেখাবে তা ঠিক করে না।

**Q. টুর্নামেন্ট আর cash game-এ কি all-in নিয়ম আলাদা হয়?**

A. টুর্নামেন্টে, কেউ all-in এবং betting শেষ হলে বাকি সব হ্যান্ড অবিলম্বে face-up table করতে হয়; muck করা যায় না (TDA 2024 Rule 16)। Cash game-এ house rule ও WSOP 2026 B149-এর মতো room-specific ক্রম প্রযোজ্য, তাই muck-এর সুযোগও house rule-নির্ভর। Run it twice অনেক cash game-এ সম্মতিতে হয়, কিন্তু টুর্নামেন্টে সাধারণত অনুমোদিত নয়।

---

## সম্পর্কিত পোস্ট

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/bn/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">শুরুর জন্য টেক্সাস হোল্ডেম নিয়ম</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">blinds থেকে showdown পর্যন্ত পুরো নিয়ম</div>
  </a>
  <a href="/bn/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Showdown নিয়ম</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">আগে কে দেখায় আর কখন muck করা যায়</div>
  </a>
</div>
`.trim(),
};
