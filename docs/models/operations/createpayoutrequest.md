# CreatePayoutRequest

## Example Usage

```typescript
import { CreatePayoutRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePayoutRequest = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `merchantAccountId`                                                | *string*                                                           | :heavy_minus_sign:                                                 | The ID of the merchant account to use for this request.            |
| `payoutCreate`                                                     | [components.PayoutCreate](../../models/components/payoutcreate.md) | :heavy_check_mark:                                                 | N/A                                                                |