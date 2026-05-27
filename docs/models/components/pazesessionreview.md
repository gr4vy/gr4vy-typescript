# PazeSessionReview

## Example Usage

```typescript
import { PazeSessionReview } from "@gr4vy/sdk/models/components";

let value: PazeSessionReview = {
  consumer: {
    firstName: "Team",
    lastName: "Integrations",
    fullName: "Team Integrations",
    countryCode: "US",
    languageCode: "EN",
    emailAddress: "integrations@gr4vy.com",
    mobileNumber: {
      countryCode: "1",
      phoneNumber: "3213213211",
    },
  },
  shippingAddress: {
    line1: "51551 Raynor Stream",
    city: "East Kory",
    state: "ND",
    zip: "67137",
    countryCode: "US",
    deliveryContactDetails: {
      contactFullName: "Team Integrations",
      contactPhoneNumber: {
        countryCode: "1",
        phoneNumber: "3213213211",
      },
    },
  },
  maskedCard: {
    panLastFour: "2121",
    paymentAccountReference: "V0010013023108318841413393850",
    panExpirationMonth: "05",
    panExpirationYear: "2032",
    paymentCardDescriptor: "Visa Hero Card",
    paymentCardType: "CREDIT",
    paymentCardBrand: "VISA",
    paymentCardNetwork: "VISA",
    digitalCardData: {
      artUri:
        "https://sandbox.assets.vims.visa.com/vims/cardart/8f64614def1a41d39ea8acae4616bf6f_imageC",
      artHeight: 50,
      artWidth: 80,
    },
    billingAddress: {
      line1: "<value>",
      city: "Port Marina",
      state: "South Dakota",
      zip: "39033",
    },
  },
  links: {
    changeCard: "https://checkout.wallet.uat.earlywarning.io/...",
    changeShippingAddress: "https://checkout.wallet.uat.earlywarning.io/...",
  },
  code: "eyJhdWQiOm51bGwsImtpZCI6IjE3...",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `consumer`                                                                             | [components.PazeConsumer](../../models/components/pazeconsumer.md)                     | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `shippingAddress`                                                                      | [components.PazeShippingAddress](../../models/components/pazeshippingaddress.md)       | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `maskedCard`                                                                           | [components.PazeMaskedCard](../../models/components/pazemaskedcard.md)                 | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `links`                                                                                | [components.PazeSessionReviewLinks](../../models/components/pazesessionreviewlinks.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `code`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | Opaque token issued by the Paze service to be used in the next Paze interaction.       | eyJhdWQiOm51bGwsImtpZCI6IjE3...                                                        |