# Buyer

Base model with JSON encoders.

## Example Usage

```typescript
import { Buyer } from "@gr4vy/sdk/models/components";

let value: Buyer = {
    merchantAccountId: "<value>",
    billingDetails: {
        phoneNumber: "+14155552671",
        address: {
            country: "GB",
            stateCode: "US-CA",
        },
    },
    createdAt: new Date("2023-08-11T01:17:06.359Z"),
    updatedAt: new Date("2024-08-05T06:03:32.627Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.Type](../../models/components/type.md)                                            | :heavy_minus_sign:                                                                            | Always `buyer`.                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID for the buyer.                                                                         |
| `merchantAccountId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the merchant account this buyer belongs to.                                         |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The display name for the buyer.                                                               |
| `externalIdentifier`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The merchant identifier for this buyer.                                                       |
| `billingDetails`                                                                              | [components.BuyerBillingDetails](../../models/components/buyerbillingdetails.md)              | :heavy_minus_sign:                                                                            | The billing name, address, email, and other fields for this buyer.                            |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date this buyer was created at.                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date this buyer was last updated at.                                                      |