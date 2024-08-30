# GiftCardCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { GiftCardCreate } from "@gr4vy/sdk/models/components";

let value: GiftCardCreate = {
    number: "<value>",
    pin: "9771",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `number`                  | *string*                  | :heavy_check_mark:        | N/A                       |
| `pin`                     | *string*                  | :heavy_check_mark:        | N/A                       |
| `buyerId`                 | *string*                  | :heavy_minus_sign:        | N/A                       |
| `buyerExternalIdentifier` | *string*                  | :heavy_minus_sign:        | N/A                       |