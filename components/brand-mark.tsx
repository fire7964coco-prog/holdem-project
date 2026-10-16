/**
 * 브랜드 로고 — 10-15 교체한 새 로고(public/favicon-192.png · MB-339). 🔴 public/favicon.svg는 옛 도형이다(PDF 스크립트용으로만 남김).
 * 2026-10-16 사장님 «홀덤마스터 앞에 로고» → «새로운 로고로». 글자 옆 장식이라 alt="" — 이름은 옆 텍스트가 읽힌다.
 * 192px 원본을 28~38px로 줄여 쓰므로 고해상도 화면에서도 선명하다(2x = 76px).
 */
import Image from "next/image";

export default function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/favicon-192.png"
      alt=""
      width={size}
      height={size}
      className="flex-shrink-0 rounded-[22%]"
    />
  );
}
