# AntiFraudWebhookEventContext

Additional context for this event.

## Example Usage

```typescript
import { AntiFraudWebhookEventContext } from "@gr4vy/sdk/models/components";

let value: AntiFraudWebhookEventContext = {
    antiFraudServiceCheckId: "decision-1234",
    content: '{ "decision": "ACCEPT", "id": "decision-1234", "reason": "Manually verified" }',
    contentType: "application/json",
    decision: "ACCEPT",
    comment: "Manually verified",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `antiFraudServiceId`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | The unique ID of the anti-fraud service used.                                  |                                                                                |
| `antiFraudServiceName`                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The name of the anti-fraud service used.                                       |                                                                                |
| `antiFraudServiceDefinitionId`                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | The anti-fraud service definition used.                                        |                                                                                |
| `antiFraudServiceCheckId`                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | The external ID of the decision that's being updated.                          | decision-1234                                                                  |
| `content`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | The raw payload sent as a webhook.                                             | { "decision": "ACCEPT", "id": "decision-1234", "reason": "Manually verified" } |
| `contentType`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | The content type of the payload sent as a webhook.                             | application/json                                                               |
| `decision`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The parsed decision response from the anti-fraud provider webhook.             | ACCEPT                                                                         |
| `comment`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | Any comment that may have come with the webhook event.                         | Manually verified                                                              |