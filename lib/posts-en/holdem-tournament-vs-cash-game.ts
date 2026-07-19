import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament-vs-cash-game",
  title: "Cash Game vs Tournament Poker",
  seoTitle: "Your Chips Aren't Money — Cash Game vs Tournament Poker",
  desc: "Cash game vs tournament poker — which fits you? Chip value, rising blinds, ICM, bankroll, which is harder and more profitable, and where beginners start.",
  tldr: "In cash games, chips are real money and blinds stay fixed. In tournaments, chips are survival equity, blinds rise, and payouts depend on where you finish.",
  category: "tournament",
  date: "2026-06-11",
  updated: "2026-07-19",
  hideSummaryImageSlot: true,
  readTime: "16 min",
  emoji: "🏆",
  image: "/images/holdem-tournament-vs-cash-hero.webp",
  imageAlt: "Side-by-side infographic comparing cash game and tournament poker — chip value, blind structure, and when you can leave",
  tags: [
    "cash game vs tournament poker",
    "what is a cash game in poker",
    "poker cash game rules",
    "are cash games profitable",
    "are cash games harder than tournaments",
    "when to leave a cash game",
    "poker bankroll management",
    "ICM poker",
  ],
  content: `
I still remember racking up after my first live cash session — those chips were money I could literally walk to the cage and pocket. My first tournament ended very differently: four hours of careful play, one lost flip, and a stack of chips that turned into exactly nothing on the way out. That gap is what this whole article is about.

Almost every new Hold'em player eventually asks the same question:

*"Should I play ==cash games== or ==tournaments==?"*

At first, they look like the same game. You still get two hole cards, five community cards, and four betting rounds from preflop to river. But strategically, they are almost two different worlds. In a cash game, your chips are money. In a tournament, your chips are your tournament life.

This guide breaks down ==cash game vs tournament poker== the way beginners actually need it: what a cash game is and how it works, chip value, blind structure, how strategy changes, which format is harder, which is more profitable, bankroll, ICM, and which one you should start with. If tournaments themselves are still a mystery, read [how poker tournaments work — buy-ins, blind levels, and the Day-1 flow](/en/blog/holdem-tournament) first; this article compares the two formats instead of repeating that structure guide.

### The 15-second answer

- **Cash games:** chips equal real money, blinds stay fixed, and you can leave whenever you want.
- **Tournaments:** you pay one entry fee, receive tournament chips, and play until you bust or win.
- **Cash games teach fundamentals faster** because stacks are deeper and the feedback loop is shorter.
- **Tournaments offer bigger upside** but much higher variance, longer sessions, and [ICM pressure](/en/blog/holdem-icm).
- **For most beginners, cash games are the cleaner starting point.** Add tournaments once the basics feel automatic.

---

## Cash Game vs Tournament Poker: The Core Difference

The cleanest way to say it is this:

==**A cash game is about making profitable decisions with money on the table. A tournament is about surviving long enough to win a prize.**==

In a cash game, if you buy in for $200, your chips represent $200. If you run it up to $450, ==g:you can leave with $450==. Every chip has a direct cash value.

In a tournament, you might pay a $100 buy-in and receive 20,000 chips. ==r:Those chips are not worth $20,000==, and you cannot cash them out mid-event. They only matter because they help you survive, apply pressure, and finish higher in the payout structure.

Here is how that feels at the table. In a $1/$2 cash game, calling a $60 river bet with one pair means you are risking $60 right now. If the call is bad, you can still stand up, reload, or play another day. In a $50 tournament near the money, calling off 18 big blinds can end your entire event. The cards may look similar, but the cost of being wrong is not the same.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Category | Cash Game | Tournament |
|------|------|------|
| Chip value | Real money | Tournament equity |
| Entry | Buy in for a chosen amount | Pay a fixed entry fee |
| Leaving | Leave whenever you want | Play until you bust or finish |
| Blinds | Usually fixed | Increase over time |
| Main goal | Maximize long-term EV | Survive and climb payouts |
| Key strategy | Deep-stack postflop play | Stack pressure, ICM, bubble play |

</div>

If you understand this table, ==g:you already understand the foundation of the whole comparison==.

---

## What Is a Cash Game in Poker? (Rules & How It Works)

A ==cash game== (also called a ring game) is the original way poker is played: you sit down, exchange your own money for chips, and every chip on the table is worth exactly its face value. No schedule, no prize pool, no finishing positions — just poker, hand after hand.

**How do cash games work?** You choose your own buy-in within the table's posted limits. A typical live $1/$2 game might allow anything from around $40 up to $300, and where you buy in matters: deeper stacks create more postflop play, while shorter stacks simplify decisions.

**Chips are money at all times.** Win a pot and that money is yours immediately — there is no "making the money" like in a tournament. This is also why cash game decisions are judged purely on whether they make money in the long run.

**Blinds are fixed.** A $1/$2 game is still $1/$2 five hours later. The two forced bets simply rotate around the table each hand. If the small blind, big blind, or the "option" still confuse you — or you want the rules for missed blinds and straddles — [what the blinds in poker actually are](/en/blog/holdem-blind-meaning) covers all of that in one place.

**You can reload and leave freely.** Lose your stack and you can buy more chips on the spot (up to the table max). Need to go? Rack up your chips and cash out — no permission required.

**The house charges a rake.** In most cash games the house takes a small cut from each pot (or charges time-based seat fees). It quietly shapes which stakes are beatable, so it is worth understanding [how poker rake works](/en/blog/holdem-rake) before you pick a game.

:::note[This section covers the cash game essentials. We are expanding it into a full cash-game guide of its own — consider this the seed.]:::

---

## Tournament Chips Are Not Money

This is the most important difference in the entire article.

In a cash game, doubling your stack doubles your money. That is why cash game decisions can focus heavily on chip EV: *Is this call profitable? Is this bet making money over time?*

In a tournament, ==r:doubling your chip stack does **not** double your real-money equity==. Payouts are based on finishing position, not on the exact number of chips you have at one moment.

Imagine a 10-player tournament where everyone pays $100 (ignoring the house fee for simplicity — the full $1,000 goes to the prize pool).

| Finish | Prize |
|:---|:---:|
| 1st | $500 |
| 2nd | $300 |
| 3rd | $200 |
| 4th-10th | $0 |

If you go from 10% of the chips to 20% of the chips, your chance of winning money improves, but your prize equity does not simply double. If you lose all your chips on the bubble, though, your tournament equity goes to zero.

==r:That asymmetry is why tournament poker sometimes rewards folding hands that would be profitable calls in a cash game.==

![Infographic: cash chips convert to money instantly while tournament chips have no cash value until you reach a paid finish](/images/holdem-tournament-chips-not-money.webp "Tournament chip value and ICM in poker")

---

## Fixed Blinds vs Rising Blinds

Cash games and tournaments also feel different because the blinds behave differently.

In a $1/$2 cash game, the blinds stay $1/$2. One hour later, they are still $1/$2. Three hours later, still $1/$2. You can wait for better spots, reload if needed, and keep playing with a deep stack.

In a tournament, the blinds climb on a schedule. A stack that was 100 big blinds early can become 25 big blinds later without losing a single hand. Then it can become 12 big blinds. Eventually, waiting becomes expensive.

| Stage | Cash Game | Tournament |
|------|------|------|
| Early | Deep stacks remain common | Most players start deep |
| Middle | Blind pressure stays stable | Average stacks get shallower |
| Late | You can still reload or leave | Short-stack all-ins become common |
| Pressure | Lower and steadier | Increases every level |

==r:That is why "just wait for premium hands" is not always enough in tournaments.== Rising blinds force you to ==steal, defend, reshove, and take controlled risks==.

---

## Cash Game vs Tournament Strategy — What Actually Changes

If chips mean different things and blinds behave differently, strategy has to change too. Here are the shifts you will actually feel at the table.

**Cash games are one long game; tournaments are many short ones.** In a cash game, every decision is judged on a single question: does it make money over thousands of repetitions? In a tournament, the same decision also has to answer a second question: what does it do to my chances of surviving into the payouts?

**Your preflop baseline starts the same, then diverges.** A solid [starting hands chart](/en/blog/holdem-starting-hands-chart) is the foundation in both formats — but tournaments force you off that baseline as stacks get shallow, antes kick in, and pay jumps approach, while a cash game lets you play the same disciplined ranges all night.

**Reloading changes how aggression works.** In a cash game, losing a stack means reaching into your pocket, so big bluffs and thin calls are "only" money. In a tournament, the same mistake is elimination, which is why good tournament players pick their spots around stack sizes and survival, not just cards.

### Deep-Stack Poker vs Short-Stack Push/Fold

Cash games usually reward deep-stack skill. You often play around 100 big blinds, which means flop, turn, and river decisions matter a lot. You need to understand value betting, bluffing, board texture, position, and opponent ranges.

Tournaments begin deep but often become short-stacked. At 25 big blinds, 15 big blinds, or 10 big blinds, preflop decisions become much more important. Instead of planning three streets, you may be deciding whether to open, reshove, call off, or fold — the exact ranges live in [short-stack strategy: when to push or fold](/en/blog/holdem-short-stack).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Stack depth | More common in | Main skill |
|------|------|------|
| 100BB+ | Cash games | Postflop play and value betting |
| 40-60BB | Mid tournaments | Open ranges and 3-bet response |
| 15-25BB | Mid/late tournaments | Resteals and shove pressure |
| ==r:10BB or less== | Late tournaments | ==r:Push/fold discipline== |

</div>

Cash game players often do well in early tournament stages because they are comfortable deep. ==g:The best players learn both.==

---

## ICM: The Tournament Concept Cash Games Do Not Have

The biggest strategic split between cash games and tournaments is ==ICM==.

ICM stands for **Independent Chip Model**. It estimates the real-money value of your tournament stack based on stack sizes, remaining players, and the payout structure. Cash games do not need ICM because chips already equal money.

Where does it bite? Mostly [on the bubble](/en/blog/holdem-bubble) and at final tables. Suppose you hold AKo on the bubble with a medium stack and another player shoves. In a cash game, if the call is profitable by pot odds and equity, you call. In a tournament, losing means finishing with $0, while winning does not double your payout equity — so a call that prints money in a cash game can be a clear fold under ICM.

| Decision factor | Cash Game | Tournament |
|------|------|------|
| Call logic | Pot odds + equity | Pot odds + equity + ICM |
| Losing a stack | Lose a buy-in | Elimination |
| Value of strong hands | More stable | Changes by payout pressure |
| Bubble pressure | None | Huge |

==g:When you see a strong tournament player fold a hand that looks too good to fold, ICM is often the reason.== One paragraph cannot do the math justice — the full worked examples are in [ICM explained: why tournament chips are not money](/en/blog/holdem-icm).

![Infographic showing that doubling your tournament stack grows your prize equity by less than double — the core of ICM pressure](/images/holdem-tournament-icm-bubble.webp "Tournament bubble pressure and ICM decision-making")

---

## Are Cash Games Harder Than Tournaments?

This exact question gets asked constantly, and the honest answer is: ==they are hard in different ways==, and "harder" depends on which skills you are missing.

Cash games concentrate the difficulty into **deep-stack postflop play**. You face the same stakes — and often the same regulars — day after day, with no rising blinds to force anyone into mistakes. Winning tends to require a genuine edge in hand reading, value betting, and discipline, and many players feel that grinding out that edge is the harder long-term test.

Tournaments spread the difficulty across **phases**. You need deep-stack skills early, push/fold precision late, and ICM judgment on the bubble — plus the stamina to make good decisions in hour eight and the emotional resilience to survive long stretches without cashing. No single phase is as deep as cash game postflop play, but the range of situations is wider.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Difficulty type | Cash Game | Tournament |
|------|------|------|
| Depth of one skill | ==r:Very deep== (postflop, deep stacks) | Moderate per phase |
| Breadth of skills | Narrower | ==r:Very broad== (deep, short, ICM) |
| Opponent pressure | Steady, often experienced regulars | Mixed fields, changes by stage |
| Mental challenge | Discipline over long, flat sessions | Endurance and variance swings |

</div>

A useful rule of thumb: ==g:cash games are usually harder to *beat*, tournaments are usually harder to *endure*==. If you struggle with postflop decisions, cash games will feel harder. If you struggle with patience, pressure, and swings, tournaments will.

---

## Are Cash Games More Profitable? bb/100 vs Tournament ROI

Cash game results are usually measured in **bb/100** or hourly win rate. If a player wins 5 big blinds per 100 hands over a large sample, that is a steady edge. The feedback is not instant, but it is faster and cleaner than tournament results.

Tournament results are usually measured by **ROI**, cash rate, final table frequency, and big scores. A winning tournament player can fail to cash 20 or 30 events in a row, then make one deep run that pays for everything.

So which is more profitable? ==For most players, cash games produce a more predictable hourly rate, while tournament earnings arrive in rare large spikes.== A skilled tournament player can absolutely earn more over a year — but the money comes unevenly, and you need the bankroll and the temperament to survive the gaps between scores.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Metric | Cash Game | Tournament |
|------|------|------|
| Main result unit | bb/100 or hourly rate | ROI and finishing position |
| Variance | Moderate | ==r:Very high== |
| Big payday potential | Lower | ==g:Higher== |
| Skill feedback | ==g:Faster== | Slower |
| Mental challenge | Session-by-session wins/losses | Long stretches without cashing |

</div>

==r:The trap is misreading variance.== One tournament score does not prove you are a crusher. One bad cash session does not mean you cannot play. ==g:You need sample size in both formats.==

---

## Bankroll Management: Tournaments Need More Cushion

Bankroll management matters in both formats, but tournaments usually require a deeper cushion because the swings are larger.

A common beginner guideline for cash games is around **20-40 buy-ins** for the stake you play. If your normal cash game buy-in is $200, that means roughly $4,000-$8,000 as a conservative poker bankroll.

For tournaments, the standard guidance is steeper: **100+ buy-ins for large-field MTTs**, with smaller or softer formats needing somewhat less. A $50 tournament may look cheaper than a $200 cash game buy-in, but the variance can be much harsher.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Format | Beginner bankroll guideline | Why |
|:---|:---:|:---|
| Cash game | ==g:20-40 buy-ins== | Lower variance, reloads available |
| Small sit-and-go | 40-60 buy-ins | More payout variance |
| Large-field MTT | ==r:100+ buy-ins== | Long no-cash stretches are normal |

</div>

Bankroll is not just a money issue. ==It protects your decision-making.== ==r:When you are under-rolled, every all-in feels personal, and good strategy gets replaced by fear.==

---

## When to Leave a Cash Game (and Why You Can't Leave a Tournament)

Cash games are flexible. You can sit down for 30 minutes, play for two hours, or leave when the table is bad. Tournaments are the opposite: once you register, you play until you bust, cash, or win — walk away mid-event and your chips stay at the table, paying blinds until they are gone.

So when *should* you leave a cash game? The rules say "whenever you want," but the profitable answer is more specific:

- **Leave when the game is no longer good.** The weakest players quit, the lineup tightened up, or the seats that made the table profitable are gone.
- **Leave when *you* are no longer good.** Tilt, fatigue, and distraction destroy win rates faster than bad cards. If you catch yourself calling out of frustration, rack up.
- **Do not leave just because you hit a number.** Being up or down a buy-in says nothing about whether the next hour is profitable. Quitting winners in a great game and grinding losses in a terrible one are both leaks.
- **Leaving right after a big pot is allowed.** No rule forces you to "give action" — though etiquette-wise, a short cool-down lap is smoother than an instant hit-and-run.

| Player situation | Better fit |
|------|------|
| You have unpredictable free time | Cash game |
| You want short sessions | Cash game |
| You can focus for many hours | Tournament |
| You like ranking, pressure, and trophies | Tournament |
| You may need to leave suddenly | Cash game |

This is a practical point beginners often miss. A tournament buy-in can look smaller than a cash game buy-in, but the time cost is much larger.

---

## Which Should Beginners Play First?

For most beginners, ==g:**cash games are the better first classroom**==.

The reason is not that cash games are easy. They are not. But ==they give you cleaner repetition==. The blinds stay the same, stacks are often deeper, and you can review whether your call, raise, or value bet made sense ==r:without also untangling ICM, pay jumps, and blind pressure==.

Tournaments can still be great for beginners if you enjoy the competition and can handle variance. They are exciting, structured, and give you a clear goal: survive and finish higher. Just do not confuse one deep run with proof that your whole strategy is sound.

| Goal | Better starting point |
|------|------|
| Learn fundamentals quickly | Cash game |
| Improve postflop decisions | Cash game |
| Play short scheduled events | Tournament |
| Chase big-score upside | Tournament |
| Play short sessions | Cash game |
| Study ICM and bubble pressure | Tournament |

If you are brand new, first learn [how a Texas Hold'em hand works](/en/blog/holdem-game-order) and the [poker hand rankings](/en/blog/holdem-hand-rankings). Choosing a format is much easier once the basic rules are automatic — and if you lean toward tournaments, see [how poker tournaments work](/en/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") for buy-ins, blind levels, and the Day-1 flow.

### Beginner Decision Framework

If you still cannot choose, use this quick filter.

| Your situation | Start with |
|------|------|
| You have 1-2 hours and may need to leave | Cash game |
| You have a small bankroll and hate big downswings | Cash game |
| You want to learn why bets work across flop, turn, and river | Cash game |
| You have a free evening and want a structured goal | Tournament |
| You enjoy pressure, rankings, and playing for a final table | Tournament |
| You are willing to study push/fold charts and ICM spots | Tournament |

My default advice for a serious beginner is simple: play low-stakes cash games for repetition, then add small tournaments for experience. Cash games reveal leaks faster. Tournaments teach pressure, patience, and emotional control. Together, they build a more complete player.

### Cash games may fit you better if:

- You want flexible sessions.
- You prefer steady skill development.
- You want to study deep-stack postflop poker.
- You want clearer feedback on your decisions.
- You have a smaller bankroll and dislike long downswings.

### Tournaments may fit you better if:

- You enjoy competition, pressure, and rankings.
- You can commit several uninterrupted hours.
- You like the chance of a larger payout from one buy-in.
- You are willing to study ICM, bubble play, and short-stack ranges.
- You can handle long stretches without cashing.

Neither format is "better." They test different parts of the same game. Many strong players use cash games to build fundamentals and tournaments for high-upside shots.

---

## Live Poker Rooms: What Should You Ask First?

Before you sit down in any live poker room or local event, ask what format is actually running. The same table, chips, and cards can create very different decisions depending on the structure.

Useful questions:

| Question | Why it matters |
|------|------|
| Is this a cash game or a tournament? | Chip value and strategy change completely |
| What are the blinds or blind levels? | Determines stack pressure |
| Are re-entries or add-ons allowed? | Changes total cost and risk |
| What is the payout structure? | Affects bubble and ICM decisions |
| How long does the event usually run? | Helps you avoid time-pressure mistakes |

If you cannot explain the structure, do not buy in yet. Ask first, then play.

---

:::readnext[Keep reading]
/en/blog/holdem-pot-odds | How to Calculate Pot Odds | /images/holdem-pot-odds-hero.webp
/en/blog/holdem-probability | Poker Odds & Probability Chart | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. Are poker tournaments harder than cash games?**

A. They are hard in different ways. Tournaments demand a broader skill set — deep stacks early, push/fold late, ICM on the bubble — plus long hours and brutal variance. Cash games concentrate the difficulty into deep-stack postflop play against steadier lineups. Most players find tournaments harder to endure and cash games harder to beat.

**Q. Are cash games profitable for beginners?**

A. They can be, but expect tuition first. Low-stakes cash games have plenty of weak players, and a disciplined beginner with tight preflop ranges and good bankroll habits can become a small winner. Keep in mind that rake hits small-stakes games hardest, and most beginners lose during their first months while they plug leaks.

**Q. Should beginners start with cash games or tournaments?**

A. Most beginners should start with low-stakes cash games or very small tournaments. If your goal is to learn fundamentals quickly, cash games are cleaner. If your goal is excitement and structured competition, small tournaments are fine as long as you understand the variance.

**Q. Does ICM matter in cash games?**

A. No. ICM applies to tournaments because tournament chips do not equal cash and payouts depend on finishing position. In cash games, chips are already money, so decisions are based more directly on pot odds, equity, position, and opponent ranges.

**Q. How many buy-ins do I need for cash games vs tournaments?**

A. A common guideline is 20-40 buy-ins for cash games and 100+ buy-ins for large-field tournaments, with smaller formats like sit-and-gos in between at roughly 40-60. Tournaments need the bigger cushion because long stretches without cashing are normal even for winning players.

**Q. How many big blinds should you start with in a cash game vs a tournament?**

A. In a cash game, buy in for the table maximum — usually around 100 big blinds ($200 at $1/$2) — because deep stacks reward postflop skill and let you win a full stack when you're ahead. A tournament picks your depth for you: you typically start around 100-300 big blinds, but rising blinds shrink that to 20, then 10, then push/fold territory. Short version: buy in deep for cash, and in a tournament watch your big-blind count fall and adjust as it does.

**Q. How many chips do you need for a home cash game?**

A. A standard 300-chip set comfortably covers up to about 6-8 players. Give everyone the same starting stack across 3-4 denominations, with most chips in the smallest values so players can bet and make change easily. The exact count matters less than everyone agreeing what each color is worth in real money before the first hand.

**Q. Do professional players play cash games or tournaments?**

A. Both — but many pros specialize. Cash-game specialists value the steadier hourly win rate and flexible hours, while tournament pros chase big scores and titles despite the higher variance. Plenty of top players do both: cash games for reliable income, tournaments for upside and prestige.

**Q. Is a re-entry tournament basically a cash game?**

A. No. Re-entry lets you buy back into the tournament after busting during a certain period, but the chips still are not cash. Blinds still rise, prize money still depends on finishing position, and ICM still matters later.

**Q. Do you get taxed on poker tournament winnings?**

A. In most countries, yes — poker winnings count as taxable income, and large live tournament cashes are often reported (and sometimes withheld) right at the casino; in the US, for example, a big score generates tax paperwork on the spot. A few jurisdictions treat recreational gambling wins as tax-free. Rules vary widely by country and even by state, so treat this as general information and check your local tax law — or a professional — before a major cash.

---

## The 3 Things to Remember

1. ==**Cash chips are money; tournament chips are survival equity.**== That one idea explains most strategy differences.
2. ==g:**Cash games teach fundamentals faster; tournaments test pressure better.**== Pick based on your goal, not on which format sounds more glamorous.
3. ==**Bankroll and time matter.**== If you cannot handle long sessions or long downswings, ==g:cash games are usually the better starting point==.

Master cash fundamentals first, then add tournaments when you are ready for ==rising blinds, ICM pressure, and the emotional swing of chasing a deep run==.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tournaments</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How Poker Tournaments Work</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Buy-ins, blind levels, formats, and a Day-1 checklist</div>
  </a>
  <a href="/en/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Game Flow</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Texas Hold'em Order of Play</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Preflop to showdown — the full hand flow step by step</div>
  </a>
  <a href="/en/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand Rankings</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Hand Rankings — Best to Worst</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">All 10 hands with odds, examples, and board puzzles</div>
  </a>
  <a href="/en/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Blinds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">What Are the Blinds in Poker?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">SB, BB, blind steal, and option — all explained</div>
  </a>
</div>
`.trim(),
};
