# TransactionRefundCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { TransactionRefundCreate } from "@gr4vy/sdk/models/components";

let value: TransactionRefundCreate = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `amount`                                                                   | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `targetType`                                                               | [components.RefundTargetType](../../models/components/refundtargettype.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `targetId`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |