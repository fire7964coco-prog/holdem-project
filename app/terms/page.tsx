import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";
import { SITE, CONTACT_EMAIL } from "@/lib/site";
import { LegalPage, LegalSection } from "@/components/legal-page";

/**
 * 이용약관.
 *
 * ★실제 서비스 범위에 맞춰 쓴다. 여기 없는 기능(결제·유료 멤버십·상품 판매 등)을
 *   약관에만 적어 두면 그 자체가 사실과 다른 고지다. 홀덤마스터는 금전 거래가 없는
 *   정보 제공 + 커뮤니티 서비스이고, 이벤트는 무료 참여형이다(supabase/schema.sql event_entries).
 */

const UPDATED = "2026-08-04";

export const metadata: Metadata = {
  title: "이용약관",
  description:
    "홀덤마스터 서비스 이용 조건, 회원의 의무와 금지 행위, 게시물 저작권, 면책 범위, 만 19세 미만 이용 제한을 안내합니다.",
  alternates: { canonical: `${SITE}/terms` },
  openGraph: {
    type: "website",
    url: `${SITE}/terms`,
    title: "이용약관 | 홀덤마스터",
    description: "서비스 이용 조건·회원 의무·게시물 저작권·면책 범위 안내.",
    siteName: "홀덤마스터",
    locale: "ko_KR",
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow={
        <>
          <FileText className="w-4 h-4" aria-hidden="true" /> 서비스 이용 조건
        </>
      }
      title="이용약관"
      lead="홀덤마스터(holdemmaster.com)를 이용하시면 아래 약관에 동의한 것으로 봅니다."
      updated={UPDATED}
    >
      <LegalSection id="purpose" title="제1조 (목적)">
        <p>
          이 약관은 홀덤마스터(이하 &ldquo;사이트&rdquo;)가 제공하는 텍사스 홀덤 정보 콘텐츠와 커뮤니티
          서비스의 이용 조건, 이용자와 사이트의 권리·의무를 정하는 것을 목적으로 합니다.
        </p>
      </LegalSection>

      <LegalSection id="service" title="제2조 (서비스의 내용)">
        <p>사이트는 다음 서비스를 무료로 제공합니다.</p>
        <ul>
          <li>텍사스 홀덤 규칙·전략·확률·용어에 관한 정보 콘텐츠(블로그, 가이드)</li>
          <li>팟오즈·아웃츠·ICM 등 확률 계산 도구와 퀴즈·시뮬레이터</li>
          <li>국내외 홀덤 대회 일정 및 홀덤펍 정보 안내</li>
          <li>회원 간 커뮤니티(피드 글·댓글·좋아요·실시간 채팅)와 참여형 이벤트</li>
        </ul>
        <p>
          <strong>사이트는 금전 거래·베팅·환전을 중개하지 않습니다.</strong> 유료 상품이나 멤버십을
          판매하지 않으며, 이벤트 참여에도 비용이 들지 않습니다.
        </p>
      </LegalSection>

      <LegalSection id="age" title="제3조 (이용 자격 — 만 19세 이상)">
        <p>
          사이트는 <strong>만 19세 이상</strong>만 이용할 수 있습니다. 만 19세 미만은 회원가입과 커뮤니티
          이용이 금지되며, 확인되는 즉시 계정과 게시물이 삭제됩니다.
        </p>
      </LegalSection>

      <LegalSection id="account" title="제4조 (회원 계정)">
        <ul>
          <li>정보 콘텐츠는 회원가입 없이 열람할 수 있으며, 커뮤니티 기능은 로그인이 필요합니다.</li>
          <li>회원은 계정 정보를 타인에게 양도·대여할 수 없습니다.</li>
          <li>
            타인을 사칭하거나 오해를 유발하는 닉네임, 광고성 닉네임은 사전 통지 없이 변경·삭제될 수
            있습니다.
          </li>
          <li>회원은 언제든지 탈퇴할 수 있으며, 처리 방식은 개인정보처리방침 제3조를 따릅니다.</li>
        </ul>
      </LegalSection>

      <LegalSection id="prohibited" title="제5조 (금지 행위)">
        <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
        <ul>
          <li>
            <strong>도박·환전 알선 및 광고</strong> — 불법 사설 홀덤 사이트, 환전 서비스, 사행성 사이트의
            홍보·유도·링크 게시
          </li>
          <li>타인의 개인정보 게시, 명예훼손, 욕설·차별·혐오 표현</li>
          <li>음란물·불법 정보의 게시 또는 링크</li>
          <li>사이트 콘텐츠를 무단 복제·배포하거나 자동화 도구로 대량 수집하는 행위</li>
          <li>스팸·도배·중복 게시, 서비스 운영을 방해하는 행위</li>
          <li>계정 도용, 취약점 악용, 서버 부하를 유발하는 비정상 접근</li>
        </ul>
        <p>
          위반 게시물은 사전 통지 없이 삭제될 수 있고, 반복되면 계정 이용이 제한될 수 있습니다.
        </p>
      </LegalSection>

      <LegalSection id="copyright" title="제6조 (저작권)">
        <ul>
          <li>
            <strong>사이트 콘텐츠</strong> — 사이트가 작성한 글·이미지·도표의 저작권은 홀덤마스터에
            있습니다. 출처를 밝힌 짧은 인용은 가능하지만, 전문 복제·재배포·상업적 이용은 사전 동의가
            필요합니다.
          </li>
          <li>
            <strong>이용자 게시물</strong> — 회원이 작성한 글·댓글의 저작권은 작성자에게 있습니다. 다만
            사이트는 서비스 운영과 홍보를 위해 해당 게시물을 사이트 내에 노출·번역·인용할 수 있습니다.
          </li>
          <li>
            회원은 자신이 권리를 갖지 않은 저작물을 게시해서는 안 되며, 이로 인한 분쟁의 책임은 게시한
            회원에게 있습니다.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="disclaimer" title="제7조 (면책)">
        <ul>
          <li>
            <strong>정보 제공 목적</strong> — 사이트의 모든 전략·확률·룰 콘텐츠는 정보 제공과 학습을 위한
            것입니다. 특정한 결과나 수익을 보장하지 않으며, 사이트는 실제 도박을 권장하지 않습니다.
          </li>
          <li>
            <strong>외부 정보의 변동</strong> — 대회 일정·바이인·홀덤펍 운영 정보 등은 주최 측 사정으로
            변경될 수 있습니다. 사이트는 확인 시점을 표기하되, 최종 확인은 공식 채널에서 하시기 바랍니다.
          </li>
          <li>
            <strong>회원 게시물</strong> — 커뮤니티 게시물의 내용은 작성자의 견해이며 사이트의 입장이
            아닙니다.
          </li>
          <li>
            <strong>서비스 중단</strong> — 점검·장애·외부 서비스(호스팅·데이터베이스) 문제로 서비스가 일시
            중단될 수 있으며, 사이트는 고의·중과실이 없는 한 이로 인한 손해에 책임지지 않습니다.
          </li>
          <li>
            <strong>오류 정정</strong> — 콘텐츠에 오류가 있다면{" "}
            <Link href="/contact">문의 페이지</Link>로 알려주시면 확인 후 정정하고 수정일을 표기합니다.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="change" title="제8조 (약관의 변경)">
        <p>
          사이트는 필요한 경우 이 약관을 변경할 수 있으며, 변경된 약관은 이 페이지에 게시한 시점부터
          적용됩니다. 이용자에게 불리한 중요한 변경은 시행 7일 전부터 공지합니다.
        </p>
      </LegalSection>

      <LegalSection id="law" title="제9조 (준거법 및 분쟁 해결)">
        <p>
          이 약관은 대한민국 법령에 따라 해석되며, 서비스 이용과 관련한 분쟁은 상호 협의로 해결하는 것을
          원칙으로 합니다. 협의가 이루어지지 않을 경우 관할은 민사소송법이 정한 바에 따릅니다.
        </p>
        <p>
          <strong>문의</strong>: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <br />
          <strong>시행일</strong>: {UPDATED}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
