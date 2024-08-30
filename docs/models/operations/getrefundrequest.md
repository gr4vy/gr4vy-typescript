# GetRefundRequest

## Example Usage

```typescript
import { GetRefundRequest } from "@gr4vy/sdk/models/operations";

let value: GetRefundRequest = {
    transactionId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    refundId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `transactionId`                                        | *string*                                               | :heavy_check_mark:                                     | The ID for the transaction to get the information for. | fe26475d-ec3e-4884-9553-f7356683f7f9                   |
| `refundId`                                             | *string*                                               | :heavy_check_mark:                                     | The unique ID of the refund.                           | 8724fd24-5489-4a5d-90fd-0604df7d3b83                   |