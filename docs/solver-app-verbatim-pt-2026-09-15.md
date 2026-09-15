# 솔버 앱 PT 축어·미디어 — 2026-09-15

> 공개 앱 `https://solver.holdemmaster.com/?lang=pt`를 Playwright Chromium으로 열고 실제 DOM·화면에서 채집했다.
> 최초 채집: `2026-09-15T02:04:36Z`. 앱은 언어 적용 뒤 URL의 `?lang=pt`를 지우지만 화면은 PT로 유지된다.
> **이 문서는 화면 축어 기록이다. 전략 설명의 정본은 EN 해설과 `gto-solver-series-spec.md` §4-B다.**
> 앱 목록의 기존 설명에는 이미 폐기된 인과·관찰 범위를 넘는 문장이 남아 있으므로 새 해설의 원문으로 복사하지 않는다.

## 1. 화면에서 쓰는 이름

| 자리 | 실제 PT 축어 |
|---|---|
| 학습 예제 메뉴 | `Spots de estudo` |
| 목록 제목 | `Spots de estudo — exemplos com um clique` |
| 결과 보기 | `⚡ Ver resultados` |
| 목록에서 직접 계산 | `Resolver você mesmo` |
| 결과에서 직접 계산 | `Resolver este spot você mesmo` |
| 뒤로 | `← Lista` |
| 결과 범위 안내 | `Só a estratégia do flop. Quer explorar turn e river? →` |
| 플레이어 선택 | `Jogador:` |
| 첫 액션 안내 | `Esta é a estratégia de quem age primeiro (OOP). Para ver o adversário (IP), mude “Jogador” acima para IP.` |
| 분류 패널 | `Mãos` / `Draws` |
| 요약 | `Resumo` |
| 바 너비 | `Largura da barra:` |
| 바 옵션 | `Normalizado` / `Absoluto` / `Completo` |
| 표시 옵션 | `Mostrar:` / `% da ação` / `EV da ação` |
| 상세 표 | `Mão` / `Estratégia` / `Peso` / `EQ` / `EV (bb)` / `EQR` |
| 전체 행 | `Tudo` |
| 콤보 | `combos` |
| 체크 | `Check` |
| 사용자 입력 순서 | `① Range OOP` / `② Range IP` / `③ Board` / `④ Bet sizes` / `⑤ Calcular` |

**핸드 분류:** `Set/Trinca`, `Dois pares`, `Top pair`, `Segundo par`, `Par fraco`, `Underpair`, `K-high`, `Sem mão feita`, `A-high`, `Overpair`, `Straight`, `Flush`, `Quadra`, `Full house`.

**드로우 분류:** `Gutshot`, `Backdoor FD`, `Sem draw`, `Combo draw`, `Flush draw`, `OESD`.

**숫자도 포르투갈어 표기다.** 결과 실측 예: `98,2%`, `464,0`, `2,09`, `63,00`. 산문뿐 아니라 캡처 추출·차트 계산도 소수 쉼표를 처리해야 한다. 원본 JSON은 축어를 보존하고 차트 계산 단계에서만 숫자로 정규화한다.

## 2. 그룹·플레이어 축어

| 그룹 | 조건 |
|---|---|
| `Single Raised Pot — BTN vs BB (fundamentos)` | `OOP: BB (caller) · IP: BTN (open-raiser) · Pote 5,5bb · Stack 97,5bb` |
| `Pote de 3-bet — BB dá 3-bet e BTN paga (SPR baixo)` | `OOP: BB (3-bettor) · IP: BTN (caller) · Pote 22,5bb · Stack 89bb` |
| `Blind vs Blind — SB vs BB (ranges amplos)` | `OOP: SB (open-raiser) · IP: BB (caller) · Pote 6bb · Stack 97bb` |

결과 셀렉터는 예를 들어 `OOP (BB (caller))` / `IP (BTN (open-raiser))`로 표시한다.

## 3. 스팟 이름·첫 액션 실측

아래는 캡처 키와 실제 표시값의 대응이다. 퍼센트는 개별 반올림값이므로 합이 정확히 100이 아닐 수 있다. IP 화면은 상대의 레인지·EQ/EV/EQR이며 IP의 후속 C-bet 전략이 아니다.

