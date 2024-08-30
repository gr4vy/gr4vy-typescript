# UpdateBuyerBillingDetailsRequest

## Example Usage

```typescript
import { UpdateBuyerBillingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateBuyerBillingDetailsRequest = {
    buyerId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    buyerExternalIdentifier: "user-12345",
    billingDetailsUpdateRequest: {
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
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `buyerId`                                                                                                         | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Filters the results to only the items for which the `buyer` has an<br/>`id` that matches this value.              | 8724fd24-5489-4a5d-90fd-0604df7d3b83                                                                              |
| `buyerExternalIdentifier`                                                                                         | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Filters the results to only the items for which the `buyer` has an<br/>`external_identifier` that matches this value. | user-12345                                                                                                        |
| `billingDetailsUpdateRequest`                                                                                     | [components.BillingDetailsUpdateRequest](../../models/components/billingdetailsupdaterequest.md)                  | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |