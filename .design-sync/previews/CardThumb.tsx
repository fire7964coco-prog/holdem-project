/* 포스트 목록의 카드 썸네일. slug 로 그림을 고르고, CARD_MAP 에 없으면 slug 해시로 폴백한다. */
import { CardThumb } from 'holdemmaster';

export const Default = () => <CardThumb slug="holdem-hand-rankings" />;
export const Featured = () => <CardThumb slug="holdem-tiebreak-rules" featured />;
/** 매핑에 없는 slug — 해시 폴백이 도는 자리 */
export const UnmappedSlugFallback = () => <CardThumb slug="holdem-position-play" />;
