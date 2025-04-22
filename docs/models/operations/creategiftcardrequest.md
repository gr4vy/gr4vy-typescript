# CreateGiftCardRequest

## Example Usage

```typescript
import { CreateGiftCardRequest } from "@gr4vy/sdk/models/operations";

let value: CreateGiftCardRequest = {
  giftCardCreate: {
    number: "4123455541234561234",
    pin: "1234",
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    buyerExternalIdentifier: "buyer-12345",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `timeoutInSeconds`                                                     | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `giftCardCreate`                                                       | [components.GiftCardCreate](../../models/components/giftcardcreate.md) | :heavy_check_mark:                                                     | N/A                                                                    |