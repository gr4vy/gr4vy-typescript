# TransactionEvent

## Example Usage

```typescript
import { TransactionEvent } from "@gr4vy/sdk/models/components";

let value: TransactionEvent = {
  id: "f133a3b7-e67e-4d83-bcd3-3e438fedf348",
  name: "transaction-api-request",
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
  context: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"transaction-event"*                                                                         | :heavy_minus_sign:                                                                            | Always `transaction-event`.                                                                   | transaction-event                                                                             |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID for the event.                                                                         | f133a3b7-e67e-4d83-bcd3-3e438fedf348                                                          |
| `name`                                                                                        | [components.Name](../../models/components/name.md)                                            | :heavy_check_mark:                                                                            | The specific event name.                                                                      | transaction-api-request                                                                       |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date this event was created at.                                                           | 2013-07-16T19:23:00.000+00:00                                                                 |
| `context`                                                                                     | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |