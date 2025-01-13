# AuditLogAction

Filters the results to only the items for which the `audit-log` has an `action` that matches this value.

## Example Usage

```typescript
import { AuditLogAction } from "@gr4vy/sdk/models/operations";

let value: AuditLogAction = "created";
```

## Values

```typescript
"created" | "updated" | "deleted" | "voided" | "captured"
```