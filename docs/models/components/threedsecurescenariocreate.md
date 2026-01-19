# ThreeDSecureScenarioCreate

## Example Usage

```typescript
import { ThreeDSecureScenarioCreate } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureScenarioCreate = {
  conditions: {},
  outcome: {
    version: "2.2.0",
    authentication: {
      transactionStatus: "Y",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                           | [components.ThreeDSecureScenarioConditions](../../models/components/threedsecurescenarioconditions.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `outcome`                                                                                              | [components.ThreeDSecureScenarioOutcome](../../models/components/threedsecurescenariooutcome.md)       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |