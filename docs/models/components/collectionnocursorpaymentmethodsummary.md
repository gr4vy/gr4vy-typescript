# CollectionNoCursorPaymentMethodSummary

## Example Usage

```typescript
import { CollectionNoCursorPaymentMethodSummary } from "@gr4vy/sdk/models/components";

let value: CollectionNoCursorPaymentMethodSummary = {
  items: [
    {
      type: "payment-method",
      approvalUrl: "https://gr4vy.app/redirect/12345",
      country: "US",
      currency: "USD",
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
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.PaymentMethodSummary](../../models/components/paymentmethodsummary.md)[] | :heavy_check_mark:                                                                   | A list of items returned for this request.                                           |