import { pollById } from "./polls";

/**
 * 렌더된 본문 HTML을 `:::poll[<id>]:::` 표식(lib/render-markdown.ts가 만든 빈 div)에서 자른다.
 * app/blog/[slug]/page.tsx 가 조각 사이에 <PollWidget/>을 넣는다.
 *
 * 🔴 빌드에서 멈추게 한다(조용히 넘어가지 않는다):
 *    - lib/polls.ts 에 없는 id
 *    - 그 투표의 hostSlug 가 이 글이 아님(다른 글에 잘못 붙인 표식)
 *    - 같은 투표가 한 글에 두 번
 */
const SLOT = /<div data-hm-slot="poll:([a-z0-9-]+)"><\/div>/;

export function splitPollSlots(html: string, slug: string): { parts: string[]; pollIds: string[] } {
  const pieces = html.split(new RegExp(SLOT.source, "g"));
  const parts: string[] = [];
  const pollIds: string[] = [];
  pieces.forEach((piece, i) => (i % 2 === 0 ? parts.push(piece) : pollIds.push(piece)));
  for (const id of pollIds) {
    const poll = pollById(id);
    if (!poll) throw new Error(`[poll] ${slug}: lib/polls.ts 에 없는 투표 id «${id}»`);
    if (poll.hostSlug !== slug) throw new Error(`[poll] ${slug}: 투표 «${id}»의 hostSlug는 «${poll.hostSlug}»다`);
  }
  if (new Set(pollIds).size !== pollIds.length) throw new Error(`[poll] ${slug}: 같은 투표가 두 번 들어 있다`);
  return { parts, pollIds };
}
