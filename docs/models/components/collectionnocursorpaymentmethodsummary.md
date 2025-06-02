# CollectionNoCursorPaymentMethodSummary

## Example Usage

```typescript
import { CollectionNoCursorPaymentMethodSummary } from "@gr4vy/sdk/models/components";

let value: CollectionNoCursorPaymentMethodSummary = {
  items: [
    {
      method: "bancontact",
      id: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
      merchantAccountId: "default",
      citUsageCount: 50,
      hasReplacement: false,
      usageCount: 100,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.PaymentMethodSummary](../../models/components/paymentmethodsummary.md)[] | :heavy_check_mark:                                                                   | A list of items returned for this request.                                           |