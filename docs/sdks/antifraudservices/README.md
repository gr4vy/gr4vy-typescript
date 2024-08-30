# AntiFraudServices
(*antiFraudServices*)

## Overview

In Gr4vy, an anti-fraud service represents a configured anti-fraud service
provider (`Sift`, `CyberSource`, etc). This third-party services will be
used to screen transactions to determine the risk and prevents chargebacks
and fraudulent transactions.

The anti-fraud services API can be used to:

* Provide Gr4vy with the API credentials for an anti-fraud service provider.
* Set a display name for a anti-fraud provider.
* Map anti-fraud service decisions to Gr4vy internal decisions.

### Available Operations

* [newAntiFraudService](#newantifraudservice) - New anti-fraud service
* [getAntiFraudService](#getantifraudservice) - Get anti-fraud service
* [updateAntiFraudService](#updateantifraudservice) - Update anti-fraud service
* [deleteAntiFraudService](#deleteantifraudservice) - Delete anti-fraud service

## newAntiFraudService

Adds an anti-fraud service, enabling merchants to determine risky transactions
and prevent chargebacks.


### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.antiFraudServices.newAntiFraudService({
    antiFraudServiceDefinitionId: "sift-anti-fraud",
    displayName: "Sift Anti-Fraud Service.",
    active: true,
    reviewsEnabled: false,
    fields: [
      {
        key: "api_key",
        value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
      },
      {
        key: "account_id",
        value: "26PHem9AhJZvU623DfE1x4sd",
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
import { antiFraudServicesNewAntiFraudService } from "@gr4vy/sdk/funcs/antiFraudServicesNewAntiFraudService.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await antiFraudServicesNewAntiFraudService(gr4vy, {
    antiFraudServiceDefinitionId: "sift-anti-fraud",
    displayName: "Sift Anti-Fraud Service.",
    active: true,
    reviewsEnabled: false,
    fields: [
      {
        key: "api_key",
        value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
      },
      {
        key: "account_id",
        value: "26PHem9AhJZvU623DfE1x4sd",
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
| `request`                                                                                                                                                                      | [components.AntiFraudServiceCreate](../../models/components/antifraudservicecreate.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AntiFraudService](../../models/components/antifraudservice.md)\>**

### Errors

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.Error400BadRequest      | 400                            | application/json               |
| errors.Error401Unauthorized    | 401                            | application/json               |
| errors.Error409DuplicateRecord | 409                            | application/json               |
| errors.SDKError                | 4xx-5xx                        | */*                            |


## getAntiFraudService

Gets information about an anti-fraud service.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.antiFraudServices.getAntiFraudService("8724fd24-5489-4a5d-90fd-0604df7d3b83");

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { antiFraudServicesGetAntiFraudService } from "@gr4vy/sdk/funcs/antiFraudServicesGetAntiFraudService.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await antiFraudServicesGetAntiFraudService(gr4vy, "8724fd24-5489-4a5d-90fd-0604df7d3b83");

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
| `antiFraudServiceId`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for an anti-fraud service.                                                                                                                                       | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.AntiFraudService](../../models/components/antifraudservice.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## updateAntiFraudService

Update an anti-fraud service, enabling merchants to determine
risky transactions and prevent chargebacks.


### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.antiFraudServices.updateAntiFraudService("8724fd24-5489-4a5d-90fd-0604df7d3b83", {
    antiFraudServiceDefinitionId: "sift-anti-fraud",
    displayName: "Sift Anti-Fraud Service.",
    active: true,
    reviewsEnabled: false,
    fields: [
      {
        key: "api_key",
        value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
      },
      {
        key: "account_id",
        value: "26PHem9AhJZvU623DfE1x4sd",
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
import { antiFraudServicesUpdateAntiFraudService } from "@gr4vy/sdk/funcs/antiFraudServicesUpdateAntiFraudService.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await antiFraudServicesUpdateAntiFraudService(gr4vy, "8724fd24-5489-4a5d-90fd-0604df7d3b83", {
    antiFraudServiceDefinitionId: "sift-anti-fraud",
    displayName: "Sift Anti-Fraud Service.",
    active: true,
    reviewsEnabled: false,
    fields: [
      {
        key: "api_key",
        value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
      },
      {
        key: "account_id",
        value: "26PHem9AhJZvU623DfE1x4sd",
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `antiFraudServiceId`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for an anti-fraud service.                                                                                                                                       | [object Object]                                                                                                                                                                |
| `antiFraudServiceUpdate`                                                                                                                                                       | [components.AntiFraudServiceUpdate](../../models/components/antifraudserviceupdate.md)                                                                                         | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.AntiFraudService](../../models/components/antifraudservice.md)\>**

### Errors

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.Error400BadRequest      | 400                            | application/json               |
| errors.Error401Unauthorized    | 401                            | application/json               |
| errors.Error409DuplicateRecord | 409                            | application/json               |
| errors.SDKError                | 4xx-5xx                        | */*                            |


## deleteAntiFraudService

Removes an anti-fraud service. Any associated credentials
will also be deleted.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await gr4vy.antiFraudServices.deleteAntiFraudService("8724fd24-5489-4a5d-90fd-0604df7d3b83");

  
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { antiFraudServicesDeleteAntiFraudService } from "@gr4vy/sdk/funcs/antiFraudServicesDeleteAntiFraudService.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await antiFraudServicesDeleteAntiFraudService(gr4vy, "8724fd24-5489-4a5d-90fd-0604df7d3b83");

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
| `antiFraudServiceId`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for an anti-fraud service.                                                                                                                                       | [object Object]                                                                                                                                                                |
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
