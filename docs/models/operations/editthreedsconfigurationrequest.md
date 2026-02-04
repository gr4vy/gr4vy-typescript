# EditThreeDsConfigurationRequest

## Example Usage

```typescript
import { EditThreeDsConfigurationRequest } from "@gr4vy/sdk/models/operations";

let value: EditThreeDsConfigurationRequest = {
  merchantAccountId: "merchant-12345",
  threeDsConfigurationId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
  merchantAccountThreeDSConfigurationUpdate: {},
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `merchantAccountId`                                                                                                          | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The ID of the merchant account.                                                                                              | merchant-12345                                                                                                               |
| `threeDsConfigurationId`                                                                                                     | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The ID of the 3DS configuration for a merchant account.                                                                      | 1808f5e6-b49c-4db9-94fa-22371ea352f5                                                                                         |
| `merchantAccountThreeDSConfigurationUpdate`                                                                                  | [components.MerchantAccountThreeDSConfigurationUpdate](../../models/components/merchantaccountthreedsconfigurationupdate.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |