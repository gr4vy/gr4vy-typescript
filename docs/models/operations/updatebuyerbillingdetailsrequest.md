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
| `buyerId`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | The `id` of the buyer to update billing details for                    |
| `buyerExternalIdentifier`                                              | *string*                                                               | :heavy_minus_sign:                                                     | The `external_identifier` of the buyer to update billing details for   |
| `billingDetails`                                                       | [components.BillingDetails](../../models/components/billingdetails.md) | :heavy_check_mark:                                                     | N/A                                                                    |