# CollectionNoCursorRefund

## Example Usage

```typescript
import { CollectionNoCursorRefund } from "@gr4vy/sdk/models/components";

let value: CollectionNoCursorRefund = {
  items: [
    {
      id: "6a1d4e46-14ed-4fe1-a45f-eff4e025d211",
      transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
      status: "processing",
      currency: "USD",
      amount: 1299,
      targetType: "gift-card-redemption",
      reconciliationId: "7jZXl4gBUNl0CnaLEnfXbt",
      transactionReconciliationId: "aLEnfXbt7jZXl4gBUNl0Cn",
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `items`                                                  | [components.Refund](../../models/components/refund.md)[] | :heavy_check_mark:                                       | A list of items returned for this request.               |