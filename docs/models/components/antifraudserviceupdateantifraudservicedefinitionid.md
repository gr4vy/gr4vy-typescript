# AntiFraudServiceUpdateAntiFraudServiceDefinitionId

The name of the Anti-Fraud service provider.
During update request, this value is used for validation only but
the underlying service can not be changed for an existing service.

## Example Usage

```typescript
import { AntiFraudServiceUpdateAntiFraudServiceDefinitionId } from "@gr4vy/sdk/models/components";

let value: AntiFraudServiceUpdateAntiFraudServiceDefinitionId = "sift-anti-fraud";
```

## Values

```typescript
"cybersource-anti-fraud" | "forter-anti-fraud" | "sift-anti-fraud"
```