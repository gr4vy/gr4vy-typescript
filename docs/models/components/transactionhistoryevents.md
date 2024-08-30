# TransactionHistoryEvents

A list of transaction history events.

## Example Usage

```typescript
import { TransactionHistoryEvents } from "@gr4vy/sdk/models/components";

let value: TransactionHistoryEvents = {
    items: [
        {
            type: "transaction-event",
            id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
            name: "three-d-secure-success",
            createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
            context: {
                eci: "05",
                cavv: "3q2+78r+ur7erb7vyv66vv8=",
                directoryResponse: "C",
                authenticationResponse: "Y",
                directoryTransactionId: "c4e59ceb-a382-4d6a-bc87-385d591fa09d",
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
| `items`                                                                                                            | *components.Items*[]                                                                                               | :heavy_minus_sign:                                                                                                 | A list of events related to processing a transaction.                                                              |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |