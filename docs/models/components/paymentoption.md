# PaymentOption

Base model with JSON encoders.

## Example Usage

```typescript
import { PaymentOption } from "@gr4vy/sdk/models/components";

let value: PaymentOption = {
  method: "<value>",
  mode: "gift-card",
  canStorePaymentMethod: false,
  canDelayCapture: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [components.PaymentOptionType](../../models/components/paymentoptiontype.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `method`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `iconUrl`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `mode`                                                                       | [components.Mode](../../models/components/mode.md)                           | :heavy_check_mark:                                                           | An enumeration.                                                              |
| `label`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `canStorePaymentMethod`                                                      | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `canDelayCapture`                                                            | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `context`                                                                    | *components.Context*                                                         | :heavy_minus_sign:                                                           | N/A                                                                          |