# ListPaymentServicesRequest

## Example Usage

```typescript
import { ListPaymentServicesRequest } from "@gr4vy/sdk/models/operations";

let value: ListPaymentServicesRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `method`                                                | [components.Method](../../models/components/method.md)  | :heavy_minus_sign:                                      | Return any payment service for this method.             |                                                         |
| `cursor`                                                | *string*                                                | :heavy_minus_sign:                                      | A pointer to the page of results to return.             | ZXhhbXBsZTE                                             |
| `limit`                                                 | *number*                                                | :heavy_minus_sign:                                      | The maximum number of items that are at returned.       | 20                                                      |
| `deleted`                                               | *boolean*                                               | :heavy_minus_sign:                                      | Return any deleted payment service.                     | true                                                    |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |