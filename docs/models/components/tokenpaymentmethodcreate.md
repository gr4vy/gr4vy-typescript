# TokenPaymentMethodCreate

Payment Method ID

Payment Method ID to use in a transaction.

## Example Usage

```typescript
import { TokenPaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: TokenPaymentMethodCreate = {
    id: "a1108e0a-dcf4-4b92-9879-fce953f73ef7",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `method`                                                                                               | [components.TokenPaymentMethodCreateMethod](../../models/components/tokenpaymentmethodcreatemethod.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `securityCode`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `redirectUrl`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |