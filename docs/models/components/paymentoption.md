# PaymentOption

## Example Usage

```typescript
import { PaymentOption } from "@gr4vy/sdk/models/components";

let value: PaymentOption = {
  method: "<value>",
  iconUrl: "https://bouncy-passport.name",
  mode: "card",
  label: "<value>",
  canStorePaymentMethod: true,
  canDelayCapture: true,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | *"payment-option"*                                 | :heavy_minus_sign:                                 | N/A                                                |                                                    |
| `method`                                           | *string*                                           | :heavy_check_mark:                                 | N/A                                                |                                                    |
| `iconUrl`                                          | *string*                                           | :heavy_check_mark:                                 | N/A                                                |                                                    |
| `mode`                                             | [components.Mode](../../models/components/mode.md) | :heavy_check_mark:                                 | N/A                                                | card                                               |
| `label`                                            | *string*                                           | :heavy_check_mark:                                 | N/A                                                |                                                    |
| `canStorePaymentMethod`                            | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |                                                    |
| `canDelayCapture`                                  | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |                                                    |
| `context`                                          | *components.PaymentOptionContextContext*           | :heavy_minus_sign:                                 | N/A                                                |                                                    |