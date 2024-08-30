# Buyers
(*buyers*)

## Overview

In Gr4vy, a buyer represents your customer, the shopper who's performing
a checkout and making a purchase.

A buyer can be used by you to:

* Display a human readable name (`display_name`) for a buyer in the Gr4vy
admin panel
* Associate multiple stored payment methods with a single user
* Initialize **Gr4vy Embed** with the buyer ID, automatically displaying the
  buyer's previously stored payment methods, allowing for faster checkout.

### Available Operations

* [listBuyers](#listbuyers) - List buyers
* [newBuyer](#newbuyer) - New buyer
* [getBuyer](#getbuyer) - Get buyer
* [updateBuyer](#updatebuyer) - Update buyer
* [deleteBuyer](#deletebuyer) - Delete buyer
* [listBuyerShippingDetails](#listbuyershippingdetails) - List buyer shipping details
* [newBuyerShippingDetail](#newbuyershippingdetail) - New buyer shipping detail
* [updateBuyerShippingDetail](#updatebuyershippingdetail) - Update buyer shipping details
* [deleteBuyerShippingDetail](#deletebuyershippingdetail) - Delete buyer shipping detail
* [getBuyerBillingDetails](#getbuyerbillingdetails) - Get buyer billing details
* [updateBuyerBillingDetails](#updatebuyerbillingdetails) - Update buyer billing details

## listBuyers

Returns a list of buyers.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.buyers.listBuyers("user-12345", 1, "ZXhhbXBsZTE");

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { buyersListBuyers } from "@gr4vy/sdk/funcs/buyersListBuyers.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await buyersListBuyers(gr4vy, "user-12345", 1, "ZXhhbXBsZTE");

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

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `search`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Filters the results to only the buyers for which the `display_name` or<br/>`external_identifier` matches this value. This field allows for a partial<br/>match, matching any buyer for which either of the fields partially or<br/>completely matches.<br/><br/>Please do not use this query parameter in a production application, as this API call is<br/>very inefficient and may negatively impact transaction performance. | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `externalIdentifier`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Filters the results to only the items for which the `buyer` has an<br/>`external_identifier` that exactly matches this value.                                                                                                                                                                                                                                                                                                                                                                                                    | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `limit`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Defines the maximum number of items to return for this request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `cursor`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | A cursor that identifies the page of results to return. This is used to<br/>paginate the results of this API.<br/><br/>For the first page of results, this parameter can be left out.<br/>For additional pages, use the value returned by the API in<br/>the `next_cursor` field. Similarly the `previous_cursor` can be used to<br/>reverse backwards in the list.                                                                                                                                                              | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `options`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `options.retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### Response

**Promise\<[components.Buyers](../../models/components/buyers.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## newBuyer

Adds a buyer, allowing for payment methods and transactions to be associated
to this buyer.


### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.buyers.newBuyer({
    externalIdentifier: "412231123",
    displayName: "John L.",
    billingDetails: {
      firstName: "John",
      lastName: "Lunn",
      emailAddress: "john@example.com",
      phoneNumber: "+1234567890",
      address: {
        city: "London",
        country: "GB",
        postalCode: "789123",
        state: "Greater London",
        stateCode: "GB-LND",
        houseNumberOrName: "10",
        line1: "10 Oxford Street",
        line2: "New Oxford Court",
        organization: "Gr4vy",
      },
      taxId: {
        value: "12345678931",
        kind: "gb.vat",
      },
    },
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
import { buyersNewBuyer } from "@gr4vy/sdk/funcs/buyersNewBuyer.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await buyersNewBuyer(gr4vy, {
    externalIdentifier: "412231123",
    displayName: "John L.",
    billingDetails: {
      firstName: "John",
      lastName: "Lunn",
      emailAddress: "john@example.com",
      phoneNumber: "+1234567890",
      address: {
        city: "London",
        country: "GB",
        postalCode: "789123",
        state: "Greater London",
        stateCode: "GB-LND",
        houseNumberOrName: "10",
        line1: "10 Oxford Street",
        line2: "New Oxford Court",
        organization: "Gr4vy",
      },
      taxId: {
        value: "12345678931",
        kind: "gb.vat",
      },
    },
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
| `request`                                                                                                                                                                      | [components.BuyerRequest](../../models/components/buyerrequest.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Buyer](../../models/components/buyer.md)\>**

### Errors

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.Error400BadRequest      | 400                            | application/json               |
| errors.Error401Unauthorized    | 401                            | application/json               |
| errors.Error409DuplicateRecord | 409                            | application/json               |
| errors.SDKError                | 4xx-5xx                        | */*                            |


## getBuyer

Gets the information about a buyer.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.buyers.getBuyer("8724fd24-5489-4a5d-90fd-0604df7d3b83");

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { buyersGetBuyer } from "@gr4vy/sdk/funcs/buyersGetBuyer.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await buyersGetBuyer(gr4vy, "8724fd24-5489-4a5d-90fd-0604df7d3b83");

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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buyerId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a buyer.                                                                                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Buyer](../../models/components/buyer.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## updateBuyer

Updates a buyer's details.


### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.buyers.updateBuyer("8724fd24-5489-4a5d-90fd-0604df7d3b83", {
    externalIdentifier: "42623266",
    displayName: "John D.",
    billingDetails: {
      firstName: "John",
      lastName: "Lunn",
      emailAddress: "john@example.com",
      phoneNumber: "+1234567890",
      address: {
        city: "London",
        country: "GB",
        postalCode: "789123",
        state: "Greater London",
        stateCode: "GB-LND",
        houseNumberOrName: "10",
        line1: "10 Oxford Street",
        line2: "New Oxford Court",
        organization: "Gr4vy",
      },
      taxId: {
        value: "12345678931",
        kind: "gb.vat",
      },
    },
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
import { buyersUpdateBuyer } from "@gr4vy/sdk/funcs/buyersUpdateBuyer.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await buyersUpdateBuyer(gr4vy, "8724fd24-5489-4a5d-90fd-0604df7d3b83", {
    externalIdentifier: "42623266",
    displayName: "John D.",
    billingDetails: {
      firstName: "John",
      lastName: "Lunn",
      emailAddress: "john@example.com",
      phoneNumber: "+1234567890",
      address: {
        city: "London",
        country: "GB",
        postalCode: "789123",
        state: "Greater London",
        stateCode: "GB-LND",
        houseNumberOrName: "10",
        line1: "10 Oxford Street",
        line2: "New Oxford Court",
        organization: "Gr4vy",
      },
      taxId: {
        value: "12345678931",
        kind: "gb.vat",
      },
    },
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buyerId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a buyer.                                                                                                                                                     | [object Object]                                                                                                                                                                |
| `buyerUpdate`                                                                                                                                                                  | [components.BuyerUpdate](../../models/components/buyerupdate.md)                                                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Buyer](../../models/components/buyer.md)\>**

### Errors

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.Error400BadRequest      | 400                            | application/json               |
| errors.Error401Unauthorized    | 401                            | application/json               |
| errors.Error404NotFound        | 404                            | application/json               |
| errors.Error409DuplicateRecord | 409                            | application/json               |
| errors.SDKError                | 4xx-5xx                        | */*                            |


## deleteBuyer

Deletes a buyer record. Any associated stored payment methods will remain
in the system but no longer associated to the buyer.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await gr4vy.buyers.deleteBuyer("8724fd24-5489-4a5d-90fd-0604df7d3b83");

  
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { buyersDeleteBuyer } from "@gr4vy/sdk/funcs/buyersDeleteBuyer.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await buyersDeleteBuyer(gr4vy, "8724fd24-5489-4a5d-90fd-0604df7d3b83");

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
| `buyerId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a buyer.                                                                                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<void\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## listBuyerShippingDetails

Retrieve all shipping details for a buyer.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.buyers.listBuyerShippingDetails("8724fd24-5489-4a5d-90fd-0604df7d3b83");

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { buyersListBuyerShippingDetails } from "@gr4vy/sdk/funcs/buyersListBuyerShippingDetails.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await buyersListBuyerShippingDetails(gr4vy, "8724fd24-5489-4a5d-90fd-0604df7d3b83");

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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buyerId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a buyer.                                                                                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.ShippingDetails](../../models/components/shippingdetails.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## newBuyerShippingDetail

Adds a buyer shipping detail.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.buyers.newBuyerShippingDetail("8724fd24-5489-4a5d-90fd-0604df7d3b83", {
    firstName: "John",
    lastName: "Lunn",
    emailAddress: "john@example.com",
    phoneNumber: "+1234567890",
    address: {
      city: "London",
      country: "GB",
      postalCode: "789123",
      state: "Greater London",
      stateCode: "GB-LND",
      houseNumberOrName: "10",
      line1: "10 Oxford Street",
      line2: "New Oxford Court",
      organization: "Gr4vy",
    },
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
import { buyersNewBuyerShippingDetail } from "@gr4vy/sdk/funcs/buyersNewBuyerShippingDetail.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await buyersNewBuyerShippingDetail(gr4vy, "8724fd24-5489-4a5d-90fd-0604df7d3b83", {
    firstName: "John",
    lastName: "Lunn",
    emailAddress: "john@example.com",
    phoneNumber: "+1234567890",
    address: {
      city: "London",
      country: "GB",
      postalCode: "789123",
      state: "Greater London",
      stateCode: "GB-LND",
      houseNumberOrName: "10",
      line1: "10 Oxford Street",
      line2: "New Oxford Court",
      organization: "Gr4vy",
    },
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buyerId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a buyer.                                                                                                                                                     | [object Object]                                                                                                                                                                |
| `shippingDetailRequest`                                                                                                                                                        | [components.ShippingDetailRequest](../../models/components/shippingdetailrequest.md)                                                                                           | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.ShippingDetail](../../models/components/shippingdetail.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## updateBuyerShippingDetail

Updates shipping detail for a buyer.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.buyers.updateBuyerShippingDetail("8724fd24-5489-4a5d-90fd-0604df7d3b83", "8724fd24-5489-4a5d-90fd-0604df7d3b83", {
    firstName: "John",
    lastName: "Lunn",
    emailAddress: "john@example.com",
    phoneNumber: "+1234567890",
    address: {
      city: "London",
      country: "GB",
      postalCode: "789123",
      state: "Greater London",
      stateCode: "GB-LND",
      houseNumberOrName: "10",
      line1: "10 Oxford Street",
      line2: "New Oxford Court",
      organization: "Gr4vy",
    },
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
import { buyersUpdateBuyerShippingDetail } from "@gr4vy/sdk/funcs/buyersUpdateBuyerShippingDetail.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await buyersUpdateBuyerShippingDetail(gr4vy, "8724fd24-5489-4a5d-90fd-0604df7d3b83", "8724fd24-5489-4a5d-90fd-0604df7d3b83", {
    firstName: "John",
    lastName: "Lunn",
    emailAddress: "john@example.com",
    phoneNumber: "+1234567890",
    address: {
      city: "London",
      country: "GB",
      postalCode: "789123",
      state: "Greater London",
      stateCode: "GB-LND",
      houseNumberOrName: "10",
      line1: "10 Oxford Street",
      line2: "New Oxford Court",
      organization: "Gr4vy",
    },
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buyerId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a buyer.                                                                                                                                                     | [object Object]                                                                                                                                                                |
| `shippingDetailId`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a buyer's shipping detail.                                                                                                                                   | [object Object]                                                                                                                                                                |
| `shippingDetailUpdateRequest`                                                                                                                                                  | [components.ShippingDetailUpdateRequest](../../models/components/shippingdetailupdaterequest.md)                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.ShippingDetail](../../models/components/shippingdetail.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## deleteBuyerShippingDetail

Deletes a buyer shipping detail.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await gr4vy.buyers.deleteBuyerShippingDetail("8724fd24-5489-4a5d-90fd-0604df7d3b83", "8724fd24-5489-4a5d-90fd-0604df7d3b83");

  
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { buyersDeleteBuyerShippingDetail } from "@gr4vy/sdk/funcs/buyersDeleteBuyerShippingDetail.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await buyersDeleteBuyerShippingDetail(gr4vy, "8724fd24-5489-4a5d-90fd-0604df7d3b83", "8724fd24-5489-4a5d-90fd-0604df7d3b83");

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
| `buyerId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a buyer.                                                                                                                                                     | [object Object]                                                                                                                                                                |
| `shippingDetailId`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a buyer's shipping detail.                                                                                                                                   | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<void\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## getBuyerBillingDetails

Gets the information about a buyer's billing details. Note that only one
of either buyer's ID or external identifier may be passed as a
query parameter, and not both.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.buyers.getBuyerBillingDetails("8724fd24-5489-4a5d-90fd-0604df7d3b83", "user-12345");

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { buyersGetBuyerBillingDetails } from "@gr4vy/sdk/funcs/buyersGetBuyerBillingDetails.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await buyersGetBuyerBillingDetails(gr4vy, "8724fd24-5489-4a5d-90fd-0604df7d3b83", "user-12345");

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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buyerId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Filters the results to only the items for which the `buyer` has an<br/>`id` that matches this value.                                                                           | [object Object]                                                                                                                                                                |
| `buyerExternalIdentifier`                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Filters the results to only the items for which the `buyer` has an<br/>`external_identifier` that matches this value.                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.BillingDetails](../../models/components/billingdetails.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## updateBuyerBillingDetails

Updates the billing details of a buyer. Note that only one of either
buyer's ID or external identifier may be passed as a query
parameter, and not both.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.buyers.updateBuyerBillingDetails("8724fd24-5489-4a5d-90fd-0604df7d3b83", "user-12345", {
    firstName: "John",
    lastName: "Lunn",
    emailAddress: "john@example.com",
    phoneNumber: "+1234567890",
    address: {
      city: "London",
      country: "GB",
      postalCode: "789123",
      state: "Greater London",
      stateCode: "GB-LND",
      houseNumberOrName: "10",
      line1: "10 Oxford Street",
      line2: "New Oxford Court",
      organization: "Gr4vy",
    },
    taxId: {
      value: "12345678931",
      kind: "gb.vat",
    },
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
import { buyersUpdateBuyerBillingDetails } from "@gr4vy/sdk/funcs/buyersUpdateBuyerBillingDetails.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await buyersUpdateBuyerBillingDetails(gr4vy, "8724fd24-5489-4a5d-90fd-0604df7d3b83", "user-12345", {
    firstName: "John",
    lastName: "Lunn",
    emailAddress: "john@example.com",
    phoneNumber: "+1234567890",
    address: {
      city: "London",
      country: "GB",
      postalCode: "789123",
      state: "Greater London",
      stateCode: "GB-LND",
      houseNumberOrName: "10",
      line1: "10 Oxford Street",
      line2: "New Oxford Court",
      organization: "Gr4vy",
    },
    taxId: {
      value: "12345678931",
      kind: "gb.vat",
    },
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buyerId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Filters the results to only the items for which the `buyer` has an<br/>`id` that matches this value.                                                                           | [object Object]                                                                                                                                                                |
| `buyerExternalIdentifier`                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Filters the results to only the items for which the `buyer` has an<br/>`external_identifier` that matches this value.                                                          | [object Object]                                                                                                                                                                |
| `billingDetailsUpdateRequest`                                                                                                                                                  | [components.BillingDetailsUpdateRequest](../../models/components/billingdetailsupdaterequest.md)                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.BillingDetails](../../models/components/billingdetails.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
