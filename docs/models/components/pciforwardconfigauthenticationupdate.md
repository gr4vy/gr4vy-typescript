# PCIForwardConfigAuthenticationUpdate

Request body to update a Vault Forward authentication method.

## Example Usage

```typescript
import { PCIForwardConfigAuthenticationUpdate } from "@gr4vy/sdk/models/components";

let value: PCIForwardConfigAuthenticationUpdate = {
    displayName: "My Message Level Encryption",
    fields: [
        {
            key: "private_key",
            value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
        },
    ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | A custom name for the authentication method. This will be shown in the Admin UI.                                                 | My Message Level Encryption                                                                                                      |
| `fields`                                                                                                                         | [components.PCIForwardConfigAuthenticationUpdateFields](../../models/components/pciforwardconfigauthenticationupdatefields.md)[] | :heavy_minus_sign:                                                                                                               | A list of fields, each containing a key-value pair for each field defined<br/>by the definition for this authentication method.  |                                                                                                                                  |