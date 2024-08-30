# AntiFraudDecisionErrorEventContext

Additional context for this event.

## Example Usage

```typescript
import { AntiFraudDecisionErrorEventContext } from "@gr4vy/sdk/models/components";

let value: AntiFraudDecisionErrorEventContext = {
    reason: "Network Error",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `antiFraudServiceId`                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | The unique ID of the anti-fraud service used.                                   |                                                                                 |
| `antiFraudServiceName`                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | The name of the anti-fraud service used.                                        |                                                                                 |
| `antiFraudServiceDefinitionId`                                                  | *string*                                                                        | :heavy_minus_sign:                                                              | The anti-fraud service definition used.                                         |                                                                                 |
| `statusCode`                                                                    | *number*                                                                        | :heavy_minus_sign:                                                              | The HTTP response status code from the anti-fraud provider, if we received any. |                                                                                 |
| `reason`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | The reason we could not get the anti-fraud decision.                            | Network Error                                                                   |