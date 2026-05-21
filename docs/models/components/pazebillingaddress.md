# PazeBillingAddress

## Example Usage

```typescript
import { PazeBillingAddress } from "@gr4vy/sdk/models/components";

let value: PazeBillingAddress = {
  name: "<value>",
  line1: "<value>",
  line2: null,
  line3: "<value>",
  city: "West Raulside",
  state: "California",
  zip: "77610-9138",
  countryCode: "SM",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Name of the organization or entity at the address. |
| `line1`                                            | *string*                                           | :heavy_check_mark:                                 | Line 1 of the address.                             |
| `line2`                                            | *string*                                           | :heavy_check_mark:                                 | Line 2 of the address.                             |
| `line3`                                            | *string*                                           | :heavy_check_mark:                                 | Line 3 of the address.                             |
| `city`                                             | *string*                                           | :heavy_check_mark:                                 | City.                                              |
| `state`                                            | *string*                                           | :heavy_check_mark:                                 | State or region.                                   |
| `zip`                                              | *string*                                           | :heavy_check_mark:                                 | Postal code.                                       |
| `countryCode`                                      | *string*                                           | :heavy_check_mark:                                 | ISO 3166-1 alpha-2 country code.                   |