# RefundAllRequest

## Example Usage

```typescript
import { RefundAllRequest } from "@gr4vy/sdk/models/operations";

let value: RefundAllRequest = {
    transactionId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    transactionRefundAllRequest: {
        reason: "Refund due to user request",
    },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `transactionId`                                                                                  | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID for the transaction to get the information for.                                           | fe26475d-ec3e-4884-9553-f7356683f7f9                                                             |
| `transactionRefundAllRequest`                                                                    | [components.TransactionRefundAllRequest](../../models/components/transactionrefundallrequest.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |