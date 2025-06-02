# VerifyPaymentServiceCredentialsRequest

## Example Usage

```typescript
import { VerifyPaymentServiceCredentialsRequest } from "@gr4vy/sdk/models/operations";

let value: VerifyPaymentServiceCredentialsRequest = {
  verifyCredentials: {
    paymentServiceDefinitionId: "stripe-card",
    fields: [
      {
        key: "api_key",
        value: "key-12345",
      },
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `merchantAccountId`                                                          | *string*                                                                     | :heavy_minus_sign:                                                           | The ID of the merchant account to use for this request.                      |
| `verifyCredentials`                                                          | [components.VerifyCredentials](../../models/components/verifycredentials.md) | :heavy_check_mark:                                                           | N/A                                                                          |