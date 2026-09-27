# ms-gloss 진행 — 🅴 용어 6편

> 정본 = docs/ms-translation-lanes.md · 이 파일은 이 레인만 쓴다.

## 상태 — A ☑ / B ☑ / C ☑ · 커밋 (이 파일과 같은 커밋 — `git log -1 harden-ms-gloss`)

C 산출(2026-09-27): main 병합(fast-forward) · 게이트: audit:hard ms 27편 🔴 0 🟠 0 · structure 내 슬러그 결손 0 · meta 초과 0 · seo-sync 🔴 0 · intl-links = 27건 전부 다른 레인 대상(헤드 요청 4) · 빌드 = prebuild에서 intl-links만 빼고 전부 exit 0 + next build + postbuild 3종 ✅. §13: EN↔ms 카드 집합 6편 일치 · 수치 불일치는 구두점, 단어↔숫자, 직답 재진술, bb/100 풀이의 «100»뿐 · 커버리지 밖 4자리 손검산 통과(bad-beat L108·L116 · cooler L53·L76). 렌즈 4종: 지적 약 79건(렌즈 간 중복 포함) · 반영 고유 약 60건(치환 81규칙) · 기각 14 · EN-먼저 3 → 2차 교열 7건 + 누락 1건 전건 반영. 🔴 D유형·§13 오류 0.

B 산출(2026-09-27): lib/posts-ms/ 6편 + index.ts ms-gloss 칸 두 곳. 집필 = Opus 서브 6개 병렬(편당 1 · 입력 = 브리프 + EN 마스터 + 틀 + ms-posting-reference §2~3). 자기 게이트: audit:hard ms 6편 0err 0warn · check:structure 내 슬러그 결손 0 · EN↔ms 카드 집합 6편 일치 · 수치 차이는 날짜·구두점·직답 재진술뿐 · 빌드 산출물 히어로 1개씩 · FAQ 스키마 EN과 같은 수 · next build ✅(prebuild 중 intl-links만 제외 — 헤드 요청 4).

A 산출(2026-09-26): `docs/ms-lanes/gloss-brief.md`(B 입력) · `docs/keyword-bank/ms-gloss.md`(키워드 근거). 커밋은 C에서 한 번에.

## 편별

| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-glossary | ☑ | ☑ | ☑ | poker terms 110 · 표 107행 행 수 그대로 |
| holdem-bad-beat | ☑ | ☑ | ☑ | jackpot = 규칙 구조만(운영사·지급액 금지) |
| holdem-cooler | ☑ | ☑ | ☑ | 말레이 PAA «Apakah maksud "cooler"?» 첫 문장 직답 |
| holdem-fish | ☑ | ☑ | ☑ | «ikan» 용어 채택 금지 |
| holdem-rake | ☑ | ☑ | ☑ | FAQ 합법성 = EN 중립 답 범위 그대로 · 달러 환산 금지 |
| holdem-straddle | ☑ | ☑ | ☑ | 🔴 blind-meaning L122 정의 문장 재사용 금지 |

## 신규 용어

| EN | 채택 ms | 근거 |
|---|---|---|
| rake cap | had maksimum (cap) → 이후 cap | 🆕 · 현지 MT «had topi» 반면교사(poker.md/ms) |
| time charge | time charge (bayaran ikut masa) 첫 등장 병기 | 🆕 · 코퍼스 `holdem-tournament-vs-cash-game` L91 «bayaran tempat duduk berdasarkan masa»와 뜻 정합 |
| no flop, no drop · dead drop | 영어 그대로 + 풀이 | 🆕 · MT «Tanpa Flop, Tanpa Penurunan» 금지 |
| favorite / underdog | favourite / underdog (영국식 철자) · 글마다 첫 등장만 «favourite (pilihan utama)» 병기 | 🆕 · Fable 카피 «Favourite 80%» · C 네이티브 렌즈: glossary·cooler의 «pilihan utama» 단독 → favourite로 통일 |
| ahead | di hadapan (🔴 di depan 금지 — 관용구 «di depan mata» 제외) | C 네이티브 · bad-beat·glossary 22 vs cooler 7 → 통일 |
| community cards | kad komuniti | C 네이티브 · 코퍼스 49 · «kad kongsi» 폐기 |
| equity | equity (영어) | C 네이티브 · «ekuiti» 코퍼스 0 |
| check (표 머리) | Check (cek) — 기존 입문 글(betting-actions 등)이 «cek» | C 네이티브 · 링크 대상과 같은 말로 읽히게 |
| stakes | stakes (복수형 고정) | C SEO · 코퍼스·브리프 1-C · 단수 «stake» 11곳 수정 |
| file under | melabelkan … sebagai | C 네이티브 · «memfailkan» 칼크 폐기 |
| over time | lama-kelamaan | C 네이티브 · 🔴 «dari semasa ke semasa»(=가끔) 오역 2곳 수정 |
| road gambler | penjudi kembara | C 네이티브 · «penjudi jalanan» 오역 |
| suckout | suckout 영어 그대로(«kad bertuah» 풀이) | 🆕 · 말레이 야생 용례 0 |
| house (카지노·룸) | bilik kad (문맥상 pihak rumah) | 코퍼스 bilik kad 5 |
| straddle 풀이 | blind tambahan sukarela · 동사 «buat straddle» | 코퍼스 `holdem-blind-meaning` L122 · 🔴 mengangkang·Straddle Tombol 금지 |
| weak player | pemain lemah (🔴 ikan 용어 금지) | 코퍼스 1 · jmarian 사전 «ikan (pemain baru)» 뉘앙스 불일치 |
| betting actions (H2) | Aksi Pertaruhan | 기존 ms 제목 `holdem-betting-actions` |
| The 3 Things to Remember | 3 Perkara untuk Diingati | 코퍼스 2편(«Yang Perlu Diingat» 1편은 비채택) — 🔴 다른 레인과 대조 필요 |
| X, at a glance | Ringkasan pantas | 코퍼스 `holdem-betting-actions` — 🔴 다른 레인과 대조 필요 |
| hole cards | hole card (영어) | B · 코퍼스 hole card 20 vs kad tertutup 2 → bad-beat 서브의 «kad tertutup»을 본체가 통일 |
| Odds & Math (카드 라벨) | Odds &amp; Matematik | B · 브리프 매핑엔 «Odds»만 — 4편(bad-beat·cooler·fish·rake) 서브가 독립적으로 같은 값 |
| outdrawn | ✅ **dipintas** (cooler «dikejar» 5곳 → dipintas) | C 네이티브 판정 · «dikejar»=쫓기다(추월 의미 없음) · «dipotong»은 rake «dipotong»(공제)과 충돌 · bad-beat «dikejar dan dipintas»는 의도된 짝이라 유지 |
| leak | ✅ 첫 등장 «leak (kelemahan berulang)» → 이후 «leak» | C 네이티브 판정 · «kebocoran»은 물리적·공금 누수로 읽힘 · 코퍼스 leak |
| suit (same-suit) | jenis | B · 코퍼스 hand-rankings «satu jenis» |
| floor | floor (penyelia bilik kad) | B · straddle |
| crack (aces cracked) | ✅ tumbang (kepada) | C 네이티브 · «dipecahkan»·«pecah» KL에서 어색 → bad-beat 7 · cooler 1 수정 |
| quick test (앞섰나 판별) · litmus test (같은 결정 다시?) | ✅ **ujian pantas** · **ujian litmus** — 서로 다른 테스트라 이름 둘 | C 네이티브 판정 · bad-beat «ujian ringkas» 3곳 → ujian pantas(«Jawapan ringkas» 라벨과도 겹쳤음) |
| orbit · spew · sucker · break-even | orbit(풀이 1회) · suka membazir cip (spew) · sucker (mangsa yang mudah) · pulang modal | B · fish |
| rakeback deal · points · loyalty program | kadar rakeback · mata ganjaran · program kesetiaan | B · rake — «tawaran» 가입 유도 어조 회피 |
| money bubble · pay jumps · stall | bubble wang / zon wang · lonjakan bayaran · melengah-lengahkan permainan | B · glossary |
| uncapped straddle · re-straddle progression · raise cap | straddle tanpa had · tangga re-straddle · had raise (raise cap) | B · straddle |

## 링크 편차

| slug | EN 링크 대상 | 처리 |
|---|---|---|
| (6편 전부) | — | **편차 0** — EN 내부링크 대상 전부 §0-A 51편 안. 외부 1건(straddle → blog.gtowizard.com) URL 그대로 |

## EN-먼저 후보

| EN 파일:L## | 무엇 | 근거 |
|---|---|---|
| lib/posts-en/holdem-glossary.ts (전체) | «poker face» 항목 없음 — MY «maksud poker face» 70 + «poker face maksud» 40 + «…bahasa melayu» 20(의도 절반은 노래) | 키워드 뱅크 §holdem-glossary · ms에서 창작 금지라 EN에 먼저 넣어야 전파 가능. 우선순위 낮음 |
| lib/posts-en/holdem-glossary.ts L27 stripe «90+» | 표 용어 행 실측 8+20+9+25+11+22+20=115(혼동 표 포함) — 브리프 «107행»·EN «90+» 모두 재확인 필요. 틀린 건 아님(90+) | B glossary 서브 계수 · 브리프 «내부링크 37»도 실측 /en/blog/ 43(readnext 포함) |
| lib/posts-en/holdem-rake.ts «Online vs Live Rake» H2 첫 문단 · «How Much Rake Do You Actually Pay?» 첫 문단 | 직답 규격(40~75단어) 미달(1줄 · ~35단어) — ms는 EN 사실 요약으로 보강함 | B rake 서브 |
| lib/posts-en/holdem-fish.ts Zoo·명언·«Am I the Fish» H2 · glossary H2 #2~#7 · cooler 4개 H2 | 굵은 첫 문장 직답 없음/짧음 — ms 서브가 EN 사실만으로 직답 추가 | B 서브 3개 |
| lib/posts-en/holdem-bad-beat.ts L189 FAQ(Mabuchi) | 본문 L137은 «엄밀히는 bad beat가 아니다(Phillips가 턴부터 앞섬)»인데 FAQ 답은 단서 없이 bad beat로 확정 → 스키마 답에 모순 노출. ms도 EN대로 둠 | C SEO 렌즈 · 확신도 중간 |
| lib/posts-en/holdem-bad-beat.ts · rake · straddle 여러 H2 | GEO 직답이 문단 끝에 있거나 서사로 시작(bad-beat L47·L83·L133·L143, rake L71, straddle L50·L68, fish L55) — ms도 EN 골격 유지 | C SEO 렌즈 · glossary·cooler 방식(굵은 직답 첫 문장)으로 EN부터 |
| lib/posts-en/holdem-glossary.ts «Run it twice» 행 · holdem-cooler.ts L69 | «players deal the rest twice»(딜은 딜러가 한다) · «Here's the same players» 비문 — ms는 번역 단계에서 바로잡음 | C 네이티브 렌즈 |

## 헤드 요청

1. 🟡 **기존 ms `lib/posts-ms/holdem-hand-rankings.ts` L111 번역 편차** — EN L110 «the single most frequent **beat** I hear players groan about»가 ms에서 «ialah **bad beat** yang paling kerap…»로 옮겨졌는데 콜아웃 라벨(L110)은 «Cooler paling lazim». 이번 bad-beat·cooler 두 글이 둘을 엄격히 구분하므로 같은 사이트 안에서 모순으로 읽힌다 → «bad beat» → «kekalahan» 류로(EN 유래 아님 · ms 번역 유래). 링크 복원 queue 회차(정본 §7-⑤)에 묶어 주세요.
2. 🟢 기존 ms `holdem-blind-meaning` L118~122(straddle 한 문단 + 본 글 예고) — 이번 straddle 글이 생기면 그 자리 링크 복원 대상(§7-⑤). 정의 문장은 이 글이 재사용하지 않는다(브리프에 금지 명시). C에서 `check:structure`가 확인: `ms/holdem-blind-meaning — link 1개(holdem-straddle)` · **`ms/holdem-tournament-vs-cash-game — link 1개(holdem-rake)`**도 이제 복원 가능. blind-meaning H2 «(Serta Straddle)»의 카니발도 이 링크로 주인을 넘겨야 풀린다(SEO 렌즈).
3. §7-③ 신규 용어 대조 때 **«3 Perkara untuk Diingati» · «Ringkasan pantas»**를 다섯 레인에서 확인 — 이 레인은 코퍼스 다수결로 골랐다.
4. 🟠 **정본 §0-A ↔ §5 게이트 충돌** — §0-A는 다른 레인 슬러그에 «건다»인데, `check:intl-links`는 대상 미번역이면 exit 1이고 prebuild에 걸려 있어 레인 단계에서 `npm run build`가 원리상 못 통과한다. 이 레인 실측: 27건 전부 prob(pot-odds 10·outs 2·probability 2) · strat(position-play 5·starting-hands-chart 3·positions 1) · rank(tiebreak-rules 3·split-pot-rules 1). → B는 prebuild 9종을 intl-links만 빼고 개별 실행(전부 exit 0) + `npx next build` ✅로 대신했다. 30편 머지 후 헤드 빌드에서 0이 되는지 확인 부탁 · 정본 §5 문구 정리 필요.
5. 🟡 `audit:hard`는 캐시를 `node_modules/.cache/audit-hardening/posts-ms/`에 쓰는데 `node_modules`가 본체와 junction 공유다 → 5레인이 동시에 돌리면 서로의 캐시를 덮을 수 있다(이 레인 첫 실행이 index 등록 후 파일 미존재로 ERR_MODULE_NOT_FOUND — 원인은 내 쪽이었지만 경로가 본체 것이었다). 판정이 이상하면 재실행 권장.
6. ✅ bad-beat·cooler 커버리지 밖 카드 문단 4개 — C ②에서 손검산 통과.
7. 🟡 **§7-③ 용어 대조 추가분**: 이 레인이 C에서 고정한 «dipintas · di hadapan · favourite · tumbang · leak · ujian pantas · kad komuniti · equity · stakes»를 다른 4레인과 대조해 주세요. 특히 기존 입문 글은 «cek», 신규 글은 «Check (cek)»/«check»라 갈림이 남아 있다.
8. 🟢 straddle의 «kerusi»(17회) vs 코퍼스 «tempat duduk»(31:0) — 네이티브 렌즈는 문체 문제 아님·낮음으로 판정. 이 레인은 고치지 않았다. 레인 경계 교차 렌즈(§7-④)에서 판정.

## 미결

- 현지 상위 글 원문은 Playwright MCP 브라우저 미설치로 **레포 playwright·curl 원문 HTML의 h2/h3 추출**로 대신했다(요약 아님). reddit ?tl=ms · GGPoker id(MY 403) · partypoker(JS 렌더)는 SERP 스니펫만 — 브리프에서 사실 근거로 쓰지 않았다.
