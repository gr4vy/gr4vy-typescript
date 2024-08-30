# PCIForwardAuthenticationDefinition

An available Vault Forward authentication definition that can be configured.

## Example Usage

```typescript
import { PCIForwardAuthenticationDefinition } from "@gr4vy/sdk/models/components";

let value: PCIForwardAuthenticationDefinition = {
    type: "vault-forward-authentication-definition",
    kind: "mle",
    title: "Message Level Encryption",
    description: "A way to set up payload encryption",
    fields: [
        {
            key: "private_api_key",
            displayName: "Private API key",
            required: true,
            format: "text",
            secret: true,
        },
    ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The type of this resource. It is always<br/>`vault-forward-authentication-definition`.                                       | vault-forward-authentication-definition                                                                                      |
| `kind`                                                                                                                       | [components.Kind](../../models/components/kind.md)                                                                           | :heavy_minus_sign:                                                                                                           | The kind of authentication to be used in a Vault Forward request.<br/>                                                       | mle                                                                                                                          |
| `title`                                                                                                                      | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The title of this authentication definition.                                                                                 | Message Level Encryption                                                                                                     |
| `description`                                                                                                                | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The description of this authentication definition.                                                                           | A way to set up payload encryption                                                                                           |
| `fields`                                                                                                                     | [components.PCIForwardAuthenticationDefinitionFields](../../models/components/pciforwardauthenticationdefinitionfields.md)[] | :heavy_minus_sign:                                                                                                           | A list of fields that can to be submitted when activating the<br/>authentication method.                                     |                                                                                                                              |