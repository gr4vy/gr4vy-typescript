# UpdateDigitalWalletRequest

## Example Usage

```typescript
import { UpdateDigitalWalletRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateDigitalWalletRequest = {
  digitalWalletId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
  digitalWalletUpdate: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `digitalWalletId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the digital wallet to edit.                                            | 1808f5e6-b49c-4db9-94fa-22371ea352f5                                             |
| `merchantAccountId`                                                              | *string*                                                                         | :heavy_minus_sign:                                                               | The ID of the merchant account to use for this request.                          |                                                                                  |
| `digitalWalletUpdate`                                                            | [components.DigitalWalletUpdate](../../models/components/digitalwalletupdate.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |