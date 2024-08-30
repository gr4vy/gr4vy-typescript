# GuestBuyer

Request body for creating a new buyer

## Example Usage

```typescript
import { GuestBuyer } from "@gr4vy/sdk/models/components";

let value: GuestBuyer = {
    billingDetails: {
        phoneNumber: "+442071838750",
        address: {
            country: "DE",
            stateCode: "GB-LND",
        },
    },
    shippingDetails: {
        phoneNumber: "+14155552671",
        address: {
            country: "US",
            stateCode: "US-CA",
        },
    },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `displayName`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `externalIdentifier`                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `billingDetails`                                                                     | [components.BillingDetails](../../models/components/billingdetails.md)               | :heavy_minus_sign:                                                                   | Base model with JSON encoders.                                                       |
| `shippingDetails`                                                                    | [components.ShippingDetailsCreate](../../models/components/shippingdetailscreate.md) | :heavy_minus_sign:                                                                   | Base model with JSON encoders.                                                       |