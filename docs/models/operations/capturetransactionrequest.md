# CaptureTransactionRequest

## Example Usage

```typescript
import { CaptureTransactionRequest } from "@gr4vy/sdk/models/operations";

let value: CaptureTransactionRequest = {
    transactionId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    transactionCaptureRequest: {
        amount: 1299,
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `transactionId`                                                                              | *string*                                                                                     | :heavy_check_mark:                                                                           | The ID for the transaction to get the information for.                                       | fe26475d-ec3e-4884-9553-f7356683f7f9                                                         |
| `transactionCaptureRequest`                                                                  | [components.TransactionCaptureRequest](../../models/components/transactioncapturerequest.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |