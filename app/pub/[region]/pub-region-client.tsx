"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ChevronRight, ExternalLink, ArrowLeft, Search, Clock, Info } from "lucide-react";
import { SEO } from "@/components/seo";
import { REGION_MAP, PUB_REGIONS, type PubRegion as PubRegionType } from "@/lib/pubs";

export default function PubRegion({ region }: { region: PubRegionType }) {

  if (!region) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <p className="text-4xl mb-4">🔍</p>
        <h1 className="font-serif text-2xl font-bold text-foreground mb-2">찾을 수 없는 지역입니다</h1>
        <p className="text-muted-foreground mb-6">지역 목록으로 돌아가서 다시 선택해주세요.</p>
        <Link href="/pub">
          <span className="text-primary hover:underline cursor-pointer">← 지역별 홀덤펍 목록으로</span>
        </Link>
      </div>
    );
  }

  const nearbyRegions = region.nearby
    .map(slug => PUB_REGIONS.find(r => r.slug === slug))
    .filter(Boolean);

  const naverUrl = `https://map.naver.com/v5/search/${encodeURIComponent(region.naverMapQuery)}`;
  const kakaoUrl = `https://map.kakao.com/?q=${encodeURIComponent(region.naverMapQuery)}`;

  return (
    <>
      <SEO
        title={region.metaTitle}
        description={region.metaDesc}
        keywords={`${region.name} 홀덤펍, ${region.name} 홀덤, ${region.name} 포커, ${region.fullName} 홀덤펍, 홀덤펍 추천`}
        path={`/pub/${region.slug}`}
      />

      {/* Hero */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/pub">
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              지역 목록으로
            </span>
          </Link>
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{region.emoji}</span>
              <div>
                <p className="text-sm text-primary font-medium mb-1">{region.fullName}</p>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  {region.name} 홀덤펍
                </h1>
              </div>
            </div>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-4 max-w-xl">
              {region.intro}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-3.5 py-1.5 text-xs text-foreground">
                <span className="text-sm">🚇</span> {region.subway}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 메인 지도 검색 CTA — 히어로 바로 아래 */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-gradient-to-br from-primary/15 via-primary/8 to-primary/5 border border-primary/30 rounded-3xl p-7 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-7">
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Search className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-1">
                {region.name} 홀덤펍 — 실시간 검색
              </h2>
              <p className="text-sm text-muted-foreground">
                네이버·카카오 지도에서 현재 운영 중인 홀덤펍을 바로 확인하세요.<br className="hidden sm:block" />
                신규 오픈·운영시간·리뷰·사진까지 실시간 정보를 볼 수 있습니다.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={naverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#03C75A] hover:bg-[#02b050] text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-green-900/20"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/></svg>
              네이버 지도에서 "{region.name} 홀덤펍" 검색
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
            <a
              href={kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#FEE500] hover:bg-[#f0d800] text-[#191919] font-bold px-6 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-yellow-900/20"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.73 1.6 5.13 4.03 6.56L5.1 21l4.5-2.5c.78.16 1.58.25 2.4.25 5.52 0 10-3.48 10-7.75C22 6.48 17.52 3 12 3z"/></svg>
              카카오맵에서 검색
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 space-y-14">

        {/* 분위기 & 특징 */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            {region.name} 홀덤펍 분위기
          </h2>
          <div className="bg-card border border-border rounded-2xl p-6">
            <p className="text-muted-foreground leading-relaxed">{region.scene}</p>
          </div>
        </section>

        {/* 밀집 구역 */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            {region.name} 홀덤펍 밀집 구역
          </h2>
          <div className="space-y-3">
            {region.hotSpots.map((spot, i) => (
              <motion.div
                key={spot.name}
                initial={false}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
              >
                <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-0.5">{spot.name}</h3>
                  <p className="text-sm text-muted-foreground">{spot.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 업체 정보 준비 중 */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              {region.name} 홀덤펍 업체 목록
            </h2>
            <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full px-3 py-1 font-medium">
              업데이트 예정
            </span>
          </div>

          <div className="border-2 border-dashed border-border rounded-2xl p-10 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <Clock className="w-8 h-8 text-primary/60" />
            </div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-2">
              업체 정보 준비 중입니다
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto mb-7">
              정확한 영업 정보, 바이인, 후기를 직접 검증한 후 순차적으로 등재할 예정입니다.
              그 전까지는 네이버·카카오 지도에서 실시간으로 확인하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={naverUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#03C75A] hover:bg-[#02b050] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                네이버 지도에서 지금 검색
              </a>
              <a
                href={kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FEE500] hover:bg-[#f0d800] text-[#191919] font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                카카오맵에서 지금 검색
              </a>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            {region.name} 방문 팁
          </h2>
          <div className="space-y-2.5">
            {region.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <div className="w-6 h-6 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Info className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 근처 지역 */}
        {nearbyRegions.length > 0 && (
          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">
              근처 다른 지역 홀덤펍도 보기
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {nearbyRegions.map(r => r && (
                <Link key={r.slug} href={`/pub/${r.slug}`}>
                  <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-md transition-all group cursor-pointer flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{r.emoji}</span>
                      <div>
                        <p className="font-bold text-foreground group-hover:text-primary transition-colors text-sm">{r.name} 홀덤펍</p>
                        <p className="text-xs text-muted-foreground">{r.fullName}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* SEO 내부링크 */}
        <section className="border-t border-border pt-8">
          <h2 className="font-serif text-base font-bold text-foreground mb-3 text-muted-foreground">홀덤 실력 키우기</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {[
              { href: "/calculator", label: "🧮 포커 확률 계산기 — 팟오즈·아웃츠 즉시 계산" },
              { href: "/blog/holdem-game-order", label: "📖 홀덤 게임 순서 완전 정복" },
              { href: "/blog/position-is-everything-in-holdem", label: "📍 포지션이 전부다 — 실전 전략" },
              { href: "/pub", label: "🗺️ 다른 지역 홀덤펍 보기" },
            ].map(item => (
              <Link key={item.href} href={item.href}>
                <div className="text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-card flex items-center gap-2 cursor-pointer">
                  <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
