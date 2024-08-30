# DeregisterDigitalWalletDomainRequest

## Example Usage

```typescript
import { DeregisterDigitalWalletDomainRequest } from "@gr4vy/sdk/models/operations";

let value: DeregisterDigitalWalletDomainRequest = {
    digitalWalletId: "75779291-77de-4ac6-86ec-b573409e3eb1",
    digitalWalletDomain: {
        domainName: "vital-fantasy.name",
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `digitalWalletId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `digitalWalletDomain`                                                            | [components.DigitalWalletDomain](../../models/components/digitalwalletdomain.md) | :heavy_check_mark:                                                               | N/A                                                                              |