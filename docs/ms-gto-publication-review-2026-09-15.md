# MS GTO 해설 13편 — 제작·검수 기록

기준일: 2026-09-15. 대상은 `lib/gto-series.ts`의 MS ①–⑬이다. 집필·전편 검수·수정 부분 교열을 마쳤다. 공개 배포 결과는 아래 운영 확인 절에 기록한다.

## 집필 입력과 제작

- [검색 조사](keyword-bank/ms-gto-series.md)에서 Google의 MY/MS 설정으로 세 쿼리를 직접 열고 관련 공개 원문을 비교했다. 검색량·경쟁 순위·전체 PAA를 측정했다고 주장하지 않는다.
- [공통 브리프](ms-gto-translation-brief.md)와 [원문 계약](ms-gto-source-contract.md)을 적용한다. 현재 EN13 파일 해시는 직전 확정 원문 계약과 모두 일치했다. 최신 EN 전체와 승인 정정 N01–N24·C01–C12가 입력이다.
- title·seoTitle·본문의 숫자는 전체 range, 개별 combo, 각 bet size를 구분한다. ⑩의97.8%에는 큰 bet라는 조건을 명시하며 전체 bet98.1%와 구별한다.
- [미디어 검수](ms-gto-media-review.md): 실제 MS OOP 화면13장과 range 차트13장, q82 WebP26장을 제작했다. 담당 AI가 원본26장을 열어 확인했으며 표시값530개는 직전 ID 자료와 소수 구분자 정규화 후 모두 일치했다. 새 solver 계산이 아니다.
- 기존 MS 입문 글과 연결하는 과정에서 `texas-holdem-rules-for-beginners`의 두 카드 draw확률/현재 call가격을 바로 비교하던 조건 누락을 보완했다. 현재 EN·ID 대응 문단에도 한 카드 가격 구분이 있음을 확인했다. 이번 수정은 MS 연결 문단의 좁은 보완이며 기존 입문 글 전체의 신규 경화 작업은 아니다.

## 본체의 독립 계산

근거: `tmp/ms-numeric-proof.json`, 실제 입력 `.solver-captures/data-ms.json`.

- 13스팟 EV합=pot, equity합=100, 표시 action합은 반올림 범위 안이다.
- 26개 EQR을 EV/(pot×equity)로 재계산했다. 표시값과 최대0.25721%p 차이는 기존0.3%p 허용 범위 안이다. 출력값을 임의로 바꾸지 않았다.
- Pot odds·MDF·backdoor확률·⑦과거 exploitability 단위·집계 역산·raise-to·geometric sizing·river잔액·보드확률 등 산술21항목 통과.
- 명시 카드22사례의 베스트5장을 조합했다. 16개 draw예시에서 남은 카드 전부를 넣어 다음 한 장으로 straight/flush가 되는 outs를 직접 셌다. 15·12·8·4 outs 분류가 일치하며, 이는 상대를 반드시 이기는 clean outs를 뜻하지 않는다.
- 4개 보드에서 남은 덱의 합법 홀카드 전수조합을 계산하여 가능한 straight rank종류를 확인했다. QJT는AK/K9/98,987은JT/T6/65,652는43,765는98/84/43이다. 실제 예제 range에 포함되는 부분과 보드만으로 가능한 부분은 별개다.
- 이 검산은 위 항목의 확인이다. 모든 개별 combo의 solver 전략, 미계산 후속 노드 또는 MS 산문의 자연스러움까지 보증하지 않는다.

## 기계 검사와 도구의 독립 검수

- 평가된 MS Post13개를 최신 EN과 대조했다. 표637행의 열·카드·숫자 토큰, FAQ67개, 메타 길이·날짜, readnext26개의 실제 제목·hero 및 이미지 경로가 모두 일치했다. MS 등록은 입문8+해설13=21편이다.
- 본문 MS 내부링크는124개(블로그82+solver42), readnext는 별도26개다. EN의 기존 전문 글 링크26자리를 승인된 MS 목적지로 바꿨으며 개수나 중복을 생략하지 않았다. 랜딩13링크·기존 입문3편의 역링크4개를 연결했다.
- `audit:hard --locale=ms --uncovered`: 21/21, 오류0·경고0. 일반 게이트가 자동 판정하지 못한 카드 문단60개 중 새 시리즈40개를 별도로 읽었다. 표 대조·위 산술/카드 열거와 전략 렌즈로 보완하며, 기계의0을 모든 카드 주장 검증으로 해석하지 않는다. 기존 입문 글의 꼬리 드리프트7·masterUpdated 미기재1은 이 신규 시리즈13편의 동기화와 구분한다.
- `check:image-reuse --locale=ms --strict`: 공유 지적0. MS에 클러스터 지도가 없다는 한계를 표시한다. 이번13편의 실제 hero13장·본문chart13장은 서로 다른 파일이다.
- 집필 모델과 다른 `gpt-5.6-sol` 도구 검수에서 링크 정규식이 잘못된 suffix를 버리던 기존 false pass를 확인했다. 전체 목적지를 비교하도록 수정하고 악성 suffix·trailing slash 픽스처를 추가했다. 강조 내부의 단일 등호도 렌더러와 같은 방식으로 세도록 수정했다.
- ⑦의 별도 root98.0%·316.5/503=62.9%는 §4-B-3에 있는 보충값이다. MS 해당slug의 두 값만 수치 집합 차이에서 허용하고 원래 값의 누락·변조는 계속 실패한다. 수정 후 독립 재검수: 구조 자체테스트16/16, 수치 자체테스트30/30, MS 구조13/13·수치103일치/오류0. 근거 `tmp/ms-tool-review.md`.

## 전편 독립 검수와 수정 부분 교열

- 언어: `gpt-5.6-sol`이 13편 전문을 읽고 수동태의 `oleh`, 산문·작성 표의 숫자와 `bb` 간격, 일반 명사 `kombo`, 숫자 rank 명사, 비교 표현과 미완성 직답을 확인했다. MS 정본에 맞춰 `dihitung` 12곳을 `dikira`로 통일했다. 실제 UI 인용은 화면 표기를 유지한다.
- SEO·연결: `gpt-5.6-terra`가 13편 메타·H2·목적지와 readnext26개를 확인했다. ⑥의 부자연스러운 solver 링크 질문을 실제 c-bet 질문으로 고치고, ⑪의 solver 링크에 잘못 붙인 자기 글 hero 썸네일을 제거했다. 랜딩과 기존 글 역링크도 확인했다.
- 수학·카드: 별도 `gpt-5.6-terra`가 EQR26개, 산술21항목, draw 열거16사례, 보드4개의 합법 straight 종류와 베스트5 근거를 확인했다. 본체의 프로그램 출력만으로 모든 전략을 인증하지 않고 실제 글의 분모·조건과 대조했다. 확정 결함은 없었다.
- 전략: `gpt-5.6-sol`이 실제 13편에서 인용한 문장과 원문 계약·직접 계산을 짝지어 검수했다. ⑦의 2026-08-20 별도 계산·root 수치·내부 단위, ⑩의 큰 bet97.8%와 전체 bet98.1%, draw와 clean outs, MDF 전제와 UI가 제공하는 범위를 확인했다. 확정 결함은 없었다. 근거가 틀린 앞선 전략 요약은 채택하지 않았으며 실제 원문 증거를 담은 이 보고서로 판정했다.
- 위 검수는 AI 역할 검수다. 현지 인간 감수나 새 solver 실행을 주장하지 않는다. 근거: `tmp/ms-language-review.md`, `tmp/ms-seo-review.md`, `tmp/ms-math-review.md`, `tmp/ms-strategy-evidence-review.md`.
- 수정 부분만 별도 `gpt-5.6-sol`이 교열했다. diff1,273줄·17파일·97hunks, 새13편·랜딩13링크·기존3편의4역링크를 모두 읽었다. 동결본과 최종본의 숫자·수트 카드 토큰 순서와 개수는 13편 모두 일치했다. 교열에서 잡힌 `"Bet 4.1bb"`의 축어 UI 간격 한 곳을 되돌렸다. 근거 `tmp/ms-correction-proofread.md`.

## 빌드와 실제 화면

- 전체 `npm run build` 성공: 70 KO+564 intl, 정적 페이지749/749 생성, 비한국어 메타637개 검사 오류0. 기존 Next 설정은 TypeScript 검사와 lint를 생략하므로 전체 타입 검사 통과를 뜻하지 않는다.
- MS 구조13/13·수치103일치/미판정0/오류0를 수정 후 재확인했다. 공통 구조 파서 수정의 ID 회귀도13/13 통과했다. MS hard21/21의 언어 불변 항목은 오류0·경고0이다.
- `audit:hard --locale=ms --schema`는 기존 구현이 KO `.next/server/app/blog`를 읽으므로 MS FAQ 판정으로 채택하지 않았다. 실제 MS 페이지에서 JSON-LD를 파싱해 소스13편과 **FAQ67개**가 일치함을 확인했다.
- 모바일390×844에서13편 전수 확인: HTTP200, H1·SEO title·`lang=ms`·canonical·자기 hreflang, 각 글 hero1개, 본문 이미지 alt, FAQ 마크업 누출0, 가로 넘침0. 핀치 확대를 막는 viewport 설정이 없다. 13편 상단과 대표 모바일 차트·데스크톱을 직접 열었으며 ⑦의 별도 계산 고지가 표 앞에 나오는 것도 확인했다.
- 실제 WebP26개, EN13편의 MS 역방향 hreflang, 랜딩13링크, 기존3편의 역링크4개를 확인했다. 빌드 sitemap736 URL에서 변경17경로가 각각 한 번 존재한다. 랜딩 lastmod는 콘텐츠 커밋 뒤 생성기로 갱신한다.
- 로컬의 제한 없는 모바일 크기 새 브라우저 컨텍스트3회: LCP200/236/232ms, CLS0, 초기 리소스 약740–749KB. 현장 사용자 성능이나 통신망 제한 결과가 아니다. 최종 운영 측정은 배포 뒤 따로 확인한다.
- 근거: `tmp/ms-build-final.log`, `tmp/ms-render/report.json`, `tmp/ms-render/delivery-report.json`, 실제 화면 PNG.

## 운영 확인

콘텐츠·sitemap 커밋과 push, Vercel 배포, 실제 운영13편·이미지26개·변경17 URL의 lastmod, IndexNow 접수 결과는 완료 뒤 기록한다. GSC 수동 작업은 기존 사용자 보류 결정을 따른다.
