# Tokens
(*tokens*)

## Overview

Endpoints related to the Gr4vy tokenization service.

### Available Operations

* [getPaymentServiceTokens](#getpaymentservicetokens) - Get payment service tokens
* [provisionPaymentServiceToken](#provisionpaymentservicetoken) - Provision payment service token
* [deletePaymentServiceToken](#deletepaymentservicetoken) - Delete payment service token
* [approvePaymentServiceTokenGet](#approvepaymentservicetokenget) - Approve payment service token
* [approvePaymentServiceTokenPost](#approvepaymentservicetokenpost) - Approve payment service token
* [getNetworkTokens](#getnetworktokens) - Get network tokens
* [provisionNetworkToken](#provisionnetworktoken) - Provision network token
* [deleteNetworkToken](#deletenetworktoken) - Delete network token
* [issueCryptogram](#issuecryptogram) - Issue cryptogram
* [suspendNetworkToken](#suspendnetworktoken) - Suspend network token
* [resumeNetworkToken](#resumenetworktoken) - Resume network token

## getPaymentServiceTokens

Get all payment service tokens for a given payment method and payment service.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.tokens.getPaymentServiceTokens("46973e9d-88a7-44a6-abfe-be4ff0134ff4");

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { tokensGetPaymentServiceTokens } from "@gr4vy/sdk/funcs/tokensGetPaymentServiceTokens.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tokensGetPaymentServiceTokens(gr4vy, "46973e9d-88a7-44a6-abfe-be4ff0134ff4");

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
| `paymentMethodId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Filters for transactions that have a payment method with an ID that matches exactly with the provided value.                                                                   | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PaymentServiceTokens](../../models/components/paymentservicetokens.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## provisionPaymentServiceToken

Tokenize stored card against a payment service.


### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.tokens.provisionPaymentServiceToken("46973e9d-88a7-44a6-abfe-be4ff0134ff4", {
    securityCode: "123",
    paymentServiceId: "a7d6b829-aea5-407d-ab7f-138784b5ad2c",
    redirectUrl: "https://example.com/callback",
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
import { tokensProvisionPaymentServiceToken } from "@gr4vy/sdk/funcs/tokensProvisionPaymentServiceToken.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tokensProvisionPaymentServiceToken(gr4vy, "46973e9d-88a7-44a6-abfe-be4ff0134ff4", {
    securityCode: "123",
    paymentServiceId: "a7d6b829-aea5-407d-ab7f-138784b5ad2c",
    redirectUrl: "https://example.com/callback",
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
| `paymentMethodId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment method.                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `paymentServiceTokenRequest`                                                                                                                                                   | [components.PaymentServiceTokenRequest](../../models/components/paymentservicetokenrequest.md)                                                                                 | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PaymentServiceToken](../../models/components/paymentservicetoken.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## deletePaymentServiceToken

Deletes a specific payment service token.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await gr4vy.tokens.deletePaymentServiceToken("46973e9d-88a7-44a6-abfe-be4ff0134ff4", "7e7ede54-616a-422e-8f58-89a79ae2baea");

  
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { tokensDeletePaymentServiceToken } from "@gr4vy/sdk/funcs/tokensDeletePaymentServiceToken.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tokensDeletePaymentServiceToken(gr4vy, "46973e9d-88a7-44a6-abfe-be4ff0134ff4", "7e7ede54-616a-422e-8f58-89a79ae2baea");

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
| `paymentMethodId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment method.                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `paymentServiceTokenId`                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment service token.                                                                                                                                           | [object Object]                                                                                                                                                                |
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


## approvePaymentServiceTokenGet

Approves a specific payment service token.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await gr4vy.tokens.approvePaymentServiceTokenGet("46973e9d-88a7-44a6-abfe-be4ff0134ff4", "7e7ede54-616a-422e-8f58-89a79ae2baea");

  
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { tokensApprovePaymentServiceTokenGet } from "@gr4vy/sdk/funcs/tokensApprovePaymentServiceTokenGet.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tokensApprovePaymentServiceTokenGet(gr4vy, "46973e9d-88a7-44a6-abfe-be4ff0134ff4", "7e7ede54-616a-422e-8f58-89a79ae2baea");

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
| `paymentMethodId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment method.                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `paymentServiceTokenId`                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment service token.                                                                                                                                           | [object Object]                                                                                                                                                                |
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


## approvePaymentServiceTokenPost

Approves a specific payment service token.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await gr4vy.tokens.approvePaymentServiceTokenPost("46973e9d-88a7-44a6-abfe-be4ff0134ff4", "7e7ede54-616a-422e-8f58-89a79ae2baea");

  
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { tokensApprovePaymentServiceTokenPost } from "@gr4vy/sdk/funcs/tokensApprovePaymentServiceTokenPost.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tokensApprovePaymentServiceTokenPost(gr4vy, "46973e9d-88a7-44a6-abfe-be4ff0134ff4", "7e7ede54-616a-422e-8f58-89a79ae2baea");

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
| `paymentMethodId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment method.                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `paymentServiceTokenId`                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment service token.                                                                                                                                           | [object Object]                                                                                                                                                                |
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


## getNetworkTokens

Get stored network tokens for the given payment method.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.tokens.getNetworkTokens("46973e9d-88a7-44a6-abfe-be4ff0134ff4");

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { tokensGetNetworkTokens } from "@gr4vy/sdk/funcs/tokensGetNetworkTokens.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tokensGetNetworkTokens(gr4vy, "46973e9d-88a7-44a6-abfe-be4ff0134ff4");

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
| `paymentMethodId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Filters for transactions that have a payment method with an ID that matches exactly with the provided value.                                                                   | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.NetworkTokens](../../models/components/networktokens.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## provisionNetworkToken

Provision a network token for a stored card.


### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.tokens.provisionNetworkToken("46973e9d-88a7-44a6-abfe-be4ff0134ff4", {
    securityCode: "123",
    merchantInitiated: false,
    isSubsequentPayment: true,
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
import { tokensProvisionNetworkToken } from "@gr4vy/sdk/funcs/tokensProvisionNetworkToken.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tokensProvisionNetworkToken(gr4vy, "46973e9d-88a7-44a6-abfe-be4ff0134ff4", {
    securityCode: "123",
    merchantInitiated: false,
    isSubsequentPayment: true,
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
| `paymentMethodId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment method.                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `networkTokenRequest`                                                                                                                                                          | [components.NetworkTokenRequest](../../models/components/networktokenrequest.md)                                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.NetworkToken](../../models/components/networktoken.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## deleteNetworkToken

Deletes a specific network token.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await gr4vy.tokens.deleteNetworkToken("46973e9d-88a7-44a6-abfe-be4ff0134ff4", "454f6a32-a572-4dda-b885-3e8674086123");

  
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { tokensDeleteNetworkToken } from "@gr4vy/sdk/funcs/tokensDeleteNetworkToken.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tokensDeleteNetworkToken(gr4vy, "46973e9d-88a7-44a6-abfe-be4ff0134ff4", "454f6a32-a572-4dda-b885-3e8674086123");

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
| `paymentMethodId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment method.                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `networkTokenId`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the network token.                                                                                                                                                   | [object Object]                                                                                                                                                                |
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


## issueCryptogram

Issue a cryptogram for a stored network token of a stored card.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.tokens.issueCryptogram("46973e9d-88a7-44a6-abfe-be4ff0134ff4", "454f6a32-a572-4dda-b885-3e8674086123", {
    merchantInitiated: false,
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
import { tokensIssueCryptogram } from "@gr4vy/sdk/funcs/tokensIssueCryptogram.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tokensIssueCryptogram(gr4vy, "46973e9d-88a7-44a6-abfe-be4ff0134ff4", "454f6a32-a572-4dda-b885-3e8674086123", {
    merchantInitiated: false,
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
| `paymentMethodId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment method.                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `networkTokenId`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the network token.                                                                                                                                                   | [object Object]                                                                                                                                                                |
| `issueCryptogramRequest`                                                                                                                                                       | [components.IssueCryptogramRequest](../../models/components/issuecryptogramrequest.md)                                                                                         | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Cryptogram](../../models/components/cryptogram.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error403Forbidden    | 403                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## suspendNetworkToken

Suspends a specific network token.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.tokens.suspendNetworkToken("46973e9d-88a7-44a6-abfe-be4ff0134ff4", "454f6a32-a572-4dda-b885-3e8674086123");

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { tokensSuspendNetworkToken } from "@gr4vy/sdk/funcs/tokensSuspendNetworkToken.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tokensSuspendNetworkToken(gr4vy, "46973e9d-88a7-44a6-abfe-be4ff0134ff4", "454f6a32-a572-4dda-b885-3e8674086123");

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
| `paymentMethodId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment method.                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `networkTokenId`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the network token.                                                                                                                                                   | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.NetworkToken](../../models/components/networktoken.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## resumeNetworkToken

Resumes a specific network token.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.tokens.resumeNetworkToken("46973e9d-88a7-44a6-abfe-be4ff0134ff4", "454f6a32-a572-4dda-b885-3e8674086123");

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { tokensResumeNetworkToken } from "@gr4vy/sdk/funcs/tokensResumeNetworkToken.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await tokensResumeNetworkToken(gr4vy, "46973e9d-88a7-44a6-abfe-be4ff0134ff4", "454f6a32-a572-4dda-b885-3e8674086123");

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
| `paymentMethodId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment method.                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `networkTokenId`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the network token.                                                                                                                                                   | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.NetworkToken](../../models/components/networktoken.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
