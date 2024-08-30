# UpdateCheckoutSessionFieldsRequest

## Example Usage

```typescript
import { UpdateCheckoutSessionFieldsRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateCheckoutSessionFieldsRequest = {
    checkoutSessionId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    checkoutSessionSecureFieldsUpdate: {
        paymentMethod: {
            method: "card",
            number: "4111111111111111",
            expirationDate: "11/25",
            securityCode: "123",
        },
    },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `checkoutSessionId`                                                                                          | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The unique ID for a Checkout Session.                                                                        | 8724fd24-5489-4a5d-90fd-0604df7d3b83                                                                         |
| `checkoutSessionSecureFieldsUpdate`                                                                          | [components.CheckoutSessionSecureFieldsUpdate](../../models/components/checkoutsessionsecurefieldsupdate.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |