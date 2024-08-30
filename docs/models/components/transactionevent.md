# TransactionEvent

Base model with JSON encoders.

## Example Usage

```typescript
import { TransactionEvent } from "@gr4vy/sdk/models/components";

let value: TransactionEvent = {
    id: "c42e141a-ac36-46c8-9d6b-144290747477",
    name: "<value>",
    createdAt: new Date("2023-07-29T22:53:03.007Z"),
    context: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.TransactionEventType](../../models/components/transactioneventtype.md)            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `context`                                                                                     | [components.TransactionEventContext](../../models/components/transactioneventcontext.md)      | :heavy_check_mark:                                                                            | Base model with JSON encoders.                                                                |