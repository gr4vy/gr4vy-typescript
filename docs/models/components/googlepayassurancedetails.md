# GooglePayAssuranceDetails

The assurance details provided by Google Pay

## Example Usage

```typescript
import { GooglePayAssuranceDetails } from "@gr4vy/sdk/models/components";

let value: GooglePayAssuranceDetails = {
  accountVerified: true,
  cardHolderAuthenticated: true,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `accountVerified`                             | *boolean*                                     | :heavy_minus_sign:                            | Defines if an account was verified.           | true                                          |
| `cardHolderAuthenticated`                     | *boolean*                                     | :heavy_minus_sign:                            | Defines if the card holder was authenticated. | true                                          |