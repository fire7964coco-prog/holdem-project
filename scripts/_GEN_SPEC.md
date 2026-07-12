# 코드렌더 인포그래픽 저작 스펙 (KO 이미지 §13 교체)

이 파일을 먼저 읽고, 배정된 이미지들의 자립형 HTML을 `scripts/gen-<타깃파일명>.html`로 저작한다.
렌더는 메인이 `node scripts/render-gen-batch.mjs`로 실행 → `scripts/_prev-<타깃>.webp` 프리뷰 생성 → 육안검수 → `public/images/<타깃>.webp` 배치.

## 절대 규칙
- **출력 파일명**: `scripts/gen-<타깃>.html`. `<타깃>`은 `public/images/<타깃>.webp`의 파일명과 **정확히 동일**. 예: `holdem-3bet-faq.webp` → `scripts/gen-holdem-3bet-faq.html`.
- **캔버스**: 정확히 1200×675, overflow hidden. `.stage`/`#frame` 루트 하나.
- **자립형**: 외부 리소스·이미지·폰트 로드 금지. 인라인 `<style>`만. 시스템 폰트 스택 사용.
- **텍스트는 HTML 텍스트로** 렌더(이미지 아님)라 철자가 정확하다 — 이게 교체의 핵심 이유. 절대 오타 금지, defects.md 지정 한글/수치 그대로.
- **§13 카드 규칙**: 한 이미지 안에서 같은 `랭크+무늬` 카드 중복 금지. 지정된 카드만 사용. 카드는 아래 CSS(코너 랭크 + 단일 수트 글리프)로만 — pip 배열/코트아트 금지(불가능핏 원천 차단).
- **워터마크**: 우하단 골드 `♠HoldemMaster` (아래 `.wordmark`).
- **각 항목 defects.md의 PROMPT 스펙을 그대로 구현**(카드·한글라벨·수치·개수). 문단·마이크로텍스트·이모지·영어 필러 금지. 라벨은 짧게.

## 온브랜드 팔레트
- 배경 다크 그린: `#0B1F17` → `#13291D` 그라디언트, 상단 그린 글로우 `rgba(46,125,70,0.26)`
- 크림 텍스트: `#F2EEE3` / 골드 강조: `#C9A227` / 레드(하트·다이아): `#c0392b` / 블랙(스페이드·클럽): `#1a1a1a`
- 크림카드 노트풍이 필요한 항목(ak-offsuit·pocket-aces·small-blind·pot-odds 노트류): 배경을 크림 `#F5F0E4`로, 골드/그린 악센트. 나머지는 다크그린 프리미엄.

## 루트 컨테이너 (다크 프리미엄 기본형)
```html
<div class="stage">
  ... 콘텐츠 ...
  <div class="wordmark">&#9824;HoldemMaster</div>
</div>
```
```css
* { margin:0; padding:0; box-sizing:border-box; }
html,body { background:#0B1F17; }
.stage {
  position:relative; width:1200px; height:675px; overflow:hidden; padding:44px;
  background:
    radial-gradient(ellipse 900px 500px at 50% -10%, rgba(46,125,70,0.26), rgba(46,125,70,0) 65%),
    linear-gradient(160deg,#0B1F17 0%,#13291D 100%);
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  display:flex; flex-direction:column; align-items:center; justify-content:space-between;
}
.kicker { color:#C9A227; font-size:15px; font-weight:700; letter-spacing:.28em; text-transform:uppercase; text-align:center; margin-bottom:8px; }
h1 { color:#F2EEE3; font-size:46px; font-weight:800; text-align:center; text-shadow:0 2px 12px rgba(0,0,0,.45); }
h1 .gold { color:#C9A227; }
.wordmark { position:absolute; right:44px; bottom:44px; color:#C9A227; font-size:15px; font-weight:800; letter-spacing:.04em; opacity:.9; }
```

## 카드 CSS (코너 랭크 + 단일 수트 글리프 — §13 안전, 필수 재사용)
```css
.card { position:relative; width:96px; height:138px; background:linear-gradient(175deg,#FDFBF4 0%,#F2EEE3 100%); border-radius:10px; box-shadow:0 6px 14px rgba(0,0,0,.45),0 1px 3px rgba(0,0,0,.3); }
.card .corner { position:absolute; top:7px; left:9px; font-size:25px; font-weight:800; line-height:1; text-align:center; }
.card .corner .csuit { display:block; font-size:17px; line-height:1; margin-top:1px; }
.card .big { position:absolute; top:50%; left:50%; transform:translate(-42%,-44%); font-size:60px; line-height:1; }
.card.back { background:repeating-linear-gradient(45deg,#7a1420 0 10px,#5c0f18 10px 20px); border:3px solid #F2EEE3; }
.black { color:#1a1a1a; } .red { color:#c0392b; }
```
카드 마크업 (예: 9♠, K♥):
```html
<div class="card"><div class="corner black">9<span class="csuit">&#9824;</span></div><div class="big black">&#9824;</div></div>
<div class="card"><div class="corner red">K<span class="csuit">&#9829;</span></div><div class="big red">&#9829;</div></div>
```
무늬 글리프 엔티티: 스페이드 `&#9824;`(♠ black) · 하트 `&#9829;`(♥ red) · 다이아 `&#9830;`(♦ red) · 클럽 `&#9827;`(♣ black). 뒷면=`class="card back"`(빈 내용).
10은 코너/빅 모두 `10`으로 표기.

## 공용 요소 스니펫
- 골드 배지 번호: `border-radius:50%; background:#C9A227; color:#0B1F17; font-weight:900;` 원.
- 카드/패널 박스: `background:rgba(0,0,0,.28); border:2px solid rgba(201,162,39,.55); border-radius:16px;`
- 크림 노트 카드: `background:#F5F0E4; color:#26311f;` 골드 테두리, 손글씨 느낌 지양(깔끔한 산세리프).
- 표: 헤더행 골드, 셀 크림, 숫자열 가운데 정렬. 얇은 골드 구분선.

## 체크리스트(저작 후 self-check)
1. 파일명 = gen-<정확한타깃>.html 인가
2. 1200×675 고정, 넘침 없음(요소가 프레임 가장자리에 잘리지 않게 여백)
3. 지정 카드만·중복 무늬랭크 없음
4. 한글 철자 정확(defects.md 그대로), 이모지·영어필러·문단·마크다운기호(##,[cite]) 없음
5. 골드 워터마크 포함
