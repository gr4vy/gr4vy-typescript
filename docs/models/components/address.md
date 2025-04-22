# Address

## Example Usage

```typescript
import { Address } from "@gr4vy/sdk/models/components";

let value: Address = {
  city: "San Jose",
  country: "US",
  postalCode: "94560",
  state: "California",
  stateCode: "US-CA",
  houseNumberOrName: "10",
  line1: "Stafford Appartments",
  line2: "29th Street",
  organization: "Gr4vy",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `city`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The city for the address.                                                                      | San Jose                                                                                       |
| `country`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | The country for the address in ISO 3166 format.                                                | US                                                                                             |
| `postalCode`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | The postal code or zip code for the address.                                                   | 94560                                                                                          |
| `state`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | The state, county, or province for the address.                                                | California                                                                                     |
| `stateCode`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | The code of state, county, or province for the address in ISO 3166-2 format.                   | US-CA                                                                                          |
| `houseNumberOrName`                                                                            | *string*                                                                                       | :heavy_minus_sign:                                                                             | The house number or name for the address. Not all payment services use this field but some do. | 10                                                                                             |
| `line1`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | The first line of the address.                                                                 | Stafford Appartments                                                                           |
| `line2`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | The second line of the address.                                                                | 29th Street                                                                                    |
| `organization`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | The optional name of the company or organisation to add to the address.                        | Gr4vy                                                                                          |