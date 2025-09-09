# TransactionVoid

## Example Usage

```typescript
import { TransactionVoid } from "@gr4vy/sdk/models/components";

let value: TransactionVoid = {
  status: "declined",
  code: "service_error",
  rawResponseCode: "E104",
  rawResponseDescription: "Internal error",
  transaction: {
    id: "7099948d-7286-47e4-aad8-b68f7eb44591",
    reconciliationId: "default",
    merchantAccountId: "default",
    currency: "EUR",
    amount: 1299,
    status: "capture_pending",
    authorizedAmount: 1299,
    capturedAmount: 1299,
    refundedAmount: 1299,
    settledAmount: 1100,
    settled: true,
    intent: "authorize",
    giftCardRedemptions: [],
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    disputed: true,
    paymentSource: "installment",
    merchantInitiated: true,
    isSubsequentPayment: false,
    intentOutcome: "failed",
    multiTender: true,
    accountFundingTransaction: true,
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 | Example                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                      | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | Always `transaction-void`.                                                                                                                                  | transaction-void                                                                                                                                            |
| `status`                                                                                                                                                    | [components.VoidStatus](../../models/components/voidstatus.md)                                                                                              | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |                                                                                                                                                             |
| `code`                                                                                                                                                      | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | The standardized error code set by Gr4vy.                                                                                                                   | service_error                                                                                                                                               |
| `rawResponseCode`                                                                                                                                           | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | This is the response code received from the payment service. This can be set to any value and is not standardized across different payment services.        | E104                                                                                                                                                        |
| `rawResponseDescription`                                                                                                                                    | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | This is the response description received from the payment service. This can be set to any value and is not standardized across different payment services. | Internal error                                                                                                                                              |
| `transaction`                                                                                                                                               | [components.Transaction](../../models/components/transaction.md)                                                                                            | :heavy_check_mark:                                                                                                                                          | A full transaction resource.                                                                                                                                |                                                                                                                                                             |