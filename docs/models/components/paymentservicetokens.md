# PaymentServiceTokens

A list of payment service tokens.

## Example Usage

```typescript
import { PaymentServiceTokens } from "@gr4vy/sdk/models/components";

let value: PaymentServiceTokens = {
    items: [
        {
            type: "payment-service-token",
            id: "d6ad71d5-6908-45d6-ab65-39c55475dd08",
            paymentMethodId: "9bdc4bc4-005e-4658-8eee-a309fc43cd4d",
            paymentServiceId: "50f2e61f-caac-4e12-8d79-30eaf8250423",
            status: "succeeded",
            approvalUrl:
                "https://api.example.app.gr4vy.com/payment-methods/f4fb0dd1-4ff9-46fb-965e-11de34aa6806/approve",
            createdAt: new Date("2021-01-01T12:34:00.000+00:00"),
            updatedAt: new Date("2021-01-01T12:34:00.000+00:00"),
        },
    ],
    limit: 1,
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: null,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                            | [components.PaymentServiceToken](../../models/components/paymentservicetoken.md)[]                                 | :heavy_minus_sign:                                                                                                 | A list of payment service tokens.                                                                                  |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |