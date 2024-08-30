# ShippingDetails

A list of shipping details.

## Example Usage

```typescript
import { ShippingDetails } from "@gr4vy/sdk/models/components";

let value: ShippingDetails = {
    items: [
        {
            type: "shipping-details",
            id: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
            buyerId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
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
    ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.ShippingDetail](../../models/components/shippingdetail.md)[] | :heavy_minus_sign:                                                       | A list of shipping details.                                              |