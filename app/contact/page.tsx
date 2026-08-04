import type { Metadata } from "next";
import Link from "next/link";
import { Mail, AlertTriangle, MessageSquare, Store } from "lucide-react";
import { SITE, CONTACT_EMAIL } from "@/lib/site";
import { LegalPage, LegalSection } from "@/components/legal-page";

/**
 * 문의·오류 제보.
 *
 * ★없는 채널을 만들지 않는다. 여기 적힌 셋은 전부 실재한다:
 *   - 이메일 holdemmaster.kr@gmail.com (lib/site.ts CONTACT_EMAIL — 홀덤펍 홍보 글이 이미 공개 중)
 *   - 커뮤니티 피드 글쓰기 (로그인 후 / 에서)
 *   - [매장소개] 메일 규칙 (lib/posts/holdem-pub-promotion.ts에 이미 안내된 실제 접수 방식)
 *   폼(form)을 두지 않은 이유: 이 사이트는 SSG라 문의를 받을 서버 엔드포인트가 없다.
 *   동작하지 않는 폼을 놓는 것이 링크 없는 것보다 나쁘다.
 */

const UPDATED = "2026-08-04";

export const metadata: Metadata = {
  title: "문의·오류 제보",
  description:
    "홀덤마스터에 사실 오류를 제보하거나 다뤄줬으면 하는 주제를 제안하는 방법, 홀덤펍 매장 소개 신청 절차를 안내합니다.",
  alternates: { canonical: `${SITE}/contact` },
  openGraph: {
    type: "website",
    url: `${SITE}/contact`,
    title: "문의·오류 제보 | 홀덤마스터",
    description: "사실 오류 제보·주제 제안·매장 소개 신청 안내.",
    siteName: "홀덤마스터",
    locale: "ko_KR",
  },
};

const CHANNELS = [
  {
    Icon: AlertTriangle,
    title: "콘텐츠 오류 제보",
    body:
      "핸드 예시의 승패 판정, 확률·계산 수치, 대회 일정이나 룰 설명이 틀렸다면 알려주세요. 홀덤마스터는 모든 핸드 예시를 베스트 5장까지 직접 검산해 발행하지만, 그래도 새어 나가는 오류가 있습니다.",
    hint: "메일 제목에 [오류제보]를 넣고 글 주소를 함께 보내주시면 가장 빠릅니다.",
  },
  {
    Icon: MessageSquare,
    title: "주제 제안·질문",
    body:
      "다뤄줬으면 하는 주제, 검색해도 답이 안 나오는 상황이 있다면 제안해 주세요. 실제로 독자 질문에서 출발한 글이 여러 편 있습니다.",
    hint: "메일 제목에 [주제제안]. 커뮤니티 피드에 글로 남겨주셔도 됩니다.",
  },
  {
    Icon: Store,
    title: "홀덤펍 매장 소개 신청",
    body:
      "운영 중인 홀덤펍을 사이트에 소개하고 싶은 점주분은 매장명·지역·영업시간·연락처를 보내주세요. 확인 후 안내드립니다.",
    hint: "메일 제목에 [매장소개]를 넣어주세요.",
  },
] as const;

export default function ContactPage() {
  return (
    <LegalPage
      eyebrow={
        <>
          <Mail className="w-4 h-4" aria-hidden="true" /> 문의
        </>
      }
      title="문의·오류 제보"
      lead="틀린 정보를 발견하셨거나 제안할 주제가 있다면 알려주세요. 확인 후 반영하고 글에 수정일을 표기합니다."
      updated={UPDATED}
      intro={
        /* 대표 연락처 — 페이지에서 가장 먼저 눈에 들어와야 하는 정보라 조항 위(.legal-prose 밖)에 둔다 */
        <div className="mb-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-primary/5 p-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">대표 문의 메일</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-lg md:text-2xl font-black text-foreground hover:text-primary transition-colors break-all"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            영업일 기준 2~3일 안에 회신드립니다. 회신이 없으면 스팸함을 확인해 주세요.
          </p>
        </div>
      }
    >
      <LegalSection id="channels" title="어떤 문의인가요?">
        {CHANNELS.map(({ Icon, title, body, hint }) => (
          <div key={title} className="mb-4 rounded-2xl border border-border bg-card p-5">
            <h3 className="flex items-center gap-2 text-base font-bold text-foreground mb-2">
              <Icon className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
              {title}
            </h3>
            <p className="leading-relaxed">{body}</p>
            <p className="text-primary font-semibold" style={{ marginBottom: 0 }}>
              {hint}
            </p>
          </div>
        ))}
      </LegalSection>

      <LegalSection id="community" title="커뮤니티에 바로 물어보기">
        <p>
          다른 이용자의 의견이 궁금한 질문이라면 메일보다 커뮤니티 피드가 빠릅니다. 로그인 후{" "}
          <Link href="/">홈 피드</Link>에서 글을 남기시면 됩니다. 실시간 채팅도 열려 있습니다.
        </p>
      </LegalSection>

      <LegalSection id="notice" title="문의 전 확인해 주세요">
        <ul>
          <li>
            홀덤마스터는 <strong>금전 거래·베팅·환전을 중개하지 않습니다.</strong> 관련 문의에는 답변드릴
            수 없습니다.
          </li>
          <li>
            개인정보 열람·삭제 요청은 <Link href="/privacy">개인정보처리방침</Link> 제5조의 절차를 따릅니다.
          </li>
          <li>
            사이트 이용 조건은 <Link href="/terms">이용약관</Link>에서 확인하실 수 있습니다.
          </li>
          <li>
            누가 이 사이트를 만드는지 궁금하시다면 <Link href="/about">팀 소개</Link>를 보세요.
          </li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
