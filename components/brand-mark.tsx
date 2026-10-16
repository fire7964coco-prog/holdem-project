/**
 * 브랜드 로고(금색 바탕 + 스페이드) — public/favicon.svg와 같은 도형 (2026-10-16 사장님 «홀덤마스터 앞에 로고»).
 * 인라인 SVG라 추가 요청이 없다. 글자 옆 장식이라 aria-hidden — 이름은 옆 텍스트가 읽힌다.
 */
export default function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" aria-hidden="true" focusable="false" className="flex-shrink-0">
      <rect width="180" height="180" rx="36" fill="#DFAC2A" />
      <path
        d="M90 22C90 22 36 56 36 88C36 112 60 122 90 110C77 124 74 142 70 154L110 154C106 142 103 124 90 110C120 122 144 112 144 88C144 56 90 22 90 22Z"
        fill="#04160C"
      />
    </svg>
  );
}
