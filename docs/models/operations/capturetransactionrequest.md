# CaptureTransactionRequest

## Example Usage

```typescript
import { CaptureTransactionRequest } from "@gr4vy/sdk/models/operations";

let value: CaptureTransactionRequest = {
    transactionId: "42defcce-8f19-4777-b3e6-3562a7b408f0",
    transactionCapture: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `transactionId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `transactionCapture`                                                           | [components.TransactionCapture](../../models/components/transactioncapture.md) | :heavy_check_mark:                                                             | N/A                                                                            |