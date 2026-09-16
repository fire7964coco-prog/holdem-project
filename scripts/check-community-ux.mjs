import assert from "node:assert/strict";
import { getEventState, getIsoWeekId } from "../lib/event-config.ts";
import { mergeChatMessages } from "../lib/chat-messages.ts";

// Current ISO week is intentionally retained until Monday UTC, even after Sunday's draw.
const beforeDraw = getEventState(new Date("2026-09-20T09:59:59.999Z"));
assert.equal(beforeDraw.eventId, "2026-W38");
assert.equal(beforeDraw.isOpen, true);
assert.equal(beforeDraw.drawAt, "2026-09-20T10:00:00.000Z");
assert.equal(beforeDraw.nextOpenAt, "2026-09-21T00:00:00.000Z");
for (const instant of ["2026-09-20T10:00:00Z", "2026-09-20T23:59:59.999Z"]) {
  const state = getEventState(new Date(instant));
  assert.equal(state.isOpen, false);
  assert.equal(state.eventId, "2026-W38");
}
const monday = getEventState(new Date("2026-09-21T00:00:00Z"));
assert.equal(monday.isOpen, true);
assert.equal(monday.eventId, "2026-W39");
assert.equal(monday.drawAt, "2026-09-27T10:00:00.000Z");
const newYear = getEventState(new Date("2027-01-01T00:00:00Z"));
assert.equal(newYear.eventId, "2026-W53");
assert.equal(newYear.drawAt, "2027-01-03T10:00:00.000Z");
assert.equal(newYear.nextOpenAt, "2027-01-04T00:00:00.000Z");
assert.equal(getIsoWeekId(new Date("2027-01-04T00:00:00Z")), "2027-W01");

const message = (id, seconds, content = id) => ({ id, created_at: new Date(Date.UTC(2026, 8, 15, 0, 0, seconds)).toISOString(), content, user_id: "test-user", nickname: "Test", language: "ko" });
// A message delivered by Realtime before the initial response must survive that response.
const merged = mergeChatMessages([message("c", 3)], [message("b", 2), message("a", 1)]);
assert.deepEqual(merged.map((m) => m.id), ["a", "b", "c"]);
// Insert response and Realtime can both return the same message.
assert.equal(mergeChatMessages(merged, [message("c", 3)]).length, 3);
assert.deepEqual(mergeChatMessages([message("b", 1)], [message("a", 1)]).map((m) => m.id), ["a", "b"]);
assert.equal(mergeChatMessages(merged, [message("a", 1, "fresh")])[0].content, "fresh");
console.log("Community UX fixtures passed: draw cutoff, Monday rollover, ISO year boundary, Realtime/fetch overlap, duplicate sends and timestamp ties.");
