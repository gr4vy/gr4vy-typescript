# CheckoutSessions
(*checkoutSessions*)

## Overview

### Available Operations

* [create](#create) - Create checkout session
* [get](#get) - Get checkout session
* [update](#update) - Update checkout session
* [delete](#delete) - Delete checkout session

## create

Create a new checkout session.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";
import { RFCDate } from "@gr4vy/sdk/types";

const gr4vy = new Gr4vy({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await gr4vy.checkoutSessions.create({
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
        phoneNumber: "+14155552671",
        address: {
          city: "San Jose",
          country: "DE",
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
          phoneNumber: "+14155552671",
          ticketNumber: "BA1236699999",
          title: "Mr.",
          countryCode: "DE",
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
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { checkoutSessionsCreate } from "@gr4vy/sdk/funcs/checkoutSessionsCreate.js";
import { RFCDate } from "@gr4vy/sdk/types";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await checkoutSessionsCreate(gr4vy, {
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
        phoneNumber: "+14155552671",
        address: {
          city: "San Jose",
          country: "DE",
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
      issuingCarrierCode: "A3",
      legs: [
        {
          arrivalAirport: "LAX",
          arrivalAt: new Date("2013-07-16T19:23:00.000+00:00"),
          arrivalCity: "Los Angeles",
          arrivalCountry: "DE",
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
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CheckoutSessionUpdate](../../models/components/checkoutsessionupdate.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CheckoutSession](../../models/components/checkoutsession.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## get

Retrieve the information stored on a checkout session.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await gr4vy.checkoutSessions.get("4137b1cf-39ac-42a8-bad6-1c680d5dab6b");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { checkoutSessionsGet } from "@gr4vy/sdk/funcs/checkoutSessionsGet.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await checkoutSessionsGet(gr4vy, "4137b1cf-39ac-42a8-bad6-1c680d5dab6b");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sessionId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the checkout session.                                                                                                                                                | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.CheckoutSession](../../models/components/checkoutsession.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## update

Update the information stored on a checkout session.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";
import { RFCDate } from "@gr4vy/sdk/types";

const gr4vy = new Gr4vy({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await gr4vy.checkoutSessions.update({
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
    buyer: {
      displayName: "John Doe",
      externalIdentifier: "buyer-12345",
      billingDetails: {
        firstName: "John",
        lastName: "Doe",
        emailAddress: "john@example.com",
        phoneNumber: "+442071838750",
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
          country: "GB",
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
          phoneNumber: "+442071838750",
          ticketNumber: "BA1236699999",
          title: "Mr.",
        },
        {
          ageGroup: "adult",
          dateOfBirth: new RFCDate("2013-07-16"),
          emailAddress: "john@example.com",
          firstName: "John",
          frequentFlyerNumber: "15885566",
          lastName: "Luhn",
          passportNumber: "11117700225",
          phoneNumber: "+14155552671",
          ticketNumber: "BA1236699999",
          title: "Mr.",
        },
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
  }, "4137b1cf-39ac-42a8-bad6-1c680d5dab6b");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { checkoutSessionsUpdate } from "@gr4vy/sdk/funcs/checkoutSessionsUpdate.js";
import { RFCDate } from "@gr4vy/sdk/types";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await checkoutSessionsUpdate(gr4vy, {
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
    buyer: {
      displayName: "John Doe",
      externalIdentifier: "buyer-12345",
      billingDetails: {
        firstName: "John",
        lastName: "Doe",
        emailAddress: "john@example.com",
        phoneNumber: "+442071838750",
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
          country: "GB",
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
          phoneNumber: "+442071838750",
          ticketNumber: "BA1236699999",
          title: "Mr.",
        },
        {
          ageGroup: "adult",
          dateOfBirth: new RFCDate("2013-07-16"),
          emailAddress: "john@example.com",
          firstName: "John",
          frequentFlyerNumber: "15885566",
          lastName: "Luhn",
          passportNumber: "11117700225",
          phoneNumber: "+14155552671",
          ticketNumber: "BA1236699999",
          title: "Mr.",
        },
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
  }, "4137b1cf-39ac-42a8-bad6-1c680d5dab6b");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sessionId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the checkout session.                                                                                                                                                | [object Object]                                                                                                                                                                |
| `checkoutSessionUpdate`                                                                                                                                                        | [components.CheckoutSessionUpdate](../../models/components/checkoutsessionupdate.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.CheckoutSession](../../models/components/checkoutsession.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## delete

Deleta a checkout session and all of its (PCI) data.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  await gr4vy.checkoutSessions.delete("4137b1cf-39ac-42a8-bad6-1c680d5dab6b");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { checkoutSessionsDelete } from "@gr4vy/sdk/funcs/checkoutSessionsDelete.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await checkoutSessionsDelete(gr4vy, "4137b1cf-39ac-42a8-bad6-1c680d5dab6b");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sessionId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the checkout session.                                                                                                                                                | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |