# PaymentOptions

## Example Usage

```typescript
import { PaymentOptions } from "@gr4vy/sdk/models/components";

let value: PaymentOptions = {
  items: [
    {
      method: "<value>",
      mode: "card",
      canStorePaymentMethod: false,
      canDelayCapture: true,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.PaymentOption](../../models/components/paymentoption.md)[] | :heavy_check_mark:                                                     | A list of items returned for this request.                             |