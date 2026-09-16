/** Deterministic regressions for shareable blog filters and the tournament schedule. */
import assert from "node:assert/strict";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const jiti = createJiti(import.meta.url, { alias: { "@": root } });
const { blogFilterHref, readBlogFilters } = await jiti.import(resolve(root, "lib/blog-filters.ts"));
const { DEFAULT_SCHEDULE_FILTERS, readScheduleFilters, scheduleFilterHref, matchesSchedule, orderSchedule, scheduleMonths } = await jiti.import(resolve(root, "lib/tournament-filters.ts"));
let passed = 0;
function test(name, run) { run(); console.log(`✓ ${name}`); passed++; }
const searchOf = href => new URL(href, "https://example.test").search;

test("Blog defaults produce the canonical list URL", () => {
  const defaults = { query: "", category: "전체", tag: null };
  assert.equal(blogFilterHref(defaults), "/blog");
  assert.deepEqual(readBlogFilters("", ["초보 가이드"]), defaults);
});
test("Search, category and tag survive a shared URL together", () => {
  const filters = { query: "팟 오즈 & ICM", category: "초보 가이드", tag: "턴/리버 + EV" };
  assert.deepEqual(readBlogFilters(searchOf(blogFilterHref(filters)), ["초보 가이드"]), filters);
});
test("Search trimming leaves category and tag intact", () => {
  const href = blogFilterHref({ query: "  팟 오즈  ", category: "초보 가이드", tag: "확률" });
  assert.deepEqual(readBlogFilters(searchOf(href), ["초보 가이드"]), { query: "팟 오즈", category: "초보 가이드", tag: "확률" });
});
test("Invalid category resets only that field", () => {
  assert.deepEqual(readBlogFilters("?category=unknown&q=ICM&tag=EV", ["초보 가이드"]), { query: "ICM", category: "전체", tag: "EV" });
});
test("Schedule defaults and unsupported filters are safe", () => {
  assert.deepEqual(readScheduleFilters("?region=unknown&status=unknown&month=2026-13"), DEFAULT_SCHEDULE_FILTERS);
  assert.equal(scheduleFilterHref(DEFAULT_SCHEDULE_FILTERS), "/tournaments#tournament-schedule");
});
test("Schedule region, status, month and card anchor can be shared", () => {
  const filters = { region: "domestic", status: "ended", month: "2026-01" };
  const href = scheduleFilterHref(filters, "tournament-example");
  assert.deepEqual(readScheduleFilters(searchOf(href)), filters);
  assert.equal(new URL(href, "https://example.test").hash, "#tournament-example");
});

// These are synthetic dates for the filter logic, not published tournament claims.
const event = (id, startDate, endDate, type = "domestic") => ({ id, startDate, endDate, type });
const today = "2026-09-15";
const ended = event("ended", "2026-08-01", "2026-08-10");
const recentEnded = event("recent-ended", "2026-09-01", "2026-09-14");
const ongoing = event("ongoing", "2026-09-10", "2026-09-20");
const upcoming = event("upcoming", "2026-09-25", "2026-10-07", "international");
const undated = event("undated", null, null);

test("Active view excludes ended dates and combines region/status filters", () => {
  assert.equal(matchesSchedule(ended, today, DEFAULT_SCHEDULE_FILTERS), false);
  assert.equal(matchesSchedule(ongoing, today, DEFAULT_SCHEDULE_FILTERS), true);
  assert.equal(matchesSchedule(upcoming, today, DEFAULT_SCHEDULE_FILTERS), true);
  assert.equal(matchesSchedule(upcoming, today, { ...DEFAULT_SCHEDULE_FILTERS, region: "domestic" }), false);
  assert.equal(matchesSchedule(ongoing, today, { ...DEFAULT_SCHEDULE_FILTERS, status: "upcoming" }), false);
});
test("Opening and closing dates remain ongoing; the next day is ended", () => {
  const filter = { ...DEFAULT_SCHEDULE_FILTERS, status: "ongoing" };
  assert.equal(matchesSchedule(ongoing, "2026-09-10", filter), true);
  assert.equal(matchesSchedule(ongoing, "2026-09-20", filter), true);
  assert.equal(matchesSchedule(ongoing, "2026-09-21", filter), false);
});
test("Month filters include events spanning either boundary", () => {
  const filter = month => ({ ...DEFAULT_SCHEDULE_FILTERS, status: "all", month });
  assert.equal(matchesSchedule(upcoming, today, filter("2026-09")), true);
  assert.equal(matchesSchedule(upcoming, today, filter("2026-10")), true);
  assert.equal(matchesSchedule(upcoming, today, filter("2026-08")), false);
  assert.equal(matchesSchedule(upcoming, today, filter("2026-11")), false);
  assert.equal(matchesSchedule(undated, today, filter("2026-09")), false);
});
test("December to January ranges include both months", () => {
  const crossing = event("new-year", "2026-12-28", "2027-01-04");
  assert.deepEqual(scheduleMonths([crossing, upcoming, undated]), ["2026-09", "2026-10", "2026-12", "2027-01"]);
  assert.equal(matchesSchedule(crossing, today, { ...DEFAULT_SCHEDULE_FILTERS, month: "2027-01" }), true);
});
test("Ordering is ongoing, upcoming by start, undated, then newest archive; input is untouched", () => {
  const later = event("later", "2026-11-01", "2026-11-05");
  const original = [ended, later, undated, recentEnded, upcoming, ongoing];
  const initial = original.map(t => t.id);
  assert.deepEqual(orderSchedule(original, today).map(t => t.id), ["ongoing", "upcoming", "later", "undated", "recent-ended", "ended"]);
  assert.deepEqual(original.map(t => t.id), initial);
});

console.log(`Discovery UX: ${passed}/${passed} checks passed.`);
