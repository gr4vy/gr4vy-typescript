# CheckoutSessionSecureFields

Base model with JSON encoders.

## Example Usage

```typescript
import { CheckoutSessionSecureFields } from "@gr4vy/sdk/models/components";

let value: CheckoutSessionSecureFields = {
    paymentMethod: {
        merchantTransactionId: "<value>",
        srcCorrelationId: "<value>",
        srcDpaId: "<value>",
    },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `paymentMethod`                                       | *components.CheckoutSessionSecureFieldsPaymentMethod* | :heavy_check_mark:                                    | N/A                                                   |