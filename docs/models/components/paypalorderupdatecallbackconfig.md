# PaypalOrderUpdateCallbackConfig

## Example Usage

```typescript
import { PaypalOrderUpdateCallbackConfig } from "@gr4vy/sdk/models/components";

let value: PaypalOrderUpdateCallbackConfig = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `callbackUrl`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | The URL for the webhook endpoint you provide for PayPal to send you order update events. | https://example.com/callback                                                             |
| `callbackEvents`                                                                         | [components.CallbackEvents](../../models/components/callbackevents.md)[]                 | :heavy_minus_sign:                                                                       | The events that trigger a callback.                                                      | [<br/>"SHIPPING_ADDRESS",<br/>"SHIPPING_OPTIONS"<br/>]                                   |