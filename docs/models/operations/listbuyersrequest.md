# ListBuyersRequest

## Example Usage

```typescript
import { ListBuyersRequest } from "@gr4vy/sdk/models/operations";

let value: ListBuyersRequest = {
  cursor: "ZXhhbXBsZTE",
  search: "John",
  externalIdentifier: "buyer-12345",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | A pointer to the page of results to return.                                                                      | ZXhhbXBsZTE                                                                                                      |
| `limit`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The maximum number of items that are at returned.                                                                | 20                                                                                                               |
| `search`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Filters the results to only the buyers for which the `display_name` or `external_identifier` matches this value. | John                                                                                                             |
| `externalIdentifier`                                                                                             | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Filters the results to only the buyers for which the `external_identifier` matches this value.                   | buyer-12345                                                                                                      |