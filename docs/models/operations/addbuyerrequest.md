# AddBuyerRequest

## Example Usage

```typescript
import { AddBuyerRequest } from "@gr4vy/sdk/models/operations";

let value: AddBuyerRequest = {
  buyerCreate: {
    displayName: "John Doe",
    externalIdentifier: "buyer-12345",
    billingDetails: {
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
      taxId: {
        value: "12345678931",
        kind: "tw.vat",
      },
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `merchantAccountId`                                              | *string*                                                         | :heavy_minus_sign:                                               | The ID of the merchant account to use for this request.          |
| `buyerCreate`                                                    | [components.BuyerCreate](../../models/components/buyercreate.md) | :heavy_check_mark:                                               | N/A                                                              |