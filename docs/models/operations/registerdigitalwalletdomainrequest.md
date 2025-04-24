# RegisterDigitalWalletDomainRequest

## Example Usage

```typescript
import { RegisterDigitalWalletDomainRequest } from "@gr4vy/sdk/models/operations";

let value: RegisterDigitalWalletDomainRequest = {
  digitalWalletId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
  xGr4vyMerchantAccountId: "default",
  digitalWalletDomain: {
    domainName: "example.com",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `digitalWalletId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the digital wallet to remove a domain for.                             | 1808f5e6-b49c-4db9-94fa-22371ea352f5                                             |
| `timeoutInSeconds`                                                               | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `xGr4vyMerchantAccountId`                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | The ID of the merchant account to use for this request.                          | default                                                                          |
| `digitalWalletDomain`                                                            | [components.DigitalWalletDomain](../../models/components/digitalwalletdomain.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |