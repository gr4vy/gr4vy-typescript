# GiftCardRedemptionFailed

This event logs the request and response details of HTTP calls made to redeem gift cards, in case the call failed.

## Example Usage

```typescript
import { GiftCardRedemptionFailed } from "@gr4vy/sdk/models/components";

let value: GiftCardRedemptionFailed = {
    type: "transaction-event",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    name: "gift-card-redemption-failed",
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    context: {
        reason: "Network Error",
    },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.GiftCardRedemptionFailedType](../../models/components/giftcardredemptionfailedtype.md)       | :heavy_minus_sign:                                                                                       | The type of this resource. Is always `transaction-event`.                                                | transaction-event                                                                                        |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The unique identifier for this event.                                                                    | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                     |
| `name`                                                                                                   | [components.GiftCardRedemptionFailedName](../../models/components/giftcardredemptionfailedname.md)       | :heavy_minus_sign:                                                                                       | The name of this resource. Is always `gift-card-redemption-failed`.                                      | gift-card-redemption-failed                                                                              |
| `createdAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The date and time when this event was created in our system.                                             | 2013-07-16T19:23:00.000+00:00                                                                            |
| `context`                                                                                                | [components.GiftCardRedemptionFailedContext](../../models/components/giftcardredemptionfailedcontext.md) | :heavy_minus_sign:                                                                                       | Additional context for this event.                                                                       |                                                                                                          |