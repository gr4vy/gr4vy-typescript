# ForterAntiFraud

Additional options for Forter (anti-fraud).

## Example Usage

```typescript
import { ForterAntiFraud } from "@gr4vy/sdk/models/components";

let value: ForterAntiFraud = {
    cartItems: [
        {
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
        },
    ],
    totalDiscount: {
        couponCodeUsed: "FATHERSDAY2015",
        discountType: "COUPON",
        couponDiscountAmount: {
            amountUsd: "99.95",
            amountLocalCurrency: "105.55",
            currency: "CAD",
        },
        couponDiscountPercent: "20%",
    },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deliveryType`                                                                                                                                                                                                                                                                                 | [components.DeliveryType](../../models/components/deliverytype.md)                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                             | Value to populate the `deliveryType` field in `primaryDeliveryDetails`.<br/><br/>Represents the type of delivery. This can be set to `PHYSICAL` for any<br/>type of shipped goods, `DIGITAL` for non-shipped goods (services,<br/>gift cards etc.), or `HYBRID` for others.                    |
| `deliveryMethod`                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                             | Value to populate the `deliveryMethod` field in `primaryDeliveryDetails`.<br/><br/>Represents the delivery method chosen by customer such as postal service,<br/>email, in game transfer, etc.                                                                                                 |
| `isGuestBuyer`                                                                                                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                             | Defines if this is a guest check-out. This will redact the `accountId` and<br/>`created` fields from the `accountOwner` details sent to Forter.                                                                                                                                                |
| `cartItems`                                                                                                                                                                                                                                                                                    | [components.CartItems](../../models/components/cartitems.md)[]                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                             | A list of Forter cart item objects. These will be merged into the `cart_items`<br/>passed to the transaction. Every cart item here will be merged with a cart item<br/>on the transaction with the same index.<br/><br/>Together, these will augment the `cartItems` values sent to the Forter validation<br/>API. |
| `totalDiscount`                                                                                                                                                                                                                                                                                | [components.TotalDiscount](../../models/components/totaldiscount.md)                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                             | The `totalDiscount` object that's sent to Forter's validation API.<br/>It represents the discount that was given to the customer.                                                                                                                                                              |