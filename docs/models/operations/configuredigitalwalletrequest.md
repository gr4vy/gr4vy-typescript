# ConfigureDigitalWalletRequest

## Example Usage

```typescript
import { ConfigureDigitalWalletRequest } from "@gr4vy/sdk/models/operations";

let value: ConfigureDigitalWalletRequest = {
  digitalWalletCreate: {
    provider: "google",
    merchantName: "<value>",
    merchantCountryCode: "US",
    acceptTermsAndConditions: false,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `timeoutInSeconds`                                                               | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `merchantAccountId`                                                              | *string*                                                                         | :heavy_minus_sign:                                                               | The ID of the merchant account to use for this request.                          |
| `digitalWalletCreate`                                                            | [components.DigitalWalletCreate](../../models/components/digitalwalletcreate.md) | :heavy_check_mark:                                                               | N/A                                                                              |