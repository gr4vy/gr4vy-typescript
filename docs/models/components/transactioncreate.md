# TransactionCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { TransactionCreate } from "@gr4vy/sdk/models/components";

let value: TransactionCreate = {
    amount: 798047,
    currency: "USD",
    country: "DE",
    paymentMethod: {
        method: "smartpay",
        country: "GB",
        currency: "USD",
        redirectUrl: "http://dual-sequel.org",
    },
    buyer: {
        billingDetails: {
            phoneNumber: "+14155552671",
            address: {
                country: "US",
                stateCode: "US-CA",
            },
        },
        shippingDetails: {
            phoneNumber: "+14155552671",
            address: {
                country: "DE",
                stateCode: "GB-LND",
            },
        },
    },
    statementDescriptor: {
        phoneNumber: "+442071838750",
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `amount`                                                                                     | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `currency`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | EUR                                                                                          |
| `country`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | DE                                                                                           |
| `paymentMethod`                                                                              | *components.TransactionCreatePaymentMethod*                                                  | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `buyer`                                                                                      | [components.GuestBuyer](../../models/components/guestbuyer.md)                               | :heavy_minus_sign:                                                                           | Request body for creating a new buyer                                                        |                                                                                              |
| `buyerId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `buyerExternalIdentifier`                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `giftCards`                                                                                  | *components.GiftCards*[]                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `externalIdentifier`                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `intent`                                                                                     | [components.TransactionIntent](../../models/components/transactionintent.md)                 | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `store`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `threeDSecureData`                                                                           | *components.ThreeDSecureData*                                                                | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `metadata`                                                                                   | [components.Metadata](../../models/components/metadata.md)                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `isSubsequentPayment`                                                                        | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `merchantInitiated`                                                                          | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `paymentSource`                                                                              | [components.TransactionPaymentSource](../../models/components/transactionpaymentsource.md)   | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `cartItems`                                                                                  | [components.CartItem](../../models/components/cartitem.md)[]                                 | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `statementDescriptor`                                                                        | [components.StatementDescriptor](../../models/components/statementdescriptor.md)             | :heavy_minus_sign:                                                                           | Information to show the user on their payments statement                                     |                                                                                              |
| `previousSchemeTransactionId`                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `browserInfo`                                                                                | [components.BrowserInfoWithDevice](../../models/components/browserinfowithdevice.md)         | :heavy_minus_sign:                                                                           | Base model with JSON encoders.                                                               |                                                                                              |
| `shippingDetailsId`                                                                          | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `connectionOptions`                                                                          | Record<string, [components.ConnectionOptions](../../models/components/connectionoptions.md)> | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `asyncCapture`                                                                               | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `antiFraudFingerprint`                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `paymentServiceId`                                                                           | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |