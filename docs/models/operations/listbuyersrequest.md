# ListBuyersRequest

## Example Usage

```typescript
import { ListBuyersRequest } from "@gr4vy/sdk/models/operations";

let value: ListBuyersRequest = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | A pointer to the page of results to return.                                                                      |
| `limit`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The maximum number of items that are at returned.                                                                |
| `search`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Filters the results to only the buyers for which the `display_name` or `external_identifier` matches this value. |
| `externalIdentifier`                                                                                             | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Filters the results to only the buyers for which the `external_identifier` matches this value.                   |