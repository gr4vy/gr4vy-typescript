# BuyerCreate

Request body for creating a new buyer

## Example Usage

```typescript
import { BuyerCreate } from "@gr4vy/sdk/models/components";

let value: BuyerCreate = {
    billingDetails: {
        phoneNumber: "+14155552671",
        address: {
            country: "GB",
            stateCode: "US-CA",
        },
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `displayName`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The display name for the buyer to show in the dashboard                                      |
| `externalIdentifier`                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | The merchant identifier for this buyer                                                       |
| `billingDetails`                                                                             | [components.BuyerCreateBillingDetails](../../models/components/buyercreatebillingdetails.md) | :heavy_minus_sign:                                                                           | The billing name, address, email, and other fields for this buyer                            |