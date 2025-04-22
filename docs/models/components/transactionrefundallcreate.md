# TransactionRefundAllCreate

## Example Usage

```typescript
import { TransactionRefundAllCreate } from "@gr4vy/sdk/models/components";

let value: TransactionRefundAllCreate = {
  reason: "Refund due to user request.",
  externalIdentifier: "refund-12345",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `reason`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | An optional reason to attach extra context to the refund requests.                     | Refund due to user request.                                                            |
| `externalIdentifier`                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | An external identifier that can be used to match the refunds against your own records. | refund-12345                                                                           |