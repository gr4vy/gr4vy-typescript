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
* [suspendNetworkToken](#suspendnetworktoken) - Suspend network token
* [resumeNetworkToken](#resumenetworktoken) - Resume network token

## getPaymentServiceTokens

Get all payment service tokens for a given payment method and payment service.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const paymentMethodId = "46973e9d-88a7-44a6-abfe-be4ff0134ff4";
  
  const result = await sdk.tokens.getPaymentServiceTokens(paymentMethodId);

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


### Response

**Promise<[components.PaymentServiceTokens](../../models/components/paymentservicetokens.md)>**
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
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const paymentMethodId = "46973e9d-88a7-44a6-abfe-be4ff0134ff4";
  const paymentServiceTokenRequest = {
    securityCode: "123",
    paymentServiceId: "a7d6b829-aea5-407d-ab7f-138784b5ad2c",
    redirectUrl: "https://example.com/callback",
  };
  
  const result = await sdk.tokens.provisionPaymentServiceToken(paymentMethodId, paymentServiceTokenRequest);

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


### Response

**Promise<[components.PaymentServiceToken](../../models/components/paymentservicetoken.md)>**
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
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const paymentMethodId = "46973e9d-88a7-44a6-abfe-be4ff0134ff4";
  const paymentServiceTokenId = "7e7ede54-616a-422e-8f58-89a79ae2baea";
  
  const result = await sdk.tokens.deletePaymentServiceToken(paymentMethodId, paymentServiceTokenId);

  // Handle the result
  console.log(result)
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


### Response

**Promise<[operations.DeletePaymentServiceTokenResponse](../../models/operations/deletepaymentservicetokenresponse.md)>**
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
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const paymentMethodId = "46973e9d-88a7-44a6-abfe-be4ff0134ff4";
  const paymentServiceTokenId = "7e7ede54-616a-422e-8f58-89a79ae2baea";
  
  const result = await sdk.tokens.approvePaymentServiceTokenGet(paymentMethodId, paymentServiceTokenId);

  // Handle the result
  console.log(result)
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


### Response

**Promise<[operations.ApprovePaymentServiceTokenGetResponse](../../models/operations/approvepaymentservicetokengetresponse.md)>**
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
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const paymentMethodId = "46973e9d-88a7-44a6-abfe-be4ff0134ff4";
  const paymentServiceTokenId = "7e7ede54-616a-422e-8f58-89a79ae2baea";
  
  const result = await sdk.tokens.approvePaymentServiceTokenPost(paymentMethodId, paymentServiceTokenId);

  // Handle the result
  console.log(result)
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


### Response

**Promise<[operations.ApprovePaymentServiceTokenPostResponse](../../models/operations/approvepaymentservicetokenpostresponse.md)>**
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
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const paymentMethodId = "46973e9d-88a7-44a6-abfe-be4ff0134ff4";
  
  const result = await sdk.tokens.getNetworkTokens(paymentMethodId);

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


### Response

**Promise<[components.NetworkTokens](../../models/components/networktokens.md)>**
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
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const paymentMethodId = "46973e9d-88a7-44a6-abfe-be4ff0134ff4";
  const networkTokenRequest = {
    securityCode: "123",
    merchantInitiated: false,
    isSubsequentPayment: true,
  };
  
  const result = await sdk.tokens.provisionNetworkToken(paymentMethodId, networkTokenRequest);

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


### Response

**Promise<[components.NetworkToken](../../models/components/networktoken.md)>**
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
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const paymentMethodId = "46973e9d-88a7-44a6-abfe-be4ff0134ff4";
  const networkTokenId = "454f6a32-a572-4dda-b885-3e8674086123";
  
  const result = await sdk.tokens.deleteNetworkToken(paymentMethodId, networkTokenId);

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


### Response

**Promise<[operations.DeleteNetworkTokenResponse](../../models/operations/deletenetworktokenresponse.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## suspendNetworkToken

Suspends a specific network token.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const paymentMethodId = "46973e9d-88a7-44a6-abfe-be4ff0134ff4";
  const networkTokenId = "454f6a32-a572-4dda-b885-3e8674086123";
  
  const result = await sdk.tokens.suspendNetworkToken(paymentMethodId, networkTokenId);

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


### Response

**Promise<[components.NetworkToken](../../models/components/networktoken.md)>**
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
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const paymentMethodId = "46973e9d-88a7-44a6-abfe-be4ff0134ff4";
  const networkTokenId = "454f6a32-a572-4dda-b885-3e8674086123";
  
  const result = await sdk.tokens.resumeNetworkToken(paymentMethodId, networkTokenId);

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


### Response

**Promise<[components.NetworkToken](../../models/components/networktoken.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
