# GiftCardBalanceNewRequest

Check the balance for a non-stored gift card.

## Example Usage

```typescript
import { GiftCardBalanceNewRequest } from "@gr4vy/sdk/models/components";

let value: GiftCardBalanceNewRequest = {
    number: "4123455541234561234",
    pin: "1234",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `number`                                   | *string*                                   | :heavy_check_mark:                         | The 16-19 digit number for this gift card. | 4123455541234561234                        |
| `pin`                                      | *string*                                   | :heavy_check_mark:                         | The PIN for this gift card.                | 1234                                       |