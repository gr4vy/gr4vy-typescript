# PCIForwardDefinition

An available Vault Forward definition that can be configured.

## Example Usage

```typescript
import { PCIForwardDefinition } from "@gr4vy/sdk/models/components";

let value: PCIForwardDefinition = {
    id: "amadeus",
    type: "vault-forward-definition",
    displayName: "Amadeus",
    hosts: ["https://api.amadeus.com", "https://test.api.amadeus.com"],
    authentications: [
        {
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
        },
    ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The ID of the Vault Forward definition.                                                                          | amadeus                                                                                                          |
| `type`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The type of this resource. It is always `vault-forward-definition`.                                              | vault-forward-definition                                                                                         |
| `displayName`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The display name of this definition.                                                                             | Amadeus                                                                                                          |
| `hosts`                                                                                                          | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | The hosts where Vault Forward requests are allowed for this definition.                                          | [<br/>"https://api.amadeus.com",<br/>"https://test.api.amadeus.com"<br/>]                                        |
| `authentications`                                                                                                | [components.PCIForwardAuthenticationDefinition](../../models/components/pciforwardauthenticationdefinition.md)[] | :heavy_minus_sign:                                                                                               | Available authentication methods to be configured for this definition.                                           |                                                                                                                  |