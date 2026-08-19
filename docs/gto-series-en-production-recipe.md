# GTO 시리즈 영어판 — 편당 생산 레시피

> **다음 사람이 ④편부터 «발명하지 않고 바로 손대게» 하려고 쓴다.** ①②③을 만들며 실제로 쓴 절차와
> 실제로 밟은 함정만 적는다. 2026-08-19 작성(①②③ 발행 시점).
>
> 🔴 **원칙 문서는 따로 있다** — 무엇을 통일하고 무엇을 현지화하는지는
> `docs/gto-solver-series-spec.md` **§4-A-2**가 본체다. 이 파일은 **손으로 하는 법**만 담는다.
> 편별 키워드는 `docs/keyword-bank/en-gto-series.md` **§3**에 편별로 나뉘어 있다.

---

## 0. 한 편의 순서 (이 순서를 지키면 되돌아가는 일이 없다)

1. **KO 원본 통독** — `lib/posts/<slug>.ts`. 계산·논거·구조를 여기서 가져온다
2. **EN 자동완성 실측** — 뱅크 §3의 해당 편 키워드를 자동완성으로 교차 확인
3. **솔버 라이브 실측** — OOP·IP **양쪽** 전환해 수치 확보(§2)
4. **이미지 2장 제작** — 히어로(솔버 캡처) + 인포그래픽(HTML→스크린샷) (§3)
5. **본문 작성** — 골격 고정 + 표피 현지화
6. **게이트 3종 + 2층 손검산** (§5)
7. **배포 → 랜딩 `slug` 채우기 → 라이브 확인** (§6)

⚠ **4번을 5번보다 먼저 한다.** 본문에 인용할 «화면에서 읽은 값»이 캡처 과정에서 확정된다.

---

## 1. 착수 전 확인

```bash
# 이미 손댄 글인지 (안 읽어서 오판한 전례가 있다)
grep -n "<slug>" WORKLOG.md | head
```

---

## 2. 솔버 라이브 실측 (Playwright)

```js
// 1) 영어로 연다
browser_navigate("https://solver.holdemmaster.com/?lang=en")
// 2) Study Spots 열고 N번째 스팟의 결과를 연다 (①=index 0, ②=1, ③=2 …)
browser_evaluate(() => [...document.querySelectorAll('button')]
  .find(x=>/Study Spots/.test(x.textContent)).click())
browser_evaluate(() => [...document.querySelectorAll('button')]
  .filter(x=>/View results/.test(x.textContent))[N].click())
// 3) 패널 읽기
browser_evaluate(() => {
  const t=document.body.innerText.replace(/[ \t]+/g,' ');
  const i=t.indexOf('Hands'), j=t.indexOf('Summary');
  return t.slice(i,j) + '\n=== all ===\n' + t.slice(j, j+200);
})
```

🔴 **플레이어 전환의 select 인덱스가 고정이 아니다.** ①②에서는 `querySelector('select')`가
플레이어 선택기였는데 ③에서는 **언어 선택기(한국어/English/日本語)가 0번으로 앞에 붙어 있었다.**
반드시 인덱스를 확인하고 쓴다:

```js
browser_evaluate(() => [...document.querySelectorAll('select')]
  .map((s,i)=>({i, opts:[...s.options].map(o=>o.text)})))
// 플레이어 선택기를 찾아 값으로 바꾼다 (selectedIndex 말고 value)
browser_evaluate(() => { const s=document.querySelectorAll('select')[1];
  s.value='ip'; s.dispatchEvent(new Event('change',{bubbles:true})); })
```

⚠ **전환이 실제로 됐는지 «값»으로 확인하라.** IP로 바꿨는데 패널이 그대로면 안 바뀐 것이다
(③에서 실제로 겪었다 — 콤보 수 453.0 → 458.0이 바뀌어야 전환된 것).

🔴 **상세 표는 가상 스크롤이다.** `innerText`로는 30여 행만 잡힌다(①에서 «벳하는 핸드가 suited
aces에 집중»이라고 쓸 뻔했다 — 8.4콤보 중 1.12콤보만 보고 일반화). **전수 집계가 필요하면
정렬하거나 CSV 내보내기로 받는다.** 몇 개 핸드의 빈도를 «예시»로 인용하는 건 안전하다.

🪶 **0%인 등급 행은 화면에 아예 안 뜬다**(BB의 Overpair 등). «없다»가 아니라 «0»이다.

---

## 3. 이미지 2장

### 3-1. 히어로 = 영어 솔버 화면 캡처

한국어 이미지는 **전부 한글이라 재사용 불가**다(18언어 공용 원칙의 예외 — UI 캡처·인포그래픽).

