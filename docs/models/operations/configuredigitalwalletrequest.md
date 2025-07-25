# ConfigureDigitalWalletRequest

## Example Usage

```typescript
import { ConfigureDigitalWalletRequest } from "@gr4vy/sdk/models/operations";

let value: ConfigureDigitalWalletRequest = {
  digitalWalletCreate: {
    provider: "google",
    merchantName: "<value>",
    acceptTermsAndConditions: false,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `merchantAccountId`                                                              | *string*                                                                         | :heavy_minus_sign:                                                               | The ID of the merchant account to use for this request.                          |
| `digitalWalletCreate`                                                            | [components.DigitalWalletCreate](../../models/components/digitalwalletcreate.md) | :heavy_check_mark:                                                               | N/A                                                                              |