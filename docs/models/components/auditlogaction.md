# AuditLogAction

## Example Usage

```typescript
import { AuditLogAction } from "@gr4vy/sdk/models/components";

let value: AuditLogAction = "created";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created" | "updated" | "deleted" | "voided" | "captured" | Unrecognized<string>
```