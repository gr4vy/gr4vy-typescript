# PCIForwardConfig

A configured Vault Forward configuration.

## Example Usage

```typescript
import { PCIForwardConfig } from "@gr4vy/sdk/models/components";

let value: PCIForwardConfig = {
    type: "vault-forward-config",
    id: "faaad066-30b4-4997-a438-242b0752d7e1",
    createdAt: new Date("2012-12-12T10:53:43+00:00"),
    updatedAt: new Date("2012-12-12T10:53:43+00:00"),
    merchantAccountId: "default",
    definitionId: "amadeus",
    displayName: "Amadeus",
    hosts: ["https://api.amadeus.com", "https://test.api.amadeus.com"],
    authentications: [
        {
            type: "vault-forward-config-authentication",
            id: "faaad066-30b4-4997-a438-242b0752d7e1",
            createdAt: new Date("2012-12-12T10:53:43+00:00"),
            updatedAt: new Date("2012-12-12T10:53:43+00:00"),
            kind: "mle",
            label: "My MLE",
            displayName: "My MLE",
            fields: [
                {
                    key: "secret_key",
                    value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
                },
            ],
            creator: {
                id: "77a76f7e-d2de-4bbc-ada9-d6a0015e6bd5",
                name: "John L",
                emailAddress: "john@example.com",
            },
        },
    ],
    creator: {
        id: "77a76f7e-d2de-4bbc-ada9-d6a0015e6bd5",
        name: "John L",
        emailAddress: "john@example.com",
    },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The type of this resource. It is always `vault-forward-config`.                                          | vault-forward-config                                                                                     |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The ID of this Vault Forward configuration.                                                              | faaad066-30b4-4997-a438-242b0752d7e1                                                                     |
| `createdAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The date and time when this configuration was created.                                                   | 2012-12-12T10:53:43+00:00                                                                                |
| `updatedAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The date and time when this configuration was last updated.                                              | 2012-12-12T10:53:43+00:00                                                                                |
| `merchantAccountId`                                                                                      | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The unique ID for a merchant account.                                                                    | default                                                                                                  |
| `definitionId`                                                                                           | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The ID of the Vault Forward definition.                                                                  | amadeus                                                                                                  |
| `displayName`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The display name for this configuration.                                                                 | Amadeus                                                                                                  |
| `hosts`                                                                                                  | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | The hosts where Vault Forward requests are allowed for this definition.                                  | [<br/>"https://api.amadeus.com",<br/>"https://test.api.amadeus.com"<br/>]                                |
| `authentications`                                                                                        | [components.PCIForwardConfigAuthentication](../../models/components/pciforwardconfigauthentication.md)[] | :heavy_minus_sign:                                                                                       | Authentication methods that can be applied in Vault Forward requests.                                    |                                                                                                          |
| `creator`                                                                                                | [components.PCIForwardConfigCreator](../../models/components/pciforwardconfigcreator.md)                 | :heavy_minus_sign:                                                                                       | The user who created the Vault Forward configuration.                                                    |                                                                                                          |