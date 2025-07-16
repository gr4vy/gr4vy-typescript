# PaymentLinks

## Example Usage

```typescript
import { PaymentLinks } from "@gr4vy/sdk/models/components";

let value: PaymentLinks = {
  items: [],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `items`                                                            | [components.PaymentLink](../../models/components/paymentlink.md)[] | :heavy_check_mark:                                                 | A list of items returned for this request.                         |                                                                    |
| `limit`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | The number of items for this page.                                 | 20                                                                 |
| `nextCursor`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | The cursor pointing at the next page of items.                     | ZXhhbXBsZTE                                                        |
| `previousCursor`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | The cursor pointing at the previous page of items.                 | Xkjss7asS                                                          |