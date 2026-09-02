# ja GTO 솔버 13편 — 번역 에이전트 브리프 (2026-09-02)

> 스펙 §4-A-3 «번역 + 5필드» + 여섯째 «본문 용어 표기». 이 파일은 서브에이전트에게 주는 지시서이자 다음 로케일(es·de·pt…)의 템플릿이다.
> 로케일을 바꿀 땐 §2·§3의 ja 고유값(용어·화이트리스트·이미지 접미)만 갈아 끼운다.

## 1. 입력 (전부 읽고 시작한다)

| 무엇 | 경로 | 역할 |
|---|---|---|
| **소스 = EN** | `lib/posts-en/<slug>.ts` | 구조·링크·이미지·디렉티브·문장의 정본. 다국어 렌더 규약(content에 히어로 없음)도 EN이 맞다 |
| KO 정본 | `lib/posts/<slug>.ts` | 수치·고지 문장·논거 대조용. **구조는 보지 마라**(KO는 content에 히어로가 들어가는 KO 렌더러용) |
| 수치 정본 | `docs/gto-solver-series-spec.md` §4-B·§4-B-2 | 숫자가 EN과 어긋나면 **§4-B가 심판** |
| 키워드 팩 | `docs/keyword-bank/ja-gto-series.md` §3·§4·§5 | 편별 H2/seoTitle/FAQ 축 · 표기 판정 · 카니발 |
| 문체·용어 | `docs/translation-terms-ja.md`(문체·표기·役名·액션·내부링크 화이트리스트 43) · `docs/local-voice/ja-jp.md` §2 | です/ます · 두괄식 · 1인칭 최소 |
| ja 필드 관례 | `lib/posts-ja/holdem-continuation-bet.ts` 상단 40줄 | `masterUpdated`·`readTime: "N分"`·태그 관례 |
| 폐기 명제 | 아래 §4 | **이 문자열이 나오면 실패다** |

## 2. 출력 — `lib/posts-ja/<slug>.ts`

```ts
import type { Post } from "../posts";

/** (한국어 헤더 주석 8~15줄: 소스 EN 커밋/updated · 조준 키워드(팩 §3 행) · 표기 규약 한 줄 · 「편 수 하드코딩 금지」) */
export const POST: Post = {
  slug: "<EN과 동일>",
  title: "…",            // ≤ 40자(全角) · 훅 + 보드
  seoTitle: "…",         // ≤ 32자(全角) 권장 · 팩 §3 주 키워드 + 「ポーカー」 앵커 · 「ソルバー」 금지
  desc: "…",             // ≤ 120자(全角) · 절대 160 초과 금지 · 수치 1개 이상
  tldr: "…",             // 2~3문장 · EN tldr의 수치를 전부 보존
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-09-02",   // = EN updated
  keepImagesInBody: true,
  readTime: "N分",                // EN "N min"의 N 그대로
  emoji: "<EN과 동일>",
  image: "/images/gto-<key>-oop-ja.webp",   // EN의 -en.webp → -ja.webp
  imageAlt: "…",                  // ja로 재저작(구체 묘사)
  tags: [ … ],                    // 5~8개 · 팩 §3 축 + 표기 병기(「cb」 등)
  content: `
…
`.trim(),
};

export default POST;
```

## 3. 규칙 (위반 = 반려)

1. **구조 1:1** — H2 개수·순서 · 모든 `:::` 디렉티브(stripe·note·pull·compare·readnext·tip 등) · 표 행/열 · `==g:/==r:/==b:==` 하이라이트 · FAQ 문항 수 · 본문 이미지 2장(위치까지) — EN과 **개수 동일**. 문구만 일본어.
2. **내부링크 개수·대상 1:1** — `/en/blog/<slug>` → `/ja/blog/<slug>` · `/en/solver` → `/ja/solver` · `"thumb:/images/…-hero.webp"` 유지 · readnext 3행 유지(라벨은 「続けて読む」). 대상 slug가 ja 화이트리스트(43편 + 이번 13편)에 **없으면** 팩 §3의 대체 글로 바꾸되 **개수는 유지**.
3. **이미지** — `-en.webp` → `-ja.webp`(oop·ranges 2장). alt·캡션은 ja 재저작. content에 히어로 마크다운을 **넣지 마라**(다국어 렌더러가 `post.image`를 그린다).
4. **수치·카드·확률·콤보 수 = 축어** (반각 % · 소수점 `.` · `bb` · 카드 `A♠` 그대로 · 레인지 표기 `T9s` 그대로). 계산식 `==15.46 ÷ 13.12 = 117.8%==` 그대로.
5. **고지 문장 전부 보존** — «not in this solve / first action only / study spot / judgment, not a figure / cannot be confirmed» 류는 **한 문장도 떨어뜨리지 마라**. 번역에서 가장 먼저 사라지는 문장이다(스펙 §4-A-3 조건 ③).
6. **H2 = 일본 실검색 형태** — EN 질문형 직역 금지. 「〜は?」 명사 종결·「〜とは」·「〜する理由」·「〜の違い」(팩 §3 축·`translation-terms-ja.md` §8). 각 H2 직후 **볼드 직답 1~2문장** 유지(EN 구조).
7. **용어** — セット(포켓페어+보드1) / トリップス(손패1+보드페어) / スリーカード(상위개념) · 앱 라벨 인용은 「セット/トリップス」 축어 + 언페어 보드면 EN 각주와 같은 «실제는 セット» 각주 · GTO(라틴)+「ポーカー」 · 「ソルバー」는 본문만 · 「Cベット」 본문(태그에 「cb」 병기) · エクイティ実現率(EQR) · オーバーペア · ポラライズド · ドンクベット(リードベット) · チェックレイズ · ブロッカー · SPR.
8. **문체** — です/ます · 결론 먼저 · 「私は」 남발 금지(경험담은 관찰 서술) · 낚시 금지 · 「——」 전환 허용.
9. **금지** — 백틱(``` ` ```) 문자 0개 · 시리즈 편 수 하드코딩(「13スポット」「13編」 금지 → 「このシリーズ」) · 솔버 앱의 스팟 설명문 복사(폐기 명제가 들어 있다) · 법·합법성 언급 · KO 히어로 마크다운.
10. **FAQ** — `**Q. …?**` 빈 줄 `A. …` 형식. 예/아니오 직답은 첫 문장에(「いいえ——」「はい——」).

## 4. 폐기 명제 — ja 문자열 앵커 (0건이어야 한다)
`コーラー.{0,6}優位` · `Cベット頻度が大きく` · `低SPRで小さなベット` · `スリーカードが珍しい` · `トリップスが珍しい` · `同じ0.05bb` ·
`チェックレイズで抵抗してくる` · `13スポット` · `13編` · `お互いに弱い`(+같은 문단에 67.4/9.6 빈도를 인과로 잇는 것) ·
「ベットすれば自分に勝つハンドだけがコールする」(RP-09) · 「EQRが高いほど有利」(RP-10) · 「MDF 60.2%だから58.3%が降りる」(RP-11).

## 5. 자기 검사 (파일을 쓴 뒤 반드시)
```
node scripts/check-gto-numbers.mjs --locale=ja        # 수치 집합 대조(🔴 0)
node -e "const s=require('fs').readFileSync('lib/posts-ja/<slug>.ts','utf8');console.log('backticks',(s.match(/`/g)||[]).length,'H2',(s.match(/^## /gm)||[]).length,'links',(s.match(/\]\(\/ja\//g)||[]).length,'faq',(s.match(/\*\*Q\. /g)||[]).length)"
```
EN 파일에 같은 계수를 돌려 **H2·links·FAQ·`:::` 개수가 일치**해야 한다. desc 글자 수를 세어 보고하라.
