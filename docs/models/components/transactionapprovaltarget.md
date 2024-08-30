# TransactionApprovalTarget

The browser target that an approval URL must be opened in. If `any` or `null`, then there is no specific requirement.

## Example Usage

```typescript
import { TransactionApprovalTarget } from "@gr4vy/sdk/models/components";

let value: TransactionApprovalTarget = "any";
```

## Values

```typescript
"any" | "new_window"
```