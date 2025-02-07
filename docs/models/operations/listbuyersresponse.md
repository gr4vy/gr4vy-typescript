# ListBuyersResponse

## Example Usage

```typescript
import { ListBuyersResponse } from "@gr4vy/sdk/models/operations";

let value: ListBuyersResponse = {
  result: {
    items: [
      {
        type: "buyer",
        id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
        merchantAccountId: "default",
        displayName: "John Doe",
        externalIdentifier: "buyer-12345",
        billingDetails: {
          firstName: "John",
          lastName: "Doe",
          emailAddress: "john@example.com",
          phoneNumber: "+14155552671",
          address: {
            city: "San Jose",
            country: "DE",
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
            kind: "us.ein",
          },
        },
        createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
        updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      },
    ],
    limit: 20,
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: "Xkjss7asS",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `result`                                                                 | [components.BuyerCollection](../../models/components/buyercollection.md) | :heavy_check_mark:                                                       | N/A                                                                      |