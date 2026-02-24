# DlocalPIXSubscriptionAmountOptions

## Example Usage

```typescript
import { DlocalPIXSubscriptionAmountOptions } from "@gr4vy/sdk/models/components";

let value: DlocalPIXSubscriptionAmountOptions = {
  type: "FIXED",
  minValue: "10.00",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [components.DlocalPIXSubscriptionAmountOptionsType](../../models/components/dlocalpixsubscriptionamountoptionstype.md)     | :heavy_check_mark:                                                                                                         | Indicates the amount type unit for the subscription. Allowed values are: `FIXED`, `VARIABLE`.                              | FIXED                                                                                                                      |
| `value`                                                                                                                    | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Fixed subscription amount in local currency. Required only for fixed amount subscriptions depending on the payment method. | 10.00                                                                                                                      |
| `minValue`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Minimum payer enrollment limit, not minimum recurring charge amount.                                                       | 10.00                                                                                                                      |