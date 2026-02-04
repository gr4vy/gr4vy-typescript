# UpdateMerchantAccountRequest

## Example Usage

```typescript
import { UpdateMerchantAccountRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateMerchantAccountRequest = {
  merchantAccountId: "merchant-12345",
  merchantAccountUpdate: {
    accountUpdaterEnabled: true,
    asyncNetworkTokensEnabled: true,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `merchantAccountId`                                                                  | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the merchant account.                                                      | merchant-12345                                                                       |
| `merchantAccountUpdate`                                                              | [components.MerchantAccountUpdate](../../models/components/merchantaccountupdate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |