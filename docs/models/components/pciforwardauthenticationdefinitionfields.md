# PCIForwardAuthenticationDefinitionFields

A single field that can be submitted for an authentication method when
it is created.

## Example Usage

```typescript
import { PCIForwardAuthenticationDefinitionFields } from "@gr4vy/sdk/models/components";

let value: PCIForwardAuthenticationDefinitionFields = {
    key: "private_api_key",
    displayName: "Private API key",
    required: true,
    format: "text",
    secret: true,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                      | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The key of a field that can be submitted.                                                                                  | private_api_key                                                                                                            |
| `displayName`                                                                                                              | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The name to display for a field in the dashboard.                                                                          | Private API key                                                                                                            |
| `required`                                                                                                                 | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | Defines if this field is required when the authentication method<br/>is created.                                           | true                                                                                                                       |
| `format`                                                                                                                   | [components.PCIForwardAuthenticationDefinitionFormat](../../models/components/pciforwardauthenticationdefinitionformat.md) | :heavy_minus_sign:                                                                                                         | Defines the type of input that needs to be rendered for this field.                                                        | text                                                                                                                       |
| `secret`                                                                                                                   | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | Defines if this field is secret. When `true` the field is not<br/>returned when querying the authentication method.        | true                                                                                                                       |