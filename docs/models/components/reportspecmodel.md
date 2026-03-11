# ReportSpecModel

## Example Usage

```typescript
import { ReportSpecModel } from "@gr4vy/sdk/models/components";

let value: ReportSpecModel = "detailed_settlement";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"transactions" | "transaction_retries" | "detailed_settlement" | "accounts_receivables" | Unrecognized<string>
```