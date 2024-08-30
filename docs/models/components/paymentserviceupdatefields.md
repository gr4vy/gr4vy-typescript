# PaymentServiceUpdateFields

A key-value pair that represents a field defined in the definition for this payment service.

## Example Usage

```typescript
import { PaymentServiceUpdateFields } from "@gr4vy/sdk/models/components";

let value: PaymentServiceUpdateFields = {
    key: "private_key",
    value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `key`                                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | The key of the field to set a value for.                                                            | private_key                                                                                         |
| `value`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | The value of a field to set; you can unset optional fields by setting this to an empty string `""`. | sk_test_26PHem9AhJZvU623DfE1x4sd                                                                    |