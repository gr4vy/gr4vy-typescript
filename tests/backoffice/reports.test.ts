import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { ReportCreate } from "../../src/models/components";
import { uniqueId } from "../utils/fixtures";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

const reportCreate = (): ReportCreate => ({
  name: uniqueId("report"),
  schedule: "daily",
  scheduleEnabled: true,
  scheduleTimezone: "UTC",
  spec: {
    model: "transactions",
    params: {
      fields: ["id", "status"],
      filters: { status: ["capture_succeeded"] },
      sort: [{ field: "created_at", order: "desc" }],
    },
  },
});

describe("Reports", () => {
  test("create → get → put (partial) → list", async () => {
    const created = await gr4vy.reports.create(reportCreate());
    expect(created.id).toBeDefined();

    const fetched = await gr4vy.reports.get(created.id);
    expect(fetched.id).toBe(created.id);

    // Partial update: toggle the schedule without resending name/spec.
    const updated = await gr4vy.reports.put(
      { scheduleEnabled: false },
      created.id
    );
    expect(updated.scheduleEnabled).toBe(false);

    const page = await gr4vy.reports.list({});
    expect(page).toBeDefined();
  });

  test("report executions are listable per-report and account-wide", async () => {
    const created = await gr4vy.reports.create(reportCreate());

    const perReport = await gr4vy.reports.executions.list(created.id);
    expect(perReport).toBeDefined();

    const accountWide = await gr4vy.reportExecutions.list({});
    expect(accountWide).toBeDefined();
  });

  // A freshly created report has no executions yet, so fetching one / generating
  // a download URL is exercised at the request level against a non-existent
  // execution id; the API is expected to reject it.
  test("fetching a missing execution / url is exercised at the request level", async () => {
    const created = await gr4vy.reports.create(reportCreate());
    const bogus = "00000000-0000-0000-0000-000000000000";

    await expect(gr4vy.reports.executions.get(bogus)).rejects.toThrow();
    await expect(
      gr4vy.reports.executions.url(created.id, bogus)
    ).rejects.toThrow();
  });
});
