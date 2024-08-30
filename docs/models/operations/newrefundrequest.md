# NewRefundRequest

## Example Usage

```typescript
import { NewRefundRequest } from "@gr4vy/sdk/models/operations";

let value: NewRefundRequest = {
    transactionId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    transactionRefundRequest: {
        amount: 1299,
        targetType: "gift-card-redemption",
        targetId: "c23ea83f-1b1c-4584-a0e8-78ef8c041949",
        reason: "Refund due to user request",
    },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `transactionId`                                                                            | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID for the transaction to get the information for.                                     | fe26475d-ec3e-4884-9553-f7356683f7f9                                                       |
| `transactionRefundRequest`                                                                 | [components.TransactionRefundRequest](../../models/components/transactionrefundrequest.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |