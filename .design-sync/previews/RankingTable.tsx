/* 순위 목록 표. 실제 사이트에서 «홀덤 족보» 를 이 표로 낸다.
   🔴 항목 내용은 지어내지 않았다 — 표준 10족보를 강한 순서대로 적은 것이고
      §13(포커 정확성) 대상이라 순서를 임의로 바꾸지 마라. */
import { RankingTable } from 'holdemmaster';

const HANDS = [
  { name: '로열 플러시', description: '같은 무늬 A-K-Q-J-10' },
  { name: '스트레이트 플러시', description: '같은 무늬 연속 5장' },
  { name: '포카드', description: '같은 숫자 4장' },
  { name: '풀하우스', description: '트리플 + 원페어' },
  { name: '플러시', description: '같은 무늬 5장 (무늬 서열은 없다 — 숫자로만 비교)' },
  { name: '스트레이트', description: '연속 5장 · 휠(A-2-3-4-5)은 가장 낮다' },
  { name: '트리플', description: '같은 숫자 3장' },
  { name: '투페어', description: '페어 2개' },
  { name: '원페어', description: '페어 1개' },
  { name: '하이카드', description: '아무것도 안 맞은 상태' },
];

export const HandRankings = () => <RankingTable name="홀덤 족보 순위" items={HANDS} />;

export const Ascending = () => (
  <RankingTable
    name="포지션별 오픈 레인지 (좁은 순)"
    order="Ascending"
    items={[
      { name: 'UTG', description: '가장 좁다 — 뒤에 남은 상대가 가장 많다' },
      { name: 'MP', description: '한 단계 넓힌다' },
      { name: 'CO', description: '버튼 다음으로 유리하다' },
      { name: 'BTN', description: '가장 넓다 — 항상 마지막에 액션한다' },
    ]}
  />
);
