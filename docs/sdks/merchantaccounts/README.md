# MerchantAccounts
(*merchantAccounts*)

## Overview

### Available Operations

* [list](#list) - List all merchant accounts
* [create](#create) - Create a merchant account
* [get](#get) - Get a merchant account
* [update](#update) - Update a merchant account

## list

List all merchant accounts in an instance.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const result = await gr4vy.merchantAccounts.list("ZXhhbXBsZTE", 20, "merchant-12345");

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { withToken } from "@gr4vy/sdk/lib/auth.js";
import { merchantAccountsList } from "@gr4vy/sdk/funcs/merchantAccountsList.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const res = await merchantAccountsList(gr4vy, "ZXhhbXBsZTE", 20, "merchant-12345");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cursor`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A pointer to the page of results to return.                                                                                                                                    | [object Object]                                                                                                                                                                |
| `limit`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The maximum number of items that are at returned.                                                                                                                              | [object Object]                                                                                                                                                                |
| `search`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The search term to filter merchant accounts by.                                                                                                                                | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.ListMerchantAccountsResponse](../../models/operations/listmerchantaccountsresponse.md)\>**

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

## create

Create a new merchant account in an instance.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const result = await gr4vy.merchantAccounts.create({
    accountUpdaterRequestEncryptionKey: "key-1234",
    accountUpdaterRequestEncryptionKeyId: "key-id-1234",
    accountUpdaterResponseDecryptionKey: "key-1234",
    accountUpdaterResponseDecryptionKeyId: "key-id-1234",
    overCaptureAmount: 1299,
    overCapturePercentage: 25,
    loonClientKey: "client-key-1234",
    loonSecretKey: "key-12345",
    loonAcceptedSchemes: [
      "visa",
    ],
    visaNetworkTokensRequestorId: "id-12345",
    visaNetworkTokensAppId: "id-12345",
    amexNetworkTokensRequestorId: "id-12345",
    amexNetworkTokensAppId: "id-12345",
    mastercardNetworkTokensRequestorId: "id-12345",
    mastercardNetworkTokensAppId: "id-12345",
    outboundWebhookUrl: "https://example.com/callback",
    outboundWebhookUsername: "user-12345",
    outboundWebhookPassword: "password-12345",
    id: "merchant-12345",
    displayName: "Example",
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
import { withToken } from "@gr4vy/sdk/lib/auth.js";
import { merchantAccountsCreate } from "@gr4vy/sdk/funcs/merchantAccountsCreate.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const res = await merchantAccountsCreate(gr4vy, {
    accountUpdaterRequestEncryptionKey: "key-1234",
    accountUpdaterRequestEncryptionKeyId: "key-id-1234",
    accountUpdaterResponseDecryptionKey: "key-1234",
    accountUpdaterResponseDecryptionKeyId: "key-id-1234",
    overCaptureAmount: 1299,
    overCapturePercentage: 25,
    loonClientKey: "client-key-1234",
    loonSecretKey: "key-12345",
    loonAcceptedSchemes: [
      "visa",
    ],
    visaNetworkTokensRequestorId: "id-12345",
    visaNetworkTokensAppId: "id-12345",
    amexNetworkTokensRequestorId: "id-12345",
    amexNetworkTokensAppId: "id-12345",
    mastercardNetworkTokensRequestorId: "id-12345",
    mastercardNetworkTokensAppId: "id-12345",
    outboundWebhookUrl: "https://example.com/callback",
    outboundWebhookUsername: "user-12345",
    outboundWebhookPassword: "password-12345",
    id: "merchant-12345",
    displayName: "Example",
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
| `merchantAccountCreate`                                                                                                                                                        | [components.MerchantAccountCreate](../../models/components/merchantaccountcreate.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `timeoutInSeconds`                                                                                                                                                             | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MerchantAccount](../../models/components/merchantaccount.md)\>**

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

## get

Get info about a merchant account in an instance.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const result = await gr4vy.merchantAccounts.get("merchant-12345");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { withToken } from "@gr4vy/sdk/lib/auth.js";
import { merchantAccountsGet } from "@gr4vy/sdk/funcs/merchantAccountsGet.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const res = await merchantAccountsGet(gr4vy, "merchant-12345");

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
| `merchantAccountId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the merchant account                                                                                                                                                 | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.MerchantAccount](../../models/components/merchantaccount.md)\>**

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

## update

Update info for a merchant account in an instance.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const result = await gr4vy.merchantAccounts.update({
    accountUpdaterRequestEncryptionKey: "key-1234",
    accountUpdaterRequestEncryptionKeyId: "key-id-1234",
    accountUpdaterResponseDecryptionKey: "key-1234",
    accountUpdaterResponseDecryptionKeyId: "key-id-1234",
    overCaptureAmount: 1299,
    overCapturePercentage: 25,
    loonClientKey: "client-key-1234",
    loonSecretKey: "key-12345",
    loonAcceptedSchemes: [
      "visa",
    ],
    visaNetworkTokensRequestorId: "id-12345",
    visaNetworkTokensAppId: "id-12345",
    amexNetworkTokensRequestorId: "id-12345",
    amexNetworkTokensAppId: "id-12345",
    mastercardNetworkTokensRequestorId: "id-12345",
    mastercardNetworkTokensAppId: "id-12345",
    displayName: "Example",
    outboundWebhookUrl: "https://example.com/callback",
    outboundWebhookUsername: "user-12345",
    outboundWebhookPassword: "password-12345",
  }, "merchant-12345");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { withToken } from "@gr4vy/sdk/lib/auth.js";
import { merchantAccountsUpdate } from "@gr4vy/sdk/funcs/merchantAccountsUpdate.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const res = await merchantAccountsUpdate(gr4vy, {
    accountUpdaterRequestEncryptionKey: "key-1234",
    accountUpdaterRequestEncryptionKeyId: "key-id-1234",
    accountUpdaterResponseDecryptionKey: "key-1234",
    accountUpdaterResponseDecryptionKeyId: "key-id-1234",
    overCaptureAmount: 1299,
    overCapturePercentage: 25,
    loonClientKey: "client-key-1234",
    loonSecretKey: "key-12345",
    loonAcceptedSchemes: [
      "visa",
    ],
    visaNetworkTokensRequestorId: "id-12345",
    visaNetworkTokensAppId: "id-12345",
    amexNetworkTokensRequestorId: "id-12345",
    amexNetworkTokensAppId: "id-12345",
    mastercardNetworkTokensRequestorId: "id-12345",
    mastercardNetworkTokensAppId: "id-12345",
    displayName: "Example",
    outboundWebhookUrl: "https://example.com/callback",
    outboundWebhookUsername: "user-12345",
    outboundWebhookPassword: "password-12345",
  }, "merchant-12345");

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
| `merchantAccountId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the merchant account                                                                                                                                                 | [object Object]                                                                                                                                                                |
| `merchantAccountUpdate`                                                                                                                                                        | [components.MerchantAccountUpdate](../../models/components/merchantaccountupdate.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `timeoutInSeconds`                                                                                                                                                             | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.MerchantAccount](../../models/components/merchantaccount.md)\>**

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