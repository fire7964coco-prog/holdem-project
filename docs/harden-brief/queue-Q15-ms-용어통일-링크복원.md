# queue Q15 brief — ms 30편 레인 경계 용어 통일 + 기존 21편 링크 복원

> 기준일 2026-09-27 · 기준 커밋 `469d08f8`(5레인 머지 배포) · 정본 `docs/ms-translation-lanes.md` §7-③④⑤
> 🔴 이 회차가 끝나 헤드가 머지·배포한 해시로 **GPT 아스트라 교차 검수(§8)를 요청하고 ms를 동결**한다. 그 전까지 ms 51편은 이 회차만 고친다.

## 0. 범위

- **§1 용어 통일** — 신규 30편(`lib/posts-ms/`)만. 헤드 §7-③(5레인 «신규 용어» 표 대조) + §7-④ 교차 렌즈(KL 편집자 · Opus · 2026-09-27) 판정.
- **§2 링크 복원** — 기존 ms 21편이 EN에는 있는 링크를 대상 부재로 뺀 채 발행됐다. `npm run check:structure -- --tail`의 ms 행(09-27 실측 20)이 입력이다. EN과 같은 자리·앵커 뜻으로 복원.
- **§3 구판 라벨** — 기존 편 `:::readnext[Teruskan membaca]` 5 → `Baca seterusnya` · `## Soalan lazim` 9 → `## Soalan Lazim`(§1-A 고정문).
- 🔴 **줄 단위 Edit.** 패턴 전역 치환이 안전한 것은 §1-④ «stake rendah» 하나뿐이다. 행 번호는 `469d08f8` 기준 — 편집 전에 grep으로 다시 잡아라.
- `updated`는 링크 복원·용어 통일만이면 불변(L-2h·L-2i 선례). masterUpdated 불변.

## 1. 용어 통일 (교차 렌즈 판정 · 확신도)

| # | 정본 | 바꿀 곳 | 확신 |
|---|---|---|---|
| ① | **favourite**(영국식) · 필요하면 글마다 첫 등장 «favourite (lebih berpeluang menang)» | prob «favorite» 5: pot-odds L111 · outs L117·L221 · equity L20·L79 → favourite / gloss «pilihan utama» 3: bad-beat L8 «(pilihan utama)»→«(lebih berpeluang menang)» · glossary L48 같음 · cooler L56 «— pilihan utama» 삭제 | 높음 |
| ③ | **leak**(첫 등장 «leak (kelemahan berulang)») | implied-odds L129·L160 · equity L174 · when-to-fold L49 · icm L104·L167 · short-stack L112·L187 = 8 | 높음 |
| ④ | **stakes rendah** | strat «stake rendah» 13(strategy L130·L235 · starting-hands-chart L186·L191 · limping L20·L86·L96·L131·L152 · 3bet L191·L253 · when-to-fold L189·L230) — 패턴 «stake rendah»만 | 높음 |
| ⑤ | **Ringkasan pantas** | kicker L28 «### Kicker Sekali Pandang» · tiebreak-rules L28 «### Pemecah Seri Sekali Pandang» → «### Ringkasan pantas» · kicker L51 «Ini dia sekali pandang:» → «Ini ringkasannya sekali imbas:» | 중~높 |
| ⑥ | **«N Perkara untuk Diingati»**(N = 실제 항목 수) | positions L235 → «## 4 Perkara untuk Diingati» · position-play L294 → «## 6 Perkara untuk Diingati» (항목 수 직접 세라) | 중간 |
| ⑦ | **tournament**(일반 명사) | split-pot-rules L206·L208 «kejohanan» · card-counting L110 «Di kejohanan» → «Dalam tournament» · (선택) tiebreak L233 «Kejohanan WSOP tidak membuat» | 중간 |
| ⑧ | posisi ≠ kerusi | probability L89 «dari setiap kerusi» → «dari setiap posisi» · drawing-odds L180 같음 (나머지 kerusi·tempat duduk 구분은 의도 · 유지) | 중~높 |
| ⑪ | **rangka kerja** | drawing-odds L84 · tournament L186·L279 «kerangka» | 중간 |
| ⑨ | (선택) «앞서다» = **di hadapan** | prob 레인 약 9: probability L121 · outs L168 · implied-odds L87·L199 · equity L44·L72·L124 · short-stack L112·L179 | 낮음 |
| ② | (선택) tour 3편(icm·bubble·short-stack) 첫 «pusingan meja»에 «(orbit)» 병기 | — | 중간 |

**유지(고치지 마라)**: H2 의문사 Bila/Bilakah·Kenapa/Mengapa·Apa/Apakah 혼용(기존 코퍼스도 혼용 · «Apa Itu X»는 쿼리 맞춤) · pulang modal(동사) vs titik pulang modal(명사) · when-to-fold L66·L128 «kad tertutup»(이미지 alt 시각 묘사) · orbit/pusingan meja(계산기 dict «pusingan meja»와 축어).

### 1-X. 일괄 치환 금지 예외 (교차 렌즈 축어)

- **kebocoran**: implied-odds L128 «Kusyen tambahan menampung kebocoran itu»는 플레이어 leak이 아니라 가치 누수 비유 → 유지.
- **pusingan**: 전역을 orbit으로 바꾸지 마라(베팅 라운드 정본). short-stack L191 «berapa pusingan anda boleh bertahan» 유지.
- **kejohanan**: WSOP 룰북 이름 = 유지 — tiebreak L158 «Peraturan kejohanan WSOP 2026» · L233 «==Peraturan Kejohanan 85==»·«buku peraturan kejohanan itu» · split-pot L92 · reading-the-board L250 · 계산기 «M Kejohanan» 탭.
- **di depan**(«앞서다» 아님 = 유지): rake L111 «di depan mata» · fish L176 «di depan mukanya» · pot-odds L166 «street di depan anda» · outs L131 «bet di depan anda» · implied-odds L42 «Pot di depan anda».
- **favourite**: bad-beat L5·L7 제목·desc «Favourite» 유지 · rank 레인 단독 «lebih berpeluang menang» 2 유지.
- **stake** 단수(스테이킹 뜻 가능)는 «stake rendah» 외 치환 금지.

## 2. 링크 복원 (§7-⑤)

- 입력 = `npm run check:structure -- --tail`의 ms 행. 각 행의 EN 링크 자리를 EN 원문에서 찾아 **같은 문장 자리**에 ms 슬러그로 복원(앵커는 그 ms 글의 문맥어). 새 문장 만들기 금지 — 21편이 링크를 뺄 때 문장을 살렸는지 뺐는지 먼저 확인.
- 복원 뒤 `check:structure` ms 🟠 → 0(대상 없는 ms 1건은 남는 게 맞다 — 대회 가이드 5 제외분) · `check:intl-links` 통과.
- 레인 «헤드 요청»의 역링크·카니발 참고(rank ①④ · strat 태그 · tour 태그 · gloss ①② hand-rankings L111 «bad beat»↔콜아웃 «Cooler») 중 **gloss ① hand-rankings L111**은 사실 모순이라 이 회차에 포함(EN L110 «beat» → ms «bad beat» 오역 → «cooler»로). 태그 카니발은 판정 보류(이 회차 밖).

## 3. 게이트

`audit:hard --locale=ms` 🔴 0 · `check:structure` · `check:intl-links` · `check:meta` · `check:seo-sync` · `check:calc-parity:all` · build. 반영 3건 이상이면 2차 교열(반영 diff만 · ms 네이티브 렌즈 1).
