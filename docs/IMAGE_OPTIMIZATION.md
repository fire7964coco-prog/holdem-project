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
| 글당 합계 | **≤ 200KB** 권장 (이미지 4~5장 기준) |

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
