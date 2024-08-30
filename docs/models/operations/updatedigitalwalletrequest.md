# UpdateDigitalWalletRequest

## Example Usage

```typescript
import { UpdateDigitalWalletRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateDigitalWalletRequest = {
    digitalWalletId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    digitalWalletUpdate: {
        merchantName: "Gr4vy",
        domainNames: ["example.com"],
        merchantDisplayName: "Gr4vy",
        merchantCountryCode: "US",
        merchantUrl: "https://example.com",
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `digitalWalletId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the registered digital wallet.                                         | fe26475d-ec3e-4884-9553-f7356683f7f9                                             |
| `digitalWalletUpdate`                                                            | [components.DigitalWalletUpdate](../../models/components/digitalwalletupdate.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |