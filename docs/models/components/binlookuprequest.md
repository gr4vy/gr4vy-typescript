# BINLookupRequest

The result and raw data for a card BIN lookup.

## Example Usage

```typescript
import { BINLookupRequest } from "@gr4vy/sdk/models/components";

let value: BINLookupRequest = {
    type: "transaction-event",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    name: "bin-lookup-request",
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    context: {
        response: "{}",
        responseStatusCode: 200,
        instrument: "pan",
        scheme: "visa",
        additionalSchemes: ["visa"],
    },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.BINLookupRequestType](../../models/components/binlookuprequesttype.md)            | :heavy_minus_sign:                                                                            | The type of this resource. Is always `transaction-event`.                                     | transaction-event                                                                             |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique identifier for this event.                                                         | fe26475d-ec3e-4884-9553-f7356683f7f9                                                          |
| `name`                                                                                        | [components.Name](../../models/components/name.md)                                            | :heavy_minus_sign:                                                                            | The name of this resource. Is always `bin-lookup-request`.                                    | bin-lookup-request                                                                            |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when this transaction was created in our system.                            | 2013-07-16T19:23:00.000+00:00                                                                 |
| `context`                                                                                     | [components.BINLookupRequestContext](../../models/components/binlookuprequestcontext.md)      | :heavy_minus_sign:                                                                            | BIN lookup request context.                                                                   |                                                                                               |