# GiftCards

A list of stored gift cards.

## Example Usage

```typescript
import { GiftCards } from "@gr4vy/sdk/models/components";

let value: GiftCards = {
    items: [
        {
            type: "gift-card",
            id: "e6cdf979-87e2-4796-8ff6-9784d5aed893",
            merchantAccountId: "default",
            service: {
                type: "gift-card-service",
                id: "6c020bf3-179b-4f4f-858d-84e39e196e0f",
                merchantAccountId: "default",
                giftCardServiceDefinitionId: "qwikcilver-gift-card",
                displayName: "Qwikcilver UK",
                active: true,
                fields: [
                    {
                        key: "secret_key",
                        value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
                    },
                ],
                createdAt: new Date("2012-12-12T10:53:43+00:00"),
                updatedAt: new Date("2012-12-12T10:53:43+00:00"),
            },
            bin: "412345",
            subBin: "554",
            last4: "1234",
            expirationDate: new Date("2013-07-16T19:23:00.000+00:00"),
            buyer: {
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
            createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
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
| `items`                                                                                                            | [components.GiftCard](../../models/components/giftcard.md)[]                                                       | :heavy_minus_sign:                                                                                                 | A list of stored gift cards.                                                                                       |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |