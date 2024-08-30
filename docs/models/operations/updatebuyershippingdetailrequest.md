# UpdateBuyerShippingDetailRequest

## Example Usage

```typescript
import { UpdateBuyerShippingDetailRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateBuyerShippingDetailRequest = {
    buyerId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    shippingDetailId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    shippingDetailUpdateRequest: {
        firstName: "John",
        lastName: "Lunn",
        emailAddress: "john@example.com",
        phoneNumber: "+1234567890",
        address: {
            city: "London",
            country: "GB",
            postalCode: "789123",
            state: "Greater London",
            stateCode: "GB-LND",
            houseNumberOrName: "10",
            line1: "10 Oxford Street",
            line2: "New Oxford Court",
            organization: "Gr4vy",
        },
    },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `buyerId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | The unique ID for a buyer.                                                                       | 8724fd24-5489-4a5d-90fd-0604df7d3b83                                                             |
| `shippingDetailId`                                                                               | *string*                                                                                         | :heavy_check_mark:                                                                               | The unique ID for a buyer's shipping detail.                                                     | 8724fd24-5489-4a5d-90fd-0604df7d3b83                                                             |
| `shippingDetailUpdateRequest`                                                                    | [components.ShippingDetailUpdateRequest](../../models/components/shippingdetailupdaterequest.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |