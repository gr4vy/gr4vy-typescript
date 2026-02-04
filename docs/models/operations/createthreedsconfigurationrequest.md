# CreateThreeDsConfigurationRequest

## Example Usage

```typescript
import { CreateThreeDsConfigurationRequest } from "@gr4vy/sdk/models/operations";

let value: CreateThreeDsConfigurationRequest = {
  merchantAccountId: "merchant-12345",
  merchantAccountThreeDSConfigurationCreate: {
    merchantAcquirerBin: "516327",
    merchantAcquirerId: "123456789012345",
    merchantName: "Acme Inc.",
    merchantCountryCode: "840",
    merchantCategoryCode: "1234",
    merchantUrl: "https://example.com",
    scheme: "visa",
    metadata: {},
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `merchantAccountId`                                                                                                          | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The ID of the merchant account.                                                                                              | merchant-12345                                                                                                               |
| `merchantAccountThreeDSConfigurationCreate`                                                                                  | [components.MerchantAccountThreeDSConfigurationCreate](../../models/components/merchantaccountthreedsconfigurationcreate.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |