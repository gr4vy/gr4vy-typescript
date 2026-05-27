# PazeShippingAddress

## Example Usage

```typescript
import { PazeShippingAddress } from "@gr4vy/sdk/models/components";

let value: PazeShippingAddress = {
  line1: "51551 Raynor Stream",
  city: "East Kory",
  state: "ND",
  zip: "67137",
  countryCode: "US",
  deliveryContactDetails: {
    contactFullName: "Team Integrations",
    contactPhoneNumber: {
      countryCode: "1",
      phoneNumber: "3213213211",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `line1`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | Line 1 of the address.                                                                         | 51551 Raynor Stream                                                                            |
| `line2`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | Line 2 of the address.                                                                         |                                                                                                |
| `line3`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | Line 3 of the address.                                                                         |                                                                                                |
| `city`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | City.                                                                                          | East Kory                                                                                      |
| `state`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | State or region.                                                                               | ND                                                                                             |
| `zip`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | Postal code.                                                                                   | 67137                                                                                          |
| `countryCode`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | ISO 3166-1 alpha-2 country code.                                                               | US                                                                                             |
| `deliveryContactDetails`                                                                       | [components.PazeDeliveryContactDetails](../../models/components/pazedeliverycontactdetails.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |