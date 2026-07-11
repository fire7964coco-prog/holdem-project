"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ChevronRight, Search } from "lucide-react";
import { SEO } from "@/components/seo";
import { PUB_REGIONS } from "@/lib/pubs";

export default function PubIndex() {
  return (
    <>
      <SEO
        title="지역별 홀덤펍 추천 — 전국 홀덤펍 완전 가이드"
        description="⚡전국 홀덤펍⚡ 강남·홍대·일산·수원·인천·분당·부산·대구 지역별 홀덤펍 위치, 바이인, 운영시간 총정리. 내 주변 홀덤펍 찾기."
        keywords="홀덤펍, 강남 홀덤펍, 홍대 홀덤펍, 일산 홀덤펍, 수원 홀덤펍, 부산 홀덤펍, 대구 홀덤펍, 인천 홀덤펍, 분당 홀덤펍, 건대 홀덤펍, 신촌 홀덤펍, 지역별 홀덤펍"
        path="/pub"
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 text-sm text-primary mb-6">
              <MapPin className="w-4 h-4" />
              <span>전국 홀덤펍 디렉토리</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              내 근처 홀덤펍<br />
              <span className="text-primary">지역별로 찾기</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              강남·홍대·일산·수원·부산·대구 등 전국 주요 지역의 홀덤펍 정보를 모았습니다.
              지역을 선택해 분위기·위치·밀집 구역을 확인하세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 지역 그리드 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {PUB_REGIONS.map((region, i) => (
            <motion.div
              key={region.slug}
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <Link href={`/pub/${region.slug}`}>
                <div className="group bg-card border border-border rounded-2xl p-4 hover:border-primary/60 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-250 cursor-pointer flex flex-col items-center text-center gap-2">
                  <span className="text-3xl mt-1">{region.emoji}</span>
                  <div>
                    <p className="font-serif font-bold text-foreground group-hover:text-primary transition-colors text-base leading-tight">
                      {region.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{region.fullName}</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2 mt-1">
                    {region.atmosphere}
                  </p>
                  <span className="text-xs text-primary font-medium mt-auto pt-1">
                    자세히 보기 →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 빠른 검색 CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-3xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <Search className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
              지금 바로 내 근처 홀덤펍 검색
            </h2>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              네이버·카카오 지도에서 실시간으로 운영 중인 홀덤펍을 확인하세요.<br />
              신규 오픈, 운영시간, 리뷰까지 한번에 볼 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://map.naver.com/v5/search/홀덤펍"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#03C75A] hover:bg-[#02b050] text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-green-900/20"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/></svg>
                네이버 지도에서 검색
              </a>
              <a
                href="https://map.kakao.com/?q=홀덤펍"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FEE500] hover:bg-[#f0d800] text-[#191919] font-bold px-8 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-yellow-900/20"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.73 1.6 5.13 4.03 6.56L5.1 21l4.5-2.5c.78.16 1.58.25 2.4.25 5.52 0 10-3.48 10-7.75C22 6.48 17.52 3 12 3z"/></svg>
                카카오맵에서 검색
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 처음 방문 가이드 */}
      <section className="bg-card border-t border-b border-border py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            홀덤펍 처음 방문할 때 알아야 할 것들
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "💰", title: "바이인(Buy-in)이란?", desc: "게임 참가 시 내는 금액입니다. 지역과 펍에 따라 2만원~30만원까지 다양합니다. 처음이라면 5만원 이하 바이인 펍부터 시작하세요." },
              { icon: "⏰", title: "운영시간 확인 필수", desc: "홀덤펍은 심야 영업이 많습니다. 방문 전 네이버 지도나 SNS에서 최신 운영 여부를 꼭 확인하세요. 임시 휴업도 빈번합니다." },
              { icon: "📋", title: "기본 에티켓", desc: "앤티·블라인드 규칙을 미리 숙지하고 가세요. 다른 손님의 패를 보거나 게임 중 충고하는 행동은 에티켓 위반입니다." },
              { icon: "📍", title: "네이버 지도 리뷰 활용", desc: "방문 전 네이버 지도 리뷰에서 최근 손님 경험을 확인하세요. 분위기·딜러 수준·바이인 정보를 미리 파악할 수 있습니다." },
            ].map(item => (
              <div key={item.title} className="flex gap-4 p-5 bg-background rounded-xl border border-border">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-sm">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/blog/holdem-pub-guide"
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/15 text-primary border border-primary/30 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              🍺 홀덤펍 완전 가이드 — 첫방문·비용·합법성 한눈에
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 내부링크 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="font-serif text-xl font-bold text-foreground mb-5 text-center">홀덤 실력도 함께 키워보세요</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { href: "/calculator", icon: "🧮", title: "포커 확률 계산기", desc: "아웃츠·팟오즈·족보 판별 무료 계산" },
            { href: "/blog/holdem-game-order", icon: "📖", title: "홀덤 게임 진행 순서", desc: "게임 흐름 완벽 이해" },
            { href: "/blog/bluffing-strategy-when-and-how", icon: "🎭", title: "블러핑 전략 가이드", desc: "언제, 어떻게 블러핑할까" },
          ].map(item => (
            <Link key={item.href} href={item.href}>
              <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors group cursor-pointer">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
