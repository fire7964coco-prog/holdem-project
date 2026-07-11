import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament",
  seoTitle: "Never Played a Poker Tournament? Here's How It Works",
  title: "How Poker Tournaments Work — Buy-Ins, Formats & Day 1",
  desc: "How do poker tournaments work? Buy-ins, blind structure, payout structure, freezeout vs PKO vs satellite formats, and a first-timer Day-1 checklist.",
  tldr: "In a poker tournament you pay a fixed buy-in for chips, blinds increase on a timer until one player holds all chips. Top 10–15% of players cash. Formats include freezeout, PKO, satellite, and deepstack — enter via direct buy-in, satellite, or online pre-registration.",
  category: "tournament",
  date: "2026-06-16",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "14 min",
  emoji: "🏆",
  image: "/images/holdem-tournament-hero.webp",
  imageAlt: "Crowded live poker tournament floor with the blind clock showing 12,000/24,000 as players contest a hand",
  tags: [
    "how do poker tournaments work",
    "poker tournament structure",
    "poker tournament blind structure",
    "poker tournament payout structure",
    "types of poker tournaments",
    "freezeout poker tournament",
    "pko poker",
    "satellite poker tournament",
    "how to play tournament poker",
  ],
  content: `
I walked into my first live poker tournament with $200, a vague idea of how Texas Hold'em worked, and zero clue what a "blind level" or "bubble" meant.

Four hours later I was out. But I knew exactly what every term meant, why I lost, and when to come back.

This guide is everything I wish someone had told me before that day — how tournament structure actually works, which format you're entering, how to register without looking clueless, and what Day 1 feels like hour by hour.

---

### At a Glance

:::stripe
10–15% | of the field typically gets paid
20–40 min | per blind level in live events
$100+$9 | how a typical buy-in splits — prize pool + fee
:::

## What Is a Poker Tournament? (30-Second Answer)

A poker tournament is a competition where everyone pays the same entry fee (the **buy-in**), receives the same number of starting chips, and plays until one person holds every chip in the game.

**One-sentence summary:** In a cash game your chips are real money and you can leave anytime. In a tournament, your maximum loss is exactly the buy-in — but you're playing for a share of a much bigger prize pool.

That single difference changes chip value, blind pressure, and strategy from the ground up. → Full breakdown: [Poker Tournament vs Cash Game — Which Should You Play?](/en/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp")

---

## Poker Tournament Structure — Buy-Ins, Fees, and Starting Stacks

When you register, you pay a buy-in. That money splits two ways:

| $109 buy-in (written as "$100+$9") | Where it goes |
|:---|:---|
| **$100** | → Prize pool, shared by all entrants |
| **$9** | → House fee (rake) kept by the venue |

Major live events typically keep 8–10% of the buy-in as a fee (small daily tournaments often take more) — here $9 out of $109, about 8.3%. How that fee works (and why online differs from live) is covered in [how poker rake works](/en/blog/holdem-rake).

In exchange, you receive a **starting stack** — commonly 10,000 to 50,000 tournament chips, usually 100–300 big blinds deep at Level 1.

**Your starting stack has no cash value.** A 10,000-chip stack doesn't equal $10,000 — it's just your tournament life. All that matters is whether you have more chips than the other players when the money spots arrive.

Every tournament publishes its structure in a **structure sheet**: starting stack, blind levels, level duration, ante schedule, and payouts. Ask for it at registration — it's the single most useful document in the room.

---

## Poker Tournament Blind Structure — Levels, Antes, and the Clock

This is what most beginner guides skip, and it's the most important mechanical concept in tournaments.

**Blinds start small and increase on a timer — usually every 20–40 minutes in live events.**

| Level | Blinds | Antes | Your 10k stack = |
|:---|:---:|:---:|:---|
| 1 | 25 / 50 | — | 200 big blinds |
| 3 | 75 / 150 | 150 | 67 big blinds |
| 6 | 200 / 400 | 400 | 25 big blinds |
| 9 | 500 / 1,000 | 1,000 | 10 big blinds |

Notice: **you didn't lose a single chip** between Level 1 and Level 9. But your stack went from 200BB to 10BB because the blinds rose. This is how tournaments force action and eventually eliminate players.

==g:Rule of thumb: below 20 big blinds, you're in push-or-fold territory. Below 10 big blinds, you must shove almost any playable hand before the blinds eat you alive.==

When you get there, the exact shoving ranges live in [short-stack strategy — when to push or fold](/en/blog/holdem-short-stack).

**What are antes?** After the early levels, most tournaments add an "ante" — an extra forced bet collected every hand on top of the blinds. In most modern live events this is a single "big blind ante" equal to one big blind, paid by the big-blind player on behalf of the whole table (which is why the ante column above matches the big blind). This increases the pot size and speeds up play. When antes kick in, your chips shrink even faster.

New to blinds altogether? Start with [what the small blind and big blind actually are](/en/blog/holdem-blind-meaning) — it makes every "BB" number above click.

---

## The 4 Stages Every Tournament Goes Through

### Stage 1 — Early Levels (100–200 BB deep)
You have room to play. Speculative hands, set-mining, seeing flops — all reasonable. Most beginners play too tight here. The blinds are cheap; learn the table.

### Stage 2 — Middle Stages (30–60 BB)
Antes are usually in by now. Stack pressure starts. Players with short stacks start shoving. This is where most of the field gets eliminated.

### Stage 3 — The Bubble
The most stressful stage. One more elimination and everyone remaining **gets paid** (ITM = In The Money). Short stacks freeze up. Big stacks bully. Smart play here can add real equity without winning a single pot — [the bubble deserves its own guide](/en/blog/holdem-bubble).

### Stage 4 — Final Table
Usually 6–9 players left. Payouts increase sharply with each elimination. [ICM (the Independent Chip Model)](/en/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") governs decision-making here — chip EV and real-money EV diverge significantly.

---

## Types of Poker Tournaments — Freezeout, PKO, Satellite, Deepstack & More

| Format | How it works | Best for |
|:---|:---|:---|
| **Freezeout** | One buy-in, no rebuy. Bust = out. | Beginners — fixed cost |
| **Rebuy / Re-entry** | Pay again after busting (during early levels) | Aggressive players with a bigger bankroll |
| **Bounty / KO** | Win a fixed cash bounty for each player you eliminate | Action players — extra income per knockout |
| **PKO (Progressive KO)** | Bounties grow with each knockout — part paid to you, part added to your head | High-variance, big-upside players |
| **Deepstack** | Bigger starting stacks (typically 100–200BB+) with slower levels | Players who want more postflop play |
| **Satellite** | Prize = entry into a bigger tournament, not cash | Budget players targeting major events |
| **MTT** | Multi-Table Tournament — large field across many tables | Any — the most common format |
| **SNG (Sit & Go)** | Starts when seats fill (no set start time) — usually 6–9 players | Quick game, no scheduling needed |

**For beginners:** Start with a **Freezeout MTT** — known cost, simple rules, no rebuy decisions to stress about.

The three format names you'll see most often on a tournament schedule deserve a proper definition:

### What Is a Freezeout Poker Tournament?

A freezeout poker tournament gives every player exactly one buy-in. Lose your chips and you're eliminated — no rebuys, no re-entries. It's the original tournament format, and the best one for beginners because your total cost is fixed the moment you register.

### What Is PKO Poker? (Progressive Knockout)

A PKO (Progressive Knockout) is a bounty tournament where typically around half of each buy-in goes to the regular prize pool and the other half becomes a bounty on that player's head. When you knock someone out, you typically collect part of their bounty in cash immediately, and the rest is added to your own bounty — making you a bigger target as you win. The exact split varies by site and event; 50/50 is common but not universal, so check the lobby or structure sheet. (A full PKO strategy guide is coming to this cluster soon.)

### What Is a Deepstack Poker Tournament?

A deepstack poker tournament starts you with far more chips relative to the blinds — typically 100 big blinds or more, often 200BB+ — and usually pairs that with longer blind levels. More chips and a slower clock mean more postflop play, more room to recover from a mistake, and longer days.

**What about rebuys and add-ons?** In a rebuy event you can pay again after busting during a set early window; an add-on is a one-time optional chip purchase usually offered when that window closes. After that, the event plays out like a freezeout.

---

## What Is a Satellite Poker Tournament?

A satellite is a smaller tournament where the prize isn't cash — it's **an entry ticket** into a larger, more expensive tournament.

**Example:**
- WSOP Main Event buy-in: **$10,000**
- Satellite buy-in: **$500** (20 players)
- Prize: **1 seat** into the Main Event

Instead of spending $10,000, you compete in a $500 tournament against 19 other players. One person wins the $10,000 seat.

**Chained satellites** go even lower. A $5 super-satellite → $55 qualifier → $215 event → $1,050 Main Event. Many players at major events entered through a satellite chain for a fraction of the direct buy-in.

==g:Satellite strategy is different from regular tournament play — once you have enough chips to guarantee a seat, stop taking risks. Fold even good hands to avoid busting on the bubble.==

---

## How to Enter a Poker Tournament — 3 Ways

### Option A: Direct Buy-In at the Casino (Easiest)
1. Find the poker room registration desk (or tournament desk for larger events)
2. Present **valid photo ID** + loyalty card if required
3. Pay the buy-in in cash, chips, or card
4. Receive your seat card (table number + seat number)
5. Go to your table, give the seat card to the dealer, receive your chips
6. Count your starting stack before playing your first hand — errors happen

### Option B: Online Pre-Registration
Most major live festivals let you register online in advance:
- Set up an account on the event's platform (e.g., Bravo Poker Live for WSOP, the PokerStars Live app for EPT/APPT events)
- Pay the buy-in online
- Arrive at the venue → ID verification → print seat card at a kiosk or pick up at desk
- Skips the registration line — worth doing for large events

### Option C: Satellite Qualifier
- Find satellite tournaments online (PokerStars Power Path, GGPoker SuperSatellites) or on-site
- Win the satellite → receive a seat ticket for the target event
- Arrive at the main event registration desk → present ticket + ID → receive seat card

**Registration usually opens 1–3 hours before the tournament start.** For major festivals, register the day before online to guarantee a seat.

Playing in Asia? See the [APT Incheon 2026 guide](/en/blog/apt-incheon-2026-guide) for a real festival's schedule, buy-ins, and registration flow.

---

## How to Play Tournament Poker — Strategy by Stage

One post can't teach full tournament strategy — that's what the cluster guides are for — but here is the stage-by-stage skeleton every winning plan hangs on:

**Early levels (100BB+):** Play tight, position-aware poker and see cheap flops with hands that can crack big pairs. A disciplined [starting hands chart](/en/blog/holdem-starting-hands-chart) prevents most beginner disasters. Don't bluff off your stack in the first hour — nobody folds at Level 1.

**Middle stages (30–60BB):** Antes make every pot worth fighting for. Open lighter from late position, steal blinds, defend your big blind more often, and start tracking who is short-stacked at your table.

**Short stack (under 20BB):** Push-or-fold takes over — the math here is essentially solved, and guessing costs real money. Learn the shove ranges in [short-stack strategy](/en/blog/holdem-short-stack).

**Bubble and final table:** Survival math overtakes chip math. Payout pressure changes which hands you can play — the bubble and ICM guides linked in the stages section above cover exactly how.

---

## What Happens on Day 1 — Hour by Hour

This is what no other guide tells you. Here's a realistic Day 1 timeline for a live $300 freezeout with a 12pm start time:

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:var(--primary);margin-bottom:14px">Day 1 Timeline — $300 Freezeout, 10,000 Starting Chips</div>
<div style="display:grid;gap:10px;font-size:13px">
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">10:30am</div>
<div style="color:var(--foreground)">Registration opens. Show ID, pay, get seat card. Find your table.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">12:00pm</div>
<div style="color:var(--foreground)">Cards in the air. Level 1: blinds 25/50. You have 200BB. Play exploratory poker.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">1:00–3pm</div>
<div style="color:var(--foreground)">Levels 2–4. Late registration still open. Field grows. Some players already bust.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">~3:30pm</div>
<div style="color:var(--foreground)">Late reg closes. Final field size announced. Prize pool confirmed. Antes kick in.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">~5:00pm</div>
<div style="color:var(--foreground)">Dinner break (usually 1 hour). ~40% of field eliminated. Tables are consolidated.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">6–9pm</div>
<div style="color:var(--foreground)">Bubble approaches. Hand-for-hand play begins. Pressure peaks. One bust = everyone gets paid.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0">
<div style="color:#22c55e;font-weight:700">9–11pm</div>
<div style="color:var(--foreground)">ITM — money bubble breaks. Remaining players bag chips or play to a final table tonight.</div>
</div>
</div>
</div>

---

## Poker Tournament Payout Structure — Who Gets Paid What

**Typical structure:** Top 10–15% of the field gets paid.

| Field Size | Players Paid | Min-Cash (typical) | 1st Place (typical) |
|:---|:---:|:---:|:---|
| 100 | ~13 | 1.5–2x buy-in | 25–30% of prize pool |
| 500 | ~60 | 1.5–2x buy-in | 20–25% of prize pool |
| 2,000 | ~250 | 1.7–2.2x buy-in | 13–18% of prize pool |
| 10,000 | ~1,200 | 1.5–2x buy-in | 8–12% of prize pool |

**Real example (WPT Seminole Rock 'N' Roll Poker Open Championship 2024, $3,500 buy-in, 1,435 entries):**
- Prize pool: $4,592,000 ($3,200 of each buy-in goes to the pool — the rest is the fee)
- Players paid: 181 (~12.6% of the field)
- Min-cash: roughly 1.5x the buy-in
- 1st place: $662,200 (~14% of the prize pool)

The payout structure is always announced before the tournament starts. Ask for the **structure sheet** at registration — it lists blind levels, antes, starting stack, and payout schedule.

---

## Tournament Glossary — Terms You'll Hear on Day 1

These 13 terms cover most of what you'll hear at the table. For the full A-to-Z, see the [poker glossary](/en/blog/holdem-glossary).

| Term | What it means |
|------|--------------|
| **ITM** | In The Money — you've reached a paying position |
| **Bubble** | The stage just before ITM — one elimination from everyone cashing |
| **Hand-for-hand** | All tables play one hand at a time during the bubble to prevent stalling |
| **Structure sheet** | The official document listing blind levels, antes, and payouts |
| **Chip leader** | The player with the most chips |
| **Short stack** | A player with very few chips relative to the blinds |
| **Shove / JAM** | Go all-in (push your entire stack into the middle) |
| **Late reg** | Late registration window — you can enter after the tournament starts |
| **Re-entry** | Buying back in after busting (only during the late reg window) |
| **Satellite** | A qualifier tournament where the prize is a seat in a bigger event |
| **PKO** | Progressive Knockout — bounty tournaments where the prize grows |
| **ICM** | Independent Chip Model — a mathematical framework for tournament chip value |
| **Min-cash** | The lowest payout position — the minimum you earn for making the money |

---

## First Tournament Checklist

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:var(--primary);margin-bottom:14px">Before You Leave Home</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Valid photo ID</strong> — passport or driver's license. No exceptions.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Buy-in + 20% extra</strong> in cash — some venues don't take cards</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Casino loyalty card</strong> if required (e.g., Caesars Rewards for WSOP)</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Registration confirmation email</strong> if you pre-registered online</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Comfortable clothes — tournaments run 6–12 hours. Bring a jacket (card rooms are cold).</span></div>
</div>

<div style="font-size:13px;font-weight:700;color:var(--primary);margin:16px 0 10px">At the Venue</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Arrive 30–45 min before start. Registration lines can be long.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Count your starting chips before playing your first hand. Tell the dealer immediately if short.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Ask for the structure sheet — know when antes kick in and when the dinner break is.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(255,150,0,0.12);border:1.5px solid rgba(255,150,0,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#ff9600">!</span><span><strong>No phones at the table while a hand is in play</strong> — most card rooms penalize this.</span></div>
</div>
</div>

---

:::readnext[Keep reading]
/en/blog/holdem-tournament-vs-cash-game | Tournament vs Cash Game | /images/tournament-table-action.webp
/en/blog/holdem-bubble | What Is the Bubble in Poker? | /images/holdem-bubble-hero.webp
/en/blog/apt-incheon-2026-guide | APT Incheon 2026 Guide | /images/apt-incheon-2026-guide-hero.webp
:::

## FAQ

**Q. How long does a poker tournament last?**

A. Daily tournaments at local casinos typically run 4–8 hours. Major series events like WPT championships run 4–6 days with multiple day bags — and the WSOP Main Event stretches close to two weeks from its Day 1 flights to the final table. When you register, ask for the structure sheet — it will tell you the expected day length based on blind level duration and starting field size.

**Q. What is the difference between PKO and bounty tournaments?**

A. In a regular bounty (knockout) tournament, every player carries a fixed bounty — knock someone out and you collect the full amount, and bounties never change. In a PKO (Progressive Knockout), bounties grow: you typically collect part of the eliminated player's bounty in cash and the rest is added to the bounty on your own head. That makes chip leaders in a PKO increasingly valuable targets as the event goes on.

**Q. What are the rules on rebuys and add-ons?**

A. In a rebuy tournament you can pay the entry fee again after busting (or sometimes when your stack falls below a threshold), but only during a set rebuy period — usually the first few blind levels. An add-on is a one-time optional chip purchase, typically offered to everyone at the end of the rebuy period regardless of stack size. Once that window closes, the event plays out as a freezeout. Exact rules vary by venue, so check the structure sheet.

**Q. Is it legal to host a poker tournament at home?**

A. It depends on your jurisdiction. In many places, private social home games are legal as long as the host takes no rake, entry fee cut, or profit beyond playing — all money goes back to the players. Charging a house fee, taking a percentage of the prize pool, or advertising publicly is what typically turns a home game into illegal gambling. Laws vary widely by country and by state, so check your local regulations before hosting.

**Q. What does ITM mean in poker?**

A. ITM = "In The Money." You've reached a finishing position that guarantees a payout. In a 200-player tournament paying 25 spots, you're ITM once 175 players have been eliminated and only 25 remain. Your min-cash is typically 1.5–2x your buy-in.

**Q. Can you join a poker tournament after it has started?**

A. Yes, during the late registration window — usually the first few blind levels, often two to four hours in. You still get the full starting stack, but since blinds have risen you'll sit down with fewer big blinds than early entrants. Once late reg closes, no new entries are allowed.

**Q. Can you leave a poker tournament early and keep your chips?**

A. No. Unlike a cash game, tournament chips have no cash value and can't be cashed out mid-event. If you walk away, your chips stay in play and keep paying blinds and antes until they're gone. You only receive money if you finish in a paid (ITM) position.

---

## Related Guides

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Deep Dive</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tournament vs Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Chip value, rising blinds, ICM — which format fits you</div>
  </a>
  <a href="/en/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starting Hands Chart</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Which hands to play in early levels</div>
  </a>
  <a href="/en/blog/holdem-short-stack" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Short Stack</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Short-Stack Strategy</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Push-or-fold when the blinds close in</div>
  </a>
  <a href="/en/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Start Here</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Texas Hold'em Rules for Beginners</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Master the basics first</div>
  </a>
  <a href="/en/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Blinds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">What Are the Blinds in Poker?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Blind levels start here — SB, BB, and antes</div>
  </a>
  <a href="/en/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Positions</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Table Positions Explained</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Why your seat drives every tournament decision</div>
  </a>
</div>
`.trim(),
};
