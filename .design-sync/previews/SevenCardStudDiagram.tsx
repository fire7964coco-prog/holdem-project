/* 세븐카드 스터드 4인 픽스드리밋. 업카드/다운카드 구분이 이 다이어그램의 핵심이라
   3rd(도어카드) 와 7th(리버) 를 함께 둔다. */
import { SevenCardStudDiagram } from 'holdemmaster';

export const ThirdStreet = () => <SevenCardStudDiagram stage="third-street" />;
export const FifthStreet = () => <SevenCardStudDiagram stage="fifth-street" />;
export const SeventhStreet = () => <SevenCardStudDiagram stage="seventh-street" />;
