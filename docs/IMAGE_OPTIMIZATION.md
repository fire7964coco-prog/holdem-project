# 블로그 이미지 압축 가이드

홀덤마스터 블로그·OG 이미지는 **용량을 최소화**하는 것이 기본 원칙입니다.  
Lighthouse Performance(특히 LCP)와 모바일 데이터 사용량에 직결됩니다.

## 저장 위치

| 경로 | 용도 |
|------|------|
| `public/images/` | 블로그 본문·FAQ 카드 WebP |
| `public/opengraph.jpg` | 기본 OG (별도 최적화) |

파일명 규칙: `{slug}-{역할}.webp`  
예: `holdem-check-raise-timing.webp`

## 압축 기준 (필수)

| 항목 | 값 |
|------|-----|
| 포맷 | **WebP** (PNG/JPG 업로드 금지 — 스크립트가 WebP로 변환) |
| 최대 가로 | **1200px** (본문 `width="1200"`과 동일) |
| WebP quality | **65** (기본, `compress-images.mjs`) · 더 줄이려면 `--aggressive` → **60** |
| effort | **6** |
| 파일당 목표 | **≤ 60KB** (인포그래픽·복잡한 카드도 **≤ 80KB** 이내) |
| 글당 합계 | **디스크 합계로 재지 말 것** — 아래 §전송량 기준 참조 |

### 글당 합계는 «실제 전송량»으로 잰다 (2026-08-07 기준 갱신)

> **왜 바꿨나**: 옛 기준은 "글당 디스크 파일 크기 합계 ≤200KB"였는데, 이건 **독자가 받는 바이트가 아니다.**
> 실측해 보니 전체 268편 중 **134편(50%)이 그 기준 초과**였고 중간값이 202KB였다 —
> 절반이 위반이라면 기준이 현실을 못 재고 있는 것이다.

**핵심: 200KB는 하드리밋이 아니다. 목적은 "빠른 페이지"이고 200KB는 그 대리 지표였을 뿐이다.**
**조금 넘어도 된다.** 대신 아래 두 조건을 지킨다.

1. **가독성을 해치지 않는 선에서 압축한다.** 용량을 맞추려고 화질을 깎아 사진이 뭉개지거나
   글자가 흐려지면 그건 실패다. 압축은 **눈에 안 보이는 만큼만** 한다.
2. **재는 건 디스크가 아니라 전송량이다.** 렌더러(`lib/render-markdown.ts`)가 자동으로 줄여준다:
   - 본문 이미지 → `/_next/image?w=750&q=75` + srcset `384/640/750/1080`
     → 1200px 74KB 파일이 실제로는 **약 50KB**, 모바일(640w)은 **약 39KB**
   - 인라인 썸네일 → `w=64` → 70KB 파일이 실제로는 **1~2KB**
   - **첫 이미지만 `eager`**, 나머지는 전부 `loading="lazy"` → 스크롤 안 하면 안 받는다

**★그래서 진짜 봐야 하는 건 «폭»이다.** `next/image`는 **원본보다 크게 만들지 못한다.**
폭이 **750px 미만인 이미지는 최적화를 그대로 우회**해 원본 바이트가 통째로 전송된다(모바일에서도).
그 이미지만은 **디스크 크기 = 전송량**이다.

```bash
# 최적화 우회 이미지 찾기 (폭 < 750)
node -e "const s=require('sharp'),fs=require('fs');(async()=>{for(const f of fs.readdirSync('public/images').filter(x=>x.endsWith('.webp'))){const m=await s('public/images/'+f).metadata();if(m.width<750)console.log(fs.statSync('public/images/'+f).size, m.width+'x'+m.height, f)}})()"

# 라이브 전송량 실측 (디스크와 비교)
curl -s -o /dev/null -w "%{size_download}\n" "https://www.holdemmaster.com/_next/image?url=%2Fimages%2F<파일>.webp&w=750&q=75"
```

**폭 좁은 이미지(주로 세로 휴대폰 사진)를 만나면**:
- 먼저 **quality를 더 낮추기 전에 "이 픽셀이 정보를 담고 있나"를 본다.** 정보 없는 영역
  (빈 하늘·흙바닥 등)을 크롭하면 화질을 **올리면서도** 용량이 준다
  (실례: `korea-poker-marathon-2026-hangang2` 83.9KB q=45실패 → 하단 38% 크롭 후 **63.3KB q=78**)
- 크롭할 게 없으면 **더 큰 원본으로 교체**하는 게 정석이다(그래야 파이프라인이 줄여준다)
- ⚠️ **화질만 깎이고 용량이 안 줄면 하지 마라.** 2026-08-07에 폭 좁은 사진 9장을 q=50까지 내려봤는데
  총 **-7%**, 절반은 **-1~3%**였다 → 전부 되돌렸다. 이미 압축이 소진된 사진에 quality를 더 쓰는 건 손실뿐이다

1200px로 리사이즈한 뒤에도 80KB를 넘으면:

1. Squoosh에서 quality **65**로 한 번 더 저장하거나  
2. 불필요한 여백·그라데이션을 줄인 뒤 재보내기

## 자동 압축 (권장)

새 이미지를 `public/images/`에 넣은 뒤:

```bash
# 압축 후 public/images/에 바로 반영 (권장)
npm run compress:images

# 미리보기만 (.compressed 폴더에 저장)
npm run compress:images:preview
```

`scripts/compress-images.mjs`가 다음을 수행합니다.

- 가로 1200px 초과 시 리사이즈  
- WebP quality **65**로 재인코딩 (`--aggressive` 시 60)  
- `--apply` 시 `public/images/`에 덮어쓰기  

> **팁:** `npm run dev` 실행 중에는 Windows에서 파일 잠금으로 실패할 수 있습니다. 실패 시 dev 서버를 잠시 끄고 다시 실행하세요.

## 수동 압축 (대안)

- [Squoosh](https://squoosh.app) — WebP, quality 70, Resize width 1200  
- Photoshop — Export As → WebP, Quality 70  

## 블로그 마크다운에서 사용

```markdown
![alt 텍스트|w](/images/slug-role.webp "캡션 (title)")
```

- `alt`: 검색·스크린리더용 (키워드 자연스럽게)  
- `|w`: 본문 폭에 맞춤 (권장)  
- `title` 캡션: figcaption으로 표시  

## LCP 참고

- 첫 본문 이미지는 LCP 후보가 될 수 있음 → **용량이 작을수록** Performance 점수에 유리  
- `keepImagesInBody: true` 글은 첫 이미지를 섹션에 두므로 **압축이 특히 중요**  
- 다른 글은 첫 이미지를 하단 lazy로 보내 텍스트 LCP를 우선하는 패턴 사용  

## 체크리스트 (발행 전)

- [ ] `public/images/`에 WebP만 두었는가  
- [ ] `npm run compress:images` 실행했는가  
- [ ] 파일당 80KB 이하인가 (`Get-ChildItem public/images | Select Name, Length`)  
- [ ] alt·title 캡션을 넣었는가  

## 변경 이력

| 날짜 | 내용 |
|------|------|
| 2026-05-16 | 가이드 신설, 전체 `public/images` 일괄 압축 (~18MB→~12MB), `npm run compress:images` 추가 |
