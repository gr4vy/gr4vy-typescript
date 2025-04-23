# AntiFraudDecision

## Example Usage

```typescript
import { AntiFraudDecision } from "@gr4vy/sdk/models/components";

let value: AntiFraudDecision = "accept";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"accept" | "error" | "exception" | "reject" | "review" | "skipped" | Unrecognized<string>
```