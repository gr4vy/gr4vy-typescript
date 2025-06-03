# CreatePayoutRequest

## Example Usage

```typescript
import { CreatePayoutRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePayoutRequest = {
  payoutCreate: {
    amount: 1299,
    currency: "USD",
    paymentServiceId: "ed8bd87d-85ad-40cf-8e8f-007e21e55aad",
    paymentMethod: {
      id: "852b951c-d7ea-4c98-b09e-4a1c9e97c077",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `merchantAccountId`                                                | *string*                                                           | :heavy_minus_sign:                                                 | The ID of the merchant account to use for this request.            |
| `payoutCreate`                                                     | [components.PayoutCreate](../../models/components/payoutcreate.md) | :heavy_check_mark:                                                 | N/A                                                                |