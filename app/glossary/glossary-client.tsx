"use client";

import { SEO } from "@/components/seo";
import { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const TERMS = [
  { term: "넛츠 (Nuts)", desc: "현재 보드(커뮤니티 카드) 상황에서 만들어질 수 있는 가장 강력한 패. '내가 넛츠를 가지고 있다'는 것은 현재 질 수 없는 패라는 의미." },
  { term: "드로우 (Draw)", desc: "아직 완벽한 패가 아니지만, 한두 장의 카드만 더 들어오면 스트레이트나 플러시 같은 강력한 패가 되는 상태. 예: 플러시 드로우, 스트레이트 드로우." },
  { term: "레이즈 (Raise)", desc: "앞선 플레이어의 베팅 금액보다 더 큰 금액을 걸어 판돈을 키우는 행위. 주도권을 잡고 상대를 압박하는 공격적 액션." },
  { term: "림프 (Limp)", desc: "프리플랍에서 레이즈하지 않고 빅 블라인드 금액만큼만 콜하며 조심스럽게 게임에 참여하는 것. 일반적으로 약한 플레이로 평가받음." },
  { term: "보드 (Board)", desc: "테이블 중앙에 펼쳐지는 5장의 커뮤니티 카드를 통칭하는 말. '보드가 웻(wet)하다'는 것은 드로우가 많은 위험한 상황을 의미." },
  { term: "버튼 (Button)", desc: "딜러 포지션을 나타내는 둥근 마커. 매 판마다 시계 방향으로 이동하며 포스트플랍에서 항상 마지막으로 행동하는 가장 유리한 포지션." },
  { term: "블라인드 (Blind)", desc: "카드를 받기 전 의무적으로 내야 하는 기본 베팅 금액. 딜러 왼쪽 첫 번째가 스몰 블라인드(SB), 두 번째가 빅 블라인드(BB)." },
  { term: "블러프 (Bluff)", desc: "자신의 패가 약함에도 불구하고 강한 패인 척 큰 금액을 베팅하여 상대를 기권(폴드)하게 만드는 전략. 무분별한 블러핑은 손실을 유발." },
  { term: "세미 블러프 (Semi-Bluff)", desc: "현재는 약하지만 드로우 완성 시 강해지는 패로 하는 블러핑. 상대가 콜해도 완성 기회가 있어 일반 블러프보다 안전." },
  { term: "쇼다운 (Showdown)", desc: "마지막 베팅 라운드까지 끝난 후 남은 플레이어들이 카드를 공개하여 승자를 가리는 단계. 가장 높은 5장 족보 소유자가 팟을 가져감." },
  { term: "스택 (Stack)", desc: "플레이어가 테이블에서 보유한 칩의 총량. '딥 스택'은 많은 칩, '숏 스택'은 적은 칩을 보유한 상태." },
  { term: "아웃츠 (Outs)", desc: "현재 지고 있거나 미완성인 내 패를 이기는 패(메이드)로 만들어 줄 수 있는 덱에 남은 카드 장수. 플러시 드로우 아웃츠=9장, 스트레이트 드로우=8장." },
  { term: "올인 (All-in)", desc: "자신이 보유한 모든 칩을 한 번에 베팅하는 것. 올인 후에는 더 이상 베팅할 수 없으며, 사이드팟이 형성될 수 있음." },
  { term: "체크 (Check)", desc: "앞선 베팅이 없을 때, 베팅을 하지 않고 차례를 다음 사람에게 넘기는 것. 체크 후 상대가 베팅하면 콜·레이즈·폴드 중 선택해야 함." },
  { term: "체크레이즈 (Check-Raise)", desc: "처음에 체크로 약한 척하다가 상대가 베팅하면 레이즈로 기습하는 전략. 강한 패를 숨기거나 블러핑 차단에 사용." },
  { term: "콜 (Call)", desc: "앞선 플레이어의 베팅 금액과 동일한 금액을 지불하고 게임을 계속 진행하는 것. '콜링 스테이션'은 무분별하게 콜만 하는 플레이어를 지칭." },
  { term: "커뮤니티 카드 (Community Cards)", desc: "테이블 중앙에 오픈되어 모든 플레이어가 공유하여 사용하는 5장의 카드. 플랍(3장)·턴(1장)·리버(1장) 순으로 공개됨." },
  { term: "키커 (Kicker)", desc: "족보 결정에 사용되지 않는 나머지 높은 카드. 두 플레이어의 족보가 같을 때 키커로 우열을 가림. 예: 둘 다 에이스 원페어면 두 번째 높은 카드로 비교." },
  { term: "팟 (Pot)", desc: "현재 판에 쌓여 있는 베팅 금액의 총합. 승자가 팟 전체를 가져가며, 동점일 경우 나눔(스플릿 팟)." },
  { term: "팟 오즈 (Pot Odds)", desc: "현재 팟 크기 대비 내가 콜해야 하는 금액의 비율. '콜 금액 / (팟+콜금액)'으로 계산하며, 이 값보다 승리 확률이 높으면 콜이 수학적으로 올바름." },
  { term: "폴드 (Fold)", desc: "현재 판을 포기하고 카드를 덮는 행위. 베팅 금액을 잃지만 더 이상의 손실을 막을 수 있음. '다이(Die)'라고도 함." },
  { term: "프리플랍 (Pre-Flop)", desc: "공유 카드가 깔리기 전, 각자 2장의 개인 카드만 받은 상태에서의 첫 번째 베팅 라운드." },
  { term: "플랍 (Flop)", desc: "처음 3장의 커뮤니티 카드가 동시에 오픈되는 단계. 이후 두 번째 베팅 라운드가 진행됨." },
  { term: "핸드 레인지 (Hand Range)", desc: "특정 상황에서 상대방이 가질 수 있는 모든 패의 집합. '레인지를 읽는다'는 것은 상대의 예상 패 범위를 분석하는 중급 이상 전략." },
  { term: "3벳 (3-Bet)", desc: "오리지널 레이즈에 대한 리레이즈(re-raise). 프리플랍에서 상대의 레이즈에 다시 레이즈하는 것. 매우 강한 패 또는 블러프 신호." },
  { term: "C벳 (Continuation Bet)", desc: "프리플랍 레이저가 플랍에서도 계속 베팅하는 것. 주도권을 유지하는 일반적인 전략으로, 상대가 플랍에서 대부분 폴드하는 경향을 이용." },
].map((t) => ({ term: t.term, desc: t.desc })).sort((a, b) => a.term.localeCompare(b.term));

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = TERMS.filter(
    (t) =>
      t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const jsonLd = [
    {
      "@type": "FAQPage",
      "mainEntity": TERMS.slice(0, 8).map((t) => ({
        "@type": "Question",
        "name": `홀덤에서 ${t.term}이란 무엇인가요?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t.desc,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.holdemmaster.com/" },
        { "@type": "ListItem", "position": 2, "name": "홀덤 포커 용어 사전", "item": "https://www.holdemmaster.com/glossary" },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="⚡ 홀덤 포커 용어 사전 — 모르는 단어 바로 검색"
        description="⚡온라인홀덤 용어⚡ 모르는 단어 나왔을 때 바로 찾아보세요. 블러프·넛츠·팟오즈·아웃츠·레인지·3벳·C벳 등 25가지 이상 헷갈리는 포커 용어를 한국어로 완벽 정리."
        keywords="홀덤 용어, 포커 용어 뜻, 텍사스 홀덤 단어, 포커 블러프 뜻, 홀덤 넛츠 뜻, 아웃츠 계산, 팟 오즈 뜻, 홀덤 레인지, 3벳 뜻, C벳 뜻, 포커 용어 정리, 홀덤 초보 용어"
        path="/glossary"
        schema={jsonLd}
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
              { href: "/hands", label: "핸드 랭킹", desc: "족보 순위 완벽 정리" },
              { href: "/strategy", label: "전략 가이드", desc: "포지션·팟 오즈·블러핑" },
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
        </nav>
      </div>
    </>
  );
}
