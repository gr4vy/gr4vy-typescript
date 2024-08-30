# RegisterDigitalWalletDomainRequest

## Example Usage

```typescript
import { RegisterDigitalWalletDomainRequest } from "@gr4vy/sdk/models/operations";

let value: RegisterDigitalWalletDomainRequest = {
    digitalWalletId: "537c6454-efb0-4b34-896c-3ca5acfbe2fd",
    digitalWalletDomain: {
        domainName: "guilty-hundred.com",
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `digitalWalletId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `digitalWalletDomain`                                                            | [components.DigitalWalletDomain](../../models/components/digitalwalletdomain.md) | :heavy_check_mark:                                                               | N/A                                                                              |