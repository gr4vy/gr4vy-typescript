# CheckoutSessionSecureFields

Base model with JSON encoders.

## Example Usage

```typescript
import { CheckoutSessionSecureFields } from "@gr4vy/sdk/models/components";

let value: CheckoutSessionSecureFields = {
    paymentMethod: {
        id: "7e0bc717-8e47-496f-aa70-c688282aa482",
    },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `paymentMethod`                                       | *components.CheckoutSessionSecureFieldsPaymentMethod* | :heavy_check_mark:                                    | N/A                                                   |