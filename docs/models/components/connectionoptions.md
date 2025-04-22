# ConnectionOptions

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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `checkoutCard`                                                                                       | [components.CheckoutCardConnectionOptions](../../models/components/checkoutcardconnectionoptions.md) | :heavy_minus_sign:                                                                                   | Custom options for `checkout-card` payment service.                                                  |