| 캡처 키 | 앱 이름 | 보드 | OOP 액션 빈도(화면 순서) |
|---|---|---|---|
| `srp-dry-ace` | `Board seco A-high` | A♥7♦2♣ | 큰 벳 `0,9%` / 작은 벳 `1,0%` / Check `98,2%` |
| `srp-dry-king` | `Board seco K-high` | K♠8♦3♣ | 큰 벳 `0,1%` / 작은 벳 `0,1%` / Check `99,8%` |
| `srp-broadway` | `Board Broadway conectado, two-tone` | Q♠J♦T♠ | 큰 벳 `0,0%` / 작은 벳 `0,1%` / Check `99,9%` |
| `srp-middle-connected` | `Board médio conectado, two-tone` | 9♥8♥7♣ | 큰 벳 `6,9%` / 작은 벳 `16,8%` / Check `76,2%` |
| `srp-monotone` | `Board monotone` | Q♠9♠2♠ | 큰 벳 `3,2%` / 작은 벳 `8,0%` / Check `88,8%` |
| `srp-paired` | `Board pareado` | 6♣6♦3♥ | 큰 벳 `2,0%` / 작은 벳 `1,0%` / Check `97,0%` |
| `srp-low-rainbow` | `Board baixo e rainbow` | 6♠5♥2♦ | 벳 `3,2%` / Check `96,8%` |
| `3bp-ace-king` | `Board A-high, vantagem do 3-bettor` | A♦K♠2♥ | 큰 벳 `42,2%` / 작은 벳 `57,8%` / Check `0,0%` |
| `3bp-dynamic` | `Board dinâmico two-tone` | Q♥T♥7♠ | 큰 벳 `98,4%` / 작은 벳 `0,7%` / Check `0,8%` |
| `3bp-low` | `Board baixo e seco` | 8♦5♣2♠ | 큰 벳 `97,8%` / 작은 벳 `0,3%` / Check `2,0%` |
| `sb-king-mid` | `Board K-high com um T` | K♥T♦6♠ | 벳 `67,4%` / Check `32,6%` |
| `sb-connected` | `Board baixo conectado, two-tone` | 7♦6♦5♣ | 벳 `9,6%` / Check `90,4%` |
| `sb-paired-ace` | `Board com A pareado` | A♠A♥6♦ | 큰 벳 `0,5%` / 작은 벳 `79,6%` / Check `19,8%` |

벳 크기 축어:

- SRP: `Bet 4,1bb (75% do pote)` / `Bet 1,8bb (33% do pote)`.
- 3-bet pot: `Bet 14,9bb (66% do pote)` / `Bet 7,4bb (33% do pote)`.
- Blind vs Blind: `Bet 2bb (33% do pote)`; A 페어 보드에는 `Bet 4,5bb (75% do pote)`도 있다.

## 4. 산출물·재현

- 원본 화면 텍스트: `.solver-captures/verbatim-pt.json`.
- 전체 스팟 OOP/IP 데이터: `.solver-captures/data-pt.json`.
- 작업용 PNG: `.solver-captures/<key>-oop-pt.png`, `-ip-pt.png`, `-ranges-pt.png`.
- 발행용 WebP: `public/images/gto-<key>-oop-pt.webp`, `gto-<key>-ranges-pt.webp`.
- 검증 기록: `.solver-captures/validation-pt.json`.

```powershell
node scripts/capture-solver-spots.mjs --lang=pt
node scripts/make-solver-range-charts.mjs --lang=pt --selftest
node scripts/make-solver-range-charts.mjs --lang=pt
node scripts/convert-solver-captures.mjs --lang=pt --quality=82
node .solver-captures/validate-pt.mjs
```

### 이번 검증 결과

- OOP/IP 모두 필수 데이터 추출 성공. KO 전체와 현재 보유 EN 부분 데이터에 대해 **정규화 수치 636개 일치**(액션·핸드 분류·드로우 분류·총계).
- 소수 쉼표/마침표, `0,1%`, `0%`, `100,0%`, 잘못된 입력 거부와 출력 로케일을 자체 검사했다.
- WebP **q82**, 폭 1200. 차트는 1200×675, 실제 전략 화면은 **1200×849**로 매트릭스와 결과 패널 전체를 보존한다. 16:9에 맞춰 정보를 자르거나 눌러 늘리지 않았다.
- 파일당 **25.1~102.0 KB**. 최신 150 KB 경보 기준 안이며 고정 품질로 출력했다. 변환기의 예전 80 KB 안내는 기존 호출 호환 메시지로만 남아 있다.
- 대표 단순·복잡 전략 화면과 차트를 직접 열어 카드·액션·소수·분류명 가독성을 확인했다. 긴 PT 스팟 이름은 차트 제목 아래 별도 줄에 배치해 중간 잘림을 없앴다.
