# Q8-a — pt 기존 용어 잔여

2026-09-22 읽기전용 준비 완료. **Q14 머지·동기화 이후 착수**하며 아래 좌표는 축어 재검색한다. 정본은 `docs/translation-terms-pt.md`, WORKLOG pt 회차2·4의 기존 판정, 현행 pt 코퍼스다. PT 전용 local-voice/market-profile 문서는 없다.

## 범위

8파일21자리: 전략 결함 용어20 + 손실 비유1. 수치·카드·조건·링크·slug·이미지·SEO 조준 불변. 실제 수정 글의 updated만 규칙대로 처리하고, 용어 교정만으로 masterUpdated를 임의 상승시키지 않는다. 새 표현 선호나 사실 검수 회차로 확장하지 않는다.

공통 경로 `lib/posts-pt/holdem-*.ts`. 아래 줄번호는 Q14 전 main 기준이다.

| 파일 | 좌표/구문면 | 처방 |
|---|---|---|
| blind-meaning | 144 um vazamento constante de fichas | um leak que custa fichas continuamente 등 해당 명사구만 |
| continuation-bet | 57 virou um vazamento; 98 vendendo um vazamento | virou um leak; ensinando um leak. Q14 수치·조건 유지 |
| equity | 174 os vazamentos se fecharam | comecei a corrigir esses leaks처럼 결함을 고쳤다는 뜻 |
| game-order | 301 é o vazamento mais comum | é o leak mais comum |
| implied-odds | 128 O colchão extra cobre esses vazamentos | O colchão extra compensa essas perdas. 여기서는 전략 실수가 아니라 적중 뒤 손실/미회수 문맥. 다음 줄 leak lento 유지 |
| position-play | 94·147·239·241·286 | 단복수 leak/leaks. 241은 os rebuys permitem repor as fichas perdidas com esses leaks처럼 잃은 칩을 다시 사는 의미 유지 |
| strategy | 77·140·144·150·161·172·204·252 | 단복수 leak/leaks. H2:144·표머리150·FAQ204/252 포함. 명제·6개 개수·결정번호 불변 |
| when-to-fold | 49·120 | O maior leak; foldar pode ser um leak por si só |

정본 코퍼스 선례: fish137/144/150/156/196, cooler124/195, bad-beat200, implied-odds129/160, icm104/167, tvc269/318/369. 단순 다수파 추정이 아니라 기존 교정 문면이다.

## 유지·제외

- **dar/deu/dado raise 유지**: WORKLOG 08-26(4), dar raise 통일 기각(BR 실사용 병존). check-raise·range de raise·raiser도 유지.
- **cartas fechadas / cartas de mão / cartas na mão 다양성 유지**: WORKLOG pt 회차2, 단일화 기각·브리프 정본 충돌. 이번 승인은 기각 재론이 아니다.
- **mesa pareada / jogar a mesa 관용구 유지**: WORKLOG pt 회차2, 카드나열 앞 board와 관용구 mesa 구분. 검색 태그 mesa pareada poker 보존. mesa assustadora도 새 결함 근거 없이 열지 않는다.
- **strategy 허브 결정4·5 링크와 tvc 표 위치**는 EN 공통 구조. pt만 이동하지 않는다.
- pt masterUpdated 부재2(flush-vs-straight·split-pot), shc 옛 AQo/AJo는 이미 완료. 재작업하지 않는다.

## 검증·종료

착수/마감에 대상 pt audit 및 uncovered, drift, structure, answer-echo, hygiene, number-format, seo-sync를 대조한다. 대상8편 커버리지를 확인하고 미검사를 0건 통과로 보고하지 않는다.

최종 diff 독립 교열은 수치·카드·링크·조건 불변과 PT 명사구/동사 결합, H2/표/FAQ 누락을 본다. 신규 문제 없으면 없다고 쓴다. 지적은 원본/이번 편집 유래를 구별한다.

build·FAQ 산출물 검증, 변경 문면 존재/구문면 부재, FAQ 개수 전후 동일, 커밋 뒤 stamp 확인까지. 21자리를 전부 수정 또는 문맥상 별처방으로 닫고 끝낸다. 배포·우편함·정본 상태·lane sync는 본체가 수행한다.


## 실행 결과 — 2026-09-22

### A 확정·B 구현

- queue harden-queue clean HEAD8bfcd35c에서 main603deb7a를 fast-forward로 받음. 마감 전 git merge main도 Already up to date 확인. 기존 Q14·core 조건은 변경하지 않음.
- 위 표의 8파일21자리 실물 재검색 후 전건 수정: 전략 결함20자리 leak/leaks, implied-odds128의 손실 비유1자리 perdas. 새 사실·수치·SEO 재조준 없음.
- 특수 문면: blind144 «um leak que custa fichas continuamente»; c-bet98 «ensinando um leak»; equity174 «comecei a corrigir esses leaks»; implied128 «O colchão extra compensa essas perdas»; position241 «os rebuys permitem repor as fichas perdidas com esses leaks». 나머지는 단복수 명사구만. 앞선 표 좌표21개 그대로이며 누락0.
- dar/deu raise·홀카드3종·mesa 관용구 유지. 정본 terms와 WORKLOG08-26 회차2/4 및 기존 fish/cooler/bad-beat/implied/icm/tvc leak 문면 직접 대조. PT market-profile/local-voice 독립문서는 없으며 새로 만들지 않음. copy-editing 스킬은 현지 문체·동사 결합·핵심 의미 보존에만 적용.
- updated8편 모두09-22: 이미 같은 날이던 blind/game-order/position3편은 그대로, 나머지5편만 날짜변경. masterUpdated8편 모두 원본 그대로.

### C 검증·독립 교열

- 최종21문장을 다시 읽고, 본체 독립 diff 교열에서 신규 blocker0 회신. 손실perdas와 리바이fichas perdidas 처방 적합. 원본 결함은 용어·비유21자리, 이번 편집에서 새 결함 지적0.
- TS AST 전후8편 대조: content·위5개 updated 이외 필드차이0, 문법오류0. slug/title/seoTitle/desc/tldr/tags/image/imageAlt/masterUpdated 및 기타 메타 불변. 숫자 토큰 순서·카드·마크다운 링크 대상/개수·FAQ 질문이 전부 동일. 지정21줄 외 산문 변경0, 포스트 diff26줄=용어21+날짜5.
- FAQ 질문 수 전후 동일: blind8 / continuation-bet12 / equity11 / game-order13 / implied-odds10 / position-play10 / strategy14 / when-to-fold12 = 90.
- audit:hard --locale=pt 착수·마감55편 findings0, 대상8편 모두 실제포함. --uncovered에서 대상6편17문단 출력 재독. 보드 미완성/홀카드·텍스처 나열은 완성핸드 검증으로 주장하지 않음. 이번 편집과 겹친 strategy140의 5♠5♦ + 5♣K♠2♦ = 5♠5♦5♣K♠2♦ 트리플 확인; 50장 중 플랍3장에 남은5 두 장 중 하나 이상 포함 = 1−C(48,3)/C(50,3)=11.7551%, 기존11.8%와일치. 원본 전면 사실검수로 확장하지 않음.
- drift --locale=pt: 55동기·드리프트0·추적불가0. structure: 핵심결손0·링크개수결손0, 꼬리40은 기존별도부채. number-format --locale=pt: 혼용0·소수파0(소수쉼표1992/천단위점249).
- faq-schema --locale=pt: 렌더러계약일치·55/55성립·깨짐0. seo-sync/hangul0. meta:641편 초과0, 기존말미숫자경고20은 범위밖이며 이번8편해당0.
- **커버리지 제한:** answer-echo --locale=pt는55파일을 읽지만 블록0이라 PT echo 미검사; hygiene는CJK170편만, cjk는JSX254편만이므로 PT본문 통과근거아님. 해당명령의0을 PT언어검수완료로 쓰지 않는다.
- git diff --check0. 커밋 전 stamp는 새 updated5건만 미래over로 표시·under0; 선택커밋 직후 재검한다.
- 본체 통합build와FAQ산출HTML/화면검증은 아직 미실행. 동시build 금지 지시 준수. 배포·IndexNow·우편함·진행상태·정본승격·lane sync는 본체 몫. 새 EN-먼저 항목과 새 영구규율 없음.
