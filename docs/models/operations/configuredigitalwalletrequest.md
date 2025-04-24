# ConfigureDigitalWalletRequest

## Example Usage

```typescript
import { ConfigureDigitalWalletRequest } from "@gr4vy/sdk/models/operations";

let value: ConfigureDigitalWalletRequest = {
  xGr4vyMerchantAccountId: "default",
  digitalWalletCreate: {
    provider: "google",
    merchantName: "<value>",
    merchantCountryCode: "US",
    acceptTermsAndConditions: false,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `timeoutInSeconds`                                                               | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `xGr4vyMerchantAccountId`                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | The ID of the merchant account to use for this request.                          | default                                                                          |
| `digitalWalletCreate`                                                            | [components.DigitalWalletCreate](../../models/components/digitalwalletcreate.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |