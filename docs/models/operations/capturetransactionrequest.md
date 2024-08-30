# CaptureTransactionRequest

## Example Usage

```typescript
import { CaptureTransactionRequest } from "@gr4vy/sdk/models/operations";

let value: CaptureTransactionRequest = {
    transactionId: "189dbb30-fcb3-43ea-855b-197cd44e2f52",
    transactionCapture: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `transactionId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `transactionCapture`                                                           | [components.TransactionCapture](../../models/components/transactioncapture.md) | :heavy_check_mark:                                                             | N/A                                                                            |