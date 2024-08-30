# BuyerUpdate

Request body for creating a new buyer

## Example Usage

```typescript
import { BuyerUpdate } from "@gr4vy/sdk/models/components";

let value: BuyerUpdate = {
    billingDetails: {
        phoneNumber: "+442071838750",
        address: {
            country: "US",
            stateCode: "US-CA",
        },
    },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `displayName`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `externalIdentifier`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `billingDetails`                                                       | [components.BillingDetails](../../models/components/billingdetails.md) | :heavy_minus_sign:                                                     | Base model with JSON encoders.                                         |