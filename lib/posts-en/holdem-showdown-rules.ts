import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "Texas Hold'em Showdown Rules: Who Shows First, Mucking, and Slow Rolling",
  seoTitle: "Who Flips First? — Texas Hold'em Showdown Rules, Muck & Slow Roll",
  desc: "Who shows cards first at showdown? Can you muck without showing? Hold'em showdown rules — last aggressor, cards speak, slow roll, and all-in situations explained.",
  tldr: "At showdown, the last player to bet or raise shows first. If the river was checked through, the first active player left of the button shows first. You can muck without showing if you lose, but opponents can request to see a called hand.",
  category: "초보 가이드",
  date: "2026-06-15",
  updated: "2026-07-02",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🂠",
  tags: [
    "texas holdem showdown rules",
    "who shows cards first poker",
    "can you muck at showdown poker",
    "slow roll poker",
    "all in showdown rules",
  ],
  image: "/images/holdem-showdown-rules-hero.webp",
  imageAlt: "Texas Hold'em showdown infographic — on a 4♥ 7♣ Q♦ K♠ 2♥ board, A♠ K♥ wins with a pair of kings and ace kicker",
  content: `
You called the river bet. Now both of you are staring at each other, waiting for the other to flip first.

Nobody moves.

The dealer looks back and forth. Other players at the table sigh.

==This exact standoff happens at almost every live table== — because most beginners never learned who is actually supposed to show first. This guide covers every showdown situation: standard hands, checked-through rivers, all-ins, and why slow rolling will get you glared at for the rest of the session.

## Who Has to Show Cards First at Showdown?

The rule depends on how the final betting round ended (for the full street-by-street sequence that leads here, see [the order of play](/en/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp")).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Final street action | Who shows first |
|--------------------|-----------------|
| Someone bet or raised on the river | ==The last player to bet or raise== shows first |
| Everyone checked the river | First active player left of the dealer button shows first |
| All-in on earlier street (no river betting) | All-in player shows first (or all hands shown simultaneously) |

</div>

![Infographic of showdown order in Texas Hold'em — who shows first on a J♥ 9♠ 4♦ 2♠ K♥ board](/images/holdem-showdown-who-shows-first.webp)

==g:The key phrase is "last aggressor."== If you bet the river and got called, you show first — not the caller. The caller gets to see your hand before deciding whether to show or muck theirs.

---

## Can You Muck Without Showing at Showdown?

Yes — **if you lost**.

Once the last aggressor shows their hand, the other players can either:
- **Show their hand** if they think they win
- **Muck face-down** if they see they've lost — no need to reveal your cards

==r:But there's one important exception:== if you called a bet on the river, your opponent paid full price to see your hand. They — or any player at the table — can request the dealer to turn up a mucked hand that was called. This is called the **"show one, show all"** principle in many cardrooms.

Practical rule: ==if you bluffed and got called, muck quickly. If you value-bet and got called, flip your cards.==

---

## Showdown Order When Everyone Checked the River

If nobody bet on the river (everyone checked), the showdown starts from the **first active player left of the dealer button** and proceeds clockwise.

Example: Button, small blind, and big blind see the river. Button checks, SB checks, BB checks. Showdown starts from SB (first active player left of the button). SB can show or muck. Then BB. Then button last.

==g:In this case, the button shows last== — which is actually an advantage. The button can see whether anyone beats them before deciding whether to flip.

---

## All-In Showdown Rules — Does the All-In Player Show First?

When a player goes all-in and there's no more betting possible, all remaining cards are typically run out with **all hands shown face-up**. This protects the integrity of the hand — no player should be able to muck strategically in an all-in situation.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in scenario | Showdown rule |
|----------------|---------------|
| Player goes all-in, others call, no more betting possible | All hands shown face-up before or during runout |
| All-in on the river (betting finalized before all-in) | Last aggressor rule applies for side pot players |
| Multiple all-ins creating multiple side pots | Each pot resolved separately; all involved hands shown |

</div>

One nuance: if there is a **side pot** (other players still have chips and keep betting), the side pot players continue betting and their showdown follows the last-aggressor rule. The all-in player's hand is shown, but side pot resolution goes last-aggressor first.

For how side pots are built and paid when players are all-in, see [all-in rules and side pots](/en/blog/holdem-all-in-rules); for chopped pots, see [split pot and chop rules](/en/blog/holdem-split-pot-rules).

---

## What Is the "Cards Speak" Rule?

![Cards speak rule infographic — an 8♠ 9♣ 10♥ J♦ Q♠ board makes a queen-high straight, and at showdown the cards speak for themselves](/images/holdem-showdown-cards-speak.webp)

"Cards speak" means ==the best hand wins regardless of what players say==.

If a player misreads their hand and says "I have a pair," but they actually have a straight — the straight wins. The dealer reads the cards and awards the pot to the best hand shown.

This works both ways. If you think you lost and muck without showing, but your hand would have been the winner — ==r:the pot is gone==. Your hand is dead once it touches the muck. Always let the dealer read your hand before mucking if you're not 100% sure you lost.

Real situation: you hold J♥ T♥ on a board of Q♥ 9♥ 8♥ 2♣ 5♦. You have a queen-high straight flush (Q-J-T-9-8 of hearts). Opponent shows K♣ Q♦ (one pair of queens). You win by a mile. Don't muck just because you see their queen.

---

## What Is Slow Rolling in Poker?

Slow rolling is ==deliberately taking a long time to show a very strong hand when you know you've won==.

You have the nuts. The opponent shows a strong hand. You pause, pretend to think, peek at your cards slowly, make everyone wait — then flip the winner. Technically legal. Universally disliked.

![Slow rolling in poker — other players frustrated as one player deliberately delays showing winning hand](/images/holdem-showdown-slow-roll.webp)

==r:Slow rolling is the fastest way to create enemies at a poker table.== It's interpreted as deliberately rubbing in a win. The unwritten rule: if you have the best possible hand, flip it immediately. There is no strategic benefit to slow rolling. The only outcome is tension.

Contrast this with **tanking** — legitimately taking time to make a difficult decision. That's accepted, even respected. Slow rolling a made nuts is different.

---

## Do You Have to Show Your Hole Cards If You Win Without Showdown?

No. ==g:If everyone folds before showdown, you win the pot without showing a single card.==

You can show if you want — some players show bluffs to tilt opponents or show strong hands to build a tight image. But you are never obligated to show your cards when you win by everyone else folding.

This is one reason poker is interesting. The best hand doesn't always win — the last person standing does.

---

## Showdown Etiquette — What Beginners Get Wrong

### Mistake 1: Waiting for the caller to show first

You bet the river. Someone calls you. You freeze and wait for them to show. That's backwards. ==You show first — you were the last aggressor.== Waiting looks like slow rolling even when it isn't.

### Mistake 2: Mucking before the dealer reads the hand

You're pretty sure you lost. You slide your cards face-down toward the muck. Dealer pulls them in. Turns out you had the winner. Hand is dead — pot gone. ==Never muck until you're certain.== Let the dealer read both hands.

### Mistake 3: Demanding to see every mucked hand

In many cardrooms, if you win a pot uncontested (everyone folded), you can ask to see one opponent's mucked hand — but this is considered rude if done repeatedly. It's a rule, not an etiquette invitation. Use it sparingly.

### Mistake 4: Not knowing you can show early

There's no rule against flipping your hand before it's officially your turn. ==g:If you have the nuts or a very strong hand, show immediately.== Other players appreciate it. It speeds up the game. And it's the opposite of slow rolling.

---

:::readnext[Keep reading]
/en/blog/holdem-game-order | The Order of Play | /images/blog-holdem-game-flow.webp
/en/blog/holdem-all-in-rules | All-In Rules & Side Pots | /images/holdem-all-in-rules-hero.webp
:::

## FAQ

**Q. Who shows cards first at poker showdown?**

A. The last player to make an aggressive action (bet or raise) on the final betting round must show first. If the final round was checked through by all players, the first active player to the left of the dealer button shows first, and the action proceeds clockwise.

**Q. Do you have to show your cards if you get called at showdown?**

A. Yes — if you were the last bettor or raiser on the river, you must show first when called. If you called someone else's bet, you can muck face-down after seeing their hand if you've lost. However, any player at the table can request the dealer to reveal a called hand that was mucked, in most cardrooms.

**Q. Can you muck at showdown without showing?**

A. Yes, but only if you clearly lost. Once the winner's hand is shown, losing players can muck face-down. The exception is if your hand was called — opponents may request to see it. Never muck before the dealer reads both hands if there's any uncertainty about who won.

**Q. What is slow rolling in poker and why is it bad?**

A. Slow rolling is deliberately delaying showing a winning hand you already know is the best. It's legal but universally disliked because it's seen as deliberately humiliating the opponent. If you hold the nuts or a clear winner, flip your cards immediately. The speed of your show says a lot about your character at the table.

**Q. In an all-in situation, who shows their cards first?**

A. When a player goes all-in and no further betting is possible, all hands involved in that pot are typically shown face-up before or during the community card runout. If there is a side pot with continued betting, the last aggressor among those players shows first for the side pot. The all-in player's hand is shown separately for the main pot.

**Q. What does "cards speak" mean in poker?**

A. Cards speak means the best hand wins based on what the cards actually show — not based on what players say. A player who misreads their hand and declares the wrong hand still wins if their actual cards are the best hand. Conversely, a player who mucks without verifying they lost has no claim to the pot, even if their hand would have won.

**Q. Do you have to show your cards if you win without a showdown?**

A. No. If everyone else folds before the river showdown, you win the pot immediately and never have to reveal your hole cards. Showing is optional — some players flip a bluff to needle opponents, but you are never required to show a hand that won uncontested.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Texas Hold'em Rules for Beginners</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Full rules — blinds to showdown</div>
  </a>
  <a href="/en/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Split Pot</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Split Pot and Side Pot Rules</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">When the pot is chopped and how side pots work</div>
  </a>
  <a href="/en/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tiebreaker</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Kicker and Tie-Breaker Rules</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Same hand — who wins at showdown?</div>
  </a>
</div>
`.trim(),
};
