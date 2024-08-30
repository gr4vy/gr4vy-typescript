# ConnectionOptions

Allows for passing optional configuration per connection to take
advantage of connection specific features. When provided, the data
is only passed to the target connection type to prevent sharing
configuration across connections.

Please note that each of the keys this object are in kebab-case, for
example `cybersource-anti-fraud` as they represent the ID of the
connector. All the other keys will be snake case, for example
`merchant_defined_data` or camel case to match an external API that the
connector uses.

## Example Usage

```typescript
import { ConnectionOptions } from "@gr4vy/sdk/models/components";

let value: ConnectionOptions = {
    cybersourceCard: {
        merchantDefinedInformation: {
            "1": "John Doe",
            "2": "trusted",
            "99": "recurring",
        },
    },
    cybersourceKcp: {
        merchantDefinedInformation: {
            "1": "John Doe",
            "2": "trusted",
            "99": "recurring",
        },
    },
    cybersourceIdeal: {
        merchantDefinedInformation: {
            "1": "John Doe",
            "2": "trusted",
            "99": "recurring",
        },
    },
    cybersourceAntiFraud: {
        merchantDefinedData: {
            "1": "John Doe",
            "2": "trusted",
            "99": "recurring",
        },
    },
    givingblockGivingblock: {
        defaultCryptocurrency: "ETH",
    },
    forterAntiFraud: {
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
    },
    adyenCard: {
        additionalData: {
            "riskdata.operatorCode": "operatorCode,",
            "riskdata.operatorCountry": "operatorCountry",
        },
    },
    paypalPaypal: {
        additionalData: [
            {
                key: "test",
                value: "abc",
            },
        ],
    },
    paypalPaypalpaylater: {
        additionalData: [
            {
                key: "test",
                value: "abc",
            },
        ],
    },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `cybersourceCard`                                                                      | [components.CybersourceCard](../../models/components/cybersourcecard.md)               | :heavy_minus_sign:                                                                     | Additional options for Cybersource payment gateway.                                    |
| `cybersourceKcp`                                                                       | [components.CybersourceKcp](../../models/components/cybersourcekcp.md)                 | :heavy_minus_sign:                                                                     | Additional options for Cybersource KCP APM.                                            |
| `cybersourceIdeal`                                                                     | [components.CybersourceIdeal](../../models/components/cybersourceideal.md)             | :heavy_minus_sign:                                                                     | Additional options for Cybersource iDeal APM.                                          |
| `cybersourceAntiFraud`                                                                 | [components.CybersourceAntiFraud](../../models/components/cybersourceantifraud.md)     | :heavy_minus_sign:                                                                     | Additional options for Cybersource Decision Manager (anti-fraud).                      |
| `givingblockGivingblock`                                                               | [components.GivingblockGivingblock](../../models/components/givingblockgivingblock.md) | :heavy_minus_sign:                                                                     | Additional options for Giving Block connector.                                         |
| `forterAntiFraud`                                                                      | [components.ForterAntiFraud](../../models/components/forterantifraud.md)               | :heavy_minus_sign:                                                                     | Additional options for Forter (anti-fraud).                                            |
| `adyenCard`                                                                            | [components.AdyenCard](../../models/components/adyencard.md)                           | :heavy_minus_sign:                                                                     | Additional options to be passed through to Adyen when processing<br/>card transactions. |
| `paypalPaypal`                                                                         | [components.PaypalPaypal](../../models/components/paypalpaypal.md)                     | :heavy_minus_sign:                                                                     | Additional options to be passed through to PayPal when processing<br/>transactions.    |
| `paypalPaypalpaylater`                                                                 | [components.PaypalPaypalpaylater](../../models/components/paypalpaypalpaylater.md)     | :heavy_minus_sign:                                                                     | Additional options to be passed through to PayPal when processing<br/>transactions.    |
| `stripeCard`                                                                           | [components.StripeCard](../../models/components/stripecard.md)                         | :heavy_minus_sign:                                                                     | Additional options to be passed through to Stripe when processing<br/>transactions.    |