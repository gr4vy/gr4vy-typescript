# AddBuyerRequest

## Example Usage

```typescript
import { AddBuyerRequest } from "@gr4vy/sdk/models/operations";

let value: AddBuyerRequest = {
  buyerCreate: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `merchantAccountId`                                              | *string*                                                         | :heavy_minus_sign:                                               | The ID of the merchant account to use for this request.          |
| `buyerCreate`                                                    | [components.BuyerCreate](../../models/components/buyercreate.md) | :heavy_check_mark:                                               | N/A                                                              |