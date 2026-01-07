# TransactionActions

## Example Usage

```typescript
import { TransactionActions } from "@gr4vy/sdk/models/components";

let value: TransactionActions = {
  items: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `items`                                                                        | [components.TransactionAction](../../models/components/transactionaction.md)[] | :heavy_check_mark:                                                             | The list of actions triggered for a transaction.                               |