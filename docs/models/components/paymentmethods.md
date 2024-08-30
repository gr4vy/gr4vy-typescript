# PaymentMethods

A list of stored payment methods.

## Example Usage

```typescript
import { PaymentMethods } from "@gr4vy/sdk/models/components";

let value: PaymentMethods = {
    items: [
        {
            type: "payment-method",
            id: "77a76f7e-d2de-4bbc-ada9-d6a0015e6bd5",
            additionalSchemes: ["visa"],
            approvalTarget: "any",
            approvalUrl:
                "https://api.example.app.gr4vy.com/payment-methods/ffc88ec9-e1ee-45ba-993d-b5902c3b2a8c/approve",
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
            country: "US",
            createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
            currency: "USD",
            details: {
                cardType: "credit",
                bin: "412345",
            },
            expirationDate: "07/24",
            externalIdentifier: "user-789123",
            hasReplacement: false,
            label: "john@example.com",
            lastReplacedAt: new Date("2023-07-26T19:23:00.000+00:00"),
            merchantAccountId: "default",
            method: "card",
            mode: "card",
            scheme: "visa",
            status: "succeeded",
            updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
            fingerprint: "20eb353620155d2b5fc864cc46a73ea77cb92c725238650839da1813fa987a17",
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
| `items`                                                                                                            | [components.PaymentMethod](../../models/components/paymentmethod.md)[]                                             | :heavy_minus_sign:                                                                                                 | A list of stored payment methods.                                                                                  |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |