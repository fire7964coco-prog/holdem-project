/* PLO 5인 테이블. 홀카드 4장 중 «반드시 2장» 을 쓰는 오마하 규칙을
   쇼다운에서 하이라이트로 보여 준다. */
import { OmahaTableDiagram } from 'holdemmaster';

export const Preflop = () => <OmahaTableDiagram stage="preflop" />;
export const Flop = () => <OmahaTableDiagram stage="flop" />;
export const Showdown = () => <OmahaTableDiagram stage="showdown" />;
