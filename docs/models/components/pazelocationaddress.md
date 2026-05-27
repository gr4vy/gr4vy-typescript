# PazeLocationAddress

## Example Usage

```typescript
import { PazeLocationAddress } from "@gr4vy/sdk/models/components";

let value: PazeLocationAddress = {
  line1: "<value>",
  city: "Trenton",
  state: "Missouri",
  zip: "44902-5055",
  countryCode: "FR",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_minus_sign:                                 | Name of the organization or entity at the address. |
| `line1`                                            | *string*                                           | :heavy_check_mark:                                 | Line 1 of the address.                             |
| `line2`                                            | *string*                                           | :heavy_minus_sign:                                 | Line 2 of the address.                             |
| `line3`                                            | *string*                                           | :heavy_minus_sign:                                 | Line 3 of the address.                             |
| `city`                                             | *string*                                           | :heavy_check_mark:                                 | City.                                              |
| `state`                                            | *string*                                           | :heavy_check_mark:                                 | State or region.                                   |
| `zip`                                              | *string*                                           | :heavy_check_mark:                                 | Postal code.                                       |
| `countryCode`                                      | *string*                                           | :heavy_check_mark:                                 | ISO 3166-1 alpha-2 country code.                   |