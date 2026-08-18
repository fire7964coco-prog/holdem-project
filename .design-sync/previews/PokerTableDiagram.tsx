/* 텍사스 홀덤 한 핸드를 스트리트별로 보여 주는 SVG 테이블.
   시나리오·카드는 컴포넌트가 내장하고 있고 props 는 stage 하나뿐이라,
   스토리는 «스트리트 축» 을 훑는 것이 곧 변형 축이다. */
import { PokerTableDiagram } from 'holdemmaster';

export const Preflop = () => <PokerTableDiagram stage="preflop" />;
export const Flop = () => <PokerTableDiagram stage="flop" />;
export const Turn = () => <PokerTableDiagram stage="turn" />;
export const River = () => <PokerTableDiagram stage="river" />;
export const Showdown = () => <PokerTableDiagram stage="showdown" />;
