# PaymentOptions
(*paymentOptions*)

## Overview

### Available Operations

* [list](#list) - List payment options

## list

List the payment options available at checkout. filtering by country, currency, and additional fields passed to Flow rules.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await gr4vy.paymentOptions.list({
    metadata: {
      "cohort": "a",
    },
    country: "US",
    currency: "USD",
    amount: 1299,
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
        sellerCountry: "GB",
      },
    ],
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
import { paymentOptionsList } from "@gr4vy/sdk/funcs/paymentOptionsList.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await paymentOptionsList(gr4vy, {
    metadata: {
      "cohort": "a",
    },
    country: "US",
    currency: "USD",
    amount: 1299,
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
        sellerCountry: "GB",
      },
    ],
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
| `request`                                                                                                                                                                      | [components.PaymentOptionRequest](../../models/components/paymentoptionrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CollectionNoCursorPaymentOption](../../models/components/collectionnocursorpaymentoption.md)\>**

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