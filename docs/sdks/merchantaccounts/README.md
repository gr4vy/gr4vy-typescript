# MerchantAccounts
(*merchantAccounts*)

## Overview

In Gr4vy, a merchant account represents an individual merchant in an
instance. Each instance has one or more merchant accounts, and each
merchant account has its own connections, Flow rules, transactions, and
more.

### Available Operations

* [listMerchantAccounts](#listmerchantaccounts) - List merchant accounts
* [newMerchantAccount](#newmerchantaccount) - New merchant account
* [getMerchantAccount](#getmerchantaccount) - Get merchant account
* [updateMerchantAccount](#updatemerchantaccount) - Update merchant account
* [deleteMerchantAccuont](#deletemerchantaccuont) - Delete merchant account

## listMerchantAccounts

Lists all merchant accounts in an instance.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.merchantAccounts.listMerchantAccounts();

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { merchantAccountsListMerchantAccounts } from "@gr4vy/sdk/funcs/merchantAccountsListMerchantAccounts.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await merchantAccountsListMerchantAccounts(gr4vy);

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MerchantAccounts](../../models/components/merchantaccounts.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## newMerchantAccount

Create a merchant account. Optionally, provide an `outbound_webhook_url`, and
if HTTP Basic Authentication is required, provide the
`outbound_webhook_username` and `outbound_webhook_password`. When retrieving
a Merchant Account the `outbound_webhook_password` will be omitted.

Optionally provide Network Tokens configuration per scheme. If done, all
parameters for the same scheme must be provided.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.merchantAccounts.newMerchantAccount({
    id: "plantly-uk",
    displayName: "Plantly UK",
    outboundWebhookUrl: "https://www.example.com/webhook",
    outboundWebhookUsername: "gr4vy",
    outboundWebhookPassword: "super-secret-password",
    visaNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    visaNetworkTokensAppId: "ca12b3d0-4e23-41a9-906f-e5cbb8e6a731",
    amexNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    amexNetworkTokensAppId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    mastercardNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    mastercardNetworkTokensAppId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    loonAcceptedSchemes: [
      "visa",
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
import { merchantAccountsNewMerchantAccount } from "@gr4vy/sdk/funcs/merchantAccountsNewMerchantAccount.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await merchantAccountsNewMerchantAccount(gr4vy, {
    id: "plantly-uk",
    displayName: "Plantly UK",
    outboundWebhookUrl: "https://www.example.com/webhook",
    outboundWebhookUsername: "gr4vy",
    outboundWebhookPassword: "super-secret-password",
    visaNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    visaNetworkTokensAppId: "ca12b3d0-4e23-41a9-906f-e5cbb8e6a731",
    amexNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    amexNetworkTokensAppId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    mastercardNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    mastercardNetworkTokensAppId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    loonAcceptedSchemes: [
      "visa",
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
| `request`                                                                                                                                                                      | [components.MerchantAccountCreate](../../models/components/merchantaccountcreate.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MerchantAccount](../../models/components/merchantaccount.md)\>**

### Errors

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.Error400BadRequest      | 400                            | application/json               |
| errors.Error401Unauthorized    | 401                            | application/json               |
| errors.Error409DuplicateRecord | 409                            | application/json               |
| errors.SDKError                | 4xx-5xx                        | */*                            |


## getMerchantAccount

Retrieves details of a merchant account.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.merchantAccounts.getMerchantAccount("plantly-uk");

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { merchantAccountsGetMerchantAccount } from "@gr4vy/sdk/funcs/merchantAccountsGetMerchantAccount.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await merchantAccountsGetMerchantAccount(gr4vy, "plantly-uk");

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
| `merchantAccountId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a merchant account.                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.MerchantAccount](../../models/components/merchantaccount.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## updateMerchantAccount

Update an existing merchant account. Optionally, provide an
`outbound_webhook_url`, and if HTTP Basic Authentication is required, provide
the `outbound_webhook_username` and `outbound_webhook_password`. When
retrieving a Merchant Account the `outbound_webhook_password` will be omitted.

Optionally provide Network Tokens configuration per scheme. If done, all
parameters for the same scheme must be provided.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gr4vy.merchantAccounts.updateMerchantAccount("plantly-uk", {
    displayName: "Plantly UK",
    outboundWebhookUrl: "https://www.example.com/webhook",
    outboundWebhookUsername: "gr4vy",
    outboundWebhookPassword: "super-secret-password",
    visaNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    visaNetworkTokensAppId: "ca12b3d0-4e23-41a9-906f-e5cbb8e6a731",
    amexNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    amexNetworkTokensAppId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    mastercardNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    mastercardNetworkTokensAppId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    loonAcceptedSchemes: [
      "visa",
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
import { merchantAccountsUpdateMerchantAccount } from "@gr4vy/sdk/funcs/merchantAccountsUpdateMerchantAccount.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await merchantAccountsUpdateMerchantAccount(gr4vy, "plantly-uk", {
    displayName: "Plantly UK",
    outboundWebhookUrl: "https://www.example.com/webhook",
    outboundWebhookUsername: "gr4vy",
    outboundWebhookPassword: "super-secret-password",
    visaNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    visaNetworkTokensAppId: "ca12b3d0-4e23-41a9-906f-e5cbb8e6a731",
    amexNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    amexNetworkTokensAppId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    mastercardNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    mastercardNetworkTokensAppId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
    loonAcceptedSchemes: [
      "visa",
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
| `merchantAccountId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a merchant account.                                                                                                                                          | [object Object]                                                                                                                                                                |
| `merchantAccountUpdate`                                                                                                                                                        | [components.MerchantAccountUpdate](../../models/components/merchantaccountupdate.md)                                                                                           | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.MerchantAccount](../../models/components/merchantaccount.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## deleteMerchantAccuont

Deletes a specific merchant account.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await gr4vy.merchantAccounts.deleteMerchantAccuont("plantly-uk");

  
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { merchantAccountsDeleteMerchantAccuont } from "@gr4vy/sdk/funcs/merchantAccountsDeleteMerchantAccuont.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await merchantAccountsDeleteMerchantAccuont(gr4vy, "plantly-uk");

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
| `merchantAccountId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a merchant account.                                                                                                                                          | [object Object]                                                                                                                                                                |
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
