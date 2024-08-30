# AddVaultForwardConfigAuthenticationRequest

## Example Usage

```typescript
import { AddVaultForwardConfigAuthenticationRequest } from "@gr4vy/sdk/models/operations";

let value: AddVaultForwardConfigAuthenticationRequest = {
    configId: "46973e9d-88a7-44a6-abfe-be4ff0134ff4",
    pciForwardConfigAuthenticationRequest: {
        kind: "mle",
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `configId`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the Vault Forward configuration.                                                                           | 46973e9d-88a7-44a6-abfe-be4ff0134ff4                                                                                 |
| `pciForwardConfigAuthenticationRequest`                                                                              | [components.PCIForwardConfigAuthenticationRequest](../../models/components/pciforwardconfigauthenticationrequest.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |