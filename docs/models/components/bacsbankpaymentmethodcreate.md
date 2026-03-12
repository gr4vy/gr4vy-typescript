# BACSBankPaymentMethodCreate

BACS Bank Payment Method

Bank Payment Method for BACS bank accounts.

## Example Usage

```typescript
import { BACSBankPaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: BACSBankPaymentMethodCreate = {
  accountHolder: {},
  accountNumber: "12345678",
  routingNumber: "11-22-33",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `method`                                                                     | *"bank"*                                                                     | :heavy_minus_sign:                                                           | Always `bank`.                                                               | bank                                                                         |
| `accountHolder`                                                              | [components.BankAccountHolder](../../models/components/bankaccountholder.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `buyerId`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | The ID of the buyer to attach the method to.                                 | fe26475d-ec3e-4884-9553-f7356683f7f9                                         |
| `buyerExternalIdentifier`                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | The merchant reference for this payment method.                              | payment-method-12345                                                         |
| `externalIdentifier`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | The merchant identifier for this payment method.                             | payment-method-12345                                                         |
| `scheme`                                                                     | *"bacs"*                                                                     | :heavy_minus_sign:                                                           | Always `bacs`.                                                               | bacs                                                                         |
| `accountNumber`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | The account number for this BACS bank account                                | 12345678                                                                     |
| `routingNumber`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | The sort code for this BACS bank account                                     | 11-22-33                                                                     |