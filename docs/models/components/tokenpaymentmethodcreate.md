# TokenPaymentMethodCreate

Payment Method ID

Payment Method ID to use in a transaction.

## Example Usage

```typescript
import { TokenPaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: TokenPaymentMethodCreate = {
    id: "9cdb1a84-22bb-4679-9232-2715bf0cbb1e",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `method`                                                                                               | [components.TokenPaymentMethodCreateMethod](../../models/components/tokenpaymentmethodcreatemethod.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `securityCode`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `redirectUrl`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |