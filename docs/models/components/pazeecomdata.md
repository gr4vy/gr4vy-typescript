# PazeEcomData

## Example Usage

```typescript
import { PazeEcomData } from "@gr4vy/sdk/models/components";

let value: PazeEcomData = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `cartContainsGiftCard`                                                                | *boolean*                                                                             | :heavy_minus_sign:                                                                    | Whether the current transaction includes a gift card purchase.                        | false                                                                                 |
| `orderForPickup`                                                                      | *boolean*                                                                             | :heavy_minus_sign:                                                                    | Whether the consumer order will be picked up rather than shipped.                     | false                                                                                 |
| `orderHighestCost`                                                                    | *string*                                                                              | :heavy_minus_sign:                                                                    | Dollar value of the most expensive item ordered.                                      | 99.99                                                                                 |
| `orderQuantity`                                                                       | *string*                                                                              | :heavy_minus_sign:                                                                    | Number of items ordered.                                                              | 3                                                                                     |
| `finalShippingAddress`                                                                | [components.PazeShippingAddress](../../models/components/pazeshippingaddress.md)      | :heavy_minus_sign:                                                                    | The selected shipping address. Returned only when `shippingPreference` is not `NONE`. |                                                                                       |