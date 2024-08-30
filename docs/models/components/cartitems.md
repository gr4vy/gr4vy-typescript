# CartItems

## Example Usage

```typescript
import { CartItems } from "@gr4vy/sdk/models/components";

let value: CartItems = {
    basicItemData: {
        type: "TANGIBLE",
    },
    deliveryDetails: {
        deliveryType: "PHYSICAL",
        deliveryMethod: "USPS - Ground Mail",
    },
    beneficiaries: [
        {
            personalDetails: {
                firstName: "John",
                lastName: "Smith",
                email: "john@example.com",
            },
            address: {
                country: "US",
                address1: "235 Montgomery st.",
                address2: "Ste. 1110",
                zip: "94104",
                region: "CA",
                company: "Generic Corp. ltd.",
                city: "San Francisco",
            },
            phone: [
                {
                    phone: "15557654321",
                },
            ],
            comments: {
                userCommentsToMerchant: "Please wrap with care!!",
                messageToBeneficiary: "Enjoy the gift John!",
                merchantComments: "Shipping delayed",
            },
        },
    ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `basicItemData`                                                          | [components.BasicItemData](../../models/components/basicitemdata.md)     | :heavy_minus_sign:                                                       | General data regarding item such as name, price, etc.                    |
| `deliveryDetails`                                                        | [components.DeliveryDetails](../../models/components/deliverydetails.md) | :heavy_minus_sign:                                                       | General data regarding item such as name, price, etc.                    |
| `beneficiaries`                                                          | [components.Beneficiaries](../../models/components/beneficiaries.md)[]   | :heavy_minus_sign:                                                       | List of all entities receiving or using the purchased cart item.         |