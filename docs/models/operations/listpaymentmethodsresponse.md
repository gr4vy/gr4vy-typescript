# ListPaymentMethodsResponse

## Example Usage

```typescript
import { ListPaymentMethodsResponse } from "@gr4vy/sdk/models/operations";

let value: ListPaymentMethodsResponse = {
  result: {
    items: [
      {
        method: "affirm",
        id: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
        merchantAccountId: "default",
        citUsageCount: 50,
        hasReplacement: false,
        usageCount: 100,
        status: "failed",
        createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
        updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.CollectionPaymentMethod](../../models/components/collectionpaymentmethod.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |