# VerifyCredentials

## Example Usage

```typescript
import { VerifyCredentials } from "@gr4vy/sdk/models/components";

let value: VerifyCredentials = {
  paymentServiceDefinitionId: "stripe-card",
  fields: [
    {
      key: "api_key",
      value: "key-12345",
    },
  ],
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentServiceDefinitionId`                                                                                                                   | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The ID of the payment service definition to verify the fields against                                                                          | stripe-card                                                                                                                                    |
| `paymentServiceId`                                                                                                                             | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The optional ID of the configured payment service. New fields will be merged with any existing fields already stored before they are verified. | fffd152a-9532-4087-9a4f-de58754210f0                                                                                                           |
| `fields`                                                                                                                                       | [components.Field](../../models/components/field.md)[]                                                                                         | :heavy_check_mark:                                                                                                                             | The fields and their values, or a set of updated fields to merge with existing values.                                                         |                                                                                                                                                |