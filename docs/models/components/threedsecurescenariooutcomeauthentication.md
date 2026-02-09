# ThreeDSecureScenarioOutcomeAuthentication

## Example Usage

```typescript
import { ThreeDSecureScenarioOutcomeAuthentication } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureScenarioOutcomeAuthentication = {
  transactionStatus: "Y",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    | Example                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transactionStatus`                                                                                                                                            | [components.ThreeDSecureScenarioOutcomeAuthenticationTransactionStatus](../../models/components/threedsecurescenariooutcomeauthenticationtransactionstatus.md) | :heavy_check_mark:                                                                                                                                             | 3DS transaction status.                                                                                                                                        | **Example 1:** Y<br/>**Example 2:** N<br/>**Example 3:** A<br/>**Example 4:** R<br/>**Example 5:** U<br/>**Example 6:** C<br/>**Example 7:** timeout           |