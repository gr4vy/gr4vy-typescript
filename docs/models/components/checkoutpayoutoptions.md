# CheckoutPayoutOptions

## Example Usage

```typescript
import { CheckoutPayoutOptions } from "@gr4vy/sdk/models/components";

let value: CheckoutPayoutOptions = {
  processingChannelId: "channel-1234",
  sourceId: "acct-1234",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `processingChannelId`                                     | *string*                                                  | :heavy_check_mark:                                        | The processing channel to be used for the payment.        | channel-1234                                              |
| `sourceId`                                                | *string*                                                  | :heavy_check_mark:                                        | The ID of the currency account that will fund the payout. | acct-1234                                                 |