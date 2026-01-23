# ThreeDSecureScenarioConditions

## Example Usage

```typescript
import { ThreeDSecureScenarioConditions } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureScenarioConditions = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `firstName`                          | *string*                             | :heavy_minus_sign:                   | First name of the buyer to match.    | John                                 |
| `lastName`                           | *string*                             | :heavy_minus_sign:                   | Last name of the buyer to match.     | Luhn                                 |
| `emailAddress`                       | *string*                             | :heavy_minus_sign:                   | Email address of the buyer to match. | john@example.com                     |
| `amount`                             | *number*                             | :heavy_minus_sign:                   | Amount of the transaction to match.  | 100                                  |
| `externalIdentifier`                 | *string*                             | :heavy_minus_sign:                   | External identifier to match.        | buyer-12345                          |
| `cardNumber`                         | *string*                             | :heavy_minus_sign:                   | Card number to match.                | 4242424242424242                     |