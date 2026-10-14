# MA-542 tr 재동기화 (레인 B) — blind·all-in·showdown·hand-rankings ← EN 현행

- 지시: 검수장 MA-542(10-14) · 근거 보고 `홀덤검수-tr/reports/검수-tr-r1-rules-a-2026-10-14.md` §2·§3 (blind 처분안 `holdem-blind-meaning/proposal.md`·`diff-en.md` 참조 · 나머지 3편은 검수장 R1 범위 밖 → EN diff 직접 대조)
- 방식: 슬러그별 `base = git rev-list -1 --before="<masterUpdated> 23:59" HEAD -- lib/posts-en/<slug>.ts` → `git diff --word-diff base HEAD` 헝크 분류 (a) 규칙 정정·한정 = 필수 (b) 추가 문장 = 이식 (c) 문구 = tr 대응문 있고 의미 바뀐 것만 (d) 기계적 = 생략. 그 위에 **tr 현행 문면을 EN 현행과 직접 대조**(이미 fe93df0d·3ec21aaf·2e9bc644·6ef48e4e·e30fde28로 일부 전파된 자리가 많아, 헝크 단위로만 보면 중복 이식이 생긴다).
- 용어: «canlı straddle»·«dead button»·«normalde/normal rotasyonda» = 기존 tr 코퍼스(betting-actions·positions) 승계 · «pas» = fold만.

