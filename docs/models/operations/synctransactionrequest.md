# SyncTransactionRequest

## Example Usage

```typescript
import { SyncTransactionRequest } from "@gr4vy/sdk/models/operations";

let value: SyncTransactionRequest = {
  transactionId: "51ecacd6-0868-47da-8b8c-35d17592c203",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `transactionId`                                         | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `applicationName`                                       | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |