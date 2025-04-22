# CollectionNoCursorPaymentOption

## Example Usage

```typescript
import { CollectionNoCursorPaymentOption } from "@gr4vy/sdk/models/components";

let value: CollectionNoCursorPaymentOption = {
  items: [
    {
      method: "<value>",
      mode: "card",
      canStorePaymentMethod: false,
      canDelayCapture: false,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.PaymentOption](../../models/components/paymentoption.md)[] | :heavy_check_mark:                                                     | A list of items returned for this request.                             |