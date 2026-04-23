# DigitalWalletAddress

## Example Usage

```typescript
import { DigitalWalletAddress } from "@gr4vy/sdk/models/components";

let value: DigitalWalletAddress = {
  line1: "Stafford Appartments",
  city: "San Jose",
  stateCode: "GB-LND",
  postalCode: "94560",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `line1`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | The first line of the address.                                               | Stafford Appartments                                                         |
| `line2`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | The second line of the address.                                              | 29th Street                                                                  |
| `city`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The city for the address.                                                    | San Jose                                                                     |
| `stateCode`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | The code of state, county, or province for the address in ISO 3166-2 format. | **Example 1:** GB-LND<br/>**Example 2:** US-CA                               |
| `postalCode`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | The zip or postal code for the address.                                      | 94560                                                                        |