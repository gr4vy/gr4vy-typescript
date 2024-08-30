# AntiFraudDecisionSkippedEventContext

Additional context for this event.

## Example Usage

```typescript
import { AntiFraudDecisionSkippedEventContext } from "@gr4vy/sdk/models/components";

let value: AntiFraudDecisionSkippedEventContext = {
    reason: "Missing billing address",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `antiFraudServiceId`                                 | *string*                                             | :heavy_minus_sign:                                   | The unique ID of the anti-fraud service used.        |                                                      |
| `antiFraudServiceName`                               | *string*                                             | :heavy_minus_sign:                                   | The name of the anti-fraud service used.             |                                                      |
| `antiFraudServiceDefinitionId`                       | *string*                                             | :heavy_minus_sign:                                   | The anti-fraud service definition used.              |                                                      |
| `reason`                                             | *string*                                             | :heavy_minus_sign:                                   | The reason we could not get the anti-fraud decision. | Missing billing address                              |