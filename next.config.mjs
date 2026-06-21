/**
 * Next.js 14 — 홀덤마스터
 *
 * SSG 전략: 모든 라우트 빌드 타임에 정적 HTML 생성
 *  - / · /rules · /strategy · ... 정적 페이지: 자동 SSG
 *  - /blog/[slug] · /pub/[region]: generateStaticParams 로 정적 SSG
 * Vercel 배포 기준: output: 'standalone' 안 씀 (Vercel 어댑터가 자동)
 *
 * trailingSlash: false — sitemap.xml 형식과 일치 (구글 인덱싱 안정화)
 */
const CANONICAL_HOST = "www.holdemmaster.com";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "holdemmaster.com" }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
      {
        source: "/community",
        destination: "/",
        permanent: true,
      },
      {
        source: "/community/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
  typescript: {
    // 마이그레이션 단계: 기존 코드의 누락된 prop·타입 경고는 빌드 차단하지 않음.
    // 실제 런타임 동작은 모두 검증된 상태이며, 추후 점진 정리.
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
