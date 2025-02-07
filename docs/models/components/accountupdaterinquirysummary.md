# AccountUpdaterInquirySummary

Base model with JSON encoders.

## Example Usage

```typescript
import { AccountUpdaterInquirySummary } from "@gr4vy/sdk/models/components";

let value: AccountUpdaterInquirySummary = {
  type: "account-updater-inquiry",
  id: "aadb3ea8-5ad6-408b-8c3d-82da77c8d619",
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.AccountUpdaterInquirySummaryType](../../models/components/accountupdaterinquirysummarytype.md) | :heavy_minus_sign:                                                                                         | Always `account-updater-inquiry`                                                                           | account-updater-inquiry                                                                                    |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID for the account updater inquiry.                                                                    | aadb3ea8-5ad6-408b-8c3d-82da77c8d619                                                                       |
| `paymentMethodId`                                                                                          | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the payment method                                                                               | ef9496d8-53a5-4aad-8ca2-00eb68334389                                                                       |