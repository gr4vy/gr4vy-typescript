# CollectionBuyer

## Example Usage

```typescript
import { CollectionBuyer } from "@gr4vy/sdk/models/components";

let value: CollectionBuyer = {
  items: [
    {
      id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
      merchantAccountId: "default",
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
          kind: "ch.vat",
        },
      },
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    },
  ],
  nextCursor: "ZXhhbXBsZTE",
  previousCursor: "Xkjss7asS",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `items`                                                | [components.Buyer](../../models/components/buyer.md)[] | :heavy_check_mark:                                     | A list of items returned for this request.             |                                                        |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | The number of items for this page.                     | 20                                                     |
| `nextCursor`                                           | *string*                                               | :heavy_minus_sign:                                     | The cursor pointing at the next page of items.         | ZXhhbXBsZTE                                            |
| `previousCursor`                                       | *string*                                               | :heavy_minus_sign:                                     | The cursor pointing at the previous page of items.     | Xkjss7asS                                              |