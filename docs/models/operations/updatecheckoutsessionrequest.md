# UpdateCheckoutSessionRequest

## Example Usage

```typescript
import { UpdateCheckoutSessionRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateCheckoutSessionRequest = {
    sessionId: "926bad25-5381-49b4-b4b0-ed20e56248ff",
    checkoutSessionUpdate: {
        buyer: {
            billingDetails: {
                phoneNumber: "+442071838750",
                address: {
                    country: "GB",
                    stateCode: "GB-LND",
                },
            },
            shippingDetails: {
                phoneNumber: "+442071838750",
                address: {
                    country: "GB",
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