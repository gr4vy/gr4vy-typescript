# BuyerUpdate

Request body for creating a new buyer

## Example Usage

```typescript
import { BuyerUpdate } from "@gr4vy/sdk/models/components";

let value: BuyerUpdate = {
    billingDetails: {
        phoneNumber: "+14155552671",
        address: {
            country: "DE",
            stateCode: "GB-LND",
        },
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `displayName`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The display name for the buyer.                                                              |
| `externalIdentifier`                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | The merchant identifier for this buyer.                                                      |
| `billingDetails`                                                                             | [components.BuyerUpdateBillingDetails](../../models/components/buyerupdatebillingdetails.md) | :heavy_minus_sign:                                                                           | The billing name, address, email, and other fields for this buyer.                           |