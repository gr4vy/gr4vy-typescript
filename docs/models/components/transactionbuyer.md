# TransactionBuyer

## Example Usage

```typescript
import { TransactionBuyer } from "@gr4vy/sdk/models/components";

let value: TransactionBuyer = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | *"buyer"*                                                              | :heavy_minus_sign:                                                     | Always `buyer`.                                                        | buyer                                                                  |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | The ID for the buyer.                                                  | fe26475d-ec3e-4884-9553-f7356683f7f9                                   |
| `displayName`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | The display name for the buyer.                                        | John Doe                                                               |
| `externalIdentifier`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | The merchant identifier for this buyer.                                | buyer-12345                                                            |
| `billingDetails`                                                       | [components.BillingDetails](../../models/components/billingdetails.md) | :heavy_minus_sign:                                                     | The billing name, address, email, and other fields for this buyer.     |                                                                        |
| `accountNumber`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | The buyer account number.                                              |                                                                        |