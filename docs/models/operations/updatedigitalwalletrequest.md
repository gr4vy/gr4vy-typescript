# UpdateDigitalWalletRequest

## Example Usage

```typescript
import { UpdateDigitalWalletRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateDigitalWalletRequest = {
    digitalWalletId: "9da3f2ce-da7e-423f-a257-411faf4b7544",
    digitalWalletUpdate: {
        merchantCountryCode: "US",
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `digitalWalletId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `digitalWalletUpdate`                                                            | [components.DigitalWalletUpdate](../../models/components/digitalwalletupdate.md) | :heavy_check_mark:                                                               | N/A                                                                              |