"use client";

import { SEO } from "@/components/seo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ShieldAlert, Crosshair, Target, BookOpen, TrendingUp, Brain } from "lucide-react";
import Link from "next/link";

export default function Strategy() {
  const jsonLd = [
    {
      "@type": "Article",
      "headline": "텍사스 홀덤 전략 가이드 — 초급부터 고급까지 승률 올리는 법",
      "description": "텍사스 홀덤에서 승률을 높이는 실전 전략. 포지션 활용법, 스타팅 핸드 선택, 팟 오즈 계산, 블러핑 타이밍, GTO 전략까지 초급·중급·고급으로 구분해 설명합니다.",
      "author": { "@type": "Organization", "name": "홀덤마스터" },
      "publisher": { "@type": "Organization", "name": "홀덤마스터", "url": "https://holdemmaster.com" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://holdemmaster.com/" },
        { "@type": "ListItem", "position": 2, "name": "홀덤 전략 가이드", "item": "https://holdemmaster.com/strategy" },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="⚡ 온라인홀덤 이기는 법 — 초·중·고급 실전 전략 완벽 가이드"
        description="⚡온라인홀덤 전략⚡ 매번 잃고 있다면? 포지션·스타팅핸드·팟오즈·블러핑 타이밍까지 실전 검증된 전략만 모았습니다. 초급부터 고급 GTO 전략까지 이것만 알면 승률이 달라집니다."
        keywords="텍사스 홀덤 전략, 홀덤 이기는 법, 포커 포지션 전략, 홀덤 블러핑 전략, 팟 오즈 계산법, 홀덤 스타팅 핸드 추천, 포커 타이트 어그레시브, 홀덤 베팅 전략, 홀덤 승률 높이기, 포커 GTO 전략"
        path="/strategy"
        schema={jsonLd}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-5">
            텍사스 홀덤 전략 가이드
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <strong className="text-foreground">온라인홀덤</strong>은 단순한 운의 게임이 아닙니다.
            <strong className="text-foreground"> 수학적 확률, 포지션, 심리전</strong>이 결합된 고도의 두뇌 게임입니다.
            홀덤 이기는 법은 꾸준한 연습과 올바른 전략·전술에 있습니다.
            초급·중급·고급 단계별로 당신의 홀덤 승률을 끌어올리세요.
          </p>
        </div>

        {/* Strategy Overview */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-3 gap-3 mb-10"
        >
          {[
            { label: "초급 전략", desc: "타이트 어그레시브·포지션 활용", icon: ShieldAlert },
            { label: "중급 전략", desc: "상대 분석·블러핑·레인지 사고", icon: Brain },
            { label: "고급 전략", desc: "팟 오즈·EV 계산·베팅 사이징", icon: TrendingUp },
          ].map(({ label, desc, icon: Icon }) => (
            <div key={label} className="bg-card border border-border rounded-xl p-4 text-center">
              <Icon className="w-7 h-7 text-primary mx-auto mb-2" />
              <div className="font-bold text-foreground text-sm">{label}</div>
              <div className="text-xs text-muted-foreground mt-1">{desc}</div>
            </div>
          ))}
        </motion.div>

        <Tabs defaultValue="beginner" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-10 bg-card p-1 rounded-xl border border-border">
            <TabsTrigger value="beginner" className="py-3 text-sm md:text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg">
              초급 전략
            </TabsTrigger>
            <TabsTrigger value="intermediate" className="py-3 text-sm md:text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg">
              중급 전략
            </TabsTrigger>
            <TabsTrigger value="advanced" className="py-3 text-sm md:text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg">
              고급 전략
            </TabsTrigger>
          </TabsList>

          {/* 초급 */}
          <TabsContent value="beginner" className="mt-0">
            <motion.div
              initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="grid gap-6 md:grid-cols-2"
            >
              <div className="bg-card border border-border p-8 rounded-xl">
                <ShieldAlert className="w-10 h-10 text-primary mb-4" />
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">타이트 어그레시브 플레이</h2>
                <p className="text-muted-foreground leading-relaxed">
                  홀덤 초보자가 가장 먼저 익혀야 할 전략이 <strong className="text-foreground">타이트 어그레시브(TAG)</strong>입니다.
                  프리플랍에서 상위 15~20%의 강한 핸드(AA, KK, QQ, JJ, AK, AQ 등)만 선별하고,
                  참여할 때는 <strong className="text-foreground">콜이 아닌 레이즈</strong>로 주도권을 잡으세요.
                  약한 패로 플랍을 보는 것은 장기적으로 손실입니다.
                </p>
              </div>
              <div className="bg-card border border-border p-8 rounded-xl">
                <Crosshair className="w-10 h-10 text-primary mb-4" />
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">포지션의 힘 — 자리가 전부다</h2>
                <p className="text-muted-foreground leading-relaxed">
                  텍사스 홀덤에서 <strong className="text-foreground">포지션(자리)</strong>은 승패를 가르는 핵심 요소입니다.
                  딜러 버튼(BTN)에 가까울수록 마지막에 행동하므로 상대 정보를 먼저 얻을 수 있습니다.
                  얼리 포지션(UTG)에서는 강한 핸드만, <strong className="text-foreground">레이트 포지션(BTN, CO)에서는 더 넓은 핸드 레인지</strong>로 공격적으로 플레이하세요.
                </p>
              </div>
              <div className="bg-card border border-border p-8 rounded-xl md:col-span-2">
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">초보자 추천 스타팅 핸드</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { hands: "AA, KK, QQ", label: "프리미엄 포켓 페어", note: "항상 레이즈" },
                    { hands: "JJ, TT, 99", label: "미들 포켓 페어", note: "포지션 고려" },
                    { hands: "AK, AQ (수티드)", label: "강한 에이스 핸드", note: "3벳 고려" },
                    { hands: "KQ, AJ, KJ (수티드)", label: "커넥터 핸드", label2: "레이트 포지션만", note: "선택적 참여" },
                  ].map((item) => (
                    <div key={item.hands} className="bg-background border border-border rounded-lg p-3 text-center">
                      <div className="text-primary font-bold text-sm mb-1">{item.hands}</div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="text-xs text-primary/70 mt-1 font-medium">{item.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* 중급 */}
          <TabsContent value="intermediate" className="mt-0">
            <motion.div
              initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="grid gap-6 md:grid-cols-2"
            >
              <div className="bg-card border border-border p-8 rounded-xl">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">어그레시브 플레이로 주도권 잡기</h2>
                <p className="text-muted-foreground leading-relaxed">
                  콜(Call)만 하는 <strong className="text-foreground">콜링 스테이션</strong>이 되지 마세요.
                  내가 유리한 상황에서는 레이즈로 팟을 키우고, 상대를 압박해야 합니다.
                  공격적 플레이어는 최강 패로도 이기지만, <strong className="text-foreground">상대가 폴드하게 만들어서도 승리</strong>합니다.
                  이것이 홀덤에서 장기적으로 수익을 내는 비결입니다.
                </p>
              </div>
              <div className="bg-card border border-border p-8 rounded-xl">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">상대방 레인지 읽기</h2>
                <p className="text-muted-foreground leading-relaxed">
                  중급 이상의 홀덤 전략은 <strong className="text-foreground">상대의 핸드 레인지(예상 패 범위)</strong>를 읽는 것에서 시작합니다.
                  타이트한 플레이어의 레이즈는 강한 패, 루즈한 플레이어의 레이즈는 블러핑일 수 있습니다.
                  상대의 베팅 패턴·포지션·프리플랍 행동을 종합해 레인지를 좁혀가세요.
                </p>
              </div>
              <div className="bg-card border border-border p-8 rounded-xl md:col-span-2">
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">세미 블러핑 — 가장 안전한 블러핑</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong className="text-foreground">세미 블러핑</strong>은 지금은 약하지만 드로우가 완성되면 강해지는 패로 블러핑하는 전략입니다.
                  플러시 드로우(카드 1장 부족)나 오픈 엔드 스트레이트 드로우 상황에서 활용하면,
                  상대가 폴드해도 이기고 콜해도 드로우 완성 시 이길 수 있습니다.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {["플러시 드로우 (아웃츠 9장)", "양방 스트레이트 드로우 (아웃츠 8장)", "오버카드 2장 (아웃츠 6장)"].map(t => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-background border border-border text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* 고급 */}
          <TabsContent value="advanced" className="mt-0">
            <motion.div
              initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-card border border-border p-8 rounded-xl">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 text-primary">
                  팟 오즈 & 기대값 (EV) 계산법
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  고급 홀덤 전략의 핵심은 <strong className="text-foreground">팟 오즈(Pot Odds)</strong>와
                  <strong className="text-foreground"> 기대값(Expected Value, EV)</strong> 계산입니다.
                  콜할지 폴드할지 결정할 때, 내가 이길 확률과 베팅 비율을 비교해야 합니다.
                </p>
                <div className="bg-background p-5 rounded-lg border border-primary/20 font-mono text-sm space-y-2">
                  <p className="text-foreground font-bold mb-2">📊 팟 오즈 계산 예시</p>
                  <p className="text-muted-foreground">팟: 100,000원 | 상대 베팅: 50,000원</p>
                  <p className="text-muted-foreground">콜 금액: 50,000원 / 총 팟: 150,000원</p>
                  <p className="text-primary font-bold">팟 오즈 = 50,000 / 150,000 = 33% 승률 필요</p>
                  <p className="text-muted-foreground mt-2">플러시 드로우 승률 ≈ 20% (턴 기준) → 수학적으로 <span className="text-red-400 font-bold">폴드</span></p>
                  <p className="text-muted-foreground">플러시 드로우 승률 ≈ 35% (플랍→쇼다운) → 수학적으로 <span className="text-green-400 font-bold">콜</span></p>
                </div>
              </div>

              <div className="bg-card border border-border p-8 rounded-xl">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 text-primary">
                  베팅 사이징 (Bet Sizing) 전략
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  <strong className="text-foreground">베팅 사이징</strong>은 목적에 따라 달라집니다.
                  강한 패로 콜을 유도하는 <strong className="text-foreground">밸류 벳</strong>과
                  약한 패로 상대를 폴드시키는 <strong className="text-foreground">블러프 벳</strong>을 구분해야 합니다.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { size: "팟의 25~33%", use: "블로킹 벳, 정보 수집", color: "border-blue-500/30 bg-blue-500/5" },
                    { size: "팟의 50%", use: "일반 밸류 벳, 드로우 차단", color: "border-green-500/30 bg-green-500/5" },
                    { size: "팟의 75%", use: "강한 밸류 벳, 세미 블러프", color: "border-yellow-500/30 bg-yellow-500/5" },
                    { size: "팟의 100%+", use: "너트 핸드, 풀 블러프", color: "border-red-500/30 bg-red-500/5" },
                  ].map(({ size, use, color }) => (
                    <div key={size} className={`border rounded-lg p-3 text-center ${color}`}>
                      <div className="font-bold text-foreground text-sm mb-1">{size}</div>
                      <div className="text-xs text-muted-foreground">{use}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border p-8 rounded-xl">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-3 text-primary">
                  GTO vs 익스플로이타티브 전략
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  <strong className="text-foreground">GTO(Game Theory Optimal)</strong>는 솔버로 계산한 이론적 최적 전략으로, 상대가 어떻게 플레이해도 장기적으로 손해를 보지 않습니다.
                  반면 <strong className="text-foreground">익스플로이타티브 전략</strong>은 상대의 약점을 발견하고 그것을 극대화해서 공략하는 방식입니다.
                  일반 게임에서는 익스플로이타티브 전략이 더 높은 수익을 낼 수 있지만, GTO 기초 없이는 역으로 당할 수 있습니다.
                </p>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* SEO visible summary — all strategy content accessible without JS */}
        <div className="mt-16 bg-card border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-serif font-bold text-foreground mb-2">홀덤 전략 핵심 요약</h2>
          <div className="text-sm text-muted-foreground space-y-2">
            <p><span className="text-primary font-semibold">타이트 어그레시브(TAG):</span> 프리플랍 상위 15~20% 핸드만 선별 후 레이즈로 주도권 장악. 초보자가 가장 먼저 익혀야 할 전략.</p>
            <p><span className="text-primary font-semibold">포지션 전략:</span> 딜러 버튼(BTN)에 가까울수록 유리. 레이트 포지션에서 더 넓은 핸드 레인지 플레이 가능.</p>
            <p><span className="text-primary font-semibold">세미 블러핑:</span> 플러시·스트레이트 드로우 상황에서 베팅 — 폴드 유도 또는 드로우 완성으로 이중 승리 가능.</p>
            <p><span className="text-primary font-semibold">팟 오즈 계산:</span> 콜 금액 ÷ (팟+콜금액) = 필요 승률. 내 실제 승률이 이보다 높으면 수학적으로 콜이 유리.</p>
            <p><span className="text-primary font-semibold">베팅 사이징:</span> 팟의 25~33%(블로킹), 50%(밸류), 75%(강한 밸류/세미블러프), 100%+(너트/풀블러프) 상황별 구분.</p>
            <p><span className="text-primary font-semibold">GTO vs 익스플로이타티브:</span> GTO는 이론적 최적 전략, 익스플로이타티브는 상대 약점 공략. 일반 게임에서는 후자가 더 수익적.</p>
            <p><span className="text-primary font-semibold">온라인홀덤 적용:</span> 온라인 포커는 핸드 수가 많고 데이터 추적이 가능해 전략을 더 빠르게 검증할 수 있습니다. 포커트래커·HM3 같은 HUD 소프트웨어를 활용하면 실력 향상 속도가 크게 빨라집니다.</p>
          </div>
        </div>

        {/* Related pages */}
        <motion.nav
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          aria-label="관련 가이드"
          className="mt-8"
        >
          <h2 className="text-base font-bold text-muted-foreground mb-4">다음으로 읽어보세요</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { href: "/rules", label: "기초 규칙", desc: "블라인드·쇼다운 6단계" },
              { href: "/hands", label: "핸드 랭킹", desc: "족보 순위 완벽 정리" },
              { href: "/glossary", label: "용어 사전", desc: "필수 홀덤 용어 26개" },
              { href: "/ranking", label: "추천 사이트", desc: "TOP5 홀덤 사이트" },
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
        </motion.nav>
      </div>
    </>
  );
}
