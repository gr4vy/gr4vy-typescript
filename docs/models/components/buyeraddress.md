# BuyerAddress

The billing address of the buyer.

## Example Usage

```typescript
import { BuyerAddress } from "@gr4vy/sdk/models/components";

let value: BuyerAddress = {
    city: "London",
    country: "GB",
    postalCode: "789123",
    state: "Greater London",
    stateCode: "GB-LND",
    houseNumberOrName: "10",
    line1: "10 Oxford Street",
    line2: "New Oxford Court",
    organization: "Gr4vy",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `city`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The city for the address.                                                                      | London                                                                                         |
| `country`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | The country for the address in ISO 3166 format.                                                | GB                                                                                             |
| `postalCode`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | The postal code or zip code for the address.                                                   | 789123                                                                                         |
| `state`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | The state, county, or province for the address.                                                | Greater London                                                                                 |
| `stateCode`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | The code of state, county, or province for the address in<br/>ISO 3166-2 format.               | GB-LND                                                                                         |
| `houseNumberOrName`                                                                            | *string*                                                                                       | :heavy_minus_sign:                                                                             | The house number or name for the address. Not all payment<br/>services use this field but some do. | 10                                                                                             |
| `line1`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | The first line of the address.                                                                 | 10 Oxford Street                                                                               |
| `line2`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | The second line of the address.                                                                | New Oxford Court                                                                               |
| `organization`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | The optional name of the company or organisation to add<br/>to the address.                    | Gr4vy                                                                                          |