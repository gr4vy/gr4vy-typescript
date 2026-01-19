# ThreeDSecureScenario

## Example Usage

```typescript
import { ThreeDSecureScenario } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureScenario = {
  id: "157c8ed5-9f68-4792-afa8-1708bebf591d",
  merchantAccountId: "<id>",
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
  updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | *"three-d-secure-scenario"*                                                                            | :heavy_minus_sign:                                                                                     | Always `three-d-secure-scenario`.                                                                      | three-d-secure-scenario                                                                                |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | Unique identifier for the 3DS scenario                                                                 |                                                                                                        |
| `merchantAccountId`                                                                                    | *string*                                                                                               | :heavy_check_mark:                                                                                     | ID of the associated merchant account                                                                  |                                                                                                        |
| `createdAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | The date and time when this 3DS scenario was first created in our system.                              | 2013-07-16T19:23:00.000+00:00                                                                          |
| `updatedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | The date and time when this 3DS scenario was last updated in our system.                               | 2013-07-16T19:23:00.000+00:00                                                                          |
| `conditions`                                                                                           | [components.ThreeDSecureScenarioConditions](../../models/components/threedsecurescenarioconditions.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `outcome`                                                                                              | [components.ThreeDSecureScenarioOutcome](../../models/components/threedsecurescenariooutcome.md)       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |