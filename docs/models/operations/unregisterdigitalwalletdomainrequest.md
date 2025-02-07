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
| `digitalWalletDomain`                                                            | [components.DigitalWalletDomain](../../models/components/digitalwalletdomain.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |