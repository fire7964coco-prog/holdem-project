import Link from "next/link";

type Locale = "ko" | "en" | "ja" | "zh" | "es" | "de" | "ar" | "tr" | "vi" | "id" | "ms" | "pt" | "hi";

const CTA_COPY: Record<Locale, { title: string; sub: string; button: string }> = {
  ko: {
    title: "전략, 핸드, 결과를 커뮤니티에서 토론해보세요",
    sub: "14개국 플레이어들이 모인 홀덤마스터 커뮤니티에서 실전 경험을 나눠보세요.",
    button: "커뮤니티 입장 →",
  },
  en: {
    title: "Discuss strategy, hands & results with players worldwide",
    sub: "Join HoldemMaster Community — connect with players from 14 countries.",
    button: "Join the Community →",
  },
  ja: {
    title: "戦略・ハンド・結果をコミュニティで話し合おう",
    sub: "14カ国のプレイヤーが集まるHoldemMasterコミュニティで実戦経験を共有しましょう。",
    button: "コミュニティへ →",
  },
  zh: {
    title: "在社区讨论策略、手牌与战果",
    sub: "加入HoldemMaster社区，与来自14个国家的玩家分享实战经验。",
    button: "进入社区 →",
  },
  es: {
    title: "Debate estrategias, manos y resultados con jugadores de todo el mundo",
    sub: "Únete a la comunidad HoldemMaster — conecta con jugadores de 14 países.",
    button: "Unirse a la comunidad →",
  },
  de: {
    title: "Diskutiere Strategie, Hände & Ergebnisse mit Spielern weltweit",
    sub: "Tritt der HoldemMaster Community bei — verbinde dich mit Spielern aus 14 Ländern.",
    button: "Community beitreten →",
  },
  ar: {
    title: "ناقش الاستراتيجيات والأيدي والنتائج مع لاعبين حول العالم",
    sub: "انضم إلى مجتمع HoldemMaster — تواصل مع لاعبين من 14 دولة.",
    button: "انضم للمجتمع →",
  },
  tr: {
    title: "Strateji, el ve sonuçlarını dünya genelindeki oyuncularla tartış",
    sub: "HoldemMaster Topluluğu'na katıl — 14 ülkeden oyuncularla bağlantı kur.",
    button: "Topluluğa Katıl →",
  },
  vi: {
    title: "Thảo luận chiến lược, bài và kết quả với người chơi toàn cầu",
    sub: "Tham gia cộng đồng HoldemMaster — kết nối với người chơi từ 14 quốc gia.",
    button: "Vào cộng đồng →",
  },
  id: {
    title: "Diskusikan strategi, tangan & hasil dengan pemain di seluruh dunia",
    sub: "Bergabunglah dengan komunitas HoldemMaster — terhubung dengan pemain dari 14 negara.",
    button: "Bergabung →",
  },
  ms: {
    title: "Bincangkan strategi, tangan & keputusan dengan pemain di seluruh dunia",
    sub: "Sertai komuniti HoldemMaster — berhubung dengan pemain dari 14 negara.",
    button: "Sertai Komuniti →",
  },
  pt: {
    title: "Discuta estratégia, mãos e resultados com jogadores do mundo todo",
    sub: "Junte-se à comunidade HoldemMaster — conecte-se com jogadores de 14 países.",
    button: "Entrar na Comunidade →",
  },
  hi: {
    title: "दुनिया भर के खिलाड़ियों के साथ रणनीति, हैंड और नतीजों पर चर्चा करें",
    sub: "HoldemMaster कम्युनिटी से जुड़ें — 14 देशों के खिलाड़ियों से जुड़ें।",
    button: "कम्युनिटी में शामिल हों →",
  },
};

export default function CommunityCTA({ locale = "ko" }: { locale?: Locale }) {
  const c = CTA_COPY[locale] ?? CTA_COPY.en;

  return (
    <div
      className="mt-10 rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0b1120 0%, #111827 100%)",
        border: "1px solid rgba(212,175,55,0.25)",
      }}
    >
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg,#d4af37,#f0d060,transparent)" }}
      />
      <div className="px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)" }}
            >
              <span className="font-black text-[10px]" style={{ color: "#0b1120" }}>HM</span>
            </div>
            <span className="text-xs font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>
              HoldemMaster Community
            </span>
          </div>
          <p className="text-sm font-bold leading-snug" style={{ color: "#f0e8c8" }}>
            {c.title}
          </p>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
            {c.sub}
          </p>
        </div>
        <Link
          href="/"
          className="flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(135deg,#d4af37,#f0d060)",
            color: "#0b1120",
            whiteSpace: "nowrap",
          }}
        >
          {c.button}
        </Link>
      </div>
    </div>
  );
}
