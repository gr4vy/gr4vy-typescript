# ListTransactionEventsRequest

## Example Usage

```typescript
import { ListTransactionEventsRequest } from "@gr4vy/sdk/models/operations";

let value: ListTransactionEventsRequest = {
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `transactionId`                                         | *string*                                                | :heavy_check_mark:                                      | The ID of the transaction                               | 7099948d-7286-47e4-aad8-b68f7eb44591                    |
| `cursor`                                                | *string*                                                | :heavy_minus_sign:                                      | A pointer to the page of results to return.             | ZXhhbXBsZTE                                             |
| `limit`                                                 | *number*                                                | :heavy_minus_sign:                                      | The maximum number of items that are at returned.       | 100                                                     |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |