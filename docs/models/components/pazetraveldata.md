# PazeTravelData

## Example Usage

```typescript
import { PazeTravelData } from "@gr4vy/sdk/models/components";

let value: PazeTravelData = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `passengerName`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | Traveler name.                                                                   | Team Integrations                                                                |
| `roundTrip`                                                                      | *boolean*                                                                        | :heavy_minus_sign:                                                               | Whether departure and return trips are being purchased in the same transaction.  | true                                                                             |
| `departureDate`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | Date and time of departure in ISO 8601 format.                                   | 2026-06-01T08:00:00Z                                                             |
| `returnDate`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | Date and time of return in ISO 8601 format.                                      | 2026-06-08T18:30:00Z                                                             |
| `departureLocation`                                                              | [components.PazeLocationAddress](../../models/components/pazelocationaddress.md) | :heavy_minus_sign:                                                               | Location from which the traveler departs.                                        |                                                                                  |
| `returnLocation`                                                                 | [components.PazeLocationAddress](../../models/components/pazelocationaddress.md) | :heavy_minus_sign:                                                               | Location to which the traveler returns.                                          |                                                                                  |