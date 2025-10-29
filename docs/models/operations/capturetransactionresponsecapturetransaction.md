# CaptureTransactionResponseCaptureTransaction

Successful Response


## Supported Types

### `components.TransactionOutput`

```typescript
const value: components.TransactionOutput = {
  id: "7099948d-7286-47e4-aad8-b68f7eb44591",
  reconciliationId: "default",
  merchantAccountId: "default",
  currency: "EUR",
  amount: 1299,
  status: "capture_succeeded",
  authorizedAmount: 1299,
  capturedAmount: 1299,
  refundedAmount: 1299,
  settledAmount: 1100,
  settled: true,
  intent: "capture",
  giftCardRedemptions: [
    {
      id: "31e65fb1-9c67-432e-9c06-83300b9d4059",
      status: "created",
      amount: 100,
      refundedAmount: 50,
      giftCard: {
        bin: "412345",
        subBin: "554",
        last4: "1234",
      },
    },
  ],
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
  updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
  disputed: true,
  paymentSource: "moto",
  merchantInitiated: true,
  isSubsequentPayment: false,
  intentOutcome: "succeeded",
  multiTender: true,
  accountFundingTransaction: true,
};
```

### `components.TransactionCaptureOutput`

```typescript
const value: components.TransactionCaptureOutput = {
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
    status: "authorization_succeeded",
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
    paymentSource: "ecommerce",
    merchantInitiated: true,
    isSubsequentPayment: false,
    intentOutcome: "pending",
    multiTender: true,
    accountFundingTransaction: true,
  },
};
```

