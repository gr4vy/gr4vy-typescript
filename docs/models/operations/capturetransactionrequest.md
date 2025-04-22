# CaptureTransactionRequest

## Example Usage

```typescript
import { CaptureTransactionRequest } from "@gr4vy/sdk/models/operations";
import { RFCDate } from "@gr4vy/sdk/types";

let value: CaptureTransactionRequest = {
  transactionId: "0ba10bd1-14ef-4412-9545-789df2f0cd86",
  transactionCapture: {
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
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `transactionId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `timeoutInSeconds`                                                             | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `transactionCapture`                                                           | [components.TransactionCapture](../../models/components/transactioncapture.md) | :heavy_check_mark:                                                             | N/A                                                                            |