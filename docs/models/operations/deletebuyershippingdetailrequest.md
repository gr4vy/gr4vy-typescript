# DeleteBuyerShippingDetailRequest

## Example Usage

```typescript
import { DeleteBuyerShippingDetailRequest } from "@gr4vy/sdk/models/operations";

let value: DeleteBuyerShippingDetailRequest = {
    buyerId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    shippingDetailId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `buyerId`                                    | *string*                                     | :heavy_check_mark:                           | The unique ID for a buyer.                   | 8724fd24-5489-4a5d-90fd-0604df7d3b83         |
| `shippingDetailId`                           | *string*                                     | :heavy_check_mark:                           | The unique ID for a buyer's shipping detail. | 8724fd24-5489-4a5d-90fd-0604df7d3b83         |