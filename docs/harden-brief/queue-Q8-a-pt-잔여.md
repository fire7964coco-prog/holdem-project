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
