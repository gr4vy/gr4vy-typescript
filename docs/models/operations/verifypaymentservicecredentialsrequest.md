# VerifyPaymentServiceCredentialsRequest

## Example Usage

```typescript
import { VerifyPaymentServiceCredentialsRequest } from "@gr4vy/sdk/models/operations";

let value: VerifyPaymentServiceCredentialsRequest = {
  verifyCredentials: {
    paymentServiceDefinitionId: "stripe-card",
    paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
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
| `timeoutInSeconds`                                                           | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `merchantAccountId`                                                          | *string*                                                                     | :heavy_minus_sign:                                                           | The ID of the merchant account to use for this request.                      |
| `verifyCredentials`                                                          | [components.VerifyCredentials](../../models/components/verifycredentials.md) | :heavy_check_mark:                                                           | N/A                                                                          |