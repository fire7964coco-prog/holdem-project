## HoldemMaster — 이 디자인 시스템으로 만들 때 지킬 것

holdemmaster.com 은 **글을 읽으러 오는 사이트**다(포커 전략·룰·대회 가이드). 커머스도 대시보드도 아니다.
독자의 목적은 하나 — **질문에 답을 얻는 것**. 모바일 유입이 약 68% 이고, 한 글이 모바일에서 24화면쯤 된다.

### 감싸기 — 프로바이더는 없다, 스타일시트가 전부다

이 번들의 컴포넌트는 **컨텍스트 프로바이더를 요구하지 않는다.** 감쌀 것이 없다.
대신 **`styles.css` 를 반드시 로드해야 한다** — 토큰과 컴파일된 유틸리티가 거기 다 있고,
없으면 컴포넌트가 브라우저 기본 스타일로 렌더된다.

테마는 라이트가 기본이고 `:root` 에 산다. **다크 배경으로 만들지 마라** — 따뜻한 크림 라이트가 이 사이트의 차별점이다.

### 🔴 색 쓰는 법 — 토큰은 «HSL 3요소» 라 반드시 감싸야 한다

이 시스템에서 가장 많이 나는 사고다. 토큰 값이 `43 65% 44%` 같은 **3요소**여서,
`var(--primary)` 를 그대로 색 자리에 쓰면 **유효하지 않은 CSS 이고 조용히 무시된다.**

```css
/* ❌ 안 먹는다 — 배경이 투명해지고 글자는 상속색으로 남는다 */
background: var(--card);
color: var(--primary);

/* ✅ */
background: hsl(var(--card));
color: hsl(var(--primary));
color: hsl(var(--primary) / 0.3);        /* 투명도는 슬래시로 */
```

**골드만 예외로 트리플릿이다** — 다크 표면용 원색은 `rgb()`/`rgba()` 로 쓴다:

```css
color: rgb(var(--gold-dark-rgb));
border-color: rgba(var(--gold-dark-rgb), 0.25);
```

### 🔴 골드는 두 개이고, 그게 의도다 — 합치지 마라

| 토큰 | 색 | 쓰는 자리 |
|---|---|---|
| `--primary` | `#b99027` | **크림 배경 위.** 밝은 배경용으로 채도를 낮춘 값이다 |
| `--gold-dark-rgb` | `#d4af37` | **다크 표면 위**(딥그린 바·팝오버·썸네일). 24K 원색 |

하나로 통일하면 다크 바 위 골드가 탁해져 대비가 죽는다. 시안에서 둘을 합치지 마라.

### 스타일링 관용구 — Tailwind 유틸리티가 토큰에 묶여 있다

레이아웃 글루는 **의미 토큰에 묶인 유틸리티 클래스**로 쓴다. 임의의 팔레트(`bg-slate-800` 등)를 새로 들이지 마라.

| 쓰임 | 클래스 |
|---|---|
| 배경 | `bg-background` (페이지) · `bg-card` (패널) · `bg-primary` (강조) |
| 글자 | `text-foreground` (본문) · `text-muted-foreground` (보조) · `text-primary` (골드) · `text-primary-foreground` (골드 위) |
| 테두리 | `border-border` (기본) · `border-primary` (강조) |

본문 조판에는 전용 클래스가 있다: **`.blog-prose`**(본문 래퍼) · **`.blog-h2`**(절 제목) · **`.brush-link`**(본문 인라인 링크의 골드 붓칠).

🔴 **`.blog-h2` 는 자기 밑줄(`border-bottom`)을 갖는다.** 그 앞에 구분선(`<hr>`)을 두지 마라 —
40px 안에 선이 두 개 겹쳐 «정돈된 게 아니라 흩어져» 보인다. 2026-08-18에 전 사이트에서 뺐다.

### 타이포 — 모바일 본문 16px 는 실측으로 정한 값이다

`.blog-prose` 본문은 모바일 `1rem`(16px)/`line-height 1.85`, `sm+` 에서 `1.05rem`/`1.9`.
좌우 여백과 함께 맞춰 한 줄 21자대를 유지한다 — **폰트만 키우면 20자 밑으로 떨어져 오히려 나빠진다.**

🔴 **새 웹폰트를 들이지 마라.** 이 사이트는 `@font-face` 438개로 FCP 의 1/3 을 날린 사고가 있다.
번들이 싣는 가족(Inter · Noto Sans KR · Lora)만 쓴다.

### 진실이 있는 곳

- **`styles.css` 와 그 `@import` 닫힘** — 토큰 정의와 컴파일된 유틸리티의 원본이다. 스타일을 짜기 전에 여기를 읽어라.
- **`components/<group>/<Name>/<Name>.prompt.md`** — 컴포넌트별 props 와 용법.
- **`guidelines/`** — 레이아웃 진단 브리프(실측 인벤토리와 «무엇을 뺄지» 판정 기준).

### 관용구 예시

```jsx
// 라이브러리 컴포넌트로 알맹이를, 레이아웃 글루는 토큰 유틸리티로.
<section className="bg-card border border-border rounded-2xl p-6">
  <h2 className="blog-h2 text-xl font-extrabold text-foreground">홀덤 족보 순위</h2>
  <RankingTable
    name="홀덤 족보 순위"
    items={[
      { name: '로열 플러시', description: '같은 무늬 A-K-Q-J-10' },
      { name: '스트레이트 플러시', description: '같은 무늬 연속 5장' },
    ]}
  />
  <p className="text-muted-foreground">자세한 비교는 아래 표를 보세요.</p>
</section>
```

### 🔴 포커 내용은 지어내지 마라

핸드 예시·확률·족보 순서가 들어가면 **틀린 값 하나가 사이트 신뢰를 깎는다**(작성자 소개가 WSOP·솔버 경력을 내세운다).
새 핸드 예시를 만들지 말고, 컴포넌트가 이미 들고 있는 시나리오(다이어그램의 `stage` prop)나
프리뷰에 적힌 값을 그대로 써라. 무늬 서열은 없고(플러시는 숫자로만 비교), 휠(A-2-3-4-5)은 가장 낮은 스트레이트다.
