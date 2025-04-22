# CollectionNoCursorRefund

## Example Usage

```typescript
import { CollectionNoCursorRefund } from "@gr4vy/sdk/models/components";

let value: CollectionNoCursorRefund = {
  items: [
    {
      id: "6a1d4e46-14ed-4fe1-a45f-eff4e025d211",
      transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
      paymentServiceRefundId: "refund_xYqd43gySMtori",
      status: "processing",
      currency: "USD",
      amount: 1299,
      reason: "Refund due to user request.",
      targetType: "gift-card-redemption",
      targetId: "07e70d14-a0c0-4ff5-bd4a-509959af0e4d",
      reconciliationId: "7jZXl4gBUNl0CnaLEnfXbt",
      externalIdentifier: "refund-12345",
      transactionReconciliationId: "aLEnfXbt7jZXl4gBUNl0Cn",
      transactionExternalIdentifier: "transaction-12345",
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      creator: {
        id: "07e70d14-a0c0-4ff5-bd4a-509959af0e4d",
        name: "Jhon Doe",
        emailAddress: "jhon.doe@gr4vy.com",
      },
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `items`                                                  | [components.Refund](../../models/components/refund.md)[] | :heavy_check_mark:                                       | A list of items returned for this request.               |