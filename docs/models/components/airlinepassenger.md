# AirlinePassenger

Base model with JSON encoders.

## Example Usage

```typescript
import { AirlinePassenger } from "@gr4vy/sdk/models/components";
import { RFCDate } from "@gr4vy/sdk/types";

let value: AirlinePassenger = {
  ageGroup: "adult",
  dateOfBirth: new RFCDate("2013-07-16"),
  emailAddress: "john@example.com",
  firstName: "John",
  frequentFlyerNumber: "15885566",
  lastName: "Luhn",
  passportNumber: "11117700225",
  phoneNumber: "+442071838750",
  ticketNumber: "BA1236699999",
  title: "Mr.",
  countryCode: "DE",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `ageGroup`                                                                                         | [components.AgeGroup](../../models/components/agegroup.md)                                         | :heavy_minus_sign:                                                                                 | The age group for the passenger.                                                                   | adult                                                                                              |
| `dateOfBirth`                                                                                      | [RFCDate](../../types/rfcdate.md)                                                                  | :heavy_minus_sign:                                                                                 | The passenger's date of birth in YYYY-MM-YY format.                                                | 2013-07-16                                                                                         |
| `emailAddress`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The email address of the passenger.                                                                | john@example.com                                                                                   |
| `firstName`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The first name(s) or given name of the passenger.                                                  | John                                                                                               |
| `frequentFlyerNumber`                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The passenger's frequent flyer number.                                                             | 15885566                                                                                           |
| `lastName`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The last name, or family name, of the passenger.                                                   | Luhn                                                                                               |
| `passportNumber`                                                                                   | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The passenger's unique passport number.                                                            | 11117700225                                                                                        |
| `phoneNumber`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The phone number of the passenger. This number is formatted according to the E164 number standard. | +14155552671                                                                                       |
| `ticketNumber`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The ticket number for a flight.                                                                    | BA1236699999                                                                                       |
| `title`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Title of the passenger.                                                                            | Mr.                                                                                                |
| `countryCode`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The country of residence of the passenger                                                          | DE                                                                                                 |