# DefinitionField

A single field that needs to be submitted for a payment service when it is created.

## Example Usage

```typescript
import { DefinitionField } from "@gr4vy/sdk/models/components";

let value: DefinitionField = {
  key: "private_api_key",
  displayName: "Private API key",
  required: true,
  format: "number",
  secret: true,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                         | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The key of a field that can be submitted.                                                                                     | private_api_key                                                                                                               |
| `displayName`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The human readable name for this field.                                                                                       | Private API key                                                                                                               |
| `required`                                                                                                                    | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | Defines if this field is required when the service is created.                                                                | true                                                                                                                          |
| `format`                                                                                                                      | [components.DefinitionFieldFormat](../../models/components/definitionfieldformat.md)                                          | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `secret`                                                                                                                      | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | Defines if this field is secret. When `true` the field's value is not returned when querying the payment service information. | true                                                                                                                          |