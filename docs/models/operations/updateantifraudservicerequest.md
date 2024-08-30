# UpdateAntiFraudServiceRequest

## Example Usage

```typescript
import { UpdateAntiFraudServiceRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateAntiFraudServiceRequest = {
    antiFraudServiceId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    antiFraudServiceUpdate: {
        antiFraudServiceDefinitionId: "sift-anti-fraud",
        displayName: "Sift Anti-Fraud Service.",
        active: true,
        reviewsEnabled: false,
        fields: [
            {
                key: "api_key",
                value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
            },
        ],
    },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `antiFraudServiceId`                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | The unique ID for an anti-fraud service.                                               | 8724fd24-5489-4a5d-90fd-0604df7d3b83                                                   |
| `antiFraudServiceUpdate`                                                               | [components.AntiFraudServiceUpdate](../../models/components/antifraudserviceupdate.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |