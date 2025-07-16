# FiservInstallmentOptions

## Example Usage

```typescript
import { FiservInstallmentOptions } from "@gr4vy/sdk/models/components";

let value: FiservInstallmentOptions = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `numberOfInstallments`                                                                     | *number*                                                                                   | :heavy_minus_sign:                                                                         | Passes the `order.installmentOptions.numberOfInstallments` field to the Fiserv API.        | 6                                                                                          |
| `installmentsInterest`                                                                     | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Passes the `order.installmentOptions.installmentsInterest` field to the Fiserv API.        | true                                                                                       |
| `installmentDelayMonths`                                                                   | *number*                                                                                   | :heavy_minus_sign:                                                                         | Passes the `order.installmentOptions.installmentDelayMonths` field to the Fiserv API.      | 1                                                                                          |
| `merchantAdviceCodeSupported`                                                              | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Passes the `order.installmentOptions.merchantAdviceCodeSupported` field to the Fiserv API. | true                                                                                       |