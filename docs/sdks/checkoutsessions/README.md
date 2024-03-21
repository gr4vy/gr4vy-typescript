# CheckoutSessions
(*checkoutSessions*)

## Overview

A Checkout Session represents the session of a user as they progress
through an online checkout.

### Available Operations

* [newCheckoutSession](#newcheckoutsession) - New checkout session
* [getCheckoutSession](#getcheckoutsession) - Get checkout session
* [deleteCheckoutSession](#deletecheckoutsession) - Delete checkout session
* [updateCheckoutSessionFields](#updatecheckoutsessionfields) - Update fields for checkout session

## newCheckoutSession

Creates a new Checkout Session.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/node";
import { ProductType } from "@gr4vy/node/models/components";

async function run() {
  const sdk = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.checkoutSessions.newCheckoutSession({
    cartItems: [
      {
        name: "GoPro HERO9 Camcorder",
        quantity: 1,
        unitAmount: 37999,
        discountAmount: 0,
        taxAmount: 0,
        externalIdentifier: "item-789123",
        sku: "sku-789123",
        productUrl: "https://example.com/items/gopro",
        imageUrl: "https://example.com/images/items/gopro.png",
        categories: [
          "<value>",
        ],
        productType: ProductType.Physical,
      },
    ],
    metadata: {
      "key": "value",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CheckoutSessionCreateRequest](../../models/components/checkoutsessioncreaterequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.NewCheckoutSessionResponse](../../models/operations/newcheckoutsessionresponse.md)>**
### Errors

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.Error401Unauthorized    | 401                            | application/json               |
| errors.Error409DuplicateRecord | 409                            | application/json               |
| errors.SDKError                | 4xx-5xx                        | */*                            |

## getCheckoutSession

Gets details about a current Checkout Session.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/node";

async function run() {
  const sdk = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const checkoutSessionId = "8724fd24-5489-4a5d-90fd-0604df7d3b83";
  
  const result = await sdk.checkoutSessions.getCheckoutSession(checkoutSessionId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `checkoutSessionId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a Checkout Session.                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.GetCheckoutSessionResponse](../../models/operations/getcheckoutsessionresponse.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## deleteCheckoutSession

Deletes a Checkout Session.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/node";

async function run() {
  const sdk = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const checkoutSessionId = "8724fd24-5489-4a5d-90fd-0604df7d3b83";
  
  const result = await sdk.checkoutSessions.deleteCheckoutSession(checkoutSessionId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `checkoutSessionId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a Checkout Session.                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.ErrorGeneric](../../models/components/errorgeneric.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## updateCheckoutSessionFields

Updates the Secure Fields of the Checkout Session.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/node";
import { CheckoutSessionFieldsClickToPayPaymentMethodMethod } from "@gr4vy/node/models/components";

async function run() {
  const sdk = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const checkoutSessionId = "8724fd24-5489-4a5d-90fd-0604df7d3b83";
  const checkoutSessionSecureFieldsUpdate = {
  paymentMethod:     {
        method: CheckoutSessionFieldsClickToPayPaymentMethodMethod.ClickToPay,
        merchantTransactionId: "1a3f0b9.3f334ba9.v094c1c526e0e39c10491a6a947249b5a9200ed6",
        srcCorrelationId: "34f4a24c.977cf2c2-3cv1-489e-b024-188a11a07491",
      },
  };
  
  const result = await sdk.checkoutSessions.updateCheckoutSessionFields(checkoutSessionId, checkoutSessionSecureFieldsUpdate);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `checkoutSessionId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a Checkout Session.                                                                                                                                          | [object Object]                                                                                                                                                                |
| `checkoutSessionSecureFieldsUpdate`                                                                                                                                            | [components.CheckoutSessionSecureFieldsUpdate](../../models/components/checkoutsessionsecurefieldsupdate.md)                                                                   | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.ErrorGeneric](../../models/components/errorgeneric.md)>**
### Errors

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.Error401Unauthorized    | 401                            | application/json               |
| errors.Error404NotFound        | 404                            | application/json               |
| errors.Error429TooManyRequests | 429                            | application/json               |
| errors.SDKError                | 4xx-5xx                        | */*                            |
