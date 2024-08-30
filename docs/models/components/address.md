# Address

The billing address of the buyer.

## Example Usage

```typescript
import { Address } from "@gr4vy/sdk/models/components";

let value: Address = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `city`                                                                                                 | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | The city for the billing address.                                                                      |
| `country`                                                                                              | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | The country for the billing address.                                                                   |
| `postalCode`                                                                                           | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | The postal code or zip code for the billing address.                                                   |
| `state`                                                                                                | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | The state, county, or province for the billing address.                                                |
| `houseNumberOrName`                                                                                    | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | The house number or name for the billing address. Not all payment<br/>services use this field but some do. |
| `line1`                                                                                                | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | The first line of the billing address.                                                                 |