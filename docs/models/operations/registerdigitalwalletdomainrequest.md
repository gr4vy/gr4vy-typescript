# RegisterDigitalWalletDomainRequest

## Example Usage

```typescript
import { RegisterDigitalWalletDomainRequest } from "@gr4vy/sdk/models/operations";

let value: RegisterDigitalWalletDomainRequest = {
    digitalWalletId: "64ad7334-ec1b-4781-b36a-08088d100efa",
    digitalWalletDomain: {
        domainName: "timely-patriot.com",
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `digitalWalletId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `digitalWalletDomain`                                                            | [components.DigitalWalletDomain](../../models/components/digitalwalletdomain.md) | :heavy_check_mark:                                                               | N/A                                                                              |