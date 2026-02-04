# DeleteThreeDsConfigurationRequest

## Example Usage

```typescript
import { DeleteThreeDsConfigurationRequest } from "@gr4vy/sdk/models/operations";

let value: DeleteThreeDsConfigurationRequest = {
  merchantAccountId: "merchant-12345",
  threeDsConfigurationId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `merchantAccountId`                                     | *string*                                                | :heavy_check_mark:                                      | The ID of the merchant account.                         | merchant-12345                                          |
| `threeDsConfigurationId`                                | *string*                                                | :heavy_check_mark:                                      | The ID of the 3DS configuration for a merchant account. | 1808f5e6-b49c-4db9-94fa-22371ea352f5                    |