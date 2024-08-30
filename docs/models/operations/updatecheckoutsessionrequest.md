# UpdateCheckoutSessionRequest

## Example Usage

```typescript
import { UpdateCheckoutSessionRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateCheckoutSessionRequest = {
    sessionId: "3fa4a41c-480d-43f2-932a-f03102d514f4",
    checkoutSessionUpdate: {
        buyer: {
            billingDetails: {
                phoneNumber: "+442071838750",
                address: {
                    country: "US",
                    stateCode: "GB-LND",
                },
            },
            shippingDetails: {
                phoneNumber: "+442071838750",
                address: {
                    country: "DE",
                    stateCode: "US-CA",
                },
            },
        },
    },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `sessionId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `checkoutSessionUpdate`                                                              | [components.CheckoutSessionUpdate](../../models/components/checkoutsessionupdate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |