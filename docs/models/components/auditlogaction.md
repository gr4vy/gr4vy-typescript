# AuditLogAction

## Example Usage

```typescript
import { AuditLogAction } from "@gr4vy/sdk/models/components";

let value: AuditLogAction = "created";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"created" | "updated" | "deleted" | "voided" | "canceled" | "captured" | Unrecognized<string>
```