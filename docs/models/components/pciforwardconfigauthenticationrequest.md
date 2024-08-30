# PCIForwardConfigAuthenticationRequest

Request body to create a Vault Forward authentication method.

## Example Usage

```typescript
import { PCIForwardConfigAuthenticationRequest } from "@gr4vy/sdk/models/components";

let value: PCIForwardConfigAuthenticationRequest = {
    kind: "mle",
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

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                             | [components.PCIForwardConfigAuthenticationRequestKind](../../models/components/pciforwardconfigauthenticationrequestkind.md)       | :heavy_check_mark:                                                                                                                 | The kind of authentication to be used in a Vault Forward request.<br/>                                                             | mle                                                                                                                                |
| `displayName`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | A custom name for the authentication method. This will be shown in the Admin UI.                                                   | My Message Level Encryption                                                                                                        |
| `fields`                                                                                                                           | [components.PCIForwardConfigAuthenticationRequestFields](../../models/components/pciforwardconfigauthenticationrequestfields.md)[] | :heavy_check_mark:                                                                                                                 | A list of fields, each containing a key-value pair for each field defined<br/>by the definition for this authentication method.    |                                                                                                                                    |