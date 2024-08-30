# Buyers

A list of buyers.

## Example Usage

```typescript
import { Buyers } from "@gr4vy/sdk/models/components";

let value: Buyers = {
    items: [
        {
            type: "buyer",
            id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
            billingDetails: {
                type: "billing-details",
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
            createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
            displayName: "John L.",
            externalIdentifier: "user-789123",
            merchantAccountId: "default",
            updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
        },
    ],
    limit: 1,
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: null,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                            | [components.Buyer](../../models/components/buyer.md)[]                                                             | :heavy_minus_sign:                                                                                                 | A list of buyers.                                                                                                  |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |