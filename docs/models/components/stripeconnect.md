# StripeConnect

Stripe Connect configuration options.

## Example Usage

```typescript
import { StripeConnect } from "@gr4vy/sdk/models/components";

let value: StripeConnect = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `stripeAccount`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | The ID of the connected Stripe account to process for.                 |
| `applicationFeeAmount`                                                 | *number*                                                               | :heavy_minus_sign:                                                     | The application fee to charge when processing for a connected account. |
| `onBehalfOf`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | The Stripe account ID that these funds are intended for.               |