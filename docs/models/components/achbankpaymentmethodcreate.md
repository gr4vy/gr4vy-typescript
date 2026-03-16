# ACHBankPaymentMethodCreate

ACH Bank Payment Method

Bank Payment Method for ACH bank accounts.

## Example Usage

```typescript
import { ACHBankPaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: ACHBankPaymentMethodCreate = {
  accountHolder: {},
  accountNumber: "123456789",
  routingNumber: "000000111",
  accountType: "checking",
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
| `scheme`                                                                     | *"ach"*                                                                      | :heavy_minus_sign:                                                           | Always `ach`.                                                                | ach                                                                          |
| `accountNumber`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | The account number for this ACH bank account                                 | 123456789                                                                    |
| `routingNumber`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | The routing number for this ACH bank account                                 | 000000111                                                                    |
| `isTokenized`                                                                | *boolean*                                                                    | :heavy_minus_sign:                                                           | Whether the account number is tokenized                                      | false                                                                        |
| `accountType`                                                                | [components.AccountType](../../models/components/accounttype.md)             | :heavy_check_mark:                                                           | Specify whether this is a `checking` or `savings` account                    | checking                                                                     |