```
browser_resize(1520, 940)   → 플레이어를 OOP로 되돌리고 → browser_take_screenshot
```

```js
// 크롭·워터마크·60KB 맞추기 (검증된 좌표: 좌측 사이드바와 상단 크롬을 제외한 자리)
const wm = Buffer.from(`<svg width='1200' height='803'><g opacity='0.75' transform='translate(40,760)'>
<path d='M9 0 C9 5 0 8 0 14 a5 5 0 0 0 9 3 c-0.4 3-1.6 4.6-3 5.6 h6 c-1.4-1-2.6-2.6-3-5.6 a5 5 0 0 0 9-3 C18 8 9 5 9 0 Z' fill='#d4af37'/>
<text x='26' y='18' font-family='Helvetica,Arial,sans-serif' font-size='17' font-weight='600' fill='#d4af37'>holdemmaster.com</text>
</g></svg>`);
for (const q of [46, 42, 38]) {
  await sharp('raw.png').extract({left:340, top:110, width:1180, height:790}).resize(1200)
    .composite([{input:wm, top:0, left:0}]).webp({quality:q})
    .toFile('public/images/gto-<key>-oop-en.webp');
  if (size <= 60KB) break;   // ①57.2 ②58.5 ③58.0 로 전부 q42~46에서 통과했다
}
```

🔴 **워터마크는 좌하단(40,760)이다.** 우하단에 두면 상세 표의 숫자를 가린다(①에서 한 번 겪고 옮겼다).

### 3-2. 인포그래픽 = HTML + Playwright (이미지 AI 금지 · §9-1)

`file:` 프로토콜은 **차단돼 있다.** 로컬 서버를 띄워 띄운다:

```bash
node -e "const http=require('http'),fs=require('fs');
http.createServer((q,s)=>{s.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
s.end(fs.readFileSync('ranges-en.html'))}).listen(7788)"   # run_in_background
```
→ `browser_resize(1200,675)` → `browser_navigate("http://localhost:7788/")` → 스크린샷 → webp q80(25~30KB)

**공통 규격**(①②③ 동일): 배경 `#0a0f0c` · BB 초록 그라디언트 · BTN 골드 · 우상단 보드 카드 3장 ·
헤더 우측 「HoldemMaster GTO solver output · rake not modeled」 · 하단 좌측 Equity/EQR · 우측 워터마크.
🔴 **커밋 전 Read로 열어 스펠링을 눈으로 본다**(§9-1 가드레일).
🪶 등급이 많으면(③은 11개) 논지가 되는 상단 몇 줄을 **점선으로 갈라 강조**하면 읽힌다.

---

## 4. 본문 작성

- **고정**: 계산 조건표 · 모든 수치 · **전략 논거** · 섹션 구조 · §13 표기 → KO에서 가져온다
- **현지화**: `seoTitle`(~55자) · `desc`(**≤160, 디코딩 기준**) · H2 문구 · FAQ 문항 · 내부링크
- **H2는 질문형 70% 이상**, 직후 40~75단어 자기완결 직답
- 내부링크: `/en/solver` + EN 형제 글 + 필라 최소 3개, `:::readnext` 카드 1개
- 🔴 **없는 글로 링크하지 마라** — EN 미발행 편은 이름만 쓰고 링크는 걸지 않는다

### 자수 함정
산출물에서 desc를 재면 `'`가 `&#x27;`(6자)로 잡혀 **10자쯤 길어 보인다.** 반드시 디코딩해서 센다.

### 키워드 배분
🔴 **편끼리 같은 쿼리를 물면 서로 깎는다.** ①=`good c bet percentage`·`dry board`·`range advantage`(기초) /
②=`should you always c bet`·`check back range`·`delayed c bet` / ③=`nut advantage`·**«둘의 차이»**·`dynamic board`.
c벳 머리말(`c-bet poker` 320)은 `holdem-continuation-bet` 소유다 — 침범 금지(뱅크 §5).

---

## 5. 검사 (셋 다 돌린다)

```bash
npm run build                       # 461 intl posts 처럼 개수가 하나 늘었는지 확인
npm run check:gto                   # ko↔en 계산 수치 집합 대조 — 🔴 0 이어야 한다
npm run audit:hard -- --locale=en   # 🔴 --slug= 은 KO 파일을 잡는다. EN은 --locale=en
npm run audit:hard -- --uncovered --locale=en   # 2층: 기계가 판정 못 한 카드 문단
```

### 2층 손검산 체크리스트 (기계가 못 보는 자리)
- [ ] 보드 무늬가 레인보우/투톤/모노톤 서술과 맞나
- [ ] 스트레이트를 만드는 핸드를 **전부** 열거했나(빠뜨리기 쉽다)
- [ ] 콤보 수 — **보드에 깔린 장수를 뺐나**(포켓페어는 6이 아니라 3, 특정 조합은 4×4=16 / 3×3=9)
- [ ] 「이기는 핸드」 열거가 **완전한가**(①에서 AT가 빠져 있었다)
- [ ] 드로우 서술이 화면 패널과 맞나 — **②의 K-8-3에는 Gutshot 행이 아예 없다**(거트샷이 존재하지 않는다)
- [ ] 페어 서열 — 보드 최상위가 아니면 «탑 페어»가 아니다(②에서 「Q가 뜨면 탑 페어」가 틀렸다)
- [ ] 각 열의 합이 100%가 되나(①에서 93.6/94.8이었다 — 행 두 개가 빠져 있었다)
- [ ] EV 합 = 팟 · 에퀴티 합 = 100 · EQR 역산이 표시값과 0.3%p 이내

---

## 6. 배포

```bash
git add lib/posts-en app/en/solver public/images/<두 장> public/sitemap.xml
git commit -F commit-msg.txt && git push      # 한글·여러 줄이므로 -F 필수
```
- **랜딩 `SPOT_GROUPS`에 그 편의 `slug`를 채운다** (`app/en/solver/solver-client.tsx`) —
  채운 행만 링크가 살아난다
- 배포 후 `curl`로 200 + `"@type":"Question"` 개수 확인(Vercel 반영에 1~2분)

---

## 7. 실제로 밟은 함정 모음

| 함정 | 내용 |
|---|---|
| `audit:hard --slug=` | slug가 KO와 같아 **KO 파일을 검사한다.** EN은 반드시 `--locale=en` |
| 게이트 C1 오탐 | 편끼리 표를 대조해 「99.8% vs 98.2%」를 🔴로 냈다 → `isGtoSpot`으로 껐다(2026-08-19) |
| `check:gto` 🔴 | ③에서 EN에만 있던 `23.7%`(④편 예고 수치)를 잡았다 → EN에서 뺐다 |
| 가상 스크롤 | 상세 표 전수 집계 불가(§2) |
| select 인덱스 | 언어 선택기가 앞에 붙는다(§2) |
| desc 자수 | HTML 인코딩 때문에 길어 보인다(§4) |
| 이미지 재사용 | 한국어 두 장은 **전부 한글** — 매 편 새로 만든다 |

---

## 8. 진행 상황 (2026-08-19 기준)

| 편 | slug | EN | 비고 |
|---|---|:--:|---|
| ① | `a-high-board-cbet` | ✅ | 4렌즈 적대검수 완료 · KO 소급 반영 |
| ② | `k-high-board-cbet` | ✅ | 2층이 사실오류 2건 검출(거트샷·Q 탑페어) → KO도 수정 |
| ③ | `broadway-board-strategy` | ✅ | 시리즈 최고 winnable(WS3 3) |
| ④ | `donk-bet-strategy` | ⬜ | **유일하게 BB가 먼저 치는 보드**(리드 23.7%) · `what is a donk bet in poker` 90 |
| ⑤ | `monotone-board-strategy` | ⬜ | `monotone flop` 축(보드가 아니라 **flop** 표기) |
| ⑥ | `paired-board-strategy` | ⬜ | `paired flop` 축 · 재료가 얇다 |
| ⑦ | `low-board-check-raise` | ⬜ | `what is a good check-raise percentage` |
| ⑧ | `3bet-pot-cbet` | ⬜ | **`poker spr` 480 — 13편 중 유일하게 볼륨이 있다** |
| ⑨ | `3bet-pot-bet-sizing` | ⬜ | `geometric bet sizing`(DA7) |
| ⑩ | `3bet-pot-low-board` | ⬜ | `fold equity poker` |
| ⑪ | `blind-battle-cbet` | ⬜ | `poker blind vs blind strategy` |
| ⑫ | `blind-battle-connected-board` | ⬜ | `static vs dynamic board poker` |
| ⑬ | `ace-paired-board-strategy` | ⬜ | 🔴 **재료가 가장 얇다** — `poker trips *`·`poker bluff catcher *` 추가 수확 필요 |

🔜 **13편이 끝난 뒤**: `check:gto`를 `prebuild` 훅에 넣고, `audit-hardening.mjs`의 `CLUSTERS`에
시리즈를 등록한다(지금 넣으면 작업 중 빌드가 막힌다).
