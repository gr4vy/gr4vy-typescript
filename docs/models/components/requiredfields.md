# RequiredFields

The fields that are required to process a transaction for this payment option.

## Example Usage

```typescript
import { RequiredFields } from "@gr4vy/sdk/models/components";

let value: RequiredFields = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `firstName`                                              | *boolean*                                                | :heavy_minus_sign:                                       | The first (given) name of the buyer.                     |
| `lastName`                                               | *boolean*                                                | :heavy_minus_sign:                                       | The last (family) name of the buyer.                     |
| `emailAddress`                                           | *boolean*                                                | :heavy_minus_sign:                                       | The email address of the buyer.                          |
| `phoneNumber`                                            | *boolean*                                                | :heavy_minus_sign:                                       | The phone number of the buyer.                           |
| `address`                                                | [components.Address](../../models/components/address.md) | :heavy_minus_sign:                                       | The billing address of the buyer.                        |
| `taxId`                                                  | *boolean*                                                | :heavy_minus_sign:                                       | The tax id code associated with the billing details.     |