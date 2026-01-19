# ThreeDSecureScenarioOutcome

## Example Usage

```typescript
import { ThreeDSecureScenarioOutcome } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureScenarioOutcome = {
  version: "2.2.0",
  authentication: {
    transactionStatus: "Y",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The version of 3DS which will be simulated.                                                                                  | 2.2.0                                                                                                                        |
| `authentication`                                                                                                             | [components.ThreeDSecureScenarioOutcomeAuthentication](../../models/components/threedsecurescenariooutcomeauthentication.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `result`                                                                                                                     | [components.ThreeDSecureScenarioOutcomeResult](../../models/components/threedsecurescenariooutcomeresult.md)                 | :heavy_minus_sign:                                                                                                           | 3DS result value. Required if authentication status is "C".                                                                  | {<br/>"transaction_status": "Y"<br/>}                                                                                        |