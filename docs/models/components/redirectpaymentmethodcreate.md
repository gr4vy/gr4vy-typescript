# RedirectPaymentMethodCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { RedirectPaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: RedirectPaymentMethodCreate = {
    method: "cashapp",
    country: "DE",
    currency: "EUR",
    redirectUrl: "https://crazy-ophthalmologist.biz",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `method`                                                                                                     | [components.RedirectPaymentMethodCreateMethod](../../models/components/redirectpaymentmethodcreatemethod.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `country`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | DE                                                                                                           |
| `currency`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | EUR                                                                                                          |
| `redirectUrl`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `buyerExternalIdentifier`                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `buyerId`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `externalIdentifier`                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |