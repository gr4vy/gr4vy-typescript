# ListPayoutsResponse

## Example Usage

```typescript
import { ListPayoutsResponse } from "@gr4vy/sdk/models/operations";

let value: ListPayoutsResponse = {
  result: {
    items: [
      {
        amount: 1299,
        createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
        currency: "EUR",
        paymentMethod: {
          method: "linkaja",
        },
        paymentService: {
          paymentServiceDefinitionId: "nuvei-card",
        },
        status: "succeeded",
        updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.CollectionPayoutSummary](../../models/components/collectionpayoutsummary.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |