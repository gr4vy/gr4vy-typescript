# BuyerCreate

Request body for creating a new buyer

## Example Usage

```typescript
import { BuyerCreate } from "@gr4vy/sdk/models/components";

let value: BuyerCreate = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `displayName`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | The display name for the buyer.                                                  | John Doe                                                                         |
| `externalIdentifier`                                                             | *string*                                                                         | :heavy_minus_sign:                                                               | The merchant identifier for this buyer.                                          | buyer-12345                                                                      |
| `billingDetails`                                                                 | [components.BillingDetailsInput](../../models/components/billingdetailsinput.md) | :heavy_minus_sign:                                                               | The billing name, address, email, and other fields for this buyer.               |                                                                                  |
| `accountNumber`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | The buyer account number                                                         |                                                                                  |