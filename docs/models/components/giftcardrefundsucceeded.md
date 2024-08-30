# GiftCardRefundSucceeded

This event logs the request and response details of HTTP calls made to refund gift cards, in case the call succeeded.

## Example Usage

```typescript
import { GiftCardRefundSucceeded } from "@gr4vy/sdk/models/components";

let value: GiftCardRefundSucceeded = {
    type: "transaction-event",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    name: "gift-card-refund-succeeded",
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.GiftCardRefundSucceededType](../../models/components/giftcardrefundsucceededtype.md)       | :heavy_minus_sign:                                                                                     | The type of this resource. Is always `transaction-event`.                                              | transaction-event                                                                                      |
| `id`                                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The unique identifier for this event.                                                                  | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                   |
| `name`                                                                                                 | [components.GiftCardRefundSucceededName](../../models/components/giftcardrefundsucceededname.md)       | :heavy_minus_sign:                                                                                     | The name of this resource. Is always `gift-card-refund-succeeded`.                                     | gift-card-refund-succeeded                                                                             |
| `createdAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | The date and time when this event was created in our system.                                           | 2013-07-16T19:23:00.000+00:00                                                                          |
| `context`                                                                                              | [components.GiftCardRefundSucceededContext](../../models/components/giftcardrefundsucceededcontext.md) | :heavy_minus_sign:                                                                                     | Additional context for this event.                                                                     |                                                                                                        |