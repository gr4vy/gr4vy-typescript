# GetPayoutRequest

## Example Usage

```typescript
import { GetPayoutRequest } from "@gr4vy/sdk/models/operations";

let value: GetPayoutRequest = {
  payoutId: "aeaf011a-7882-4fe2-801e-1f87ecfb13b0",
  xGr4vyMerchantAccountId: "default",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `payoutId`                                              | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |                                                         |
| `xGr4vyMerchantAccountId`                               | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. | default                                                 |