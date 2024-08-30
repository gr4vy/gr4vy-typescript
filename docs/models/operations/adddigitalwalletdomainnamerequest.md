# AddDigitalWalletDomainNameRequest

## Example Usage

```typescript
import { AddDigitalWalletDomainNameRequest } from "@gr4vy/sdk/models/operations";

let value: AddDigitalWalletDomainNameRequest = {
    digitalWalletId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    digitalWalletDomain: {
        domainName: "example.com",
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `digitalWalletId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the registered digital wallet.                                         | fe26475d-ec3e-4884-9553-f7356683f7f9                                             |
| `digitalWalletDomain`                                                            | [components.DigitalWalletDomain](../../models/components/digitalwalletdomain.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |