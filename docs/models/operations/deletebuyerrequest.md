# DeleteBuyerRequest

## Example Usage

```typescript
import { DeleteBuyerRequest } from "@gr4vy/sdk/models/operations";

let value: DeleteBuyerRequest = {
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `buyerId`                                               | *string*                                                | :heavy_check_mark:                                      | The ID of the buyer to delete.                          | fe26475d-ec3e-4884-9553-f7356683f7f9                    |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |