# Address

Base model with JSON encoders.

## Example Usage

```typescript
import { Address } from "@gr4vy/sdk/models/components";

let value: Address = {
    country: "DE",
    stateCode: "US-CA",
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `city`              | *string*            | :heavy_minus_sign:  | N/A                 |                     |
| `country`           | *string*            | :heavy_minus_sign:  | N/A                 | DE                  |
| `postalCode`        | *string*            | :heavy_minus_sign:  | N/A                 |                     |
| `state`             | *string*            | :heavy_minus_sign:  | N/A                 |                     |
| `stateCode`         | *string*            | :heavy_minus_sign:  | N/A                 | GB-LND              |
| `houseNumberOrName` | *string*            | :heavy_minus_sign:  | N/A                 |                     |
| `line1`             | *string*            | :heavy_minus_sign:  | N/A                 |                     |
| `line2`             | *string*            | :heavy_minus_sign:  | N/A                 |                     |
| `organization`      | *string*            | :heavy_minus_sign:  | N/A                 |                     |