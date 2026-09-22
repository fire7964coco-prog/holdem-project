# CALC-KO-1 브리프 — 한국어 계산기 SPR·아웃츠·ICM 잔여 정정

> 작성일 2026-09-22 · 대상 브랜치 `harden-calc-ko`
> 비교 원천 = 현행 `components/calculator/dict.ts` + `components/calculator/calculator-tool.tsx`
> KO 대상 = `app/calculator/calculator-client.tsx` + 사실 정정에 직접 걸린 `app/calculator/faq.ts`

## 0. 범위와 동결

- 수정 대상: SPR·아웃츠·ICM의 수치, 조건, 조언, 라벨, 화면 동작.
- 제외: Equity 탭, 공용화, 새 기능, SEO 재조준, 포스트, H-3 오프수트 확장.
- 동결: `HAND_TABLE`, `fallbackTier`, starting 티어와 집계 요약. Q10의 starting·`outs.exactNote` 정정은 다시 열지 않는다.
- EN·공용 결함은 KO에 무비판 이식하지 않고 진행 파일 §5의 헤드 요청으로 분리한다.

## 1. 베이스라인과 게이트 사각

- `npm run check:calc-parity:selftest` = 59/59.
- `npm run check:calc-parity:all` = en + 10로케일 + ko, 12사본 불일치 0.
- 단 KO는 H(`starting.summary`↔`HAND_TABLE`)·I(`HAND_TABLE`/`fallbackTier`/`RANKS`)·landing description만 검사한다. SPR·아웃츠·ICM 문자열과 동작은 이 초록 결과의 커버리지 밖이다.

## 2. 아웃츠 — 남은 KO 델타

- 플랍에서 한 번의 베팅에 대응할 때 필요한 `flop → turn` 한 장 확률(`outs / 47`) 상태·결과 카드가 없다. 9아웃츠는 19.1%이며, 두 장을 모두 공짜로 보거나 올인일 때만 35.0%를 쓴다.
- 프리셋 `너트 플러시 드로우`는 9아웃츠의 필요조건이 아니다. 일반 플러시 드로우도 9아웃츠다.
- 오버카드 6아웃츠는 항상 clean하지 않다. 메이드 핸드 상대에선 맞아도 질 수 있어 할인해야 한다.
- 정적 표는 7개 예시와 두 열뿐이다. 현행 EN의 1~20아웃츠 전수표, flop→turn 열, Rule of 4·2 열과 조건 주의를 KO에 맞게 반영한다.
- `exactNote`는 Q10에서 이미 「큰 글씨 쪽」으로 닫혔으므로 건드리지 않는다.

## 3. SPR — 남은 KO 델타

- 입력 라벨 `유효 스택 (내 스택)`은 정의가 틀렸다. 유효 스택은 두 플레이어 중 더 짧은 스택이다.
- 낮은 SPR의 TPTK 커밋 조언에는 드라이 플랍 조건이 필요하다. 페어드·3플러시·3스트레이트 보드나 셋/스트레이트급 액션 앞에서 원페어는 여전히 원페어다.
- 중간 SPR의 `원페어 상황 봐서`, `드로우 위험 대비 수익 계산`은 실행 조건이 없다. 1~2스트리트 뒤 팟 컨트롤, 폴드 에쿼티가 있을 때 세미블러프라는 현행 EN의 구체 조건을 한국어로 반영한다.
- 정적 SPR 표에도 같은 조건을 맞춘다.
- 공용 결함: 반올림한 SPR로 존을 고르므로 실제 3.95~3.99가 4.0으로 표시·분류되는 등 경계 오분류가 있다. KO 단독으로 고치지 않고 헤드 요청한다.

## 4. ICM — 남은 KO 델타

- 도구 설명에 콜/폴드 비교 방법이 없다. 승리 후 ICM과 탈락 후 ICM을 실제 승률로 가중해 폴드 값과 비교해야 한다. EN FAQ의 단순 `average` 표현은 그대로 이식하지 않는다.
- 동적 결과 표에 현행 EN의 raw chip chop 열이 없다. ICM 값과 같은 입력에서 직접 비교할 수 있도록 추가한다.
- `+차이 = 숏스택 보호 구간`은 과도한 일반화다. 버블에서 보통 미들스택의 리스크 프리미엄이 가장 크고, 블라인드에 먹힐 만큼 짧은 스택은 보호할 것이 적은 예외다.
- 버블 예시는 칩리더가 `숏스택`만 압박하라고 단정한다. 일반적으로 가장 묶이는 쪽은 미들스택이므로 그 조건을 고친다.
- 기존 3인 딜 표의 수치는 스택 50/30/20, 상금 90/40/20만원에서 각각 61.79/48.50/39.71만원으로 맞다. 지급 구조를 명시해 재현 가능하게 만들고, 이를 기계적으로 현행 EN 4인 예시로 바꾸거나 SEO 문맥을 재조준하지 않는다.
- raw chip chop과 현장에서 부르는 save-and-chop을 구분하고, ICM의 동등 실력·다음 블라인드 미반영 한계를 적는다.
- 동적 `차이`는 비율의 차이이므로 `%p` 라벨/표기로 고친다.

## 5. 검산 앵커

- 아웃츠: `1 - C(47-o,2)/C(47,2)`, `o/47`, `o/46`, Rule of 4·2. 레포 스크립트로 1~20 전건 재산.
- ICM: Malmuth-Harville 구현을 레포 `scripts/calc-reference-tables.ts`·`scripts/calc-icm-example.ts`와 독립 대조.
- 대표 입력: SPR 3.9/4/7.9/8/14.9/15, outs 4/9/15 × 세 스트리트, 동적 ICM과 3인 딜 표.

## 6. C 단계 필수

- C 직전 `git merge main`.
- `npm run check:calc-parity:selftest`, `npm run check:calc-parity:all`, 관련 게이트, `npm run build`.
- 로컬 별도 포트에서 390×844·1440×900 촬영. `report.json`의 overflow·console·failed request와 필요한 원본 seg 확인.
- 1차 역할별 독립 검수 뒤 수정 후 diff 기반 2차 교열.
