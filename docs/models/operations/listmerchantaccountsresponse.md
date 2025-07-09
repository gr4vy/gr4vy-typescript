# ListMerchantAccountsResponse

## Example Usage

```typescript
import { ListMerchantAccountsResponse } from "@gr4vy/sdk/models/operations";

let value: ListMerchantAccountsResponse = {
  result: {
    items: [
      {
        id: "merchant-12345",
        displayName: "John Doe",
        accountUpdaterEnabled: true,
        createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
        updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `result`                                                                   | [components.MerchantAccounts](../../models/components/merchantaccounts.md) | :heavy_check_mark:                                                         | N/A                                                                        |