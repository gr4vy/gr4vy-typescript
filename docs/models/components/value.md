# Value

Amount value compare the transaction to.

## Example Usage

```typescript
import { Value } from "@gr4vy/sdk/models/components";

let value: Value = {
    currency: "USD",
    value: 1,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `currency`                                        | *string*                                          | :heavy_minus_sign:                                | Currency ISO codes to compare the transaction to. | USD                                               |
| `value`                                           | *number*                                          | :heavy_minus_sign:                                | Amount value to compare transaction value to.     | 1                                                 |