# CheckoutSessionUpdate

Base model with JSON encoders.

## Example Usage

```typescript
import { CheckoutSessionUpdate } from "@gr4vy/sdk/models/components";
import { RFCDate } from "@gr4vy/sdk/types";

let value: CheckoutSessionUpdate = {
  cartItems: [
    {
      name: "GoPro HD",
      quantity: 2,
      unitAmount: 1299,
      discountAmount: 0,
      taxAmount: 0,
      externalIdentifier: "goprohd",
      sku: "GPHD1078",
      productUrl: "https://example.com/catalog/go-pro-hd",
      imageUrl: "https://example.com/images/go-pro-hd.jpg",
      categories: [
        "camera",
        "travel",
        "gear",
      ],
      productType: "physical",
    },
  ],
  metadata: {},
  buyer: {
    displayName: "John Doe",
    externalIdentifier: "buyer-12345",
    billingDetails: {
      firstName: "John",
      lastName: "Doe",
      emailAddress: "john@example.com",
      phoneNumber: "+14155552671",
      address: {
        city: "San Jose",
        country: "GB",
        postalCode: "94560",
        state: "California",
        stateCode: "GB-LND",
        houseNumberOrName: "10",
        line1: "Stafford Appartments",
        line2: "29th Street",
        organization: "Gr4vy",
      },
      taxId: {
        value: "12345678931",
        kind: "us.ein",
      },
    },
    shippingDetails: {
      firstName: "John",
      lastName: "Doe",
      emailAddress: "john@example.com",
      phoneNumber: "+442071838750",
      address: {
        city: "San Jose",
        country: "US",
        postalCode: "94560",
        state: "California",
        stateCode: "GB-LND",
        houseNumberOrName: "10",
        line1: "Stafford Appartments",
        line2: "29th Street",
        organization: "Gr4vy",
      },
    },
  },
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
        arrivalCountry: "GB",
        carrierCode: "BA",
        couponNumber: "15885566",
        departureAirport: "LHR",
        departureAt: new Date("2013-07-16T19:23:00.000+00:00"),
        departureCity: "London",
        departureCountry: "DE",
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
        phoneNumber: "+442071838750",
        ticketNumber: "BA1236699999",
        title: "Mr.",
        countryCode: "GB",
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

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         | Example                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cartItems`                                                                                                                                                         | [components.CartItem](../../models/components/cartitem.md)[]                                                                                                        | :heavy_minus_sign:                                                                                                                                                  | An array of cart items that represents the line items of a transaction.                                                                                             |                                                                                                                                                                     |
| `metadata`                                                                                                                                                          | [components.CheckoutSessionUpdateMetadata](../../models/components/checkoutsessionupdatemetadata.md)                                                                | :heavy_minus_sign:                                                                                                                                                  | Any additional information about the transaction that you would like to store as key-value pairs. This data is passed to payment service providers that support it. | {<br/>"order_id": "order-12345",<br/>"cohort": "cohort-a"<br/>}                                                                                                     |
| `buyer`                                                                                                                                                             | [components.CheckoutSessionUpdateBuyer](../../models/components/checkoutsessionupdatebuyer.md)                                                                      | :heavy_minus_sign:                                                                                                                                                  | Provide buyer details for the transaction. No buyer resource will be created on Gr4vy when used.                                                                    |                                                                                                                                                                     |
| `airline`                                                                                                                                                           | [components.CheckoutSessionUpdateAirline](../../models/components/checkoutsessionupdateairline.md)                                                                  | :heavy_minus_sign:                                                                                                                                                  | The airline addendum data which describes the airline booking associated with this transaction.                                                                     |                                                                                                                                                                     |
| `expiresIn`                                                                                                                                                         | *number*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | N/A                                                                                                                                                                 |                                                                                                                                                                     |