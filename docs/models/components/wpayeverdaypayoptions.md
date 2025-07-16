# WpayEverdaypayOptions

## Example Usage

```typescript
import { WpayEverdaypayOptions } from "@gr4vy/sdk/models/components";

let value: WpayEverdaypayOptions = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `merchantDefinedData`                                                               | Record<string, *string*>                                                            | :heavy_minus_sign:                                                                  | A dictionary of merchant defined data, to be passed to Wpay for anti-fraud control. |                                                                                     |
| `customerId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | The customer ID for the Everyday Rewards account.                                   |                                                                                     |
| `rewardsAccessToken`                                                                | *string*                                                                            | :heavy_minus_sign:                                                                  | The access token for the Everyday Rewards account.                                  |                                                                                     |
| `deviceId`                                                                          | *string*                                                                            | :heavy_minus_sign:                                                                  | The ID of the device on which the payment is occuring.                              |                                                                                     |
| `postPaymentRedirect`                                                               | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the transaction should redirect post-payment                                | true                                                                                |