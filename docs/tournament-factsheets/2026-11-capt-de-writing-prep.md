# CAPT Million Baden (de) — 집필 준비 메모

> 2026-10-02 (4) 리서치 워크플로 산출 원문 보존. 🔴 **사실의 정본은 사실 시트 2개**(`2026-11-capt-million-baden.md` · `2026-11-german-poker-masters-rozvadov.md`)다 — 이 메모의 수치·축어가 시트와 다르면 시트를 따른다. 이 메모는 문체·골격·독자 질문·H2 후보·배선 체크리스트 용도.
> ⚠ B절의 제3자 출처(포럼·블로그·hochgepokert)는 «표현» 근거일 뿐 사실 근거가 아니다(§12-B). B-D «King's 입장료·Waidhaus 거리·흡연»은 상충·미확인 → 쓰지 않는다. B-D «GPM 11월 일정 공식 미발견»은 그 뒤 GPM 시트가 kings-resort.com 원문으로 확인했다(해소).

# A. 집필 준비물 (서브 조사 · 2026-10-02 · 읽기 전용 산출)
# de 고유 대회 글 (CAPT Million Baden · German Poker Masters) 집필 준비물

읽기만 했고 파일은 하나도 수정하지 않았습니다. 기준일은 2026-10-02입니다. CAPT 개막 11/19, GPM 개막 11/20이라 오늘 기준 D-48·D-49이고, D-28 게이트(10/22·10/23)를 통과합니다.

## ① 이 글에 필요한 de 문체·용어 규칙 (정본: `docs/translation-terms-de.md`)

- **호칭은 du로 통일합니다(§4).** 한 글 안에서 Sie와 섞으면 바로 번역 티가 납니다. 명령형("Merke dir…", "Prüf…")도 씁니다. 화자 "wir"는 같이 써도 됩니다.
- **통화는 § 3-A 기준 1번을 따릅니다.** 실제 대회 수치는 원래 화폐 그대로 쓰고 환산하지 않습니다.
  - 표기 형태는 **€ 선행**이 정본입니다: `€500 + 50`, `€1.000.000`, `€285`. 코퍼스도 선행 313 : 후치 16입니다.
  - de 대회 글 실측: `ept-barcelona` 선행 115 : 후치 0, `holdem-tournament` 48 : 9.
  - 🔴 예외가 하나 있습니다. `poker-turnier-muenchen`은 후치 54 : 선행 0(`110 €`)으로 정본과 반대입니다. 이 글을 따라 쓰면 안 됩니다.
- **숫자 표기:** 천단위는 마침표(`1.000.000`), 소수점은 콤마(`2,5`)입니다. 퍼센트는 공백 없이 `25%`(§3, 단 §7-5에 미결 메모가 있습니다). 날짜는 `19.–30.11.2026` 또는 `19. bis 30. November`입니다.
- **문장부호(게이트 D11·D12):** 인용부호는 `„…“`만 씁니다. ASCII `"`는 산문에서 금지이고, 인용문이 영어여도 독일식 부호를 씁니다. 대시는 ` – `(en dash)이며 em dash `—`는 전부 잡힙니다. 마크다운 링크 타이틀 `"thumb:…"`은 예외입니다.
- **영어 그대로 쓰는 용어(독일어로 바꾸지 않음):** Buy-in · Main Event · Day 1A · Flight · Re-Entry · Late Reg · Freezeout · Bounty · Mystery Bounty · Satellite · Mega Satellite · Final Table · Entries · Overlay · Deeprun · ICM · Stack. Denglisch 동사(gecallt, geraist 등)는 적극 씁니다.
- **성(性):** die Bet, der Raise, die Lobby, das/der Buy-in, die Bubble입니다. 대회명 관사는 die CAPT(Tour), das King's Resort, die German Poker Masters(복수형 시리즈명)로 씁니다.
- **H2 형태:** 질문형 60~70%(Was/Wie/Wann/Wo…?)와 계산·적용 자리의 명사구를 섞습니다. 팁은 du 명령형 H3로 씁니다. FAQ 질문은 H2와 겹치지 않게 합니다.
- **seoTitle 관습(§7-8):** «[브랜드/장소]: [사건] + 질문·감탄 훅» 구조이고, 숫자를 앞에 둡니다(„€1.000.000 garantiert").
- **속어:** Fisch/Haie, Müll, verzocken은 써도 됩니다. zocken/Kohle는 근거가 없어 금지입니다.
- **금지 사항:** 합법·불법 프레이밍(오스트리아 독점은 «어디서 칠 수 있나» 사실로만), 플랫폼 가입 CTA, 환율 고정 환산.
- **경험담은 필수입니다.** EPT de 글은 1인칭 일화로 엽니다("Ich hätte meine erste EPT fast…"). 없는 사실은 만들지 않고, 일반화할 수 있는 관찰로 씁니다.

## ② de 포스트 파일 골격 (실제 필드 이름 그대로)

```ts
import type { Post } from "../posts";
/** ★ de 고유 글(EN·KO 마스터 없음) — 사실 정본 = docs/tournament-factsheets/2026-11-<…>.md
 *  🔴 훅이 죽는 날 = … → 결과 아카이브 전환(docs/update-calendar.md) */
export const POST: Post = {
  slug: "capt-million-baden-2026-guide",       // 예시 — 기존 관례 <event>-2026-guide
  title: "…",
  seoTitle: "…",                                // ~55자
  desc: "…",                                    // ≤160자 절대
  tldr: "…",                                    // 2~3문장 자기완결 직답
  category: "tournament",
  date: "2026-10-xx",
  updated: "2026-10-xx",
  readTime: "14 Min.",
  emoji: "🇦🇹",
  layout: "tournament-guide",                   // wpt-de·bsop-pt에 있음(EPT·München엔 없음)
  tags: ["…"],
  image: "/images/<slug>-hero.webp",
  imageAlt: "…(독일어, 구체 상황 묘사)",
  keepImagesInBody: true,
  content: `
<1인칭 경험담 도입>
… [Turnier-Guide](/de/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") …   ← 필라를 첫 내부링크로

---

> **Kurze Antwort**
> …==**€500 + 50**==…

---

### Auf einen Blick
:::stripe
19.–30.11. | …
:::

## Wann und wo findet die CAPT Million 2026 statt?
![alt](/images/<slug>-xxx.webp)
:::note[…]:::   :::tip[…]:::   :::steps … :::   (München·EPT 실사용 블록)

:::readnext[Weiterlesen]
/de/blog/holdem-tournament | Texas Hold'em Turnier-Guide | /images/holdem-tournament-hero.webp
/de/blog/… | … | /images/….webp
:::

## FAQ – CAPT Million Baden 2026

**Q. …?**

A. …

---

## Quellen
- **Termine, Buy-in, Garantie** — [Casinos Austria · CAPT Million](https://…) (offiziell; abgerufen am 2. Oktober 2026)

---

## Ähnliche Beiträge
<div style="display:grid;…">…</div>      ← ept·wpt·holdem-tournament de판에 있음(선택)
`.trim(),
};
export default POST;
```

- 라벨은 de 코퍼스 전체에서 **`Kurze Antwort`** 하나로 통일돼 있습니다. readnext 라벨은 `Weiterlesen`, FAQ 제목은 `FAQ – <Name>`(또는 `Häufig gestellte Fragen (FAQ)`)입니다.
- FAQ는 반드시 `**Q. …**` + 빈 줄 + `A. …` 형식이어야 FAQPage 스키마가 잡힙니다.
- 출처 블록은 두 가지가 쓰이고 있습니다. EPT·WPT는 `## Quellen` 목록에 «(offiziell; abgerufen am …)»을 붙이고, München은 맨 끝 `:::note[**Quellen (abgerufen am …):** …]:::`로 씁니다. 대회 가이드라면 `## Quellen` 쪽을 권합니다.
- 본문에 백틱은 금지입니다(§12-A).

## ③ 내부링크 후보 (모두 `lib/posts-de/index.ts`에 등록돼 있고 히어로 이미지 존재 확인)

| slug | 용도 |
|---|---|
| `/de/blog/holdem-tournament` | 필라. 첫 내부링크로 걸고, 역링크도 받습니다 |
| `/de/blog/holdem-tournament-vs-cash-game` | 바이인·포맷 |
| `/de/blog/holdem-icm` | 파이널 테이블·딜 |
| `/de/blog/holdem-bubble` | Day 2 버블 |
| `/de/blog/holdem-short-stack` | 저바이인 깊은 필드 |
| `/de/blog/poker-turnier-muenchen` | 바이에른 → Rozvadov/Baden 이동 맥락 |
| `/de/blog/ept-barcelona-2026-guide` | 상위 바이인 사다리 비교 |
| `/de/tournaments` | 허브 (`app/de/tournaments` 존재) |

## ④ 이미지 파이프라인 (BSOP 선례: 3장 = 히어로 1 + 본문 2)

1. `scripts/gen-<name>.html`을 작성합니다. 1200×675 단일 `.stage`이고, BSOP 히어로의 CSS를 그대로 복제하면 됩니다(배경 `#0B1F17`, 골드 `#C9A227`, 그린 `#39FF6A`).
   - 워터마크는 우하단 `<div class="wordmark">&#9824; holdemmaster.com</div>`를 HTML 안에 넣습니다.
   - 글자가 들어가는 인포그래픽은 AI 생성 금지이고 반드시 이 HTML 경로로 만듭니다. 주최사 포스터·로고·현장 사진도 쓰지 않습니다.
   - 이름 예: `<slug>-hero`, `<slug>-schedule`, `<slug>-buyins`.
2. `node scripts/render-gen-final.mjs <slug>-hero <slug>-schedule <slug>-buyins`로 렌더합니다. 이름은 정확히 지정해야 합니다(부분 일치 금지). 결과는 `public/images/<name>.webp`에 q82, 1200×675(DPR2 캡처 후 리사이즈)로 나옵니다. `render-gen-batch`는 q72 미리보기 전용입니다.
3. 렌더된 webp를 Read로 직접 열어 철자를 육안으로 확인합니다(움라우트 ä/ö/ü/ß 포함).
4. 이후 순서대로 실행합니다.
   - `npm run check:images`
   - `npm run check:image-reuse`(🔴 0이어야 함)
   - `npm run generate:image-dims`(`lib/image-dims.ts` 갱신, prebuild의 `check:image-dims`가 검사)

## ⑤ 배선 체크리스트

- [ ] **`lib/posts-de/index.ts`:** import 추가하고, `DE_POSTS`의 «로컬 가이드 (de 전용)» 묶음(`pokerTurnierMuenchen` 옆)에 넣습니다.
- [ ] **`scripts/check-de-style.mjs`:** `DE_CLUSTERS.Lokal`(또는 `Turniere`)에 slug를 추가합니다. 빠뜨리면 «DE_CLUSTERS에 없는 글 — 검사조차 안 된다» 경고가 나고 D11/D12 검사도 빠집니다. 이후 `npm run check:de-style`.
- [ ] **`lib/tournaments.ts`:** `capt-million-baden` 또는 `kings-gpm-nov` 행에 `blogLinkByLocale: { de: "/blog/<slug>" }`를 답니다. pt `bsop-millions` 선례대로 공용 `blogLink`는 달지 않습니다. 함께 할 일:
  - `verifiedAt`를 재실측한 날짜로 갱신합니다.
  - `kings-gpm-nov`의 `buyin "€35~€600"`은 상한 €600의 근거가 dach 문서에 없습니다. 재실측이 필요합니다.
  - 연결은 `resolveBlogLinks`가 자동으로 합니다. de 글이 있을 때만 링크가 뜹니다.
- [ ] **사실 시트:** `docs/tournament-factsheets/2026-11-<capt-million|german-poker-masters>.md`를 축어 + URL + 열람일로 만들고, 완성 전에는 본문을 쓰지 않습니다.
- [ ] **스파인:** `docs/tournament-spine.md`에 한 줄 추가합니다(BSOP 693행 형식).
- [ ] **캘린더:** `docs/update-calendar.md`에 대회별 절을 만듭니다(BSOP 41행 형식). «훅이 죽는 날»은 마지막 Day 1, 결과 아카이브 전환은 리드·Kurze Antwort·Fazit·FAQ 4곳 동시입니다. 이미 있는 «11/30 CAPT 시즌 종료» 항목(298행)과 연결합니다.
- [ ] **역링크:** `lib/posts-de/holdem-tournament.ts`의 「Österreich und Schweiz」(CAPT 표 아래 «Die CAPT Million in Baden schließt die Saison ab…» 문단)나 「Tschechien」 표 아래에 링크를 넣고, `updated`(+`masterUpdated`는 건드리지 않음)를 갱신합니다.
- [ ] **게이트:**
  - `npm run audit:hard -- --locale=de`. 🔴 `--slug`는 로케일 글을 못 잡습니다(WORKLOG 10-01 (8)).
  - `npm run check:de-style` · `check:intl-links` · `npm run build`(intl posts 수 확인)
  - 렌더 HTML 확인: 히어로 priority, FAQPage Q 수, 한글 누수 0.
- [ ] **마감:** 키워드 뱅크(GPM 볼륨은 뱅크에 없음, DFS 실측 필요) → MB 1행 → WORKLOG → 핸드오프 → `check:handoff`.

## ⑥ dach 문서에 이미 있는 CAPT/King's 사실과 함정

**CAPT Million Baden** (보드 `capt-million-baden`, verifiedAt 09-04, 검수장 r.jina.ai 원문 인계)
- 사실(축어):
  - 「### 2026, November 19 - 30」
  - 「Guaranteed prize pool: €1,000,000」
  - 「Buy-in: €500 + €50」
  - 「Official kickoff on November 19 with the CAPT Million Mega Satellite」
- sourceUrl: `https://www.casinos.at/en/casinos/baden/games/poker/capt-million`
- 🔴 시작일을 넓히면 안 됩니다. 「Starting in September 2026: Satellites and opening days throughout Austria」와 인스브루크의 「CAPT MILLION EVENT 17-18 · 500+50 · 07.-08.11.2026 DAY 1A」는 전국 스타팅데이이지 바덴 본무대가 아닙니다. 대신 이 «전국 Day 1 경로»는 글감으로 쓸 만합니다(사실 시트에서 축어 확인 필요).
- 🔴 오스트리아 Baden(빈 근교, Casino Baden)과 스위스 Grand Casino Baden(CH-5400)은 다른 곳입니다. 스위스 쪽은 2026-05-31을 마지막으로 포커를 중단했습니다.
- 🔴 `casinos.at`은 curl·Playwright 모두 403입니다(본체는 jina도 422). 원문 접근 경로부터 확보해야 합니다(스파인 781행).

**dach 문서 자체가 낡은 부분 (08-10판)** — 스파인 775행에서 정정됐습니다.
- Seefeld 메인은 «€1.000 + 100»이 아니라 **€500 + 50**입니다. €1.000+100은 별개 이벤트 «NLH Unicorn Seefeld»입니다.
- Bregenz 시작일은 15일이 아니라 **13.10**입니다.
- `market-profile/de.md` §4의 「CAPT 10개 스테이션 €550 바이인」도 틀렸습니다. 후반 스톱(인스브루크)은 €1.100이고, €500+50은 Graz·Seefeld·Million입니다.
- de `holdem-tournament` 표는 이미 정정값을 반영하고 있습니다.

**German Poker Masters €1MILLION** (보드 `kings-gpm-nov`, verifiedAt 08-10이라 2개월 지났으므로 재실측 필요)
- 사실(축어, kings-resort.com/poker 캘린더 카드 DOM): 「Guarantee €1.000.000 20. 11. 2026 - 30. 11. 2026 German Poker Masters €1MILLION」. 메인 €285, 최저 €35, 이벤트 49.
  - 49는 08-10 DOM 계수이므로 다시 셉니다.
  - 메인 구조·Day 1 일정·Re-Entry는 dach 문서에 없습니다(미발견).
- 🔴 대회명은 독일어지만 개최지는 체코 Rozvadov(King's Resort, Rozvadov 7, 348 06)입니다. «독일 국내 대회»로 쓰면 오류입니다.
- 🔴 `germanpokertours.de`는 주최사가 아니라 여행 패키지 사업자입니다. 거기 날짜는 패키지 기간이라 대회 기간과 다릅니다.
- 이름 혼동 주의: 10월 대회는 «German Poker Days "Mystery Bounty"»이고, 12월 German Poker Days는 페스티벌 €400.000 / 메인 €300.000으로 따로 있습니다.
- 접근 정보:
  - 뮌헨에서 A9·A93·A6로 약 2시간 — spielbank.com.de 제3자 출처, ✅.
  - 체코인데 유로로 결제 — ✅.
  - 「On the Main Motorway from Munich to Prague」 — kings-resort.com 자기 표기, ✅.
  - 국경 5km, 뉘른베르크 135km 같은 거리 수치는 ❓ 미확인이라 쓰지 않습니다.
- WSOPE는 2017~2025년 Rozvadov, 2026년부터 Prag(Hilton)입니다. 현재형으로 «WSOPE = Rozvadov»라고 쓰면 오류입니다.

**수요** (`docs/keyword-bank/de-core-volumes.md`)

| 키워드 | 월간 검색량 |
|---|---:|
| king's casino rozvadov | 2.900 (서제스트: turnierplan 2026·hotel·eintritt) |
| rozvadov poker | 260 |
| king's resort rozvadov | 170 |
| casino baden poker | 20 |
| capt million baden ergebnisse | 10 |
| capt seefeld 2026 | 110 |

- 🔴 «poker cap» 자동완성은 CAPT가 차지하고 있어 H2로 밀지 말라는 메모가 있습니다.
- German Poker Masters 볼륨은 없습니다. DFS로 실측해야 합니다.

**미발견 (쓰지 말 것):** 오스트리아 카지노 입장 연령(바이에른 21세 규정을 옮겨 쓰면 안 됨) · CAPT Million 이벤트 수·구조·Day 1 일정 · GPM 메인 구조 · CAPT 사이드 이벤트 최저 바이인.

## 참고 파일
- `C:\Users\하봄\Downloads\Holdem_Project\docs\translation-terms-de.md`
- `C:\Users\하봄\Downloads\Holdem_Project\docs\dach-tournaments-2026.md`
- `C:\Users\하봄\Downloads\Holdem_Project\docs\tournament-spine.md` (775·781행)
- `C:\Users\하봄\Downloads\Holdem_Project\lib\tournaments.ts` (3085 `kings-gpm-nov` · 3291 `capt-million-baden`)
- `C:\Users\하봄\Downloads\Holdem_Project\lib\tournaments-blog-links.ts`
- `C:\Users\하봄\Downloads\Holdem_Project\lib\posts-de\index.ts`
- `C:\Users\하봄\Downloads\Holdem_Project\lib\posts-de\holdem-tournament.ts` (214~297행 DACH 절)
- `C:\Users\하봄\Downloads\Holdem_Project\lib\posts-pt\bsop-millions-2026-guide.ts`
- `C:\Users\하봄\Downloads\Holdem_Project\scripts\render-gen-final.mjs`
- `C:\Users\하봄\Downloads\Holdem_Project\scripts\gen-bsop-millions-2026-guide-hero.html`
- `C:\Users\하봄\Downloads\Holdem_Project\scripts\check-de-style.mjs` (74행 `Lokal`)
- `C:\Users\하봄\Downloads\Holdem_Project\docs\update-calendar.md` (41행 BSOP 형식)

# B. 현지 «문제 설정과 표현» 서치 (2026-10-02)
# de CAPT·GPM 현지 «문제 설정과 표현» 서치 (워크플로 §4-2) — 2026-10-02 열람

이번 결과물은 현지 독자가 묻는 질문, 쓰는 표현, H2 후보입니다. 사실 시트가 아닙니다. 인용은 모두 2026-10-02에 원문을 열어 축어로 받았고 `[u1]`처럼 출처 번호를 붙였습니다(출처 목록은 맨 아래). 레포의 lib/·app/는 건드리지 않았습니다. 스크립트·HTML은 C:/Users/하봄/AppData/Local/Temp/claude/de-capt-gpm/ 에 있습니다(pw.mjs, ext.py, pf1.html, hg1~3.html).

## 핵심 판독 4가지
1. **독자가 가장 많이 묻는 것은 입장 절차입니다.** pokerstrategy DE 포럼의 첫 Rozvadov 질문이 "Was brauch man da alles? Bargeld/Mastercard und Perso bzw. Reisepass? Hab was von einer Casinocard gelesen"였습니다. 자동완성에도 "kings casino rozvadov eintritt"와 "eintrittspreise", "dress code", "darf man im kings casino rauchen"이 나옵니다.
2. **"Casino Baden"은 세 곳과 헷갈립니다.** "casino baden eintritt"나 "dresscode"를 치면 Baden-Baden(독일)과 Grand Casino Baden(스위스)이 섞여 나옵니다. 그래서 H2와 메타에 «Baden bei Wien»이나 «Casinos Austria»를 반드시 붙여야 합니다.
3. **세금 질문의 실제 검색 형태는 "pokergewinne steuerfrei / steuerpflichtig"입니다.** "rozvadov steuern"과 "pokergewinne tschechien"은 자동완성 0건이었습니다. 사실 기술만 하려면 test.de에서 인용할 수 있습니다: "Wer als Hobby pokert, ist nicht im Einkommensteuerbereich." `[u9]`
4. **CAPT Million은 오스트리아 전역의 Starttage에서 Baden 결승으로 모이는 구조입니다.** 독자는 이 구조를 "Best stack forward"와 "Doppelqualifikationsbonus"라는 말로 이해합니다. GPM은 King's의 "7 Starttage und 1 Flip and Go" 방식입니다.

## A. 현지 질문 (PAA 형태, 15개)
1. Was brauche ich, um im King's Casino Rozvadov ein Turnier zu spielen – Personalausweis, Reisepass, Casino Card? `[u1]`
2. Wie viel kostet der Eintritt ins King's Casino Rozvadov? `[a1][u2][u3][u4]`
3. Reicht es, eine Stunde vor dem Turnier in Rozvadov zu sein, oder ist der Starttag schnell voll? `[u1]`
4. Gibt es im King's Casino Rozvadov einen Dresscode? `[a1][u5]`
5. Darf man im King's Casino rauchen? `[a2][u5][u6]`
6. Wie komme ich von Waidhaus zum King's Resort – gibt es einen Shuttle? `[a1][a3][u3][u7]`
7. Sind Pokergewinne aus Tschechien oder Österreich in Deutschland steuerfrei? `[a4][u9]`
8. Wann gelten Turniergewinne als steuerpflichtig (Hobbyspieler vs. Berufsspieler)? `[u9]`
9. Wie funktionieren die Starttage der CAPT Million und wo kann ich spielen? `[a5][u10][u12]`
10. Was bedeutet „Best stack forward“ und der €4.000 Doppelqualifikationsbonus? `[u10]`
11. Wo kaufe ich Tickets für die CAPT Million – an der Casino-Rezeption? `[u10][u11]`
12. Welchen Ausweis brauche ich im Casino Baden – geht der digitale Personalausweis? `[u11]`
13. Wie komme ich von Wien nach Baden zum Casino (Badner Bahn, ÖBB, Parken)? `[u10]`
14. Gibt es Hotelangebote für die CAPT Million in Baden? `[u10]`
15. Wie hoch sind Buy-in und Garantie bei den German Poker Masters im November? `[a6][u13][u14]`

## B. Auffällige Ausdrücke und Fachbegriffe (축어, 출처 포함)

**Startgeld, Buy-in**
- "Das Startgeld beträgt immer €285" `[u13]`
- "Buy-in: € 500 + 50" `[u10]`
- "45 +5 € Startgeld" `[u3]`

**Garantie, GTD, Overlay**
- "€1.000.000 gtd. im Main Event" `[u13]`
- "mit bisher 862 Entrys droht ein Overlay" `[u15]`
- "um die Garantie zu knacken" `[u15]`

**Starttag, Flight, Tag 1A/1D, Flip and Go, Multiflight**
- "7 Starttage und 1 Flip and Go" `[u13]`
- "am gestrigen Tag 1D" `[u16]`
- "One Day Flights mit 30 Minuten Levels" `[u12]`
- "hochkarätigen Multiflight-Turnieren" `[u14]`

**Re-Entry, Late Registration (Late Reg)**
- "die Late Registration für Spätstarts und unlimited Re-Entrys geöffnet" `[u13]`
- "Die Late Reg ist immer für 10 Levels offen" `[u17]`

**Satellite, Ticket, Goldbonus, Early Bird**
- "Zehn € 550 Main Event Tickets waren garantiert" `[u18]`
- "(+ 20 % Goldbonus/ + 10 % Early Bird)" `[u18]`

**Min-Cash, im Geld, ITM, Geldränge**
- "Min Cash*: € 1.500" und "Ca. 10% ITM" `[u10]`
- "26 Spieler waren im Geld und 17 schafften den Sprung in den Tag 2" `[u16]`

**Best stack forward, Doppelqualifikation**
- "nur den größten Stack weiterspielt … Der kleinere Stack wird aus dem Turnier genommen." `[u10]`

**Leveltime, Blindlevel, Starting Stack**
- "Tag 1 Turniere mit folgenden Leveltimes: 60 min. | 45 min. | 30 min. | 20 min. | 15 min." `[u10]`
- "50.000 Chips und 40 Minuten Spielzeit pro Blindlevel" `[u13]`

**Eintritt, Casino Card, Einlasskarte, Membercard**
- "am Eingang Casino Card ausstellen lassen( mit Ausweis natürlich)" `[u1]`
- "erhielt ich meine Einlasskarte" `[u5]`
- Für "Membercard" fand sich kein Original-Satz eines deutschen Spielers. Das Wort kam nur in einer Suchzusammenfassung vor. In der Primärquelle heißt es "Casino Card" `[u1]` bzw. "Casino-Zugangskarte" `[u4]`. **Nicht gefunden.**

**Anreise**
- "Bahnhof Waidhaus . Ab Weiden 1 Stunde mit dem Bus … Dort wird man für 10 Euro abgeholt vom King's Casino" `[u3]`
- "Abfahrt Baden, Parkmöglichkeit in der Casino Parkgarage (kostenpflichtig, vorbehaltlich Verfügbarkeit)" `[u10]`
- Autocomplete: "kings rozvadov shuttle", "waidhaus rozvadov entfernung", "grenzübergang waidhaus rozvadov" `[a1][a3]`

**Kleiderordnung**
- "„Come as you are“ – Es gibt schlichtweg keine Kleiderordnung im Kings Casino." `[u5]` (Drittseite)
- Für das Casino Baden wurde die Primärquelle nicht gefunden: casinos.at/…/poker liefert 403, Request Rejected. "smart casual" stand nur in einer Suchzusammenfassung. **Nicht gefunden.**

**Steuern**
- "Reine Glücksspielgewinne, wie beim Lotto, sind weiter steuerfrei" `[u9]`
- "5% czech Taxfee … wird ans Tschechische Finanzamt abgeliefert" `[u7]` (Schweizer Reiseblog, Jahr unbekannt)

## C. H2-Kandidaten (Deutsch)

| # | H2 | Form | Antwortgrundlage |
|---|---|---|---|
| 1 | Wann und wo findet die CAPT Million 2026 in Baden bei Wien statt? | Frage | `[u10]` |
| 2 | Wie funktionieren Starttage, Satellites und „Best stack forward“? | Frage | `[u10][u12]` |
| 3 | Was kosten Buy-in, Re-Entry und Tickets – und wo kauft man sie? | Frage | `[u10][u11][u13]` |
| 4 | German Poker Masters im King's: Startgeld, Garantie und Flights | Nomen (Marke + Bündel) | `[u13][u14]` |
| 5 | Anreise nach Rozvadov über Waidhaus und nach Baden aus Wien | Nomen (Wegbeschreibungen leben von Ortsnamen) | `[u3][u10]` |
| 6 | Was braucht man am Eingang? Ausweis, Casino Card, Eintritt | Frage | `[u1][u11]` |
| 7 | Gibt es einen Dresscode – und darf man rauchen? | Frage | `[u5][a1][a2]` |
| 8 | Sind Pokergewinne aus Tschechien und Österreich steuerfrei? | Frage, nur Fakten | `[u9]` |

6 von 8 sind Fragen (75 %). Damit ist die Vorgabe «질문형 70 %» erfüllt.

## D. Achtung beim Schreiben
- **Eintrittspreis King's widersprüchlich.** "10 Euro" steht in mehreren älteren Quellen (2017 `[u3]`, 2020 `[u2]`, Erfahrungsbericht aktualisiert 2025-12 `[u5]`). Eine HolidayCheck-Bewertung von 2025-08 nennt "Eintritt = 20€" `[u4]`. Der offizielle Preis ist nicht gefunden. Vor dem Schreiben auf der offiziellen Seite prüfen.
- **Entfernung Waidhaus widersprüchlich.** spielbank.com.de schreibt "nur 20 km hinter Grenzübergang Waidhaus" `[u5]`. Der Satz "vier Minuten" stand nur in einer Suchzusammenfassung. Nicht übernehmen, ohne nachzumessen.
- **Rauchen widersprüchlich.** Laut `[u5]` ist das Rauchen "im kompletten Casino gestattet", ein 2+2-Bericht schreibt "(not the poker area)" `[u6]`. Nicht gesichert.
- **GPM-Termin im November nicht bestätigt.** hochgepokert sagt nur "bei den €285 German Poker Masters Mitte bis Ende November" `[u14]`. Das Datum 11/20–30 aus der Tafel ist im Original nicht bestätigt. Auch kingsresort.com/de listet unter "Upcoming Events" nur Termine bis 10/14–19 `[u8]`. **Offizielle GPM-Seite für November nicht gefunden.**
- **casinos.at blockiert Zugriffe.** Die Poker-Seite, die Anreise-Seite und die Besuchsordnung (PDF) liefern 403 über WebFetch, curl, Playwright headless und headed. Nur die CAPT-Million-Seiten DE/EN `[u10]` und CAPT Seefeld `[u11]` ließen sich über Exa laden. Für die CAPT-Ausweisregeln gibt es nur die Formulierung der Seefeld-Seite (gleicher Betreiber). Eine Aussage speziell zu Baden ist nicht gefunden.

## Quellen (alle am 2026-10-02 geöffnet)

**Autocomplete** (suggestqueries.google.com, hl=de, gl=de)
- `[a1]` kings casino rozvadov
- `[a2]` kings casino rauchen
- `[a3]` rozvadov waidhaus / kings rozvadov
- `[a4]` pokergewinne steuer / poker gewinne steuerfrei
- `[a5]` capt million / capt baden
- `[a6]` german poker masters
- Weitere Abfragen: casino baden eintritt, casino baden dresscode, kings casino dress

**Seiten**
- `[u1]` https://www.pokerstrategy.com/de/forum/live-poker-1460/wsop-europe-in-rozvanov-1835066/ (2025-04-22)
- `[u2]` https://www.pokerfirma.com/news/kings-poker-buffet-livestream-und-kostenlose-hotelzimmer/670393 (2020-06-05)
- `[u3]` https://www.bw7.com/forum/showthread.php/96006-Rozvadov-%28Tschechien%29-Erwartung-und-Wirklichkeit-Teil-1-Tag-1 (2017)
- `[u4]` https://www.holidaycheck.de/hrd/king-s-resort-personal-steht-um-2-uhr-neben-dir-am-bett/a70fbddd-bd49-4159-bb74-bc2e66814e9d (2025-08)
- `[u5]` https://www.spielbank.com.de/casino-rozvadov-erfahrungen.html (aktualisiert 2025-12-08)
- `[u6]` https://forumserver.twoplustwo.com/199/venues-amp-communities/kings-resort-rozvadov-czech-republic-1830099/
- `[u7]` https://ricksterzh.com/pokerreise-im-jassbus/ (ohne Datum)
- `[u8]` https://www.kingsresort.com/de/
- `[u9]` https://www.test.de/Gewinne-beim-Pokern-Wann-sind-Steuern-faellig-4927722-0/ (2015-11-04)
- `[u10]` https://www.casinos.at/casinos/baden/spiel/poker/capt-million und …/en/casinos/baden/games/poker/capt-million
- `[u11]` https://www.casinos.at/casinos/seefeld/spiel/poker/capt-seefeld
- `[u12]` https://pokerexklusiv.com/casinos-austria/casino-baden/capt-million-2025-es-geht-los (2025-09-04)
- `[u13]` https://www.hochgepokert.com/2025/11/28/german-poker-masters-im-kings-haben-e1-302-950-an-garantien-im-gepaeck/ (Seite zeigt 30.11.2025)
- `[u14]` https://www.hochgepokert.com/2026/09/21/im-naechsten-jahr-kings-ganze-14-turniere-mit-ueber-e1-mio-garantie
- `[u15]` https://www.hochgepokert.com/2026/04/04/overlay-alarm-bei-den-german-poker-masters-im-kings/
- `[u16]` https://www.hochgepokert.com/2026/04/03/kings-kommt-jetzt-der-ansturm-im-german-poker-masters-main/
- `[u17]` https://pokerexklusiv.com/casinos-austria/casino-baden/capt-million-2025-turnierplan-schedule (2025-05-20)
- `[u18]` https://www.pokerfirma.com/news/casino-baden-schon-17-tickets-fuer-die-capt-baden-ausgespielt/837944 (2023-11-11)
- Weitere: https://www.pokerfirma.com/news/wann-spielst-du-die-capt-million/888077 (2024-09-18), https://www.casinos.at/company/presse/pressemitteilungen/news-detail/2024-12-09-capt-million-erfolgreiche-premiere-des-groessten-pokerturniers-von-casinos-austria-baden
