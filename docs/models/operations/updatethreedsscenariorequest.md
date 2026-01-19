# UpdateThreeDsScenarioRequest

## Example Usage

```typescript
import { UpdateThreeDsScenarioRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateThreeDsScenarioRequest = {
  threeDsScenarioId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  threeDSecureScenarioUpdate: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `threeDsScenarioId`                                                                            | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the 3DS scenario                                                                     | 7099948d-7286-47e4-aad8-b68f7eb44591                                                           |
| `merchantAccountId`                                                                            | *string*                                                                                       | :heavy_minus_sign:                                                                             | The ID of the merchant account to use for this request.                                        |                                                                                                |
| `threeDSecureScenarioUpdate`                                                                   | [components.ThreeDSecureScenarioUpdate](../../models/components/threedsecurescenarioupdate.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |