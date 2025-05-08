# ListPaymentServiceDefinitionsRequest

## Example Usage

```typescript
import { ListPaymentServiceDefinitionsRequest } from "@gr4vy/sdk/models/operations";

let value: ListPaymentServiceDefinitionsRequest = {
  cursor: "ZXhhbXBsZTE",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `cursor`                                          | *string*                                          | :heavy_minus_sign:                                | A pointer to the page of results to return.       | ZXhhbXBsZTE                                       |
| `limit`                                           | *number*                                          | :heavy_minus_sign:                                | The maximum number of items that are at returned. | 20                                                |