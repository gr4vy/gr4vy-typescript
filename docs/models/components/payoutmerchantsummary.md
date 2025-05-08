# PayoutMerchantSummary

PayoutMerchantSummary

Represents a summary of a merchant.

## Example Usage

```typescript
import { PayoutMerchantSummary } from "@gr4vy/sdk/models/components";

let value: PayoutMerchantSummary = {
  name: "Acme Inc",
  identificationNumber: "12345",
  phoneNumber: "+14155552671",
  url: "https://example.com",
  statementDescriptor: "Winnings",
  merchantCategoryCode: "1234",
  address: {
    city: "San Jose",
    country: "US",
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
| `type`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Always `merchant`.                                                                                 | merchant                                                                                           |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | The name of the merchant.                                                                          | Acme Inc                                                                                           |
| `identificationNumber`                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | Unique value which identifies a merchant for processing transactions, also known as a MID.         | 12345                                                                                              |
| `phoneNumber`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The phone number for the merchant which should be formatted according to the E164 number standard. | +14155552671                                                                                       |
| `url`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | Merchant website URL.                                                                              | https://example.com                                                                                |
| `statementDescriptor`                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Value to explain charges or payments on bank statements.                                           | Winnings                                                                                           |
| `merchantCategoryCode`                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | Merchant classification for the type of goods or services it provides.                             | 1234                                                                                               |
| `address`                                                                                          | [components.Address](../../models/components/address.md)                                           | :heavy_minus_sign:                                                                                 | The address for the merchant.                                                                      |                                                                                                    |