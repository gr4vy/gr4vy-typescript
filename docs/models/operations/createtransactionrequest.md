# CreateTransactionRequest

## Example Usage

```typescript
import { CreateTransactionRequest } from "@gr4vy/sdk/models/operations";
import { RFCDate } from "@gr4vy/sdk/types";

let value: CreateTransactionRequest = {
  idempotencyKey: "request-12345",
  transactionCreate: {
    amount: 1299,
    currency: "EUR",
    country: "US",
    paymentMethod: {
      id: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
      securityCode: "123",
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
          kind: "uy.rut",
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
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    buyerExternalIdentifier: "buyer-12345",
    giftCards: [
      {
        id: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
        amount: 1299,
      },
    ],
    externalIdentifier: "transaction-12345",
    threeDSecureData: {
      cavv: "3q2+78r+ur7erb7vyv66vv8=",
      eci: "05",
      version: "2.1.0",
      directoryResponse: "C",
      scheme: "visa",
      authenticationResponse: "Y",
      cavvAlgorithm: "A",
      xid: "12345",
    },
    metadata: {
      "cohort": "cohort-12345",
      "order": "order-12345",
    },
    airline: {
      bookingCode: "X36Q9C",
      isCardholderTraveling: true,
      issuedAddress: "123 Broadway, New York",
      issuedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      issuingCarrierCode: "649",
      issuingCarrierName: "Air Transat A.T. Inc",
      issuingIataDesignator: "TS",
      issuingIcaoCode: "TSC",
      legs: [
        {
          arrivalAirport: "LAX",
          arrivalAt: new Date("2013-07-16T19:23:00.000+00:00"),
          arrivalCity: "Los Angeles",
          arrivalCountry: "US",
          carrierCode: "649",
          carrierName: "Air Transat A.T. Inc",
          iataDesignator: "TS",
          icaoCode: "TSC",
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
          seatClass: "F",
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
    statementDescriptor: {
      name: "ACME",
      description: "ACME San Jose Electronics",
      city: "San Jose",
      country: "US",
      phoneNumber: "+1234567890",
      url: "www.example.com",
    },
    previousSchemeTransactionId: "123456789012345",
    browserInfo: {
      javascriptEnabled: false,
      javaEnabled: false,
      language: "<value>",
      colorDepth: 487989,
      screenHeight: 196063,
      screenWidth: 390180,
      timeZoneOffset: 572692,
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      userDevice: "desktop",
      acceptHeader: "*/*",
    },
    shippingDetailsId: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
    antiFraudFingerprint: "yGeBAFYgFmM=",
    paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
    recipient: {
      firstName: "",
      lastName: "",
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
      accountNumber: "act12345",
      dateOfBirth: new RFCDate("1995-12-23"),
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                 | Type                                                                                                                                                                                                  | Required                                                                                                                                                                                              | Description                                                                                                                                                                                           | Example                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timeoutInSeconds`                                                                                                                                                                                    | *number*                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                    | N/A                                                                                                                                                                                                   |                                                                                                                                                                                                       |
| `merchantAccountId`                                                                                                                                                                                   | *string*                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                    | The ID of the merchant account to use for this request.                                                                                                                                               |                                                                                                                                                                                                       |
| `idempotencyKey`                                                                                                                                                                                      | *string*                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                    | A unique key that identifies this request. Providing this header will make this an idempotent request. We recommend using V4 UUIDs, or another random string with enough entropy to avoid collisions. | request-12345                                                                                                                                                                                         |
| `transactionCreate`                                                                                                                                                                                   | [components.TransactionCreate](../../models/components/transactioncreate.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                    | N/A                                                                                                                                                                                                   |                                                                                                                                                                                                       |