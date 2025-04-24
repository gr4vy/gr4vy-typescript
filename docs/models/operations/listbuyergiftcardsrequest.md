# ListBuyerGiftCardsRequest

## Example Usage

```typescript
import { ListBuyerGiftCardsRequest } from "@gr4vy/sdk/models/operations";

let value: ListBuyerGiftCardsRequest = {
  xGr4vyMerchantAccountId: "default",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `buyerExternalIdentifier`                               | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `buyerId`                                               | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `timeoutInSeconds`                                      | *number*                                                | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `xGr4vyMerchantAccountId`                               | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. | default                                                 |