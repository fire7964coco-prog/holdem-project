/* 블로그 상세의 목차. 제목은 실제 발행 글의 H2 를 옮겼다.
   🔴 sections 가 2개 미만이면 컴포넌트가 null 을 반환한다(의도된 동작). 그 경계를 스토리로
      두었다가 뺐다 — 카드가 «빈 칸» 으로 보여서 사람이 고장으로 읽는다. 계약은 .d.ts 주석에 있다. */
import { TableOfContents } from 'holdemmaster';

export const Default = () => (
  <TableOfContents
    sections={[
      { id: 'a', title: '처음이라면 어떤 순서로 나가야 하나요?', level: 2 },
      { id: 'b', title: '온라인 무료 대회부터', level: 3 },
      { id: 'c', title: '홀덤펍 리그는 무엇이 다른가요?', level: 2 },
      { id: 'd', title: '위성(새틀라이트)으로 바이인을 줄이려면?', level: 2 },
      { id: 'e', title: 'WSOP 참가에 필요한 것', level: 2 },
    ]}
  />
);

export const DeepNesting = () => (
  <TableOfContents
    sections={[
      { id: 'p', title: '홀덤 족보 순위표', level: 2 },
      { id: 'q', title: '로열 플러시부터 하이카드까지', level: 3 },
      { id: 'r', title: '헷갈리는 자리 셋', level: 2 },
      { id: 's', title: '플러시 vs 스트레이트', level: 3 },
      { id: 't', title: '무늬 서열은 없다', level: 3 },
      { id: 'u', title: '키커는 언제 보나요?', level: 2 },
    ]}
  />
);
