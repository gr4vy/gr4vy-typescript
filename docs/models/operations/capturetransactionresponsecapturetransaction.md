# CaptureTransactionResponseCaptureTransaction

Successful Response


## Supported Types

### `components.Transaction`

```typescript
const value: components.Transaction = {
  id: "7099948d-7286-47e4-aad8-b68f7eb44591",
  reconciliationId: "default",
  merchantAccountId: "default",
  currency: "EUR",
  amount: 1299,
  status: "authorization_declined",
  authorizedAmount: 1299,
  capturedAmount: 1299,
  refundedAmount: 1299,
  settledAmount: 1100,
  settled: true,
  intent: "capture",
  giftCardRedemptions: [],
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
  updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
  disputed: true,
  paymentSource: "moto",
  merchantInitiated: true,
  isSubsequentPayment: false,
  intentOutcome: "pending",
  multiTender: true,
  accountFundingTransaction: true,
};
```

### `components.TransactionCapture`

```typescript
const value: components.TransactionCapture = {
  status: "succeeded",
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

