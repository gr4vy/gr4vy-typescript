# DeregisterDigitalWalletDomainRequest

## Example Usage

```typescript
import { DeregisterDigitalWalletDomainRequest } from "@gr4vy/sdk/models/operations";

let value: DeregisterDigitalWalletDomainRequest = {
    digitalWalletId: "00ef0422-eb21-464c-b9ab-8366c723ffda",
    digitalWalletDomain: {
        domainName: "perky-tadpole.com",
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `digitalWalletId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `digitalWalletDomain`                                                            | [components.DigitalWalletDomain](../../models/components/digitalwalletdomain.md) | :heavy_check_mark:                                                               | N/A                                                                              |