# GiftCardRequest

The number and pin for a gift card to fetch a balance for.

## Example Usage

```typescript
import { GiftCardRequest } from "@gr4vy/sdk/models/components";

let value: GiftCardRequest = {
  number: "4123455541234561234",
  pin: "1234",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `number`                                  | *string*                                  | :heavy_check_mark:                        | The 16-19 digit number for the gift card. | 4123455541234561234                       |
| `pin`                                     | *string*                                  | :heavy_check_mark:                        | The PIN for this gift card.               | 1234                                      |