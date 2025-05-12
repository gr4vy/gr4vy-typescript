# Airline

Information about an airline travel.

## Example Usage

```typescript
import { Airline } from "@gr4vy/sdk/models/components";
import { RFCDate } from "@gr4vy/sdk/types";

let value: Airline = {
  bookingCode: "X36Q9C",
  issuedAddress: "123 Broadway, New York",
  issuedAt: new Date("2013-07-16T19:23:00.000+00:00"),
  issuingCarrierCode: "649",
  legs: [
    {
      arrivalAirport: "LAX",
      arrivalAt: new Date("2013-07-16T19:23:00.000+00:00"),
      arrivalCity: "Los Angeles",
      arrivalCountry: "US",
      carrierCode: "649",
      couponNumber: "15885566",
      departureAirport: "LHR",
      departureAt: new Date("2013-07-16T19:23:00.000+00:00"),
      departureCity: "London",
      departureCountry: "GB",
      departureTaxAmount: 1200,
      fareAmount: 129900,
      fareBasisCode: "FY",
      feeAmount: 1200,
      flightClass: "E",
      flightNumber: "101",
      routeType: "round_trip",
      stopOver: false,
      taxAmount: 1200,
    },
  ],
  passengerNameRecord: "JOHN L",
  passengers: [
    {
      ageGroup: "adult",
      dateOfBirth: new RFCDate("2013-07-16"),
      emailAddress: "john@example.com",
      firstName: "John",
      frequentFlyerNumber: "15885566",
      lastName: "Luhn",
      passportNumber: "11117700225",
      phoneNumber: "+1234567890",
      ticketNumber: "BA1236699999",
      title: "Mr.",
      countryCode: "US",
    },
  ],
  reservationSystem: "Amadeus",
  restrictedTicket: false,
  ticketDeliveryMethod: "electronic",
  ticketNumber: "123-1234-151555",
  travelAgencyCode: "12345",
  travelAgencyInvoiceNumber: "EG15555155",
  travelAgencyName: "ACME Agency",
  travelAgencyPlanName: "B733",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `bookingCode`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique identifier of the reservation in the global distribution system.                   | X36Q9C                                                                                        |
| `issuedAddress`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The address of the place/agency that issued the ticket.                                       | 123 Broadway, New York                                                                        |
| `issuedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date that the ticket was last issued in the airline reservation system.                   | 2013-07-16T19:23:00.000+00:00                                                                 |
| `issuingCarrierCode`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | For airline aggregators, three-character IATA code of the airline issuing the ticket.         | 649                                                                                           |
| `legs`                                                                                        | [components.AirlineLeg](../../models/components/airlineleg.md)[]                              | :heavy_minus_sign:                                                                            | An array of separate trip segments. Each leg contains detailed itinerary information.         |                                                                                               |
| `passengerNameRecord`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The Passenger Name Record (PNR) in the airline reservation system.                            | JOHN L                                                                                        |
| `passengers`                                                                                  | [components.AirlinePassenger](../../models/components/airlinepassenger.md)[]                  | :heavy_minus_sign:                                                                            | An array of the travelling passengers.                                                        |                                                                                               |
| `reservationSystem`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the reservation system.                                                           | Amadeus                                                                                       |
| `restrictedTicket`                                                                            | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Indicates whether the ticket is restricted (refundable).                                      | false                                                                                         |
| `ticketDeliveryMethod`                                                                        | [components.TicketDeliveryMethod](../../models/components/ticketdeliverymethod.md)            | :heavy_minus_sign:                                                                            | The delivery method of the ticket.                                                            | electronic                                                                                    |
| `ticketNumber`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The airline's unique ticket number.                                                           | 123-1234-151555                                                                               |
| `travelAgencyCode`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The IATA travel agency code.                                                                  | 12345                                                                                         |
| `travelAgencyInvoiceNumber`                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The reference number of the invoice that was issued by the travel agency.                     | EG15555155                                                                                    |
| `travelAgencyName`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the travel agency.                                                                | ACME Agency                                                                                   |
| `travelAgencyPlanName`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the travel agency plan.                                                           | B733                                                                                          |