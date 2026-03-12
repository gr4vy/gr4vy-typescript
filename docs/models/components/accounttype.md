# AccountType

Specify whether this is a `checking` or `savings` account

## Example Usage

```typescript
import { AccountType } from "@gr4vy/sdk/models/components";

let value: AccountType = "checking";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"checking" | "savings" | Unrecognized<string>
```