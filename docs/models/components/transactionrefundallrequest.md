# TransactionRefundAllRequest

A request to fully refund a transaction.

## Example Usage

```typescript
import { TransactionRefundAllRequest } from "@gr4vy/sdk/models/components";

let value: TransactionRefundAllRequest = {
    reason: "Refund due to user request",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `reason`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | The reason to refund for. This can be used to attach a written reason to the<br/>refund request. | Refund due to user request                                                                   |