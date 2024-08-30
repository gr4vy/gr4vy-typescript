# UpdateBuyerRequest

## Example Usage

```typescript
import { UpdateBuyerRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateBuyerRequest = {
    buyerId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    buyerUpdate: {
        externalIdentifier: "user-789123",
        displayName: "John L.",
        billingDetails: {
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
            taxId: {
                value: "12345678931",
                kind: "gb.vat",
            },
        },
    },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `buyerId`                                                        | *string*                                                         | :heavy_check_mark:                                               | The unique ID for a buyer.                                       | 8724fd24-5489-4a5d-90fd-0604df7d3b83                             |
| `buyerUpdate`                                                    | [components.BuyerUpdate](../../models/components/buyerupdate.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |