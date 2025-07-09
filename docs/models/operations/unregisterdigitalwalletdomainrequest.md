# UnregisterDigitalWalletDomainRequest

## Example Usage

```typescript
import { UnregisterDigitalWalletDomainRequest } from "@gr4vy/sdk/models/operations";

let value: UnregisterDigitalWalletDomainRequest = {
  digitalWalletId: "",
  digitalWalletDomain: {
    domainName: "example.com",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `digitalWalletId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `merchantAccountId`                                                              | *string*                                                                         | :heavy_minus_sign:                                                               | The ID of the merchant account to use for this request.                          |                                                                                  |
| `digitalWalletDomain`                                                            | [components.DigitalWalletDomain](../../models/components/digitalwalletdomain.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |