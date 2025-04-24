# GetGiftCardRequest

## Example Usage

```typescript
import { GetGiftCardRequest } from "@gr4vy/sdk/models/operations";

let value: GetGiftCardRequest = {
  giftCardId: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `giftCardId`                                            | *string*                                                | :heavy_check_mark:                                      | The ID of the gift card.                                | 356d56e5-fe16-42ae-97ee-8d55d846ae2e                    |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |