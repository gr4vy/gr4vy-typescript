# ReportSpecModel

## Example Usage

```typescript
import { ReportSpecModel } from "@gr4vy/sdk/models/components";

let value: ReportSpecModel = "detailed_settlement";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"transactions" | "transaction_retries" | "detailed_settlement" | "accounts_receivables" | Unrecognized<string>
```