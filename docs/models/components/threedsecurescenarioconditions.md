# ThreeDSecureScenarioConditions

## Example Usage

```typescript
import { ThreeDSecureScenarioConditions } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureScenarioConditions = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `firstName`                          | *string*                             | :heavy_minus_sign:                   | First name of the buyer to match.    |
| `lastName`                           | *string*                             | :heavy_minus_sign:                   | Last name of the buyer to match.     |
| `emailAddress`                       | *string*                             | :heavy_minus_sign:                   | Email address of the buyer to match. |
| `amount`                             | *number*                             | :heavy_minus_sign:                   | Amount of the transaction to match.  |
| `externalIdentifier`                 | *string*                             | :heavy_minus_sign:                   | External identifier to match.        |
| `cardNumber`                         | *string*                             | :heavy_minus_sign:                   | Card number to match.                |