# 🅲 ar 도구 레인 진행 (`lane-ar-tools`)

> 정본 = `docs/tool-lanes-2026-10-14.md` · 브리프 = 회차 1 `docs/tool-lanes/ar-tools-r1-brief.md` · 회차 2 `docs/tool-lanes/ar-tools-r2-brief.md`.

## 실행 기록

| 구간 | 시작 | 마감(90분) | 모델·도구 | 자식 | 상태 |
|---|---|---|---|---|---|
| 회차 1 A | 10:46 | 12:16 (14:45 절대 정지) | Opus 5.5 본체 · DataForSEO 6호출 · 아스트라 codex(gpt-6-astra · read-only · 스크래치) · Fable 서브 1회(카피) | codex PID 26012(node 46160) — 10:55 exit=0 자연 종료 확인 · 스크래치 `astra-ar-tools-A` | ✅ 10:58 끝 |
| 회차 1 B | 11:01 | 12:31 (14:45 절대 정지) | Opus 5.5 본체만(서브·외부 모델 호출 0) | `npm run build` 1회(백그라운드 · 내가 띄운 것 · exit 0 자연 종료) | ✅ 끝(«11:50»은 오기 — `.next/BUILD_ID` 11:12 · C 시작 11:24) · 🔴 **미커밋**(정본 §1 C-7에서 커밋) |
| 회차 1 C | 11:24 | 12:54 (14:45 절대 정지) | Opus 5.5 본체(새 맥락) · 렌즈 3 + 2차 교열 1 Agent(opus) · 아스트라 codex(gpt-6-astra · read-only · 스크래치 `astra-ar-tools-C`) | codex PID 14202 — exit 0 자연 종료 · `next start` PID 26864·22664 — 명령줄 대조 후 내가 종료 · `npm run build` 2회 exit 0 | ✅ 끝 · 커밋 |
| 회차 2 A | 11:57 | 13:27 (14:45 절대 정지) | Opus 5.5 본체 · DataForSEO 6호출(볼륨 4 · SERP 1 · 자동완성 2 — 응답 cost 필드만) · 아스트라 codex(gpt-6-astra · read-only · 스크래치 `astra-ar-tools-r2-A`) · Fable 서브 1회(카피) | codex node PID 21880 / codex 39272(12:03:07 생성 · 내가 띄운 것) | ✅ 12:14 끝 · codex 12:10 exit=0 자연 종료 |
| 회차 2 B | 12:22 | 13:52 (14:45 절대 정지) | Opus 5.5 본체만(서브·외부 모델 호출 0) | `npm run build` 1회(백그라운드 · 내가 띄운 것 · exit 0 자연 종료) | ✅ 12:29 끝 · 🔴 미커밋(C-7에서 커밋) |
| 회차 2 C | 13:01 | 14:31 (14:45 절대 정지) | Opus 5.5 본체(새 맥락) · 렌즈 3 + 2차 교열 Agent(opus) · 아스트라 codex(gpt-6-astra · read-only · 스크래치 `astra-ar-tools-r2-C`) | codex(node PID 1346 · 13:01:17 생성 · 내가 띄운 것) 13:07 exit=0 자연 종료 · `next start` PID 10828 — 명령줄 대조 후 내가 종료 · `npm run build` 2회 exit 0 | ✅ 13:11 끝 · 커밋 |

사용량: 계정 할당량 지표는 이 세션에서 관측 불가 → 숫자 추정하지 않음. DFS 호출 비용은 응답 `cost` 필드로만(0.09 등).

## A 결과

- `git merge main` = fast-forward(handoff 1줄).
- 선례 구조: vi `5b4b9b50` 19파일 · ru `fcccc119`(10-13 · 계산기만) · tr `a7e5279d`(회차 2 — 🔴 당시 tr 글 8편 = ar 8편과 슬러그 동일 → 링크 구조 틀).
- 숫자 표기 〔실측〕 서양 숫자 4,432 : 아랍-인도 0 · «%» 36 : «٪» 2 → `numberLocale "en-US"` · gap/prefix 없음.
- 헤드텀 〔DFS〕 → `docs/keyword-bank/ar-tools.md`(아랍어 도구구 전부 null · 아랍어 SERP 웹페이지 0 → 영어 머리어 + 아랍어 부제).
- 용어표 → 브리프 §2.
- Fable 카피: 2안씩 → 추천 조합 채택 · 글자 수 재측정(55·130 / 52·133) → 브리프 §4.
- 아스트라 A-교차(25행): OK 23 · RISKY 2. 판정 ↓

### A-교차 판정표 (출처 구분)

| 자리 | 출처 | 판정 | 처리 |
|---|---|---|---|
| 용어 22행(계산기 이름 … 2인칭) | 아스트라 OK | 채택(유지) | 브리프 §2 그대로 |
| implied odds = الاحتمالات الضمنية | 아스트라 OK · GGPoker ar 블로그 제목 «مقدمة إلى الاحتمالات الضمنية» | 채택 | 신규 용어 표 |
| 첫 등장 풀이(equity «حصتك المتوقعة من البوت» · pot odds · Bubble · SPR «نسبة الستاك إلى البوت» · M «مؤشر M») | 아스트라 처방 | 채택 — **풀이 문구만**(새 수치 없음) | 브리프 §5 |
| 숫자 en-US | 아스트라 OK | 채택 | — |
| RTL에서 숫자·카드 토큰 bidi | 아스트라 RISKY(W3C inline-bidi) | **부분 채택** — 사전 문자열에 제어문자/마크업을 넣지 않는다(공용 컴포넌트가 문자열을 그대로 찍는다). C 화면 실측에서 «2.7:1 · 35.4% · A♠K♥ · 1,326» 뒤집힘을 판정 → 깨지면 헤드 요청(공용 컴포넌트 `<bdi>` — `tournament-board.tsx` Iso 선례) | C 체크 항목 |
| null = 수요 0 아님 · SERP 주장 범위 | 아스트라 RISKY · DFS 문서 | 채택 | keyword-bank 문구 수정 |
| 영어 먼저 제목 | 아스트라 RISKY · 구글 원문 재확인 «Use the same language and writing system … as the primary content» | **판단 보류 → 헤드 H-3** — vi·hi·tr 선례와 충돌하므로 레인이 단독으로 뒤집지 않는다. B는 브리프 §4 그대로 | H-3 |

## B 결과

- 만든 것 6: `app/ar/calculator/{dict.ts,faq.ts,page.tsx}` · `app/ar/hand-chart/{dict.ts,faq.ts,page.tsx}` (틀 = EN 사전 + tr `a7e5279d` 링크 구조 · page = ru 계산기·vi 차트 골격).
- 고친 것 6(ar 한 줄씩): `lib/calculator-alternates.ts` · `lib/hand-chart-alternates.ts`(hreflang «ar» · LOCALES에 "ar") · `lib/hub-routes.ts` · `components/side-rail.tsx` · `components/intl-blog-post-client.tsx` CALC_CTA_LABELS · `scripts/generate-sitemap.mjs` 2줄.
- 🔴 B에서 고친 용어(브리프 §2에 없던 것 · 코퍼스 실측): SB/BB 풀네임 = **الرهان الصغير/الكبير**(70·90 : «البلايند الصغير/الكبير» 0) · bluff = **الخداع/خدعة**(4·2 · «بلاف» 1 · «بلوف» 0 → semi-bluff = «نصف خداع (Semi-bluff)») · deck = **مجموعة الأوراق**(2) · draw = **درو**(코퍼스 «(**درو**)») · set = **سيت** · nuts = **النتس**(5). 신규(코퍼스 0 · C 렌즈 판정 대상): فولد إكويتي · ستريت داخلي (Gutshot) · ورقتان أعلى من البورد (Overcards) · الهايجاك · الليمب(2).
- 차트 FAQ 4 = tr·ms 판 명제(«النوع 42% مقابل التركيبات 35.4%» · ko 정본) — EN 문장(«In GTO terms…»)이 아니다. 차트 노트 2 = 솔버 이름만(링크 없음) · «مصادر منشورة» 기반 추정(GTO-based 상속 결함 제거).
- 수 표기: `handsCount` «{n} يدًا»(11~99 타미즈 대격 — 포지션 범위 개수가 전부 이 구간인지 C에서 화면 확인) · `handsUnit` «يدًا»(169).
- 자기 게이트: `tsc` 내 파일 오류 0 · `check:calc-parity -- ar` 0 · `:all` 16사본 0 · `check:seo-sync` 🔴0 · `check:meta` 초과 0 · `check:intl-links` 통과 · `check:cjk`·`check:hsl` 0 · `npm run build` **exit 0** — `/ar/calculator`·`/ar/hand-chart` 정적 생성 · 사이트맵 2줄 생성(파일은 되돌림 · 커밋 금지) · postbuild `check:hreflang` 0 · `check:directives` 0 · `check:meta-lang` 🔴0 · 산출물 `<html lang="ar" dir="rtl">` · hreflang «ar» 자기참조 확인.
- ▶ **C 첫 명령**: `/clear` 뒤 «HARDEN.md 읽고 회차 1 C 시작해» — 작업 트리의 미커밋 12파일(신설 6 + 등록 6)이 C의 검수 대상이다. C 체크: 진행 파일 H-1(격자 RTL 뒤집힘) 화면 확정 · bidi 토큰 · handsCount 수 일치 · 위 «신규» 용어 렌즈 판정.

## C 결과

- C-1 게이트 재실행(11:25): `check:calc-parity -- ar`·`:all` 16사본 0 · `seo-sync` 🔴0 · `meta` 초과 0 · `intl-links` 통과 · `cjk`·`hsl` 0 · `hreflang` 0 · `directives` 0 · `meta-lang` 🔴0 · `number-format` 0 · `hygiene` 0 · `tsc` 내 파일 0.
- C-2 기계 대조(scratch `ar-diff.ts` · 키 집합 · 숫자/카드 토큰 · 빈 문자열 · 라틴 3단어 · 링크 실재): **결함 0.** 차이 전건 판정 = ① 키 차이 = quickRef ①~⑤·deal 링크 의도 생략(tr 선례) · 차트 rich 세그먼트·선택 키(tr 선례) · keywords «GTO» 제거(브리프 §4) ② 토큰 차이 = 숫자를 아랍어 낱말로 쓴 자리(«ورقتين»·«التسع»·«الثاني»…) · quickRef ④ 노트의 링크 문장 생략 · 차트 FAQ 2 «52 ورقة» 추가(참) · FAQ 4 ko/tr 판 수치(딜러 렌즈 CHART 직접 계산 470/1,326=35.4% 확인) ③ 빈 문자열 = `quickRef.5.linkTail` «»(노트가 «:»로 끝남 · 렌더 정상) ④ 링크 6 전부 실재.
- C-5 화면(`npx next start -p 3493` · 내 PID 26864 · 11:39 PID·명령줄 대조 후 종료): 390·1440 넘침 0 · 페이지 오류 0(콘솔 = 로컬 gtag·`/_vercel/*` 404뿐) · 계산기 AA vs KK 실행(81.7%/0.5%) · 차트 BTN 전환. H-1 확정 · H-4 신설(헤드 요청 표).

### C 판정표 (출처 구분 · 채택 / 기각)

| # | 자리 | 출처 | 판정 | 처리 |
|---|---|---|---|---|
| 1 | 차트 `filter.selected` «{pos} · {count}» → «71 · Button (BTN)»로 뒤집혀 읽힘 | 본체 화면 실측 | 채택 | «نطاق الفتح من {pos} يضم {count} من أصل 169 ({pct}%)» — 강한 RTL 낱말로 bidi 끊기 |
| 2 | 차트 H2에 아랍어 머리어 없음 | SEO 렌즈(중) | 채택 | `table.heading` «مخطط الأيدي الافتتاحية: نطاق الفتح حسب المركز» |
| 3 | `equity.th.equity` «Equity» 라틴 | SEO 렌즈(중) | 기각 | 브리프 §5 결정(EN 표 머리와 같은 칸 폭 · tr 선례 동일) |
| 4 | title «Poker Calculator» ≠ H1 «Poker Odds Calculator» | SEO 렌즈(저) | 기각 | 브리프 §4 의도 |
| 5 | `equity.winner` «يدك يفوز» 성 불일치 | 편집자(상) | 채택 | «الفائز: {p} بـ{hand}» |
| 6 | `equity.chop` «2 أيدٍ» 쌍수 위반 | 편집자(중상) · 딜러(중) · 아스트라 WRONG | 채택(편집자 문안) | «تعادل — تتقاسم {n} من الأيدي البوت بـ{hand}» |
| 7 | hole cards «المغلقتين» 코퍼스 0 | 편집자(상) · grep «الخاصتين» 13 : «المغلقت» 0 | 채택 | «ورقتيك الخاصتين» ×3 · FAQ «الورقتين الخاصتين» |
| 8 | 차트 why SB «الرهان الصغير يتحرك»(금액이 움직임) | 편집자(중) | 채택 | «صاحب الرهان الصغير (SB) يتحرك…» |
| 9 | 차트 FAQ 3 «رهانًا كبيرًا واحدًا» 직역 | 편집자(중) | 채택 | «دفع الرهان الكبير مسبقًا» |
| 10 | «الهايجاك» 코퍼스 0 | 편집자(중) | 채택 | «من HJ»(포지션 약어 라틴 규칙 · 아스트라 인용 사전 «هايجاك»도 있으나 약어가 일관) |
| 11 | «فولد إكويتي» 코퍼스 0 → «إكويتي الطي» | 편집자(중) ↔ 아스트라 OK(pokeracademyar 사전) | **기각 — 되돌림** | 본체 WebFetch 축어 재확인: https://pokeracademyar.com/glossary «**فولد إكويتي** (Fold Equity): "القيمة المكتسبة عندما ينسحب الخصم من البلوف"» · «إكويتي الطي»는 실증 0. 첫 등장 «فولد إكويتي (Fold Equity)» + 대명사 모호 해소 «وإلا فتخلَّ عنه»만 채택 |
| 12 | 거트샷 «درو» 누락 | 편집자(중) | 채택 | 프리셋 label·표 4행 «درو ستريت داخلي» |
| 13 | «والدرو تكسب» 성 | 편집자(중) | 채택 | «يكسب» |
| 14 | `pot.verdict.even` «تعادل»(무승부와 겹침) | 편집자(중) | 채택 | «نقطة التعادل (EV 0)» |
| 15 | wet/dry 직역 | 편집자(저중) | 채택 | «بورد كثير الاحتمالات (wet)» · 첫 «فلوب جاف (dry)» |
| 16 | 탭 «M البطولات» | 편집자(저) | 채택 | «M في البطولات»(SEO 렌즈: 탭 줄바꿈 0 — 2차 화면에서 재확인) |
| 17 | «ضد N يدًا»(N=1~8) | 편집자(저) · 아스트라 | 채택 | «ضد N من الأيدي العشوائية» |
| 18 | 오버카드 «رتبتان أعلى» 모호 | 편집자(저 · EN-먼저) | 채택 | «ورقتان رتبتاهما أعلى…» |
| 19 | wheel «العجلة» vs 코퍼스 «الويل» | 편집자(권고) | 기각 | 초보자 글에 «العجلة (the wheel)» 정의 — 오류 아님 |
| 20 | 66·55·44 «behind» 조건 누락 | 아스트라 WRONG | 채택 | «…رقائق متبقية تعادل ~15 ضعف المجاراة…» ×3 |
| 21 | FAQ 7 «الفلاش الثاني» = «두 번째 플러시» | 아스트라 WRONG | 채택 | «فلاش يكتمل لكنه يخسر أمام فلاش أعلى ويدفع لصاحبه…» |
| 22 | FAQ 1 «يضاعف ذلك مرة أخرى»(«두 배»로 읽힘) | 아스트라 RISKY | 채택 | «تزيد ذلك أضعافًا» |
| 23 | FAQ 12 «وكان المال قريبًا» 직역 | 아스트라 RISKY | 채택 | «واقتربت من دخول المراكز المدفوعة» |
| 24 | 차트 FAQ 5 «آسات العجلة» 풀이 없음 | 아스트라 RISKY | 채택 | «آس مع ورقة منخفضة من النقش نفسه، مثل A5s وA4s…» |
| 25 | FAQ 2 · quickRef ② «يفوز» = equity를 승률로 | 아스트라 WRONG(«inherited EN error») | **ar 기각 → EN-먼저** | EN «Pocket aces win about 82%» · «How often AA wins» 그대로 — 헤드 E-1 |
| 26 | guide 카드 «على الفلوب أو التيرن» 모호 | 아스트라 RISKY(EN 동일) | ar 기각 → EN-먼저 | 헤드 E-1 |
| 27 | «نصف خداع» → «شبه خداع» | 아스트라 RISKY | 기각 | «شبه خداع»도 실증 0(아스트라 인용 사전은 «سيمي بلوف») · 코퍼스 bluff = «الخداع» 4 : «بلاف» 1 · 라틴 병기 있음 |
| 28 | positions 풀네임 영어 | 아스트라 RISKY | 기각 | 전 로케일(tr·hi·vi·de·id·ms·pt) 선례 · 표·버튼은 약어 라틴 규칙 |
| 29 | 차트 FAQ 4 «35.4%» 출처 | 아스트라 RISKY | 기각 | 딜러 렌즈 CHART 직접 계산 BTN 71종 = 470콤보 = 35.4% |
| 30 | 차트 노트 2 솔버 46.6%(92종·618) | 아스트라 RISKY(출처 공백) | 기각 | 618/1,326 = 46.6% 산수 확인(딜러·아스트라) · 전 로케일 같은 문장(ko·tr 선례) — 원출처 확인은 레인 범위 밖 |
| 31 | 범례·push/fold «오른쪽 위 = suited» | 딜러(중상) · 편집자 | 채택(헤드) | H-1 ③에 push/fold `strong1` 추가 · 문구는 그대로(H-1 뒤에 맞다) |
| 32 | 차트 FAQ 5 3-bet 콜 레인지에 A5s 블러프 | 딜러(중 · EN-먼저) | ar 기각 → EN-먼저 | 헤드 E-1 |
| 33 | H2 강조선 물리 방향 | SEO 렌즈(중) | 채택(헤드) | H-4 ⑤ |

| 34 | winner·chop «بـ{hand}» → «بـزوجان» 격 오류(B부터 있던 구조) | 2차 교열(상) | 채택 | «الفائز: {p} — اليد الفائزة: {hand}» · «تعادل — تتقاسم {n} من الأيدي البوت (اليد: {hand})» |
| 35 | FAQ 12 «واقتربت» 주어가 «الجوائز»로 읽힘 | 2차 교열(중상) | 채택 | «وكنتَ قريبًا من دخول المراكز المدفوعة» |
| 36 | FAQ 7 «يخسر» 두 번 · 문장 경계 | 2차 교열(경미) | 채택 | «فالفلاش الذي يكتمل ثم يخسر أمام فلاش أعلى ويدفع لصاحبه، يخسر…» |
| 37 | 차트 FAQ 3 «الرهان الكبير» 반복 | 2차 교열(경미) | 채택 | «دفع رهانه مسبقًا» |

2차 교열(고친 22자리 재판정): 나머지 18 OK. 반영 후 `check:calc-parity -- ar` 0 · `npm run build` exit 0(postbuild hreflang·directives·meta-lang 0) · `seo-sync` 🔴0 · `intl-links` 통과 · 화면 재실측(차트 선택 줄 RTL 순서 정상 · «M في البطولات» 탭 한 줄 50px).

딜러 렌즈 «수치 오류 0»(아웃츠 20 · 팟 오즈 9 · ICM 2 예제 · 에퀴티 14 · FAQ 수치 전건 재계산) · 아스트라 독립 검산도 같은 결론(1,712,304 보드 전수 · ICM 재귀).

## 회차 2 A 결과 (`/ar/win-rate-quiz`)

- `git merge main` = 🅰 zh-hant·회차 1 머지·헤드 RTL `27d5bc7c` 수령(22파일).
- 선례 = zh-hant `4a26acb9` · ru `7efdcdd3`(`pl()` 헬퍼 꼴). ar엔 `/ar/solver`가 없어 솔버 표 행 자리 없음.
- 헤드텀 〔DFS〕 → `docs/keyword-bank/ar-tools.md` §5: poker simulator·trainer SA 10 · EG 10 · 아랍어 시뮬레이터 구 전부 null · SERP «محاكي البوكر» = 앱 2 + 게임 · 아랍어 웹 연습 도구 0.
- 솔버 앱 `i18n.ts` 〔실측〕 `lang=ar` 무시 → `solverLang: "en"` 명시(브리프 §6).
- Fable 카피 2안 → 안 A + Opus 조정 1(브리프 §4) · 아스트라 18행 → WRONG 1·RISKY 1 채택(브리프 §7).
- 🔴 RTL 예상 결함 R-1~R-5(브리프 §8 · 코드 판독) — 특히 **R-3 퀴즈 슬라이더**(네이티브 range가 RTL에서 반전 · 표식은 `left:%`)는 확정되면 배포 차단급 → C 화면에서 확정 후 헤드 요청.
- ▶ **B 첫 명령**: `/clear` 뒤 «HARDEN.md 읽고 회차 2 B 시작해» — 입력 = `docs/tool-lanes/ar-tools-r2-brief.md` 하나.

## 회차 2 B 결과

- 시작 전 `git merge main` = 🅱 fr·ru 대회 보드 머지분 수령(`89eafc9e` · 충돌 0).
- 만든 것 2: `app/ar/win-rate-quiz/{page.tsx,win-rate-quiz-client.tsx}` — 틀 = EN `EN_UI`(키·분기·인자·JSX 동일 · tsc가 키 집합을 강제) + ru `pl()`·`n()` 헬퍼 꼴 · page = zh-hant 골격.
- 고친 것 4(ar 한 줄씩): `lib/win-rate-quiz-alternates.ts`(LOCALES 끝 «ar» + `"ar"` 줄) · `lib/hub-routes.ts`(ar 배열 끝) · `components/side-rail.tsx`(hand-chart 뒤) · `scripts/generate-sitemap.mjs`(zh-hant 줄 뒤). `WIN_RATE_QUIZ_LOCALES` 소비처 = `app/community/my-records.tsx` L274(내 기록 → `/ar/win-rate-quiz` 링크가 자동으로 ar로 간다 · 코드 수정 없음).
- 브리프대로: 퍼센트 키 없음 · `solverLang: "en"` + `solverOpen` «(بالإنجليزية)» · 족보 9종 = 계산기 rankNames 축어 · 라벨형 수(«الأيدي: {n}» · «النقاط: {n}» · «التركيبات قبل الفلوب: {pre} ← الآن: {cur}» · «ما دفعته: {n}» · «البوت لك: {n}») · `pl()`은 outsLabel만(1·2 쌍수 동사·3–10·11+) · playersBtn·vsOpponents는 분기 직접.
- 브리프 밖 판단(C 렌즈 판정 대상):
  - `verdictCall`/`verdictFold` = 명사 «مجاراة»/«طي»(배지·리뷰 표·퀴즈 결과 «خطأ — الإجابة كانت: طي» 세 자리에 다 쓰여 명령형 «جارِ/اطوِ»보다 명사가 맞는다).
  - `noDrawNote` 표본 수 «{k} عملية محاكاة»(값 = 40,000 · 20,000 — 천 단위 정수 뒤 단수 소유격) · ruleText 같은 꼴. 🔴 인자는 공용 `fmt()`가 낸 문자열이다(타입 `samples: string` — 처음 `n()`을 씌웠다가 tsc로 잡아 고침).
  - ante = «أنتي»(코퍼스 23 : «آنتي» 0) · 규칙 목록 화살표 «←»(조건 → 행동도 RTL 진행 방향 · 브리프 §3 화살표 규칙 확장).
  - 퀴즈 공식 «ونقاط كل تقدير = 100 − 4 × الخطأ (بالنقاط المئوية)» — 수식 뒤 명사 굴절을 피하려 «=» 꼴(ru는 «… очков»).
  - formulaCaveat의 EN 대문자 강조(HIT/WIN)는 아랍어에 대문자가 없어 낱말 «تكتمل»/«بالفوز به»로만.
- 자기 게이트: `tsc` 내 파일 오류 0 · `check:meta` 초과 0(title 본체 52 · 접미 포함 67 · desc 153) · `check:seo-sync` 🔴0 · `check:cjk`·`check:hsl`·`check:hygiene`·`check:number-format` 0 · `check:intl-links` 통과(729편 · 푸터 3링크 실재) · `npm run build` **exit 0** — `/ar/win-rate-quiz` 정적 생성(8.42 kB) · 산출물 `<html lang="ar" dir="rtl">` · hreflang «ar» 자기참조 · robots «index, follow» · postbuild `check:hreflang` 0(세트 78종) · `check:directives` 0 · `check:meta-lang` 🔴0 · 사이트맵 1줄 생성(파일·`tsconfig.tsbuildinfo`는 되돌림 · 커밋 금지).
- 🔴 **미커밋**(정본 §1 C-7에서 커밋). C 검수 대상 = 작업 트리의 미커밋 6파일(신설 2 + 등록 4).
- ▶ **C 첫 명령**: `/clear` 뒤 «HARDEN.md 읽고 회차 2 C 시작해». C 체크: 브리프 §8 RTL R-1~R-5 화면 확정(🔴 **R-3 퀴즈 슬라이더** = 배포 차단 후보) · bidi 토큰(«35.4%» · «2/4» · «100 − 4 ×» · «{hits}/{decisions}») · 위 «브리프 밖 판단» 5건 렌즈 판정 · 1판 리버까지 실제 조작 + 퀴즈 1회.

## 회차 2 C 결과

- C-1 게이트 재실행(13:01~): `npm run build` **exit 0**(`/ar/win-rate-quiz` 8.42 kB · postbuild `check:hreflang` 0 · `check:directives` 0 · `check:meta-lang` 🔴0) · `check:meta` 초과 0 · `seo-sync` 🔴0 · `cjk`·`hsl`·`hygiene`·`number-format` 0 · `intl-links` 통과(729편) · `tsc` 내 파일 0.
- C-2 기계 대조(scratch `ar-wrq-diff.mjs`): 키 118 = 118 · 차이 0. 토큰 차이 3건 전부 판정: `playersBtn`·`vsOpponents` = 분기 조건 숫자(구조 · 수 일치 분기) · `ruleText` EN «0.25–0.35%p»·«25%p» → ar «نقطة مئوية»(같은 단위 · ru «п.п.» 선례). 빈 문자열 2 = EN 구조 그대로(`filter(Boolean)` · 삼항). 라틴 3단어 0. 링크 3 실재.
- C-3·C-4: 렌즈 3(opus · 편집자 6 · 딜러 4 · SEO 13행) + 아스트라 30행(gpt-6-astra · 13:01~13:07 · exit 0 · RISKY 5 · EN-FIRST 1 · OK 24) → 아래 판정표.

### 회차 2 C 판정표 (출처 구분 · 채택 / 기각)

| # | 자리 | 출처 | 판정 | 처리 |
|---|---|---|---|---|
| 1 | `splitLabel` «تعادل بين أنت · BTN» — بين 뒤 독립대명사 불가 | 편집자(중 · high) ↔ 아스트라 OK | 채택(편집자) | «تقسيم البوت — تعادل: {names}» (winLabel «الفائز:» 라벨형과 같게) |
| 2 | ruleText «الرهان … يُقتصر على أول إن» 비인칭 수동에 주어 | 편집자(중 · high) | 채택 | «والرهان الذي يتجاوز الستاك المتبقي يتحوّل إلى أول إن.» |
| 3 | formulaCaveat «تكتمل يدك» — 위 숫자는 개선 아웃츠(셋·투페어·오버카드)까지 센다 · hitLabel과 어긋남 | 편집자(저중) ↔ 아스트라 OK(결정 e) | 채택 | «تصلك إحدى هذه الأوراق» · «قد تصلك إحداها … وقد لا تصلك» (EN «HIT»에 더 가깝다) |
| 4 | shareCopied «من ما قبل الفلوب» | 편집자(저) | 채택 | «من مرحلة ما قبل الفلوب» |
| 5 | noDrawNote «فلاشًا أو ستريت» 격 불일치 | 편집자(저) | 채택 | «ستريتًا» |
| 6 | quizStats «متوسط الفارق» ↔ quizHandSummary «متوسط الخطأ» | 편집자 EN-먼저 | 기각(ar 변경 없음) | EN도 «avg off»·«avg error» 다름 |
| 7 | outsBreak.over·noDrawNote «زوج مع ورقة أعلى» = «페어 + 오버카드 보유»로 읽힘 | 딜러(저) | 채택 | «لتكوين زوج بورقتك الخاصة الأعلى من كل أوراق البورد (Overcard)» · «زوج بورقتك الخاصة الأعلى من البورد» |
| 8 | tight «مُكوَّن بإحدى الورقتين الخاصتين» — 오버페어는 두 장 | 딜러(저) | 채택 | «مُكوَّن بورقة خاصة واحدة على الأقل» |
| 9 | ante/stack «ويبدأ بستاك قدره 1,000» 앤티 뒤 잔액으로 읽힐 수 있음 | 딜러(저 · low) | 기각 | EN «posts 20 to start with a 1,000 stack»과 같은 구조 · 확신 낮음 |
| 10 | `<ul … pl-4>` RTL에서 불릿 쪽 여백 없음 | SEO(중 · high) | 채택 | `ps-4`(ar 파일만) |
| 11 | H1·부제에 아랍어 머리어 없음 | SEO(중) | 기각 | 브리프 §4 결정(H1 영어 머리어) · 화면 브레드크럼·HubPage 제목·사이드 레일이 «محاكي البوكر»를 이미 보인다(390 실측) |
| 12 | resultTabs «📈 مسار الإكويتي» 390 잘림 우려 | SEO(저 · 추정) | 기각 | 390 실측 한 줄 · 잘림 0(`review-390.png`) |
| 13 | roleDefend «دافع» 명사 «동기»로도 읽힘 | SEO(저) | 기각 | 브리프 §2 확정 · «فتح» 옆 배지 문맥 · 편집자·아스트라 이의 없음 |
| 14 | 푸터 «كيف تعمل بوت أودز ←» → 입문 글 | SEO(저) | 기각 | 브리프 §5 — 대상 글 H3 축어 |
| 15 | tsbuildinfo 커밋 제외 | SEO | 채택 | 커밋 = 내 파일만 |
| 16 | showdown 첫 등장 풀이 누락(브리프 §2 «المواجهة (الشوداون)») | 아스트라 RISKY | 채택 | noBetAllIn 두 분기 + ruleText 첫 등장 |
| 17 | riverNote «بكل يد» — 리버도 표본(SAMPLES.postflop · `_engine.ts` L735) | 아스트라 EN-FIRST | ar 기각 → EN-먼저 | 헤드 E-2 |
| 18 | `6-max`·`9-max`·`3-bet` RTL에서 «max-6»으로 | 아스트라 RISKY · **화면 실측 확정**(테이블 버튼 «max-6 · max-9») | 채택(헤드) | 사전에 제어문자 금지 → H-5 렌더 측 격리 |
| 19 | solverNote 플롭 토큰 무늬 이탈 | 딜러(중) · 아스트라 RISKY | 채택(헤드) | H-5 `<bdi dir="ltr">` |
| 20 | formulaExpr «10 × 4 − 2» RTL 시각 순서 · 퀴즈 공식 | 아스트라 RISKY | 부분 — formulaExpr만 헤드 | 숫자만인 식은 격리 권장(H-5 경미) · ruleText 공식은 아랍어 낱말이 끼어 RTL 읽기 순서가 맞다(편집자 d PASS) — 기각 |
| 22 | 2차 교열(고친 13자리): 11 OK · L110·L122 «بورقتك الخاصة الأعلى من» = 한 장만 가진 듯 + 정관사 비교급+من | 2차 교열(저 · 85%) | 채택 | «بورقة خاصة تعلو كل أوراق البورد» · «زوج بورقة خاصة تعلو البورد» · L227 «يُخفَّض» 제안은 선택 — 기각(뜻 통함) |
| 21 | 결정 a~e(브리프 밖) | 편집자 a·b·c·d PASS · e 부분(→#3) · 아스트라 a~e OK | 유지 | — |

- C-6 반영 13자리 + 2차 교열 2 → `npm run build` **exit 0**(postbuild hreflang·directives·meta-lang 0) · `seo-sync` 🔴0 · `intl-links` 통과 · `number-format`·`hygiene` 0 · `calc-parity -- ar` 0 · `tsc` 내 파일 0 · 사이트맵·tsbuildinfo 되돌림.
- C-5 화면(`npx next start -p 3494` · 내 PID 10828 · 명령줄 대조 후 종료 · 스크린샷 `tmp/screen/ar-wrq-c/` 비추적): 390·1440 넘침 0 · 페이지 오류 0(콘솔 = 로컬 `/_vercel/*` 404뿐) · 1판 리버까지(«الفائز: BTN · فول هاوس» · 리뷰 «في مرحلة الفلوب…») · 결과 탭 3 · 퀴즈 1회(«تقديرك 20% · الفارق 4.1 نقطة مئوية · النقاط: 84») · 상대 레인지 · 카드 선택기. 🔴 RTL 결함 확정 → 헤드 요청 H-5.

## 신규 용어 (코퍼스 0)

| EN | 채택 | 근거 URL·grep |
|---|---|---|
| implied odds | **الاحتمالات الضمنية** (첫 등장 «(Implied Odds)») | https://ggpoker.com/ar/blog/an-introduction-to-implied-odds/ 제목 축어(아스트라 인용) |
| ICM deal | **صفقة ICM** | https://ggpoker.com/ar/poker-games/featured-final-table/ «خيار إبرام الصفقة (المعروف أيضًا باسم صفقة ICM)» — 본체 WebFetch 축어 재확인 |
| chip chop | **Chip Chop** 라틴 + 첫 등장 풀이 «تقسيم الجوائز بحسب حصص الرقائق» | 아랍어 표기 실증 없음(아스트라) → 라틴 유지 · ICM 딜과 동의어로 쓰지 않는다 |

## 헤드 요청

| # | 무엇 | 왜 | 제안 |
|---|---|---|---|
| H-1 | 🔴 **13×13 격자 RTL 뒤집힘** — `components/hand-chart/hand-chart-tool.tsx` L262~(열 머리 `flex` + 행 `flex`) · `components/calculator/calculator-tool.tsx` L1427(`repeat(13)` grid · 스타팅 핸드/푸시폴드 격자) | 전 문서가 `html dir=rtl`(app/layout.tsx L29)인데 두 컴포넌트에 LTR 고정이 없다 → flex·grid가 오른쪽부터 흐른다 = A열이 오른쪽, 열 머리 «A K Q…»가 거꾸로. 정본 §1-C5 «격자가 뒤집히면 결함». 공용 파일이라 레인이 고치지 않는다(§2 🅲) | 격자 래퍼(`inline-block` 표 · `repeat(13)` div)에 `dir="ltr"` 한 속성. EN SSR 바이트 동일을 지키려면 `rtl` 로케일일 때만 붙이기(`tournament-board.tsx`의 `rtl = locale === "ar"` 선례). 카드 선택기 `CardPicker`(L248~ · rank×suit `flex`)도 같다 — 게다가 열 머리 줄이 물리 여백 `ml-7`이라 RTL에서 무늬 칸(오른쪽)과 머리 여백(왼쪽)이 어긋나 **랭크 머리가 칸과 한 칸씩 밀린다**(코드 판독 · C 화면 실측에서 확정). 세 곳 모두 같은 `dir="ltr"` 처방 |
| H-1 확정(C 화면) | 🔴 **머지 전 처리 필수(배포 차단 조건)** — 화면 실측 11:30 `tmp/screen/ar-tools-c/` · `tmp/screen/ar-interact/`(비추적) | ① 차트 13×13: A열·랭크 머리가 **오른쪽**, 행 머리(A K Q…)가 격자 오른편 — 거울상. ② 계산기 카드 선택기: 랭크 머리 줄이 **한 칸 밀림**(«A»가 무늬 기호 칸 위 · «2»가 «3» 위) — B 코드 판독 예측 그대로 확정. ③ 🔴 차트 `grid.legendNote` «المثلث العلوي الأيمن = suited»는 **고친 뒤의 화면 기준**으로 맞다(EN «upper-right») — 지금 거울상 화면에선 suited가 왼쪽 위라 **틀린 설명**이 된다. 계산기 `pushfold.note.strong1` «أعلى اليمين = suited»도 같은 의존(calculator-tool L1427 grid · 딜러 렌즈). 그래서 H-1을 안 고치고 배포하면 안 된다 — 두 문구를 «왼쪽»으로 바꿔 맞추지 말 것(고친 뒤 다시 틀린다) | 위 H-1 처방(`dir="ltr"` 3곳 · rtl 로케일일 때만). 못 고치면 ar 2페이지 배포 보류 |
| H-4 | RTL bidi 잔여(공용 · 결함 아님 ~ 경미) — C 화면 실측 | ① 차트 범례 포지션명 `truncate`가 RTL에서 라틴 문자열의 **앞**을 잘라 «…n (UTG)»로 보인다(`hand-chart-tool.tsx` L384) ② 표 «أمثلة الأيدي» 열 `EXAMPLES` 선두 «+»가 줄 오른끝으로 튀어 «,66-55+»로 보인다(L59~64 · L448) ③ 표 «(+21)»이 «(21+)»로(L437~439 — 아랍어 관례상 읽힘) ④ 히어로 «169يدًا»·«5مراكز» 사이 여백 없음 — `ml-1` 물리 여백이 RTL에선 바깥쪽(L182·L184) ⑤ H2 강조선 `border-l-4 pl-3`가 RTL에서 제목 끝(왼쪽)에 붙는다(SEO 렌즈 · L401 외) | ①②③ 해당 셀·라벨에 `dir="ltr"`(또는 `<bdi>`) ④⑤ 논리 속성 `ms-1`·`border-s-4 ps-3`. EN SSR 바이트 동일을 지키려면 rtl 로케일일 때만 |
| E-1 | EN-먼저 대기열 후보 3건(ar 단독으로 고치지 않음 — 전 로케일 공통 결함) | ① 계산기 FAQ «Pocket aces win about 82%…» · quickRef ② intro «How often AA wins…» — 표가 **equity**인데 «win»(아스트라 전수: AA vs KK 승 81.71% · 무 0.46% · equity 81.95%) ② guide 카드 «on the flop or turn» — 그 스트리트«에서부터»의 완성 확률 ③ 차트 FAQ 5 — «3-bet 콜 레인지»를 말하며 A5s·A4s 블러프(= 4-bet 블러프 맥락) | `docs/en-first-queue.md`에 등재 판단은 헤드 |
| H-3 | 제목 언어 순서 — 영어 머리어 먼저(«Poker Calculator — حاسبة …») | 구글 문서 «Use the same language and writing system … as the primary content»(10-14 원문 확인) · 본문은 아랍어. 반대 근거 = 아랍어 도구구 볼륨 데이터 없음 + vi·hi·tr 선례(영어 머리어 먼저) | 이번엔 선례대로. 바꾸려면 아랍어 먼저 «حاسبة احتمالات البوكر — Poker Calculator …»(글자 수 동일)로 헤드가 결정 · 전 로케일 일관 판단이라 레인 밖 |
| H-2 | `lib/posts-ar/texas-holdem-rules-for-beginners.ts` L450 — `/en/hand-chart` · `/en/calculator` 링크 2개 | 도구가 생기면 ar 독자가 영어 도구로 나간다. vi·ru·tr 회차는 같은 줄을 자기 로케일 도구로 바꿨지만, 정본 §2 🅲가 «vi 고유 링크·글 수정은 빼고»라 레인은 손대지 않는다 | 머지 때 헤드가 `/ar/hand-chart` · `/ar/calculator`로(앵커 문구는 그대로 — 이미 도구 H1 부제와 같다) |

| H-5 | 🔴 **회차 2 배포 차단 — 공용 시뮬레이터 RTL**(C 화면 실측 13:03~13:06 · `tmp/screen/ar-wrq-c/`) | **R-7 신규 · 최중대** 카드 앞면 랭크가 **잘려 안 보인다**(`_kit.tsx` L44 `KitCardFace` SVG `<text x=22>`가 `direction: rtl`을 상속 → text-anchor start = 오른끝 → 글자가 x=22에서 왼쪽으로 그려져 viewBox 밖). 보드·내 카드 전부 — 카드를 못 읽으면 도구가 성립 안 한다. **R-6 신규** 에퀴티 막대: 채움(`motion.div` width%)은 **오른쪽에서** 자라고 필요 에퀴티·내 추정 눈금은 `left:%`라 **왼쪽 기준** — 실측 390: 막대 29–361 · 채움 281–361(24%) · 추정 20% 눈금 x=94. «금색이 선을 넘으면 콜» 그림이 틀린다(L1627~1641). **R-3 확정** 퀴즈 슬라이더: 값 20 → 손잡이가 오른쪽에서 20%(네이티브 range RTL 반전) · 답 뒤 눈금은 왼쪽 20% — 같은 값이 반대편. **R-1 확정** 카드 선택기 A♠ x=342 > K♠ 315(오른쪽부터). **R-2 확정** 상대 레인지 13×13 AA 오른쪽 위(거울상 · 차트와 같은 증상). **R-4 확인** 리뷰 표 머리(`text-left`)와 칸 정렬 어긋남(경미). R-5 SVG 차트 = 결함 없음. 기타(경미): 팟 오즈 판정 줄의 공용 «→»가 RTL에서 거꾸로 가리킨다(«طي → 25.0% > 2.8%») · 승·무·패 «%2.6»(퍼센트가 앞에 — 아랍어 bidi 관례라 결함 아님) · **딜러 렌즈+아스트라**: `solverNote` 플롭 토큰 «K♠Q♥J♦»가 아랍어 문장 안에서 마지막 무늬가 떨어져 나가 «♦K♠Q♥J»로 보일 위험(UAX#9 — 사전엔 제어문자 금지 규칙 · 렌더 측 `<bdi>`가 맞다) | 회차 1 H-1 처방 꼴: `QuizUI`에 선택 키 `rtl?: true`(다른 로케일 바이트 불변) → `KitCardFace` svg에 `direction="ltr"`(또는 카드 래퍼 `dir="ltr"`) · 에퀴티 막대·슬라이더 래퍼·13×13 격자 2곳·카드 선택기에 `dir="ltr"` · 표 머리 `text-start` · solverNote 플롭 토큰은 렌더 측 `<bdi dir="ltr">`. 경미: 테이블 버튼 `tableBtn` «6-max»가 «max-6»으로 보인다(화면 확정 · 판정표 #18) → 버튼에 `dir="ltr"` · formulaExpr 숫자식 격리. 🔴 **R-7·R-6·R-3 안 고치면 ar 시뮬레이터 배포 보류** |

| E-2 | EN-먼저 후보 — `riverNote` «compares your final hand with every holding» | 리버 에퀴티도 표본 추정(`_engine.ts` L735 `heroEquity(…, SAMPLES.postflop)`) — 아스트라 · 전 로케일 공통 | `docs/en-first-queue.md` 등재 판단은 헤드 |

## 보고

- 회차 1 C 끝(커밋 = 이 파일과 함께). 렌즈 3(SEO 0결함 · 딜러 수치 0 · 편집자 13) + 아스트라 27행(WRONG 5 · RISKY 8 · OK 14) + 본체 화면 1 + 2차 교열 4 → 판정표 37행(채택 26 · 기각·EN-먼저 11 — #11은 원문 재확인으로 편집자 처방을 되돌리고 대명사 처방만 채택).
- 🔴 **머지 조건 = H-1**(격자 RTL · 배포 차단) — 안 고치면 차트 범례·push/fold 노트의 «오른쪽 위 = suited»가 화면과 반대다. H-2(초보자 글 /en 도구 링크 → /ar) · H-4(bidi 잔여 · 경미) · E-1(EN-먼저 3건) · H-3(제목 언어 순서)은 헤드 판단.
- `public/sitemap.xml`·`tsconfig.tsbuildinfo`는 빌드가 바꾼 것을 되돌렸다(미커밋).
- 다음: 헤드 머지 → 회차 2 `/ar/win-rate-quiz`(🅰 머지 뒤 `git merge main`).
- **회차 2 C 끝**(커밋 = 이 파일과 함께). 렌즈 3(편집자 6 · 딜러 4 · SEO 13) + 아스트라 30행(RISKY 5 · EN-FIRST 1 · OK 24) + 본체 화면 + 2차 교열 → 판정표 22행(채택 15 · 기각·EN-먼저·헤드 7).
- 🔴 **머지 조건 = H-5**(공용 시뮬레이터 RTL) — **R-7 카드 랭크 잘림**(카드를 읽을 수 없음) · **R-6 에퀴티 막대 채움↔눈금 반대편** · **R-3 슬라이더 반전**은 배포 차단. 안 고치면 `/ar/win-rate-quiz`는 머지만 하고 배포·색인 보류가 맞다. R-1·R-2(격자 거울상)·«max-6»·플롭 토큰 bidi·R-4는 같은 처방(`QuizUI.rtl` 선택 키 + `dir="ltr"`)으로 함께. E-2(riverNote · EN-먼저)는 헤드 판단.
