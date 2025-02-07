# PayoutsCreateMerchant

Merchant information for the source of the payout.

## Example Usage

```typescript
import { PayoutsCreateMerchant } from "@gr4vy/sdk/models/components";

let value: PayoutsCreateMerchant = {
  name: "Acme Inc",
  identificationNumber: "12345",
  phoneNumber: "+442071838750",
  url: "https://example.com",
  statementDescriptor: "Winnings",
  merchantCategoryCode: "123456",
  address: {
    city: "San Jose",
    country: "DE",
    postalCode: "94560",
    state: "California",
    stateCode: "US-CA",
    houseNumberOrName: "10",
    line1: "Stafford Appartments",
    line2: "29th Street",
    organization: "Gr4vy",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | The name of the merchant.                                                                          | Acme Inc                                                                                           |
| `identificationNumber`                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | Unique value which identifies a merchant for processing transactions, also known as a MID.         | 12345                                                                                              |
| `phoneNumber`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The phone number for the merchant which should be formatted according to the E164 number standard. | +14155552671                                                                                       |
| `url`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | Merchant website URL.                                                                              | https://example.com                                                                                |
| `statementDescriptor`                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | Value to explain charges or payments on bank statements.                                           | Winnings                                                                                           |
| `merchantCategoryCode`                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | Merchant classification for the type of goods or services it provides.                             | 123456                                                                                             |
| `address`                                                                                          | [components.PayoutsCreateAddress](../../models/components/payoutscreateaddress.md)                 | :heavy_minus_sign:                                                                                 | The address for the merchant.                                                                      |                                                                                                    |