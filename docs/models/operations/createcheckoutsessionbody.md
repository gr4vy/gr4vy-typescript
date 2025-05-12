# CreateCheckoutSessionBody


## Supported Types

### `components.CheckoutSessionUpdate`

```typescript
const value: components.CheckoutSessionUpdate = {
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
      sellerCountry: "US",
    },
  ],
  metadata: {
    "cohort": "cohort-a",
    "order_id": "order-12345",
  },
  buyer: {
    displayName: "John Doe",
    externalIdentifier: "buyer-12345",
    billingDetails: {
      firstName: "John",
      lastName: "Doe",
      emailAddress: "john@example.com",
      phoneNumber: "+1234567890",
      address: {
        city: "San Jose",
        country: "US",
        postalCode: "94560",
        state: "California",
        stateCode: "US-CA",
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
      phoneNumber: "+1234567890",
      address: {
        city: "San Jose",
        country: "US",
        postalCode: "94560",
        state: "California",
        stateCode: "US-CA",
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
  },
};
```

### `components.BaseModel[]`

```typescript
const value: components.BaseModel[] = [
  {},
];
```

