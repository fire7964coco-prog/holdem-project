"use client";

import { SEO } from "@/components/seo";
import { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// ★TERMS는 `glossary-data.ts`로 옮겼다 — 서버 page.tsx의 DefinedTermSet과 **같은 배열**을 써야 한다.
import { TERMS } from "./glossary-data";

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = TERMS.filter(
    (t) =>
      t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <>
      <SEO
        title="⚡ 홀덤 포커 용어 사전 — 모르는 단어 바로 검색"
        description="⚡온라인홀덤 용어⚡ 모르는 단어 나왔을 때 바로 찾아보세요. 블러프·넛츠·팟오즈·아웃츠·레인지·3벳·C벳 등 25가지 이상 헷갈리는 포커 용어를 한국어로 완벽 정리."
        keywords="홀덤 용어, 포커 용어 뜻, 텍사스 홀덤 단어, 포커 블러프 뜻, 홀덤 넛츠 뜻, 아웃츠 계산, 팟 오즈 뜻, 홀덤 레인지, 3벳 뜻, C벳 뜻, 포커 용어 정리, 홀덤 초보 용어"
        path="/glossary"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-5">
            텍사스 홀덤 포커 용어 사전
          </h1>
          <p className="text-lg text-muted-foreground mb-3 max-w-xl mx-auto">
            <strong className="text-foreground">온라인홀덤</strong>을 하다 보면 생소한 영어 용어들이 쏟아집니다.
            <strong className="text-foreground"> 블러프, 넛츠, 팟 오즈, 아웃츠</strong> 등 온라인 포커에서
            반드시 알아야 할 25개 이상의 필수 포커 용어를 한국어로 정리했습니다.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            총 <strong className="text-primary">{TERMS.length}개</strong> 용어 수록 · 검색으로 빠르게 찾기
          </p>

          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 border border-primary/30 rounded-xl bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base shadow-[0_0_15px_rgba(0,0,0,0.4)]"
              placeholder="용어 검색 (예: 블러프, 팟 오즈, 아웃츠)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-3">
          <AnimatePresence>
            {filteredTerms.length > 0 ? (
              filteredTerms.map((item, index) => (
                <motion.div
                  key={item.term}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: index < 12 ? index * 0.03 : 0 }}
                  className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors group"
                >
                  <h2 className="text-lg font-bold text-primary mb-1.5">{item.term}</h2>
                  <p className="text-foreground/85 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={false}
                animate={{ opacity: 1 }}
                className="text-center py-16 text-muted-foreground"
              >
                <div className="text-4xl mb-3">🔍</div>
                <p className="font-semibold">"{searchTerm}"에 대한 용어를 찾을 수 없습니다.</p>
                <p className="text-sm mt-1">다른 키워드로 검색해보세요.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Related pages */}
        <nav aria-label="관련 가이드" className="mt-12">
          <h2 className="text-base font-bold text-muted-foreground mb-4">다음으로 읽어보세요</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { href: "/rules", label: "기초 규칙", desc: "블라인드·쇼다운 6단계" },
              { href: "/blog/holdem-hand-rankings", label: "핸드 랭킹", desc: "족보 순위 완벽 정리" },
              { href: "/strategy", label: "전략 가이드", desc: "포지션·팟 오즈·블러핑" },
              // ★앵커에 「홀덤사이트」를 담는다(2026-08-28) — 이 표기가 실측 노출 2,970으로 지배형이다.
              //   «추천/TOP5»는 /ranking이 스스로 선언한 "정보 제공 목적, 순위·보증 아님"과도 어긋났다.
              { href: "/ranking", label: "홀덤사이트 고르는 법", desc: "안전 기준·먹튀 경고 신호" },
              { href: "/blog", label: "전략 블로그", desc: "실전 전략 칼럼" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href}>
                <div className="bg-card border border-border rounded-lg p-3 hover:border-primary/50 hover:bg-primary/5 transition-all text-center group">
                  <div className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
