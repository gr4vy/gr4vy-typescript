# CollectionNoCursorShippingDetails

## Example Usage

```typescript
import { CollectionNoCursorShippingDetails } from "@gr4vy/sdk/models/components";

let value: CollectionNoCursorShippingDetails = {
  items: [
    {
      firstName: "John",
      lastName: "Doe",
      emailAddress: "john@example.com",
      phoneNumber: "+1234567890",
      address: {
        city: "San Jose",
        country: "US",
        postalCode: "94560",
        state: "California",
        stateCode: "US-CA",
        houseNumberOrName: "10",
        line1: "Stafford Appartments",
        line2: "29th Street",
        organization: "Gr4vy",
      },
      id: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
      buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.ShippingDetails](../../models/components/shippingdetails.md)[] | :heavy_check_mark:                                                         | A list of items returned for this request.                                 |