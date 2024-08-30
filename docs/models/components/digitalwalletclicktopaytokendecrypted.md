# DigitalWalletClickToPayTokenDecrypted

The result after decrypting an Click to Pay token.

## Example Usage

```typescript
import { DigitalWalletClickToPayTokenDecrypted } from "@gr4vy/sdk/models/components";

let value: DigitalWalletClickToPayTokenDecrypted = {
    type: "transaction-event",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    name: "digital-wallet-click-to-pay-token-decrypted",
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    context: {
        correlationId: "ba7a2034-3c9e-4d74-b0e9-d77435fd35d7",
        merchantTransactionId: "0a4e0d3.34f4a04b.47ee82c373dd4fd5398f3980b39eb6d648b9687c",
        type: "dpan",
        cardBin: "424242",
        cardType: "CREDIT",
    },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [components.DigitalWalletClickToPayTokenDecryptedType](../../models/components/digitalwalletclicktopaytokendecryptedtype.md)       | :heavy_minus_sign:                                                                                                                 | The type of this resource. Is always `transaction-event`.                                                                          | transaction-event                                                                                                                  |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The unique identifier for this event.                                                                                              | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                                               |
| `name`                                                                                                                             | [components.DigitalWalletClickToPayTokenDecryptedName](../../models/components/digitalwalletclicktopaytokendecryptedname.md)       | :heavy_minus_sign:                                                                                                                 | The name of this resource. Is always `digital-wallet-click-to-pay-token-decrypted`.                                                | digital-wallet-click-to-pay-token-decrypted                                                                                        |
| `createdAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time when this transaction was created in our system.                                                                 | 2013-07-16T19:23:00.000+00:00                                                                                                      |
| `context`                                                                                                                          | [components.DigitalWalletClickToPayTokenDecryptedContext](../../models/components/digitalwalletclicktopaytokendecryptedcontext.md) | :heavy_minus_sign:                                                                                                                 | Click to Pay decrypted token context.                                                                                              |                                                                                                                                    |