# PaymentMethodCollection

Collection of results.

## Example Usage

```typescript
import { PaymentMethodCollection } from "@gr4vy/sdk/models/components";

let value: PaymentMethodCollection = {
  items: [
    {
      type: "payment-method",
      approvalUrl: "https://gr4vy.app/redirect/12345",
      country: "US",
      currency: "GBP",
      expirationDate: "12/30",
      fingerprint:
        "a50b85c200ee0795d6fd33a5c66f37a4564f554355c5b46a756aac485dd168a4",
      label: "1234",
      lastReplacedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      method: "card",
      mode: "card",
      scheme: "visa",
      id: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
      merchantAccountId: "default",
      additionalSchemes: [
        "eftpos-australia",
      ],
      citLastUsedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      citUsageCount: 50,
      hasReplacement: false,
      lastUsedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      usageCount: 100,
      buyer: {
        type: "buyer",
        id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
        merchantAccountId: "default",
        displayName: "John Doe",
        externalIdentifier: "buyer-12345",
        billingDetails: {
          firstName: "John",
          lastName: "Doe",
          emailAddress: "john@example.com",
          phoneNumber: "+442071838750",
          address: {
            city: "San Jose",
            country: "GB",
            postalCode: "94560",
            state: "California",
            stateCode: "GB-LND",
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
      externalIdentifier: "card-12345",
      status: "succeeded",
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    },
  ],
  limit: 20,
  nextCursor: "ZXhhbXBsZTE",
  previousCursor: "Xkjss7asS",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                                              | [components.ApiRoutersPaymentMethodsSchemasPaymentMethod](../../models/components/apirouterspaymentmethodsschemaspaymentmethod.md)[] | :heavy_check_mark:                                                                                                                   | A list of items returned for this request.                                                                                           |                                                                                                                                      |
| `limit`                                                                                                                              | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The number of items for this page.                                                                                                   | 20                                                                                                                                   |
| `nextCursor`                                                                                                                         | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The cursor pointing at the next page of items.                                                                                       | ZXhhbXBsZTE                                                                                                                          |
| `previousCursor`                                                                                                                     | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The cursor pointing at the previous page of items.                                                                                   | Xkjss7asS                                                                                                                            |