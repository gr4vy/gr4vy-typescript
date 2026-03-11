# AntiFraudDecision

## Example Usage

```typescript
import { AntiFraudDecision } from "@gr4vy/sdk/models/components";

let value: AntiFraudDecision = "accept";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"accept" | "error" | "exception" | "reject" | "review" | "skipped" | "pending" | Unrecognized<string>
```