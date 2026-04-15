# ListBuyerGiftCardsRequest

## Example Usage

```typescript
import { ListBuyerGiftCardsRequest } from "@gr4vy/sdk/models/operations";

let value: ListBuyerGiftCardsRequest = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `buyerExternalIdentifier`                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `buyerId`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `sortBy`                                                                     | [operations.QueryParamSortBy](../../models/operations/queryparamsortby.md)   | :heavy_minus_sign:                                                           | The field to sort the gift cards by.                                         | last_used_at                                                                 |
| `orderBy`                                                                    | [operations.QueryParamOrderBy](../../models/operations/queryparamorderby.md) | :heavy_minus_sign:                                                           | The direction to sort the gift cards in.                                     | desc                                                                         |
| `merchantAccountId`                                                          | *string*                                                                     | :heavy_minus_sign:                                                           | The ID of the merchant account to use for this request.                      |                                                                              |