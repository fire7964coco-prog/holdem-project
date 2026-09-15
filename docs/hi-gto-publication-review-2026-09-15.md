# HI GTO 해설 13편 — 제작·검수 기록

기준일: 2026-09-15. 대상은 `lib/gto-series.ts`의 HI ①–⑬이다. **제작·독립 검수·정정 교열·최종 검증 및 공개 발행 완료.** [힌디어 솔버 허브](https://www.holdemmaster.com/hi/solver)에서 전편으로 연결된다.

## 입력·집필

- 사용자 「다음 힌디어 진행, 고품질 포스팅」에 따라 [검색 팩](keyword-bank/hi-gto-series.md), [집필 브리프](hi-gto-translation-brief.md), [원문 계약](hi-gto-source-contract.md)을 준비했다.
- Google 인도 설정의 실제3쿼리·관련 공개 교육 원문13개를 비교했다. 자동번역/원문 언어/제외한 결과를 구분한다. 검색량·SD·전체Top10/PAA를 측정했다고 주장하지 않는다.
- 최신 EN13파일 해시·H2·FAQ·표행은 직전 ID 계약과13/13 일치했다. 전체 EN와 승인된 N01–N24·C01–C12가 집필 입력이다. GPT-6 Astra가 ①–④/⑤–⑧/⑨–⑬의4/4/5 저작 배치를 나눠 작성했다.
- 쉬운 데바나가리 산문·आप·हैंड와 라틴 포커 용어를 쓴다. 표·고지·논거를 보존하고, UI 축어는 실제 화면을 따른다. 새로운 개인 경험·새 solver 실행을 만들지 않는다.

## 실제 HI 미디어

[미디어 검수 기록](hi-gto-media-review.md): 실제 HI OOP13화면+range차트13장, q82 WebP26장. 담당 AI가 최종26장을 모두 직접 열어 글자·보드·플레이어·수치를 확인했다. MS와 표시수치530개 대조 불일치0이다. OOP1200×849, chart1200×675, 별도 IP 전략 그림을 만들지 않았다.

## 본체의 수치·카드 계산

근거: 현재 `.solver-captures/data-hi.json`, `tmp/hi-numeric-proof.mjs`와 실행 결과 `tmp/hi-numeric-proof.json`.

- 13스팟의 EV합=pot·equity합=100·반올림 범위 내 action합을 확인했다. EQR26개를 EV/(pot×equity)로 재계산했으며 표시값과 최대0.25721%p 차이로 기존0.3%p 허용 안이다.
- Pot odds·MDF·backdoor·⑦역사적단위·raise-to·집계역산·geometric sizing·river잔액·보드확률 등 산술21항목을 직접 계산했다.
- 직전 원문 계약의 명시 카드사례를 **입력과 기대주장만** 가져와 현재 evaluator로 다시 조합했다. 베스트5장22사례·다음카드draw16사례·4보드의 합법 홀카드 전수 열거가 기대주장과 일치했다. 이전 보고서의 pass나 계산 결과를 복사하지 않았다.
- 이 검산은 해당 입력의 카드·산술 판정이다. draw 완성카드는 상대를 반드시 이기는 clean outs를 뜻하지 않는다. 모든 개별 combo의 solver 전략이나 HI 산문의 의미를 보증하지 않는다. 실제 본문은 아래의 독립 전략·수학 렌즈에서도 대조했다.

## 전체 독립 렌즈와 정정

- **언어 — GPT-5.6 Sol**: 13편의 본문·메타·H2·직답·FAQ·표·alt/caption·CTA와 기존3편의 좁은 diff를 읽었다. N01–N24·C01–C12의 조건 누락·의미 역전은 찾지 못했다. ⑨–⑫에 집중된 단어·숫자·구두점 공백, 직접 인용 UI, ⑩ 설명문의 문법과 ⑪–⑫ 일부 어순, ①·④·⑥ 표현을 수정 대상으로 판정했다. 근거 `tmp/hi-language-review.md`.
- **SEO — GPT-5.6 Sol, 별도 검수자**: 13편 검색 의도·메타·H2/FAQ·허브·본문링크124개·readnext26개를 확인했다. 확정 지적은 ⑨–⑫ 공백과 ⑩ description 문장이다. 공유 tags는 별도 indexable archive가 없어 검색 의도 오류로 판정하지 않았다. 근거 `tmp/hi-seo-review.md`.
- **전략 — GPT-5.6 Sol, 별도 검수자**: 13편 전체와 기존3편 diff에서 range/EV/EQR·action 주체·노드·한정 조건을 확인했다. **S-HI-01**: ⑥의 22가 `66333`에서 “더 높은 Two Pair를 플레이”한다는 초안은 Full House를 잘못 분류했다. EN의 대응 설명도 리버 조건이 생략돼 있다. HI를 `6633K`에서 보드 Two Pair를 플레이하는 정확한 구체 사례로 고쳤다. 근거 `tmp/hi-strategy-review.md`, [원문 계약의 정정 범위](hi-gto-source-contract.md#hi-독립-검수에서-구체화한-런아웃-조건).
- **수학 — GPT-5.6 Terra**: 현재 capture13개·EQR26개, 산술21식, 카드14사례·draw4사례·straight4보드를 독립 재계산하고 표637행·FAQ67개의 수치·조건을 대조했다. 확정 결함은 같은 S-HI-01 한 건이다. 수정 후 실제 문장과 `6633K/66333/66332` 세 런아웃을 다시 판정해 종결했다. 루트도 세 사례의 베스트5장을 직접 재계산했다. 근거 `tmp/hi-math-review.md`, `tmp/hi-counterfeit-root.json`.
- 작성자가 네 렌즈의 지적을 검토한 뒤 최소 수정했다. ⑨–⑫의 UI 직접 인용은 `Bet 14.9bb (66% pot)`, `Bet 2bb (33% pot)`, `EV (bb)`를 보존하고 일반 산문에는 `2 bb`처럼 띄운다. 공백 정정에 줄바꿈까지 소비하는 `\s` 치환을 쓰지 않는다.
- **정정 사후 교열 — 별도 GPT-5.6 Sol**: 수정7파일41hunks(150+/150−)와 연결5파일10hunks 전문, 실제 HI/EN 대응 문단을 읽었다. 기존 지적은 모두 종결됐고 수정이 새로 만든 확정 결함은0건이다. UI 축어·⑩ desc147자·bold/danda·수치/주체/링크와S-HI-01을 확인했다. 현재13파일 SHA-256은 manifest13/13 일치하며 수정하지 않은6편도 불변이다. 근거 `tmp/hi-final-proof.md`(SHA-256 `469342b2563eaa1a31ffb19261d731ccf5bb7f48649b1dff8c668ab30fa8cf6e`).
- 이는 역할을 나눈 **AI 작성·검수**다. 현지 인간 감수나 새 solver 실행을 주장하지 않는다.

## 기계 도구 준비

- 구조 게이트에 HI 직답·readnext·readTime·숫자 규칙, 기존 EN 링크 자리별 HI 목적지 매핑을 추가했다. 숫자 게이트의 ⑦98.0/62.9 보충값 허용은 해당slug·HI/MS에만 한정된다.
- 두 도구에 명시 `--slugs=`/`--slug=` 배치를 지원하고 누락파일을 실패 처리한다. 수치 정본 파서가 아래의6열 action표를 EQ/EQR표로 중복 읽던 부분은7열 정본표만 읽도록 좁혔다.
- 구조 자체테스트24/24·수치38/38, 기존MS/ID 구조13/13·수치91일치/오류0·각13/13커버리지. 최종 HI 전체도 구조13/13·수치91일치/대조불가0/오류0·KO/HI각13/13이다. 기존103회 비교는 action표의 중복 파싱이 포함된 계수였으며, 이번91회는 올바른13행을 대상으로 한 값이다.
- GPT-5.6 Terra가 도구를 독립 검수하고 정정 뒤 재확인했다. 원본 유래의 빈/중복 locale 성공, 미지 capture 대상의 빈 data 덮어쓰기, 빈/불완전 chart 입력 성공을 거절하도록 고쳤다. 임시 QA의 legacy POST export 판독·정상 bb 공백/3-bet 표기/숫자목록 오탐과 빈 대상·불완전 root proof 통과도 바로잡았다. 근거 `tmp/hi-tool-review.md`.
- 수정 담당은 격리 입력으로 잘못된 CLI20건·손상chart10건 거절과 정상 부분chart1/1 생성을 확인했다. 실제 data-hi와 완성WebP26개의 전후 SHA-256은27/27 일치했다. 독립 검수는 별도 실행한 오류 CLI·격리 빈chart 거절과 정적 경로를 구분해 기록했다.
- 평가된 HI13 표637행의 숫자·카드·열수를 EN과 대조했다. bb 앞 공백, lexical 3-bet/three-bet, 숫자목록 구분 및 EN의 `an eight`/HI의8 동등성을 정규화하며 실제 단위·수치·rank+suit 변화는 보존한다. FAQ67, 메타길이, 실제 이미지와 readnext26 대상 title/hero도 확인했다. 근거 `tmp/hi-series-audit.json`.

## 연결·전체 검수·빌드·운영

- HI index13등록, solver허브13링크, 기존 입문3편역링크4개를 연결했다. 읽을 글26카드는 관련 신규HI글로 확정했다. rules-for-beginners의 draw확률/현재call가격 문단은 추가bet가 없는 경우와 미래street가격을 구분하도록 좁게 보완했다. 기존8편의 전면 경화가 아니다.
- `audit:hard --locale=hi --uncovered`: 언어 불변 항목21/21·0err/0warn. 카드 미판정61문단은 자동 통과로 해석하지 않는다. 신규13의 masterUpdated는 최신 EN과 일치하고, 기존입문7편 꼬리드리프트·1편stamp부재는 기존 부채로 남는다.
- `check:image-reuse --locale=hi --strict`: 21편·참조50장,0red/0orange. HI클러스터 지도 부재로 같은 필라 안 공유 판정은 지원하지 않는 한계가 있다. 신규26장 각각의 실제 보드·화면·경로 검수와 구분한다.
- 최종 정정 후 전체 `npm run build` **EXIT0**(`tmp/hi-build-final.log`, 출력70 KO+577 intl). 첫 초안 미리보기는 ⑨readnext의 줄바꿈 누수로 실패했고, content 내부 독립블록 복구와 잔여코드 제거 후 전체 재빌드가 통과했다. 기존 Next 설정이 타입검사와 lint를 생략하므로 전체 타입·lint 통과를 주장하지 않는다.
- 교정 전 실제 Chromium 390px13편에서 HTTP200·HI 언어/H1·메타·canonical·자기 hreflang·가로 넘침0·히어로1개와 FAQ67의 source/schema/렌더 전문 일치 및 각 첫 FAQ 확장을 확인했다. WebP26개·EN→HI13·허브13·역링크4도 확인했다. 루트는 모바일13개 상단·대표 chart·데스크톱2개 chart·⑨ 우측 열·⑦ 별도 solve 고지를 직접 열어 보았다.
- 브라우저 QA를 GPT-5.6 Sol이 코드·저장 증거와 대표⑥ 재현으로 독립 확인했다. 확정 기능 결함은 없었다. 개별 click/decode 상태를 JSON에 보존하지 않는 점과 선택 표만 geometry를 검사하는 범위를 기록했다. 상단에서 긴 자동 스크롤 직후 클릭한 경계 실험은 원인 미확정이며, 차트를 거쳐 FAQ에 도달한 실제 QA 순서에서는 정상 확장된다. 근거 `tmp/hi-render-review.md`.
- **최종 빌드 화면**: `tmp/hi-render-final/report.json`에서13편 HTTP200·FAQ source/schema/render67·가로 넘침0·메타/H1/canonical/자기 hreflang·hero·첫 FAQ 확장 오류0이다. 같은 실행의 `delivery-report.json`은 WebP26/EN→HI13/허브13/역링크4 모두 통과했다. 변경17 URL은 sitemap 각1회이며, 허브의 git 기반 lastmod는 콘텐츠 커밋 후 재생성한다.
- 최종⑦/⑨ 선택 표에서 마지막 열 도달과⑦ 별도 solve 고지 순서·단위 검사를 다시 통과했다(`tmp/hi-table-final.log`). 루트는 정정 후⑥·⑨·⑩·⑪·⑫ 문단 화면을 직접 열어 힌디어·굵은 글씨·UI 인용·표시를 확인했다.
- 정본이 지정한 `audit:hard --schema`도 EXIT0이다. 이 경로는 **KO 산출물**을 검사하므로 HI FAQ 통과 근거로 사용하지 않는다. KO42편의🔴0·기존 교차표🟠4와 FAQ 소스/산출 일치를 확인했으며, HI67개 검증은 위 실제 브라우저 경로가 담당한다.

## 공개 배포·운영 확인·검색 통지

- 콘텐츠 `f05763d8`과 자동 sitemap `570eb121`을 main에 일반 push했다. **2026-09-15 19:28:48 KST**, 정확한 SHA `570eb1213b3645c81bbe8e33e0a9237631a0f148`의 [Vercel success](https://vercel.com/masters-projects-ca17ea56/holdem-project-milk/FwdQw2ARJx5GgdSyrfcCwAxJZ8wG)를 확인했다. sitemap 후속 생성은 HI 허브와 홈의 git 기반 lastmod만09-15로 갱신했다.
- **운영 확인19:30:15 KST**: 신규13편 HTTP200, HI 언어·H1·메타·canonical·자기 hreflang·히어로1개·가로 넘침0, FAQ67개 source/JSON-LD/화면 일치와 첫 FAQ 확장을 확인했다. 대체언어는 페이지별11개(10언어+default), 실제 WebP26개200, EN→HI13·허브13·역링크4 정상이다. 공개 sitemap에서 변경17 URL 각1회·lastmod09-15를 확인했다. 근거 `tmp/hi-live/report.json`, 같은 실행의 `delivery-report.json` 및 `tmp/hi-live.log`.
- **IndexNow19:30 KST**: 신규13편+역링크수정3편+허브1개의 **17 HI URL만 `--urls`로 HTTP200 접수**했다. 날짜 전체나 이미 접수한 다른 언어를 재전송하지 않았다. 근거 `tmp/hi-indexnow.log`. 접수는 색인 완료를 뜻하지 않는다. GSC 수동 작업은 기존 사용자 보류 결정을 따른다.
- EN 원문의 counterfeiting 조건 누락은 `docs/en-first-queue.md` §3에 남겼다. HI 정정 종결과 형제 언어의 후속 적용을 구분한다. 이번 임시 검증 `.mjs`는 마감 때 제거하며 JSON·diff·로그·화면 증거는 로컬 `tmp/`에 남긴다.
