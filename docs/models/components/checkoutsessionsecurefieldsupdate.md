# CheckoutSessionSecureFieldsUpdate

A request to update the secure fields of a checkout session.

## Example Usage

```typescript
import { CheckoutSessionSecureFieldsUpdate } from "@gr4vy/sdk/models/components";

let value: CheckoutSessionSecureFieldsUpdate = {
    paymentMethod: {
        method: "id",
        id: "77a76f7e-d2de-4bbc-ada9-d6a0015e6bd5",
        securityCode: "123",
    },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `paymentMethod`                                             | *components.CheckoutSessionSecureFieldsUpdatePaymentMethod* | :heavy_minus_sign:                                          | N/A                                                         |