# PayoutsCreate

PayoutsCreate

Represents the data required to create a new payout.

## Example Usage

```typescript
import { PayoutsCreate } from "@gr4vy/sdk/models/components";

let value: PayoutsCreate = {
  amount: 1299,
  currency: "EUR",
  paymentServiceId: "ed8bd87d-85ad-40cf-8e8f-007e21e55aad",
  paymentMethod: {
    method: "card",
    number: "4242424242424242",
    expirationDate: "12/30",
    cardScheme: "visa",
    externalIdentifier: "card-12345",
  },
  category: "online_gambling",
  externalIdentifier: "payout-12345",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  buyer: {
    displayName: "John Doe",
    externalIdentifier: "buyer-12345",
    billingDetails: {
      firstName: "John",
      lastName: "Doe",
      emailAddress: "john@example.com",
      phoneNumber: "+14155552671",
      address: {
        city: "San Jose",
        country: "GB",
        postalCode: "94560",
        state: "California",
        stateCode: "US-CA",
        houseNumberOrName: "10",
        line1: "Stafford Appartments",
        line2: "29th Street",
        organization: "Gr4vy",
      },
      taxId: {
        value: "12345678931",
        kind: "us.ein",
      },
    },
    shippingDetails: {
      firstName: "John",
      lastName: "Doe",
      emailAddress: "john@example.com",
      phoneNumber: "+442071838750",
      address: {
        city: "San Jose",
        country: "US",
        postalCode: "94560",
        state: "California",
        stateCode: "US-CA",
        houseNumberOrName: "10",
        line1: "Stafford Appartments",
        line2: "29th Street",
        organization: "Gr4vy",
      },
    },
  },
  buyerExternalIdentifier: "buyer-12345",
  merchant: {
    name: "Acme Inc",
    identificationNumber: "12345",
    phoneNumber: "+14155552671",
    url: "https://example.com",
    statementDescriptor: "Winnings",
    merchantCategoryCode: "123456",
    address: {
      city: "San Jose",
      country: "GB",
      postalCode: "94560",
      state: "California",
      stateCode: "US-CA",
      houseNumberOrName: "10",
      line1: "Stafford Appartments",
      line2: "29th Street",
      organization: "Gr4vy",
    },
  },
  connectionOptions: {
    checkoutCard: {
      processingChannelId: "channel-1234",
      sourceId: "acct-1234",
    },
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                | Example                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                                   | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The monetary amount for this payout, in the smallest currency unit for the given currency, for example `1299` cents to create an authorization for $12.99. | 1299                                                                                                                                                       |
| `currency`                                                                                                                                                 | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The ISO-4217 currency code for this payout.                                                                                                                | EUR                                                                                                                                                        |
| `paymentServiceId`                                                                                                                                         | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The ID of the payment service to use for the payout.                                                                                                       | ed8bd87d-85ad-40cf-8e8f-007e21e55aad                                                                                                                       |
| `paymentMethod`                                                                                                                                            | *components.PayoutsCreatePaymentMethod*                                                                                                                    | :heavy_check_mark:                                                                                                                                         | The type of payment method to send funds too.                                                                                                              |                                                                                                                                                            |
| `category`                                                                                                                                                 | [components.PayoutsCreatePayoutCategory](../../models/components/payoutscreatepayoutcategory.md)                                                           | :heavy_minus_sign:                                                                                                                                         | The type of payout to process.                                                                                                                             | online_gambling                                                                                                                                            |
| `externalIdentifier`                                                                                                                                       | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | A value that can be used to match the payout against your own records.                                                                                     | payout-12345                                                                                                                                               |
| `buyerId`                                                                                                                                                  | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The `id` of a stored buyer to use for this payout Use this instead of the `buyer` or `buyer_external_identifier`.                                          | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                                                                       |
| `buyer`                                                                                                                                                    | [components.PayoutsCreateBuyer](../../models/components/payoutscreatebuyer.md)                                                                             | :heavy_minus_sign:                                                                                                                                         | Inline buyer details for the payout. Use this instead of the `buyer_id` or `buyer_external_identifier`.                                                    |                                                                                                                                                            |
| `buyerExternalIdentifier`                                                                                                                                  | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The `external_identifier` of a stored buyer to use for this payout. Use this instead of the `buyer_id` or `buyer`.                                         | buyer-12345                                                                                                                                                |
| `merchant`                                                                                                                                                 | [components.PayoutsCreateMerchant](../../models/components/payoutscreatemerchant.md)                                                                       | :heavy_minus_sign:                                                                                                                                         | Merchant information for the source of the payout.                                                                                                         |                                                                                                                                                            |
| `connectionOptions`                                                                                                                                        | [components.ConnectionOptions](../../models/components/connectionoptions.md)                                                                               | :heavy_minus_sign:                                                                                                                                         | Optional fields for processing payouts on specific payment services.                                                                                       |                                                                                                                                                            |