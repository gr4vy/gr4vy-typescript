# ListGiftCardBalancesRequest

## Example Usage

```typescript
import { ListGiftCardBalancesRequest } from "@gr4vy/sdk/models/operations";

let value: ListGiftCardBalancesRequest = {
  giftCardBalanceRequest: {
    items: [
      {
        number: "4123455541234561234",
        pin: "1234",
      },
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `merchantAccountId`                                                                    | *string*                                                                               | :heavy_minus_sign:                                                                     | The ID of the merchant account to use for this request.                                |
| `giftCardBalanceRequest`                                                               | [components.GiftCardBalanceRequest](../../models/components/giftcardbalancerequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |