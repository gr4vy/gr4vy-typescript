# UpdateDigitalWalletRequest

## Example Usage

```typescript
import { UpdateDigitalWalletRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateDigitalWalletRequest = {
    digitalWalletId: "ad879eeb-9665-4b85-afbd-02bae0be2d78",
    digitalWalletUpdate: {
        merchantCountryCode: "DE",
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `digitalWalletId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `digitalWalletUpdate`                                                            | [components.DigitalWalletUpdate](../../models/components/digitalwalletupdate.md) | :heavy_check_mark:                                                               | N/A                                                                              |