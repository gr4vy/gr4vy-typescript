# Reports

A list of reports.

## Example Usage

```typescript
import { Reports } from "@gr4vy/sdk/models/components";

let value: Reports = {
    items: [
        {
            type: "report",
            id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
            merchantAccountId: "default",
            name: "Failed Authorizations 042022",
            creatorId: "bd5d40d1-913b-419c-bd62-84efc46e0026",
            creatorDisplayName: "John Doe",
            createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
            updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
            nextExecutionAt: new Date("2023-01-01T00:00:00.000+00:00"),
            description: "Transactions that failed to authorize in April 2022",
            schedule: "monthly",
            scheduleEnabled: true,
            spec: {
                model: "transactions",
                params: {
                    fields: ["id", "external_identifier"],
                    filters: {
                        status: ["authorization_failed"],
                        currency: ["GBP"],
                        method: ["card"],
                        scheme: ["visa"],
                        threeDSecureEci: ["05"],
                        threeDSecureAuthResp: ["N"],
                    },
                    sort: [{}],
                },
            },
            latestExecution: {
                type: "report-execution",
                id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
                createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
                updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
                status: "succeeded",
                context: {
                    referenceTimestamp: new Date("2013-07-16T19:23:00.000+00:00"),
                    referenceTimezone: "Europe/London",
                },
            },
        },
    ],
    limit: 1,
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: null,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                            | [components.Report](../../models/components/report.md)[]                                                           | :heavy_minus_sign:                                                                                                 | A list of reports.                                                                                                 |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |