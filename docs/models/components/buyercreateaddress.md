# BuyerCreateAddress

The address for the person.

## Example Usage

```typescript
import { BuyerCreateAddress } from "@gr4vy/sdk/models/components";

let value: BuyerCreateAddress = {
    country: "GB",
    stateCode: "GB-LND",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `city`                                           | *string*                                         | :heavy_minus_sign:                               | The city of the address                          |                                                  |
| `country`                                        | *string*                                         | :heavy_minus_sign:                               | The country of the address                       | DE                                               |
| `postalCode`                                     | *string*                                         | :heavy_minus_sign:                               | The postal code of the address                   |                                                  |
| `state`                                          | *string*                                         | :heavy_minus_sign:                               | The full state name of the address               |                                                  |
| `stateCode`                                      | *string*                                         | :heavy_minus_sign:                               | The state code of the address                    | GB-LND                                           |
| `houseNumberOrName`                              | *string*                                         | :heavy_minus_sign:                               | The house number or name of the address.         |                                                  |
| `line1`                                          | *string*                                         | :heavy_minus_sign:                               | The first line of the address.                   |                                                  |
| `line2`                                          | *string*                                         | :heavy_minus_sign:                               | The second line of the address.                  |                                                  |
| `organization`                                   | *string*                                         | :heavy_minus_sign:                               | The company or organization name of the address. |                                                  |