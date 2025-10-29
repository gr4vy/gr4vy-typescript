# PaymentOptionOutput

## Example Usage

```typescript
import { PaymentOptionOutput } from "@gr4vy/sdk/models/components";

let value: PaymentOptionOutput = {
  method: "<value>",
  mode: "card",
  canStorePaymentMethod: false,
  canDelayCapture: false,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |                                                    |
| `method`                                           | *string*                                           | :heavy_check_mark:                                 | N/A                                                |                                                    |
| `iconUrl`                                          | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |                                                    |
| `mode`                                             | [components.Mode](../../models/components/mode.md) | :heavy_check_mark:                                 | N/A                                                | card                                               |
| `label`                                            | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |                                                    |
| `canStorePaymentMethod`                            | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |                                                    |
| `canDelayCapture`                                  | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |                                                    |
| `context`                                          | *components.Context*                               | :heavy_minus_sign:                                 | N/A                                                |                                                    |