# PaymentMethodDefinitions

A list of available payment method definitions.

## Example Usage

```typescript
import { PaymentMethodDefinitions } from "@gr4vy/sdk/models/components";

let value: PaymentMethodDefinitions = {
    items: [
        {
            id: "bank",
            iconUrl:
                "https://api.sandbox.example.gr4vy.app/assets/payment-method-definitions/bank.svg",
            displayName: "Bank",
            longDisplayName: "Bank (BACS)",
            method: "BACS",
        },
    ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `items`                                                                                    | [components.PaymentMethodDefinition](../../models/components/paymentmethoddefinition.md)[] | :heavy_minus_sign:                                                                         | N/A                                                                                        |