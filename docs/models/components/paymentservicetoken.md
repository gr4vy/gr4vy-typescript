# PaymentServiceToken

## Example Usage

```typescript
import { PaymentServiceToken } from "@gr4vy/sdk/models/components";

let value: PaymentServiceToken = {
  id: "07e70d14-a0c0-4ff5-bd4a-509959af0e4d",
  approvalUrl: "https://gr4vy.app/redirect/12345",
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
  status: "processing",
  token: "pm_12345",
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
  updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Always `payment-service-token`.                                                                    | payment-service-token                                                                              |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID for the payment service token.                                                              | 07e70d14-a0c0-4ff5-bd4a-509959af0e4d                                                               |
| `approvalUrl`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The optional URL that the buyer needs to be redirected to to further authorize the token creation. | https://gr4vy.app/redirect/12345                                                                   |
| `paymentMethodId`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the payment method used to generate this token                                           | ef9496d8-53a5-4aad-8ca2-00eb68334389                                                               |
| `paymentServiceId`                                                                                 | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the payment method used to generate this token.                                          | fffd152a-9532-4087-9a4f-de58754210f0                                                               |
| `status`                                                                                           | [components.PaymentMethodStatus](../../models/components/paymentmethodstatus.md)                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `token`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The token value. Will be present if succeeded.                                                     | pm_12345                                                                                           |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | The date and time when this payment service token was first created in our system.                 | 2013-07-16T19:23:00.000+00:00                                                                      |
| `updatedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | The date and time when this payment service token was last updated in our system.                  | 2013-07-16T19:23:00.000+00:00                                                                      |