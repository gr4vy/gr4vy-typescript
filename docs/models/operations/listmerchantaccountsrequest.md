# ListMerchantAccountsRequest

## Example Usage

```typescript
import { ListMerchantAccountsRequest } from "@gr4vy/sdk/models/operations";

let value: ListMerchantAccountsRequest = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `cursor`                                          | *string*                                          | :heavy_minus_sign:                                | A pointer to the page of results to return.       | ZXhhbXBsZTE                                       |
| `limit`                                           | *number*                                          | :heavy_minus_sign:                                | The maximum number of items that are at returned. | 20                                                |
| `search`                                          | *string*                                          | :heavy_minus_sign:                                | The search term to filter merchant accounts by.   | merchant-12345                                    |