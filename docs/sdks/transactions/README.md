# Transactions
(*transactions*)

## Overview

### Available Operations

* [list](#list) - List transactions
* [capture](#capture) - Capture transaction
* [void](#void) - Void transaction
* [summary](#summary) - Get transaction summary

## list

List all transactions.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await gr4vy.transactions.list({
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    createdAtLte: new Date("2022-01-01T12:00:00+08:00"),
    createdAtGte: new Date("2022-01-01T12:00:00+08:00"),
    updatedAtLte: new Date("2022-01-01T12:00:00+08:00"),
    updatedAtGte: new Date("2022-01-01T12:00:00+08:00"),
    status: [
      "authorization_succeeded",
    ],
    metadata: [
      "{\"first_key\":\"first_value\",\"second_key\":\"second_value\"}",
    ],
    amountEq: 1299,
    amountLte: 1299,
    amountGte: 1299,
    currency: [
      "EUR",
      "GBP",
      "USD",
    ],
    paymentServiceId: [
      "fffd152a-9532-4087-9a4f-de58754210f0",
    ],
    method: [
      "card",
    ],
    errorCode: [
      "insufficient_funds",
    ],
    hasRefunds: true,
    pendingReview: true,
    checkoutSessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
    reconciliationId: "7jZXl4gBUNl0CnaLEnfXbt",
    hasGiftCardRedemptions: true,
    giftCardId: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
    giftCardLast4: "7890",
    hasSettlements: true,
    paymentMethodBin: "411111",
    paymentSource: [
      "recurring",
    ],
    isSubsequentPayment: true,
    merchantInitiated: true,
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
import { transactionsList } from "@gr4vy/sdk/funcs/transactionsList.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsList(gr4vy, {
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    createdAtLte: new Date("2022-01-01T12:00:00+08:00"),
    createdAtGte: new Date("2022-01-01T12:00:00+08:00"),
    updatedAtLte: new Date("2022-01-01T12:00:00+08:00"),
    updatedAtGte: new Date("2022-01-01T12:00:00+08:00"),
    status: [
      "authorization_succeeded",
    ],
    metadata: [
      "{\"first_key\":\"first_value\",\"second_key\":\"second_value\"}",
    ],
    amountEq: 1299,
    amountLte: 1299,
    amountGte: 1299,
    currency: [
      "EUR",
      "GBP",
      "USD",
    ],
    paymentServiceId: [
      "fffd152a-9532-4087-9a4f-de58754210f0",
    ],
    method: [
      "card",
    ],
    errorCode: [
      "insufficient_funds",
    ],
    hasRefunds: true,
    pendingReview: true,
    checkoutSessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
    reconciliationId: "7jZXl4gBUNl0CnaLEnfXbt",
    hasGiftCardRedemptions: true,
    giftCardId: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
    giftCardLast4: "7890",
    hasSettlements: true,
    paymentMethodBin: "411111",
    paymentSource: [
      "recurring",
    ],
    isSubsequentPayment: true,
    merchantInitiated: true,
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
| `request`                                                                                                                                                                      | [operations.ListTransactionsRequest](../../models/operations/listtransactionsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TransactionSummaryCollection](../../models/components/transactionsummarycollection.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## capture

Capture an authorized transaction.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";
import { RFCDate } from "@gr4vy/sdk/types";

const gr4vy = new Gr4vy({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await gr4vy.transactions.capture({
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
          arrivalCountry: "DE",
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
          countryCode: "GB",
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
  }, "02e83f44-782a-4c42-883b-15a3b3e2f3b5");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { transactionsCapture } from "@gr4vy/sdk/funcs/transactionsCapture.js";
import { RFCDate } from "@gr4vy/sdk/types";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsCapture(gr4vy, {
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
  }, "02e83f44-782a-4c42-883b-15a3b3e2f3b5");

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
| `transactionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `transactionCapture`                                                                                                                                                           | [components.TransactionCapture](../../models/components/transactioncapture.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Transaction](../../models/components/transaction.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## void

Void an authorized transaction.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await gr4vy.transactions.void("26740073-c9e5-4864-9ecf-5856a8e566d6");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { transactionsVoid } from "@gr4vy/sdk/funcs/transactionsVoid.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsVoid(gr4vy, "26740073-c9e5-4864-9ecf-5856a8e566d6");

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
| `transactionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Transaction](../../models/components/transaction.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## summary

Fetch a summary for a transaction.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await gr4vy.transactions.summary("7099948d-7286-47e4-aad8-b68f7eb44591");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { transactionsSummary } from "@gr4vy/sdk/funcs/transactionsSummary.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsSummary(gr4vy, "7099948d-7286-47e4-aad8-b68f7eb44591");

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
| `transactionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.TransactionStatusSummary](../../models/components/transactionstatussummary.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |