# SubMerchantOptions

A PayFac sub-merchant to send with the transaction.

Only used when the connection sponsors the card's scheme as a PayFac, and
ignored otherwise.

## Example Usage

```typescript
import { SubMerchantOptions } from "@gr4vy/sdk/models/components";

let value: SubMerchantOptions = {
  id: "SM-12345",
  name: "Trading name",
  mcc: "5812",
  address: {
    line1: "1 Example St",
    city: "Sydney",
    state: "NSW",
    postalCode: "2000",
    country: "AU",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The sub-merchant's identifier.                                                                                               | SM-12345                                                                                                                     |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The sub-merchant's trading name. On Amex, the connection's PayFac name and this name must not exceed 36 characters combined. | Trading name                                                                                                                 |
| `legalName`                                                                                                                  | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The sub-merchant's registered legal name.                                                                                    | Registered legal name                                                                                                        |
| `mcc`                                                                                                                        | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The sub-merchant's 4-digit merchant category code.                                                                           | 5812                                                                                                                         |
| `email`                                                                                                                      | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The sub-merchant's email address. Sent on Cybersource, not sent on Mastercard Gateway.                                       | ops@submerchant.com.au                                                                                                       |
| `phone`                                                                                                                      | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The sub-merchant's phone number.                                                                                             | +61200000000                                                                                                                 |
| `website`                                                                                                                    | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The sub-merchant's website. Sent as the merchant descriptor URL on Cybersource, not sent on Mastercard Gateway.              | https://submerchant.com.au                                                                                                   |
| `address`                                                                                                                    | [components.SubMerchantAddressOptions](../../models/components/submerchantaddressoptions.md)                                 | :heavy_check_mark:                                                                                                           | The address of a PayFac sub-merchant.                                                                                        |                                                                                                                              |