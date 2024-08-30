# AntiFraudDecisionUpdateErrorEventContext

Additional context for this event.

## Example Usage

```typescript
import { AntiFraudDecisionUpdateErrorEventContext } from "@gr4vy/sdk/models/components";

let value: AntiFraudDecisionUpdateErrorEventContext = {
    antiFraudServiceCheckId: "decision-1234",
    decision: "ACCEPT",
    reason: "Network Error",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `antiFraudServiceId`                                    | *string*                                                | :heavy_minus_sign:                                      | The unique ID of the anti-fraud service used.           |                                                         |
| `antiFraudServiceName`                                  | *string*                                                | :heavy_minus_sign:                                      | The name of the anti-fraud service used.                |                                                         |
| `antiFraudServiceDefinitionId`                          | *string*                                                | :heavy_minus_sign:                                      | The anti-fraud service definition used.                 |                                                         |
| `antiFraudServiceCheckId`                               | *string*                                                | :heavy_minus_sign:                                      | The external ID of the decision.                        | decision-1234                                           |
| `decision`                                              | *string*                                                | :heavy_minus_sign:                                      | The updated decision sent to the anti-fraud provider.   | ACCEPT                                                  |
| `reason`                                                | *string*                                                | :heavy_minus_sign:                                      | The reason we could not update the anti-fraud decision. | Network Error                                           |