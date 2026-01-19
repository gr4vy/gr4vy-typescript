# ThreeDSecureScenarioOutcomeAuthenticationTransactionStatus

3DS transaction status.

## Example Usage

```typescript
import { ThreeDSecureScenarioOutcomeAuthenticationTransactionStatus } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureScenarioOutcomeAuthenticationTransactionStatus = "Y";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Y" | "N" | "A" | "R" | "U" | "C" | "timeout" | Unrecognized<string>
```