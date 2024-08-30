# PaymentMethodsTokenized

A list of stored payment methods in summarized format.

## Example Usage

```typescript
import { PaymentMethodsTokenized } from "@gr4vy/sdk/models/components";

let value: PaymentMethodsTokenized = {
    items: [
        {
            type: "payment-method",
            id: "77a76f7e-d2de-4bbc-ada9-d6a0015e6bd5",
            merchantAccountId: "default",
            method: "card",
            label: "1111",
            scheme: "visa",
            additionalSchemes: ["visa"],
            expirationDate: "11/25",
            approvalTarget: "any",
            approvalUrl:
                "https://api.example.app.gr4vy.com/payment-methods/ffc88ec9-e1ee-45ba-993d-b5902c3b2a8c/approve",
            currency: "USD",
            country: "US",
            lastReplacedAt: new Date("2023-07-26T19:23:00.000+00:00"),
            hasReplacement: false,
        },
    ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `items`                                                                                  | [components.PaymentMethodTokenized](../../models/components/paymentmethodtokenized.md)[] | :heavy_minus_sign:                                                                       | A list of stored payment methods in summarized format.                                   |