# IntentOutcome

The outcome of the original intent of a transaction.

This allows you to understand if the intent of the transaction
(e.g. `capture` or `authorize`) has been achieved when dealing with multiple
payment instruments.

If all payment instruments (`payment_method` and/or `gift_cards`)
have succeeded to get an authorization or direct sale **at any point
in time** then this will return a `succeeded` value.

If any of the payment instruments fails or declines then this will
return a `failed` value.

If any payment instruments is still in a `pending` or `processing` state
then the result will be `pending`.

Please note that if any of the payment instruments are voided or refunded
after the result reaches a `succeeded` state  then the result will remain
unchanged.

## Example Usage

```typescript
import { IntentOutcome } from "@gr4vy/sdk/models/components";

let value: IntentOutcome = "pending";
```

## Values

```typescript
"pending" | "succeeded" | "failed"
```