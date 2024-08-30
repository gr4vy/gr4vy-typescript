# DigitalWalletGooglePayTokenDecrypted

The result after decrypting an Google Pay token.

## Example Usage

```typescript
import { DigitalWalletGooglePayTokenDecrypted } from "@gr4vy/sdk/models/components";

let value: DigitalWalletGooglePayTokenDecrypted = {
    type: "transaction-event",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    name: "digital-wallet-google-pay-token-decrypted",
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    context: {
        version: "ECv2",
        type: "dpan",
        paymentMethod: "CARD",
    },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [components.DigitalWalletGooglePayTokenDecryptedType](../../models/components/digitalwalletgooglepaytokendecryptedtype.md)       | :heavy_minus_sign:                                                                                                               | The type of this resource. Is always `transaction-event`.                                                                        | transaction-event                                                                                                                |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The unique identifier for this event.                                                                                            | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                                             |
| `name`                                                                                                                           | [components.DigitalWalletGooglePayTokenDecryptedName](../../models/components/digitalwalletgooglepaytokendecryptedname.md)       | :heavy_minus_sign:                                                                                                               | The name of this resource. Is always `digital-wallet-google-pay-token-decrypted`.                                                | digital-wallet-google-pay-token-decrypted                                                                                        |
| `createdAt`                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                    | :heavy_minus_sign:                                                                                                               | The date and time when this transaction was created in our system.                                                               | 2013-07-16T19:23:00.000+00:00                                                                                                    |
| `context`                                                                                                                        | [components.DigitalWalletGooglePayTokenDecryptedContext](../../models/components/digitalwalletgooglepaytokendecryptedcontext.md) | :heavy_minus_sign:                                                                                                               | Google Pay decrypted token context.                                                                                              |                                                                                                                                  |