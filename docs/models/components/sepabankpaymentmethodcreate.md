# SEPABankPaymentMethodCreate

SEPA Bank Payment Method

Bank Payment Method for SEPA bank accounts.

## Example Usage

```typescript
import { SEPABankPaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: SEPABankPaymentMethodCreate = {
  accountHolder: {},
  accountNumber: "ES1234567891234",
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
| `scheme`                                                                     | *"sepa"*                                                                     | :heavy_minus_sign:                                                           | Always `sepa`.                                                               | sepa                                                                         |
| `accountNumber`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | The IBAN for this SEPA bank account                                          | ES1234567891234                                                              |
| `routingNumber`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | The BIC for this SEPA bank account                                           | ABC123456                                                                    |