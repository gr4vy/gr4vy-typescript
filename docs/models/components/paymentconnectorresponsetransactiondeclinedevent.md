# PaymentConnectorResponseTransactionDeclinedEvent

This event logs the exact details parsed details for a declined transaction
as reported by our connector.

## Example Usage

```typescript
import { PaymentConnectorResponseTransactionDeclinedEvent } from "@gr4vy/sdk/models/components";

let value: PaymentConnectorResponseTransactionDeclinedEvent = {
  type: "transaction-event",
  id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  name: "payment-connector-response-transaction-declined",
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
  context: {
    paymentServiceTransactionId: "transaction-1234",
    status: "authorization_declined",
    code: "INVALID DATA",
    instrumentType: "pan",
    retryRule: "failure",
    rawResponseCode: "incorrect-zip",
    rawResponseDescription: "The card's postal code is incorrect. Check the card's postal code or use a
  different card.",
    avsResponseCode: "partial_match_address",
    cvvResponseCode: "match",
    paymentMethodScheme: "visa",
  },
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              | Example                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                   | [components.PaymentConnectorResponseTransactionDeclinedEventType](../../models/components/paymentconnectorresponsetransactiondeclinedeventtype.md)       | :heavy_minus_sign:                                                                                                                                       | The type of this resource. Is always `transaction-event`.                                                                                                | transaction-event                                                                                                                                        |
| `id`                                                                                                                                                     | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | The unique identifier for this event.                                                                                                                    | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                                                                     |
| `name`                                                                                                                                                   | [components.PaymentConnectorResponseTransactionDeclinedEventName](../../models/components/paymentconnectorresponsetransactiondeclinedeventname.md)       | :heavy_minus_sign:                                                                                                                                       | The name of this resource. Is always `payment-connector-response-transaction-declined`.                                                                  | payment-connector-response-transaction-declined                                                                                                          |
| `createdAt`                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                            | :heavy_minus_sign:                                                                                                                                       | The date and time when this transaction was created in our system.                                                                                       | 2013-07-16T19:23:00.000+00:00                                                                                                                            |
| `context`                                                                                                                                                | [components.PaymentConnectorResponseTransactionDeclinedEventContext](../../models/components/paymentconnectorresponsetransactiondeclinedeventcontext.md) | :heavy_minus_sign:                                                                                                                                       | Additional context for this event.                                                                                                                       |                                                                                                                                                          |