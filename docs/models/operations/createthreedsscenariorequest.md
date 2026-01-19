# CreateThreeDsScenarioRequest

## Example Usage

```typescript
import { CreateThreeDsScenarioRequest } from "@gr4vy/sdk/models/operations";

let value: CreateThreeDsScenarioRequest = {
  threeDSecureScenarioCreate: {
    conditions: {},
    outcome: {
      version: "2.2.0",
      authentication: {
        transactionStatus: "Y",
      },
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `merchantAccountId`                                                                            | *string*                                                                                       | :heavy_minus_sign:                                                                             | The ID of the merchant account to use for this request.                                        |
| `threeDSecureScenarioCreate`                                                                   | [components.ThreeDSecureScenarioCreate](../../models/components/threedsecurescenariocreate.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |