# AntiFraudDecisionEventContext

Additional context for this event.

## Example Usage

```typescript
import { AntiFraudDecisionEventContext } from "@gr4vy/sdk/models/components";

let value: AntiFraudDecisionEventContext = {
    antiFraudServiceCheckId: "decision-1234",
    decision: "ACCEPT",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `antiFraudServiceId`                                                | *string*                                                            | :heavy_minus_sign:                                                  | The unique ID of the anti-fraud service used.                       |                                                                     |
| `antiFraudServiceName`                                              | *string*                                                            | :heavy_minus_sign:                                                  | The name of the anti-fraud service used.                            |                                                                     |
| `antiFraudServiceDefinitionId`                                      | *string*                                                            | :heavy_minus_sign:                                                  | The anti-fraud service definition used.                             |                                                                     |
| `antiFraudServiceCheckId`                                           | *string*                                                            | :heavy_minus_sign:                                                  | The external ID of the decision.                                    | decision-1234                                                       |
| `request`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | The HTTP body sent to fetch a decision.                             |                                                                     |
| `response`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | The HTTP body received from the anti-fraud provider.                |                                                                     |
| `responseStatusCode`                                                | *number*                                                            | :heavy_minus_sign:                                                  | The HTTP response status code from the anti-fraud provider.         |                                                                     |
| `decision`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | The parsed decision response from the anti-fraud provider response. | ACCEPT                                                              |