import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { SITE, CONTACT_EMAIL } from "@/lib/site";
import { LegalPage, LegalSection } from "@/components/legal-page";

/**
 * 개인정보처리방침.
 *
 * ★여기 적힌 수집 항목·수탁사는 **추측이 아니라 코드에서 확인한 것**이다.
 *   - 수집 항목  : supabase/schema.sql (profiles·posts·comments·likes·event_entries·chat_messages)
 *   - 분석 도구  : app/layout.tsx (GA4 G-CHSBJJDC14 · Vercel Speed Insights · Vercel Analytics)
 *   - 번역 위탁  : CLAUDE.md §5 + app/api 번역 라우트 (Gemini Flash API)
 *   - 저장 위치  : Supabase 서울 리전 (CLAUDE.md §5)
 *   스택을 바꾸면 이 문서도 같이 바꿔야 한다. 안 그러면 "사실과 다른 고지"가 된다.
 */

// 🔴 솔버 후기창 배포 때 실제 배포일로 바꾼다(코드 1 = 10/7 판독 뒤 배포 · docs/solver-review-design.md §10-2)
const UPDATED = "2026-10-04";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "홀덤마스터가 수집하는 개인정보 항목, 이용 목적, 보유 기간, 처리 위탁 업체(Supabase·Vercel·Google)와 이용자의 권리를 안내합니다.",
  alternates: { canonical: `${SITE}/privacy` },
  openGraph: {
    type: "website",
    url: `${SITE}/privacy`,
    title: "개인정보처리방침 | 홀덤마스터",
    description: "수집 항목·이용 목적·보유 기간·처리 위탁·이용자 권리 안내.",
    siteName: "홀덤마스터",
    locale: "ko_KR",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow={
        <>
          <ShieldCheck className="w-4 h-4" aria-hidden="true" /> 개인정보 보호
        </>
      }
      title="개인정보처리방침"
      lead="홀덤마스터는 이용자의 개인정보를 소중히 다룹니다. 아래는 실제로 수집하는 항목과 그 처리 방식입니다."
      updated={UPDATED}
    >
      <LegalSection id="collect" title="1. 수집하는 개인정보 항목">
        <p>
          홀덤마스터의 <strong>블로그·계산기·대회 일정 등 정보 페이지는 회원가입 없이</strong> 이용할 수
          있으며, 이 경우 개인정보를 수집하지 않습니다. 커뮤니티(피드·채팅·이벤트) 기능을 이용할 때만
          아래 항목이 수집됩니다.
        </p>
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>수집 항목</th>
              <th>수집 시점</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>회원 계정</td>
              <td>이메일 주소, 비밀번호(암호화 저장), 닉네임, 사용 언어, 프로필 이미지 주소</td>
              <td>이메일 회원가입 시</td>
            </tr>
            <tr>
              <td>소셜 로그인</td>
              <td>Google 계정의 이메일 주소·이름·프로필 이미지 주소 / 카카오 계정의 닉네임·이메일 주소</td>
              <td>Google·카카오 로그인 이용 시</td>
            </tr>
            <tr>
              <td>이용자 게시물</td>
              <td>작성한 글·댓글·좋아요 기록·실시간 채팅 메시지</td>
              <td>해당 기능 이용 시</td>
            </tr>
            <tr>
              <td>이벤트 참여</td>
              <td>대회 후기 이벤트: 응모한 후기, 당첨 안내를 위한 가입 이메일 주소 · 주간 번호 추첨(2026년 9월까지 운영): 선택한 번호 6개, 참여 자격 여부</td>
              <td>이벤트 응모 시</td>
            </tr>
            <tr>
              <td>대회 참가 예정·후기</td>
              <td>참가 예정 표시 여부, 후기 본문·참가한 이벤트·결과·별점</td>
              <td>해당 기능 이용 시</td>
            </tr>
            <tr>
              <td>솔버 후기·질문</td>
              <td>후기·질문 본문, 아쉬운 점·별점(선택), 기기 종류(폰·태블릿·PC 중 하나 — 모델명은 저장하지 않음), 로그인 수단(구글·카카오·이메일), 선택한 프로필 이미지(캐릭터 또는 직접 올린 이미지 — 올린 이미지는 256px로 다시 저장하며 사진 속 위치정보 등 메타데이터는 지웁니다), 도움됐어요 표시</td>
              <td>후기·질문 작성 시</td>
            </tr>
            <tr>
              <td>전략 글 투표</td>
              <td>선택한 답, 브라우저에 저장되는 무작위 식별자, 접속 IP 주소를 변환한 값(해시 — 원래 IP 주소는 저장하지 않음), 한 줄 코멘트(로그인 시)</td>
              <td>투표·코멘트 시</td>
            </tr>
            <tr>
              <td>자동 수집</td>
              <td>접속 로그, 브라우저·기기 종류, 방문 페이지, 성능 측정값(로딩 속도 등)</td>
              <td>사이트 이용 시</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>수집하지 않는 항목</strong>: 실명, 주민등록번호, 연락처, 주소, 결제·금융 정보는 어떤
          경우에도 수집하지 않습니다. 홀덤마스터는 금전 거래가 발생하지 않는 정보·커뮤니티 서비스입니다.
        </p>
      </LegalSection>

      <LegalSection id="purpose" title="2. 개인정보의 이용 목적">
        <ul>
          <li>회원 식별 및 로그인 상태 유지</li>
          <li>커뮤니티 글·댓글·채팅의 작성자 표시와 본인 게시물 관리</li>
          <li>이벤트 참여 자격 확인, 중복 응모 방지, 추첨·당첨 안내</li>
          <li>대회 후기·투표 결과 표시와 중복 투표·도배 방지</li>
          <li>다국어 이용자를 위한 게시물 자동 번역 제공</li>
          <li>서비스 이용 통계 분석과 성능(로딩 속도) 개선</li>
          <li>부정 이용·스팸·불법 게시물 대응</li>
        </ul>
        <p>
          수집한 개인정보는 위 목적 외의 용도로 이용하지 않으며, 광고 목적의 판매·대여를 하지 않습니다.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="3. 보유 및 이용 기간">
        <ul>
          <li>
            <strong>회원 정보</strong> — 회원 탈퇴 시 지체 없이 파기합니다. 계정이 삭제되면 그 계정이
            작성한 글·댓글·좋아요·채팅·이벤트 응모 기록도 함께 삭제됩니다(데이터베이스에 연쇄 삭제로
            설정되어 있습니다).
          </li>
          <li>
            <strong>솔버 후기·질문</strong> — 작성하면 솔버 소개 페이지에 바로 공개됩니다. 공개되는 항목은
            닉네임, 선택한 프로필 이미지, 로그인 수단(구글·카카오 표시), 가입 시기(연·월), 작성 날짜, 기기 종류,
            별점과 본문입니다(이메일은 공개되지 않습니다). 본인이 삭제하거나 회원 탈퇴하면 지체 없이 파기하며,
            직접 올린 프로필 이미지는 다른 이미지로 바꾸거나 탈퇴할 때 함께 삭제합니다.
          </li>
          <li>
            <strong>투표 기록</strong> — 무작위 식별자와 IP 주소 변환값만 남아 회원 계정과 연결되지 않으며,
            투표 결과를 보여 주는 동안 보관합니다.
          </li>
          <li>
            <strong>접속 로그</strong> — 서비스 제공자(Vercel·Supabase)의 기본 보관 정책에 따르며, 별도의
            장기 보관을 하지 않습니다.
          </li>
          <li>
            관계 법령이 보존을 요구하는 경우에는 해당 법령이 정한 기간 동안 보관합니다.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="processors" title="4. 개인정보 처리의 위탁">
        <p>
          홀덤마스터는 서비스 운영을 위해 아래 사업자에게 개인정보 처리를 위탁하고 있습니다. 위탁 목적
          범위를 벗어난 이용은 하지 않습니다.
        </p>
        <table>
          <thead>
            <tr>
              <th>수탁 업체</th>
              <th>위탁 업무</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Supabase</td>
              <td>회원 인증, 게시물·댓글·채팅 데이터베이스 운영</td>
              <td>데이터는 서울(대한민국) 리전에 저장</td>
            </tr>
            <tr>
              <td>Vercel</td>
              <td>웹사이트 호스팅, 접속 로그, 성능·방문 통계 측정</td>
              <td>해외 서버</td>
            </tr>
            <tr>
              <td>Google (Analytics)</td>
              <td>방문 통계 분석 (측정 ID: G-CHSBJJDC14)</td>
              <td>해외 서버</td>
            </tr>
            <tr>
              <td>Google (Gemini API)</td>
              <td>커뮤니티 게시물의 다국어 자동 번역</td>
              <td>게시물 본문이 번역을 위해 전송됨</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>번역 기능 관련 고지</strong>: 커뮤니티에 작성한 글은 다른 언어 이용자에게 보이도록 자동
          번역될 수 있으며, 이 과정에서 <strong>글의 본문이 Google 번역 API로 전송</strong>됩니다. 공개하고
          싶지 않은 내용은 커뮤니티에 작성하지 마시기 바랍니다.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="5. 이용자의 권리와 행사 방법">
        <ul>
          <li>
            <strong>열람·수정</strong> — 로그인 후 프로필에서 닉네임·언어 설정을 직접 변경할 수 있습니다.
          </li>
          <li>
            <strong>삭제</strong> — 본인이 작성한 글·댓글은 직접 삭제할 수 있습니다. 계정 삭제를 원하시면
            아래 문의처로 요청해 주시면 확인 후 처리합니다.
          </li>
          <li>
            <strong>처리 정지·이의 제기</strong> — 문의처로 연락하시면 관계 법령에 따라 처리합니다.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="cookies" title="6. 쿠키 등 자동 수집 장치">
        <p>
          로그인 상태를 유지하기 위해 인증 쿠키를 사용하며, 방문 통계를 위해 Google Analytics가 쿠키를
          사용합니다. 브라우저 설정에서 쿠키 저장을 거부할 수 있으나, 이 경우 로그인이 필요한 커뮤니티
          기능은 이용할 수 없습니다.
        </p>
      </LegalSection>

      <LegalSection id="minor" title="7. 만 19세 미만 이용 제한">
        <p>
          홀덤마스터는 <strong>만 19세 이상</strong>을 대상으로 하는 서비스이며, 만 19세 미만의 회원가입과
          커뮤니티 이용을 허용하지 않습니다. 만 19세 미만임이 확인되면 해당 계정과 정보를 삭제합니다.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="8. 문의처">
        <p>
          개인정보 처리에 관한 문의·열람·삭제 요청은 아래로 보내주시면 확인 후 회신드립니다.
        </p>
        <p>
          <strong>이메일</strong>: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <br />
          <strong>문의 안내</strong>: <Link href="/contact">문의·오류 제보 페이지</Link>
        </p>
      </LegalSection>

      <LegalSection id="change" title="9. 방침의 변경">
        <p>
          이 방침의 내용이 추가·삭제·수정될 경우 변경 사항을 이 페이지에 게시하고, 상단의 최종 수정일을
          갱신합니다. 중요한 변경은 시행 7일 전부터 공지합니다.
        </p>
        <p>
          <strong>시행일</strong>: {UPDATED}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
