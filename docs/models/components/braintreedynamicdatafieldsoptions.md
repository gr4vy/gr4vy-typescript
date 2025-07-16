# BraintreeDynamicDataFieldsOptions

## Example Usage

```typescript
import { BraintreeDynamicDataFieldsOptions } from "@gr4vy/sdk/models/components";

let value: BraintreeDynamicDataFieldsOptions = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `threeDsAuthStatus`                                                                                                     | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Passes the 3DS status to the Braintree API using `customFields` with the key set to the value of `three_ds_auth_status` | threeDStatus                                                                                                            |
| `purchaseOrderNumber`                                                                                                   | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Passes the `transaction.purchaseOrderNumber` field when creating a new transaction.                                     | po-12345                                                                                                                |