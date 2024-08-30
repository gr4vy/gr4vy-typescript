# ClickToPayPaymentMethod

Base model with JSON encoders.

## Example Usage

```typescript
import { ClickToPayPaymentMethod } from "@gr4vy/sdk/models/components";

let value: ClickToPayPaymentMethod = {
    merchantTransactionId: "<value>",
    srcCorrelationId: "<value>",
    srcDpaId: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `method`                                                                                             | [components.ClickToPayPaymentMethodMethod](../../models/components/clicktopaypaymentmethodmethod.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `merchantTransactionId`                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `srcCorrelationId`                                                                                   | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `srcDpaId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `srcCxFlowId`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |