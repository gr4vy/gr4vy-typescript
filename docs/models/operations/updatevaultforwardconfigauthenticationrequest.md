# UpdateVaultForwardConfigAuthenticationRequest

## Example Usage

```typescript
import { UpdateVaultForwardConfigAuthenticationRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateVaultForwardConfigAuthenticationRequest = {
    configId: "46973e9d-88a7-44a6-abfe-be4ff0134ff4",
    authenticationId: "46973e9d-88a7-44a6-abfe-be4ff0134ff4",
    pciForwardConfigAuthenticationUpdate: {
        displayName: "My Message Level Encryption",
        fields: [
            {
                key: "private_key",
                value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
            },
        ],
    },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `configId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The ID of the Vault Forward configuration.                                                                         | 46973e9d-88a7-44a6-abfe-be4ff0134ff4                                                                               |
| `authenticationId`                                                                                                 | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The ID of the Vault Forward authentication method.                                                                 | 46973e9d-88a7-44a6-abfe-be4ff0134ff4                                                                               |
| `pciForwardConfigAuthenticationUpdate`                                                                             | [components.PCIForwardConfigAuthenticationUpdate](../../models/components/pciforwardconfigauthenticationupdate.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |