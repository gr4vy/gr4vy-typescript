# PCIForwardConfigAuthentications

A list of configured Vault Forward authentication methods.

## Example Usage

```typescript
import { PCIForwardConfigAuthentications } from "@gr4vy/sdk/models/components";

let value: PCIForwardConfigAuthentications = {
    items: [
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
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                  | [components.PCIForwardConfigAuthentication](../../models/components/pciforwardconfigauthentication.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |