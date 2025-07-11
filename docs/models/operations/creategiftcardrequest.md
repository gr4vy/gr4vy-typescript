# CreateGiftCardRequest

## Example Usage

```typescript
import { CreateGiftCardRequest } from "@gr4vy/sdk/models/operations";

let value: CreateGiftCardRequest = {
  giftCardCreate: {
    number: "4123455541234561234",
    pin: "1234",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `merchantAccountId`                                                    | *string*                                                               | :heavy_minus_sign:                                                     | The ID of the merchant account to use for this request.                |
| `giftCardCreate`                                                       | [components.GiftCardCreate](../../models/components/giftcardcreate.md) | :heavy_check_mark:                                                     | N/A                                                                    |