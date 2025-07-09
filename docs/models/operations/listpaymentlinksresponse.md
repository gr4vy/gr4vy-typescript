# ListPaymentLinksResponse

## Example Usage

```typescript
import { ListPaymentLinksResponse } from "@gr4vy/sdk/models/operations";

let value: ListPaymentLinksResponse = {
  result: {
    items: [
      {
        id: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
        url: "https://example.com/link/a1b2c3d4-5678-90ab-cdef-1234567890ab",
        amount: 1299,
        country: "DE",
        currency: "EUR",
        intent: "capture",
        cartItems: [
          {
            name: "Widget",
            quantity: 2,
            unitAmount: 1299,
          },
        ],
        paymentSource: "ecommerce",
        createdAt: new Date("2024-05-30T12:34:56.000Z"),
        updatedAt: new Date("2024-05-30T13:00:00.000Z"),
        status: "expired",
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `result`                                                                             | [components.CollectionPaymentLink](../../models/components/collectionpaymentlink.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |