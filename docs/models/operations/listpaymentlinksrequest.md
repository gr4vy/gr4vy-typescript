# ListPaymentLinksRequest

## Example Usage

```typescript
import { ListPaymentLinksRequest } from "@gr4vy/sdk/models/operations";

let value: ListPaymentLinksRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `cursor`                                                | *string*                                                | :heavy_minus_sign:                                      | A pointer to the page of results to return.             | ZXhhbXBsZTE                                             |
| `limit`                                                 | *number*                                                | :heavy_minus_sign:                                      | The maximum number of items that are returned.          | 20                                                      |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |