# GetBuyerRequest

## Example Usage

```typescript
import { GetBuyerRequest } from "@gr4vy/sdk/models/operations";

let value: GetBuyerRequest = {
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  xGr4vyMerchantAccountId: "default",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `buyerId`                                               | *string*                                                | :heavy_check_mark:                                      | The ID of the buyer to retrieve.                        | fe26475d-ec3e-4884-9553-f7356683f7f9                    |
| `xGr4vyMerchantAccountId`                               | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. | default                                                 |