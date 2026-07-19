import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-continuation-bet",
  title: "Continuation Bet (C-Bet): When to Fire the Flop, How Much, and When to Check",
  seoTitle: "Why 'C-Bet Every Flop' Bleeds Chips — Continuation Bet Strategy",
  desc: "What a continuation bet is, which flops to c-bet and which to check, exact sizing — small on dry boards, big on wet — and how often to fire in and out of position.",
  tldr: "A continuation bet (c-bet) is a bet on the flop by the player who raised preflop. The modern rule isn't 'c-bet every flop' — it's to bet the flops that favor your range (high, dry boards like K-7-2) small and often, and check the ones that favor your opponent (low, connected boards like 7-6-5). Size small — about one-third pot — on dry boards, big — two-thirds or more — on wet ones, c-bet less out of position, and much less multiway.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "15 min",
  emoji: "🔥",
  image: "/images/holdem-continuation-bet-hero.webp",
  imageAlt: "A poker player betting chips onto a freshly dealt flop after raising preflop, the classic continuation bet moment on the green felt",
  tags: ["continuation bet", "c-bet poker", "what is a c-bet", "c-bet sizing", "c-bet frequency", "when to c-bet", "when not to c-bet", "c-bet out of position", "multiway c-bet", "delayed c-bet"],
  content: `
For my first couple of years, "c-bet" was the only flop plan I had. I raised preflop, so I bet the flop. Every time. Ace-high board, I bet. Board full of straights and flushes that clearly smashed the guy who called me? I bet anyway — and got raised, called, and check-raised off pot after pot. I thought c-betting *was* the strategy. It turns out the c-bet is a scalpel, and I was swinging it like a hammer.

A **continuation bet (c-bet)** is a bet on the flop by the player who raised before it. It's the most common bet in poker — and the most badly overused. The old advice was "c-bet almost every flop." Modern, solver-checked strategy says something more useful and more profitable: ==bet the flops that favor *your* range, and check the ones that favor your opponent's.== This is the complete c-bet playbook — which flops, how often, how much, in and out of position, multiway, and when checking is the winning move. It's the flop half of a winning [Texas Hold'em strategy](/en/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp").

---

### The c-bet, by the numbers

:::stripe
~2 in 3 | How often a hand misses the flop
⅓ pot | The small "range bet" size on dry boards
55–70% | A healthy overall flop c-bet rate
Check | Often the best play, not weakness
:::

---

## What Is a Continuation Bet (C-Bet)?

**A continuation bet is a bet made on the flop by the player who was the aggressor before the flop** — the last person to raise. You "continue" telling the story of strength you started preflop. Crucially, ==you don't need to have hit the flop to c-bet==; a large share of good c-bets are made with hands that completely missed.

The reason it works is one simple statistic: **a hand misses the flop — makes no pair or better — about two-thirds of the time.** So when you bet, your opponent usually has nothing either, and folds. You're not betting because you're strong; you're betting because *they're probably weak* and you were the one who claimed the lead.

Once you know the flop c-bet, the rest of the "barreling" ladder follows:

- **Delayed c-bet** — you *check* the flop, then bet the turn. Great for pots where the flop favored your opponent but the turn changes things.
- **Double barrel** — you c-bet the flop and bet *again* on the turn.
- **Triple barrel** — you bet all three streets: flop, turn, and river. The most aggressive line, for strong value or a well-chosen bluff with blockers.

If the underlying [betting actions](/en/blog/holdem-betting-actions) of check, bet, and raise still feel fuzzy, start there. Otherwise, let's fix the mistake almost everyone makes.

---

## The Old "C-Bet Every Flop" Advice Is Wrong — Here's What Changed

If you learned poker before solvers, you were told to c-bet around two-thirds pot on *most* flops. It worked for a while because opponents over-folded. Then everyone learned to fight back — floating, check-raising, and calling down — and blanket c-betting became a leak.

Here's the crucial thing modern strategy actually says, because it's easy to get wrong: **it is NOT "c-bet less everywhere."** It's a *split*:

- On boards that favor you, bet **small and even more often** than the old advice — sometimes your entire range.
- On boards that favor your opponent, **check much more** — and bet bigger and more selectively when you do.

The concept underneath is ==range advantage==: whose overall range is stronger on this particular flop. As the preflop raiser, you hold more big cards and overpairs, so **high, dry boards belong to you** — and boards full of medium connected cards belong to the player who called. Master that one idea and you're ahead of every "just c-bet" player at the table.

---

## Which Flops to C-Bet: It's All About Board Texture

![A dry, disconnected J-7-2 rainbow flop on the green felt with a small stack of chips bet in front, the kind of high-card board that belongs to the preflop raiser](/images/holdem-cbet-dry-board.webp "High, dry, disconnected flops like this J-7-2 favor the preflop raiser — the classic small, high-frequency c-bet boards")

This is the heart of c-betting. Before you think about sizing or frequency, ask one question: **did this flop hit my range, or my opponent's?** Here's the map:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Flop type | Example | Who it favors | In position | Why |
|:---|:---|:---|:---|:---|
| **High, dry, disconnected** | K‑7‑2, A‑8‑3 | **You (raiser)** | Bet **often & small** (⅓) | You have more top pairs & overpairs; they missed |
| **Low, connected** | 7‑6‑5, 9‑8‑6 | **Caller** | **Check more**; bet big & selective when you do | Hits their suited connectors and small pairs |
| **Paired low** | 8‑8‑3, 5‑5‑2 | **You (slightly)** | Bet **often & small** | Neither has trips much; your overcards/overpairs lead |
| **Monotone** | K♠9♠4♠ | Mixed — caution | Bet **less, smaller** | A made flush caps both ranges; go cheap |
| **Two-tone & wet** | Q♥J♥7♣ | Caller-leaning | **Polarize:** big with value/draws, check air | Tons of draws — charge them or get out |

</div>

Two related ideas do all the work here:
- **Range advantage decides how *often* you bet.** More of your range is strong on this board → bet more often.
- **Nut advantage decides how *big* you bet.** You hold more of the absolute best hands (sets, straights) → bet bigger.

The subtle part: you can have one without the other. On A‑8‑3 you have far more top pairs (range advantage) but almost nobody has a set, so you **bet often but small**. On a board where you hold way more sets and overpairs, you **bet big**. Get these two levers straight and c-bet sizing stops being a guess.

---

## How Often Should You C-Bet? (Frequency)

There is no single "correct" c-bet percentage — anyone who gives you one number is selling you a leak. Frequency swings with position, board, and how many players are in the pot. Here's the quick-reference:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situation | Rough c-bet frequency | Note |
|:---|:---:|:---|
| **In position, heads-up, dry board** | **70–100%** (small) | Classic "range bet" — bet nearly everything, tiny |
| **In position, heads-up, wet board** | **~50–60%** | More polarized — value and draws bet, air checks |
| **Out of position, heads-up** | **~40–50%** | Check far more to protect your checking range |
| **Multiway (2 opponents)** | **~50% or less** | Someone likely connected — tighten up |
| **Multiway (3+ opponents)** | **Strong hands & good draws only** | Fold equity is basically gone |

</div>

As a health check, a solid player's overall flop c-bet rate lands somewhere around **55–70%** across all boards. If you're c-betting over ~85% of flops you're auto-piloting and good players will punish it; under ~40% and you're too honest, only betting when you hit. But remember — that number is an *aggregate*, not a target. You get there by betting the right boards, not by hitting a quota.

---

## How Much Should You C-Bet? (Sizing)

Sizing follows straight from board texture. Two gears cover almost everything:

- **Small — about one-third of the pot** — on dry, static, range-advantage boards, especially in position. Your opponent's range is weak and won't improve much, so you don't need to charge draws; a small bet already puts all their air in a tough spot while keeping worse hands in to pay you. A bigger bet here just folds out the hands you *want* to call.
- **Big — two-thirds pot or more** — on wet, dynamic boards and whenever your range is polarized. Now you need to charge the flushes and straight draws (deny their equity) and build the pot with your strong hands. A small bet lets draws call too cheaply.

Put real numbers on it. Say the pot is ==$30== on the flop:

- A **one-third-pot** c-bet is ==$10== — your dry-board range bet.
- A **two-thirds-pot** c-bet is ==$20== — your wet-board, charge-the-draws size.

In **tournaments**, lean a touch smaller — often **half pot or less** — because your stack is precious and you can't reload. Whatever you choose, tie the size to the board, not to habit.

---

## C-Betting Out of Position

![A poker player acting first out of position, fingers on the felt beside their chips with an opponent waiting in the shadows behind](/images/holdem-cbet-oop.webp "Out of position you act first with no information, so you check far more and c-bet a tighter, stronger range")

C-betting is much harder **out of position** — when you have to act first every street with no read on what your opponent will do. Two adjustments:

1. **C-bet less often.** Without position you can't control the pot as well or realize your equity, so you check far more — even hands that would be automatic bets in position. On some good boards a solver c-bets out of position only a quarter of the time.
2. **Build a real checking range.** If you only ever bet when you're strong and check when you're weak, an observant opponent reads you like a book and attacks every check. So you deliberately check *some* strong hands too, which keeps your checks dangerous and your whole game harder to play against. This is exactly why [position](/en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp") is such a structural edge — c-bets simply work better when you act last.

---

## C-Betting in Multiway Pots

The single biggest c-bet trap is **firing into multiple opponents like it's heads-up.** Every extra player in the pot slashes the chance that everyone missed — so your fold equity, the whole engine of a bluff c-bet, collapses.

The rule multiway is simple: **bet your strong made hands and your best draws for value and protection, and check nearly everything else.** Against two players you're already tightening well past your heads-up range; against three or more, a bare bluff c-bet is just lighting chips on fire, because someone almost always has a piece. Range betting — betting your whole range small — is a *heads-up* idea and does not transfer to multiway pots. When in doubt with a marginal hand and two or more opponents, check.

---

## The Delayed C-Bet

Checking the flop isn't the end of the hand. A **delayed c-bet** — checking the flop as the preflop raiser, then betting the turn — is one of the most underused moves in poker. It shines when:

- The **flop favored your opponent** (a low, connected board), so betting was bad — but the **turn changes the picture** (an overcard, or a card that brings your equity up).
- You **checked back a decent hand** in position and want to bet a street of value now that the board is safer.
- You want to **catch floats**: players who planned to bluff-raise your flop c-bet get no bet to attack, and then face your turn bet instead.

Delaying turns a spot where an automatic c-bet would have bled chips into a controlled, informed bet one street later.

---

## When NOT to C-Bet (Checking Is a Weapon, Not a White Flag)

Let's make the "don't" explicit, because it's where the money is saved:

- **The board smashed your opponent's range.** A 7‑6‑5 or 9‑8‑7 flop hits the hands that call a raise far harder than it hits yours. Betting here just donates chips — check.
- **You're out of position on a dynamic board** with a marginal hand. Acting first with no information, keep the pot small and check.
- **You're multiway with air.** Covered above — no fold equity, no bet.
- **Your hand wants to protect a checking range.** Sometimes you check a strong hand on purpose so your checks aren't automatically weak.

The mindset shift that makes you a winner: **checking is not surrender.** Good players check *a lot*, on purpose, and it makes their bets far scarier when they do come. If you feel obligated to bet just because you raised preflop, that reflex is costing you money.

---

## A Real C-Bet Hand, Start to Finish

Two spots from the same session show both sides of the decision.

**Spot 1 — a textbook c-bet.** I raise ==A♣K♦== and the big blind calls. Flop: ==K♠ 7♦ 2♣.== That's a high, dry, disconnected board that belongs to my range — and I've flopped **top pair, top kicker**: my K♦ pairs the K♠, with the ace as the best possible kicker (best five = K♦ K♠ A♣ 7♦ 2♣). I bet **one-third pot** as a range bet: it charges all his missed hands and keeps worse kings and pairs in. Easy, profitable c-bet.

**Spot 2 — a textbook check.** Same session, I raise ==A♥Q♥== and the big blind calls. Flop: ==7♠ 6♠ 5♦.== This board crushes the exact hands he called with — suited connectors, small pairs, and straights — while I have only ace-high with no pair and no draw (no hearts on the board, so not even a backdoor flush). Two years earlier I'd have "continued" out of habit and gotten raised. Now I **check and give up.** If a safe turn comes and I pick up equity, a delayed c-bet is available; if not, I've lost the minimum.

Same preflop raise, opposite flops, opposite correct plays. That's the whole lesson: **the board decides, not the fact that you raised.**

---

## The 7 Most Common C-Bet Mistakes

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| The mistake | Why it costs you | The fix |
|:---|:---|:---|
| **C-betting every flop on autopilot** | Ignores that many boards favor the caller | Read the texture first |
| **Betting big with a wide range** | Wide ranges want small sizing, not big | Small on dry, big only when polarized |
| **C-betting light multiway** | Fold equity collapses with more players | Value & draws only vs 2+ |
| **C-betting OOP too often** | You can't realize equity acting first | Check more, build a checking range |
| **Betting into a board that hit them** | 7‑6‑5 smashed their range, not yours | Check and give up |
| **"One-and-done" barreling** | C-bet flop, always give up turn = easy to float | Have a turn plan before you fire |
| **Triple-barreling with no equity** | Bluffing off a stack with no outs or blockers | Bluff with backup equity or good blockers |

</div>

Every one of these traces back to the same root: **c-betting on autopilot instead of reading the board.** Fix that and your flop game jumps a level.

---

:::readnext[Keep reading]
/en/blog/holdem-strategy | The 5 Decisions Behind Winning Poker | /images/holdem-strategy-hero.webp
/en/blog/holdem-3bet | How to 3-Bet (and Face One) | /images/holdem-3bet-hero.webp
:::

## FAQ

**Q. What is a continuation bet in poker?**

A. A continuation bet, or c-bet, is a bet made on the flop by the player who raised before the flop. You're "continuing" to represent the strength you showed preflop. You don't need to have hit the flop to c-bet — because a hand misses the flop about two-thirds of the time, a well-chosen c-bet often wins the pot when your opponent has nothing.

**Q. Why is it called a continuation bet?**

A. Because you're continuing the aggression you started before the flop. You raised preflop to take the lead, and the flop bet continues that story into the next street. If someone else had raised preflop, your flop bet wouldn't be a c-bet — the term specifically means the preflop raiser betting the flop.

**Q. Should you c-bet every flop?**

A. No — this is the most common c-bet mistake. Bet the flops that favor your range (high, dry boards like K-7-2, where you hold more top pairs and overpairs) and check the ones that favor your opponent (low, connected boards like 7-6-5 that hit the hands they called with). C-betting every flop on autopilot gets punished by good players.

**Q. How often should you c-bet?**

A. It depends on position, board, and number of opponents, so treat these as ranges, not rules: roughly 70–100% (at a small size) in position heads-up on a dry board, around 40–50% out of position, and 50% or less multiway. A healthy overall flop c-bet rate is about 55–70% — over 85% means you're auto-piloting.

**Q. How much should you c-bet?**

A. Size to the board. On dry, static boards bet small — about one-third of the pot — because your opponent's range is weak and you don't need to charge draws. On wet, dynamic boards bet big — two-thirds pot or more — to charge flushes and straight draws and build the pot with your strong hands. In tournaments, lean smaller, often half pot or less.

**Q. Should you c-bet out of position?**

A. Less often than in position. Acting first every street with no information, you can't realize your equity as well, so you check far more — even some hands you'd auto-bet in position — and you deliberately keep some strong hands in your checking range so your checks aren't automatically weak. Position makes c-bets work better, full stop.

**Q. Should you c-bet in a multiway pot?**

A. Much less than heads-up. Every extra opponent makes it more likely someone connected, so your fold equity collapses. Against two or more players, bet your strong made hands and best draws for value and protection, and check nearly everything else. Betting bluffs into three or more players is a classic money-loser.

**Q. What is a delayed c-bet?**

A. A delayed c-bet is when the preflop raiser checks the flop and then bets the turn. It's useful when the flop favored your opponent (so betting was bad) but the turn improves your equity, when you checked back a decent hand in position, or to catch opponents who planned to bluff-raise your flop bet. It's one of the most underused profitable moves in poker.

**Q. When should you NOT c-bet?**

A. Don't c-bet when the board smashed your opponent's range (low connected boards), when you're out of position with a marginal hand on a dynamic board, when you're multiway with air, or when your hand prefers to protect a checking range. Checking in these spots isn't weakness — it saves chips and makes your future bets more credible.

**Q. Is a c-bet a bluff?**

A. Sometimes yes, sometimes no — that's the point. Many c-bets are semi-bluffs or pure bluffs with hands that missed, betting because your opponent probably missed too. Others are value bets with strong hands. A balanced c-betting strategy mixes both on the same boards, so opponents can't tell whether your flop bet means strength or air.

**Q. What is a value bet in poker?**

A. A value bet is a bet made with a strong hand hoping to get *called* by a worse one — the opposite of a bluff, which hopes to make a better hand fold. Most of your c-bets on boards you connected with are value bets: you bet top pair or a set to charge worse pairs and draws. The skill is sizing it so weaker hands still call — bet an amount your opponent can talk themselves into paying.

**Q. What is a good c-bet percentage on a poker HUD?**

A. Around 55–70% for flop c-bet is a healthy, balanced band. Over about 85% signals someone who c-bets too much and can be exploited by floating and raising; under about 40% signals a player who only bets when strong, so you can fold confidently to their c-bets and stab when they check. Treat it as a health check, not a target.

---

## The C-Bet Playbook, In Short

1. **A c-bet is a flop bet by the preflop raiser** — and it works because hands miss the flop about two-thirds of the time.
2. **The board decides.** Bet high, dry boards that favor your range; check low, connected boards that favor your opponent's.
3. **Range advantage sets frequency; nut advantage sets size.** Bet often on boards you dominate; bet big only when you hold more of the nuts.
4. **Small (⅓) on dry, big (⅔+) on wet.** C-bet less out of position, and much less multiway.
5. **Checking is a weapon.** The best players check often and on purpose — the c-bet is a scalpel, not a hammer.

Get this right and you stop torching pots on boards that were never yours to bet. Pair sharp c-betting with a solid [3-bet game](/en/blog/holdem-3bet), real [position](/en/blog/holdem-position-play) awareness, and the full [strategy framework](/en/blog/holdem-strategy), and your flop play quietly leaves the "bet every flop" crowd behind.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">The 5 Decisions Framework</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Where the c-bet fits in a winning game</div>
  </a>
  <a href="/en/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">3-Betting Explained</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">C-betting starts in 3-bet pots too</div>
  </a>
  <a href="/en/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Playing Your Position</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Why c-bets work better in position</div>
  </a>
  <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How to Calculate Pot Odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Why a big c-bet charges the draws</div>
  </a>
</div>
`.trim(),
};

export default POST;
