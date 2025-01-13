# ConnectionOptions

Optional fields for processing payouts on specific payment services.

## Example Usage

```typescript
import { ConnectionOptions } from "@gr4vy/sdk/models/components";

let value: ConnectionOptions = {
  checkoutCard: {
    processingChannelId: "channel-1234",
    sourceId: "acct-1234",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `checkoutCard`                                                     | [components.CheckoutCard](../../models/components/checkoutcard.md) | :heavy_minus_sign:                                                 | Custom options for `checkout-card` payment service.                |