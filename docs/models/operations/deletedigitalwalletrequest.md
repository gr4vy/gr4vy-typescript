# DeleteDigitalWalletRequest

## Example Usage

```typescript
import { DeleteDigitalWalletRequest } from "@gr4vy/sdk/models/operations";

let value: DeleteDigitalWalletRequest = {
  digitalWalletId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `digitalWalletId`                                       | *string*                                                | :heavy_check_mark:                                      | The ID of the digital wallet to delete.                 | 1808f5e6-b49c-4db9-94fa-22371ea352f5                    |
| `timeoutInSeconds`                                      | *number*                                                | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |