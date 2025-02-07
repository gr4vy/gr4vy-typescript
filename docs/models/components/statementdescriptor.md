# StatementDescriptor

The statement descriptor is the text to be shown on the buyer's statements.

## Example Usage

```typescript
import { StatementDescriptor } from "@gr4vy/sdk/models/components";

let value: StatementDescriptor = {
  name: "ACME",
  description: "ACME San Jose Electronics",
  city: "San Jose",
  country: "GB",
  phoneNumber: "+14155552671",
  url: "www.example.com",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Reflects your doing business as (DBA) name.                                                                                    | ACME                                                                                                                           |
| `description`                                                                                                                  | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A short description about the purchase.                                                                                        | ACME San Jose Electronics                                                                                                      |
| `city`                                                                                                                         | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The merchant's city to be displayed in a statement descriptor.                                                                 | San Jose                                                                                                                       |
| `country`                                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The 2-letter ISO country code of the merchant to be displayed in a statement descriptor.                                       | DE                                                                                                                             |
| `phoneNumber`                                                                                                                  | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The value in the phone number field of a customer's statement which should be formatted according to the E164 number standard. | +14155552671                                                                                                                   |
| `url`                                                                                                                          | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The merchant's URL to be displayed in a statement descriptor.                                                                  | www.example.com                                                                                                                |