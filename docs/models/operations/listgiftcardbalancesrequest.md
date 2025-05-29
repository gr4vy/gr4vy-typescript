# ListGiftCardBalancesRequest

## Example Usage

```typescript
import { ListGiftCardBalancesRequest } from "@gr4vy/sdk/models/operations";

let value: ListGiftCardBalancesRequest = {
  giftCardBalanceRequest: {
    items: [
      {
        id: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
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