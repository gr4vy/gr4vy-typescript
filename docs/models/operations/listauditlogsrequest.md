# ListAuditLogsRequest

## Example Usage

```typescript
import { ListAuditLogsRequest } from "@gr4vy/sdk/models/operations";

let value: ListAuditLogsRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `cursor`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `limit`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `action`                                                               | [components.AuditLogAction](../../models/components/auditlogaction.md) | :heavy_minus_sign:                                                     | An enumeration.                                                        |
| `userId`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `resourceType`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |