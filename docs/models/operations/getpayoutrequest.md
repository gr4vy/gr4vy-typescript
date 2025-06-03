# GetPayoutRequest

## Example Usage

```typescript
import { GetPayoutRequest } from "@gr4vy/sdk/models/operations";

let value: GetPayoutRequest = {
  payoutId: "aeaf011a-7882-4fe2-801e-1f87ecfb13b0",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `payoutId`                                              | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `applicationName`                                       | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |