# IssueGiftCardRequest

## Example Usage

```typescript
import { IssueGiftCardRequest } from "@gr4vy/sdk/models/operations";

let value: IssueGiftCardRequest = {
  giftCardIssuanceCreate: {
    theme: "031111372",
    amount: 5000,
    currency: "EUR",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                       | *string*                                                                               | :heavy_minus_sign:                                                                     | A unique key forwarded to the gift card service to make the issuance idempotent.       |
| `merchantAccountId`                                                                    | *string*                                                                               | :heavy_minus_sign:                                                                     | The ID of the merchant account to use for this request.                                |
| `giftCardIssuanceCreate`                                                               | [components.GiftCardIssuanceCreate](../../models/components/giftcardissuancecreate.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |