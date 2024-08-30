# Action

Filters the results to only the items for which the `audit-log` has an
`action` that matches this value.

## Example Usage

```typescript
import { Action } from "@gr4vy/sdk/models/operations";

let value: Action = "created";
```

## Values

```typescript
"created" | "updated" | "deleted"
```