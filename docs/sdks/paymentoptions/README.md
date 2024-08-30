# PaymentOptions
(*paymentOptions*)

## Overview

In Gr4vy, a payment option represents a list of methods (card, PayPal,
etc) that are available for a given locale.

The payment options API can be used to:

* Determine what types of payments can be processed in a specific locale.
* Display a list options to a buyer to choose from.

### Available Operations

* [listPaymentOptions](#listpaymentoptions) - List payment options
* [postListPaymentOptions](#postlistpaymentoptions) - List payment options with POST

## listPaymentOptions

Returns a list of available payment method options for the combination of
amount, currency, country and metadata.

If the amount is zero, payment options which do not support zero amounts,
will be omitted in the response.

Checkout flow rules are used to limit these result.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.paymentOptions.listPaymentOptions({
    country: "US",
    currency: "USD",
    amount: 500,
    metadata: "{\"restricted_items\": \"True\"}",
    locale: "en-US",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { paymentOptionsListPaymentOptions } from "@gr4vy/sdk/funcs/paymentOptionsListPaymentOptions.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await paymentOptionsListPaymentOptions(gr4vy, {
    country: "US",
    currency: "USD",
    amount: 500,
    metadata: "{\"restricted_items\": \"True\"}",
    locale: "en-US",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPaymentOptionsRequest](../../models/operations/listpaymentoptionsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaymentOptions](../../models/components/paymentoptions.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## postListPaymentOptions

Returns a list of available payment method options for the combination of
amount, currency, country, metadata and list of cart items.

If the amount is zero, payment options which do not support zero amounts,
will be omitted in the response.

Checkout flow rules are used to limit these result.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.paymentOptions.postListPaymentOptions({
    amount: 1299,
    locale: "en-US",
    currency: "USD",
    country: "US",
    metadata: {
      "key": "value",
    },
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
        productType: "physical",
      },
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { paymentOptionsPostListPaymentOptions } from "@gr4vy/sdk/funcs/paymentOptionsPostListPaymentOptions.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await paymentOptionsPostListPaymentOptions(gr4vy, {
    amount: 1299,
    locale: "en-US",
    currency: "USD",
    country: "US",
    metadata: {
      "key": "value",
    },
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
        productType: "physical",
      },
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PaymentOptionsRequest](../../models/components/paymentoptionsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaymentOptions](../../models/components/paymentoptions.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
