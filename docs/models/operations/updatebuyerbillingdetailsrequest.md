# UpdateBuyerBillingDetailsRequest

## Example Usage

```typescript
import { UpdateBuyerBillingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateBuyerBillingDetailsRequest = {
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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `buyerId`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `buyerExternalIdentifier`                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `billingDetails`                                                       | [components.BillingDetails](../../models/components/billingdetails.md) | :heavy_check_mark:                                                     | N/A                                                                    |