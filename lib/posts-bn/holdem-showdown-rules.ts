import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "টেক্সাস হোল্ডেম showdown নিয়ম: কার্ড আগে কে দেখায়, mucking আর slow rolling",
  seoTitle: "কার্ড আগে কে খোলে? — Holdem showdown নিয়ম",
  desc: "Showdown-এ কার্ড আগে কে দেখায়? না দেখিয়ে muck করা যায়? last aggressor, cards speak, slow roll আর all-in — সব showdown নিয়ম সহজ বাংলায়।",
  tldr: "টুর্নামেন্টের non-all-in showdown-এ river-এর last aggressor আগে দেখায়; river check through হলে button-এর বাঁ দিকের প্রথম active খেলোয়াড় আগে। কোনো খেলোয়াড় all-in এবং betting শেষ হলে বাকি সব হ্যান্ড দেখাতে হয়। river caller নিজের কার্ড ধরে রাখলে বা table করলে last aggressor-এর হ্যান্ড চাইতে পারে। Cash game-এ house rule প্রযোজ্য।",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-09-22",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🃏",
  tags: [
    "texas holdem showdown niyom",
    "poker e card age ke dekhay",
    "muck poker",
    "slow roll poker",
    "all in showdown niyom",
  ],
  image: "/images/holdem-showdown-rules-hero.webp",
  imageAlt: "টেক্সাস হোল্ডেম showdown ইনফোগ্রাফিক — 4♥ 7♣ Q♦ K♠ 2♥ বোর্ডে A♠ K♥ pair of kings আর ace kicker নিয়ে জেতে",
  content: `
আপনি river-এর bet call করে দিয়েছেন। এখন আপনারা দুজন একে অপরের দিকে তাকিয়ে আছেন, অপেক্ষায় — কার্ড আগে কে খুলবে।

কেউ নড়ে না।

Dealer এদিক-ওদিক তাকায়। টেবিলের বাকি খেলোয়াড়রা বিরক্ত হয়ে দীর্ঘশ্বাস ফেলে।

==এই একই থমকে যাওয়া টানাপোড়েন প্রায় প্রতিটা live টেবিলেই ঘটে== — কারণ বেশিরভাগ নতুন খেলোয়াড় কখনো শেখেই না যে আসলে কার আগে কার্ড দেখানোর কথা। এই গাইডে showdown-এর প্রতিটা পরিস্থিতি আছে: সাধারণ হ্যান্ড, check-through হওয়া river, all-in, আর কেন slow rolling করলে বাকি পুরো session ধরে আপনার দিকে বাঁকা চোখে তাকানো হয়।

## Showdown-এ কার্ড আগে কাকে দেখাতে হয়?

নিয়মটা নির্ভর করে শেষ betting রাউন্ড কীভাবে শেষ হলো তার উপর (এখানে পৌঁছে দেওয়া পুরো street-বাই-street ক্রমের জন্য দেখুন [খেলার ক্রম](/bn/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp"))।

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| শেষ street-এর action | কার্ড আগে কে দেখায় |
|--------------------|-----------------|
| non-all-in টুর্নামেন্টে river-এ কেউ bet বা raise করেছে | ==সবার শেষে bet বা raise করা খেলোয়াড়== আগে দেখায় |
| river-এ সবাই check করেছে | dealer button-এর বাঁ দিকের প্রথম active খেলোয়াড় আগে দেখায় |
| টুর্নামেন্টে all-in এবং সব betting শেষ | বাকি board চালানোর আগে সব live hand অবিলম্বে face-up table করতে হয়; muck নেই |

</div>

![টেক্সাস হোল্ডেমে showdown ক্রমের ইনফোগ্রাফিক — J♥ 9♠ 4♦ 2♠ K♥ বোর্ডে আগে কে দেখায়](/images/holdem-showdown-who-shows-first.webp)

==g:non-all-in টুর্নামেন্টে মূল কথাটা হলো "last aggressor।"== আপনি river-এ bet করে call পেলে আগে দেখান। তবে river caller নিজের কার্ড ধরে রাখলে বা table করলে last aggressor-এর হ্যান্ড দেখার অনুরোধ করতে পারে; cash game-এ দেখানো ও muck house rule অনুযায়ী চলে।

---

## Showdown-এ কি না দেখিয়ে muck করা যায়?

হ্যাঁ — **যদি আপনি হেরে যান**।

একবার last aggressor নিজের হ্যান্ড দেখিয়ে দিলে, বাকি খেলোয়াড়রা হয়:
- **নিজের হ্যান্ড দেখাতে পারে** যদি মনে হয় তারা জিতছে
- **face-down muck করতে পারে** যদি নিশ্চিতভাবে হেরে যায়—তবে অনুমোদিত hand-viewing request থাকতে পারে। টুর্নামেন্টে কেউ all-in এবং সব betting শেষ হলে ব্যতিক্রম: বাকি সব live hand অবিলম্বে table করতে হয়, muck করা যায় না (TDA 2024 Rule 16)। Cash game-এ house rule প্রযোজ্য।

==r:কিন্তু একটা গুরুত্বপূর্ণ ব্যতিক্রম আছে:== TDA 2024 Rule 18 অনুযায়ী, river bet call করা খেলোয়াড় নিজের কার্ড ধরে রাখলে বা table করলে last aggressor-এর হ্যান্ড দেখার অলঙ্ঘনীয় অধিকার রাখে। অন্য অনুরোধ tournament director-এর বিবেচনাধীন; face-down muck করা caller এই অধিকার হারায়। Cash game-এ house rule প্রযোজ্য এবং অনুরোধ সাধারণত floor/collusion context-এ মেটানো হয়। এটাকে "show one, show all"-এর সঙ্গে গুলিয়ে ফেলবেন না।

ব্যবহারিক নিয়ম: non-all-in টুর্নামেন্টে ==last aggressor হিসেবে আপনিই কার্ড উল্টাবেন—call হওয়া bluff-ও।== River caller কার্ড ধরে রাখলে বা table করলে আপনার হ্যান্ড চাইতে পারে। Cash game-এ house rule মানুন, আর winning hand নিশ্চিত না হওয়া পর্যন্ত কখনো muck করবেন না।

---

## river-এ সবাই check করলে — showdown-এর ক্রম

river-এ কেউ bet না করলে (সবাই check করলে), showdown শুরু হয় **dealer button-এর বাঁ দিকের প্রথম active খেলোয়াড়** থেকে আর clockwise এগোয়।

উদাহরণ: button, small blind (SB) আর big blind (BB) river পর্যন্ত পৌঁছায়। SB check, BB check, Button check করে। showdown SB থেকে শুরু হয় (button-এর বাঁ দিকের প্রথম active খেলোয়াড়)। SB দেখাতে বা muck করতে পারে। তারপর BB। তারপর সবার শেষে button।

==g:এই ক্ষেত্রে button সবার শেষে দেখায়== — যা আসলে একটা সুবিধা। button দেখে নিতে পারে কেউ তাকে হারাচ্ছে কি না, তারপর সিদ্ধান্ত নেয় নিজের কার্ড উল্টাবে কি না।

---

## All-in showdown নিয়ম — all-in খেলোয়াড় কি আগে দেখায়?

টুর্নামেন্টে কোনো খেলোয়াড় all-in এবং সব betting শেষ হলে, বাকি সব live hand **অবিলম্বে face-up** table করতে হয়; board পরে run হয় (TDA 2024 Rule 16)। Cash game-এ house rule প্রযোজ্য এবং WSOP 2026 B149 আলাদা প্রকাশের ক্রম দেয়।

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in পরিস্থিতি | showdown নিয়ম |
|----------------|---------------|
| টুর্নামেন্টে একজন all-in, বাকিরা call, সব betting শেষ | বাকি board-এর আগে সব live hand অবিলম্বে face-up; muck নেই |
| টুর্নামেন্টে river all-in bet call | সব live hand অবিলম্বে table; first-show order-এর জন্য অপেক্ষা নয় |
| একাধিক all-in ও side pot, সব betting শেষ | সব live hand table; প্রতিটি pot আলাদাভাবে মীমাংসা |

</div>

একটা সূক্ষ্মতা: side pot আগে **পরিশোধ** করা হয়, কিন্তু প্রকাশের ক্রম আলাদা বিষয়। টুর্নামেন্টে সব betting শেষ হলে সব live hand সঙ্গে সঙ্গে table হয়। WSOP 2026 cash rule B149-এ side-pot players main-pot-only players-এর আগে দেখান; No-Limit-এ betting river-এর আগে শেষ হলে all-in player আগে দেখান।

খেলোয়াড়রা all-in থাকলে side pot কীভাবে তৈরি হয় আর কীভাবে দেওয়া হয়, তার জন্য দেখুন [all-in নিয়ম আর side pots](/bn/blog/holdem-all-in-rules)। ভাগ হওয়া pot-এর ক্ষেত্রে split pot আর chop নিয়ম প্রযোজ্য।

---

## "Cards speak" নিয়ম কী?

![Cards speak নিয়মের ইনফোগ্রাফিক — 8♠ 9♣ 10♥ J♦ Q♠ বোর্ড queen-high straight বানায়, আর showdown-এ কার্ড নিজেই নিজের কথা বলে](/images/holdem-showdown-cards-speak.webp)

"Cards speak"-এর মানে ==খেলোয়াড়রা যাই বলুক, সবচেয়ে ভালো হ্যান্ডই জেতে==।

কোনো খেলোয়াড় যদি নিজের হ্যান্ড ভুল পড়ে বলে "আমার কাছে pair আছে", অথচ আসলে তার কাছে straight আছে — তাহলে straight জেতে। dealer কার্ড পড়ে আর দেখানো হ্যান্ডগুলোর মধ্যে সবচেয়ে ভালোটাকে pot দেয়।

face-down কার্ড নিজে থেকেই dead নয়। TDA 2024 Rule 14 অনুযায়ী hand 100% identifiable এবং retrievable হলে floor সেটি table করে cards speak প্রয়োগ করতে পারেন; dealer muck-এ ঠেলে মিশিয়ে দিলে বা আর নিশ্চিতভাবে চেনা/ফেরানো না গেলে hand dead। তাই নিশ্চিত না হলে dealer-কে hand পড়তে দিন।

আসল পরিস্থিতি: আপনার কাছে J♥ 10♥ আছে, বোর্ড Q♥ 9♥ 8♥ 2♣ 5♦। আপনার কাছে queen-high straight flush আছে (হার্টের Q-J-10-9-8)। প্রতিপক্ষ K♣ Q♦ দেখায় (queens-এর এক pair)। আপনি বিশাল ব্যবধানে জেতেন। শুধু তার queen দেখে muck করে দেবেন না।

---

## পোকারে slow rolling কী?

Slow rolling মানে ==যখন আপনি জানেন যে আপনি জিতে গেছেন, তখন ইচ্ছে করে একটা খুব শক্তিশালী হ্যান্ড দেখাতে দেরি করা==।

আপনার কাছে nuts আছে। প্রতিপক্ষ একটা শক্তিশালী হ্যান্ড দেখায়। আপনি থামেন, ভাবার ভান করেন, আস্তে আস্তে নিজের কার্ডে উঁকি দেন, সবাইকে অপেক্ষা করান — তারপর জেতা হ্যান্ড উল্টে দেন। প্রযুক্তিগতভাবে বৈধ। সর্বত্র অপছন্দ।

![পোকারে slow rolling — একজন খেলোয়াড় ইচ্ছে করে জেতা হ্যান্ড দেখাতে দেরি করে আর বাকি খেলোয়াড়রা বিরক্ত হয়](/images/holdem-showdown-slow-roll.webp)

==r:পোকার টেবিলে শত্রু বানানোর সবচেয়ে দ্রুত উপায় হলো slow rolling।== এটাকে ইচ্ছে করে জয় ঘষে দেওয়ার মতো ধরা হয়। অলিখিত নিয়ম: আপনার কাছে যদি সম্ভাব্য সবচেয়ে ভালো হ্যান্ড থাকে, তাহলে সাথে সাথে উল্টে দিন। slow rolling-এর কোনো কৌশলগত লাভ নেই। এর একমাত্র ফলাফল হলো উত্তেজনা।

এটাকে **tanking**-এর সাথে আলাদা করে দেখুন — কোনো কঠিন সিদ্ধান্তের জন্য যুক্তিসঙ্গতভাবে সময় নেওয়া। সেটা মেনে নেওয়া হয়, বরং সম্মান পায়। nuts নিয়ে slow roll করা আলাদা ব্যাপার।

---

## Showdown ছাড়া জিতে গেলে কি hole কার্ড দেখানো বাধ্যতামূলক?

না। ==g:showdown-এর আগেই সবাই fold করলে, আপনি একটা কার্ডও না দেখিয়ে pot জিতে নেন।==

চাইলে দেখাতে পারেন — কিছু খেলোয়াড় প্রতিপক্ষকে tilt করতে bluff দেখায়, বা tight image তৈরি করতে শক্তিশালী হ্যান্ড দেখায়। কিন্তু বাকি সবার fold করার কারণে যখন আপনি জেতেন, তখন আপনি কখনোই নিজের কার্ড দেখাতে বাধ্য নন।

এটাই একটা কারণ যে পোকার মজার। সবসময় সবচেয়ে ভালো হ্যান্ড জেতে না — শেষ পর্যন্ত টিকে থাকা খেলোয়াড় জেতে।

---

## Showdown শিষ্টাচার — নতুনরা কোথায় ভুল করে

### ভুল 1: call করা খেলোয়াড়ের আগে দেখানোর অপেক্ষা করা

আপনি river-এ bet করলেন। কেউ call করল। আপনি থমকে গিয়ে তার দেখানোর অপেক্ষা করেন। এটা উল্টো। ==আপনি আগে দেখান — আপনিই last aggressor ছিলেন।== অপেক্ষা করাটা slow rolling-এর মতো দেখায়, যদিও তা না হয়।

### ভুল 2: dealer হ্যান্ড পড়ার আগে muck করে দেওয়া

আপনি কার্ড face-down এগিয়ে দিলেন। Dealer নেওয়ার আগেই বা কার্ড 100% identifiable ও retrievable থাকতেই ভুলটি ধরা পড়লে floor hand table করতে পারেন। কিন্তু dealer muck-এ ঠেলে মিশিয়ে দিলে বা পরিচয় নিশ্চিত না থাকলে hand dead—pot গেল। ==যতক্ষণ না নিশ্চিত হন, muck করবেন না।==

### ভুল 3: প্রতিটা call হওয়া হ্যান্ড দেখার জন্য জেদ করা

টুর্নামেন্টে river caller নিজের কার্ড ধরে রাখলে বা table করলে last aggressor-এর hand চাইতে পারে (TDA 2024 Rule 18); অন্য অনুরোধ floor-এর বিবেচনাধীন। Face-down muck করলে caller সেই অলঙ্ঘনীয় অধিকার হারায়। Cash game-এ house rule প্রযোজ্য; WSOP 2026 B147-এ এমন অনুরোধ floor/collusion context-এ পরিচালিত হয়।

### ভুল 4: আপনি যে আগে দেখাতে পারেন সেটা না জানা

সব betting শেষ হওয়ার পর showdown-এ তাড়াতাড়ি table করা যায়। কিন্তু action বাকি থাকতে কার্ড প্রকাশ করলে ==WSOP Tournament Rules 2026 Rule 117== অনুযায়ী penalty হবে; শুধু প্রকাশ করলেই hand স্বয়ংক্রিয়ভাবে dead হয় না। শক্ত hand হলে betting শেষ নিশ্চিত করে দ্রুত table করুন।

---

:::readnext[পড়তে থাকুন]
/bn/blog/holdem-game-order | খেলার ক্রম | /images/blog-holdem-game-flow.webp
/bn/blog/holdem-all-in-rules | All-In নিয়ম আর side pots | /images/holdem-all-in-rules-hero.webp
:::

## প্রায়ই জিজ্ঞাসা করা প্রশ্ন

**Q. পোকার showdown-এ কার্ড আগে কে দেখায়?**

A. non-all-in টুর্নামেন্টে শেষ betting round-এর last aggressor আগে দেখায়; সবাই check করলে button-এর বাঁ দিকের প্রথম active player আগে। টুর্নামেন্ট all-in-এ betting শেষ হলে সব live hand অবিলম্বে table হয়। Cash game-এ house rule; WSOP 2026 B149-এর আলাদা ক্রম প্রযোজ্য।

**Q. showdown-এ call পেলে কি কার্ড দেখানো বাধ্যতামূলক?**

A. non-all-in টুর্নামেন্টে river-এর last aggressor call পেলে আগে দেখায়। River caller নিজের কার্ড ধরে রাখলে বা table করলে last aggressor-এর hand চাইতে পারে (TDA 2024 Rule 18); face-down muck করলে সেই অধিকার হারায়। All-in ও cash game-এর নিয়ম আলাদা।

**Q. showdown-এ কি না দেখিয়ে muck করা যায়?**

A. non-all-in showdown-এ নিশ্চিতভাবে হেরে গেলে muck করা যায়, তবে বৈধ hand-viewing request থাকতে পারে। টুর্নামেন্টে কেউ all-in এবং betting শেষ হলে সব live hand অবশ্যই table করতে হয়। বিজয়ী নিয়ে সন্দেহ থাকলে dealer পড়ার আগে muck করবেন না।

**Q. পোকারে slow rolling কী আর এটা খারাপ কেন?**

A. Slow rolling মানে একটা জেতা হ্যান্ড, যেটা আপনি আগে থেকেই সবচেয়ে ভালো বলে জানেন, দেখাতে ইচ্ছে করে দেরি করা। এটা বৈধ, কিন্তু সর্বত্র অপছন্দ, কারণ এটাকে প্রতিপক্ষকে ইচ্ছে করে অপমান করার মতো দেখা হয়। আপনার কাছে nuts বা স্পষ্ট জেতা হ্যান্ড থাকলে, নিজের কার্ড সাথে সাথে উল্টে দিন। আপনি কত দ্রুত দেখান, তা টেবিলে আপনার চরিত্র সম্পর্কে অনেক কিছু বলে।

**Q. All-in পরিস্থিতিতে কার্ড আগে কে দেখায়?**

A. টুর্নামেন্টে all-in থাকলেও side pot-এ betting চললে এখনই সব hand প্রকাশ নয়; সব betting শেষ হলে সব live hand অবিলম্বে table হয়। Cash WSOP 2026 B149-এ side-pot players আগে দেখান; No-Limit betting river-এর আগে শেষ হলে all-in player আগে, নইলে river action-এর ক্রম।

**Q. পোকারে "cards speak"-এর মানে কী?**

A. Cards speak মানে tabled cards-ই hand-এর মান ঠিক করে। Face-down কার্ড স্বয়ংক্রিয় dead নয়: 100% identifiable ও retrievable হলে floor table করতে পারেন। Dealer muck-এ মিশিয়ে দিলে বা আর নিশ্চিতভাবে চেনা/ফেরানো না গেলে hand dead, তাই dealer পড়ার আগে muck করবেন না।

**Q. showdown ছাড়া জিতে গেলে কি কার্ড দেখানো বাধ্যতামূলক?**

A. না। river showdown-এর আগে বাকি সবাই fold করলে, আপনি সাথে সাথে pot জিতে নেন আর আপনাকে কখনো নিজের hole কার্ড দেখাতে হয় না। দেখানো ঐচ্ছিক — কিছু খেলোয়াড় প্রতিপক্ষকে খোঁচাতে bluff উল্টে দেয়, কিন্তু বিনা প্রতিদ্বন্দ্বিতায় জেতা হ্যান্ড দেখাতে আপনি কখনোই বাধ্য নন।

---

## সম্পর্কিত লেখা

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/bn/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">নতুনদের জন্য টেক্সাস হোল্ডেম নিয়ম</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">পুরো নিয়ম — blinds থেকে showdown পর্যন্ত</div>
  </a>
</div>
`.trim(),
};