| 슬러그 | base | EN updated | 이전 masterUpdated | 본문 변경 자리 |
|---|---|---|---|---:|
| holdem-blind-meaning | 2cfd8daa | 2026-10-06 | 2026-07-11 | 27 |
| holdem-all-in-rules | dad961cd | 2026-10-11 | 2026-08-12 | 9 (Astra #3 포함) |
| holdem-showdown-rules | 684a9f1c | 2026-10-13 | 2026-07-12 | 19 |
| holdem-hand-rankings | f0515d4e | 2026-10-06 | 2026-09-07 | 3 |

앞머리 4편 공통: `updated` → "2026-10-14" · `masterUpdated` → EN 현행 `updated`.

## 1. holdem-blind-meaning (EN 4834860d·6164c748·13090aeb·6ef48e4e 외)

| # | 위치 | 전 | 후 | EN 근거 | 검수장 행 |
|---|---|---|---|---|---|
| 1 | tldr | …big blind (büyük kör, BB) ise onun solunda oturur; | …onun solunda oturur (heads-up'ta small blind'ı butonun kendisi koyar); | tldr «left (heads-up, the button itself posts the small blind)» · WSOP A 87·B 157 | b1 · HU 괄호 |
| 2 | Kısa cevap | small blind'ın solundadır. | …solundadır (heads-up oyunda small blind'ı buton koyar). | Quick answer | b2 |
| 3 | stripe | 2 \| her elde koyulan zorunlu bahis | 2 \| zorunlu bahis — small blind ve big blind | stripe «forced bets — the small blind and the big blind» | b3 |
| 4 | H2 blind nedir | Her elde iki oyuncu koyar | Normal her elde … (İki yaygın istisna: dead button · heads-up) | «on every normal hand … (Two common exceptions…)» · A 85 | b4 · 데드버튼 |
| 5 | 同 | Blind olmasa | Blind ya da başka bir zorunlu bahis olmasa | «Without blinds or some other forced bet» | b5 |
| 6 | SB nedir | en az bilgiyle. | + (tek istisna heads-up: small blind butondur ve son konuşur) | «(heads-up is the one exception…)» | b6 |
| 7 | BB nedir | kimse yükseltmezse | kimse yükseltmez ya da straddle koymazsa | «If nobody raises or straddles» · B 165 | b7 |
| 8 | Kurallar | dağıtıcı butonu her elden sonra | normal rotasyonda dağıtıcı butonu… | «in normal rotation» | b8 |
| 9 | 同 | Kimse sırasını atlayamaz. | (삭제) → 자리 비움 3경로(밀린 블라인드·BB 대기·UTG canlı straddle) + 토너먼트 스택 차감 | «Step away and what happens next depends on the format…» · B 160·164 | b8 · 전칭 #32 |
| 10 | Not | (없음) | + heads-up·canlı straddle가 표를 바꾼다는 문장 (straddler가 프리플랍 마지막 행동권 승계) | Note «Two things change this table…» · B 165 | b9 |
| 11 | tr 고유 H2 «daha kötü pozisyon» | Big blind ise preflop'ta ilk aksiyon turunun son koltuğudur | Big blind ise (straddle yoksa) … | b7 축(검수장 diff-en b21 비고 #40) | b21 #40 |
| 12 | 시세 | Seviyeler **SB/BB** olarak yazılır. | No-limit ve pot-limit oyunlarda … + (sabit limit = 두 베팅 크기 · 4-8 limit 최소 베팅 $4 · WSOP LA 104) | «In no-limit and pot-limit games…» + 괄호 | b10 |
| 13 | 표 머리 | Tipik buy-in | Tipik buy-in / seviye | 표 머리 «Typical buy-in / level» (토너 행 셀 = 레벨) | (c) |
| 14 | Cash game | kalkana kadar $1/$2'dir | 시계가 올리지 않음 · 테이블·룸이 바꾸기로 하지 않는 한 $1/$2 | «unless the table and the room agree to change the stakes» · B 73 | b11 (WRONG 후보 PT #26) |
| 15 | straddle | big blind'ın solundaki koltuktan koyulan | UTG'den (big blind'ın solu) ya da izin verilen yerlerde butondan … + WSOP 버튼 스트래들 우선 · 리밋 불가 | «posted from UTG … or, where allowed, the button» · B 165 | b12 |
| 16 | Heads-up H2 | Butonun blind ödediği tek durum budur ve… | (삭제) | EN 4834860d 삭제 | b13 |
| 17 | Dead blind | ya hemen … koyarsın, ya da … beklersin. | çoğu salonda … — bazı salonlar NL·PL에서 신규 착석자 포스트 불요(WSOP LA 104.a) → 크루피에에게 확인 | «most rooms have you … (WSOP Live Action Rules 104.a)» | b14 · #66 |
| 18 | 30초 플레이 | (없음) | + 경험담 도입 1문장 | «The blinds are where I watch beginners quietly bleed…» | a 이식 |
| 19 | SB 불릿 | Preflop sondan bir önce | Üç ya da daha fazla kişilik bir masada (ve straddle yokken) preflop sondan bir önce … bu yüzden | «At a table of three or more (and with no straddle on)» | b15 |
| 20 | 同 | …düzenli bir çip sızıntısıdır. | + 경험담 꼬리(신규가 가장 많이 잃는 자리) | «— the small blind is the seat I see new players lose from most…» | 이식 |
| 21 | BB 불릿 | yükseltmeleri … daha geniş elle kârlı şekilde call edebilirsin | call sana diğer her koltuktan daha ucuza gelir ve daha geniş defans yapabilirsin | «a call costs you less than it costs any other seat and you can defend wider» (실현 한정은 tr에 이미 있음) | b17 축 |
| 22 | FAQ 누가 먼저 | Flop'tan önce small blind sondan bir önce… | straddle 전제 + (canlı straddle 시 마지막 · 버튼 스트래들 시 SB 최초) + (heads-up 예외) | FAQ «with no straddle on … (Heads-up is the exception…)» | b18 |
| 23 | FAQ check | Herkes sadece call ederse | Herkes sadece big blind'ı call ederse — raise de straddle de yoksa — | FAQ «calls the big blind — no raise and no straddle —» | b19 |
| 24 | FAQ fold | koyulan blind'lar asla iade edilmez | fold ederek koyduğun blind'ı asla geri alamazsın | «you never get a posted blind back by folding» | (c) |
| 25 | tr 고유 FAQ SB 완성 | Kimse yükseltmediyse small blind | Kimse yükseltmediyse (ve straddle yoksa) small blind | b7 축(스트래들 시 SB는 스트래들 금액을 맞춰야) | 3단계 tr 고유 |
| 26 | FAQ heads-up | Butonun blind ödediği tek durumdur. | (삭제) | EN 삭제 | b20 |
| 27 | FAQ 놓친 블라인드 | …bekleyebilirsin. | + ya da izin veren salonlarda UTG canlı straddle'ı koyarak geri dönebilirsin | FAQ «or, in rooms that allow it, come back in as the under-the-gun live straddle» | 이식 |
| 28 | 결론 1 | small blind butonun solunda | …solunda (heads-up'ta: butonda) | Takeaways «(heads-up: on the button)» | HU 괄호 |

생략: category·hsl() = (d) 이미 반영 · EN `holdem-straddle` 링크 = tr 글 없음(앵커 없이 문장만 이식 · intentional-diffs 선례) · tr 고유 «Eski Türk masası» FAQ·SB limp 괄호 = 통지 행(무해) 유지.

## 2. holdem-all-in-rules (EN 6164c748·e8674e53·f98be0ba·6ef48e4e — tldr·사이드팟·리오픈 표·FAQ 다수는 fe93df0d로 이미 전파됨)

| # | 위치 | 전 | 후 | EN 근거 | 검수장 행 |
|---|---|---|---|---|---|
| 1 | 선언 2번 | …tek seferde hareket ettir. | + 침묵 푸시 = call(TDA 2024 45-A · WSOP Turnuva 92) · 그 밖엔 올인(45-B) · 큰 칩 1개 예외(44) | «Pushing alone is not always enough…» | (R1 범위 밖) |
| 2 | 경고 블록 꼬리 | …ya da tüm stack'ini tek seferde ortaya sür. | «all-in» de — başka bir şey olarak yorumlanmayan tek yöntem | «it is the one method that never gets re-read» | 同 |
| 3 | 예시 C | C Oyuncusu normal şekilde yükseltebilir. | 미행동자는 리오픈 제한 무관 · 최소 레이즈 **총액** $14 + $10 = $24(LA 176) · 그 미만 올인 가능(LA 175) | Player C 불릿 | B 175 축 |
| 4 | Hata 2 | normal şekilde yükseltebilir | yukarıda gösterilen minimum toplamla yükseltebilir | «raise, at the minimum total shown above» | 同 |
| 5 | Hata 4 | (토너 TDA 16·실화·회수 단서 없음) | + 토너는 TDA 16으로 전원 공개 · 캐시 실화(머크→식별 불가→데드) · 식별 가능하면 floor 재량 회수 | Mistake 4 | TDA 16 런아웃 공개 |
| 6 | FAQ BB 미만 | tam big blind'ı öder | tam big blind'ı call eder | «still call the full big blind» | (c) |
| 7 | FAQ table stakes | rakip de karşılayabileceğinden fazlasını bir anda bahis yapamaz | 상대가 네 스택 위로 건 것은 네게 비용 0 — 사이드팟 또는 미콜 반환 | «whatever an opponent bets beyond your stack cannot cost you anything» | 옛 단정(거짓) 교체 |
| 8 | FAQ 토너 vs 캐시 | Run it twice anlaşmayla | potta kalan herkes kabul ederse | «if everyone still in the pot agrees» | (c) |

생략: 다중 숏올인 문단(tr 고유 서술이 EN «player by player» TDA 47과 동치 · «47-A» 표기 유지) · 쇼다운 1번(tr이 TDA 16·B149로 이미 더 구체) · hsl() (d).

## 3. holdem-showdown-rules (EN 9c08de94·13090aeb·6ef48e4e·e30fde28 외 — 126.g·TDA 16·18은 이미 전파됨)

| # | 위치 | 전 | 후 | EN 근거 | 검수장 행 |
|---|---|---|---|---|---|
| 1 | 표 2행 | Butonun solundaki ilk aktif oyuncu önce gösterir | + 올인 없는 핸드 한정 · 토너에서 앞 스트리트 올인이면 전원 공개 | 표 «— with no all-in in the hand…» | (R1 밖) |
| 2 | 표 3행 | cash oyununda ev kuralı geçerlidir | 캐시: 사이드팟 → 사이드팟 플레이어 먼저 · NL은 올인자가 먼저(LA 149) · (TDA 16) 명기 | 표 3행 | 同 |
| 3 | 머크 불릿 | İstisna: …Cash oyununda ev kuralı geçerlidir. | «다른 플레이어의 베팅 액션이 끝난 뒤» 강조 + 베팅 가능 동안 전부 덮음 + 캐시 대부분 콜러 머크 허용 | 불릿 꼬리 | 同 |
| 4 | «görmek istiyorum» | cash oyununda … ev kuralı belirler | 캐시도 자동으로 느슨하지 않음 — WSOP LA 147: 공모 의심 **및** floor 입회 | «Cash games run on house rules, and they are not automatically looser…» | 同 |
| 5 | Pratik kural | (tr 축약 반복문) | EN 현행 번역: 라스트 어그레서는 블러프여도 공개 · 보통 머크로 팟 포기 가능 · WSOP 토너는 의도적 머크 페널티(Turnuva 72) · 빠른 머크 = 두 번 짐(TDA 18 / LA 147) + 토너 올인 머크 불가 문장 유지 | Practical rule | 同 |
| 6 | 체크 리버 | (herkes check dedi), showdown | + ve kimse all-in değilse | «and no one is all-in» | 同 |
| 7 | 올인 표 1행 | cash oyununda ev kuralı geçerlidir | 앞 스트리트 명시 · 캐시 LA 149 | 표 1행 | 同 |
| 8 | 올인 표 2행 | (토너 즉시 공개 + B149) | 캐시: 올인 베터가 라스트 어그레서로 먼저(사이드팟 시 B149) · 토너: 순서 없음, 전원 동시 공개, **머크 불가** | 표 2행 | 同 |
| 9 | 올인 표 3행 | turnuvada … hemen açılır | + 캐시: 팟 일부라도 이기려면 공개 필수 — 유일한 라이브 핸드 예외(LA 143) | 표 3행 | 同 |
| 10 | 슬로롤 | Herkesçe nefret edilen bir hareket. | 이름으로 금지 조항은 없으나 보호되지도 않음 — 조롱(WSOP Turnuva 47)·지연(TDA 70) 페널티 가능 | slow roll 본문 | 同 |
| 11 | 매너 H2 | (도입 없음) | + 경험 도입 1문장 | «Nothing sours a table faster…» | 이식 |
| 12 | Hata 1 | …slow roll gibi görünür. | + 경험담 꼬리(한 바퀴 냉각) | Mistake 1 | 이식 |
| 13 | Hata 2 | El geçerli kurala göre öldüyse pot gider… | TDA 14: 딜러가 머크에 밀면 데드 · 팟은 거의 확실히 끝 — 단 floor 호출: WSOP Turnuva 109·110 식별 가능 회수·딜러 실수 시 추가 노력 | Mistake 2 | 同 |
| 14 | Hata 3 | (tr 축약) | EN 현행 번역: 18-A(공개·보유자만 · 덮어 머크 = 상실) · 보장 1건 = 라스트 어그레서 · 나머지 재량 ≠ 거절(18-B) · 폴드 핸드 = 머크 진입 시 데드, 식별 가능만 회수(109) · tr 고유 «진행 중 유효 폴드는 되돌리지 않음» 1구 보존 | Mistake 3 | 同 |
| 15 | Hata 4 | (Kural 117) | + Live Action은 조문 번호가 다르다 괄호 | Mistake 4 괄호 | (c) |
| 16 | FAQ 콜 받으면 공개? | (tr 축약 — 72·17-B 없음) | EN 현행 번역: 머크=팟 포기·WSOP 토너 페널티(72) · 콜러 먼저 덮어 머크·라이브 없으면 미공개 승(17-B·72) · 토너 올인 콜러도 공개(16) · 보장 요청권(18) + «캐시는 하우스 룰» 꼬리 | FAQ 2 | 同 |
| 17 | FAQ 머크 가능? | (tr 축약) | EN 현행 번역: 머크=팟 포기 · 예외=토너(18-B · WSOP 캐시는 공모 의심 없이는 불가) · 올인 완료 시 메인·사이드 전원 공개(16) | FAQ 3 | 同 |
| 18 | FAQ 슬로롤 | …aşağılamak gibi görülür. | + 페널티 가능(Turnuva 47 · TDA 70) | FAQ 4 | 同 |
| 19 | FAQ 올인 누가 먼저 | WSOP cash … bölüme bak. No-Limit'te … | NL 캐시 올인자 먼저 · 모든 캐시에서 사이드팟 플레이어가 메인 단독 올인자보다 먼저(149) | FAQ 5 | 同 |

생략: tldr·표 1행·«key phrase» 문단(tr이 «All-in olmayan turnuvada»로 이미 한정 — EN보다 좁게 한정한 상태 유지) · cards speak(TDA 14 이미 전파) · 관련 글 카드(split-pot·tiebreak 카드 = tr에 split-pot 글 없음 · tiebreak는 본문 H2에서 위임 링크) · hsl() (d).
§13: 이번에 손대지 않은 핸드 예시 3개(J♥10♥/Q♥9♥8♥2♣5♦ SF · A♠K♦Q♣J♥10♠ 보드 스플릿 · 4♥9♥J♥Q♥3♣ A♥ 플러시 vs JJJ) 7장→베스트5 재검산 = 일치.

## 4. holdem-hand-rankings (EN c91cbe98·f5a5b927·3ec21aaf·5f22c51a·6ef48e4e — 3번째 트립스·로열 «직접 만들 때»·스터드·숏덱 등은 이미 전파됨)

| # | 위치 | 전 | 후 | EN 근거 | 검수장 행 |
|---|---|---|---|---|---|
| 1 | 시세표 앞 | Buradan başla. | + (5장 확률로 정해진 순서 · 7장에선 하이카드가 투페어보다 드묾 · 순위는 불변) | H2 첫 문단 괄호 | (R1 밖) |
| 2 | FAQ kicker | papaz kicker'ı olan kazanır. | + kicker da eşitse bir sonraki yan kart belirler | FAQ «and if that ties too, the next one decides» | (c) |
| 3 | 결론 | "türler → kentler → çiftler" | "floş → kent → çiftler" | «flush → straight → pairs» | (c) |

생략: EN FAQ «what beats a flush»·«SF vs quads»·«lowest hand»·«three pairs» = tr FAQ가 SERP 재구성(MB-187)으로 해당 문항이 없음(대응문 없음 → (c) 규칙상 생략) · 보드 스캔 루틴 1인칭 문장 = tr 대응문이 3인칭 서술(의미 동일).
§13: 7장 예시 수정 0 — 기존 hand-rankings 퍼즐·함정 예시는 audit:hard 5장 족보 예시 판정 통과.

## 5. Astra 교차검수 (gpt-6-astra · reasoning high · read-only · 격리 폴더 `Downloads/astra-ma542-trb-20261014` — tr 4 + EN 4 + tr word-diff)

페르소나: 이스탄불 포커 편집자 + 북키프로스 카지노 플로어. 지적 4 · 나머지 변경 전부 OK · 숫자·카드·조문 번호 불일치 0.

| # | 파일 | 지적 | 판정 | 사유 |
|---|---|---|---|---|
| 1 | blind | «Normal her elde» 어순 부자연 | 채택 → «Her normal elde blind'ları iki oyuncu koyar» | 네이티브 어순 |
| 2 | blind | «$4'dır» 접미 모음조화(dört → 'tür) | 채택(Astra 전 자가 발견과 일치) | 철자 |
| 3 | all-in | 미변경 tr 고유 FAQ «Pokerde rest çekmek ne demek?»의 «stack'ini öne itmen yeterlidir» = EN 45-A·44 예외와 모순 (D/high) | 채택 → 침묵 푸시 예외 1문장 추가(45-A·44 · WSOP Turnuva 92) | 3단계 «tr 고유 단정» 대상 · EN 본문 축어와 동치 |
| 4 | showdown | «Hiç göstermen gerekmeyen **tek** durum» — EN «One case» 배타어 추가 | 채택 → «bir durum da şudur» | 배타어 금지 |

기각 0.

## 6. 게이트

- `npm run audit:hard -- --locale=tr --slug=<slug>` ×4: 🔴 0 · 🟠 0 (`--slug`가 tr 20편 전체를 돌림 — 4편 모두 ✅ 0err 0warn). 미러 드리프트 tail: 4편 masterUpdated = EN updated.
  - 커버리지: holdem-showdown-rules «카드 문단 3 · 시나리오 미포착» → §13 손 검산(위 3절 끝) 완료. hand-rankings 5장 족보 예시는 게이트 판정.
- `npm run check:intl-links`: 통과(729편 · 25개 언어).
- `npm run build`: exit 0 · «74 blog posts + 729 intl posts» → `public/sitemap.xml`·`tsconfig.tsbuildinfo` 원복.
- 백틱: 4파일 모두 2개(템플릿 리터럴 경계만).
