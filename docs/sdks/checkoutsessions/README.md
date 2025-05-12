# CheckoutSessions
(*checkoutSessions*)

## Overview

### Available Operations

* [create](#create) - Create checkout session
* [update](#update) - Update checkout session
* [get](#get) - Get checkout session
* [delete](#delete) - Delete checkout session

## create

Create a new checkout session.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";
import { RFCDate } from "@gr4vy/sdk/types";

const gr4vy = new Gr4vy({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
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
        sellerCountry: "GB",
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
          kind: "id.nik",
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
    expiresIn: 3600,
  }, 1, "default");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { withToken } from "@gr4vy/sdk/lib/auth.js";
import { checkoutSessionsCreate } from "@gr4vy/sdk/funcs/checkoutSessionsCreate.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const res = await checkoutSessionsCreate(gr4vy, [
    {},
  ], 1, "default");

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
| `timeoutInSeconds`                                                                                                                                                             | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `merchantAccountId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The ID of the merchant account to use for this request.                                                                                                                        |
| `requestBody`                                                                                                                                                                  | *operations.CreateCheckoutSessionBody*                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CheckoutSession](../../models/components/checkoutsession.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.Error400            | 400                        | application/json           |
| errors.Error401            | 401                        | application/json           |
| errors.Error403            | 403                        | application/json           |
| errors.Error403Forbidden   | 403                        | application/json           |
| errors.Error403Active      | 403                        | application/json           |
| errors.Error404            | 404                        | application/json           |
| errors.Error405            | 405                        | application/json           |
| errors.Error409            | 409                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.Error425            | 425                        | application/json           |
| errors.Error429            | 429                        | application/json           |
| errors.Error500            | 500                        | application/json           |
| errors.Error502            | 502                        | application/json           |
| errors.Error504            | 504                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## update

Update the information stored on a checkout session.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";
import { RFCDate } from "@gr4vy/sdk/types";

const gr4vy = new Gr4vy({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
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
        sellerCountry: "GB",
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
        sellerCountry: "GB",
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
          kind: "my.nric",
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
  }, "4137b1cf-39ac-42a8-bad6-1c680d5dab6b", 1, "default");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { withToken } from "@gr4vy/sdk/lib/auth.js";
import { checkoutSessionsUpdate } from "@gr4vy/sdk/funcs/checkoutSessionsUpdate.js";
import { RFCDate } from "@gr4vy/sdk/types";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
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
        sellerCountry: "GB",
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
        sellerCountry: "GB",
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
          kind: "my.nric",
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
  }, "4137b1cf-39ac-42a8-bad6-1c680d5dab6b", 1, "default");

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
| `timeoutInSeconds`                                                                                                                                                             | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `merchantAccountId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The ID of the merchant account to use for this request.                                                                                                                        |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.CheckoutSession](../../models/components/checkoutsession.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.Error400            | 400                        | application/json           |
| errors.Error401            | 401                        | application/json           |
| errors.Error403            | 403                        | application/json           |
| errors.Error403Forbidden   | 403                        | application/json           |
| errors.Error403Active      | 403                        | application/json           |
| errors.Error404            | 404                        | application/json           |
| errors.Error405            | 405                        | application/json           |
| errors.Error409            | 409                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.Error425            | 425                        | application/json           |
| errors.Error429            | 429                        | application/json           |
| errors.Error500            | 500                        | application/json           |
| errors.Error502            | 502                        | application/json           |
| errors.Error504            | 504                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## get

Retrieve the information stored on a checkout session.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const result = await gr4vy.checkoutSessions.get("4137b1cf-39ac-42a8-bad6-1c680d5dab6b", 1, "default");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { withToken } from "@gr4vy/sdk/lib/auth.js";
import { checkoutSessionsGet } from "@gr4vy/sdk/funcs/checkoutSessionsGet.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const res = await checkoutSessionsGet(gr4vy, "4137b1cf-39ac-42a8-bad6-1c680d5dab6b", 1, "default");

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
| `timeoutInSeconds`                                                                                                                                                             | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `merchantAccountId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The ID of the merchant account to use for this request.                                                                                                                        |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.CheckoutSession](../../models/components/checkoutsession.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.Error400          | 400                      | application/json         |
| errors.Error401          | 401                      | application/json         |
| errors.Error403          | 403                      | application/json         |
| errors.Error403Forbidden | 403                      | application/json         |
| errors.Error403Active    | 403                      | application/json         |
| errors.Error404          | 404                      | application/json         |
| errors.Error405          | 405                      | application/json         |
| errors.Error409          | 409                      | application/json         |
| errors.Error425          | 425                      | application/json         |
| errors.Error429          | 429                      | application/json         |
| errors.Error500          | 500                      | application/json         |
| errors.Error502          | 502                      | application/json         |
| errors.Error504          | 504                      | application/json         |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## delete

Deleta a checkout session and all of its (PCI) data.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  await gr4vy.checkoutSessions.delete("4137b1cf-39ac-42a8-bad6-1c680d5dab6b", 1, "default");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { withToken } from "@gr4vy/sdk/lib/auth.js";
import { checkoutSessionsDelete } from "@gr4vy/sdk/funcs/checkoutSessionsDelete.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const res = await checkoutSessionsDelete(gr4vy, "4137b1cf-39ac-42a8-bad6-1c680d5dab6b", 1, "default");

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
| `timeoutInSeconds`                                                                                                                                                             | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `merchantAccountId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The ID of the merchant account to use for this request.                                                                                                                        |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.Error400            | 400                        | application/json           |
| errors.Error401            | 401                        | application/json           |
| errors.Error403            | 403                        | application/json           |
| errors.Error403Forbidden   | 403                        | application/json           |
| errors.Error403Active      | 403                        | application/json           |
| errors.Error404            | 404                        | application/json           |
| errors.Error405            | 405                        | application/json           |
| errors.Error409            | 409                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.Error425            | 425                        | application/json           |
| errors.Error429            | 429                        | application/json           |
| errors.Error500            | 500                        | application/json           |
| errors.Error502            | 502                        | application/json           |
| errors.Error504            | 504                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |