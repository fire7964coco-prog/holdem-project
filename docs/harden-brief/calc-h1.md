# CALC-H1 — K9s·Q9s·J9s 정적 티어 등재

## A. 확정 범위

- 사용자 승인 잔여 마감 플랜. 정본 `en-first-queue` §2-H H-1 및 `calculator-landing-rewrite` §5의 겹치는 K9s/Q9s 항목만 함께 닫는다.
- `settled-decisions` §3-F/H/I 원문 확인. 97s·86s 등 다른 항목 보강과 H-3는 이번 회차 밖, 폴백 함수 불변.
- 두 HAND_TABLE에 K9s/Q9s/J9s T3 추가. EN+10locale+KO 설명·조건부 액션·T3 요약 동시 반영.
- EN desc: K9s — paired king domination, Q9s — straight potential/stronger queens, J9s — suited one-gapper/straight and flush potential.
- EN action: Open-raise CO/BTN when folded to you; facing a raise, weigh position, price and effective stacks.
- 형제 K10s/Q10s/J10s도 T3. 새 권고는 앞 전원 폴드와 상대 레이즈를 분리하고 무조건 콜·3벳을 제시하지 않는다.
- 47→50 정적항목, 122→119 폴백항목. T4→T3의 12콤보 이동이며 T1~4 총654 불변을 전수 검산했다.

## B. 검증

- 두 실제 구현에서 HAND_TABLE/getHandName/fallbackTier를 AST 추출해 169타입·1326콤보 전수 계산. 변경 집합은 K9s/Q9s/J9s T4→T3 세 개뿐, 나머지166타입 불변. T1~5 타입7/8/12/86/56, 콤보46/44/66/498/672. T1~4합654=49.3212669683%, 오프수트 확장0.
- `check:calc-parity:all` 12/12 불일치0, selftest59/59. 사본-사본뿐 아니라 H/I 원천-사본 축 통과.
- UI 실제 선택42개: 12locale390px+EN/KO1440px × K9s/Q9s/J9s. T3표시·CO/BTN조건·overflow0·pageerror0. 원본요소 PNG로 EN/KO/de/ja 문구·요약줄바꿈 확인.
- 독립 보조는 본 담당 EN/KO/두 구현 diff를 수학/실전/교열/범위로 검수하고169타입을 별도 재계산해 일치. 본 담당은 보조작성10locale 문면을 독립 통독. 신규 차단0. 본체 마감 검수 별도.
- C 시작 main `e897bae4` 수신. starting 이외 완료된 탭·FAQ·포스트·SEO·새 기능은 변경하지 않는다.
- `npm run build` 773페이지 및 postbuild 통과. 기존 meta 숫자 마감 경고21건은 유지됐으며 새 차단은 없다. 빌드 생성 sitemap은 커밋에서 제외했다.
