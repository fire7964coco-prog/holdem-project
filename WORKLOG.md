# 홀덤마스터 작업일지

> 목표: holdemmaster.com 구글 1페이지 달성
> 전략: 기술 SEO(SSG) + 블로그 50편 + 필라-클러스터 내부링크 구조

## 2026-07-13 (ro 루마니아어 신규 로케일 + Rules 필라 6편 — 21번째 로케일)

### 🌐 ro(루마니아어) 신규 로케일 + Rules 필라 6/6 (파일럿20)
> 톱추천 5개 2번타자. 루마니아 규제 포커시장. 신규 로케일 배선 + Opus 6병렬 + 적대적 QA 2배치.
- **인프라**: `lib/intl.ts` +ro 7개 맵(루마니아 UI) · `intl-posts.ts` RO_POSTS · `posts-ro/index.ts` · translate route.
- **브리프**: `docs/translation-terms-ro.md`. ⚠️**치명 함정**: **Culoare=flush**(색/무늬 다의어)·**Chintă=straight**·**Careu=포카드**·**홀덤 Full House>Culoare**. 숫자=유럽식(천단위 마침표·소수점 쉼표, it/es/de 계열), tu체, 특수문자 ă/â/î/ș/ț.
- **적대적 QA 2배치(Opus)**: §13 전수 손계산 0오류(pot 198.000·side pot 1.300·Chintă de Culoare Q-J-T-9-8·2,7:1/27%). 함정 4종 안전. 🔴 1건(showdown 깨진단어 "bui-uri"→"blind-uri") + 링크 하드체크 초기 blind→holdem-tournament 2건 교정.
- **결과**: 21번째 로케일 ro. Rules 필라 = **21개 언어**.
- **사용자 GSC**: `/ro/blog/` 6 URL.

## 2026-07-13 (bn 벵골어 신규 로케일 + Rules 필라 6편 — 20번째 로케일)

### 🌐 bn(벵골어) 신규 로케일 + Rules 필라 6/6 (파일럿19)
> sw 후 사용자 톱추천 5개(bn→ro→fil→uk→he) 착수 — 1번타자. 방글라데시+인도 서벵골 2.7억 화자. 신규 로케일 배선 + Opus 6병렬 + 적대적 QA 2배치.
- **인프라**: `lib/intl.ts` +bn 7개 맵(벵골 UI, OG=bn_BD) · `intl-posts.ts` BN_POSTS · `posts-bn/index.ts` · translate route.
- **브리프**: `docs/translation-terms-bn.md`. 벵골 산문 + **포커 전문용어 영어/음차 인라인**(벵골 베팅 씬 관습, blind 직역 ছোট অন্ধ 금지). 족보 음차(রয়্যাল ফ্লাশ·ফুল হাউস·ফ্লাশ·স্ট্রেট). **숫자=영어식 라틴**(벵골 숫자 ০-৯→라틴 31개 일괄변환, hi/fa 선례), Full House>Flush. আপনি체.
- **적대적 QA 2배치(Opus)**: §13 전수 손계산 0오류(pot 198,000·side pot 1,300·straight flush Q-J-T-9-8·2.7:1/27%). 🔴 0(양 배치 CLEAN), 🟡 소수 선택사항.
- **결과**: 20번째 로케일 bn. Rules 필라 = **20개 언어**.
- **사용자 GSC**: `/bn/blog/` 6 URL.

## 2026-07-13 (sw 스와힐리어 신규 로케일 + Rules 필라 6편 — 19번째 로케일·동아프리카)

### 🌐 sw(스와힐리어) 신규 로케일 + Rules 필라 6/6 (파일럿18)
> 18개 완결 후 사용자 지시로 **아프리카 스와힐리어 추가**(동아프리카 케냐·탄자니아·우간다·콩고 등 2억+ 화자). 신규 로케일 배선 + Opus 6병렬 + 적대적 QA 2배치.
- **인프라**: `lib/intl.ts` +sw 7개 맵(스와힐리 UI, OG=sw_KE) · `intl-posts.ts` SW_POSTS · `posts-sw/index.ts` · translate route. 빌드 TS 에러 0.
- **브리프**: `docs/translation-terms-sw.md`. ★**스와힐리엔 확립된 포커 어휘 없음** → **포커 전문용어(족보·액션·구조)는 영어 유지 + 스와힐리 산문 설명**(동아프리카 SportPesa 등 베팅 씬 관습, 억지 신조어 금지). 핵심명사만 스와힐리(karata·mkono·dila·meza·chipsi·dau). **숫자=영어식 그대로**(변환X = en·zh·ar·ms·th 계열). wewe/u-체. Full House>Flush.
- **적대적 QA 2배치(Opus)**: §13 전수 손계산 0오류(pot 198,000·side pot 1,300·Straight Flush Q-J-T-9-8·2.7:1/27%). 🔴 4건 교정(texas desc·texas readnext 깨진링크 holdem-hand-rankings→showdown·blind desc·showdown 오타 hausindi→haushindi) + 🟡 3건(game-order 동사접합 Uki-check·all-in desc 표현).
- **결과**: 19번째 로케일 sw. Rules 필라 = **19개 언어**(en 마스터 + ja·es·pt·de·zh·ar·id·ms·vi·hi·tr·fr·ru·it·pl·th·fa·**sw**).
- **사용자 GSC**: `/sw/blog/` 6 URL.

## 2026-07-13 (fa 페르시아어 신규 로케일 + Rules 필라 6편 — ★★18개 확장 18/18 완료·RTL)

### 🌐 fa(페르시아어) 신규 로케일 + Rules 필라 6/6 (파일럿17 = 마지막·18번째 로케일)
> 18개 확장 대미(부재중 자율). **RTL 신규 로케일** 배선 + Opus 6병렬 + 적대적 QA 2배치.
- **인프라(RTL)**: `lib/intl.ts` +fa 7개 맵(페르시아어 UI) + **`RTL_LOCALES`에 "fa" 추가**(`["ar","fa"]`) · `intl-posts.ts` FA_POSTS · `posts-fa/index.ts` · translate route. globals.css `[dir=rtl]`(ar) 재활용. 빌드 TS 에러 0.
- **브리프**: `docs/translation-terms-fa.md`. 족보 페르시아 음차+고유(رویال فلاش·کاره·فول هاوس·فلاش·استریت·سه‌تایی·دو جفت·جفت·کارت بالا), 홀덤 순서 فول هاوس>فلاش. **숫자=영어식·라틴 서양숫자**(ar 계열, 페르시아 숫자 ۰-۹ 지양). شما체(페르시아 웹 표준, تو 지양). 카드/숫자 RTL 내 LTR 임베드.
- **★교정(메인 선제)**: 6개 에이전트가 산문 숫자에 **페르시아 숫자(۰-۹)·아랍 퍼센트(٪) 혼입**(총 75개) → `.mjs` 스크립트로 라틴 0-9·%로 일괄 변환(값 보존), 잔존 0.
- **적대적 QA 2배치(Opus)**: §13 전수 손계산 0오류(pot 198,000·side pot 1,300·استریت فلاش Q-J-T-9-8·2.7:1/27%). 라틴 숫자·페르시아 철자·족보순서·RTL 전부 정확. 🔴 0, 🟡 2(all-in 메타 شما체 통일·적용).
- **★★결과: 18번째 로케일 fa = 다국어 18개 확장 완료.** en(마스터)+ja·es·pt·de·zh·ar·id·ms·vi·hi·tr·**fr·ru·it·pl·th·fa**(신규6). Rules 필라 = 18개 언어 전량.
- **사용자 GSC**: `/fa/blog/` 6 URL.

## 2026-07-13 (th 태국어 신규 로케일 + Rules 필라 6편 — 18개 확장 17/18)

### 🌐 th(태국어) 신규 로케일 + Rules 필라 6/6 (파일럿16)
> 18개 확장 5번타자(부재중 자율). 신규 로케일 배선 + Opus 6병렬 + 적대적 QA 2배치.
- **인프라**: `lib/intl.ts` +th 7개 맵(태국어 UI) · `intl-posts.ts` TH_POSTS · `posts-th/index.ts` · translate route. 빌드 TS 에러 0.
- **브리프**: `docs/translation-terms-th.md`. 족보 태국 음차+고유(รอยัลฟลัช·สเตรทฟลัช·โฟร์การ์ด·ฟูลเฮาส์·ฟลัช·สเตรท·**ตอง**=trips 고유어·สองคู่·คู่·ไพ่สูง), 홀덤 순서 ฟูลเฮาส์>ฟลัช. **숫자=영어식 그대로**(아라비아 숫자·콤마 천단위·마침표 소수, 변환X = en·zh·ar·ms 계열). คุณ체, 태국어 띄어쓰기 없음. `$` 보존.
- **적대적 QA 2배치(Opus)**: §13 전수 손계산 0오류(pot 198,000·side pot 1,300·สเตรทฟลัช Q-J-T-9-8·2.7:1/27%). 태국 문자 철자·영어식 숫자·족보순서 전부 정확. 🔴 0, 🟡 1(บาท 관용어 회피).
- **결과**: 17번째 로케일 th. **18개 확장 17/18**(남은 1=fa 마지막). 다음=fa(RTL).
- **사용자 GSC**: `/th/blog/` 6 URL.

## 2026-07-13 (pl 폴란드어 신규 로케일 + Rules 필라 6편 — 18개 확장 16/18)

### 🌐 pl(폴란드어) 신규 로케일 + Rules 필라 6/6 (파일럿15)
> 18개 확장 4번타자(부재중 자율). 신규 로케일 배선 + Opus 6병렬 + 적대적 QA 2배치.
- **인프라**: `lib/intl.ts` +pl 7개 맵(폴란드어 UI) · `intl-posts.ts` PL_POSTS · `posts-pl/index.ts` · translate route. 빌드 TS 에러 0.
- **브리프**: `docs/translation-terms-pl.md`. ⚠️**치명 함정**: **Poker=Straight Flush**(Poker królewski=Royal Flush)·**Kareta=포카드**·**Kolor=flush**(색/무늬 다의어)·**Strit=straight**·**홀덤 Full>Kolor**. 숫자=폴란드식(천단위 공백·소수점 쉼표), ty체, 특수문자 ą/ć/ę/ł/ń/ó/ś/ź/ż.
- **적대적 QA 2배치(Opus)**: §13 전수 손계산 0오류(pot 198 000·side pot 1 300·Poker=straight flush Q-J-T-9-8·2,7 do 1/27%). **함정 4종 전수 안전**(Poker=straight flush·Kareta·Kolor·Full>Kolor). 🔴 3건(game-order FAQ 마커·blind desc)+메인이 선제발견한 **FAQ 스키마 이슈**(game-order가 `**P.`+답변마커 없음 → 파서 정규식 `**Q. ...**`+`A.`에 맞게 7문항 교정: P.→Q.·A. 접두 추가·Q. 공백). texas는 `###` 헤딩 FAQ=마스터(EN/es/de) 공통 포맷이라 정상.
- **결과**: 16번째 로케일 pl. **18개 확장 16/18**(남은 2=th·fa). 다음=th.
- **사용자 GSC**: `/pl/blog/` 6 URL.

## 2026-07-13 (it 이탈리아어 신규 로케일 + Rules 필라 6편 — 18개 확장 15/18)

### 🌐 it(이탈리아어) 신규 로케일 + Rules 필라 6/6 (파일럿14)
> 18개 확장 3번타자(부재중 자율). 신규 로케일 배선 + Opus 6병렬 + 적대적 QA 2배치.
- **인프라**: `lib/intl.ts` +it 7개 맵(이탈리아어 UI) · `intl-posts.ts` IT_POSTS · `posts-it/index.ts` · translate route. 빌드 TS 에러 0.
- **브리프**: `docs/translation-terms-it.md`. ⚠️**치명 함정**: **Poker=포카드(quads)**·**Colore=flush**(무늬 seme와 다의어)·**Scala=straight**·**홀덤 Full>Colore**(이탈리아 변형 "Colore batte Full"과 반대! §13급). 숫자=유럽식(천단위 마침표·소수점 쉼표), tu체.
- **적대적 QA 2배치(Opus)**: §13 전수 손계산(rules 3예시·game-order full hand·족보표 7개·showdown alt) 0오류. **함정 4종 전수 안전 확인**(Poker=quads·Colore=flush·Full>Colore·Scala=straight). pot 198.000·side pot 1.300·Scala a Colore Q-J-T-9-8 확인. 🔴 3건(texas/showdown desc≤160·blind 주술일치 "ci sia"→"ci siano").
- **결과**: 15번째 로케일 it. **18개 확장 15/18**(남은 3=pl·th·fa). 다음=pl.
- **사용자 GSC**: `/it/blog/` 6 URL.

## 2026-07-13 (ru 러시아어 신규 로케일 + Rules 필라 6편 — 18개 확장 14/18)

### 🌐 ru(러시아어) 신규 로케일 + Rules 필라 6/6 (파일럿13)
> 18개 확장 2번타자(부재중 자율 진행). fr과 동일한 신규 로케일 배선 절차 + Opus 6병렬 번역 + 적대적 QA 2배치.
- **인프라**: `lib/intl.ts` SECONDARY_LOCALES+ru + 6개 맵(러시아어 UI 전량) · `intl-posts.ts` RU_POSTS · `lib/posts-ru/index.ts` 신규 · translate route ru. 빌드 TS 에러 0.
- **브리프**: `docs/translation-terms-ru.md`. 족보 러시아 음차(Роял-флеш·Каре·Фулл-хаус·Флеш·Стрит·Сет·Две пары), 숫자=러시아식 GOST(천단위 **공백** 1 326·198 000·소수점 쉼표 2,5·% 붙여쓰기), ты체, 키릴 철자.
- **번역 6편**(신규6): 허용 슬러그 6개뿐, 그 외 링크 평문화.
- **기계검사**: check-intl-links **14개 언어 통과**(142편)·build·러시아식 숫자 확인·stale ru Rules6 최신.
- **적대적 QA 2배치(Opus)**: §13 전수 손계산 → 카드 일치, **★game-order pot 198 000 재확인**(에이전트 158k 오산 반박, A 70k+B 70k=140k→58k+140k=198 000 정답). side pot 1 300·quinte flush·2,7:1 확인. 🔴 1건(blind desc 164→축약)+🟡 다수.
- **교정 8건**: blind desc≤160, тёрн→терн 일관성(브리프 표준), 어색문장·сленг(велью/сброшенную) 다듬기. 재빌드 통과.
- **★결과**: 14번째 로케일 ru. **18개 확장 14/18**(남은 4=it·pl·th·fa). 다음=it.
- **사용자 GSC**: `/ru/blog/` 6 URL(texas·game-order·betting·blind·all-in·showdown).

## 2026-07-13 (fr 프랑스어 신규 로케일 추가 + Rules 필라 6편 번역·배포 — ★18개 언어 확장 착수, 13번째 로케일)

### 🌐 fr(프랑스어) 신규 로케일 + Rules 필라 6/6 (파일럿12 = 18개 확장 1번타자)
> 12개 언어 Rules 완결 후 **18개까지 확장** 착수(사용자 지시, 추천순 fr→ru→it→pl→th→fa). fr은 **완전 신규 로케일**(기존 hi/tr는 로케일 존재+3편 보유였으나 fr은 0) → **인프라 배선부터**. 전 과정 Opus(번역 6병렬 + 적대적 QA 2배치). "번역=현지 맥락 재구성" 마인드셋 적용.
- **① 인프라 배선(신규 로케일)**: `lib/intl.ts` SECONDARY_LOCALES+fr + 6개 맵(OG_LOCALE fr_FR·HTML_LANG fr·POST_LABELS·CHROME·NAV_HOME_FEED·NAV_CTA 프랑스어 UI 전량) · `lib/intl-posts.ts` FR_POSTS 등록 · `lib/posts-fr/index.ts` 신규(getFrPost/hasFrPost) · community translate route LANG_NAME fr. 라우트는 SECONDARY_LOCALES 기반 자동생성 → fr 배열 추가만으로 `/fr/...` 전체 생성. **빌드 TS 에러 0**(모든 Record<SecondaryLocale> 키 충족).
- **② 브리프**: `docs/translation-terms-fr.md` 신규. 핵심 = **프랑스어 고유 족보명**(Quinte Flush Royale·Quinte Flush·Carré·Full·**Couleur**=flush·**Quinte**=straight·Brelan·Double Paire·Paire·Carte Haute), **숫자=프랑스식**(★천단위 **공백** 1,326→`1 326`·198,000→`198 000` — de·es의 마침표와 다름! · 소수점 쉼표 2.5→2,5 · **% 앞 공백** 35→`35 %`), tu체, 악상 정확. ⚠️Couleur=flush/무늬 다의어·tapis=all-in/stack 다의어.
- **③ 번역 6편**(신규6, 기존 fr 글 0): 허용 슬러그=Rules 6개뿐이라 그 외 링크 전부 평문화. blind-meaning은 카지노 예시만 유로(1 €/2 €) 현지화(§13 값은 $ 유지).
- **④ 기계검사**: 프랑스식 숫자 grep(영어식/독일식 잔류 0·공백천단위 확인) · `check-intl-links` **13개 언어 통과**(136편) · build ✅ · stale fr Rules6 최신.
- **⑤ 적대적 QA 2배치(Opus)**: §13 베스트5·팟 산수 전수 손계산 → **전부 EN 마스터와 카드 일치**(game-order 198 000·all-in side pot 1 300·showdown quinte flush Q-J-T-9-8·blind 2,7:1/27 %). 프랑스식 숫자·악상 전부 정확.
- **⑥ 교정 6건**(안전): texas 오역 "tu ligues"→"tu formes", game-order/blind/showdown desc≤160 축약, showdown elision "du all-in"→"de l'all-in" 2곳. 재빌드·링크체크 재통과.
- **★결과**: **13번째 로케일 fr 신규 개설 + Rules 필라 완결**. 18개 확장 진행: **13/18** (남은 5=ru·it·pl·th·fa). 다음=ru(러시아어, 키릴 문자).
- **다음(사용자 GSC)**: fr 6 URL 색인 — `/fr/blog/` + texas-holdem-rules-for-beginners·holdem-game-order·holdem-betting-actions·holdem-blind-meaning·holdem-all-in-rules·holdem-showdown-rules.

## 2026-07-13 (tr 터키어 Rules 필라 6편 번역·배포 — ★다국어 Rules 필라 12개 언어 완결)

### 🌐 tr(터키어) Rules 필라 6/6 번역 (파일럿11 = 마지막 언어)
> hi에 이어 **전 과정 Opus 수행**(번역 서브에이전트 6병렬 model:opus + 적대적 QA Opus 2배치). 파이프라인=`docs/translation-spec.md` §0.5. **이번부터 "번역=현지 맥락 재구성 포스팅" 마인드셋 명문화**(사용자 지시, spec "★★ 이 작업의 본질" + 메모리 [[translation-is-contextual-reposting]]).
- **① 브리프**: `docs/translation-terms-tr.md` 신규. 핵심 = **터키어 고유 족보명**(Royal Floş·Sıralı Floş·Kare·Full·Floş·Kent(straight)·Üçlü·İki Çift·Çift·Yüksek Kart) + 액션 영어/터키어 혼용, **숫자=유럽식**(천단위 `.`·소수점 `,` → §13 값 변환: 1,326→1.326·198,000→198.000·2.5→2,5·0.84%→0,84%), sen체, 특수문자 ı/İ/ş/ğ/ç/ö/ü.
- **② 번역 6편**: 신규5 + game-order 재번역(category 한국어"초보 가이드"→"rules").
- **③ 조립**: `index.ts` Rules 6/6 그룹핑(동시편집 레이스 → 메인 재작성).
- **④ 기계검사**: 숫자표기 grep(영어식 §13 잔류 0·CSS rgba 오탐 식별) → `check-intl-links` **초기 실패 3건 발견**(betting→holdem-strategy 2·blind→holdem-pot-odds 1, 비허용 슬러그가 허용링크와 같은 줄에 섞여 line-grep이 놓친 것 = 하드체크가 잡음) → 링크 마크업 제거·앵커 유지로 교정(corrupted "strateji filesinde"→"stratejisinde"도 수정). 재검사 통과(130편)·build ✅ 247p·sitemap 57 blog + 130 intl·stale Rules6 최신.
- **⑤ 적대적 QA 2배치(Opus)**: §13 베스트5·팟 산수 전수 손계산 → **전부 EN 마스터와 일치**(game-order A♠K♥ two pair vs 9♦9♣ üçlü→B승·pot 198.000, all-in side pot 4인 1.300, showdown Q-J-T-9-8 straight flush, blind 2,7:1/27%). 유럽식 숫자 변환·특수문자 철자 완벽.
- **⑥ 교정 6건**(안전개선): game-order "Head-up"→"Heads-up" 3곳 정규화, betting 깨진MT "ödürücü"→"ürkütücü"·문장 다듬기·readnext 비허용 holdem-strategy → holdem-game-order 카드로 교체. 재빌드·링크체크 재통과.
- **★결과**: **다국어 Rules 필라 = 12개 언어 완결** — en(마스터) + ja·es·pt·de·zh·ar·id·ms·vi·hi·**tr**. **Rules 필라 다국어 확장 트랙 종료.**
- **다음(사용자 GSC)**: tr 6 URL 색인 — `/tr/blog/` + texas-holdem-rules-for-beginners·holdem-game-order·holdem-betting-actions·holdem-blind-meaning·holdem-all-in-rules·holdem-showdown-rules.
- **백로그**: 전 언어 hand-rankings·tournament-vs-cash-game 재번역(stale·category 레거시·hand-rankings tr에 "head-up" 오타 잔존)·all-in 캡 근사·game-order 프리플랍 체크 절대표현(마스터 공통).

## 2026-07-13 (hi 힌디어 Rules 필라 6편 번역·배포 — 11개 언어 완결)

### 🌐 hi(힌디어) Rules 필라 6/6 번역 (파일럿10, 인도 페르소나)
> Fable5 한도 소진 → **전 과정 Opus로 수행**(번역 서브에이전트 6개 병렬 = model:opus, 적대적 QA 2배치 = Opus). 파이프라인=`docs/translation-spec.md` §0.5 그대로.
- **① 웹리서치 → 브리프**: `docs/translation-terms-hi.md` 신규. 핵심결정 = **데바나가리 산문 + 라틴 영어 포커용어 인라인**(기존 hi hand-rankings/game-order 하우스 스타일 유지), **숫자 서양식 그대로(변환 없음)** — 인도 콤마체계는 lakh(10만) 경계에서만 서양식과 달라 §13 값(1,326·169·2.5·35% 등 전부 10만 미만)은 동일 → en·zh·ar·ms 계열. 라틴 숫자(0-9)·`$` 보존(₹ 금지). 문체 आप체.
- **② 번역 6편**(Opus 병렬): 신규5 `texas-holdem-rules-for-beginners`·`holdem-betting-actions`·`holdem-blind-meaning`·`holdem-all-in-rules`·`holdem-showdown-rules` + **재번역1 `holdem-game-order`**(옛 마스터·category 한국어"초보 가이드" stale → EN 최신·`category:"rules"`로 교체). 전부 masterUpdated 기록.
- **③ 조립**: `lib/posts-hi/index.ts` Rules 6/6 그룹핑 + 기타(hand-rankings·tournament-vs-cash). (동시편집 레이스 → 메인이 깨끗이 재작성.)
- **④ 기계검사**: `check-intl-links` 하드페일 통과(125편·12언어), `npm run build` ✅ 247페이지·sitemap 57 blog + 125 intl, 숫자오염 grep 0(유럽식·데바나가리 숫자 없음, 영어식 1,326/169/1,300 보존), `check:stale` Rules 6편 최신(플래그된 hi 2건=hand-rankings·tournament-vs-cash=스코프 밖 기존 stale).
- **⑤ 적대적 QA 2배치(Opus)**: §13 베스트5·팟 산수 전수 손계산 → **전부 EN 마스터와 카드 한 장도 안 틀림**(game-order A♠K♥ two pair vs 9♦9♣ trips→B승·pot 198k, all-in side pot 4인 1,300, showdown Q-J-T-9-8 straight flush, blind 2.7:1/27%). 🔴 치명결함 0.
- **⑥ 교정 5건**(전부 안전개선): game-order readTime "16 मिनट"→"16 min"(Rules 6 통일)·어색MT "घर का पेशेवर dealer"→"टेबल पर कोई तय dealer", betting-actions showdown 내부링크 강화(허용 슬러그), blind-meaning "poker positions explained" 라틴산문 2곳 다듬기. 재빌드·링크체크 재통과.
- **결과**: **Rules 필라 = 11개 언어 완결**(en 마스터 + ja·es·pt·de·zh·ar·id·ms·vi·**hi**). 남은 = **tr(터키어) 1개**.
- **다음(사용자 GSC)**: hi 6 URL 색인 — `/hi/blog/texas-holdem-rules-for-beginners`·`-holdem-game-order`·`-holdem-betting-actions`·`-holdem-blind-meaning`·`-holdem-all-in-rules`·`-holdem-showdown-rules`.
- **백로그**: hi hand-rankings·tournament-vs-cash-game 재번역(stale·category 한국어 레거시) / all-in 캡 근사·game-order 프리플랍 체크 절대표현(마스터 공통).

## 2026-07-12 (KO 이미지 전수교체 — 코드렌더 인포그래픽 85개 §13 교체·배포)

### 🖼️ KO 이미지 §13 결함 코드렌더 전수교체 (85개)
> EN 교체(어제) 후속. `defects.md`의 KO 결함(EN 스프린트 23개 제외)을 전부 §13-안전 HTML 코드렌더로 재생성. 자동 모드(Fable5 저작 10에이전트 병렬 + 메인 렌더/육안검수/배치). 파이프라인 = `scripts/gen-<타깃>.html`(자립형 1200×675, 카드=코너랭크+단일글리프 CSS) → `render-gen-batch.mjs`(인자 필터 추가) → `_prev-*.webp` → Read 육안검수 → `public/images/`.
- **공유 스펙 확립**: `scripts/_GEN_SPEC.md`(팔레트·카드CSS·크림노트·§13 체크리스트) — 10개 서브에이전트가 동일 규격으로 저작.
- **교체 85개**(전부 §13 육안검수 통과 = 카드 유효·중복 무늬랭크 0·한글 철자·잘림 0·<60KB·1200×675):
  - flush-vs-straight 5(intro·c3·c4·c7·c8, CS노트오염 폐기) · ak-offsuit 4(확률 AKvsAA 7%·EP2.5표) · pot-odds 8(콜÷(팟+콜) 전예시 산수검산) · beginner-mistakes 12(오타 MISTIAKE/10Doker·한자·좌석중복 교정) · 3bet+check-raise 8("No entry!"·[cite]·## 폐기) · pocket-aces 4+kk 2+icm 2(중복블록·한자·cEV 교정) · overbet 5+small-blind 2+value-bet 1("blluffs"→bluffs) · pub 6(No entry!·이모지 폐기, 법적기준 정확) · rules/카드 12(쇼다운 AA>KK·스터드·아웃츠·티어·rule-of-4·족보2위·레인지13×13·6/9맥스 좌석) · blog-misc(faq·tiebreak-hero 8♠→8♥교정·premium핸드·flush-draw35%) · wsop 3(2025히어로·2026새틀·플라이트) · **404 8개 신규생성**(bluffing-* 4·holdem-position-* 4 = posts.ts 본문 인포그래픽 부재분).
- **빌드 ✅** Compiled successfully, 199 static pages, sitemap 57 blog + 77 intl, 에러 0. 404 8개 해소.
- **⚠️ 남은 실사 15개**(코드렌더 불가 = 여행/펠트/photoreal) → `docs/image-audit/photo-prompts-nano-banana.md`에 §13·워터마크 반영 영어 프롬프트 목록화. 사용자 Nano Banana로 생성 필요: apt-jeju 8·pub-legal-card-table/casino-floor·beginner-mistakes-korea-pub·bubble-faq/summary/table·wsop-2026-tournament-hero·3bet-sizing.
- **재생성 소스**: `scripts/gen-*.html` 커밋(18언어 현지화 재렌더 가능) + `scripts/_GEN_SPEC.md`.

## 2026-07-12 (EN 이미지 전수감사 + 결함 23개 코드렌더 교체·배포)

### 🖼️ 이미지 전수 §13 감사 (전 사이트) + EN 결함 교체
> 사용자 지시: 이미지가 18개 언어 공용이라 품질 중요. Fable5로 전수검사→결함+커서 프롬프트→오늘 EN만 교체(KO는 내일).
- **전수 감사(Fable5 18배치)**: 참조 이미지 **310개**(실존302+깨진404 8개) 전량 개봉 검사 → **결함 ~117개(~37%)**. 결과=`docs/image-audit/defects.md`(파일별 문제+영어 재생성 프롬프트). 커밋 `bc1f98e`.
  - 결함 유형: 앞면 카드(불가능핏·중복·코너오류)·한글 텍스트 인포그래픽(깨진한글·CS노트유입·"No entry!"·"[cite]"·중복블록·오타)·블랙잭 오표기·여행 간판 깨짐·잘림/흰여백.
  - 깨끗: 진짜 사진/스크린샷·뒷면카드 실사·HTML렌더 인포그래픽.
- **EN 교차대조**: 결함 117개 중 **24개가 EN 글 사용**(~28 EN글). 공유 이미지 소수가 대부분 유발(button-dealer-board 7글·outs-hero 6글·rules-texas-holdem 5글·tournament-table-action 5글·pub-players-table 4글).
- **코드렌더 교체 23개**(HTML→Playwright→webp, Fable5 저작 5세트 + 메인 렌더/육안검수): 카드=코너랭크+단일수트글리프 방식이라 **핏카운트 오류 원천 불가**. 전부 §13 육안검수 통과(카드유효·수학정확·철자·잘림0)·<60KB·1200×675. 커밋 `a7d58ce`.
  - 목록: showdown-rules-hero·cards-speak·who-shows-first·blog-holdem-showdown·hand-rankings-board-read·outs-hero·outs-dirty-outs·equity-multiway·card-counting-blocker·card-counting-hero·cooler-vs-badbeat·button-dealer-board·bubble-pressure·probability-royal-flush·tournament-table-action·rules-texas-holdem·blog-holdem-card-stages·rules-step2-preflop·rules-step3-flop·ept-barcelona-powerpath·probability-pot-odds·pub-players-table·tiebreak-best5(캡션 §13 교정).
- **alt/SEO 30개 정정**(§13-정확, 낡은 주장 교정: €10,300→€5,300, board-read "flush draw" 제거, cooler 알트 등).
- **재생성 소스**: `scripts/gen-*.html`+`render-gen-batch.mjs`(18언어 현지화 재렌더 가능).
- **⚠️ 미해결 1**: `apt-incheon-2026-guide-hero`(여행 실사, 오이벤트 브랜딩+경복궁뷰) — 코드렌더 불가, **실사/AI포토 필요**. 4글에서 사용(1글 히어로+3글 썸네일).
- **▶ 다음(내일)**: KO 이미지 전수교체(defects.md에 KO 결함 대다수 = 텍스트 인포그래픽·flush-vs-straight-c*·beginner-mistakes·pub-*-infographic·pot-odds 계열·깨진404 8개). 코드렌더 파이프라인 그대로 적용.

## 2026-07-11 (retrofit 2차 웨이브 — 규칙·족보 감글 6편 리라이트·배포 + 이미지 §13 대교체)

### 📚 감글 retrofit 2차 웨이브 6편 (커밋 `2cfd8da`·`ba737c0`, 배포됨)
> 완전자동. batch1(규칙 2편) + batch2(족보/쇼다운 4편). 각: 진단+리라이트(Fable5)→§13 팩트체크(별도)→교정(메인)→독립QA→이미지수정→배포.
- **batch1** — `holdem-blind-meaning`(정의형 뱅크: what is a blind 880/big blind 720/small blind, 전부 LDA8; 스틸전략→position-play 위임) + `holdem-betting-actions`(5액션+min-raise; 프리플랍 리레이즈 "증분룰" §13오류 교정). 둘 다 §13 FACTS-CLEAN. 이미지: betting-actions hero 배경 "7♦"=6핏(불가능)+1200×800 → "5 Betting Actions" 인포그래픽, 본문 min-raise 깨진이미지 → min-raise 룰 인포그래픽($6+$6=$12·$6+$4=$10).
- **batch2** — `holdem-flush-vs-straight`(flush/straight 매치업) + `holdem-tiebreak-rules`(킥커/타이) + `holdem-split-pot-rules`(can you tie LDA25) + `holdem-reading-the-board`(보드읽기/베스트5). 4편 카니발 분리(첫링크=필라, 전체랭킹 위임, 풀메시 상호링크, 태그 disjoint). **§13 40+ 핸드예시 전수 brute-force 검증** 전부 통과/교정(reading에 쿼드세븐 7♠7♣ 누락 교정).
- **★이미지 §13 대교체(핵심 발견)**: 제3 독립QA가 16개 이미지 개봉→레거시 AI실사에 **§13 카드결함 만연** 적발. 교체(HTML→Playwright 인포그래픽, 카드유효·중복없음·철자·잘림 육안검수):
  - flush-vs-straight hero: **9♠ 양핸드 중복**(한덱 불가능) → 스트레이트 9♣로 재생성 + alt/본문표 정합
  - tiebreak best5(5번째=Q오류)·split(홀카드 4장·6장) → 카드 인포그래픽 2종
  - split-pot hero: 우측 홀카드 **3장**(불가능, 다수글 썸네일 재사용) → board-plays 인포그래픽; 재사용 showdown 이미지 제거
  - reading hero: **"BEST 5"가 보드 지목**(글 핵심 반대, 실제 베스트5=홀카드 플레이) → 홀카드플레이 인포그래픽; 1200×800→675
  - reading flush-draw: **"3 spades" 오카운트**(실제 4) → "4 of 5" 인포그래픽
  - betting-actions hero 재생성(위)
- **빌드 ✅ 57 blog + 77 intl**. 신규 이미지 ~10개 전부 §13-정확·<60KB·1200×675.
- **다음(사용자 GSC 색인)**: `/en/blog/holdem-blind-meaning`·`-betting-actions`·`-flush-vs-straight`·`-tiebreak-rules`·`-split-pot-rules`·`-reading-the-board`.
- **⚠️⚠️ 사이트 전수 후속(중요)**: 레거시 AI생성 실사에 **불가능 카드·깨진 클록글자·오카운트가 광범위**하게 존재(rules-texas-holdem, tournament-table-action, icm-chips-not-money-real, holdem-bubble-table 등, 다수 글의 히어로/썸네일). **전체 이미지 §13 감사 + 인포그래픽/실사 교체 스프린트 별도 필요.**

## 2026-07-11 (retrofit 스프린트 #3 — 토너먼트 2편 리라이트·배포 + 이미지 §13 대청소)

### 🏆 감글 retrofit 3번타자 — `holdem-tournament`(A 허브) × `holdem-tournament-vs-cash-game`(B) (배포됨)
> 완전 자동 파이프라인. 매핑→초안A(Fable5)+초안B 병렬→§13팩트체크 A·B 병렬(별도)→교정(메인)→제3 독립QA→이미지 교정→빌드→배포.
- **카니발 계약**: A=토너먼트 구조/종류(freezeout·PKO·satellite·deepstack 정의 흡수)/진행/입장/Day-1, B=vs캐시 비교+캐시게임 기초(cash rules LDA3 선점). 첫링크 A=B비교·B=A허브. ICM/bubble/short-stack/이벤트가이드/rake는 route-out. B category 버그 "토너먼트"→"tournament" 교정. `:::pillarhub` 없음→readnext+Related로 로드맵.
- **메타**: A seoTitle 52/desc148, B 55/153. 둘 다 기존 60~63자·B 205자 위반 교정.
- **§13 A(별도 Fable5, 웹검증 포함)**: 🔴**날조된 "실제 WPT 2025" 예시**(존재하지 않는 대회를 "Real example"로 게시=E-E-A-T 킬러) → 웹검증한 실존 2024 WPT Seminole RRPO($4,592,000·1,435엔트리·181지급·1위 $662,200)로 교체. 🔴ITM FAQ 오프바이원(176→175 탈락). 🔴PokerStars앱=WPT 오브랜드→EPT/APPT. +ante 빅블라인드앤티 설명 보강·Main Event 기간·rake 헤지·페이아웃% 정합. 블라인드표 BB환산·satellite·rake%는 CORRECT.
- **§13 B(별도 Fable5)**: **FACTS-CLEAN**(payout $1,000·뱅크롤·ICM 오목성 논증 전부 정확). 폴리시 1건만.
- **제3 독립 QA**: 텍스트·카니발·메타 CLEAN. **but 이미지 대량 §13 결함 적발**(기존 AI생성 실사): A hero 80KB·1200×800(CLS)→sharp 1200×675·59KB 리사이즈(내용 정상)+alt 정정("final table"→대형 필드)+낡은 카드문구. B의 실사 3개=🔴**불가능 카드(K♣ 5핏)+깨진 클록글자**, 🔴뭉개진 A/K 카드, 🔴블랙잭 테이블을 버블로 오표기 → **§13-안전 온브랜드 인포그래픽 3종으로 B-전용 교체**(HTML→Playwright, cash-vs-tournament 비교·칩≠현금·ICM비선형, 각 18~22KB, 카드/클록 없음, 육안검수 통과). B 중복 인라인 hero 제거 + E-E-A-T 경험담 추가.
- **빌드 ✅ 57 blog + 77 intl**. 신규 이미지 4개(A리사이즈+B 3종) 전부 <60KB·1200×675.
- **다음(사용자)**: GSC 색인 `/en/blog/holdem-tournament`·`/en/blog/holdem-tournament-vs-cash-game`.
- **⚠️ 사이트 전반 후속(별도)**: 기존 defective 실사가 **다른 글에도 잔존** — `tournament-table-action.webp`(betting-actions 본문), `icm-chips-not-money-real.webp`(icm 글), `holdem-bubble-table.webp`(블랙잭) 등 AI생성 깨진 카드/글자 이미지 일괄 감사·교체 필요.

## 2026-07-11 (retrofit 스프린트 #2 — 포지션 2편 카니발 분리 리라이트·배포)

### 🪑 감글 retrofit 2번타자 — `holdem-positions`(A) × `holdem-position-play`(B) (커밋 `2ec5bb8`, 배포됨)
> 완전 자동 파이프라인(사용자 자리비움·게이트 없음). 두 감글을 인텐트로 완전 분리해 카니발 청산. 매핑→초안(Fable5)→§13팩트체크(별도 Fable5)→교정(메인)→제3 독립QA→빌드→배포.
- **카니발 계약(A/B 분배)**: A=좌석·이름·좌석표(seat numbers LDA1·hijack/lojack 유래·인원수별 2~10명 이름맵), 첫링크=Rules 허브 / B=in/out of position 전략(레인지 원본·수익성·why-best·limp-or-raise UTG LDA4·how to play OOP), 첫링크=holdem-strategy. 헤드 3600이 양쪽(positions vs in-position)에 인텐트 달라 안 싸움. 중복 FAQ/표 청산, A↔B 상호링크 의도 분리.
- **메타 교정**: 둘 다 seoTitle 71~72자·B desc 255자 위반 → A 58/155/40, B 59/157/40. A category 한글"초보 가이드"로.
- **§13(별도 Fable5 열거법)**: 양쪽 핸드예시·헤즈업(버튼=SB, 첫preflop/막postflop)·좌석순서(SB→BB→…→BTN)·레인지% 통일(UTG13/LJ17/HJ20/CO27/BTN43)·수익성(SB=구조적 최악play/BB=최대raw손실) 전수검증. 교정: B "3~8%/seat"↔자기표 모순(+7/+16), hijack "3rd in 6-max"→2nd, OOP "against everyone" 절대화 완화, **B 도입부 불가능 일화 재작성**(UTG레이즈 뒤 버튼림프=불가), A "UTG 3 seats left of button" 등.
- **제3 독립 QA**: 텍스트·메타·링크·카니발 계약 CLEAN. **but B 이미지 3개 §13 결함 적발** → HTML→Playwright→webp로 교정 재생성: hero(CO↔BTN 좌석 뒤바뀜→온브랜드 좌석맵 다이어그램, CO가 BTN 우측, 19KB)·opening-range(숫자 45→43 모순+잘림→정확수치 20KB)·ip-vs-oop(헤더 잘림→25KB). 재생성 소스 `scripts/pos-*.html`+`render-pos-infographics.mjs`.
- **빌드 ✅ 57 blog + 77 intl**. 3개 신규 이미지 전부 <60KB·1200×675·육안검수(좌석순서·숫자·철자·잘림) 통과.
- **다음(사용자)**: GSC 색인 `/en/blog/holdem-positions`·`/en/blog/holdem-position-play`.
- **🟡 잔여(비블로커)**: A 본문이미지 `holdem-button-position-hero.webp` 재사용(클러스터-고유 규칙 위반, §13은 정상) — 나중에 A 전용 이미지로 교체 권장.

## 2026-07-11 (retrofit 스프린트 #1 — EN `holdem-starting-hands-chart` 뱅크 기반 리라이트·배포)

### 🔤 감글 retrofit 1번타자 발행 (커밋 `019de04`, 배포됨)
> 심야 세션이 준비한 감글 retrofit 스프린트 실행. 워크플로우 = 각도(Fable5 매핑)→게이트→초안(Fable5)→§13 팩트체크(Fable5 별도 에이전트)→독립 QA(제3 Fable5 에이전트)→빌드·PDF·배포(메인). **모든 생성·검수 작업 Fable5, 메인은 게이트·빌드·커밋만**(사용자 지시).
- **[각도]** Fable5 매핑: 현재 감글이 헤드 3인방(`good/best starting hands` 2400×2·LDA24, `poker starting hands chart` 1300·LDA21)을 메타·H2에 못 담고 seoTitle 71자로 잘림 진단. `en-starting-hands.md` 뱅크로 재설계.
- **[초안]** Fable5 전면 개편: seoTitle `Fold 80% of Your Hands? — Best Poker Starting Hands Chart`(57자). H2 10개 = ①10 best ranked ②what counts as *good* ③9-max chart(rangechart 상향) ④**6-max**(신규) ⑤what % ⑥**GTO vs 초보차트**(⭐`gto preflop` 70·LDA4 무주공산) ⑦worst ⑧**printable PDF** ⑨quiz ⑩FAQ8. 첫링크 `holdem-strategy` 유지. 카니발 제외: nicknames→glossary·확률→probability.
- **[§13 팩트체크]** 별도 Fable5 에이전트 열거법(C(48,5) 전수·MC 2M): AA 85.2%·AKo/AKs vs QQ 42.8/46.2%·플러시 6.4%/0.84%/35%·셋 11.8%·169/1326·포지션 12/17/26/42%·7-2 rule **전부 CORRECT**. 결함 6곳 교정 — 🔴AJs 표(AQs+)↔UTG본문 모순 정합(AJs+), types↔dealt-hands 혼동, TT 티어 라벨, UTG ~12% 근거 문구, 6-max 블라인드 문구.
- **[독립 QA]** 초안·팩트체크와 무관한 **제3 Fable5 에이전트** 전면검수(메타·구조·내부링크 실존/트슬래시·렌더 디렉티브·카니발·이미지alt·§13 스팟) → **DEPLOY-READY(🔴 0)**. 🟡 폴리시 2건 반영(E-E-A-T 도입부 1인칭화, limping 링크 `holdem-betting-actions`→전용 `holdem-limping`). 이미지 재압축은 KiB 통과라 보류.
- **[PDF 에셋]** 인쇄용 차트 신설 `/downloads/poker-starting-hands-chart.pdf` — Fable5가 온브랜드 HTML 저작(크림/포레스트그린/골드, 검증 데이터 그대로) → Playwright A4 렌더(1페이지·140KB), 프리뷰 육안검수 통과. 재생성 소스 `scripts/starting-hands-chart-print.html`+`render-starting-hands-pdf.mjs` 커밋. (선례: `/downloads` 규칙 PDF 4개 기존재라 webp정책 예외 아님)
- **빌드 ✅ 57 blog + 77 intl**. 메타 39/57/153. 참조 이미지 7개 기존 재활용(새 이미지 불필요).
- **다음(사용자)**: GSC 색인 `/en/blog/holdem-starting-hands-chart`.
- **▶▶ 다음 세션**: retrofit 2번타자 `holdem-positions` + `holdem-position-play`(뱅크 `en-position.md`, ⭐카니발 방지 키워드 A/B 분배가 핵심). 매핑 에이전트 각도 대기 중.

## 2026-07-11 (심야 세션 — EN 키워드뱅크 재구축 + 감사, 포스트 변경 0)

### 🔬 EN 감사 + lowfruits 키워드뱅크 재구축 (다음=감글 retrofit 스프린트 준비)
> **배경**: EN을 18개 언어(12→18) 전부 1티어 현지어 번역할 계획 → EN이 마스터라 키워드·사실 완벽 필요. 번역 전 EN 전면검수(Master Lock)의 첫 단계로, "감으로 쓴 글" 색출 + 근거 키워드 재수확.
- **EN 감사(서브에이전트)**: 42개 EN 글 분류 → **17 by-feel**(2026-07-03 키워드뱅크 이전) / 19 데이터기반 / 6 SERP대체. 이벤트가이드 4편=감이나 retrofit 대상 아님(고아링크만). hand-rankings는 07-03 Phase0 FAQ로 데이터기반 전환됨.
- **핵심 발견**: 과거 뱅크는 **트레일링(`X *`) 시드만** → **blind spot**. 실증: starting-hands 트레일링(238)이 `good starting hands` 2400 누락, tournament 트레일링이 PKO/freezeout/satellite 클러스터 누락, position 트레일링(94)이 `in position poker` 3600 누락. → **위치 변형(트레일링+중간) 필수** 규칙 확립.
- **키워드뱅크 박제(위치변형 재수확)**:
  - 🆕 `docs/keyword-bank/en-starting-hands.md` (`poker starting hands *` 238 + `starting hands * poker` 57) → holdem-starting-hands-chart
  - 🆕 `docs/keyword-bank/en-position.md` (`poker position *` 94 + `position * poker` 348 + `poker positions *` 110) → holdem-positions·position-play
  - 🔄 `docs/keyword-bank/en-tournament.md` 보강 (`* poker tournament` 242 + `tournament * poker` 22) → PKO·freezeout·satellite·vs-cash 클러스터 추가
  - 🆕 `docs/keyword-bank/en-cash-game.md` (`poker cash game *` 177 + `cash game poker *` 115 + `cash game * poker` 205) → tournament-vs-cash-game + Cash Game 7필라 후보
- **판정 기준**: LDA(top10 최저DA) ≤20 매우승산·20~35 좋음. 노이즈(지역·업소·칩상품·타언어)는 뱅크에 제외 명시(불어 등은 해당언어 번역 때 재활용 메모).
- **메모리**: `keyword-harvest-wildcard-positions`(수확규칙) · `multilang-expansion-12-to-18`(확장전략) · `content-workflow-pillar-sprint`(모델 Fable5 갱신) 신규/갱신.
- **⚠️ 미커밋**: `docs/keyword-bank/` 4파일 dirty. 다음 세션 스프린트 결과와 함께 커밋 판단.
- **다음**: 감글 retrofit 스프린트 — ①starting-hands-chart ②positions/position-play ③tournament 허브/vs-cash. (상세: session-handoff 최상단)

## 2026-07-11 (오늘 — 펍 정보 필라 1편 발행)

### 🟢 펍 허브 완성 — 정보 필라 `holdem-pub-guide` 신설 + /pub 상호링크 + 선별 매장 틀 (보강 1순위)
> session-handoff "내일 할일" 1순위 실행. 거래형 지역 허브(`/pub`, 색인됨)만 있고 blog 정보 필라가 없어 반쪽이던 펍 영역을 관문 글로 메움. 예약 필라 슬러그 `holdem-pub-guide`(11필라 중 홀덤펍, 그동안 미발행) KO 신설. **7허브→펍 포함 완성 단계.**
- **[A] SERP 리서치(Fable5)**: "홀덤펍" SERP=디렉토리형(홀덤민족·웰컴홀덤)+법률겁주기+단편 후기로 양극화, **방문자 여정 전체를 잇는 허브형 글 부재**=정확한 침투점. 차별화 3갭=①여정형 관문(뭐하는곳→비용→합법→지역찾기) ②방문자 관점 최신 법 프레임 ③좋은 펍 고르는 기준(E-E-A-T). PAA 8개(뭐하는곳·비용·혼자·불법·홀덤바차이·1등상금·미성년자·알바).
- **[C] 초안**: 30초 정의 → `:::pillarhub`(첫방문·합법·**/pub**·홍보신청 4스텝) → 핵심3(비용/합법/매너 :::card) → 합법 vs 불법 표+2024 유사행위 확장 → 지역찾기(/pub :::steps) → 좋은 펍 고르는 기준(경험담) → PAA FAQ 9개. 첫 내부링크=`/pub`.
- **[D] 적대적 팩트체크(Fable5) — 교정 후 PASS**: 🔴필수 4건 반영 — ①매장 수 라벨 거꾸로(등록기준↔실태조사) 정정 ②**"이용권 보상=합법" 자기모순**(2024.5.10 지침=포인트 입장료 재사용 금지) → 음료·상징적 보상으로 ③"돈 딸 수 있나" 불법전제 제거(합법펍=현금 못 땀) ④판돈 레이크(캐시게임 용어)→바이인 엔트리피. 🟡 처벌 분리(관광진흥법 7년/7천만 + 형법 도박공간개설죄 5년/3천만), 법규 정정(게임산업법→형법·관광진흥법), 요약부 합법기준 통일, 레이크 % 잔재 제거.
- **[②상호링크]**: `/pub` 인덱스+지역 페이지 → 펍 필라 역링크. 펍 필라 첫 내부링크=`/pub`. 클러스터 3편(첫방문·합법·홍보) → 필라 역링크.
- **[③선별 매장 틀]**: `lib/pubs.ts`에 `FeaturedPub` 타입+`featuredPubs?` 필드 추가. 지역 페이지가 데이터 있으면 선별 카드(대표 1곳 강조·바이인·시간·태그·지도링크)+사장님 무료소개 CTA 렌더, 비면 "업데이트 예정" 플레이스홀더 폴백("지역당 한 곳 선별·집중" 원칙 반영). 데이터는 아직 없음(접수되면 채움).
- **[라이브 2편 교정]**(사용자 승인): `holdem-pub-legal`·`holdem-pub-first-visit-guide`의 "우승 상품=매장이용권=합법" 프레임을 음료·상징적 보상으로 통일(2024 지침 위법소지 해소), updated 갱신.
- **빌드 ✅ "57 blog posts"**(56→57). 렌더 검증(pillarhub·stripe·card·steps) 통과. Playwright 디자인 검수(필라 데스크톱/모바일·/pub 인덱스 CTA·선별카드·플레이스홀더) 온브랜드 확인.
- **[E] 히어로 이미지 완비**: `holdem-pub-guide-hero.webp`(커서 실사, 1200×675·25KB) — 문턱서 망설이는 첫방문자+안쪽 게임홀, 카드 노출 0(§13), 우하단 골드 "HoldemMaster" 워터마크 철자 검수 통과. **전부 배포됨.**
- **다음(사용자)**: GSC 색인 `/blog/holdem-pub-guide` + 재크롤 `/blog/holdem-pub-legal`·`/blog/holdem-pub-first-visit-guide`·`/pub`.
- **📌 후속 과제**: `holdem-pub-legal`은 법적 근거를 게임산업법 제28조 중심으로 서술 → 실제 2024 프레임(형법 도박+관광진흥법 카지노 유사행위)로 전면 재정비 필요(별도 세션·팩트체크). 청소년 유해업소 지정도 반영 권장.

## 2026-07-10 (저녁 세션 — 필라 보강 4편 + 펍 B2B 자산)

> ⚠️ 이 4편은 **커밋 타임스탬프상 2026-07-10 저녁**(18:17~19:06) 작업인데, 당시 세션이 스스로를 "2026-07-11"로 잘못 라벨링하고 각 글 `date` 필드도 07-11로 기재함. 실제 발행일은 07-10. (다음 세션에서 4편 `date`를 07-10으로 정정할지 판단 필요.)

### 📣 신규 KO 발행 `holdem-pub-promotion` — 홀덤펍 사장 대상 "무료 소개 신청" B2B 자산 (펍 콘텐츠 보강)
> 사용자 아이디어: 펍 콘텐츠가 약점인데 국내 홀덤펍 多. 운영자(사장)+향후 총판/영업 대상 포스팅으로 "홍보하려는 펍 알려달라". Fable5 경쟁사·법률 리서치 → 기획 → 초안 → 컴플라이언스 검수까지 자율 진행(사용자 부재).
- **[A] 리서치(Fable5 2건)**: ①경쟁사=홀덤펍몬·포커스팟(합법선언 유일)·러너러너·와홀덤·홀덤민족·홀덤코리아(개방게시판=스팸위험) 등 디렉토리 다수, but "검증·무료 에디토리얼 소개"는 공백. ②키워드="홀덤펍 홍보/마케팅/손님늘리기/입점/제휴"=**무주공산**. **"총판"=불법 온라인홀덤 모집으로 오염 → 키워드 금지, 배제선언으로만**. 텔레그램 @핸들 단독=불법 관상 → 이메일/폼 주채널.
- **[C] 초안**: 손님늘리기(검색노출)→왜 홀덤마스터→신청3단계→준비물표→비용(무료)→소개대상/배제→성인·법적고지→FAQ7. 카테고리=커뮤니티. 히어로=holdem-raise-how-much-pub.webp 재사용(추후 커스텀 권장).
- **[D] Fable5 컴플라이언스/법률 검수**: **필수 6건 반영** — ①"합법 인증" 프레임 해체("합법 요건 확인" + 게재=인증·보증 아님 면책 명문화) ②FAQ "문제없음" 단정 삭제 ③공정위 지침 정확명칭 ④개인Gmail 완화(제목[매장소개]+폼전환 권고) ⑤"방문자 대부분" 비율단정 삭제 ⑥pub-guide 링크 금지·트슬래시0. +권장: 처벌수위(7년/7천만)·신고포상금(사감위 5천만)·여가부고시번호·후원상금/시드권 위반·총판"차단·신고" 명시.
- **[클러스터] 역링크**: pub-legal·pub-first-visit-guide 관련표 → 소개글(사장님용 라벨).
- **빌드 ✅ "56 blog posts"**(55→56). **배포됨.**
- **⚠️ 사용자 확인 필요(내일)**: ①연락 채널=개인Gmail 직노출 대신 **구글 폼 or contact@holdemmaster.com** 전환 강력 권고(총판 스팸 표적). 텔레그램 핸들 있으면 보조로 기입. ②히어로 커스텀 이미지(현재 재사용). ③GSC 색인 `/blog/holdem-pub-promotion`. ④향후 실제 소개된 펍 쌓이면 **펍 허브** 승격.

### 🟡 신규 KO 발행 `holdem-implied-odds` — 확률 필라 클러스터 보강 (보강 2순위)
> 확률 필라(현 3편: 아웃츠·팟오즈·확률계산)의 명확한 공백 = 임플라이드 오즈. EN엔 이미 있음(hreflang). SERP상 KO 텍스트에 임플라이드 오즈 단독 심층글·리버스 임플라이드 사실상 부재 = 토픽오소리티 기회.
- **[A] SERP 리서치**(서브에이전트): 경쟁글은 정의 나열 or $단위 교과서식. 차별화 3갭=①BB 단위 실전 계산+필요 임플라이드 공식 ②리버스 임플라이드(텍스트 SERP 공백) ③홀덤펍·딥스택 관점.
- **[C] 초안**: 정의(팟오즈 vs 임플라이드 :::compare) + BB 단위 워크드예시(팟6+벳4=10, 콜4→팟오즈 28.6%, 플드 19%<28.6%, 공식 (콜÷에퀴티)−(팟+콜)=7BB) + 셋마이닝(셋 11.8%/7.5:1, 콜의 10~15배 스택 표) + 리버스 임플라이드 §13예시(8♥6♥ Q하이플러시 vs A하이) + 펍/딥스택 SPR 조정 + 오해5 + FAQ8. 첫링크=확률 필라.
- **[D] 적대적 팩트체크(Fable5)**: 팟오즈·에퀴티·IO공식 유도·산수·셋 11.8%/7.5:1·셋마이닝 표 **전부 CORRECT**. **치명 §13 1건 교정** — 리버스 IO 플러시 예시 "A♥ 한 장만 들면 이긴다"→플랍 하트 3장뿐이라 한 장은 드로우, "하트 두 장(A♥5♥)이면 이미 짐"으로 정정 + 낮은스트레이트 "10하이 스트레이트로 짐" 명시.
- **[클러스터] 역링크**: 확률 필라 pillarhub에 추가(3→4) + "임플라이드 혼동" 섹션 인라인·updated 갱신 / 팟오즈 글 FAQ 인라인.
- **빌드 ✅ "55 blog posts"**(54→55). 확률 허브 3→4편.
- **⏳ 남은 것(이미지 [E])**: 히어로 `holdem-implied-odds-hero.webp` + 본문 `holdem-implied-odds-deepstack.webp` 2개 생성 대기 → 커밋·푸시·GSC 색인 `/blog/holdem-implied-odds`. **아직 미배포**(이미지 대기).

### 🟡 신규 KO 발행 `holdem-blind-steal` — 포지션 필라 클러스터 보강 (보강 2순위·GSC 기회키워드)
> session-handoff 보강 우선순위 2번(얇은 허브 채우기) 실행. 포지션 필라(현 2편)에 **블라인드 스틸** 신규. GSC 기회키워드("블라인드 스틸" pos 7.4·노출 73·클릭 0)라 실수요 검증됨 + 포지션과 별개 개념(카니발 없음).
- **[A] SERP 리서치**(서브에이전트): "블라인드 스틸" 전문 KO 글 사실상 부재(용어사전 한 줄 정의 or 포지션글 곁가지) = **토픽오소리티 기회**. 차별화 3갭=①포지션별 스틸 레인지 %표 ②당했을 때 디펜스·리스틸(수비, 경쟁글 빈칸) ③홀덤펍 실전(스틸 안 먹히는 현실) 경험담.
- **[C] 초안**: 정의(데드머니) + 스틸 3포지션(:::compare) + 포지션별 레인지·사이즈표(BTN 40~50%·CO 25~30%·SB 40~50%·HJ ~20%) + 온라인 vs 펍 사이즈 + BB 디펜스 팟오즈(27%)·리스틸 + 펍 현실 + 오해 5가지 + FAQ 8개. 첫링크=포지션 필라.
- **[D] 적대적 팩트체크(Fable5)**: 디펜스 팟오즈 산수(1.5/5.5=27.3%·팟 4bb) **CORRECT**. **교정 7건 반영** — [필수]①27%에 에퀴티 실현(OOP 페널티) 단서 추가(기계적 콜 방지) ②"SB 폴드" 전제 명문화 ③리스틸 밸류 QQ+·AK 고정→상대 스틸폭 비례 확장(99+·AJs+·AQo+); [권장]④SB 30~45%→40~50%+"BTN 최고=포지션 확보" 논리 ⑤SB 림프금지 절대화→캐시·초보 레이즈온리 한정 ⑥앤티 근거 수치화(1.5→2.5bb) ⑦폴드에퀴티 "사라진다"→"크게 줄어".
- **[클러스터] 역링크**: 포지션 필라 pillarhub에 추가 + 스틸EV 섹션 인라인링크+updated 갱신 / 버튼·SB 글 역링크. 
- **[E] 이미지 2개 완료·배포**: 히어로 `holdem-blind-steal-hero.webp`(32.4KB) + 본문 `holdem-blind-steal-action.webp`(35.0KB), 커서 실사 생성 → **HoldemMaster 워터마크 sharp 합성**(커서가 워드마크 누락 → 우하단 골드 저불투명 합성·철자검수)·카드 전부 뒷면(§13 안전).
- **빌드 ✅ "54 blog posts"**(53→54). 포지션 허브 2→3편. **전부 배포됨(커밋 94ac69e).** **다음(사용자)**: GSC 색인 `/blog/holdem-blind-steal`.

### 🔴 신규 KO 허브 발행 `holdem-strategy` — 비어있던 '전략' 필라 신설 + 고아 8편 클러스터링 (보강 1순위)
> session-handoff 보강 우선순위 1번 실행. "베팅·공격 전략 허브 부재(고아 7편)"를 메우는 전략 필라 신설. 슬러그=예약 필라 `holdem-strategy`(KO는 비어있었음, EN만 존재 → hreflang 정합). 뱅크롤 포함해 8편 클러스터.
- **[A] SERP 리서치**(키워드뱅크 KO시드 없어 서브에이전트 라이브 SERP로 대체): "홀덤 전략" SERP는 초보 온보딩글(나무위키·포커고수·한게임) ↔ 파편화 심화글(C벳·3벳·GTO)로 **양극화, 초→고수 로드맵형 pillar 허브가 사실상 부재** = 정확한 침투점. 차별화 3갭=①`:::pillarhub` 로드맵+내부링크 ②"언제/무엇을" 결정 트리거(경쟁글은 정의만) ③뱅크롤·틸트를 전략 마지막 단계로 통합.
- **[C] 초안**: 5단계 전략 위계(프리플랍→포지션→베팅→확률→자금) + `:::pillarhub` 로드맵(8편: 레인지·3벳·C벳·체크레이즈·밸류벳·블러핑·오버벳·뱅크롤) + 상황별 액션 결정표 + §13 검산 핸드예시(BTN A♠K♠ / K♥7♦2♣=TPTK 드라이보드 밸류 C벳) + 초보 누수 5가지 + PAA FAQ 8개. seoTitle 28자·desc 준수.
- **[D] 적대적 팩트체크(Fable5)**: 핸드예시 §13 **PASS**. **필수 5건 교정 반영** — ①드라이보드 C벳 사이즈 모순(50~66%↔25~50%)→스몰 25~40% 고빈도로 통일(현대 솔버 표준) ②웻보드 "소액"→"체크(벳하면 크게)" ③UTG "QQ+·AK" 오픈오독→TT+/AQ+급 예시+QQ+/AK는 3벳레인지로 역할분리 ④2·4법칙 조건 명시(두장 다볼때 ×4/한장 ×2) ⑤"한 판 5%"→"1회 바이인 5%". +임플라이드오즈·VPIP 풀링기준 보강.
- **[클러스터] 역링크 8편**: 허브→클러스터(pillarhub) + 클러스터 8편→허브 역링크 추가(cbet·range·check-raise·bankroll·value-bet-sizing NEW 5 + bluffing·overbet·3bet LEGACY 3). ※`/blog/roadmap`은 앱 라우트(실존)라 무수정 확인.
- **빌드 ✅ "53 blog posts"**(52→53). 필라-클러스터: 6허브→**7허브**, 전략 필라 커버로 고아 8편 조직됨.
- **⏳ 남은 것(이미지 [E])**: 히어로 `holdem-strategy-hero.webp` + 본문 `holdem-strategy-decision.webp` 2개 커서 생성 대기 → 생성 후 빌드·커밋·푸시·GSC 색인 `/blog/holdem-strategy`. **아직 미배포**(이미지 대기).

## 2026-07-10

### 사이트 UX/구조 최적화 세션 — 독서 경험 + 홈피드 탐색 (Fable5 에이전트 활용, 배포됨)
> 이번 세션 = 포스팅 아님. "무식하게 포스팅만 했다"는 사용자 문제의식 → 사이트를 더 유저친화적으로. IA 진단 후 **A(독서 경험) 실행 + 홈피드 탐색 개선**. (다음 예정: B=필라 허브 강화+검색, 태그는 SEO 역효과라 제외 확정.)
- **IA 진단(Explore)**: 헤더 드롭다운·블로그 카테고리 필터·readnext·목차·푸터·언어스위처는 이미 있음. 갭 = 검색 없음·태그 죽은데이터·글하단 네비 약함. 결론=유입(SEO)엔 강, 유입 이후(체류)엔 약 → "구글로 온 사람이 한 번 더 클릭하게".
- **A1 읽기 진행바**(`components/reading-progress-bar.tsx` 신규): 블로그 글 최상단 5px, 본문 `<article>` 기준 스크롤 비율. rAF·리렌더0·transform/opacity. **색은 형광무지개**(핑크→오렌지→노랑→그린→블루→퍼플, 진녹색 톱바/흰영역 대비 — 흰색·골드 시안은 배경과 뭉개져 폐기). KO+다국어(ar RTL). 토너먼트 레이아웃도 장착.
- **A2 이전/다음 글**: 기존 UI는 있었으나 정렬이 배열순(시간X)이라 피드와 어긋남 → **피드와 동일 정렬로 수정**(KO=/blog 날짜 내림차순=최신 위, 다국어=postsForLocale 배열순). "다음 글=피드에서 바로 아래 글".
- **A3 타이포**: `.blog-prose li` 14.9→15.2px 문단과 통일(보수적). measure/폰트 등 관찰만.
- **홈피드 위/아래 화살표**(`components/feed-nav-arrows.tsx` 신규): 데스크톱 홈탭 우측 세로중앙 ↑/↓ (유튜브 스타일). `data-feed-card`(post-card `<article>` 3곳) 기준 글 카드 단위 이동, sticky 헤더 오프셋 런타임측정, 경계 disabled, 무한스크롤 재수집. 모바일/프로필 카드는 offsetParent 필터로 제외.
- **에스컬레이터 스크롤**(`lib/smooth-scroll.ts` 신규): `smoothScrollWindowTo` rAF ease-in-out·거리비례 300~900ms·사용자개입중단·reduced-motion 존중. 기존 골드 "맨 위로" 버튼(site-chrome) 즉시점프→에스컬레이터 교체. 화살표도 공용.
- **커밋**: `372d773`(A1·A2·A3) + `c768e8d`(화살표·에스컬레이터·진행바 무지개). 빌드 통과(52 KO + 77 intl). 데이터·라우트·slug 무변경(§11), 스크롤 저장/복원 로직 무수정. **배포됨.**
- **트슬래시 보너스**: 토너먼트 가이드 내부링크 3곳 trailing slash 제거(§14).

### 필라 허브 구조 신설 — `:::pillarhub` 학습 로드맵 (B-1 착수, 6개 필라 배포)
> A(독서) 다음 B(필라 허브+검색, 태그제외). "블로그 52편이 날짜순 피드로 흩어진" 구조 위에 **주제별 관문(허브)**을 얹어 탐색성+토픽오소리티 강화. 커뮤니티 피드(`/`)는 무관(그대로).
- **재사용 디렉티브 `:::pillarhub[제목]` 신설**(`renderMarkdown` @ `app/blog/[slug]/blog-post-client.tsx`, KO+다국어 공용): 한 줄당 `href | 라벨 | 설명`. 골드 번호배지+세로 연결선(타임라인)+클릭 스텝 카드. CSS `.pillar-hub*`(globals.css) 크림 프리미엄 카드+골드 accent, **커서 hover 시 pop-out**(translateY -3px). 내부링크 trailing slash 없음. 커밋 `035078b`(디렉티브+CSS+족보 프로토타입).
- **6개 KO 필라에 로드맵 삽입**(각 글 도입/핵심 다음·심화 앞, updated 2026-07-10, 클러스터 slug 25개 전수 실존검증): ①족보(5) ②규칙(5) ③프리플랍/스타팅핸드(5) ④토너먼트(6) ⑤확률·수학(3) ⑥포지션(2). 커밋 `035078b`(족보)+`e9e12c4`(5개). 빌드 통과(52 blog). **배포됨.**
- **📊 현황 분석(새 세션 보강용)**: 52편 중 **31편(60%)이 필라 구조에 조직됨.** 최대 공백 = **베팅·공격 전략 허브 부재**(고아 7편: 블러핑·3벳·C벳·오버벳·체크레이즈·밸류벳·레인지). 상세·보강 워크플로우는 `session-handoff.md` 최상단 참조.

## 2026-07-09

### 계산기 푸시/폴드 멀티웨이 확장 (Fable5 빌드 → 독립검증 → 배포)
- 푸시/폴드 탭에 **테이블(헤즈업/6맥스/9맥스) + 포지션(UTG…SB) 선택** 추가 → 포지션별 **first-in 쇼브 레인지**. 헤즈업 SB/BB 차트는 그대로 유지.
- **모델**: 순수 chip-EV first-in Nash(HU 에쿼티 근사) — 뒤 플레이어 콜레인지도 fictitious play 동시수렴, 콜 팟은 첫 콜러 HU로 해소(2+콜 무시=표준 근사). `lib/pushfold-multiway-data.ts`(`pfLookupMultiway`, 핸드별 쇼브임계 2-hex). `gen-pushfold.mjs` 확장 + 에쿼티 캐시(`.pf-equity-cache-*.bin`, .gitignore).
- **독립검증(내가)**: **SB 9맥스 first-in ≡ HU SB-push 0 핸드 차이**(엔진 정확성 결정적 교차확인). 포지션 단조확대(9맥스 10bb: UTG 7.8 < MP 11.2 < CO 25.5 < BTN 32.4 < SB 58.1), 스택 단조. 그리드 형태 육안. 빌드 clean(아까 prerender실패=에이전트 프로세스 경쟁 탓).
- **정직 라벨링**: "순수 칩EV·첫 콜러 헤즈업 단순화·얼리 포지션(UTG·MP)은 통설보다 타이트(소형페어 폴드)·ICM/상대성향 조정" UI에 명시.
- 2단 레이아웃·모바일 오버플로우0 유지. KO+EN 미러.

### 계산기 "푸시/폴드" Nash 차트 탭 신설 (Fable5 빌드 → 독립검증 → 배포)
- **계산기(KO+EN) 8번째 탭** "푸시/폴드": 헤즈업 Nash push/fold **13×13 차트**. 유효스택 1~25bb 슬라이더 + 앤티 토글 + SB푸시/BB콜 시나리오 + 콤보가중%(÷1326). 온브랜드 다크 그리드(골드=push/그린=call)·모바일 대응.
- **정확성 = 자체계산**(레인지 베끼기 X): `scripts/gen-pushfold.mjs`(오프라인, 10워커) → 169×169 프리플랍 올인 에쿼티(MC 30만/매치업·157s·poker-eval 교차검증 0 불일치) → fictitious play Nash 솔브 → `lib/pushfold-data.ts`(비트팩 마스크, 49스택×앤티2×push/call) 임베드. 런타임 `pfLookup` 룩업만.
- **독립검증(내가)**: UI 표시%가 공표 Nash 일치 — 10bb 58.1%(SB)/37.3%(BB), 12bb 53.5%, 15bb 46.0%, 20bb 40.6%. 단조증가·콜<푸시. 그리드 형태 육안(10bb Ax·Kx·페어 전부 push, fold=우하단 트래시). 에쿼티 AA/KK 81.84%·AKs/QQ 46.09% ±0.15pp.
- Fable5가 **내 벤치마크 3개 오류 수정**(2bb "any two"는 틀림 — 72o 슛EV<폴드EV, 수학적으로 맞는 지적). KO는 holdem-short-stack이 EN전용이라 `/blog/holdem-bubble-strategy` 링크.
- 빌드통과·배포. **🔴 부수발견(별도 수정 대상)**: `lib/poker-eval.ts` `evalBest7`가 순수 하이카드 7장에서 베스트5장을 `cards.slice(0,5)`로 방치(scoreBetter(x,[]) 항상 false) → 퀴즈 "최적5장" 하이라이트 오류 가능(족보 타입은 정상).

### EN 신규 포스트 `holdem-short-stack` 발행 — Tournament 필라 완성 (ICM→버블→숏스택 3부작)
- **배경**: ICM(이론)→버블(스팟)→**숏스택(액션)** 3부작 마무리. 사용자 자율 진행 요청. SERP 리서치(short stack strategy·push fold·M ratio). lowfruits 3시드(`short stack`=음식/폰트 노이즈·`short stack poker`=1개·`push fold`=포커有 **전부 Weak0 툴독점**) → 키워드뱅크 `en-short-stack.md`. **차트 헤드텀(push fold chart 170)은 툴독점이라 추격 안 함 → 설명글+/en/calculator 위임 각도가 정답**(데이터로 검증).
- **내용**: 스택밴드 표(25→5bb) · **M-ratio 존**(그린20+/옐로/오렌지/레드/데드, M=bb÷1.5 매핑) · **shove vs call 구분**(첫인 넓게/콜 좁게) · push/fold 차트 한계+계산기 위임(§13상 정확 Nash 레인지 미게재) · 버블 ICM 트위스트(숏=미들보다 낮은 버블팩터) · 포지션 · 5대 실수 · FAQ 7.
- **적대적 팩트체크 PASS(오류 0)**: M-ratio 경계·bb환산 전수 CORRECT, fold equity 감쇠·shove/call·포지션·min-raise 뉘앙스·cash vs tourney 전부 검증. fold equity 임계값 표현 통일(8-10bb 감쇠~5bb 소멸) 1건 반영.
- **역링크**: bubble→short-stack(숏스택 섹션) 신규. short-stack→icm·bubble·tournament(첫링크)·when-to-fold·/en/calculator.
- **이미지 2**(커서 실사 + HoldemMaster 워터마크 sharp 합성·철자검수·§13 카드 뒷면/미노출): hero 29.7KB(숏vs빅+토너클락24:37)·shove 29.7KB(올인 푸시 클로즈업). icm/bubble와 구도 차별화.
- 빌드 ✅ **"77 intl posts"**(EN 42). **Tournament 필라 8/8**. **다음**: GSC 색인 `/en/blog/holdem-short-stack`.

### EN 신규 포스트 `holdem-bubble` 발행 — Tournament 필라 (버블 실전편, ICM 짝)
- **배경**: `holdem-icm`(이론)의 **실전 적용편**. 사용자 lowfruits(`poker bubble` 헤드 DA92 어려움 → `bubble factor`(DA33)·`bubble boy`(DA23)·`bubble protection` 롱테일 + 필라 토픽오소리티) + SERP 리서치. → 키워드뱅크 `en-bubble.md`는 데이터 얇아 미생성(요약만).
- **각도**: 스택별 플레이북. 시그니처=**스택×버블유형 통합 접근**. §13 핵심=**미들스택이 가장 갇힘**(숏 아님, 반직관)·**위성 버블 AA 폴드**·**버블팩터→필요에쿼티 공식 BF/(1+BF)**(1.5→60%). 3버블(머니/FT/위성)·hand-for-hand 타이브레이크.
- **적대적 팩트체크 PASS**(공식 전 수치 재유도·hand-for-hand·위성·"FT버블 ICM 최극심" GTOW avg bubble factor로 확인, 교정 0).
- **역링크**: icm→bubble("money bubble") 신규. bubble→icm(첫키링크)·tournament(필라)·when-to-fold·/en/calculator.
- **이미지 2**(커서 실사 + HoldemMaster 워터마크 sharp 합성·철자검수·§13 보드검증: 압박 이미지 K♣·K♠ 유효): hero 48.9KB(숏vs빅+상금보드)·pressure 42.6KB(칩 푸시+폴드). ICM 이미지와 구도 차별화.
- 빌드 ✅ **"76 intl posts"**(EN 41). **다음**: GSC 색인 `/en/blog/holdem-bubble`.

### APT 제주 2026 가을 가이드 업데이트 — 날짜 정정(웹검증) + 현장 실사 2장
- **웹 교차검증**(공식 APT 2026 일정): 대회기간 **9/25~10/4로 확정** → 글의 "10/7" 오류 전량 정정(§14 이벤트가이드 날짜검증). as-of 6월→7월, "미발표" 프레이밍 갱신(기간은 확정·세부일정/바이인 미발표). Classic ME 환산 $1,570→**$1,600**(KRW 2.3M) 정정.
- **사용자 현장 촬영 실사 2장 추가**(E-E-A-T): ①LES A 카지노 표지판(실제 대회장, 기본정보 섹션)·②제주 신화월드 정문(가는 법 섹션). 회전보정·16:9 크롭·HoldemMaster 워터마크 sharp 합성·≤80KB(73.7·70.0KB). updated 2026-07-09.

### EN 신규 포스트 `holdem-icm` 발행 — Tournament 필라 (ICM 마스터 가이드)
- **배경**: 계산기 작업 중 **EN에 ICM/버블 글 부재** 발견 → 시너지 최대 후보. 사용자 lowfruits export(`poker_icm *`) 분석: `poker icm` 1300vol·Weak2, 롱테일 `chip ev vs icm`·`when to use icm`·`icm mistakes` 등 Weak4~5 다수(minDA6 gtolab = 뚫을 만함). 키워드뱅크에 ICM 시드 없어 라이브 대체 → `docs/keyword-bank/en-icm.md` 신설.
- **각도**: "초보→파이널테이블 딜"까지 **계산기 연동 단일 마스터**(SERP에 통합 페이지 없음). H2 9개.
- **내용**: 칩≠돈 · **Malmuth-Harville 워크드예시**(칩50%→ICM38.4%, 착순확률까지 §13 `computeICM` 직접검산) · ICM vs ChipEV · ICM택스/리스크프리미엄/버블팩터 · **ICM딜 vs 칩찹**($750/450/300 vs $618/485/397, §13) · 언제 쓰고 무시하나(위성·헤즈업) · 정직한 한계(arXiv 2506.00180 실증연구 인용).
- **적대적 팩트체크 ALL CORRECT**(손계산 재검증, 출처 Harville1973·Malmuth1986 확인). 반영 2건: 딜예시 상금($900/400/200) 명시로 재현가능화 + 실증연구 "a large 2025 study"로 표현 완화.
- **역링크**: holdem-tournament(필라)·tournament-vs-cash-game 본문→holdem-icm 인라인(updated 갱신). /en/calculator 상호 CTA(계산기 ICM 내부링크 공백 메움).
- **이미지 2개**(커서 실사 + **워터마크 sharp 합성·철자 육안검수**): hero 29.8KB(3단 내림차순 스택+상금보드=ICM 시각화), pressure 40.7KB(버블 폴드, 카드 뒷면 §13안전). 커서가 워드마크 누락 → sharp로 "HoldemMaster" 골드 저불투명 우하단 합성.
- 빌드 ✅ **"75 intl posts"**(EN 40편). **다음**: GSC 색인 `/en/blog/holdem-icm`.

### 계산기(/calculator) 시그니처 자산 보강 — SEO 기술공사 + 다크콘솔 세련화 + ICM 콘텐츠 (3커밋)
> 목적: "ICM 계산기" GSC 1페이지 5~6위 → Top3. Fable5 기획(콘텐츠/SEO + 디자인/모바일 병렬) → 단계 실행.
- **①색인 기술공사(`ffe84d4`)**: KO `/calculator`가 bare 래퍼라 서버 metadata 부재 → 초기 정적 HTML canonical이 **사이트 루트로 오염**·title 기본값이던 것 수정. page.tsx에 서버 metadata(canonical=/calculator·openGraph) + ko↔en 상호 hreflang + JSON-LD(WebApplication+BreadcrumbList) 서버 렌더. title 선두를 "ICM 계산기"로 재배치. EN page.tsx도 상호 hreflang.
- **②다크 콘솔 세련화 + 모바일(`d50d42a`, KO+EN)**: 크림 사이트에 고아로 남아 대비 실패하던 계산기 다크 하드코딩 재설계 → **크림 프리미엄 히어로(골드 그라디언트 헤드라인·배지·pill) + 도구 패널만 `.calc-console` 스코프**(globals.css 신설, 테마 토큰만 다크 재정의 → 기존 클래스 무수정·데이터시각화 색 보존·muted-foreground 대비버그 해소). 모바일: 카드셀 44px·스탯 폰트 반응형·탭 페이드·ICM 6열→모바일 4열축소·±버튼 확대. **360/390px 오버플로우 0 검증**. CLAUDE.md §9-1 "사이트=다크" 옛 전제 폐기(크림 라이트 명시).
- **③ICM 콘텐츠 심화(`af8ff9c`)**: 하단에 "ICM 계산기 사용법—버블 예시"(칩40%→ICM33.3%)·"ICM 딜 vs 칩찹"(칩찹750/450/300k vs ICM딜 617,857/485,000/397,143→숏스택+9.7만)·FAQ 8개. `app/calculator/faq.ts` 공유모듈→FAQPage JSON-LD↔가시FAQ 동기화. **모든 ICM 수치 실제 computeICM 알고리즘으로 §13 직접 검산**.
- **③-b 내부링크 양방향(`828fb95`, 3단계)**: 계산기 하단 "계산이 이해되면 읽을 가이드" 링크블록 6개(icm-poker-meaning·holdem-bubble-strategy·pot-odds-calculation·outs-calculation·starting-hand-range·tournament-vs-cash-game, 실존 KO slug) + 버블예시 인라인 링크. 역링크: icm-poker-meaning·holdem-bubble-strategy 본문에 /calculator CTA(기존 0개), updated 갱신.
- **④EN 콘텐츠 이식(`5abe4a1`)**: KO 검증본을 `/en/calculator`에 이식 — 워크드예시(bubble·deal $표기, ICM%는 스케일무관 동일)·FAQ 8개(EN)·`app/en/calculator/faq.ts`·JSON-LD @graph(WebApplication+BreadcrumbList+FAQPage)·내부링크 6개(EN 실존 slug, ICM/버블 EN글 부재라 tournament/equity로 대체).
- 전부 빌드통과(52 blog)·배포됨. **1~3단계 + EN 이식 완료.** **다음(사용자 몫)**: GSC `/calculator`·`/en/calculator` 재크롤/색인요청(canonical/스키마 반영). 2~4주 "ICM 계산기" 순위 추적.

### 영어 도구 5종 신설 + Fable5 전수검토 + 카니발 해소 + UX/버그 수정 (대형 세션)
- **영어 도구 5종 신설**: `/en/calculator`·`/en/quiz`·`/en/hand-chart`·`/en/glossary`(리디자인:카테고리필터+A–Z 46용어) + `/en/ranking`(글로벌톤, 배너 숨김). 채팅 툴배너가 KO 도구로 튕기던 i18n 버그 해소 → 언어별 존재 도구만 노출(chat-tab `toolLinks`). SiteHeader가 로케일 인식이라 헤더·홈링크 자동 영어.
- **Fable5 전수검토(4에이전트, 손계산 재검증)** → 실질오류 수정: 계산기 **ICM설명 역전**(숏스택 가치=칩비율보다 높음)·**티어바 렌더버그**(Tailwind 런타임클래스→정적 `TIER_BAR` 맵)·**Q10s/A10o 오폴드**(HAND_TABLE 추가)·상금>플레이어 클램프·A5s/AA+KK/OESD/gambly/틸드/하단라벨/ICM카드 문구. 핸드차트 **예시표 7건 차트티어 정합**·**"A8s from UTG" 사실오류**→하이잭/버튼·SEO160·FAQ. 퀴즈 이모지등급·hand-reading→hand-ranking. 용어사전 Offsuit/Check-Raise. **동일버그 KO 계산기·핸드차트에도 반영**.
- **poker-eval 휠 스트레이트 버그 수정**(`21809f3`): `handScore`가 A-2-3-4-5를 에이스하이(`[14,…]`)로 오평가 → 더 높은 스트레이트보다 위로 선택하던 버그. `[5,4,3,2,1]` remap(독립스크립트 검증: `A2345+6K`→2-3-4-5-6 선택). KO·EN 퀴즈 공용.
- **★카니발 해소(몰아주기 전략 확립)**: `/hand-chart`(KO+EN)·`/en/glossary` **noindex**(블로그 필라가 키워드 소유). 계산기는 **색인 유지**(GSC 7일 "ICM계산기" 50노출 전부 1페이지 5~6위 = 독점쿼리, 블로그는 "계산법"이라 다른 의도). `/calculator` 제목 GSC 승리쿼리로 최적화. rule은 기존처리 확인(`/rules/texas-holdem` noindex 정상, 영어는 도구 없음). 판단규칙 → 메모리 `seo-tool-vs-blog-cannibalization`.
- **커뮤니티 탭 URL 동기화**(`4cef9bf`): 채팅→도구→뒤로가기 시 홈피드로 리셋되던 버그 → 탭 변경 시 `?tab=` `history.replaceState` 반영 → 직전 탭 복원. (읽기 로직은 있었고 쓰기만 없었음)
- **워터마크 규칙 변경**: `posting.mdc` — 스크립트 자동화 폐기 → **커서 이미지 프롬프트에 "HoldemMaster 우하단 워드마크" 지시 포함 + 커밋전 스펠링 검수**.
- 전부 빌드통과·배포. **사용자 완료**: GSC `/hand-chart` 삭제요청 제출(EN 2개는 신규+noindex라 불필요).

## 2026-07-08

### 도구 페이지 카니발라이제이션 해소 (신규 영어 도구 발행 후속)
- **배경**: `/en/calculator·quiz·hand-chart·glossary`(+KO 도구) 신설 후, 블로그 필라와 키워드 자기잠식 점검(Fable5→일반 서브에이전트 감사). 과거 `/hands`·`/rules/texas-holdem` noindex 선례와 동일 패턴 적용.
- **noindex 처리(도구가 SERP 양보 → 블로그 필라가 키워드 소유, 기능·내부링크는 유지)**:
  - `/en/hand-chart` → `holdem-starting-hands-chart` 필라와 제목 거의 동일(HIGH). page.tsx metadata에 `robots:index:false`.
  - `/hand-chart`(KO) → `holdem-starting-hand-range`("홀덤 스타팅 핸드")와 충돌(HIGH). **bare 래퍼라 metadata export 신규 추가** + 사이트맵에서 제외(37→36).
  - `/en/glossary` → `holdem-glossary` 필라("Texas Hold'em Glossary")와 충돌(HIGH). `robots:index:false`.
- **제목 차별화(noindex 불필요)**: `/calculator`(KO) 제목 "…무료 계산" → "…올인원 무료 도구"로 계산기(tool) intent 강화 → `holdem-outs-calculation`·`holdem-pot-odds-calculation`("계산법")과 분리(MED).
- **유지(LOW)**: `/glossary`(KO, 블로그 라이벌 없음=단독 소유) · `/en/calculator`(도구 vs 설명글) · `/quiz`·`/en/quiz`(퀴즈 고유 intent) · `/ranking`·`/en/ranking`(사이트순위≠족보순위).
- **참고**: EN 도구 페이지는 애초에 사이트맵 미포함이라 robots noindex만으로 신호 충돌 없음. KO도구 page.tsx는 bare 래퍼+client `<SEO>`(robots 미지원)라 noindex는 반드시 metadata export로.
- **다음(사용자 몫)**: GSC에서 `/hand-chart`·`/en/hand-chart`·`/en/glossary` 재크롤/색인제거 요청.

### EN 크로스필라 독립글 발행 `holdem-card-counting` — 저경쟁 롱테일
- **신규 EN 포스트: `holdem-card-counting`** — "Can You Count Cards in Poker? Yes — But Not Like Blackjack"(10분). 특정 필라 무소속(Rules/Odds 크로스). 타깃 "can you count cards in poker" 480·**LDA18 최저경쟁**.
- **★키워드뱅크 활용(신규 규칙 첫 적용)**: en-what-beats는 "신규X, 허브FAQ 흡수"라 스킵 → can-you 시드 "독립 후보 can you count cards 480·LDA18" 선정. 검색의도 최우선.
- **딥리서치**: 검색자 다수가 "블랙잭 넘어온 사람"→블랙잭 프레임 깨기가 훅. 경쟁사 갭="블랙잭 왜 안되는지 얕음·아웃츠+블로커+데드카드 통합글 드묾·합법성 대조표 없음·Stud 예외 누락".
- **각도=블랙잭식 무효+포커식 카운팅 통합 원스톱**. H2 7개(직답→왜 안됨 3이유→대조표→아웃츠/블로커/데드카드→합법성→Stud 예외→실전 3스텝). :::compare 대조표(이해보조 규칙).
- **정확성**: **적대적 팩트체커 ALL CORRECT**(교정0). 플러시9아웃 35.0%(4-2룰 36% 근사 구분)·넛플러시 블로커 A♠ 완전제거·넛스트레이트 K-T 16→12(25%↓)·합법성("illegal" 단정 회피)·Stud 업카드 카운팅.
- **desc 154자**(신규 desc≤160 규칙 첫 준수 — 작성부터 통과).
- **역링크**: outs("포커의 진짜 카운팅") → card-counting 인라인썸네일. 본문은 outs·3bet·probability·pot-odds 링크. index 등록.
- **이미지 2개**(커서 실사): 히어로=암산하는 플레이어 33KB, 블로커=A♠+보드 K♠9♠4♠(§13 정확 일치, A♠ 중복0) 49KB. §9-1 통과.
- **빌드 ✅ "52 blog + 74 intl"**(EN 39편). **다음**: GSC 색인 `/en/blog/holdem-card-counting`.

### EN Hand Rankings 심화 발행 `holdem-kicker` — 필라2 5/6
- **신규 EN 포스트: `holdem-kicker`** — "What Is a Kicker in Poker? The Side Card That Wins Pots"(10분). 족보(Hand Rankings) 필라 심화.
- **딥리서치**: 키워드뱅크에 kicker 없음→SERP 대체(명시). 경쟁사(PokerNews·888·Wiki) 공통약점="있다/없다 표 없음·쿼드 키커 대충·카운팅 없음·도미네이션 분리". 통합 부재가 침투점.
- **각도=정의+9족보 대조표+키커 카운팅표+승부결정(AK vs AQ)+playing the board+도미네이션+쿼드예외 원스톱**. H2 7개. (표 중심 = "이해보조 표" 규칙 예시)
- **정확성**: 룰·핸드예시 4개 베스트5장 검산. **적대적 팩트체커 ALL CORRECT**(교정0, 명확성 1건: "Straight/Royal"→"Straight flush/Royal flush"). AK vs AQ(A-A-K-9-7>A-A-Q-9-7)·브로드웨이 스플릿·A9 dead kicker·쿼드 예외(보드공유시만).
- **★자기잠식 방지**: tiebreak-rules와 seoTitle 훅 충돌 발견("Same pair but you lost") → kicker를 **정의/레퍼런스 각도로 차별화**(제목·desc 변경).
- **역링크**: hand-rankings 허브·tiebreak-rules → kicker 인라인썸네일 양방향. index 등록.
- **이미지 2개**(커서 실사): 히어로=AK vs AQ 쇼다운(**보드 A♣9♦5♠2♥7♣ = §13 예시 정확 일치**, 1차 보드 10-K-A-Q-2 오류→재생성) 51KB, dominated=A♠K♦ vs A♦9♣ 33KB. §9-1 통과.
- **★규칙 추가**: `posting.mdc`에 "포스팅 전 키워드뱅크(`docs/keyword-bank/`) 먼저 읽기" 0순위 규칙 신설(사용자 지시).
- **빌드 ✅ "52 blog + 73 intl"**(EN 38편). Hand Rankings 4/6→5/6. **다음**: GSC 색인 `/en/blog/holdem-kicker`. what-beats-what or 새 필라.

### EN Odds 클러스터 #5 발행 `holdem-equity` — 필라3(Odds) 완성 🎉
- **신규 EN 포스트: `holdem-equity`** — "Poker Equity Explained — Win %, Fold Equity, and Realization"(12분). 필라3 5번째 = **완성**.
- **딥리서치(서브에이전트 2개)**: SERP — equity가 26개 파일 251회 언급되나 **전용글 부재**(허브 스포크 갭). 경쟁사는 정의(얕음)+계산기 나열 or 하위개념 격리(fold/realization 각기 다른 URL). 통합글 부재가 침투점.
- **각도=6개 하위개념 원스톱 통합 + answer-first**. H2 8개(정의→추정→equity vs pot odds→fold equity→realization→all-in→multiway→종합). 계산 상세는 outs/drawing-odds/pot-odds 링크 위임(중복 회피).
- **정확성**: 프리플랍 매치업 **전수열거(160만 보드)** 검증 + fold equity EV +$52 + realization 공식. **적대적 팩트체크 2건 교정**: ①멀티웨이 AA 55→**64%**(vs랜덤 3명, 기준 통일) ②QQ vs AK 54→**57%**(오프수트 정설; 수딧만 54). 드로우·나머지 매치업 ALL CORRECT.
- **역링크**: probability 허브·pot-odds → equity 인라인썸네일 양방향. index 등록.
- **이미지 2개**(커서 실사): 히어로=**AK vs AQ 올인쇼다운(도미네이션 매치업 일치)** 45.9KB, 멀티웨이=6인 테이블 45.6KB. §9-1 통과.
- **★부수 발견(별도 처리 필요)**: `lib/poker-eval.ts`의 `handScore`가 **휠 스트레이트(A-2-3-4-5)를 에이스하이로 오평가하는 버그**. 이번 글 무관, 나중 수정 대상.
- **빌드 ✅ "52 blog + 72 intl"**(EN 37편). **필라3 Odds 완성**(허브+pot-odds+outs+drawing-odds+implied-odds+equity). **다음**: GSC 색인 `/en/blog/holdem-equity`. 새 필라 착수(Hand Rankings 심화 kicker/what-beats or Tournament 상시 ICM/bubble or Glossary 확장).

### EN Odds 클러스터 #4 발행 `holdem-implied-odds` — 필라3 사실상 완성
- **신규 EN 포스트: `holdem-implied-odds`** — "Implied Odds in Poker — When a Bad Price Is a Good Call"(11분). 필라3(Odds) 4번째 클러스터.
- **딥리서치(서브에이전트 2개)**: ①SERP/PAA — 상위권(Upswing·SplitSuit=공식만/888=reverse만/ThePokerBank=넓지만 얕고 fixed-limit 노후) **파편화 → IO+reverse IO+셋마이닝+드로별 기준+실수 통합글 부재 + PAA FAQ 거의 없음**이 최대 공백. ②정확성 검증(공식·확률·셋마이닝 배수).
- **각도=원스톱 통합 + answer-first**(롱테일 검색자 직답 먼저). 노벨 자산: **드로별 스택 배수표**(플러시/OESD 8-10× · 셋마인 15-20× · 것샷 20×+) · **공식 x=(콜÷적중률)−팟 워크스루** · reverse IO 통합(dummy end).
- **정확성**: §13 자체검산서 핸드예시 2건 오류 발견·수정(워크드 팟계산 엉킴 / dummy end `8♠7♠`→상대 스트레이트 불가능 오류 → `6♦5♦` 9-high vs J-10-9-8-7로 교체). 셋마이닝 11.8%/7.5:1/1-in-8.5, 플러시 9/46=19.6%, x=$105 검산. **적대적 팩트체커 ALL CORRECT**. IO공식은 보수적 교과서형 유지, 5%룰=20× vs 이론 7.5:1 구분, all-in=IO0.
- **역링크**: pot-odds·drawing-odds·probability 허브 → implied-odds 인라인썸네일 양방향. drawing-odds 셋마이닝 배수 10-15×→15-20× 통일. index 등록.
- **이미지 2개**(커서 실사, §13검산): 히어로=딥스택+칩미는손+하트드로우(29KB), 셋마인=`5♠5♦`+딥스택(40KB). §9-1 통과.
- **빌드 ✅ "52 blog + 71 intl"**(EN 36편). **다음**: GSC 색인요청 `/en/blog/holdem-implied-odds`. 필라3 마지막 `equity` 1편이면 Odds 완성.

## 2026-07-06

### EN Strategy 클러스터 #4 발행 `holdem-when-to-fold` — 기계+심리 융합
- **신규 EN 포스트: `holdem-when-to-fold`** — "When to Fold in Poker: The Skill That Quietly Wins the Most"(16분). 허브 Decision5 위임처, 저경쟁(LDA14) #1 타깃.
- **딥리서치 핵심 통찰**: 경쟁 SERP이 **"기계적 폴드(심리0: Upswing 500단어·888·SplitSuit)" vs "심리(헤드텀 랭크X: Natural8·Casino.org·GTOWizard)" 두 갈래로 분리** → **둘을 한 페이지에 융합한 곳이 전무**. 이게 우리 승기.
- **각도=규율+심리 융합, 캐시우선**. 노벨 자산: **팟오즈 문턱표**(½팟25%/⅔29%/팟33%/오버벳37.5%) · **"못 접는 좋은패" 표**(탑페어 약킥·오버페어·4플러시보드 TPTK·모노톤 셋·세컨페어) · **good vs bad laydown** · **sunk cost/ego/fear 심리섹션** · "Should I Fold?" 체크리스트(:::steps) · 실수7표.
- **정확성**: §13 워크드핸드(A♥K♣→리버 KK99 two pair, 패시브 체크레이즈에 폴드=good laydown) + 팟오즈 문턱 전부 검산 + 플러시드로 9/46=19.6%<25%→폴드/$25벳 5:1→콜. **적대적 팩트체커 PASS**(폴리시 3건만: grammar·"drawing→beaten"·체크리스트 문구). 프리플랍 75-85%(VPIP), AA 캐시 never/토너 예외, MDF 저스테이크스 오버폴드 헷지.
- **역링크**: 허브 Decision5 앵커에 인라인썸네일 링크 주입(양방향), pot-odds·3bet·c-bet 상호링크. index 등록.
- **빌드 ✅ "52 blog + 70 intl"**(EN 35편). **다음**: [E] 커서 히어로 `holdem-when-to-fold-hero.webp`(카드 머킹) → GSC 색인. Strategy 클러스터 계속(check-raise·preflop) or Odds 마무리.

### EN Strategy 클러스터 #3 발행 `holdem-continuation-bet` (c-bet) — 원스톱 통합
- **신규 EN 포스트: `holdem-continuation-bet`** — "Continuation Bet (C-Bet): When to Fire the Flop, How Much, and When to Check"(15분). 허브 Decision4 위임처.
- **딥리서치(서브에이전트 2개)**: ①경쟁사 SWOT — Upswing은 6+페이지로 클러스터 분산(단일페이지에 빈도%·사이징산수·표·FAQ·when-NOT 전부 없음), PokerNews 표·수치無, MyPokerCoaching 수치 흩어짐+전문용어, GTOWizard 초보난이도 → **단일 통합 페이지 부재**가 최대 공백. ②정확성(빈도 텍스처/포지션/인원 의존·사이징·range/nut advantage) 소스검증.
- **각도=원스톱 통합 + "always c-bet 틀렸다" 교정**. 노벨 자산: **보드텍스처 결정표**(dry/wet/paired/monotone/two-tone→bet/check+사이즈) · **빈도 치트시트**(포지션×인원) · **실수7 표**. range advantage→빈도, nut advantage→사이즈 프레임.
- **정확성**: §13 워크드핸드 2개(A♣K♦ TPTK on K♠7♦2♣=c-bet / A♥Q♥ on 7♠6♠5♦=체크·보드가 콜러 스매시) + ~2/3 미스(67.6% 검산) + 사이징 $30팟→1/3=$10·2/3=$20. **적대적 팩트체커 PASS(교정0)**. 빈도 전부 범위+근거(단일% 금지), 체크≠약함, 멀티웨이 range bet 미적용 명시.
- **역링크**: 허브 Decision4 "c-bet"에 인라인썸네일 링크 주입(양방향), 3bet·pot-odds 상호링크. index 등록.
- **빌드 ✅ "52 blog + 69 intl"**(EN 34편). **다음**: [E] 커서 히어로 `holdem-continuation-bet-hero.webp` → GSC 색인. Strategy 클러스터 계속(when-to-fold·check-raise).

### EN Strategy 클러스터 #2 발행 `holdem-3bet` — 대형키워드(3 bet 1600) #1 타깃
- **신규 EN 포스트: `holdem-3bet`** — "3-Betting in Poker: When to 3-Bet, How Much, and How to Face One"(16분, ~3천단어). 사용자 지정 "구글1페이지 1등" 대형 키워드.
- **딥리서치(서브에이전트 2개 병렬)**: ①경쟁사 SWOT — 상위권이 **파편화**(Upswing=range만/PokerNews=얕은정의/SplitSuit=range/888=squeeze/BlackRain=defense)라 **한 페이지 통합본 부재**가 최대 공백. ②정확성 기준(사이징 산수·linear/polarized·블로커·스탯) 소스검증.
- **각도=원스톱 통합**(각 경쟁사 최강점 흡수: Upswing 차트→레인지그리드, PokerNews FAQ, SplitSuit 실수섹션, 888 worked example, BlackRain 로우스테이크스). **노벨 자산 3개**: "3-Bet/Flat/Fold?" 결정표 · "villain fold-to-3bet 대응표"(35/55/70→처방) · light 3bet 블로커 파인더.
- **정확성**: §13 워크드핸드(A♠Q♠ TPTK on Q♦8♣4♥, pot $39 검산) + 사이징 산수(3bb→IP9bb/OOP12bb/squeeze15bb) + 블로커 콤보(**AA 6→3·AK 16→12** — 리서치 오류 12→8을 직접검산으로 정정) + A5s~30%. **적대적 팩트체커 PASS**(BB 플랫 정밀화·문장깨짐 2건만 교정). c-bet식 단일수치 강요 안 함, sizing 고정배수 아님·flat IP 정당·토너 25bb잼 뉘앙스 전부 헷지.
- **함정**: 본문(템플릿리터럴 백틱) 안에 인라인코드 백틱 → 빌드 SyntaxError. `==...==` 하이라이트로 교체(교훈: 본문에 백틱 금지). 달러도 `\\$`→`$` 정정(템플릿리터럴).
- **역링크**: 허브 Decision3에 3bet 인라인썸네일 링크 주입(양방향). index 등록.
- **빌드 ✅ "52 blog + 68 intl"**(EN 33편). **다음**: [E] 커서 이미지 2개(holdem-3bet-hero + holdem-3bet-range-grid 인포그래픽) → GSC 색인요청 `/en/blog/holdem-3bet`. Strategy 클러스터 계속(c-bet·when-to-fold).

### EN Strategy 필라 허브 발행 `holdem-strategy` (필라 4 최대 공백 해소)
- **신규 EN 포스트: `holdem-strategy`** — "Texas Hold'em Strategy: The 5 Decisions Behind Every Winning Hand"(14분). 필라 4의 **허브 첫 발행**(그간 껍데기, 유일 미발행 필라 허브).
- **각도**: SERP Top10 전수조사(서브에이전트)로 경쟁사(Upswing 10 tips·888 9 tips 등)가 전부 **연결 프레임워크 없는 팁 리스트**임을 확인 → 최대 공백 = **"5개 결정 스파인"**(포지션→핸드선택→raise/fold→c-bet→폴드). 각 결정이 클러스터로 목차링크 = 허브 역할.
- **콘텐츠**: :::stripe 핵심스탯 + 5-결정 섹션(각 클러스터 인라인/썸네일 링크) + **시그니처 표=초보 누수 6가지→해결**(5개가 5결정에 매핑) + 팟오즈/셋마이닝 수학 섹션 + TAG 스타일 섹션 + PAA 정확매칭 FAQ 11개(when to fold/bet vs check/bluff/3bet/raise vs call/how many hands/TAG/c-bet빈도).
- **정확성**: §13 핸드예시 2개(A♣K♣ on 2-7-9=에이스하이 폴드·5♠5♦ on 5-K-2=셋) 직접검산 + **적대적 팩트체커 사실오류 0건**. 셋마이닝 11.8%=1/8.5 산술확인. c-bet **단일% 금지**(IP dry 60-80/OOP 40-50/멀티웨이<half, 사이즈 25-35%wide/65%+polarized) — 통설 부합. TAG=초보기준(만능 아님) 프레이밍.
- **역링크**: position-play·starting-hands-chart 인트로에 허브(필라) 역링크 삽입, limping 첫링크(임시 position→)를 허브로 교체. index.ts 등록.
- **빌드 ✅ "52 blog + 67 intl"**(EN 32편). **다음**: [E] 커서 히어로 이미지 `holdem-strategy-hero.webp` 생성 → GSC 색인요청 `/en/blog/holdem-strategy`. 이후 Strategy 클러스터 심화(3bet 1600·c-bet·when-to-fold).

## 2026-07-05

### GSC Top-3 전략 Wave 1 — 블라인드 클러스터 밀기 (기존글 GSC 최적화)
- **전략 수립**: GSC 데이터로 top-3 진입 3-Wave 전략 확정. 원칙=①이길 수 있는 곳 집중(롱테일+토너먼트/펍 니치+족보) ②이미 가까운 r5~7부터 ③클러스터 권위통합. Wave1=r5~7 빠른승리, Wave2=족보필라(심기완료·대기), Wave3=블라인드/도구 확장.
- **Wave1 실행(커밋 217acd4)**: `holdem-blind-meaning`(홀덤 블라인드 뜻 r6.8인데 CTR3.57% 저조) → **"홀덤 BB 계산" 실계산 블록 추가**(스택÷BB, 100000÷2000=50BB·÷5000=20BB §13검산, 딥100BB/숏20BB) = `홀덤 bb 계산`(r9.3 41노출) 정확매칭 흡수. **updated 2026-05-20→07-05**(7주 낡음 해소). `holdem-tournament-how-to-enter`(19clk r6.0 권위) → blind-meaning 내부링크 주입(대회 전 기초 문맥).
- **정직한 판단**: `tiebreak-rules`(홀덤 족보 같을 때 r6.2 CTR6%)는 제목=쿼리 정확매칭+신선도 최신이라 **과편집 회피(무편집)**. /tournaments·/pub은 사이트맵 lastmod 빌드자동 today = 신선도 자동. 내부 카니발 확인=족보 순위는 필라가 깨끗이 독점(confusing·tiebreak·7poker는 롱테일 분리).
- 빌드 ✅ "52 blog + 66 intl". **다음**: 배포 후 blind-meaning·how-to-enter 재크롤 요청. Wave2는 2~3주 관찰(족보필라 top5 진입 여부=성패지표). Wave3(빅블라인드 독립섹션·ICM /calculator)는 후속.

### GSC 점검(사용자 제공 CSV 3개월/28일) → 족보 클러스터 순위 밀기
- **GSC 분석**(3개월: 클릭97/노출5037/CTR1.93%, 최근28일에 집중=성장중). 밥줄=**토너먼트일정+홀덤펍**(2026 홀덤대회일정 18clk r5·홀덤펍 추천 9clk CTR25.7%). **최대 기회=족보 클러스터**(홀덤 족보 순위 195노출 r9.8·포커 족보 111 r31·홀덤 핸드순위 73 r9.6·홀덤 족보 62·패순위 48·카드순위 31·킹하이 30 — 합 ~570노출이 r9~19 문턱에서 클릭0~7). EN=권위한계 재확인(texas-holdem-rules 1186노출 r55 clk1) + **신규 EN 9편 전부 미색인**(색인요청 필요).
- **핵심 발견=카니발라이제이션**: `/hands`(noindex)가 사이트맵에 priority0.85로 남아 블로그 필라와 족보 키워드를 r14로 나눠먹음. 색인신호/노색인신호 충돌.
- **수정**: ①generate-sitemap에서 `/hands`·`/rules/texas-holdem`(둘 다 robots index:false) **사이트맵 제외**(37 static, was 39) → 구글이 도구페이지 색인 드롭 시 필라로 권위 통합. ②필라 `holdem-hand-rankings`에 **킹하이(에이스하이/킹하이) 명시 커버**(§13 검산: A♣Q♠9♥5♦3♣=에이스하이·K♦Q♠9♥5♦3♣=킹하이 정확). ③필라 `updated`→2026-07-05(lastmod 재크롤 유도). ④masters-7th-guide(26clk 권위) → 필라 내부링크 주입.
- 빌드 ✅ "52 blog + 66 intl + 37 static". 커밋 80b5887. **다음**: GSC 색인요청(신규 EN 9편) + /hands 재크롤 요청, 그리고 필라 순위 추적.

### EN Strategy 클러스터 개척 1번 — holdem-limping (Limping in Poker) 신규
- **필라4 Strategy 개척 첫 글**(Glossary 필라 완성 후 다음 필라=최대공백으로 이동). limping=590/mo·LDA8·단독승산 최상. 적대적 서브에이전트 SERP+PAA 조사 후 착수.
- 타깃: what is a limp·why is limping bad·is limping good·open vs over-limp·limp-reraise·should you open-limp·SB limp·limper vs calling station. H2 8 + FAQ 8.
- **차별화(경쟁사=독단 "never limp" or 단순정의뿐, 그 사이 갭)**: ①**"왜 나쁜가" 4가지 정확한 이유**(폴드에쿼티0=프리플랍 못이김·주도권상실=c-bet 못침·멀티웨이OOP·투명/처벌) ②**"언제 괜찮나" 예외표(비독단=이 글 승부처)**: SB컴플리트·스페큘러티브 오버림프(셋마이닝)·패시브라이브저스테이크·얕은BTN 2026솔버뉘앙스 ③**open-limp vs over-limp 구분**(스니펫미끼) ④**limp-reraise 트랩**+"림퍼 처벌법(iso-raise)"+limper≠calling station.
- **품질: 적대적 팩트체커 = 발행가능·사실오류 0**. 셋마이닝 11.8%(1-in-8.5) 검증, 4가지이유·예외4개·limp-reraise(TT+/AK/AQ)·라이브vsGTO 프레이밍 전부 CORRECT. "limping 항상 나쁘다" 독단 없이 뉘앙스 유지 확인(리서치 최대 경고포인트). 선택다듬기 2건(12→11.8%·범위표기 일관) 반영.
- 첫링크=holdem-position-play(Strategy 클러스터, 허브 미발행 임시). fish·starting-hands-chart·pot-odds·glossary 연결. 인라인썸네일·:::readnext·Related 4카드.
- 빌드 ✅ **"66 intl posts"**(65→66). category=strategy. seoTitle 60·desc 150. 커밋 41c6f3c. **다음**: Strategy 계속(허브 holdem-strategy or 3bet 1600·c-bet·when-to-fold) or Odds 마무리(implied-odds·equity). ⚠️ **커서 히어로 1개 필요**: `holdem-limping-hero`(칩 소극적으로 밀어 BB만 콜=림프). 본문 2개는 button-dealer-board·pub-players-table 재사용.

### EN Glossary 허브 발행 — holdem-glossary (Poker Terms A-Z Hub) 신규 ★필라 완성
- **필라6 Glossary 허브 발행**(개별글 5개 축적 후 링크주스 집중 적기). "poker terms/glossary/texas holdem terms/slang" 타깃. **이로써 Glossary 필라 = 허브+5클러스터로 완성 구조.**
- **차별화**: 경쟁사(PokerNews·Upswing·Wikipedia) 전부 flat A-Z 한 덩어리 → 우리는 ①**카테고리 우선 6분류**(베팅액션·포지션·핸드/보드·플레이어유형·머니/게임·상황/스탯/에티켓 — 초보는 단어가 아니라 "상황"으로 검색) + ②상단 **"가장 헷갈리는 용어" 8쌍 모듈**(check vs call·set vs trips·cooler vs bad beat·VPIP vs PFR·3-bet 카운팅·value vs bluff·pot vs implied odds·blind vs ante = Featured Snippet 미끼).
- 80여 용어 정의 + 개별글/타필라로 촘촘한 내부링크(betting-actions·positions·position-play·game-order·tiebreak·hand-rankings·pot-odds·outs·probability·blind-meaning·all-in·showdown·split-pot·tournament-vs-cash) → **진짜 스포크허브**(개별글로 링크주스 집중).
- **품질: 적대적 팩트체커 80개 정의 전수검증**. 고위험 개념(3-bet 카운팅=BB1/open2/reraise3·set vs trips·cooler vs bad beat·wheel=최저스트레이트·button/SB/BB 포지션·VPIP≥PFR·gutshot4/openender8아웃) 전부 CORRECT. 필수수정 1건(Big blind 행 문장 깨짐)+선택 1건(whale) 반영.
- FAQ 8(PAA 정확매칭). :::readnext·Related 4카드·"Where to go next" 링크섹션.
- 빌드 ✅ **"65 intl posts"**(64→65). category=strategy. seoTitle 54·desc 155자. 커밋 7a5ed5c. ⚠️ **커서 히어로 이미지 1개 필요**: `holdem-glossary-hero`(포커테이블 칩·딜러버튼·커뮤니티카드). 본문 2개는 button-dealer-board·pub-players-table 재사용. 📌**후속(선택)**: 개별 5글 첫링크를 허브로 역링크(맵§3.3 클러스터 정합).

### EN Glossary #5 — holdem-bad-beat (What Is a Bad Beat in Poker) 신규
- **필라6 Glossary 5번째(cooler와 대칭 쌍)**. bad beat=320/mo. 적대적 서브에이전트 SERP+PAA 조사 후 착수.
- 타깃: what is a bad beat·bad beat vs cooler·is a coinflip a bad beat·bad beat jackpot·worst bad beat·more common online·how to deal with·is it bad play. H2 8개 + FAQ 8(PAA 정확매칭).
- **차별화 시그니처 4개**: ①**bad beat vs cooler 비교표**(cooler 글의 거울쌍=상호참조 토픽오소리티, bad beat=앞선채 석아웃/cooler=뒤진채 못접음, "opponent가 improve해야 win이면 bad beat" 리트머스) ②**favorite 임계값 정량화**(~80%+AND석아웃, 코인플립 AK vs QQ는 bad beat 아님 — 대부분 회피하는 지점) ③**Bad Beat Jackpot 상세**(자격="에이스풀 이상이 쿼드에 깨짐"·both cards play·배당분배표 50/25/25·룸마다 다름 경고) ④**"bad beat은 수학적으로 좋다"** EV프레이밍(상대 -EV콜=수익원)+멘탈게임(틸트·"스토리는 지루").
- **품질: 적대적 팩트체커 + §13 에쿼티검산**. 에쿼티 6개(AA vs 77 ~80%/4.5:1·AA vs랜덤 ~85%·오버페어 vs9아웃플드 ~65/35·러너러너 ~90%+·원아웃터 ~98%·AK vs QQ ~55/45 코인플립) 전부 CORRECT. 용어·잭팟 정확·헷지.
- ★**§13 오류 1건 잡아 수정(팩트체커)**: 2008 WSOP 유명사례를 "flopped quad aces"로 오기→실제는 Motoyuki Mabuchi가 플랍 셋(A♥9♣Q♦)+**리버 A♦로 쿼드 완성, 그 A♦가 Justin Phillips K♦J♦를 로열플러시(10-J-Q-K-A♦)로 완성**. 인물명·카드·리버 전개 정확 반영(검증 소스). 마퀴 클레임이라 치명적일 뻔.
- 첫링크=holdem-cooler(대칭쌍). fish·pot-odds·tiebreak 연결. 인라인썸네일(cooler·pot-odds)·:::readnext 2카드·Related 4카드.
- 빌드 ✅ **"64 intl posts"**(63→64). category=strategy. desc 157자. 커밋 9dc1bab. **다음**: Glossary 계속(slow roll 590·nuts·tilt) or 허브 holdem-glossary. ⚠️ **커서 히어로 이미지 1개 생성 필요**: `holdem-bad-beat-hero`(리버 카드 공개에 머리 감싸쥔 플레이어=석아웃 순간). 본문 2개는 cooler-vs-badbeat·button-dealer-board 재사용.

### EN Glossary #4 — holdem-cooler (What Is a Cooler in Poker) 신규
- **필라6 Glossary 4번째**(fish에 이어 같은 세션). cooler=390/mo. 적대적 서브에이전트 SERP Top10+PAA 조사 후 착수.
- 타깃: what is a cooler·cooler vs bad beat·poker setup·got coolered·set over set·is KK vs AA a cooler·can you avoid a cooler·is a cooler always all-in. H2 8개 + FAQ 8(PAA 정확매칭).
- **차별화 시그니처 3개**: ①**cooler vs bad beat 나란히 비교표**(#1갭: 대부분 혼용 → cooler=뒤진채 못접음/석아웃없음, bad beat=앞선채 역전당함, "same cards opposite stories" 플립 예시) ②**"쿨러 패밀리" 통합표**(KK vs AA·셋오버셋·플러시오버플러시·풀하우스·boat vs quads·스트레이트오버스트레이트, 각각 왜 못접나) ③**"'쿨러였어'가 변명일 때"** E-E-A-T 리트머스(888식: 같은정보로 또할까? YES=쿨러 NO=미스플레이).
- **품질: 적대적 팩트체커 + §13 핸드검산 = ALL CORRECT**. 셋오버셋(7♣7♦ vs J♠J♥, 보드 J♦7♥2♣5♠Q♦ → 7-7-7-Q-J vs J-J-J-Q-7, **정확히 1아웃=7♠** 검증)·KK vs AA ~4.5:1·AA vs 77 ~80%·bad beat 플립 전부 정확. 용어(setup·coolered·cold deck 사기유래) 정확. 발행가능 판정. 비블로킹 "95%"→"vast majority" 다듬음.
- 첫링크=holdem-tiebreak-rules(쇼다운 승자판정). fish(Glossary 상호링크)·pot-odds·position-play·straddle 연결. 인라인썸네일(fish·pot-odds)·:::readnext 2카드·Related 4카드.
- 빌드 ✅ **"63 intl posts"**(62→63). category=strategy. 커밋 7654d65. **다음**: Glossary 계속(bad-beat=cooler와 대칭 유력·slow roll 590·nuts) or 허브 holdem-glossary. ⚠️ **커서 이미지 2개 생성 필요**: `holdem-cooler-hero`(풀하우스 뒤집는데 상대가 더 큰 핸드 공개=coolered 순간)·`holdem-cooler-vs-badbeat`(쇼다운 두 강한핸드 공개). 본문 1개는 button-dealer-board 재사용.

### EN Glossary #3 — holdem-fish (What Is a Fish in Poker) 신규
- **필라6 Glossary 3번째**(straddle·rake에 이어). fish=390/mo·**LDA3 = 전 Glossary 최저경쟁** = 롱테일 1등 가장 빠른 타깃. 적대적 서브에이전트로 SERP Top10+PAA 전수조사 후 착수.
- 타깃: what is a fish·poker fish meaning·how to spot a fish·fish vs shark/whale/donkey·am i the fish·how to stop being a fish·"spot the sucker" 명언. H2 8개(정의·왜물고기·8가지판별신호·플레이어유형 통합표·명언출처·자가진단·탈출법·에티켓) + FAQ 8(PAA 정확매칭).
- **차별화 시그니처 3개**: ①**"포커 동물원" 통합 비교표**(fish/shark/whale/nit/donkey/calling station/reg/grinder/LAG·TAG를 한 표 = 경쟁사는 2~4개만 정의, Featured Snippet 미끼) ②**명언 정확검증**(경쟁사 다수가 Rounders 대사를 "fish"로 오인용 → 실제="sucker", 영화 이전 격언, 단일저자 없음, Amarillo Slim 2005판이 Buffett "million other fellows"에 크레딧 = E-E-A-T 킬러) ③**VPIP/PFR 자가진단표**(fish 40-70%/PFR<10% 시그니처).
- **품질: 적대적 팩트체커 = 사실오류 0건**. 최고위험(명언 인용·출처)·플레이어유형 정의·VPIP수치 전부 CORRECT. "경쟁사보다 정확하게 헷지" 평가. 선택보강 2건만 반영(솔리드VPIP 15-22% 정합·Slim 2005판 명시).
- **정확성 주의(§13 대신 용어정확성)**: whale=fish 부분집합(큰돈), nit≠fish(타이트), donkey=더 모욕적, LAG/TAG=이기는스타일. "don't tap the glass"(fish 겁주지마라) 커버.
- 첫링크=holdem-starting-hands-chart(fish 탈출=핸드선택, Glossary 허브 미발행이라 임시). straddle·pot-odds·position-play 상호링크. 인라인 썸네일 링크(starting-hands·pot-odds)·:::readnext 2카드·Related 4카드.
- 빌드 ✅ **"62 intl posts"**(61→62). category=strategy. 커밋 91c33bd. **다음**: Glossary 계속(cooler 390·slow roll 590·bad beat 320) or Strategy limping / 허브 holdem-glossary. ⚠️ **커서 히어로 이미지 1개 생성 필요**: `holdem-fish-hero`(느긋한 레크리에이션 플레이어가 칩 밀어넣고 샤크들이 조용히 관찰). 본문 2개는 기존 실사 재사용(pub-players-table·starting-hands-weak-ace-trap).

### KO 구버전 7글 EN체 구조 전환 + EN 완성 핸드오프
- **구버전 인포그래픽 글 7개를 최근 EN 구조로 통일**: 7poker·value-bet-sizing·cbet-strategy·range-meaning·tiebreak-rules·split-pot-rules·hand-rankings-confusing. 각 글: `keepImagesInBody:true`(하단 요약 인포그래픽 제거)·실사 히어로 상단·불릿→`:::stripe`·`:::faqcard` **31개 전부 제거**·본문 차트 인포그래픽 제거→맥락 실사·FAQ `### Qn`/`**Q.**붙은형`→EN식 `**Q.**/A.` 정규화·인라인 썸네일 링크 추가.
- **부수 발견**: cbet-table·range-position-table 이미지가 실제로 **블랙잭 테이블 사진**이었음 → 포커 실사(button-dealer-board)로 교체. §13 핸드 예시는 전부 보존.
- Playwright로 7글 전수 렌더 검증(오류 0, 완전렌더).
- **핸드오프 재구성**: 다음 세션 최우선 = **EN 포스팅 완성**(6필라, 우선순위=Glossary 계속·Strategy 착수). KO 수정은 후순위(틈틈이).

## 2026-07-04

### 전 글 표 정렬 통일 + KO readnext 전면 확대 (EN 기준화)
- **표 열 정렬(EN+KO 135표/37파일)**: 렌더러 블록 파서(:---: 반영) 기반 위에, 스크립트로 각 표 열 데이터를 분석해 숫자·%·금액·odds 열은 가운데, 라벨·문장·카드예시 열은 왼쪽으로 구분행 일괄 재작성. 이미 수동정렬(raise·rake) 제외. 데이터·구조 불변. 커밋 c8d8c75.
- **데이터표 형광 골드 테두리+글로우**(globals.css 전역, 속성선택자+!important) — 눈에 띄고 구분. 커밋 97f3549.
- **KO readnext 전면 추가**: EN 26개는 기존 완비. **KO NEW 30개**(e98783d)+**KO LEGACY 21개**(8892c87, posts.ts 세그먼트) FAQ 앞 :::readnext[이어서 읽기] 2카드 추가. 각 글 기존 내부링크에서 관련글 2개 자동 선정, 이미지 존재 검증. 후보부족 4개(KO NEW) 수동. 이로써 **전 글 readnext 완비**.
- 렌더러 개선 부수효과: 한글 셀 대소문자 헤더 휴리스틱 버그(모든 행이 헤더로 잡히던 문제) 해소.

### KO 고아 포스트 holdem-raise-how-much 완성·발행 (최근 EN 기준 업그레이드)
- **미발행 고아 포스트 발견·완성**: KO 모바일 감사 중 `holdem-raise-how-much`가 파일은 있으나 index.ts 미등록→404(고아) 발견. 최근 /en 품질 기준으로 재작성 후 등록·발행.
- **각도**: 룰(최소레이즈 증가분)+전략(오픈/3벳/4벳 사이즈) **원스톱 통합**(KO SERP 최대 공백 — 룰페이지는 increment만, 전략글은 배수만 분산). "레이즈 선언=최종 총액" 명확화.
- **구조 업그레이드**(구식→최근 기준): :::stripe·**시그니처 레이즈 치트시트표**(최소오픈/표준/3벳IP·OOP/4벳/C벳)·:::readnext·인라인 썸네일(blind-meaning)·FAQ를 **Q.**/A. 형식(8개, PAA 매칭)·이미지 필드·updated 갱신·경험담 상단 배치.
- **품질: §13 + 적대적 팩트체커** — 최소레이즈 증가분 산수(BB2→6오픈 증가분4→다음 최소10→14→18)·올인 미달 리오픈 규칙·3벳 IP3배/OOP4배·치트시트 전 수치 정확. 2건 정정: "BB가 1을 냈다"(글이 BB=2로 정의→"블라인드 SB1+BB2가 깔려")·"50%+ 언더레이즈=콜처리"→"풀 완성 강제 우선".
- **이미지 3개 완비**(커서, 가독성): 히어로(레이즈 칩 미는 순간)·minraise(칩 계단=증가분)·pub(한 동작 칩 푸시=스트링벳 방지). 첫링크=holdem-rules(필라).
- 빌드 ✅ **"52 blog posts"**(51→52). 커밋 575eee7·7760047.

### EN 블로그 모바일 최적화 감사 + 표 폭 수정 (Playwright 실측)
- **전 26개 EN 포스트 360/390px 실측 감사**(Playwright): 가로 오버플로우 **0/26**(치명버그 없음), 디렉티브(:::compare·:::card·:::readnext·rangechart)·TOC·FAQ·갤러리·본문이미지 전부 모바일 정상.
- **유일 실질 이슈 = 4~5열 데이터표가 좁아 억지 줄바꿈**(잘림 아님, scrollable≈0이나 열이 세로 타워로 답답). 시행착오: "스크롤 페이드 힌트" 시도했으나 스크롤 없는 표의 내용을 오히려 가림 → 실측으로 폐기.
- **최종 수정(공유 CSS 1줄, 전 포스트·전 언어)**: 모바일(≤639px) 골드박스 데이터표 좌우 패딩 20→8px(속성선택자+!important로 인라인 오버라이드). 표 폭 252→**276px(+24px)**, 마지막 열 완전 표시, 스크롤량 감소. 회귀검증: 오버플로우 0 유지·데스크톱 무영향. 커밋 ce1758d.
- 재사용 감사도구 `scripts/mobile-audit.mjs` 추가(커밋 40454b4). **결론: 모바일 기반 견고, 시스템 이슈는 표 하나뿐이었고 해결.**

### EN Glossary #2 — holdem-rake (What Is Rake in Poker) 신규
- **필라6 Glossary 2번째**. rake=1300/mo·LDA30 고볼륨 용어. 수익구조 직결(레이크가 저스테이크 승률을 결정).
- 타깃: what is a rake·rake explained·how does rake work·rake cap·time rake·rakeback·tournament rake·online vs live rake. H2 6개(정의·징수방식비교표·실제얼마내나·rakeback·토너먼트fee·온라인vs라이브)+FAQ 8(PAA 정확매칭).
- **차별화 시그니처 = 레이크 종류 비교표**(Pot rake/Time charge/Dead drop/Tournament fee × 징수방식·금액·보이는곳). Wikipedia 포함 아무도 통합표 없음. + "한 세션 실제 얼마" 실전계산(라이브$1/$2 $100+/hr) + **저스테이크 rake trap**($2캡~5bb/100 vs $4캡~8-9bb/100 = +8승률→-1) + 중립 rakeback(contributed vs dealt).
- **정확성 훅**: no-flop-no-drop="대부분(GGPoker는 프리플랍도 레이크)" 명시 = 경쟁사 누락 디테일.
- **품질: 적대적 팩트체커 검증** — 고위험4개(GGPoker·$100+/hr·rake trap bb/100·토너fee) 전부 CORRECT·적절히 헷지. 1건 교정: $100+$20(20% 비현실)→$100+$9(9%, 마이크로10%보다 낮아 대비 유지).
- 첫링크=tournament-vs-cash-game(레이크=캐시수익 vs 토너fee 구분). straddle "feeds the rake" 지점 역링크. 클릭강화(:::readnext straddle·tournament-vs-cash).
- 빌드 ✅ "51 blog posts + 61 intl"(intl 60→61). category=strategy. 커밋 0bd6200. **다음**: Glossary 계속(fish 390 LDA3·cooler 390·slow roll 590) or Strategy limping. ⚠️ **커서 이미지 3개 생성 필요**(가독성용): rake-hero(딜러 레이크 드롭)·rake-drop(팟에서 칩 스윕)·rake-lowstakes(작은팟 뜯김).

### EN Glossary 필라 첫 발행 — holdem-straddle (What Is a Straddle in Poker) 신규
- **필라6 Glossary 첫 개척**(Odds 필라3 허브+3클러스터 완료 후 새 광맥). straddle=2900/mo·LDA25·W3=2·미커버 = 로드맵 우선순위 #1(롱테일 1등 가장 빠른 필라).
- 타깃: what is a straddle·poker straddle rules·mississippi/button/sleeper straddle·utg straddle·how much is a straddle·is straddling profitable. H2 6개(정의·액션순서워크스루·종류비교표·금액·토너먼트금지·EV) + FAQ 8(PAA 정확매칭).
- **차별화 시그니처 = 스트래들 종류 비교표**(UTG/Mississippi/Button/Sleeper/Re-straddle × 누가포스팅·액션시작·프리/포스트플랍 마지막·옵션). 경쟁사(PokerNews·Upswing·888) 아무도 한 표로 안 정리 = Featured Snippet 미끼. + "누가 먼저/마지막" 워크스루(포럼 점유 니치 탈취) + 정직한 -EV 답변박스(GTO Wizard "No").
- **품질: 적대적 룰 팩트체커 검증** — 룰 전부 CORRECT. 2건 misleading 교정: ①림잇 레이즈캡="안 들어감" 단정→하우스룰 헷지(Wikipedia) ②스택압축 인과 거꾸로(낮은SPR 단독은 레인지 넓힘)→"팟배증+스틸포지션 남은플레이어+포지션잠식으로 15~20% 적게 오픈"으로 재서술.
- 첫 내부링크=blind-meaning(Glossary 허브 미발행이라 블라인드 개념으로 연결). blind-meaning straddle섹션에서 인라인 썸네일 역링크. 클릭강화(:::readnext blind·position-play).
- 빌드 ✅ "51 blog posts + 60 intl"(intl 59→60). category=strategy. 커밋 39b9844. **다음**: Glossary 계속(rake 1300·fish 390 LDA3·cooler 390) or Strategy limping.
- ✅ **본문 이미지 4개 완비**(커서 생성, 커밋 4fead82): 히어로=UTG 스트래들 칩포스팅, 액션순서=button-dealer-board(재사용), **버튼스트래들**(DEALER버튼+칩=포지션변형, Types섹션), **부풀린팟**(큰 중앙칩더미=-EV논지, Profitable섹션). 전부 언어중립·오버레이없음·≤60KB, 총 ~129KB. 기존 라이브러리엔 straddle 맥락 실사 없어 재사용 대신 맥락 신규 생성(억지 회피).

### EN Odds 클러스터 #3 — holdem-drawing-odds (Drawing Odds / Odds of Flopping X) 신규
- **Odds & Math 필라 클러스터 3번째 = 필라3 토픽오소리티 마무리**. 허브(probability)→pot-odds→outs에 이어 "확률 뒤의 유도 + 전략" 각도로 발행.
- **차별화 시그니처 = "Flop Lifecycle 통합표"** — 경쟁사(Upswing=flopping / Pokerology=completing)와 허브(두 표 분리)가 아무도 안 잇는 갭. 한 행에 made 플랍→draw 플랍→리버 완성까지 3열로 잇고, **조합론(C(11,3)/C(50,3)=165/19,600 식)을 본문에 노출**(E-E-A-T·§13 신뢰신호).
- 타깃: odds of flopping a set·flush·quads·straight flush·trips·full house / set mining / being dealt pocket aces·two players AA / complete flush·straight draw. H2 6개(lifecycle표·셋마이닝·플러시 3분할·스트레이트·희귀플랍·dealt) + FAQ 8(set vs trips·7-to-1 vs 1-in-8 스니펫미끼 포함).
- **⚠️ 중복 회피**: outs/pot-odds가 커버한 4-2룰·아웃츠 카운팅 **재설명 안 함** → 내부링크 위임. 신규 커버리지 = 셋마이닝 임플라이드오즈(스택 10~15배 규칙)·백도어 러너러너(4.2%)·set by river(19.2%)·two players AA(136-to-1).
- **품질: §13 직접검산 + 적대적 서브에이전트 = 22개 확률 ALL CORRECT**(C(50,3)=19,600 기반 전 조합론 독립 재검산). 팩트체커 지적 반영: 풀하우스 0.98%가 board-trips 포함임 명시, "flop a pair" 29→32%(at least a pair 정렬).
- 양방향 링크: 허브(probability "flop a set" 지점)·outs(intro)에서 인라인 썸네일 역링크. 첫링크=필라. 클릭강화(:::readnext 2카드→outs·pot-odds).
- 빌드 ✅ "51 blog posts + 59 intl"(intl 58→59). category=strategy. **다음**: 다른 필라 착수(Glossary straddle 2900 / Strategy limping 590).
- ✅ **본문 이미지 2개 완비**(커서 생성, 커밋 38ea336): 히어로=포켓5 셋마이닝 적중(5♠5♦+5♣K♥8♠, 도입부 경험담 일치), 플러시=하트4장 드로우(A♥K♥+Q♥7♥2♠). §13 카드검증 통과, 1200×675·33.5/37.3KB. 재사용 실사 2개(button-dealer-board·straight-example) 포함 본문 4이미지 ~134KB(≤200KB).

## 2026-07-03

### EN Odds 클러스터 #2 — holdem-outs (How to Count Outs) 신규
- **Odds & Math 필라 클러스터 2번째**. pot-odds(가격)의 상류 = "아웃츠 세는 법(counting)" 전용글. 토픽오소리티: 허브→클러스터 계속 채움.
- 타깃: how to count outs·what are outs·poker outs chart·flush draw outs(9)·straight draw outs(8)·gutshot(4)·dirty/tainted outs·outs to odds. H2 7개(정의·단계별카운트·드로우별 아웃츠표·아웃츠→배당 마스터표·4-2룰+오차보정·콤보겹침·더티아웃)+FAQ 8.
- **경쟁 갭 4개 공략**(리서치 서브에이전트 SERP/PAA): ①더티아웃 실전보드 예시(대형경쟁사 소홀) ②아웃츠 1~15 통합 변환표(치트시트 수요) ③4-2룰 고아웃 과대추정 오차컬럼(15아웃 룰60% vs 실제54.1%, 보정=×4−(outs−8)) ④콤보 겹침산수(플러시+양차=왜 17 아닌 15).
- **품질: §13 적대적 서브에이전트 검산 ALL CORRECT** — C(47,2)=1081 기반 7개 아웃카운트·턴/리버 양컬럼·배당·오차표·콤보(J♠T♠ on 9♠8♣2♠=15)·더티아웃 카드 전부 조합론 독립 재검산.
- 이미지: 히어로 slug-매칭(커서 생성 대기) + 본문 재사용 실사(reading-straight-example 8-high 스트레이트=언어중립 영어). 
- 양방향 링크: 허브(probability "counting outs" 지점)·pot-odds("Count your outs" 지점)에서 인라인 썸네일 역링크. 첫링크=필라. 클릭강화(:::readnext 2카드).
- 빌드 ✅ "51 blog posts + 58 intl"(intl 57→58). 커밋 603f936. **다음**: Odds 클러스터 계속(rule-of-2-and-4 or drawing-odds) or 다른 필라(Glossary straddle 2900). ⚠️ **커서 이미지 생성 필요**: /images/holdem-outs-hero.webp.

### EN Odds 클러스터 심화 — holdem-pot-odds (How to Calculate Pot Odds) 신규
- **Odds & Math 필라 클러스터 플래그십**(예약 필라 슬러그). 토픽 오소리티: 허브(holdem-probability) 발행 후 클러스터부터 채움.
- 타깃: pot odds·how to calculate pot odds·pot odds chart·implied odds·pot odds vs equity. H2 8개(정의 X-to-1·단계별계산·비율↔%·벳사이즈별 필요에쿼티표·드로우 클리어표·3개념 구분·4-2룰·초보실수+연속 실전핸드)+FAQ 8.
- 경쟁 갭: 벳사이즈→필요에쿼티 치트시트 통합, pot odds/equity/implied 3개념 구분표, 스트리트별 연속 실전핸드.
- **품질: §13+적대적 서브에이전트 18개 검산.** 리서치가 '2x팟=28.6%' 헷갈렸으나 검산=40% 정답. **워크드핸드 턴 오류 발견·정정**(팟사이즈 잼=3-to-1 오기→2-to-1/33%, 폴드결론은 동일).
- **신규 클릭강화 규칙 첫 실전적용**: 인라인 썸네일 링크(→확률 허브) + FAQ앞 :::readnext 2카드 박스. 확률 허브 pot-odds 섹션에서 역링크.
- 빌드 ✅ "51 blog posts + 57 intl"(intl 56→57). 커밋 ac3a93b. **다음**: Odds 클러스터 계속(outs·rule-of-2-and-4·drawing-odds) or 다음 필라.

### EN Phase 1 신규 필라 발행 — holdem-probability (Poker Odds & Probability Chart)
- **EN 6필라 Odds & Math 허브 신규 발행**(로드맵 Phase 1, LDA11=신규 중 최고승산). 종합 플래그십 1편.
- 타깃: odds of hands(1600)·poker hand probabilities(1300)·poker odds chart(390)·odds of a straight flush(880)·royal flush odds 등. H2 8개(족보확률차트 5장vs홀덤 나란히·스타팅핸드오즈·**플랍 오즈 통합표**·드로우 아웃츠표·4-2룰·팟오즈 워크드예시·로열/스트플 희귀도·롱샷) + PAA 정확매칭 FAQ 8개.
- 경쟁 갭 공략: 5-card/7-card 명확구분·"flopping X" 단일표(경쟁사는 분산)·매 숫자 평문해석·outs+4-2룰+팟오즈 한 페이지 통합.
- **품질: §13 + 적대적 서브에이전트 2회 — 확률 35개 전부 조합론 독립 재검산 ALL CORRECT**(C(52,5)/C(52,7)/C(50,3)/1326). SERP·PAA 리서치 서브에이전트 선행.
- 이미지: slug-매칭 히어로 신규 생성(칩 실사 1200×675 24KB) + 본문 재사용 실사 2개. ⚠️ blog-premium-hands-cards는 **한글 깨진 오버레이** 발견→제외(pot-odds-chips-visual은 영어 CALL만이라 사용).
- 양방향 링크: hand-rankings("pure probability" 지점)·starting-hands-chart(suited FAQ)에서 역링크. intl-links 검사 통과.
- 빌드 ✅ "51 blog posts + 56 intl"(intl 55→56). category=strategy. 커밋 bcad393.
- **다음**: GSC 색인요청 `/en/blog/holdem-probability`. Odds 클러스터 계속(pot-odds·outs·4-2룰 전용글) or Glossary 플래그십(straddle 2900).

### EN Phase 0 착수 — holdem-hand-rankings 정확매칭 FAQ 10개 강화 (집필 세션)
- **EN 6필라 집필 시작**. 로드맵 Phase 0(최고 ROI) = 기존 랭크·GSC권위 페이지에 **정확매칭 PAA FAQ만 추가**해 ~17k 볼륨 흡수(신규 페이지 X, 리스크 최소).
- `holdem-hand-rankings`에 FAQ 10개 추가: ①정의형 what is a flush(5400)·full house(4400)·straight(2900) ②What beats a X: straight(1000)·flush(590)·full house(880)·royal flush(170·"nothing" 훅)·straight flush(140) ③룰 three pairs(70)·ace as a 1=wheel(40). 기존 FAQ와 중복 없음(Does a flush beat a straight 등과 별개 쿼리).
- **§13 검산 + 적대적 서브에이전트 검증 = ALL CORRECT** (KKK-22>QQQ-AA 트립스 우선, wheel 최저·K-A-2-3-4 불가, 3장 same-suit≠SF 등 전부 확인). updated 2026-07-03.
- 빌드 ✅ exit0 / 배포 ✅ (e06ed4c). 발행 현황 불변: 한국어 51 + 영어 20.
- **다음**: GSC 색인 재요청(/en/blog/holdem-hand-rankings) → Phase 1 Odds 확률차트(holdem-probability 신규, LDA11 최고승산) or Glossary 플래그십.

### EN 6필라 기획 확정 + lowfruits 키워드 수확 + 발행 로드맵 (오후 세션)
- **EN 6필라 독립설계 확정**(KO 복제 X, pub-guide 제외): Rules·Hand Rankings·Odds&Math(신규 holdem-probability)·Strategy(신규 holdem-strategy)·Tournament·Glossary(신규 holdem-glossary). 목표=롱테일 구글1등, EN마스터→12언어 번역. 문서: `docs/en-blog-pillar-cluster-map.md`
- **현재 EN 20개 내부링크 트리 실측**: hand-rankings(피링크10)·rules-for-beginners(아웃허브11)가 실질 필라, 전략필라 껍데기, wpt/ept 고아링크 확인
- **lowfruits 6시드 수확·분석**(~1,130키워드): what is a */odds of */what beats a */when to */poker tournament */can you * in poker. 승산=LDA+weak-spot. 뱅크 6개 `docs/keyword-bank/en-*.md` + 종합 로드맵 `00-SYNTHESIS-roadmap.md`
- **크로스필라 발견**: limping590·nuts·bad beat jackpot·cash game신호·count cards
- **낡은 기획 정리**: `docs/global-holdem/PROJECT.md`·`PILLAR-CLUSTER-ROADMAP.md` 삭제(URL스킴 안맞음). SEO-COPYWRITING-GUIDE.md는 유지
- **다음 세션 = 집필 시작**: Phase 0(hand-rankings FAQ 강화 ~17k볼륨) → Phase 1(Odds차트·limping·glossary 플래그십). 워크플로우=필라단위 스프린트(리서치 병렬/초안 Claude 1편씩/검증 서브에이전트/이미지 커서)

### 트레일링 슬래시 전수점검 (EN 클린 / KO 65개 정정)
- EN 20개 전수 스캔: 트슬래시 0·raw img 전부 lazy = 클린 확인
- **KO 51개 스캔에서 내부링크 trailing slash 65개 발견** → 9개 파일 sed 일괄 제거(301 방지). buy-in-cost 14·schedule-check 13·tax-guide 9·masters-7th 7·posts.ts 6·ggpoker-wsop 5·tournament-vs-cash 4·apt-jeju-fall 4·appt-satellite 3. + masters-7th 일정표 img lazy 1개 보강. 링크전용이라 updated 미갱신

### 영어 포스트 SEO 강화 (11~20편째, Claude Code 세션)
- korea-poker-marathon-2026(20편째·이벤트가이드·마지막): **웹 교차검증** — Chuncheon Oct25(공지천교·접수7/14)·JTBC Nov1·APT Jeju Sep25-Oct7·Suga 일화 전부 실제 확인. **APT Jeju 사실정정**: 미확인 'Main $1.5M GTD/KRW2.2B'→확정 '$3.5M+ 총GTD·136events', 'schedule TBA'→발표됨. 트슬래시 6개. 갤러리 raw img 5개 lazy. 히어로 84.5→72.6KB. → **EN 이벤트가이드 4개 전부 완료**
- ept-barcelona-2026-guide(19편째·이벤트가이드): **웹 교차검증** — 전 이벤트 날짜가 공식 PokerStars Live와 100% 일치(ME Aug22-29 등), 2025 데이터(Eychenne 우승·€1,217,175·2,045엔트리)도 일치. 정밀정정: '3rd largest in EPT history'→'EPT **Barcelona** history'(소스는 바르셀로나 한정 기록, 2곳). 트슬래시 3개. 히어로 91.5KB→1200×675 75.5KB. **본문 이미지 2→4개 추가**(커서): Power Path 사다리 인포그래픽(5단계 $0.50~Gold Pass 숫자검산, 1회 교정) + 포트올림픽 주간 실사
- wpt-australia-2026-guide(18편째·이벤트가이드): **웹 교차검증 철저**. ★사실정정: WPT Australia Championship 날짜 Sep 23–30→**Sep 24–30**(4곳, WPT공식·PokerTube 확인). 비자 표 마크다운 깨짐(`||`·구분행 누락) 복구. 트슬래시 3개 제거. 속도: 히어로 92.1KB·floor 88.7KB → 1200×675 리사이즈 74.7/76.3KB. Prime·Ladies·36events 등 나머지 정보 재확인 일치
- apt-incheon-2026-guide(17편째·이벤트가이드): 대회 사실 **웹검증 통과**(날짜·바이인·GTD·이벤트라인업 전부 일치). **속도**: 갤러리 raw `<img>` 8개에 loading=lazy 추가(마크다운 이미지는 renderMarkdown이 first-eager/rest-lazy 자동처리, raw img는 미적용이었음). 이미지 12개 667KB→lazy로 초기로드 축소. ⚠️ 다른 이벤트가이드(wpt·ept·korea-marathon)도 raw img lazy 누락 가능성
- holdem-position-play(16편째·**포지션 필라**): 정밀검수(17분 심층글). **본문 이미지 2→4개 추가**(커서 생성): 오프닝레인지 9좌석 인포그래픽(숫자·시계방향 좌석순서 §13 검산, 2회 교정) + 버튼 블라인드스틸 실사. 마크다운 삽입은 Claude가 정위치 처리. **현지화 누수 교정** — 영어 글에 ₩10/₩20(원화)·"holdem pub" 혼입 → $1/$2·generic live game으로 교정(도입부 경험담 유지). PAA FAQ 추가(early/middle/late 3분류=경쟁 공통 프레이밍). 검산 통과(포지션순서·플러시드로우·equity 85-100/60-85%). 이미지 IP/OOP 인포그래픽 영어·수치정확 확인
- holdem-tournament(15편째·**필라**): 필라 정밀검수. **trailing slash 4곳 제거**(tournament-vs-cash·starting-hands-chart·rules-for-beginners·본문 비교링크 → 301 방지). 클러스터 허브 강화(블라인드레벨 섹션→blind-meaning 본문링크, Related 카드 3→5개 blind-meaning·positions 추가). PAA FAQ 2개(late reg 중도입장·중도이탈시 칩 소멸=캐시게임 오해해소). 검산 통과. 속도: 히어로 LCP 81.8→78.3KB 재압축(≤80KB 준수). ⚠️ 별도 요청으로 tournament-vs-cash 본문 이미지 3개 820→1200px 업스케일도 진행(5490918)
- holdem-tournament-vs-cash-game(14편째): 이미 16분 심층글 → 최대 레버리지 2가지 공략. 토너먼트 필라(holdem-tournament) 내부링크 본문+Related 카드 신설(클러스터 권위 집중). PAA FAQ 3개(pros play which·what is the bubble·more profitable per hour). 검산 통과. 속도점검 통과(본문 이미지3개 총 ~50KB 경량)
- holdem-blind-meaning(13편째): **핵심 키워드**('poker blinds'). SERP·PAA 조사로 경쟁 글 대비 갭 2건 신규 섹션화 — 헤드업 블라인드(버튼이 SB·프리플랍 선행)·미스드/입장 포스팅(dead SB·live BB). FAQ 2개(heads-up·miss blind). desc ~220→~155자 CTR 조정. **이번 검수부터 속도점검 항목 추가**(히어로 30KB·본문2개 총 ~64KB·1200×675·LCP priority 자동=통과)
- holdem-split-pot-rules(12편째): **실제 SERP·PAA 조사** 후 강화. §13 상황5 '킥커까지 동일' 예시가 하이카드였음→실제 원페어 타이(보드 A♦Q♠9♣6♥2♠ AK vs AK → A-A-K-Q-9)로 정정, 전 예시 검산 통과. 경쟁1위 PokerNews 미커버 갭 공략: 토너먼트 chop(딜)vs자동 split 분화 FAQ(+tournament-vs-cash-game 링크)·'call to win split pot' 전략 롱테일·odd chip 무늬 뉘앙스. 히어로 이미지(888AK 촙) 정합 확인
- holdem-tiebreak-rules(11편째): §13 전체 핸드 검산 통과(킥커 A♠K♦vs A♥9♣·투페어 KKQQ·풀하우스·스플릿 K-J-3 보드 A-K-Q-Q-J·보드플레이 A-A-K-Q-J 오류無). 이미지 3개(hero·best5·split) 맥락·용량·영어라벨 점검 OK. 내부링크 정밀화(starting-hand selection→holdem-starting-hands-chart 전용 글). 롱테일 FAQ 2개 추가(같은 투페어 승자 / 같은 스트레이트·플러시 촙). updated 갱신
- 발행 현황: 한국어 51 + 영어 20 (build "51 blog posts + 55 intl")

## 2026-07-02

### 영어 포스트 SEO 강화 트랙 시작 (Claude Code 세션)
- texas-holdem-rules-for-beginners: EN SERP·PAA 재조사 → 롱테일 갭 2개 신규 H2(How Many Players·헤드업 블라인드 역전 / No-Limit·Limit·Pot-Limit 포맷), 미사용 EN 클러스터 내부링크 3개(flush-vs-straight·reading-the-board·tournament-vs-cash-game), FAQ 롱테일 3개
- holdem-hand-rankings: **§13 사실오류 정정** — Puzzle 2 보드 7♥8♥9♥10♥J♠+K♥를 "스트레이트플러시"로 오기(실제 K-high 플러시) → 홀 6♥로 교체해 진짜 ten-high 스트플로 수정. trailing slash 3곳 제거, FAQ 롱테일 2개
- holdem-game-order: 신규 H2 "Who Acts First on Each Street?"(최상위 PAA·헤드업 예외) + 미사용 클러스터 내부링크 5개(blind-meaning·starting-hands-chart·betting-actions·showdown-rules·all-in-rules). §13 전체핸드 예시·팟산수 검산 통과
- holdem-positions: 이미지 점검 후 9-Max Seat Map 섹션에 딜러버튼 풀테이블 실사 추가(본문 이미지 1→2), trailing slash(position-play) 정리. 콘텐츠 이미 충실해 유지
- holdem-betting-actions: §13 min-raise 예시 모호성 정정(포스트플랍 클린 예시+프리플랍 주석), trailing slash 5곳 제거, 내부링크 3개(all-in-rules·positions·hand-rankings), 본문 이미지 0→1(칩스택 실사), FAQ "limp 뜻" 롱테일
- holdem-flush-vs-straight: **§13 사실오류 정정** — Spot2 "또 하트=straight flush" 과잉주장(실제 6♥만 SF)→정정. reading-the-board 링크, FAQ "Does a straight beat a flush?" 역방향 롱테일. 이미지 3개 정밀 일치 확인
- holdem-showdown-rules: seoTitle CTR 샤픈("Who Flips First?"), trailing slash 4곳 제거, 내부링크 2개(all-in-rules·game-order), FAQ "win without showdown" 롱테일. 이미지 4개 정밀 일치 확인
- holdem-all-in-rules: 룰·수학 오류 없음(사이드팟·TDA47/16 웹검증). seoTitle/desc CTR 개선, 본문 내부링크 0→3, slash 3곳. 이미지 4개 정밀 일치
- holdem-starting-hands-chart: **§13 AK 에쿼티 오류 정정**(모든 페어 상대 코인플립, 66↓ clear favorite 아님). :::rangechart::: 인터랙티브 삽입, 내부링크 2(hand-rankings·betting-actions), slash 5곳. **커서 신규 EN 실사 2개 추가**(프리미엄핸드 AA·KK·QQ·AKs / A♣4♦ 함정 vs A♠K♦, §13 카드검증 완료)
- holdem-reading-the-board: **§13 플러시 스페이드 개수 오류 정정**(보드 3스페이드+A♠=4장인데 "3 total"로 오기, 이미지와 불일치→정정). 내부링크 2(split-pot·hand-rankings), slash 3곳. 이미지 4개 카드검증
- 빌드: ✅ 51 blog posts / 배포: ✅ Vercel (…·1f120ab·2d8206b)

### 블로그 CTA 3종 강화 배포
- 다음 글 버튼: 금색 그라디언트 대형 CTA 버튼으로 교체
- 이전 글 버튼: 테두리 카드형으로 정돈
- 관련 글 섹션: 이모지 박스 → 히어로 이미지+카드형 그리드 (이미지 없으면 이모지 폴백)
- 모바일 스티키 CTA: 스크롤 60% 이후 하단 고정 바 (xl 이상 숨김)
- 빌드: ✅ 51 blog posts / 배포: ✅ Vercel

### SEO 검수·강화 대량 배포 (Claude Code 세션)
- 족보 클러스터 4개 §13 사실오류 정정: 스트레이트플러시 오류, 플러시/스트레이트 혼동, "마운틴=로열플러시" 오기 → 정정. 별명표·PAA FAQ·신선도 강화
- holdem-starting-hand-range: 플러시확률(완성 0.8%/드로우 11%) 정정, 이미지 맥락 교체(칩스택·깨끗한 포지션도), seoTitle CTR 강화
- CTR/검수: when-to-fold, holdem-tournament-how-to-enter(trailing slash 22개 정리), apt-incheon-2026(Event JSON-LD), wsop-2025(결과 recap 전환), /tournaments(신선도)
- 디자인: 인라인 링크 형광 붓칠(5색)+밑줄, :::eventcta::: 컴포넌트 신설
- 규칙: posting.mdc를 포스팅·콘텐츠 단일 마스터로 통합 + 포스트 작업 시 자동 읽기(CLAUDE.md) + 검수 체크리스트(SEO 메타 CTR 1순위)
- /hand-chart 세련 개편 + 모바일 최적화 + 내부링크(양방향)
- 8/16 APT 인천 대회 후 자산화 클라우드 알림 예약
- 빌드 ✅ / 배포 ✅

---

## 2026-07-01
### 작업 내용

#### holdem-rules 검수 수정
- 리레이즈 최소 금액 계산 오류 수정: UTG 6,000 오픈 예시에서 12,000 → 10,000원 (증가분 4,000 기준)
- 규칙 bullet 수정: "직전 레이즈 금액 이상" → "직전 레이즈 증가분 이상" (표현 명확화)
- 내부 링크 6개 유효성 확인 ✅ / 이미지 4장 용량 확인 (54·39·42·37KB, 모두 60KB 이하) ✅

#### P2 필라 포스트 발행
- `holdem-rules` 발행 — 텍사스 홀덤 규칙 완전 정복 (18분, 이미지 4개, FAQ 6개)
  - "홀덤 룰" SERP Top6 경쟁 분석 캔버스 작성 (holdem-rules-serp-analysis)
  - 번 카드(Burn Card) 설명 + 포지션 중요성 추가
  - 히어로 이미지 교체: 딜러버튼·SB·BB 위치·행동순서 인포그래픽 (54KB)

#### SEO 구조 개선 — 앱 페이지 카니발라이제이션 해소
- `/rules/texas-holdem`: **noindex** 추가 + 하단에 `/blog/holdem-rules` 링크 추가
- `/rules`: 메타 타이틀·설명 추가 ("포커 게임 종류별 규칙 허브"로 차별화)
- `/rules`: 텍사스 홀덤 섹션 내용 차별화, 모든 texas-holdem 링크 → `/blog/holdem-rules` 교체
- `/rules`: 액션·베팅라운드 섹션 간략화 (상세 설명 제거 → 블로그 링크)
- `/hands`: **noindex** 추가, trailing slash 버그 수정

### 발행 현황
- 한국어 총 포스트: **51개** (필라 포스트: 3개 — holdem-hand-rankings, holdem-probability, holdem-rules)
- 영어 포스트: 20개

### 앱 페이지 색인 현황
| 페이지 | 구글 색인 | 비고 |
|--------|----------|------|
| `/rules` | ✅ 색인 | "포커 게임 종류" 허브 |
| `/rules/omaha` | ✅ 색인 | 블로그 없음, 18위 |
| `/rules/seven-card-stud` | ✅ 색인 | 블로그 없음 |
| `/rules/texas-holdem` | ❌ noindex | `/blog/holdem-rules`로 역할 이전 |
| `/hands` | ❌ noindex | `/blog/holdem-hand-rankings`로 역할 이전 |

---

## 2026-06-25

### 작업 내용
- 폰트 대규모 통일: font-serif → sans-serif (Inter + Noto Sans KR), brush-hl font-weight 제거, Noto Sans KR 800/900 추가, 본문 bold font-semibold로 조정
- 신규 포스트 발행: holdem-community-event-guide — 홀덤 커뮤니티 추천 + 주간 이벤트 안내

### 발행 현황
- **한국어 포스트: 50개** (목표 달성 🎯)
- 영어 포스트: 20개

---

## 2026-06-24

### 작업 내용
- wsop-2026-tournament-guide 검수: trailing slash 5곳, FAQ A. 접두어, 종료 이벤트(#50·#63), keepImagesInBody, 사실오류(딜러→서빙직원) 수정
- 피드 PAGE_TEASERS 누락 페이지 4개 추가 (tournaments/rules/strategy/holdem-practice) + 기존 6개 trailing slash 제거
- 블로그 본문 폰트 EB Garamond → Noto Sans KR 변경, 텍스트 색상 #111111(검정) 고정
- 이벤트 탭 추첨 일정 안내 추가: "매주 일요일 오후 7시 KST 비트코인 블록 해시 자동 추첨" (12개 언어 + 현지 시간 자동 변환)
- 블로그 진입 시 스크롤 상단 강제 이동 버그 수정 (피드 클릭 시 중간부터 보이던 문제)
- 모바일 피드 무한스크롤 구현: PAGE_SIZE=20, IntersectionObserver, rootMargin 400px 선제 로드
- 블로그 전체 디자인 리뉴얼: 크림 테마(globals.css), BlogTopBar 공용 컴포넌트 신설, 한국어·영어 max-w-6xl 통일
- PPT 스타일 신규 마크다운 컴포넌트 추가: `:::card`, `:::steps`, `:::compare`
- 신규 포스트 발행: `holdem-bankroll-management`
- `holdem-blind-meaning` 포스트 스타일 표준화
- `.cursorrules` 구조 재편 → `.cursor/rules/` 3개 파일로 분리

### 발행 현황
- 한국어 블로그: **49개** (LEGACY 21 + NEW_POSTS 28) / 영어: 20개
- 목표 50개까지 한국어 **1개 남음**

---

## 2026-06-23

### 작업 내용
- **★ 클로드코드 이관 준비**: `CLAUDE.md`·`session-handoff.md`·`WORKLOG.md` 전면 최신화 (인수인계용 노하우 추가)
- `holdem-tiebreak-rules` 사실 오류 수정: WORST 실수 1 보드 Q♣J♥10♦9♠8♥→10♣9♥8♦7♠6♥ (K가 보드에 연결돼 K-K 단독승리가 되던 오류 → 진짜 스플릿 팟으로 정정) (커밋: `5eb9d18`)
- `holdem-3bet-strategy` 검수 및 수정: updated 날짜 갱신, mistakes/faq 이미지 압축, defense/squeeze 플레이스홀더 이미지 신규 제작 (46KB·39KB) (커밋: `ccedbc4`, `4adc84d`)
- `apt-incheon-2026-guide` 검수 및 수정 (커밋: `c3b55ae`): trailing slash 4개, OnLive Day3→Day2 오류, updated 날짜
- `/tournaments` 검수 및 수정 (커밋: `9dcea52`): trailing slash 16개 제거, 한게임 운영사 '카카오게임즈→NHN' 정정, dateModified·기준일 업데이트
- 홈 피드 에디토리얼 크림 디자인 시도 후 revert — 기존 다크 피드 UI로 복원 (커밋: `ffa02d0`)
- GSC 분석 기반 EN 포스트 SEO 강화: `/en/blog/texas-holdem-rules-for-beginners` (커밋: `71487b8`, `382f1d3`)
  - seoTitle에 "how to play texas holdem for beginners" 메인 키워드 포함, desc에 "dummies" 롱테일
  - Quick Answer 7단계 리스트(Featured Snippet), 4티어 핸드 차트, 포지션·팟오즈·룰오브2&4 섹션 추가
  - 검수 후 BTN/SB 포지션 순서 오류·high card 잘못된 조언 수정, trailing slash 6개 제거

### 특이사항
- **포커 핸드 예시 사실오류 교훈**: AI가 그럴듯해 보이는 보드를 생성하면 베스트 5장 검산 없이 통과시키면 안 됨. 앞으로 모든 핸드 예시는 7장→베스트5장 명시적 검산 필수 (tiebreak 오류가 클로드코드 검수에서 발견됨)

### 발행 현황
- 한국어 블로그: **48개** (LEGACY 21 + NEW_POSTS 27, sitemap 기준) / 영어: 20개
- 목표 50개까지 한국어 2개 남음

---

## 2026-06-21 (9차)

### 작업 내용
- 버그 수정: OAuth bad_oauth_state 시 홈 화면 크래시 → `/login?error=oauth` 리다이렉트로 안내 메시지 표시
- 버그 수정: 채팅 탭 전환 시 Realtime 채널 중복 구독 에러 수정
- 버그 수정: 닉네임 수정 input `defaultValue`→`value` 제어형으로 변경 (타이핑 포커스 유실 해결)
- UI 개선: `/blog/` 경로도 `isFeedAppRoute`에 포함 → 블로그 클릭 시 옛 헤더 안 보임
- 기능 추가: 앱 라우트 6개를 피드 카드로 노출 (족보·핸드차트·계산기·퀴즈·용어사전·홀덤펍)
- 기능 추가: 채팅 탭 상단 툴 배너 (계산기·퀴즈·핸드차트·족보·용어사전)

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

---



### 작업 내용
- Google OAuth 소셜 로그인 추가: 로그인 페이지에 "Google로 계속하기" 버튼 추가
- Supabase Authentication → Google Provider 활성화 + Client ID/Secret 설정
- Google Cloud Console OAuth 앱 게시 (테스트 모드 → 프로덕션)
- 뒤로가기 시 "처리 중..." 고착 버그 수정 (useEffect로 상태 초기화)
- 카카오 로그인 버튼 제거 (요청)

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

---



### 작업 내용
- 유저 참여 UI 전환: 피드의 탐색(Explore) 탭 → 실시간 채팅(Chat) 탭으로 교체
- `app/community/chat-tab.tsx` 신규 생성: Supabase Realtime (`postgres_changes` INSERT) 글로벌 단일 룸
- `supabase/schema.sql`: `chat_messages` 테이블 + RLS (비로그인 읽기 허용, 로그인 유저만 전송) 추가
- 13개 언어 LABELS에 `chat` 키 추가 (explore/trendingExplore 제거)
- 모바일 하단 네비·데스크탑 헤더·사이드바 탐색 → 채팅 아이콘(💬) 으로 교체

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

### 특이사항
- Supabase 대시보드 → SQL Editor에서 `supabase/schema.sql` 마지막 섹션(7. chat_messages) 실행 필요
- Supabase 대시보드 → Database → Replication에서 `chat_messages` 테이블 Realtime 활성화 필요

---

## 2026-06-21 (6차)

### 작업 내용
- 보안 패치: 번역 API 로그인 필수 + 3,000자 제한 + target 화이트리스트
- 보안 패치: `/auth/callback` Open Redirect 차단 (`safeNext` 검증)
- 보안 패치: `submitEventEntry` 번호 1~45 서버 검증 + `is_eligible` 하드코딩 제거
- 길이 제한: 게시글 5,000자 / 댓글 1,000자 / 제목 100자

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

---

## 2026-06-21 (5차)

### 작업 내용
- 홈 단순화: 홈(`/`)·로그인·글상세에서 옛 사이트 헤더/푸터 숨김 (`site-chrome.tsx` `isFeedAppRoute` + `MainContent` 래퍼) — 블로그 등 SEO 페이지는 헤더 유지
- 블로그→피드 통합: 블로그 글 전체(`POSTS`)를 "티저 카드"로 홈 피드에 자동 노출, `전체 읽기 → /blog/[slug]` 연결 (목업 "어드민 티저 카드" 구현)
- `FeedPost`에 `blogSlug/category/readTime` 추가, `post-card.tsx`에 티저 카드 렌더 분기, 유저 글 초록 테두리로 시각 구분
- 다국어 피드 3개 신설: `/en` `/ja` `/zh` — 각 locale 번역 블로그 티저(`postsForLocale`) + 커뮤니티 글 혼합, `pageLocale`로 UI 언어 고정, 옛 헤더 숨김 처리
- 디자인 레퍼런스: `cursor-discussion-v1/design-ref-*.tsx` 8종 기준

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

---

## 2026-06-21 (4차)

### 작업 내용
- Phase 4: 홈 피드 통합 — `holdemmaster.com/` 이 커뮤니티 피드로 전면 교체
- `app/page.tsx` 커뮤니티 서버 로직으로 교체 (force-dynamic, Supabase 인증)
- 라우트 이동: `/community/login` → `/login`, `/community/post/[id]` → `/post/[id]`, `/community/auth/callback` → `/auth/callback`
- `next.config.mjs`: `/community`, `/community/:path*` → 301 영구 리다이렉트 추가
- `middleware.ts`: 매처 `/community/:path*` → `/, /login, /post/*, /auth/*` 업데이트
- `community-cta.tsx`, `post-card.tsx`, `actions.ts`, `community-client.tsx` 내 경로 전부 업데이트
- 브랜치 `feature/homepage-to-feed` 커밋·푸시 완료

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

---

## 2026-06-21 (3차)

### 작업 내용
- 커뮤니티 UI 다국어 전환: `community-client.tsx`에 LABELS 객체(ko/en/ja/zh) 추가, `getL(myLanguage)` 자동 전환
- Blog → Community CTA 신설: `components/community-cta.tsx` (13개 언어 현지화 카피)
- 한국어/다국어 블로그 포스트 하단에 CommunityCTA 삽입 (blog-post-client.tsx, intl-blog-post-client.tsx 전체 적용)

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

---

## 2026-06-21 (2차)

### 작업 내용
- 커뮤니티 Phase 2 (feature/community 브랜치): 피드 카드 카드형 레이아웃 재구성(`post-card.tsx` 컴포넌트 분리)
- 글 상세 페이지 신설 `/community/post/[id]` + 댓글 작성/표시/삭제 (`addComment`/`deleteComment` 액션)
- 다국어 피드: 자국어 밝게/타언어 흐리게 + Gemini 번역 버튼 (translations 캐싱)
- Gemini 번역 API 라우트 `/api/community/translate` (gemini-2.5-flash, thinking off, 포커 용어 원어 유지 시스템 프롬프트) — 로컬 테스트 통과
- Explore 탭 [전략 포스팅]/[커뮤니티] 서브탭 필터, 프로필 탭(내 글·받은 좋아요·댓글 수·뱃지) 구현
- 번역 캐시 쓰기용 service role 클라이언트 추가(`lib/supabase/admin.ts`, 키 없으면 캐싱만 생략)

### 특이사항
- 기존 /blog·SEO 라우트 영향 없음 (middleware는 /community/* 한정). 빌드 통과.
- 배포 전 필요: Vercel `GEMINI_API_KEY`(필수), `SUPABASE_SERVICE_ROLE_KEY`(선택, 번역 캐싱용) 환경변수 추가

---

## 2026-06-19

### 작업 내용
- 신규 EN 글 발행: `korea-poker-marathon-2026` — Korea Run + Play 2026: Marathons & Poker in One Trip
- 춘천마라톤(10/25), JTBC 서울마라톤(11/1), 가민런코리아(11/15), YTN 서울투어마라톤(9/6) 외국인 등록 가이드 포함
- BTS 슈가 Bay to Breakers 참가(2026.5.17) 훅으로 활용 — 포커+러닝 오버랩 오디언스 타깃
- "춘천마라톤 → 파라다이스시티 당일 이동 가능" 동선 설명 포함
- `apt-incheon-2026-guide` 오타/사실 검수: AREX 43분(홍대 오류)→ Express(서울역 43분)/All-Stop(홍대 60분) 분리 수정, desc 156자로 트림, Takeaways "5분"→"10분" 수정
- 실사진 8장 추가: 홍대입구역, 올리브영, 명동교자·공항버스·명동거리 3장, 청계천 3장 (480px, 28~73KB)
- Seoul Day Trips 섹션 교통편 표 추가 (AREX Express/All-Stop 분리), 명동→청계천 10분 동선 명시

### 발행 현황
- 총 포스트: 31개 (목표 50개까지 19개 남음)

---

## 2026-06-18 (4)

### 작업 내용
- 신규 EN 글 발행: `apt-incheon-2026-guide` — APT Incheon 2026: Poker Festival + Korea Travel Guide
- APT 인천 2026 상세 정보 (Aug 7–16, Paradise City, $2.7M GTD, Main Event ~$1,703, Natural8 $3.50 step satellite) 영어권 독자 대상 현지화
- K-wave 여행 각도: 서울 3일 코스 (경복궁/북촌·홍대/명동 야시장·강남/성수) + 예산 표 포함
- 경쟁글이 없는 블루오션 — "포커 + 한국 여행" 콤보 콘텐츠 최초 작성
- 히어로 이미지 생성 (파라다이스 시티 테이블 + 경복궁 야경 배경) → 58KB 압축
- 관련 EN 포스트 4개 내부링크 연결 (Related Posts 섹션)

### 발행 현황
- 총 포스트: 51개 (목표 50개 초과!)

---

## 2026-06-18 (3)

### 작업 내용
- 신규 EN 필라 글 발행: `holdem-position-play` — Poker Position Strategy: Complete Playbook for Every Seat
- SERP Top20 분석 → 경쟁글이 빠뜨린 3가지 포함: IP vs OOP 에퀴티 실현 갭 수치(85–100% vs 60–85%), 포지션별 c-bet 빈도(BTN 65–75%, OOP 40–50%), 홀덤펍 live game 실전 맥락
- 10개 H2에 롱테일 키워드 배치 ("Why is the button the best position in poker", "early position poker strategy UTG", "small blind poker strategy 3-bet or fold" 등)
- 히어로 이미지 생성 (9포지션 다이어그램, BTN/CO 골드 강조) → 38.5KB 압축
- `holdem-positions` 클러스터↔필라 양방향 내부링크 연결

### 발행 현황
- 총 포스트: 50개 (목표 달성!)

---

## 2026-06-18 (2)

### 작업 내용
- 신규 EN 글 발행: `wpt-australia-2026-guide` — WPT Australia 2026 Complete Player Guide
- SERP Top20 분석 → 모든 경쟁글이 빠뜨린 5가지 포함 (WPT Global 호주 제한, NSW 일일 현금 한도, 와이어 트랜스퍼 상세, 이중 챔피언십 비교, WC 시트 보너스)
- 36개 이벤트 전체 일정표, 위성 2루트($255 스텝 / $1,075 직접), 실전 여행 예산 표 포함
- 히어로 + 토너먼트 플로어 이미지 2장 생성
- EN 캔버스 WPT Australia 상태 pending → done 업데이트 예정

### 발행 현황
- 총 포스트: 49개 (목표 50개까지 1개 남음)

---

## 2026-06-18

### 작업 내용
- 신규 KO 글 발행: `pokerstars-appt-satellite-guide` — PokerStars APPT 위성 토너먼트 완전 가이드 2026
- SERP 분석 결과 한국어 APPT 위성 특화 가이드 공백 확인 (블루오션) → 위성 도전자 특화로 차별화
- Power Path 4단계($0.50→Silver Pass) 클릭 경로 + 현장 메가 퀄리파이어(9/9, ₩350K) 비교 가이드
- 파라다이스시티 파라다이스카드 발급 · KYC 인증 · 위성 당첨 후 절차까지 포함
- `appt-korea-2026-guide`에 양방향 내부링크 추가

### 발행 현황
- 총 포스트: 48개 (목표 50개까지 2개 남음)

---

## 2026-06-17 (3)

### 작업 내용
- 신규 EN 글 발행: `ept-barcelona-2026-guide` — EPT Barcelona 2026 Complete Player Guide (Aug 16–29, Casino Barcelona)
- SERP Top20 분석 + 롱테일 키워드 10개 H2 배치 전략 적용
- 차별화: Source of Funds 신고서 안내, 총 트립 비용 3가지 시나리오, Day 1 생존 가이드 (경쟁글 전부 누락 항목)
- Power Path $0.50→Gold Pass 단계별 가이드, 숙소 7곳 비교표, 공항→카지노 교통 4가지 비교

### 발행 현황
- 총 EN 포스트: 16개
- 총 KO 포스트: 38개

---

## 2026-06-17 (2)

### 작업 내용
- 신규 글 발행: `apt-jeju-2026-fall-guide` — APT 제주 2026 가을 참가 완전 가이드 (9/25~10/4, LES A 카지노, Natural8 위성 경로, 교통·체크인 전 과정)
- 외국인 전용 카지노 안내, 공식 일정 미발표 안내, APT 인천·APPT 코리아 양방향 내부링크

### 발행 현황
- 총 KO 포스트: 38개 (목표 50개까지 12개 남음)

---

## 2026-06-17

### 작업 내용
- 신규 글 발행: `ggpoker-wsop-express-satellite-guide` — GGPoker WSOP Express 위성 단계별 완전 가이드 (Step 0~4 구조·무료 티켓·Bracelet Pass 패키지 실제 신청 순서로 정리)
- `wsop-2026-tournament-guide` 내부링크 추가 (GGPoker Express 섹션 → 새 가이드 연결)

### 발행 현황
- 총 포스트: 33개 (목표 50개까지 17개 남음)

---

## 2026-06-16 (6)

### 작업 내용
- EN Tournament Pillar 신규 발행: `holdem-tournament` (영어 3번째 필라, 15개 EN 포스트)
- SERP Top 20 분석 후 차별화: Day-1 타임라인, 형식 결정 비교표, 실제 비용 구조, 초보 체크리스트

### 발행 현황
- 총 EN 포스트: 15개

---

## 2026-06-16 (5)

### 작업 내용
- 신규 글 발행: `appt-korea-2026-guide` — APPT 코리아 2026 참가 완전 가이드 (시리즈 2편)
- PokerStars Power Path 위성 구조, 현장 Mega Qualifier(35만원), Stars Account 결제 정보 포함
- APT 인천 가이드와 교차 링크로 중복 내용 최소화

### 발행 현황
- 총 포스트: 32개 (목표 50개까지 18개 남음)

---

## 2026-06-16 (4)

### 작업 내용
- 신규 글 발행: `apt-incheon-2026-guide` — APT 인천 2026 참가 완전 가이드 (단계별 신청 시리즈 1편)
- 시리즈 전용 레이아웃 컴포넌트 `components/tournament-guide-post.tsx` 신규 생성 (기존 포스트와 다른 디자인)
- `Post` 타입에 `layout?: "tournament-guide"` 필드 추가, `page.tsx`에서 조건부 렌더링
- 포스트 내용: Natural8 위성 경로($3.50~), 현장 체크인 절차, 파라다이스 시티 입장 규정(외국인 전용) 명시

### 발행 현황
- 총 포스트: 31개 (목표 50개까지 19개 남음)

### 특이사항
- 대회 참가 가이드 시리즈 1편 시작 — 11편까지 순차 발행 예정

---

## 2026-06-16 (3)

### 작업 내용
- `wsop-2026-tournament-guide` 전체 검수 및 오류 수정
  - 바이인 범위 `$300~$250,000` → `$500~$250,000` (실제 최저 바이인)
  - "2025년 9,735명" → "2024년 9,735명" (메인이벤트 참가자 연도 오류)
  - Day 1D "레이트 등록 마감" 오류 제거 (실제 마감은 Day 2D)
  - 이미 종료된 이벤트(#1~#34) 표에 취소선 표시, #50 MILLIONAIRE MAKER "내일!" 강조
  - 관련 글 카드 `/blog/holdem-tournament/` (404) → `/tournaments/` 수정
- `tournaments-client.tsx` WSOP 카드에 "WSOP 2026 완전 가이드" 내부 링크 버튼 추가
- `tournaments-client.tsx` 관련 가이드 섹션 상단에 WSOP 2026 Featured 배너 카드 추가 (진행중 뱃지 포함)

### 발행 현황
- 총 포스트: 31개 (목표 50개까지 19개 남음)

---

## 2026-06-16 (2)

### 작업 내용
- 신규 포스트 발행: `wsop-2026-tournament-guide` (토너먼트 필라 클러스터)
  - WSOP 공식·PokerNews·Pokerfuse 등 Top 5 소스 웹검색 기반 정확한 정보 수록
  - 메인이벤트 플라이트 일정표·주요 이벤트 바이인표·GGPoker 위성 단계표·현장 위성 일정표 포함
  - 이미지 3장 삽입: hero(78KB), schedule(75KB), ggpoker-satellite(75KB)
- `wsop-2025-tournament-guide` 상단에 2026 링크 배너 추가 (트래픽 연결)

### 발행 현황
- 총 포스트: 33개 (목표 50개까지 17개 남음)

---

## 2026-06-16

### 작업 내용
- `.cursorrules` H2 롱테일 키워드 규칙 추가: 영어 포스트 작성 전 PAA·자동완성으로 실제 검색 쿼리 도출 → H2에 직접 배치하는 절차 명시
- `holdem-all-in-rules` H2 3개 실제 검색 쿼리로 교체: "How Do Side Pots Work in Poker?", "Does Going All-In Reopen the Betting?", "What Happens If You Go All-In Wrong?"
- `holdem-all-in-rules` 콘텐츠 보강 (91점 목표): 누적 숏 올인 규칙(TDA Rule 47), Quick Decision Guide 표, E-E-A-T 경험담, FAQ 1개 추가
- GSC·GA4 데이터 분석: Organic Search 58% 확인, 카니발리제이션 발견
- 키워드 카니발리제이션 수정: `/hands` vs `/blog/holdem-hand-rankings` — `/hands` 제목을 툴 포커스로 차별화, 블로그 포스트 seoTitle 키워드 앞배치, `/hands`에서 블로그 포스트로 내부링크 추가

### 특이사항
- GA4 인기 페이지 3위에 404 페이지 발견 (33 조회) — 원인 URL 서치 콘솔 색인 탭에서 추가 확인 필요
- GSC 쿼리 분석: "홀덤 족보 순위" 80 노출 / 9.8위 → 카니발리제이션 수정으로 순위 상승 기대
- www 중복 URL 이슈 (이전에 이미 해결 완료)

### 발행 현황
- 총 포스트: 32개 (목표 50개까지 18개 남음)

---

## 2026-06-15 (3)

### 작업 내용
- 신규 EN 클러스터 발행: `holdem-all-in-rules` (Rules 필라 7번째 클러스터)
- Top 20 SERP 분석 후 경쟁 공백 3가지 보강: 리레이즈 재오픈 규칙, 4자 사이드팟 계산표, 올인 쇼다운 플로우
- `texas-holdem-rules-for-beginners` 관련 글 섹션에 양방향 링크 추가

### 발행 현황
- EN 포스트: 14개 (Rules 필라 7개)

---

## 2026-06-15 (2)

### 작업 내용
- `/en/blog/holdem-showdown-rules/` 섹션 이미지 3장 추가: who-shows-first(41KB), slow-roll(35KB), cards-speak(47KB)

---

## 2026-06-15

### 작업 내용
- 영문 클러스터 2개 신규 작성 (배포는 다음 날 예정): `holdem-showdown-rules`, `holdem-reading-the-board`
- 한국어 시즌 포스트 신규 작성: `holdem-masters-7th-guide` (WPL 제7회 홀덤 마스터스 2026 완전 가이드)
- 각 포스트: SERP 분석 → 롱테일 H2 구조 → 히어로 이미지 생성 → amber 테이블 + 하이라이트 + FAQ + 관련글
- 필라 포스트 양방향 내부링크 업데이트 (texas-holdem-rules-for-beginners, holdem-hand-rankings)

### 발행 현황
- 한국어 포스트: 30개 (총 포스트 32개 예정, 일부 배포 전)
- 영문 포스트: 13개

---

## 2026-06-14 (2차)

### 작업 내용
- 영문 클러스터 2개 신규 발행: `holdem-betting-actions`, `holdem-starting-hands-chart`
- 각 포스트: SERP 분석 → 롱테일 H2 구조 → 히어로 이미지 생성(42/44KB) → amber 테이블 + 하이라이트 + FAQ + Related Posts
- 필라 포스트 양방향 내부링크 업데이트 (texas-holdem-rules-for-beginners, holdem-hand-rankings)

### 발행 현황
- 영문 포스트: 11개 (총 포스트 29개, 목표 50개까지 21개 남음)

---

## 2026-06-14

### 작업 내용
- 영문 포스트 시각화 개선 완료: `texas-holdem-rules-for-beginners` (hero image, desc 160자, 하이라이트, amber 테이블 3개, Related Posts)

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

---

## 2026-06-13

### 작업 내용
- 다국어 `<html lang>`/`dir` 서버 신호 개선: 루트 레이아웃 `<head>`에 페인트 직전 동기 부트스트랩 스크립트 추가 — URL 첫 세그먼트(`/en`,`/ar` 등)로 `lang`/`dir`을 하이드레이션 이전에 보정 (RTL 깜빡임·언어 신호·접근성). 매핑은 `lib/intl` 단일 소스에서 생성, `suppressHydrationWarning` 적용.
- 영어(en) 섹션 필라-클러스터 보강: P1 족보 + P2 규칙 두 필라에 클러스터 4편 현지화 발행 — `holdem-flush-vs-straight`, `holdem-tiebreak-rules`, `holdem-blind-meaning`, `holdem-split-pot-rules`. EN SERP Top10 분석 후 작성, slug는 한국어와 동일(hreflang 상호 링크). 기존 EN 필라(`holdem-hand-rankings`, `texas-holdem-rules-for-beginners`)에서 신규 클러스터로 양방향 내부링크 연결. EN 포스트 4→8편.

### 특이사항
- `npm run build` 통과(127 페이지), `check:intl-links` 통과(43편), sitemap 다국어 39→43편 + 신규 EN slug에 ko/en/x-default hreflang 반영 확인. `<html lang>` 부트스트랩 스크립트 아랍어 정적 HTML head 주입 확인. `HtmlLangSync`는 클라이언트 라우트 이동용으로 유지.

---

## 2026-06-12 (5)

### 작업 내용
- 신규 글 발행: `holdem-tournament-schedule-check` ("홀덤 대회 일정 확인법 — 국내·해외 포커 토너먼트 어디서 볼까?")
  - `/tournaments` 필라의 일정 신뢰성 클러스터 글 — Google SERP + WSOP·APT·APPT·EPT·WPT 공식 일정 + PokerNews·SoMuchPoker·The Hendon Mob 확인 후 작성
  - 타깃 롱테일: 홀덤 대회 일정, 포커 대회 일정, 포커 토너먼트 일정, WSOP 일정, APT 일정, APPT 코리아 일정, EPT 일정, WPT 일정, PokerNews 일정
  - 차별화: 단순 일정표 반복이 아니라 공식 사이트 우선순위, 종합 캘린더 활용법, 날짜·장소·바이인·레이트 레지 교차검증 체크리스트 제공
  - 양방향 내부링크: `/tournaments` 카드 추가, `holdem-tournament-how-to-enter`·`holdem-tournament-buy-in-cost`·`holdem-tournament-tax-guide`·`holdem-tournament-vs-cash-game`에서 신규 글 연결

### 발행 현황
- 총 포스트: 54개 (목표 50개 초과 달성)

### 특이사항
- 신규 이미지 생성 없이 기존 `tournament-hall-wsop.webp` 재사용
- `npm run build` 통과: 다국어 내부 링크 검사 통과, sitemap.xml 41 blog posts + 39 intl posts 반영

---

## 2026-06-12 (4)

### 작업 내용
- 신규 글 발행: `holdem-tournament-tax-guide` ("홀덤 대회 세금 — 상금 받으면 신고해야 할까?")
  - `/tournaments` 필라의 세금/신고 클러스터 글 — Google SERP + 국세청 기타소득 + IRS 비거주자 원천징수 자료 확인 후 작성
  - 타깃 롱테일: 홀덤 대회 세금, 포커 상금 세금, 기타소득 4.4%, 홀덤 상금 신고, WSOP 세금 30%, 해외 포커 상금 한국 신고, 외국납부세액공제
  - YMYL 안전 처리: 세무 조언 아님 명시, 국내/해외/미국 WSOP 케이스별로 단정 금지, 고액 상금은 세무사 상담 권고
  - 양방향 내부링크: `/tournaments` 카드 추가, `holdem-tournament-buy-in-cost`·`holdem-tournament-how-to-enter`·`holdem-tournament-vs-cash-game`·WSOP·APT 제주 글에서 신규 글 연결

### 발행 현황
- 총 포스트: 53개 (목표 50개 초과 달성)

### 특이사항
- 이미지 최적화 확인: `public/images/tournament-trophy.webp` 70.9KB WebP (복잡한 트로피/칩 이미지 기준 80KB 이하)

---

## 2026-06-12 (3)

### 작업 내용
- 신규 글 발행: `holdem-tournament-buy-in-cost` ("홀덤 대회 바이인·참가비 — 초보는 얼마짜리부터 나가야 할까?")
  - `/tournaments` 필라의 비용/바이인 클러스터 글 — Google SERP 웹검색 후 롱테일 H2 설계
  - 타깃 롱테일: 홀덤 대회 바이인 뜻, 홀덤 대회 참가비 평균, 홀덤펍 대회 참가비, APT 바이인, APPT 코리아 바이인, WSOP 참가비, 리엔트리 포함 총비용, 새틀라이트 비용
  - 공식 숫자 반영: APT 인천 메인 KRW 2.5M, APT 제주 클래식 메인 KRW 2.3M, APPT 코리아 메인 KRW 1.8M/하이롤러 KRW 5M, WSOP 2026 $300~$250K·메인 $10K
  - 양방향 내부링크: `/tournaments` 카드 추가, `holdem-tournament-how-to-enter`·`holdem-tournament-vs-cash-game`·WSOP·APT 제주 글에서 신규 글 연결

### 발행 현황
- 총 포스트: 52개 (목표 50개 초과 달성)

### 특이사항
- 카니발라이제이션 방지: 참가방법 글은 신청 절차, 바이인 글은 비용/예산 계산으로 역할 분리
- 신규 이미지 생성 없이 기존 webp 재사용 (tournament-table-action)

---

## 2026-06-12 (2)

### 작업 내용
- 신규 글 발행: `holdem-tournament-how-to-enter` ("홀덤 대회 참가 방법 — 온라인 무료부터 WSOP까지 단계별 가이드")
  - `/tournaments` 필라의 클러스터 글 (참가 방법 주제) — SERP Top10 분석 후 차별화: 단계별 로드맵 + 현장 실전 절차(E-E-A-T) + 위성/초대권 시스템 구체화
  - 양방향 내부링크: `/tournaments` 가이드 카드 추가, `holdem-tournament-vs-cash-game`·`wsop-2025-tournament-guide`·`apt-jeju-classic-2026-guide` → 신규 글 역링크
  - 히어로/본문 이미지는 기존 webp 재사용 (tournament-hall-wsop, tournament-table-action, wsop-satellite-tournament, tournament-trophy)

### 발행 현황
- 총 포스트: 51개 (목표 50개 초과 달성)

### 특이사항
- 카니발라이제이션 방지: 본 글은 "참가 방법(절차) 허브 클러스터", WSOP 글은 해외 메이저 전용, APT 제주 글은 특정 대회 후기로 역할 분리

---

## 2026-06-12

### 작업 내용
- `/tournaments` 2026 대회 일정 전수 웹검색 재검증 및 업데이트 (대충 작성 금지 — 공식 소스 1건씩 교차확인)
- 신규 대회 추가:
  - APPT 코리아 2026 (9.03~9.14, 인천 파라다이스 시티) — PokerStars 6년 만의 한국 복귀, ₩20억+ GTD
  - EPT 프라하 2026 (12.02~12.13) — 2026 EPT 시즌 피날레
  - GOP Taipei II 'The Trial of Wisdom' (9.18~9.27)
  - Triton SHR 몬테네그로 (5.13~5.28, 종료) — Triton 10주년
- 사실 정정:
  - WSOP Europe: 개최지 로즈바도프 King's Resort → 프라하 King's Casino, 종료일 4/12→4/10, 메인 4/3~9 (€10M GTD)
  - WSOP 라스베이거스: 100개 브레이슬릿 확정, 파이널 테이블 8/3~5 ESPN 생중계, 2025 시리즈 246,960명·$4.81억 역대 기록 반영
  - WPT 월드 챔피언십: Prime 챔피언십 12/8~14 발표 반영
  - 미검증 'AJPC 사무라이 서킷 2·3차'(8월/12월) 제거 — 공식 확인 불가 (인천 4.10~4.19 1건만 실재)
- JSON-LD Event 스키마 정정: APT(Asian Poker Tour) 명칭/일자 수정 + APPT 코리아 Event 추가
- 일정표 기준일 라벨 2026.06.04 → 2026.06.12, dateModified 갱신

### 발행 현황
- 총 포스트: 50개 (목표 50개 달성)

### 특이사항
- 이 카테고리(토너먼트)는 정보 신뢰성·최신성이 최우선 → 모든 일자는 공식 사이트/PokerNews/Pokerfuse 등 교차확인 후 반영, 추정치 작성 배제
- APT/WSOP/EPT 핵심 일정은 기존 데이터와 일치 확인됨 (변경 없음)

---

## 2026-06-11

### 작업 내용
- 신규 글 발행 및 영어 현지화: `texas-holdem-rules-for-beginners` (LowFruits 롱테일 키워드 기반 초보자 규칙 가이드)
- 일본어 현지화 추가: `texas-holdem-rules-for-beginners` (初心者向けルール・チップ・PDFチートシート)
- 중국어 간체 현지화 추가: `texas-holdem-rules-for-beginners` (德州扑克新手规则·筹码设置·PDF速查表)
- 디자인 개선: 블로그 내 `/downloads/*.pdf` 링크를 강조 CTA 카드/버튼으로 자동 렌더링
- 카니발라이제이션 방지: 초보 규칙 글 ↔ 게임 진행 순서 글 ↔ `/rules/texas-holdem` 역할 분리 및 내부링크 조정
- 신규 글 발행 및 12개 언어 현지화 배포: `holdem-tournament-vs-cash-game`
- 성능 수정: LCP 이미지 최적화 유지 + 하단 요약 이미지 슬롯 제거

### 발행 현황
- 총 포스트: 50개 (목표 50개 달성)

### 특이사항
- 공용 영어 PDF 치트시트 제작: `public/downloads/texas-holdem-rules-for-beginners.pdf` (2페이지, 핸드 랭킹·게임 흐름·액션 순서·칩 세팅·초보 실수 / SERP Top10 분석 반영)
- PDF 생성기를 HTML/CSS → Chromium 렌더 방식으로 전환: `scripts/generate-beginner-pdf.mjs` (Playwright devDependency 추가, `npm run generate:beginner-pdf`)
  - 콘텐츠를 언어별 `CONTENT` 데이터로 분리 → 신규 언어는 키만 추가하면 생성 (한/일/중/아랍은 fontStack·dir만 지정)
  - 파비콘(`public/favicon.svg`)·`holdemmaster.com` URL을 헤더에 브랜딩으로 삽입
  - 정적 자산이라 사이트 런타임 성능에는 영향 없음 (생성은 로컬/빌드 도구 영역)
- 한국어 PDF 추가: `public/downloads/texas-holdem-rules-for-beginners-ko.pdf` (Malgun Gothic 렌더, 2페이지)
- 일본어 PDF 추가: `public/downloads/texas-holdem-rules-for-beginners-ja.pdf` (Yu Gothic/Meiryo 렌더, 2페이지)
- 중국어 PDF 추가: `public/downloads/texas-holdem-rules-for-beginners-zh.pdf` (Microsoft YaHei/Noto Sans SC 렌더, 2페이지)
  - 한국어 글은 한국어 PDF, 영어 글은 영어 PDF로 각각 연결
  - 실행: `node scripts/generate-beginner-pdf.mjs`(전체) / `... en ko`(지정 언어)
- 다국어 현지화 원칙 정리: 현지어 우선, 어색한 포커 용어는 영어 원단어 사용/병기

---

---

> ⚠️ **아래 섹션들은 2026-06-24에 `.cursor/rules/` 로 이관됨**
> - 포스팅 규칙 → `.cursor/rules/posting.mdc`
> - 이미지·콘텐츠 기준 → `.cursor/rules/content.mdc`
> - 성능·기술·GSC 루틴 → `.cursor/rules/tech.mdc`
> 이 아래 내용은 **역사적 기록**으로만 보관. 규칙 확인은 `.cursor/rules/` 참고.

---

## 🎯 구글 1페이지 스프린트 기록 (2026-05-18 시작)

### 핵심 숫자 (출발점)

| | GSC 3개월 | 45일 목표 |
|--|-----------|-----------|
| 클릭 | 61 | 100~180 |
| 평균 순위 | **9.5** | **≤7** |
| 1위 URL | `holdem-blind-meaning` | + 빅블라인드 CTR |

### 주차 요약 (상세는 md 파일)

| 주 | 기존 글 (빠르게) | 신규 |
|----|------------------|------|
| W1 | blind 전면, confusing/flush 메타 | — |
| W2 | tiebreak FAQ, cbet 상단, blind 링크 | **스몰블라인드** |
| W3 | confusing 본문, pub 메타, 클러스터 링크 5편 | **체크 뜻** |
| W4 | 홈 인기글, tournaments updated | **레이즈 얼마나** |
| W5 | blind 클러스터 동기화 | **버튼 포지션** |
| W6 | 전략↔기초 링크, 색인 오류 점검 | **펍 에티켓** |

### 📌 계획 유지 — 주간 체크인 (매주 월, 15분)

1. 아래 표에 **한 줄** 적기  
2. GSC Tier A 4키워드 순위 확인 (`홀덤 블라인드 뜻`, `빅블라인드`, `족보 같을 때`, `스몰블라인드`)  
3. Cursor에 **`이번 주 SEO 체크`** 또는 **`W2 시작해`** 입력 → 미완 작업 진행  
4. (선택) 구글 캘린더 반복: 「홀덤마스터 SEO 15분」월요일  
5. (선택) GSC → 설정 → **이메일 요약** 켜기  

| 주차 | 날짜 | 순위(28일) | 클릭(28일) | 완료 | 다음 |
|------|------|:----------:|:----------:|------|------|
| W1 | | | | ☐ | |
| W2 | | | | ☐ | |
| W3 | | | | ☐ | |
| W4 | | | | ☐ | |
| W5 | | | | ☐ | |
| W6 | | | | ☐ | |

---

## 📋 GSC 루틴 — 글 발행·배포 후 10분 (필수)

> **사이트맵 “제출”은 구글이 하는 일이고, 내가 GSC에 들어가서 눌러야 합니다.**  
> (자동 제출 스크립트는 Search Console API 키가 있어야 가능 — 지금은 수동 루틴 권장)

### A. 배포 직후 (매 글, 5분)

- [ ] [Google Search Console](https://search.google.com/search-console) → 속성 `holdemmaster.com`
- [ ] **URL 검사**에 새 글 주소 입력  
  예: `https://www.holdemmaster.com/blog/holdem-value-bet-sizing`
- [ ] **“색인 생성 요청”** 클릭 (이미 색인됐으면 “색인됨”만 확인)
- [ ] `public/sitemap.xml`에 해당 URL·`lastmod`가 글 `updated` 날짜인지 확인  
  → 배포 시 `npm run build`가 **자동으로 sitemap 재생성** (`prebuild` → `generate:sitemap`)  
  → 수동만 할 때: `npm run generate:sitemap`

### B. 주 1회 (5분)

- [ ] GSC → **Sitemaps** → `https://www.holdemmaster.com/sitemap.xml` **다시 제출** (이미 있어도 재제출 OK)
- [ ] **실적** → **검색어** 탭: 클릭·노출 있는 쿼리 3개 메모 → 다음 글 제목·H2에 반영
- [ ] **페이지** 탭: 노출 많은데 CTR 낮은 글 → `seoTitle`·`desc`만 손볼 후보로 표시

### C. 월 1회 (선택)

- [ ] 색인 안 된 URL이 있으면 URL 검사로 원인 확인 (noindex·리다이렉트·404)
- [ ] 옛 글 1~2편: 내부링크 2개 + `updated` 갱신 + 배포 → 해당 URL만 URL 검사

### 체크리스트 메모란 (발행할 때마다 적기)

| 날짜 | slug | URL 검사 | sitemap lastmod | 비고 |
|------|------|:--------:|:---------------:|------|
| | | ☐ | ☐ | |

---

## 🏆 최우선 원칙 (2026-04-20 확정, 절대 잊지 말 것)

### 앞으로 모든 포스팅은 반드시 사람의 경험이 담겨야 한다

AI가 정보를 재가공한 글은 이제 경쟁력이 없다.
구글이 살려주는 포스팅 = **실제 사람이 겪은 경험 + 그로 인한 인사이트**

**분업 방식:**
- 사용자 → 홀덤펍 경험, 핸드 상황, 느낀 점을 짧게라도 메모해서 전달
- AI → 그 경험을 SEO 포스팅으로 가공 (제목·구조·키워드·FAQ·이미지 전부)

**포스팅 유형별 적용:**
- 경험형 (펍, 전략) → 실제 핸드·경험담 직접 삽입
- 이론형 (ICM, 확률) → "알면서도 틀리는 이유" + Before/After + 계산기 연동

**이 원칙 없이는 새 포스팅 작성하지 않는다.**

---

## 💡 전략 방향 (2026-04-20 확정)

### 포스팅 전략 전환
- **기존 29개 포스트**: 그대로 유지. SEO 뼈대 역할. 절대 삭제/갈아엎기 금지
- **새 포스트부터**: 경험 기반 포맷으로 전환
- **장기**: 트래픽 쌓인 후 커뮤니티 기능 추가 (지금은 시기상조)

### 경험 기반 포스팅이란
AI가 쓴 글과 차별화되는 핵심 = **실제 경험(E-E-A-T의 첫 번째 E)**

| 죽는 포스팅 | 살아남는 포스팅 |
|------------|--------------|
| "C벳 성공 조건 3가지" | "강남 펍에서 C벳 블러프 불렸을 때 배운 것" |
| "버블 전략 완전 가이드" | "버블에서 올인 콜 잘못해서 칩 날린 실제 핸드 분석" |
| "AA 운영법 정리" | "AA 3번 연속 잃고 나서 바뀐 내 사고방식" |

### 사이트 운영자 홀덤펍 방문 예정
직접 경험을 쌓아 포스팅에 녹이기로 결정. 방문 체크리스트:
- 분위기, 테이블 구성, 로컬 룰 기록
- 기억에 남는 핸드 상황 메모 (내 패·보드·판단·결과)
- 옆 플레이어 유형, 심리적 흔들린 순간
- 나오면서 바로 음성 메모 (차 안에서)

### 커뮤니티 전환 로드맵
| 단계 | 시기 | 할 일 |
|------|------|------|
| 지금 | 포스트 50개 달성 전 | 경험 기반 포스트 집중 작성 |
| 중기 | 월 방문자 1만+ | 포스트 하단 댓글 기능 추가 |
| 장기 | 월 방문자 5만+ | 핸드 분석 게시판, Q&A 섹션 |

---

## 🔴 작업 시작 전 반드시 읽을 것

### 1. 포스트 저장 구조 (절대 혼동 금지)

포스트는 **두 곳**에 나뉘어 저장된다. 한 곳만 보면 절대 안 됨.

| 파일 | 포스트 수 | 설명 |
|------|----------|------|
| `src/data/posts.ts` | 21개 | 초기 발행 포스트 (3월~4월 초) |
| `src/data/posts/` 폴더 | 8개 | 최근 발행 포스트 (4월 중순~) |

**전체 포스트 수 = posts.ts(21) + posts/ 폴더(8) = 총 29개**

새 포스트는 `posts/` 폴더에 개별 `.ts` 파일로 추가하고 `posts/index.ts`에 import한다.

---

### 2. sitemap.xml 규칙 (절대 원칙) — 2026-05-06 정책 변경

> **⚠️ 정책 전환**: Next.js 마이그레이션 (`trailingSlash: false`) 으로 URL 정책 반전됨.
> 과거 Vite 시절 정책 (slash 포함 필수) 은 폐기.

**① 블로그 URL은 끝에 `/` 절대 금지**
- `next.config.mjs` 의 `trailingSlash: false` 와 일치해야 함
- canonical / OG url / sitemap 모두 slash 없이 통일
- ✅ 올바른 형식: `https://www.holdemmaster.com/blog/holdem-cbet-strategy`
- ❌ 잘못된 형식: `https://www.holdemmaster.com/blog/holdem-cbet-strategy/`

**② 사이트맵에는 실제 존재하는 포스트만 등록**
- 코드에 없는 포스트 URL 절대 추가 금지
- 새 포스트 발행 순서: 코드 작성 → 배포 → 사이트맵 추가 (이 순서 반드시 준수)

**③ 사이트맵 수정 후 할 일**
1. 배포
2. 서치 콘솔 → Sitemaps → `https://www.holdemmaster.com/sitemap.xml` 재제출

---

### 3. GSC(구글 서치 콘솔) 상태 해석

| 상태 | 의미 | 대응 |
|------|------|------|
| 리디렉션 오류 | URL이 다른 곳으로 301 이동됨 | 사이트맵 URL에 `/` 추가 |
| 발견됨 - 색인 생성되지 않음 | 구글이 찾았지만 아직 대기 중 | 색인 요청 또는 기다리기 |
| 실패함 | 유효성 검사 결과가 나쁨 (과거 기록) | 수정 후 유효성 검사 재시작 |

**"실패함"은 새 오류가 아니라 과거 검사 결과임. 수정 후 유효성 검사 다시 시작하면 됨.**

---

### 4. 새 포스트 발행 체크리스트 (Next.js 기준, 2026-05-06 갱신)

- [ ] `lib/posts/새포스트.ts` 파일 작성 (또는 `lib/posts.ts` 의 LEGACY_POSTS 배열에 추가)
- [ ] `lib/posts/index.ts` 의 NEW_POSTS 에 import 추가 (개별 파일 방식일 때만)
- [ ] **필수 메타필드**: slug · title · desc · category · date · `updated` · `tldr` · readTime · emoji · tags
  - `updated` = 작성/갱신 시점 YYYY-MM-DD (E-E-A-T 신선도 신호)
  - `tldr` = 검색 의도 직답 40~90자 (Featured Snippet · 모바일 LCP 후보 텍스트)
- [ ] `app/blog/roadmap` 또는 관련 허브 글에 링크 (있는 경우)
- [ ] `public/sitemap.xml` 에 URL 추가 (**끝 슬래시 없음**, lastmod·priority·changefreq)
- [ ] `npm run build` 검증
- [ ] 배포 (Vercel 자동) → Ready 확인
- [ ] 서치 콘솔 URL 검사 → 색인 생성 요청
- [ ] WORKLOG.md 발행 현황 + 엑셀 형식 표 업데이트

---

### 5. 현재 발행 현황 (2026-04-20 기준)

**총 29개 발행 / 목표 50개**

**posts.ts (21개):**
| slug | 날짜 | 카테고리 |
|------|------|---------|
| holdem-3bet-strategy | 2026-04-10 | 전략 |
| holdem-probability | 2026-04-09 | 확률·수학 |
| holdem-pot-odds-calculation | 2026-04-09 | 확률·수학 |
| holdem-flush-vs-straight | 2026-04-08 | 족보 |
| holdem-vs-7poker-hand-rankings | 2026-04-07 | 족보 |
| holdem-split-pot-rules | 2026-04-07 | 족보 |
| holdem-hand-rankings-confusing | 2026-04-06 | 족보 |
| holdem-tiebreak-rules | 2026-04-03 | 족보 |
| holdem-hand-rankings | 2026-04-02 | 족보 필라 |
| apt-jeju-classic-2026-guide | 2026-04-01 | 토너먼트 |
| holdem-beginner-mistakes-10 | 2026-03-31 | 초보 가이드 |
| holdem-overbet-strategy | 2026-03-30 | 전략 |
| holdem-outs-calculation | 2026-03-28 | 확률·수학 |
| holdem-starting-hand-range | 2026-03-27 | 스타팅 핸드 필라 |
| holdem-odds-calculator | 2026-03-26 | 확률·수학 |
| holdem-blind-meaning | 2026-03-26 | 기초 용어 |
| when-to-fold-preflop-holdem | 2026-03-24 | 전략 |
| holdem-game-order | 2026-03-24 | 기초 용어 |
| bluffing-strategy-when-and-how | 2026-03-17 | 전략 |
| position-is-everything-in-holdem | 2026-03-14 | 포지션 필라 |
| wsop-2025-tournament-guide | 2026-03-10 | 토너먼트 |

**posts/ 폴더 (8개):**
| slug | 날짜 | 카테고리 |
|------|------|---------|
| holdem-cbet-strategy | 2026-04-20 | 전략 |
| holdem-range-meaning | 2026-04-17 | 전략 |
| icm-poker-meaning | 2026-04-16 | 토너먼트 |
| pocket-kings-kk-strategy | 2026-04-15 | 스타팅 핸드 |
| pocket-aces-aa-strategy | 2026-04-15 | 스타팅 핸드 |
| holdem-pub-legal | 2026-04-14 | 홀덤펍 |
| holdem-pub-first-visit-guide | 2026-04-13 | 홀덤펍 |
| holdem-bubble-strategy | 2026-04-13 | 토너먼트 |

---

## 2026-05-08 — GSC 기반 카피 최적화 + SEO 카피 원칙 영구 등록

> "구글 검색 결과 = 유튜브 썸네일" 철학 확립. 호기심 훅 + 키워드 하이브리드 공식을 프로젝트 절대 원칙으로 영구 등록.

### 1. GSC 데이터 분석 → 호기심 훅이 실제로 작동 중임을 데이터로 확인

| URL | 클릭 | 노출 | CTR | 평균 순위 |
|------|------|------|-----|-----------|
| holdem-blind-meaning | 19 | 584 | 3.3% | 7.7 |
| holdem-tiebreak-rules | 6 | 141 | **4.3%** ↑ | — |
| holdem-hand-rankings-confusing | 3 | 88 | 3.4% | — |
| holdem-flush-vs-straight | 1 | 64 | 1.6% | — |

→ 모바일 한국어 7~8위 평균 CTR이 보통 2~3%대인데, 호기심형 훅이 들어간 글들은 3~4%대로 **이미 상위권**.
→ 이 훅을 정보형으로 깎으면 안 된다는 것을 데이터로 확인.

### 2. 카피 수정 (호기심 훅 + 키워드 하이브리드) — 2개 글

**`holdem-blind-meaning`**
- seoTitle: `매판마다 칩이 빠지는 이유 — 홀덤 블라인드 뜻과 SB·BB 차이`
- desc 첫 문장: 공감/호기심형 ("자리 탓이 아닙니다")
- 본문 첫 화면에 "한 줄 정리" 박스 추가 (SB/BB 정의)

**`holdem-tiebreak-rules`**
- seoTitle: `같은 원페어인데 왜 내가 졌지? — 홀덤 키커·스플릿 팟 규칙`
- desc 첫 문장: 공감/호기심형 ("키커 한 장이 승부를 가른 거예요")
- 본문 첫 화면에 "한 줄 정리" 박스 추가 (키커·스플릿·무늬)

### 3. SEO 카피 원칙 영구 등록 (절대 원칙으로)

**`.cursorrules`** — 두 번째 최우선 원칙으로 추가
- E-E-A-T 다음 단계로 SEO 카피 = 호기심 훅 + 키워드 하이브리드 명시
- AI가 매번 자동 참조하므로 향후 모든 포스트에 자동 적용됨

**`docs/SEO_COPY_GUIDELINES.md`** — 새 파일, 디테일 가이드
- 검증된 공식 (Title / Desc / TLDR 길이·구조)
- 작성 후 체크리스트 (각 필드별)
- 좋은 예시 vs 나쁜 예시 사례집 (블라인드, 타이브레이크)
- 호기심 훅 패턴 라이브러리 (5가지 패턴)
- 절대 금지 사항 4가지
- GSC 데이터 기반 개선 워크플로우 (7단계)
- 성과 추적 기준 (CTR / 평균 순위 목표)

### 4. 향후 작업에 미치는 영향

- **새 포스트 발행 시**: `seoTitle` / `desc` 작성 시 `.cursorrules` 자동 참조 → 정보형 X, 호기심+키워드 하이브리드 O
- **기존 포스트 개선 시**: `docs/SEO_COPY_GUIDELINES.md` 워크플로우 따라 GSC 노출 ↑ + CTR ↓ 글부터 차례대로 다듬기
- **체크포인트**: 호기심 톤 단독 교체 금지, 본문 친근체 유지, 과장 금지

### 5. 다음 후보 (GSC 노출 큰 순)

| 우선순위 | URL | 노출 | 클릭 | 메모 |
|----------|-----|------|------|------|
| 1 | holdem-hand-rankings-confusing | 88 | 3 | "헷갈린다" 자체가 호기심 훅 — 보강만 |
| 2 | holdem-flush-vs-straight | 64 | 1 | 비교형, CTR 낮음 → 가장 ROI 클 가능성 |
| 3 | tournaments | 146 | 6 | 페이지 SEO (블로그 X) |

---

## 2026-05-06 — 모바일 LCP 회복 + E-E-A-T 강화 총력전

> Lighthouse 모바일 81~89 → F12 데스크탑 93 / 폰 PSI 90 회복 + 1페이지 노출 위한 E-E-A-T 갭 5개 중 3개 메움 (작성자 권위, 신선도, Featured Snippet)

### 1. 모바일 LCP 다단계 개선 (커밋 5건)

**1단계: 본문 첫 이미지 → 페이지 맨 하단 "이 글 전체 요약" 섹션으로 이동**
- `lib/blog-lcp.ts` 신설: faqcard 또는 markdown ![]() 첫 블록 추출/제거 유틸
- `app/blog/[slug]/page.tsx`: 추출된 LCP 블록을 `<summarySlot>` 으로 페이지 최하단(관련글 다음)에 lazy 로드 배치
- 결과: H1 텍스트가 LCP 후보가 됨

**2단계: 두 번째 이미지(첫 H2 직후 이미지) → 같은 섹션 끝(다음 ## 또는 ---) 직전으로 이동**
- 자동화 스크립트: `scripts/audit-blog-lcp.mjs` (위험도 분석), `scripts/move-first-section-image.mjs` (자동 변환)
- 처리 대상 9개 (HIGH 2 / MEDIUM 7): pot-odds·probability·apt-jeju·bubble·cbet·AA·3bet·beginner-mistakes·pub-legal
- 안전장치: 첫 LCP 블록(이미 1단계로 옮긴 것) 은 변환 대상에서 제외
- 결과: HIGH 0 / MEDIUM 0 / LOW 30

**3단계: 폰트 다운로드 비용 절반**
- Noto Sans KR weight 4개(400/500/600/700) → 2개(400/700)
- Noto Serif KR 완전 제거, font-serif 클래스를 Sans 로 통일 (한글 파일 3개 추가 절감)
- 모바일 backdrop-blur GPU 합성 비용 제거 (md: 분기로 데스크탑만 적용)

**4단계: font-display swap → optional**
- 100ms 안에 한글 서브셋 못 오면 시스템 폰트(Apple SD Gothic Neo / Malgun Gothic) 고정 → 스왑 없음 → LCP = FCP
- 두 번째 방문부터는 캐시된 Noto Sans KR 자동 적용

**5단계: 모바일 TOC 기본 접힘 (가장 큰 효과)**
- 24+ 항목 TOC 가 모바일 첫 화면 720px 차지 → LCP 후보가 큰 카드가 됨
- native `<details>` 로 감싸 50px 한 줄 (📚 목차 (N개) ▾) → 클릭 펼침
- JS 0, 데스크탑 sticky sidebar TOC 영향 없음 (xl: 분리)
- 결과: 모바일 첫 화면 점유 720→50px, F12 점수 90 → 93

### 2. E-E-A-T 강화 3종 (1·2·3)

**Phase 1: 글마다 '최종 업데이트' 날짜 표시**
- `Post` 타입에 optional `updated` 필드 추가
- 29 개 모든 포스트에 `updated: "2026-05-06"` 일괄 적용 (LCP·TOC 등 본문 갱신 반영)
- UI: 글 헤더에 "<date> 작성 · <updated> 업데이트" 두 개 `<time>` 노출, 업데이트 배지는 골드 톤
- JSON-LD: `dateModified` = `updated`, OG `modified_time` 동기화
- 효과: Google 신선도 신호 (특히 "최신" 키워드)

**Phase 2: /about 팀 소개 페이지 + 작성자 박스 권위 강화**
- 신규 `app/about/page.tsx` (정적 SSG, 176 B)
  - Hero (12년 경력·솔버 분석)
  - 운영 지표 4개 그리드 (29편 발행 / 30+ 회 현장 취재 / 12년+ / PioSolver·GTO+)
  - 편집 원칙 4개 (직접 경험·솔버 검증·신선도·도박 금지)
  - 편집 프로세스 6단계
  - 사용 도구 6개 (Pio·GTO+·HM3·Equilab·Stove·공식 룰북)
  - Organization JSON-LD (knowsAbout 6주제, foundingDate 2014)
- 블로그 작성자 박스 강화: 이름 → /about 링크, 운영 지표 4그리드 `<dl>`, "편집팀 상세 →" CTA
- Article schema author: Person → Organization, url → SITE/about
- Footer 하단 "팀 소개" 링크 추가
- sitemap.xml 에 /about 추가 (priority 0.7, monthly)

**Phase 3: 글마다 '한 줄 정답' (Featured Snippet 대상화)**
- `Post` 타입에 optional `tldr` 필드 추가
- 29 개 모든 포스트에 주제별 고유한 40~90자 직답 작성 (평균 77자)
- UI: 글 헤더 직후, 본문 진입 직전, 골드 그라디언트 강조 박스 ("💡 한 줄 정답")
- JSON-LD: Article schema 에 `abstract` 필드로 노출
- 효과: Google "발췌 텍스트" 진입 + 모바일 LCP 후보 텍스트화

### 3. 통합 자동 검증 — `scripts/verify-eeat.mjs`

- 12개 항목 전수 통과:
  - updated 29/29 ✓
  - tldr 29/29 ✓ (65~88자, 평균 76.9자)
  - /about 페이지 존재 / sitemap / footer / 작성자박스 / JSON-LD 모두 연결 ✓
  - dateModified = updated ✓ / abstract = tldr ✓
- audit-blog-lcp.mjs: HIGH 0 / MEDIUM 0 / LOW 30 유지

### 4. 커밋 7건 (이번 세션)

```
505a999 feat(seo): 한 줄 정답 (tldr) — Featured Snippet
96786c9 feat(eeat): /about 팀 소개 + 작성자 박스 권위 강화
1213490 feat(seo): 최종 업데이트 날짜 도입 (E-E-A-T 신선도)
4838d85 perf(mobile): TOC 기본 접힘 — LCP 큰 폭 개선
b2690e9 perf(mobile): font-display optional → LCP -2s
39980dd perf(blog): 두 번째 이미지를 섹션 끝으로 이동 (9 posts)
9bd336f perf(mobile): KR 폰트 7→2개, font-serif Sans 통일, blur 비활성화
```

### 5. 남은 갭 (1페이지 노출 1차 도전 후 검토)

| 갭 | 우선순위 | 비고 |
|----|---------|-----|
| 외부 권위 출처 인용 글마다 1~2개 | 중 | WSOP/PokerNews/PioSolver 블로그 dofollow |
| 본문에 작성자 실명·얼굴 추가 | 중상 | YMYL 인접 영역이라 영향 큼 |
| HowTo schema 추가 (튜토리얼 글 한정) | 중 | 강조 스니펫 카드형 노출 |
| Header Server / Client island 분할 | 하 | TBT 50ms 이미 우수, ROI 작음 |

### 6. 사용자 지표

- 시작 시점: 모바일 PSI 81 (pocket-aces-aa-strategy)
- F12 데스크탑: 93 (TOC 접힘 후 측정)
- 폰 PSI: 80 → 캐시 의심 (배포 직후 30분 캐시) — 캐시 우회 후 재측정 권장
- 색인 (GSC): sitemap 재제출 후 1~3주 모니터링 진행 중

---

## 2026-04-20

### GSC 리디렉션 오류 근본 원인 파악 및 수정

**원인 확인 (curl로 직접 검증):**
- 서버가 `/blog/slug` → `/blog/slug/` 로 301 자동 리디렉션
- 기존 사이트맵에 `/` 없는 URL → 구글 리디렉션 오류 판정

**수정 내용:**
- sitemap.xml 전체 블로그 URL 끝에 `/` 추가 (29개)
- 재배포 완료

**추가 실수 및 복구 (같은 날):**
- posts/ 폴더만 보고 posts.ts 미확인 → 실존하는 21개 포스트를 사이트맵에서 삭제
- 같은 날 복구 완료

**남은 할 일:**
- 서치 콘솔 → `https://www.holdemmaster.com/sitemap.xml` 재제출
- 리디렉션 오류 탭 → 유효성 검사 시작 클릭

---

## 2026-04-08 (1차)

### 12. `holdem-flush-vs-straight` 포스트 배열 위치 수정 및 등록
- **버그 수정**: POSTS 배열 `];` 이후에 잘못 삽입됐던 포스트를 배열 내부 마지막 항목으로 이동
- **이미지 파일명 변경** (이전 세션의 임시 경로 → 일러스트레이터 작업용 최종 파일명):
  - `flush-vs-straight-c1-rank.webp` — 족보 순위 비교표
  - `flush-vs-straight-c2-probability.webp` — 출현 확률 비교 카드
  - `flush-vs-straight-c3-realplay.webp` — 실전 보드 상황 3가지
  - `flush-vs-straight-c4-tiebreak.webp` — 타이브레이크 규칙 카드
- **sitemap.xml** 추가: `/blog/holdem-flush-vs-straight` (2026-04-08)
- **roadmap.tsx** 업데이트: `published: true` + `slug: "holdem-flush-vs-straight"`
- **발행 현황**: 18개 완료 / 목표 50개

---

## 2026-04-07 (3차)

### 9. 블로그 로드맵 배너 강화 (`/blog` 헤더)
- 기존 작은 아웃라인 버튼 → 어두운 카드 배너로 교체
  - 배경: `from-[#1a0a2e] via-[#0d1f3a] to-[#0a1a0d]` 그라디언트 + 금빛 테두리 글로우
  - 왼쪽 🗺️ 아이콘 박스 (호버 시 scale-110)
  - 중앙: "전체 콘텐츠 구조" 서브텍스트 + "홀덤마스터 학습 로드맵 보기" 타이틀
  - 카테고리 태그 6개: 족보·기초규칙·확률·포지션·전략·토너먼트 (컬러 배지)
  - 오른쪽 화살표 버튼 (호버 시 금색 채움)

### 10. 전체 SEO 오류 점검 및 seoTitle 수정
- 점검 항목: 빌드 오류, 로드맵 slug 정합성, 이미지 파일 존재 여부, seoTitle 글자 수, 오타 패턴
- 결과
  - ✅ 빌드 오류: 없음
  - ✅ 로드맵 slug: 17개 posts.ts 완전 일치
  - ✅ 이미지 파일: 91개 전체 존재
  - ✅ 오타 패턴(블라인트·홀댐 등): 없음
  - ⚠️ seoTitle 35자 초과 **10건 발견 → 전부 수정 완료**
- 수정 포스트 목록
  | 포스트 | 수정 전(자수) | 수정 후(자수) |
  |--------|------------|------------|
  | holdem-hand-rankings-confusing | 41자 | 26자 |
  | holdem-game-order | 37자 | 25자 |
  | position-is-everything-in-holdem | 37자 | 25자 |
  | wsop-2025-tournament-guide | 44자 | 24자 |
  | when-to-fold-preflop-holdem | 44자 | 25자 |
  | holdem-starting-hand-range | 40자 | 24자 |
  | holdem-outs-calculation | 36자 | 22자 |
  | holdem-overbet-strategy | 36자 | 24자 |
  | holdem-beginner-mistakes-10 | 41자 | 25자 |
  | apt-jeju-classic-2026-guide | 47자 | 26자 |

### 11. 배포
- Replit 배포 완료 (commit: d13a882)
- 변경사항: 로드맵 배너 + seoTitle 10건 반영

---

## 2026-04-07 (추가)

### 8. 블로그 로드맵 페이지 신규 제작 (`/blog/roadmap`)
- 인터랙티브 SVG 마인드맵 구현
  - 중심 노드(홀덤마스터) → 8개 필라 → 클러스터 포스트 방사형 배치
  - 발행 완료 노드: 클릭 시 해당 포스트로 이동 (노란 점 표시)
  - 준비 중 노드: 점선 + 흐림 처리 (예정 콘텐츠 예고)
  - 발행 진행 현황 바 (17/40 등 실시간 표시)
  - 카테고리별 포스트 목록 텍스트 (SEO용)
- 블로그 인덱스(`/blog`) 헤더에 "전체 학습 로드맵 보기" 버튼 추가
- sitemap.xml에 `/blog/roadmap` 등록 (priority 0.7, changefreq weekly)

---

## 2026-04-07

### 1. C4 포스트 완성 — 홀덤 스플릿 팟 완전 정복
- `holdem-split-pot-rules` 발행 (2026-04-07)
- 이미지 8장 전부 완성 (WebP 변환)
  - `split-pot-kicker-card.webp` — 키커 판정 카드 (조건5 섹션)
  - `split-pot-worst3-card.webp` — WORST 3 착각 카드
  - `split-pot-faq-card.webp` — FAQ 핵심 6가지 카드
- FAQPage JSON-LD 자동 추출 확인 (Q/A 형식 유지)

### 2. C4 동반 포스트 — 홀덤 vs 7포커 비교
- `holdem-vs-7poker-hand-rankings` 발행 (2026-04-07)
- 필라 1(족보) 클러스터 글

### 3. 전체 SEO 메타 교정
- seoTitle 글자 수 초과 5건 수정 (41자 → 33~34자)
- desc 글자 수 초과 2건 수정
- `holdem-hand-rankings` seoTitle = title 동일 문제 수정

### 4. 사이트맵 누락 2건 추가
- `holdem-beginner-mistakes-10` (2026-03-31) 추가
- `apt-jeju-classic-2026-guide` (2026-04-01) 추가
- 전체 17개 포스트 100% 등록 완료

### 5. 내부링크 inbound 보강
- `holdem-tiebreak-rules` → `holdem-split-pot-rules` 링크 추가
- `holdem-hand-rankings-confusing` → `holdem-vs-7poker-hand-rankings` 링크 추가
- `holdem-game-order` → `holdem-blind-meaning` 링크 추가

### 6. 이미지 재압축 최적화
- 200K 초과 8장 → q70/q65 재압축
- 최대 350K → 209K로 축소 (전체 기준 200K 이내)

### 7. 배포 및 Search Console
- Replit 배포 완료 (commit: 08f731172)
- sitemap.xml 제출: `https://www.holdemmaster.com/sitemap.xml`
- C4 URL 수동 색인 요청: `holdem-split-pot-rules`

---

## 2026-04-06

### 1. C3 포스트 발행 — 홀덤 족보 헷갈리는 경우 TOP5
- `holdem-hand-rankings-confusing` 발행
- 필라 1(족보) 클러스터 글

---

## 2026-04-03

### 1. C2 포스트 발행 — 홀덤 족보 타이브레이크 규칙
- `holdem-tiebreak-rules` 발행
- 필라 1(족보) 클러스터 글

---

## 2026-04-02

### 1. C1 포스트 발행 — 홀덤 족보 (필라 1)
- `holdem-hand-rankings` 발행
- 필라 1 허브글 — 족보 전체 클러스터의 권위 중심

---

## 2026-04-01

### 1. 포스트 발행 — APT 제주 클래식 2026 가이드
- `apt-jeju-classic-2026-guide` 발행 (토너먼트 카테고리)

---

## 2026-03-31

### 1. 포스트 발행 — 홀덤 초보 실수 10가지
- `holdem-beginner-mistakes-10` 발행 (초보 가이드 카테고리)

---

## 2026-03-30

### 1. 포스트 발행 — 홀덤 오버벳 전략
- `holdem-overbet-strategy` 발행 (전략 카테고리)
- 블로그 포스트 표준 레퍼런스 글로 지정

---

## 2026-03-28

### 1. 포스트 발행 — 홀덤 아웃츠 계산법
- `holdem-outs-calculation` 발행 (확률·수학 카테고리)
- 필라 3(확률) 클러스터 글

---

## 2026-03-27

### 1. 포스트 발행 — 홀덤 스타팅 핸드 레인지
- `holdem-starting-hand-range` 발행 (필라 4 — 스타팅 핸드 허브)

---

## 2026-03-26

### 1. 포스트 발행 — 포커 확률 계산기
- `holdem-odds-calculator` 발행 (확률·수학 카테고리)
- 필라 3(확률) 허브 핵심 글

### 2. 포스트 발행 — 홀덤 블라인드 뜻
- `holdem-blind-meaning` 발행 (기초 용어 카테고리)
- 필라 2(규칙) 클러스터 글

---

## 2026-03-24

### 1. 포스트 발행 — 홀덤 게임 진행 순서
- `holdem-game-order` 발행 (기초 용어 카테고리)

### 2. 포스트 발행 — 프리플랍 폴드 기준
- `when-to-fold-preflop-holdem` 발행 (전략 카테고리)

---

## 2026-03-17

### 1. 포스트 발행 — 홀덤 블러핑 전략
- `bluffing-strategy-when-and-how` 발행 (전략 카테고리)

---

## 2026-03-14

### 1. 포스트 발행 — 홀덤 포지션 전략
- `position-is-everything-in-holdem` 발행 (필라 5 — 포지션 허브)

---

## 2026-03-10

### 1. 포스트 발행 — WSOP 2025 토너먼트 가이드
- `wsop-2025-tournament-guide` 발행 (토너먼트 카테고리)

---

## 📊 날짜별 작업 이력 (엑셀 형식)

| 날짜 | 작업 유형 | 상세 내용 | 결과 / 비고 |
|------|----------|-----------|------------|
| 2026-05-06 | 🌟 E-E-A-T | 글마다 'tldr' 한 줄 정답 추가 (29편) + Article schema abstract | Featured Snippet 후보화. 골드 강조 박스 UI |
| 2026-05-06 | 🌟 E-E-A-T | /about 팀 소개 페이지 신설 + 작성자 박스 권위 강화 + Org JSON-LD | sitemap·footer·작성자박스·Article author 모두 /about 연결 |
| 2026-05-06 | 🌟 E-E-A-T | 글마다 'updated' 최종 업데이트 날짜 표시 (29편) | dateModified·OG modifiedTime 동기화. 신선도 신호 |
| 2026-05-06 | ⚡ 모바일 LCP | 블로그 모바일 TOC 기본 접힘 (`<details>`) | 첫 화면 점유 720→50px. F12 90→93 |
| 2026-05-06 | ⚡ 모바일 LCP | font-display swap → optional | 한글 서브셋 100ms 안에 못 오면 시스템 폰트 고정. 스왑 0 |
| 2026-05-06 | ⚡ 모바일 LCP | 두 번째 이미지(첫 H2 직후)를 섹션 끝으로 이동 (9개 글) | HIGH 2 / MEDIUM 7 → 모두 LOW. audit-blog-lcp.mjs 자동화 |
| 2026-05-06 | ⚡ 모바일 LCP | 본문 첫 이미지 → 페이지 맨 하단 '이 글 전체 요약' 섹션 | H1 텍스트가 LCP. lib/blog-lcp.ts 신설 |
| 2026-05-06 | ⚡ 모바일 LCP | KR 폰트 weight 7→2개, font-serif Sans 통일, mobile blur 비활성 | 폰트 다운로드 절반. GPU 합성 비용 감소 |
| 2026-04-20 | 🔧 SEO 오류 수정 | 사이트맵 블로그 URL 전체에 `/` 추가 (29개) | GSC 리디렉션 오류 근본 원인 해결. 서버가 slug/ 형태로 301 리디렉션하는 구조 확인 |
| 2026-04-20 | 🚨 실수 복구 | posts.ts(21개) 미확인으로 사이트맵에서 삭제했다가 복구 | 당일 복구 완료. 재발 방지 체크리스트 WORKLOG에 추가 |
| 2026-04-20 | 📋 GSC 작업 | 색인 재요청(8개 포스트) + 사이트맵 재제출 안내 | 유효성 검사 재시작 필요 (서치 콘솔에서 직접 클릭) |
| 2026-04-18 | ✍️ 포스트 발행 | holdem-cbet-strategy (C벳 전략 완전 가이드) | posts/ 폴더. 이미지 6장, FAQ, 인포그래픽, 워터마크 적용 |
| 2026-04-17 | ✍️ 포스트 발행 | holdem-range-meaning (레인지 뜻과 활용) | posts/ 폴더 |
| 2026-04-16 | ✍️ 포스트 발행 | icm-poker-meaning (ICM이란 뜻) | posts/ 폴더 |
| 2026-04-15 | ✍️ 포스트 발행 | pocket-kings-kk-strategy (KK 전략) | posts/ 폴더 |
| 2026-04-15 | ✍️ 포스트 발행 | pocket-aces-aa-strategy (AA 전략) | posts/ 폴더 |
| 2026-04-14 | ✍️ 포스트 발행 | holdem-pub-legal (홀덤펍 합법 여부) | posts/ 폴더 |
| 2026-04-13 | ✍️ 포스트 발행 | holdem-pub-first-visit-guide (홀덤펍 처음 가는 법) | posts/ 폴더 |
| 2026-04-13 | ✍️ 포스트 발행 | holdem-bubble-strategy (버블 전략) | posts/ 폴더 |
| 2026-04-08 | 🔧 버그 수정 | holdem-flush-vs-straight POSTS 배열 위치 오류 수정 | 이미지 4장 파일명 변경, 사이트맵 등록, roadmap.tsx 업데이트 |
| 2026-04-07 | 🎨 UI 개선 | /blog 헤더 로드맵 배너 강화 (SVG 마인드맵 포함) | 카테고리 태그 6개, 금빛 테두리 글로우 디자인 |
| 2026-04-07 | 🔧 SEO 교정 | seoTitle 35자 초과 10건 수정 | 전체 이미지 91개 존재 확인, 오타 없음 확인 |
| 2026-04-07 | ✍️ 포스트 발행 | holdem-split-pot-rules (스플릿 팟 완전 정복) | 이미지 8장, FAQPage JSON-LD 확인 |
| 2026-04-07 | ✍️ 포스트 발행 | holdem-vs-7poker-hand-rankings (홀덤 vs 7포커 비교) | 필라1 클러스터 |
| 2026-04-07 | 🔗 내부링크 | tiebreak→split-pot, hand-rankings-confusing→vs-7poker, game-order→blind 링크 추가 | inbound 링크 보강 3건 |
| 2026-04-07 | 🖼️ 이미지 최적화 | 200KB 초과 8장 재압축 (최대 350K→209K) | 전체 200KB 이내 기준 달성 |
| 2026-04-06 | ✍️ 포스트 발행 | holdem-hand-rankings-confusing (족보 헷갈리는 경우 TOP5) | 필라1 클러스터 |
| 2026-04-03 | ✍️ 포스트 발행 | holdem-tiebreak-rules (족보 타이브레이크 규칙) | 필라1 클러스터 |
| 2026-04-02 | ✍️ 포스트 발행 | holdem-hand-rankings (홀덤 족보 순위) | 필라1 허브 — 족보 클러스터 중심 |
| 2026-04-01 | ✍️ 포스트 발행 | apt-jeju-classic-2026-guide (APT 제주 클래식 가이드) | 토너먼트 카테고리 |
| 2026-03-31 | ✍️ 포스트 발행 | holdem-beginner-mistakes-10 (초보 실수 10가지) | 초보 가이드 카테고리 |
| 2026-03-30 | ✍️ 포스트 발행 | holdem-overbet-strategy (오버벳 전략) | 블로그 포스트 표준 레퍼런스 글 지정 |
| 2026-03-28 | ✍️ 포스트 발행 | holdem-outs-calculation (아웃츠 계산법) | 필라3(확률) 클러스터 |
| 2026-03-27 | ✍️ 포스트 발행 | holdem-starting-hand-range (스타팅 핸드 레인지) | 필라4 허브 |
| 2026-03-26 | ✍️ 포스트 발행 | holdem-odds-calculator (포커 확률 계산기) | 필라3 허브 핵심 글 |
| 2026-03-26 | ✍️ 포스트 발행 | holdem-blind-meaning (홀덤 블라인드 뜻) | 필라2(규칙) 클러스터 |
| 2026-03-24 | ✍️ 포스트 발행 | holdem-game-order (홀덤 게임 진행 순서) | 기초 용어 |
| 2026-03-24 | ✍️ 포스트 발행 | when-to-fold-preflop-holdem (프리플랍 폴드 기준) | 전략 카테고리 |
| 2026-03-17 | ✍️ 포스트 발행 | bluffing-strategy-when-and-how (홀덤 블러핑 전략) | 전략 카테고리 |
| 2026-03-14 | ✍️ 포스트 발행 | position-is-everything-in-holdem (포지션 전략) | 필라5 허브 |
| 2026-03-10 | ✍️ 포스트 발행 | wsop-2025-tournament-guide (WSOP 2025 가이드) | 토너먼트 카테고리 필라8 허브 |

**총 29개 발행 / 목표 50개**
