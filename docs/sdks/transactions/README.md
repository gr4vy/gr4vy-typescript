# Transactions
(*transactions*)

## Overview

In Gr4vy, a transaction represents a payment in any state, either before it
is authorized, once it is captured, or after it has been refunded.

The transactions API can be used to:

- Authorize, capture, and store cards.
- Authorize, capture, and store alternative payment methods like PayPal.
- Refund, void, and otherwise cancel existing transactions.

### Available Operations

* [listTransactions](#listtransactions) - List transactions
* [getTransactionActions](#gettransactionactions) - List actions for transaction
* [listTransactionRefunds](#listtransactionrefunds) - List refunds
* [getRefund](#getrefund) - Get refund
* [getTransactionSummary](#gettransactionsummary) - Get transaction summary

## listTransactions

Lists all transactions for an account. Sorted by last updated at.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/node";
import { QueryParamMethod, QueryParamStatus } from "@gr4vy/node/models/operations";

async function run() {
  const sdk = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.transactions.listTransactions({
    buyerExternalIdentifier: "user-12345",
    buyerId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    cursor: "ZXhhbXBsZTE",
    limit: 1,
    amountEq: 500,
    amountGte: 500,
    amountLte: 500,
    checkoutSessionId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    createdAtGte: new Date("2022-01-01T12:00:00+08:00"),
    createdAtLte: new Date("2022-01-01T12:00:00+08:00"),
    currency: [
      "USD",
      "GBP",
    ],
    externalIdentifier: "user-12345",
    giftCardId: "be828248-56de-481e-a580-44b6e1d4df81",
    giftCardLast4: "7890",
    hasGiftCardRedemptions: true,
    hasRefunds: true,
    id: "be828248-56de-481e-a580-44b6e1d4df81",
    metadata: [
      "{\"key\": \"value\"}",
      "{\"key_one\": \"value\", \"key_two\": \"value\"}",
    ],
    method: [
      QueryParamMethod.Card,
    ],
    paymentMethodId: "46973e9d-88a7-44a6-abfe-be4ff0134ff4",
    paymentMethodLabel: "1234",
    paymentServiceId: [
      "46973e9d-88a7-44a6-abfe-be4ff0134ff4",
    ],
    paymentServiceTransactionId: "transaction_123",
    pendingReview: true,
    reconciliationId: "7EgeeeTX0DS45RBDNt4AEY",
    search: "be828248-56de-481e-a580-44b6e1d4df81",
    status: [
      QueryParamStatus.CaptureSucceeded,
      QueryParamStatus.Processing,
    ],
    updatedAtGte: new Date("2022-01-01T12:00:00+08:00"),
    updatedAtLte: new Date("2022-01-01T12:00:00+08:00"),
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTransactionsRequest](../../models/operations/listtransactionsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[components.Transactions](../../models/components/transactions.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## getTransactionActions

Gets actions for a given transaction.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/node";

async function run() {
  const sdk = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const transactionId = "fe26475d-ec3e-4884-9553-f7356683f7f9";
  
  const result = await sdk.transactions.getTransactionActions(transactionId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transactionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID for the transaction to get the information for.                                                                                                                         | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.Actions](../../models/components/actions.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## listTransactionRefunds

Lists all refunds associated with a certain transaction.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/node";

async function run() {
  const sdk = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const transactionId = "fe26475d-ec3e-4884-9553-f7356683f7f9";
  
  const result = await sdk.transactions.listTransactionRefunds(transactionId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transactionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID for the transaction to get the information for.                                                                                                                         | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.Refunds](../../models/components/refunds.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## getRefund

Gets information about a refund associated with a certain transaction.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/node";

async function run() {
  const sdk = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const transactionId = "fe26475d-ec3e-4884-9553-f7356683f7f9";
  const refundId = "8724fd24-5489-4a5d-90fd-0604df7d3b83";
  
  const result = await sdk.transactions.getRefund(transactionId, refundId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transactionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID for the transaction to get the information for.                                                                                                                         | [object Object]                                                                                                                                                                |
| `refundId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID of the refund.                                                                                                                                                   | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.Refund](../../models/components/refund.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## getTransactionSummary

Gets summary for a given transaction.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/node";

async function run() {
  const sdk = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const transactionId = "fe26475d-ec3e-4884-9553-f7356683f7f9";
  
  const result = await sdk.transactions.getTransactionSummary(transactionId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transactionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID for the transaction to get the information for.                                                                                                                         | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.TransactionStatusSummary](../../models/components/transactionstatussummary.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
