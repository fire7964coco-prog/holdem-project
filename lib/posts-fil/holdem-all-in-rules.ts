import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "Mga Patakaran sa All-In sa Texas Hold'em: Side Pots, Re-Raise at Showdown",
  seoTitle: "Nag-all-in ka, pero litong-lito? — All-In Rules at Side Pots",
  desc: "Isinugod mo lahat ng chips pero di sigurado kung ano ang mapapanalunan mo? Mga all-in rules ng Texas Hold'em: table stakes, side pot, re-raise at showdown.",
  tldr: "Ang all-in ay pagtaya ng lahat ng chips mo. Ang kaya mo lang panalunan ay ang na-match mo sa bawat kalaban (ang main pot). Ang sobrang taya ng mas malalaking stack ay bumubuo ng side pot na hindi mo makukuha. Ang all-in na kulang sa full raise ay HINDI nagbubukas ulit ng betting para sa mga nakakilos na.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-13",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "♠",
  tags: [
    "all in rules texas holdem",
    "ano ang all in sa poker",
    "side pot poker paliwanag",
    "paano hinahati ang pot poker",
    "all in showdown rules",
  ],
  image: "/images/holdem-all-in-rules-hero.webp",
  imageAlt: "All-in sa Texas Hold'em — itinutulak ng manlalaro ang lahat ng chips sa gitna habang hinihiwalay ng dealer ang main pot at side pot sa green felt",
  content: `
Short-stacked ka na. Nag-shove ka. Nag-call ang nasa likod mo. May pangatlong player na nag-re-raise. Sinimulan nang paghiwa-hiwalayin ng dealer ang chips sa dalawang tumpok.

Wala kang kaalam-alam kung ano ang nangyayari.

Napunta na ako sa ganoong mesa. Noong una akong nag-all-in sa isang live cash game, hindi ko alam kung may mapapanalunan pa ba ako, kung puwede pang mag-re-raise ang kalaban, o kung aling tumpok ba ng chips ang akin. Walang nagpaliwanag sa akin.

==Sinasaklaw ng gabay na ito ang bawat sitwasyon: main pot, side pot, sino ang puwedeng mag-re-raise, at ang showdown order.== Wala nang matigilan pag sinimulan ng dealer bilangin ang mga stack. (Kung malabo pa sa'yo ang basic betting flow, sa [beginner's rules guide](/fil/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") muna ito ipinapaliwanag.)

## Ano ba ang "All-In" sa Texas Hold'em?

Ang all-in ay ibig sabihin taya mo lahat ng chips na nasa harap mo. Kapag committed ka na, hindi ka na puwedeng magdagdag ng chips — at hindi ka puwedeng pilitin na mag-fold.

Ang pundasyon nito ay ang **table stakes rule**: ang kaya mo lang itaya ay ang chips na hawak mo sa mesa sa umpisa ng hand. Hindi ka puwedeng kumuha ng dagdag na pera sa bulsa, manghiram sa kaibigan, o magdagdag ng relo o susi ng kotse — pang-pelikula lang 'yan.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Termino | Kahulugan |
|------|---------|
| Push / Shove / Jam | Slang para sa pag-all-in |
| Table stakes | Ang kaya mo lang itaya ay ang hawak mo sa umpisa ng hand |
| Double up | Manalo sa all-in at doblehin ang stack mo |
| Main pot | Ang pot na kaya ng lahat — kasama ang all-in player — na panalunan |
| Side pot | Chips na mga mas malalaking stack lang ang makakapanalo; excluded ang all-in player |

</div>

==g:Kapag all-in ka na, guaranteed mong makikita ang lahat ng natitirang community cards.== Walang makaka-bluff sa'yo palabas ng hand. Buhay pa rin ang cards mo hanggang river.

---

## Paano Mag-Declare ng All-In

Dalawang valid na paraan:

**1. Verbal declaration** — Sabihin mo nang malinaw ang "all-in" para marinig ng dealer at ng mga kalaban. Ito ang pinakaligtas na paraan. Kapag nasabi mo na, committed ka na.

**2. Itulak lahat ng chips pasulong** — I-slide mo ang buong stack mo papuntang gitna sa isang malinis na kilos. Kapag paunti-unti mong itinulak ang chips, puwedeng magmukhang string bet, kaya isang kilos lang lahat.

![All-in showdown sa Texas Hold'em — isang K♠ 10♣ 7♦ 4♥ 2♣ na board na may chips na hiwalay bilang naka-label na main pot at side pot](/images/holdem-all-in-declare.webp)

==r:Huwag na huwag kang magtutulak ng isang chip nang walang sinasabi — bibilangin lang iyon ng dealer bilang halaga ng chip na iyon, hindi ang buong stack mo.== Palaging i-declare nang malakas ang "all-in", o igalaw ang buong stack mo nang minsanan.

---

## Paano Gumagana ang Side Pots sa Poker? (Bakit Naka-cap ang All-In Player)

Ang all-in player ay puwede lang manalo ng inilagay niya, na i-multiply sa bilang ng mga nag-call. Anumang chips na na-bet nang lampas doon ay bumubuo ng **side pot** na pag-aari lang ng mga nagbigay nito.

![Side pot pagkatapos ng all-in sa Texas Hold'em — hinihiwalay ng dealer ang chips sa main pot at side pot habang naka-cap si Player A](/images/holdem-all-in-side-pot.webp)

### 3-Player na Halimbawa (Standard)

| Player | Stack | Aksyon |
|--------|-------|--------|
| Player A | 100 chips | All-in |
| Player B | 300 chips | Nag-call ng 100, tapos nag-bet ng 50 pa |
| Player C | 300 chips | Nag-call ng 100, tapos nag-call ng 50 |

**Main pot:** 100 × 3 = **300 chips** (eligible sina A, B, C)

**Side pot:** 50 × 2 = **100 chips** (sina B at C lang ang eligible)

==Puwedeng manalo si Player A ng 300-chip na main pot sa showdown. Pero kahit pinakamalakas ang hand ni A sa lahat, hindi niya kayang hawakan ang 100-chip na side pot.== Si B o C ang mananalo nito.

### 4-Player na Multi-Stack na Halimbawa

Dito nagiging komplikado — at dito karamihan sa mga beginner nawawala.

| Player | Stack | Nag-all-in ng |
|:---|:---:|:---:|
| A | 100 | 100 |
| B | 200 | 200 |
| C | 500 | 500 |
| D | 500 | nag-call ng lahat |

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pot | Halaga | Eligible na players |
|:---|:---:|:---|
| Main pot | 100 × 4 = **400** | A, B, C, D |
| Side pot 1 | 100 × 3 = **300** | B, C, D (naka-cap si A) |
| Side pot 2 | 300 × 2 = **600** | C, D (naka-cap sina A at B) |
| **Total** | **1,300** | — |

</div>

Ang patakaran: ==bawat side pot ay binubuo sa pamamagitan ng pagkuha ng difference hanggang sa susunod na pinakamaliit na stack × ang bilang ng players na tumutugma dito.== Magsimula ka sa pinakamaliit na stack papunta sa pinakamalaki.

---

## Nagbubukas Ba Ulit ng Betting ang Pag-All-In? — Ang Patakarang Madalas Namamali ang mga Player

==r:Ito ang pinaka-disputed na all-in rule sa mga live table — nakita ko ang dalawang player na nagtalo tungkol dito nang limang minuto habang naghihintay ang buong mesa. Pareho silang mali.==

**Ang patakaran:** Kung ang isang player ay nag-all-in ng **kulang sa [full raise](/fil/blog/holdem-betting-actions)**, ang all-in na iyon ay HINDI nagbubukas ulit ng betting para sa mga player na nakakilos na sa round na iyon.

![Re-raise rule pagkatapos ng all-in sa poker — nag-all-in si Player B ng kulang sa full raise, puwede lang mag-call o mag-fold si Player A](/images/holdem-all-in-reraise-rule.webp)

**Halimbawa:**

Blinds $1/$2. Apat na player ang nakakita ng flop.

1. Nag-bet si Player A ng $10.
2. Nag-all-in si Player B ng **$14** ($4 lang na mas mataas sa bet ni A na $10 — hindi full raise, na mangangailangan ng at least $20).

Ano ang mangyayari kay Player A, at kay Player C na hindi pa nakakilos?

- Nakakilos na si Player A (nag-bet ng $10) at ngayon may kaharap na incomplete raise lang. Dahil ang all-in ni B na $14 ay **kulang sa full raise**, ang aksyon ay HINDI nabubuksan ulit para kay Player A. ==Puwede lang mag-call o mag-fold si A — hindi siya puwedeng mag-re-raise.==
- Hindi pa nakakilos si Player C — **puwede pa ring mag-raise nang normal si Player C**.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Halaga ng all-in | Full raise? | Nagbubukas ng betting? |
|--------------|-------------|-----------------|
| Kulang sa full raise | Hindi | Hindi — call o fold lang ang mga nakakilos na |
| Full raise o higit pa | Oo | Oo — lahat ay puwedeng mag-re-raise ulit |

</div>

Bakit umiiral ito? Pinoprotektahan nito ang mga player mula sa pagkakapilit sa mas malalaking raise dahil sa partial all-in. Ang full raise ay senyales ng tunay na aggression — ang short-stack all-in na tira-tira lang, hindi.

### Advanced na Kaso: Paano Kung Maraming Player ang Nag-All-In nang Maliit?

Ito ang bersyon na nakakalito kahit sa mga regular. Maraming maliliit na all-in ay puwedeng **magsama-sama** hanggang umabot sa full raise — at kung ang combined increments nila ay umabot sa threshold, nagbubukas ulit ang betting para sa mga nakakilos na.

Ito ang official TDA "re-opening the bet" rule, at sinusunod ito ng karamihan sa mga card room.

**Halimbawa (Blinds $1/$2, sa flop):**

1. Nag-bet si Player A ng $10.
2. Nag-all-in si Player B ng **$14** (+$4 increment — mag-isa hindi full raise)
3. Nag-all-in si Player C ng **$21** (+$7 increment — mag-isa hindi full raise)

Combined increments: $4 + $7 = **$11** — umaabot ito sa $10 minimum raise threshold.

**Resulta: NAGBUBUKAS ulit ang betting para kay Player A.** Puwede si A na mag-fold, mag-call, o mag-re-raise, kahit walang isa man kina B o C ang gumawa ng full raise.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in ni B | All-in ni C | Combined increment | Nagbubukas kay A? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — mababa sa $10 | ❌ Hindi |
| $14 (+$4) | $21 (+$7) | $11 — umaabot sa $10 | ✅ Oo |
| $15 (+$5) | $25 (+$10) | $15 — umaabot sa $10 | ✅ Oo |

</div>

Ang minimum raise threshold ay palaging ang *huling full valid bet o raise* — hindi anumang cumulative total.

### Mabilis na Decision Guide — Nagbubukas Ba ng Betting ang All-In na Ito?

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Sitwasyon | Nagbubukas para sa mga nakakilos na? |
|---|---|
| Iisang all-in < full raise | ❌ Hindi — call o fold lang |
| Iisang all-in ≥ full raise | ✅ Oo — lahat puwedeng mag-re-raise |
| Maraming maliliit na all-in, combined < full raise | ❌ Hindi |
| Maraming maliliit na all-in, combined ≥ full raise | ✅ Oo |
| Player na HINDI PA nakakilos | ✅ Laging puwedeng mag-raise (kahit ano pa) |

</div>

---

## Mga Patakaran sa All-In Showdown

Kapag kumpleto na ang lahat ng betting at may all-in na player, ganito ang nangyayari sa showdown:

1. **Binubuksan ang cards na nakaharap.** Sa tournament, karaniwang itinatabla ang lahat ng hand na sangkot sa all-in kapag kumpleto na ang betting. Sa cash game, ang standard [last-aggressor showdown rule](/fil/blog/holdem-showdown-rules) muna ang gumagana, tapos magpapakita ang all-in players.
2. **Ang side pot muna ang binibigay.** Ni-resolve muna ng dealer ang pinaka-huling nabuong side pot, tapos babalik nang paurong hanggang main pot.
3. **Cards speak.** Ang pinakamalakas na hand ang mananalo sa bawat pot na eligible sila — kahit ano pa ang sabihin ng mga player na hawak nila.
4. **Posible ang maraming panalo.** Puwedeng manalo si Player A ng main pot. Puwedeng manalo si Player B ng side pot. Walang kukuha ng lahat dahil lang nanalo sila ng "kanilang" pot.

==g:Puwedeng manalo ang isang player ng main pot pero matalo sa side pot. Parehong valid ang dalawang resulta.==

**Special case:** Kung isang side pot ay may iisang player na lang na natira (nag-fold lahat ng iba), agad na mababawi ng player na iyon ang chips na iyon — walang kailangang showdown para sa pot na iyon.

---

## Ano ang Mangyayari Kung Mali ang Pag-All-In Mo? — 5 Pagkakamaling Iwasan

### Pagkakamali 1: Iniisip na kaya ng all-in player na panalunan ang side pot
Hindi nila kaya. Kapag naka-cap na ang all-in player, anumang dagdag na chips na na-bet ng mas malalaking stack ay pag-aari ng pot na walang karapatan ang all-in player.

### Pagkakamali 2: Hindi alam ang re-raise eligibility rule
Ang partial all-in ni Player C ay hindi nagbibigay kay Player A ng pangalawang pagkakataon na mag-re-raise. Ang pag-alam nito nang husto ay pumipigil sa mga away bago pa man magsimula.

### Pagkakamali 3: Pagdagdag ng chips mula sa bulsa habang nasa gitna ng hand
Table stakes. Ang nasa mesa ang tanging kaya mong itaya. Kung all-in ka ng $80 at ang pot ay $400, $80 lang ang kaya mong panalunan sa bawat nag-call.

### Pagkakamali 4: Masyadong mabilis na pag-muck ng hand mo
All-in ka para sa main pot. Dalawa pang player ang naglalaban para sa side pot. Huwag mag-muck — buhay pa ang hand mo para sa main pot. ==Palaging hintayin ang dealer na i-resolve ang bawat pot bago mo hawakan ang cards mo.==

### Pagkakamali 5: Pag-all-in dahil sa inis
Ang all-in ang pinakamalakas na galaw sa mesa. Pinipilit nito ang mga kalaban sa all-or-nothing na desisyon. Nawawala ang kapangyarihan na iyon pag basta-basta kang nag-shove. Gamitin mo sa tamang sandali — short stack pressure, value hands na gusto mong ma-call, bluff na may tunay na fold equity.

---

:::readnext[Magpatuloy sa pagbabasa]
/fil/blog/texas-holdem-rules-for-beginners | Mga Patakaran ng Texas Hold'em para sa Beginners | /images/rules-texas-holdem.webp
/fil/blog/holdem-showdown-rules | Showdown Rules, Ipinaliwanag | /images/holdem-showdown-rules-hero.webp
:::

## FAQ

**Q. Puwede ka bang mag-all-in ng kulang sa big blind?**

A. Oo. Kung ang chips mo ay mas kaunti sa big blind, automatic kang all-in sa kung ano man ang hawak mo pagdating ng blinds sa'yo. Babayaran pa rin ng ibang player ang buong big blind — anumang halaga na lampas sa kontribusyon mo ay pupunta sa side pot.

**Q. Ano ang mangyayari kung mananalo ka sa all-in pero matatalo sa side pot?**

A. Kukunin mo ang main pot (ang na-match mo sa bawat player) at kukunin ng ibang player ang side pot. Bawat isa ay mananalo ng bahagi na eligible siya.

**Q. Nagpapakita ba ang pag-all-in ng hand mo?**

A. Sa tournament, oo — kapag tapos na ang lahat ng betting na may all-in, karaniwang itinatabla nang nakaharap ang lahat ng sangkot na hand. Sa live cash game, standard showdown rules ang gumagana: unang magpapakita ang last aggressor, tapos ang iba ay magpapakita o mag-muck.

**Q. Puwede bang mag-run it twice sa isang poker all-in?**

A. Ang run it twice (pag-deal ng natitirang community cards nang dalawang beses at paghahati ng pot) ay pinapayagan sa maraming cash game kung magkasundo ang dalawang player pagkatapos ng all-in. Karaniwang hindi ito pinapayagan sa tournament. Dapat munang mapagkasunduan ang opsyon bago i-run out ang natitirang community cards.

**Q. Ano nga ba talaga ang "table stakes" rule?**

A. Ang table stakes ay ibig sabihin ang kaya mo lang itaya ay ang chips na nasa harap mo noong nagsimula ang hand. Hindi ka puwedeng magdagdag ng pera habang tuluy-tuloy pa ang hand. Pinoprotektahan nito ang dalawang player — hindi ka kailanman mapipilit na i-risk ang higit sa stack mo, at hindi biglang makakapag-bet ang mga kalaban nang lampas sa kaya mong i-cover.

**Q. Kung dalawang player ang nag-all-in sa magkaibang halaga, sino ang mauuna magpakita?**

A. Ang huling all-in na isang bet o raise ang huling aggressive action at siyang unang magpapakita. Ang all-in na basta lang nag-call ng mas mababang halaga ay hindi aggressive — ang orihinal na nag-bet pa rin ang unang magpapakita. Sa cash game, kung ito ay called all-in na walang karagdagang aksyon, puwedeng mag-muck ang nag-call kung matalo siya pagkatapos makita ang hand ng all-in player (sa tournament nananatiling nakaharap ang lahat ng sangkot na hand).

**Q. Iba ba ang all-in rules sa tournament kumpara sa cash game?**

A. Pareho ang core rules, pero may dalawang praktikal na pagkakaiba. Una, sa tournament ang lahat ng hand na sangkot sa all-in ay itinatabla nang nakaharap sa sandaling kumpleto ang lahat ng betting (TDA Rule 16) — hindi ka puwedeng mag-muck hanggang showdown. Sa cash game, standard showdown order ang gumagana at puwedeng mag-muck ang mga player. Pangalawa, ang run it twice ay karaniwan sa cash game (kung magkasundo ang dalawang player) pero karaniwang hindi pinapayagan sa tournament.

---

## Mga Kaugnay na Post

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fil/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Mga Patakaran ng Texas Hold'em para sa Beginners</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kumpletong rules mula blinds hanggang showdown</div>
  </a>
  <a href="/fil/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Showdown Rules</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Sino ang unang magpapakita at kailan puwedeng mag-muck</div>
  </a>
</div>
`.trim(),
};
