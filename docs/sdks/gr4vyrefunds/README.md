# Gr4vyRefunds
(*transactions.refunds*)

## Overview

### Available Operations

* [list](#list) - List transaction refunds
* [create](#create) - Create transaction refund
* [get](#get) - Get transaction refund

## list

List refunds for a transaction.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_transaction_refunds" method="get" path="/transactions/{transaction_id}/refunds" -->
```typescript
import { Gr4vy, withToken } from "@gr4vy/sdk";
import fs from "fs";

const gr4vy = new Gr4vy({
    id: "example",
    server: "sandbox",
    merchantAccountId: "default",
    bearerAuth: withToken({
      privateKey: fs.readFileSync("private_key.pem", "utf8"),
    }),
});

async function run() {
  const result = await gr4vy.transactions.refunds.list("7099948d-7286-47e4-aad8-b68f7eb44591");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { transactionsRefundsList } from "@gr4vy/sdk/funcs/transactionsRefundsList.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  merchantAccountId: "<id>",
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsRefundsList(gr4vy, "7099948d-7286-47e4-aad8-b68f7eb44591");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsRefundsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transactionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the transaction                                                                                                                                                      | [object Object]                                                                                                                                                                |
| `merchantAccountId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The ID of the merchant account to use for this request.                                                                                                                        |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Refunds](../../models/components/refunds.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.Error400            | 400                        | application/json           |
| errors.Error401            | 401                        | application/json           |
| errors.Error403            | 403                        | application/json           |
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

Create a refund for a transaction.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_transaction_refund" method="post" path="/transactions/{transaction_id}/refunds" -->
```typescript
import { Gr4vy, withToken } from "@gr4vy/sdk";
import fs from "fs";

const gr4vy = new Gr4vy({
    id: "example",
    server: "sandbox",
    merchantAccountId: "default",
    bearerAuth: withToken({
      privateKey: fs.readFileSync("private_key.pem", "utf8"),
    }),
});

async function run() {
  const result = await gr4vy.transactions.refunds.create({}, "7099948d-7286-47e4-aad8-b68f7eb44591");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { transactionsRefundsCreate } from "@gr4vy/sdk/funcs/transactionsRefundsCreate.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  merchantAccountId: "<id>",
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsRefundsCreate(gr4vy, {}, "7099948d-7286-47e4-aad8-b68f7eb44591");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsRefundsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transactionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the transaction                                                                                                                                                      | [object Object]                                                                                                                                                                |
| `transactionRefundCreate`                                                                                                                                                      | [components.TransactionRefundCreate](../../models/components/transactionrefundcreate.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `merchantAccountId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The ID of the merchant account to use for this request.                                                                                                                        |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Refund](../../models/components/refund.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.Error400            | 400                        | application/json           |
| errors.Error401            | 401                        | application/json           |
| errors.Error403            | 403                        | application/json           |
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

Fetch refund for a transaction.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_transaction_refund" method="get" path="/transactions/{transaction_id}/refunds/{refund_id}" -->
```typescript
import { Gr4vy, withToken } from "@gr4vy/sdk";
import fs from "fs";

const gr4vy = new Gr4vy({
    id: "example",
    server: "sandbox",
    merchantAccountId: "default",
    bearerAuth: withToken({
      privateKey: fs.readFileSync("private_key.pem", "utf8"),
    }),
});

async function run() {
  const result = await gr4vy.transactions.refunds.get("7099948d-7286-47e4-aad8-b68f7eb44591", "6a1d4e46-14ed-4fe1-a45f-eff4e025d211");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { transactionsRefundsGet } from "@gr4vy/sdk/funcs/transactionsRefundsGet.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  merchantAccountId: "<id>",
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsRefundsGet(gr4vy, "7099948d-7286-47e4-aad8-b68f7eb44591", "6a1d4e46-14ed-4fe1-a45f-eff4e025d211");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsRefundsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transactionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the transaction                                                                                                                                                      | [object Object]                                                                                                                                                                |
| `refundId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the refund                                                                                                                                                           | [object Object]                                                                                                                                                                |
| `merchantAccountId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The ID of the merchant account to use for this request.                                                                                                                        |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Refund](../../models/components/refund.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.Error400            | 400                        | application/json           |
| errors.Error401            | 401                        | application/json           |
| errors.Error403            | 403                        | application/json           |
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