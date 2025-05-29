# CreatePayoutRequest

## Example Usage

```typescript
import { CreatePayoutRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePayoutRequest = {
  payoutCreate: {
    amount: 1299,
    currency: "USD",
    paymentServiceId: "ed8bd87d-85ad-40cf-8e8f-007e21e55aad",
    paymentMethod: {
      id: "852b951c-d7ea-4c98-b09e-4a1c9e97c077",
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
        phoneNumber: "+1234567890",
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
        taxId: {
          value: "12345678931",
          kind: "ca.qst",
        },
      },
      shippingDetails: {
        firstName: "John",
        lastName: "Doe",
        emailAddress: "john@example.com",
        phoneNumber: "+1234567890",
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
      phoneNumber: "+442071838750",
      url: "https://example.com",
      statementDescriptor: "Winnings",
      merchantCategoryCode: "123456",
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
    connectionOptions: {
      checkoutCard: {
        processingChannelId: "channel-1234",
        sourceId: "acct-1234",
      },
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `merchantAccountId`                                                | *string*                                                           | :heavy_minus_sign:                                                 | The ID of the merchant account to use for this request.            |
| `payoutCreate`                                                     | [components.PayoutCreate](../../models/components/payoutcreate.md) | :heavy_check_mark:                                                 | N/A                                                                |