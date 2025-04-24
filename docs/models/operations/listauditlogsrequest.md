# ListAuditLogsRequest

## Example Usage

```typescript
import { ListAuditLogsRequest } from "@gr4vy/sdk/models/operations";

let value: ListAuditLogsRequest = {
  cursor: "ZXhhbXBsZTE",
  action: "created",
  userId: "14b7b8c5-a6ba-4fb6-bbab-52d43c7f37ef",
  resourceType: "user",
  xGr4vyMerchantAccountId: "default",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                       | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | A pointer to the page of results to return.                                                                    | ZXhhbXBsZTE                                                                                                    |
| `limit`                                                                                                        | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | The maximum number of items that are at returned.                                                              | 20                                                                                                             |
| `action`                                                                                                       | [components.AuditLogAction](../../models/components/auditlogaction.md)                                         | :heavy_minus_sign:                                                                                             | Filters the results to only the items for which the `audit-log` has an `action` that matches this value.       | created                                                                                                        |
| `userId`                                                                                                       | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Filters the results to only the items for which the `user` has an `id` that matches this value.                | 14b7b8c5-a6ba-4fb6-bbab-52d43c7f37ef                                                                           |
| `resourceType`                                                                                                 | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Filters the results to only the items for which the `audit-log` has a `resource` that matches this type value. | user                                                                                                           |
| `xGr4vyMerchantAccountId`                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The ID of the merchant account to use for this request.                                                        | default                                                                                                        |