# PaymentOptions

A list of payment options.

## Example Usage

```typescript
import { PaymentOptions } from "@gr4vy/sdk/models/components";

let value: PaymentOptions = {
    items: [
        {
            type: "payment-option",
            method: "card",
            iconUrl: "https://cdn.gr4vy.app/card.svg",
            mode: "card",
            label: "Pay by Card",
            context: {
                approvalUi: {
                    height: "300px",
                    width: "300px",
                },
            },
        },
    ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.PaymentOption](../../models/components/paymentoption.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |