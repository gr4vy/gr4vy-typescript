# PayoutSummary

PayoutSummary

Represents a summary of a payout.

## Example Usage

```typescript
import { PayoutSummary } from "@gr4vy/sdk/models/components";

let value: PayoutSummary = {
  id: "6f96a57e-a35b-4f98-b192-d298995f811a",
  amount: 1299,
  buyer: {
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
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
        kind: "tw.vat",
      },
    },
  },
  category: "online_gambling",
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
  currency: "GBP",
  externalIdentifier: "payout-12345",
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
  merchantAccountId: "default",
  paymentMethod: {
    approvalUrl: "https://gr4vy.app/redirect/12345",
    country: "US",
    currency: "USD",
    expirationDate: "12/30",
    fingerprint:
      "20eb353620155d2b5fc864cc46a73ea77cb92c725238650839da1813fa987a17",
    label: "1234",
    lastReplacedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    method: "sepa",
    mode: "card",
    scheme: "visa",
    id: "852b951c-d7ea-4c98-b09e-4a1c9e97c077",
    approvalTarget: "any",
    externalIdentifier: "card-12345",
    paymentAccountReference: "V0010014629724763377327521982",
  },
  paymentService: {
    id: "b6c9eb12-2b62-4103-99b9-e3efc94e396d",
    paymentServiceDefinitionId: "nuvei-card",
    displayName: "Nuvei",
  },
  paymentServicePayoutId: "pout-12345",
  status: "failed",
  updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                | Example                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                     | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | Always `payout`.                                                                                                                                           | payout                                                                                                                                                     |
| `id`                                                                                                                                                       | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The ID for the payout.                                                                                                                                     | 6f96a57e-a35b-4f98-b192-d298995f811a                                                                                                                       |
| `amount`                                                                                                                                                   | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The monetary amount for this payout, in the smallest currency unit for the given currency, for example `1299` cents to create an authorization for $12.99. | 1299                                                                                                                                                       |
| `buyer`                                                                                                                                                    | [components.TransactionBuyer](../../models/components/transactionbuyer.md)                                                                                 | :heavy_minus_sign:                                                                                                                                         | The buyer used for this payout.                                                                                                                            |                                                                                                                                                            |
| `category`                                                                                                                                                 | [components.PayoutCategory](../../models/components/payoutcategory.md)                                                                                     | :heavy_minus_sign:                                                                                                                                         | The type of payout to process.                                                                                                                             | online_gambling                                                                                                                                            |
| `createdAt`                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                              | :heavy_check_mark:                                                                                                                                         | The date this payout was created at.                                                                                                                       | 2013-07-16T19:23:00.000+00:00                                                                                                                              |
| `currency`                                                                                                                                                 | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | A supported ISO-4217 currency code.                                                                                                                        | EUR                                                                                                                                                        |
| `externalIdentifier`                                                                                                                                       | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The merchant identifier for this payout.                                                                                                                   | payout-12345                                                                                                                                               |
| `merchant`                                                                                                                                                 | [components.PayoutMerchantSummary](../../models/components/payoutmerchantsummary.md)                                                                       | :heavy_minus_sign:                                                                                                                                         | The merchant details associated to this payout.                                                                                                            |                                                                                                                                                            |
| `merchantAccountId`                                                                                                                                        | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The ID of the merchant account this payout was created for.                                                                                                | default                                                                                                                                                    |
| `paymentMethod`                                                                                                                                            | [components.TransactionPaymentMethod](../../models/components/transactionpaymentmethod.md)                                                                 | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |                                                                                                                                                            |
| `paymentService`                                                                                                                                           | [components.PayoutPaymentService](../../models/components/payoutpaymentservice.md)                                                                         | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |                                                                                                                                                            |
| `paymentServicePayoutId`                                                                                                                                   | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The ID of the payout in the underlying payment service.                                                                                                    | pout-12345                                                                                                                                                 |
| `status`                                                                                                                                                   | [components.PayoutStatus](../../models/components/payoutstatus.md)                                                                                         | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |                                                                                                                                                            |
| `updatedAt`                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                              | :heavy_check_mark:                                                                                                                                         | The date this payout was last updated at.                                                                                                                  | 2013-07-16T19:23:00.000+00:00                                                                                                                              |