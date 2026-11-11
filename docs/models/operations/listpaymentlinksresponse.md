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
        intent: "prefer_authorize",
        cartItems: [
          {
            name: "Widget",
            quantity: 2,
            unitAmount: 1299,
          },
        ],
        airline: {},
        paymentSource: "installment",
        createdAt: new Date("2024-05-30T12:34:56.000Z"),
        updatedAt: new Date("2024-05-30T13:00:00.000Z"),
        status: "active",
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `result`                                                           | [components.PaymentLinks](../../models/components/paymentlinks.md) | :heavy_check_mark:                                                 | N/A                                                                |