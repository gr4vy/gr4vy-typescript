# CartItem

Base model with JSON encoders.

## Example Usage

```typescript
import { CartItem } from "@gr4vy/sdk/models/components";

let value: CartItem = {
    name: "<value>",
    quantity: 730442,
    unitAmount: 374170,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `quantity`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `unitAmount`                                                     | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `discountAmount`                                                 | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `taxAmount`                                                      | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `externalIdentifier`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `sku`                                                            | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `productUrl`                                                     | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `imageUrl`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `categories`                                                     | *string*[]                                                       | :heavy_minus_sign:                                               | N/A                                                              |
| `productType`                                                    | [components.ProductType](../../models/components/producttype.md) | :heavy_minus_sign:                                               | An enumeration.                                                  |