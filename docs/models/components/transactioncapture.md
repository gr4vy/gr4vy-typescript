# TransactionCapture

Request body for capturing an authorized transaction

## Example Usage

```typescript
import { TransactionCapture } from "@gr4vy/sdk/models/components";
import { RFCDate } from "@gr4vy/sdk/types";

let value: TransactionCapture = {
  amount: 1299,
  airline: {
    bookingCode: "X36Q9C",
    issuedAddress: "123 Broadway, New York",
    issuedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    issuingCarrierCode: "A3",
    legs: [
      {
        arrivalAirport: "LAX",
        arrivalAt: new Date("2013-07-16T19:23:00.000+00:00"),
        arrivalCity: "Los Angeles",
        arrivalCountry: "US",
        carrierCode: "BA",
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
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                     | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The amount to capture. This normally needs to be equal or less than the authorized amount, unless over-capture is available. | 1299                                                                                                                         |
| `airline`                                                                                                                    | [components.Airline](../../models/components/airline.md)                                                                     | :heavy_minus_sign:                                                                                                           | The airline data to submit to the payment service during the capture call.                                                   |                                                                                                                              |