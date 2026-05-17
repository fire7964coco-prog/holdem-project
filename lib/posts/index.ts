import type { Post } from "../posts";
import { POST as holdemBubbleStrategy } from "./holdem-bubble-strategy";
import { POST as holdemPubFirstVisitGuide } from "./holdem-pub-first-visit-guide";
import { POST as holdemPubLegal } from "./holdem-pub-legal";
import { POST as pocketAcesAaStrategy } from "./pocket-aces-aa-strategy";
import { POST as icmPokerMeaning } from "./icm-poker-meaning";
import { POST as pocketKingsKkStrategy } from "./pocket-kings-kk-strategy";
import { POST as holdemRangeMeaning } from "./holdem-range-meaning";
import { POST as holdemCbetStrategy } from "./holdem-cbet-strategy";
import { POST as holdemCheckRaise } from "./holdem-check-raise";
import { POST as holdemValueBetSizing } from "./holdem-value-bet-sizing";

export const NEW_POSTS: Post[] = [
  holdemValueBetSizing,
  holdemCheckRaise,
  holdemCbetStrategy,
  holdemRangeMeaning,
  icmPokerMeaning,
  pocketKingsKkStrategy,
  pocketAcesAaStrategy,
  holdemPubLegal,
  holdemPubFirstVisitGuide,
  holdemBubbleStrategy,
];
