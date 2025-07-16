# StripeConnectOptions

## Example Usage

```typescript
import { StripeConnectOptions } from "@gr4vy/sdk/models/components";

let value: StripeConnectOptions = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `stripeAccount`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The Stripe Connect account to target using the `Stripe-Account` header.                       | act_123456                                                                                    |
| `applicationFeeAmount`                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | The fee to charge the connected account.                                                      | 123                                                                                           |
| `onBehalfOf`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The Stripe Connect account to target using the `on_behalf_of` request parameter.              | act_123456                                                                                    |
| `transferDataDestination`                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The Stripe Connect account to target using the `transfer_data.destination` request parameter. | act_123456                                                                                    |