# PaymentServices
(*paymentServices*)

## Overview

In Gr4vy, a payment service represents a configured payment provider
(Stripe, PayPal, Adyen, etc) for a specific payment type (card, bitcoin,
etc)

The payment services API can be used to:

* Provide Gr4vy with the payment credentials for a payment provider.
* Set a display name for a payment provider.

### Available Operations

* [listPaymentServices](#listpaymentservices) - List payment services
* [newPaymentService](#newpaymentservice) - New payment service
* [getPaymentService](#getpaymentservice) - Get payment service
* [updatePaymentService](#updatepaymentservice) - Update payment service
* [deletePaymentService](#deletepaymentservice) - Delete payment service
* [verifyPaymentService](#verifypaymentservice) - Verify payment service credentials

## listPaymentServices

Lists the currently configured and activated payment services.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";
import { Method } from "@gr4vy/sdk/models/operations";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const limit = 1;
  const cursor = "ZXhhbXBsZTE";
  const method = Method.Card;
  const deleted = true;
  
  const result = await sdk.paymentServices.listPaymentServices(limit, cursor, method, deleted);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Defines the maximum number of items to return for this request.                                                                                                                                                                                                                                                                             | [object Object]                                                                                                                                                                                                                                                                                                                             |
| `cursor`                                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | A cursor that identifies the page of results to return. This is used to<br/>paginate the results of this API.<br/><br/>For the first page of results, this parameter can be left out.<br/>For additional pages, use the value returned by the API in<br/>the `next_cursor` field. Similarly the `previous_cursor` can be used to<br/>reverse backwards in the list. | [object Object]                                                                                                                                                                                                                                                                                                                             |
| `method`                                                                                                                                                                                                                                                                                                                                    | [operations.Method](../../models/operations/method.md)                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Filters the results to only the items for which the `method` has been set to<br/>this value. For example `card`.                                                                                                                                                                                                                            | [object Object]                                                                                                                                                                                                                                                                                                                             |
| `deleted`                                                                                                                                                                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Filters the results to only show items which have been deleted.<br/>By default, deleted items will not be returned.                                                                                                                                                                                                                         | [object Object]                                                                                                                                                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                                                                                                                                   | RequestOptions                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                             |


### Response

**Promise<[components.PaymentServices](../../models/components/paymentservices.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## newPaymentService

Adds a new payment service by providing a custom name and a value for each of the required fields.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.paymentServices.newPaymentService({
    paymentServiceDefinitionId: "stripe-card",
    displayName: "Stripe (Main)",
    fields: [
      {
        key: "private_key",
        value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
      },
    ],
    acceptedCountries: [
      "US",
      "GB",
      "DE",
    ],
    acceptedCurrencies: [
      "EUR",
      "USD",
      "GBP",
    ],
    threeDSecureEnabled: true,
    merchantProfile: {
      amex: {},
      dankort: {},
      discover: {},
      jcb: {},
      mastercard: {},
      unionpay: {},
      visa: {},
    },
    active: true,
    openLoop: true,
    paymentMethodTokenizationEnabled: true,
    networkTokensEnabled: true,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PaymentServiceRequest](../../models/components/paymentservicerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[components.PaymentService](../../models/components/paymentservice.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## getPaymentService

Retrieves the details of a single configured payment service.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const paymentServiceId = "46973e9d-88a7-44a6-abfe-be4ff0134ff4";
  
  const result = await sdk.paymentServices.getPaymentService(paymentServiceId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `paymentServiceId`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment service.                                                                                                                                                 | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.PaymentService](../../models/components/paymentservice.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## updatePaymentService

Updates an existing payment service. Allows all fields to be changed except for the service ID.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const paymentServiceId = "46973e9d-88a7-44a6-abfe-be4ff0134ff4";
  const paymentServiceUpdate = {
    displayName: "Stripe (Main)",
    fields: [
      {
        key: "private_key",
        value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
      },
    ],
    acceptedCountries: [
      "US",
      "GB",
      "DE",
    ],
    acceptedCurrencies: [
      "EUR",
      "USD",
      "GBP",
    ],
    threeDSecureEnabled: true,
    merchantProfile: {
      amex: {},
      dankort: {},
      discover: {},
      jcb: {},
      mastercard: {},
      unionpay: {},
      visa: {},
    },
    active: true,
    openLoop: true,
    paymentMethodTokenizationEnabled: true,
    networkTokensEnabled: true,
  };
  
  const result = await sdk.paymentServices.updatePaymentService(paymentServiceId, paymentServiceUpdate);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `paymentServiceId`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment service.                                                                                                                                                 | [object Object]                                                                                                                                                                |
| `paymentServiceUpdate`                                                                                                                                                         | [components.PaymentServiceUpdate](../../models/components/paymentserviceupdate.md)                                                                                             | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.PaymentService](../../models/components/paymentservice.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## deletePaymentService

Deletes a specific active payment service.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const paymentServiceId = "46973e9d-88a7-44a6-abfe-be4ff0134ff4";
  
  const result = await sdk.paymentServices.deletePaymentService(paymentServiceId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `paymentServiceId`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment service.                                                                                                                                                 | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.DeletePaymentServiceResponse](../../models/operations/deletepaymentserviceresponse.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## verifyPaymentService

Verifies a set of credentials against a payment service.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.paymentServices.verifyPaymentService({
    paymentServiceDefinitionId: "stripe-card",
    paymentServiceId: "46973e9d-88a7-44a6-abfe-be4ff0134ff4",
    fields: [
      {
        key: "private_key",
        value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
      },
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PaymentServiceVerify](../../models/components/paymentserviceverify.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.VerifyPaymentServiceResponse](../../models/operations/verifypaymentserviceresponse.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
