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
* [newTransaction](#newtransaction) - New transaction
* [getTransaction](#gettransaction) - Get transaction
* [getTransactionActions](#gettransactionactions) - List actions for transaction
* [captureTransaction](#capturetransaction) - Capture transaction
* [getTransactionEvents](#gettransactionevents) - List events for transaction
* [listTransactionRefunds](#listtransactionrefunds) - List refunds
* [newRefund](#newrefund) - Refund transaction
* [refundAll](#refundall) - Refund all instruments in a transaction
* [getRefund](#getrefund) - Get refund
* [getSingleRefund](#getsinglerefund) - Get refund
* [getTransactionSummary](#gettransactionsummary) - Get transaction summary
* [voidTransaction](#voidtransaction) - Void transaction

## listTransactions

Lists all transactions for an account. Sorted by last updated at.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";
import { QueryParamMethod, QueryParamStatus } from "@gr4vy/sdk/models/operations";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
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

  for await (const page of result) {
    // handle page
  }
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

**Promise<[operations.ListTransactionsResponse](../../models/operations/listtransactionsresponse.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## newTransaction

Attempts to create an authorization for a payment method. In some cases it is
not possible to create the authorization without redirecting the user for
their authorization. In these cases the status is set to
indicate buyer approval is pending and an approval URL is returned.

Duplicated gift card numbers are not supported. This includes both stored gift
cards, as well as those directly provided via the request.


### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";
import {
  PaymentSource,
  ProductType,
  ThreeDSecureDataV1Scheme,
  TransactionRedirectRequestPaymentMethodMethod,
  TransactionRequestDeliveryType,
  TransactionRequestIntent,
  TransactionRequestType,
  UserDevice,
} from "@gr4vy/sdk/models/components";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const idempotencyKey = "bffa9ce6-7a8a-449c-889a-65bd2ee86903";
  const transactionRequest = {
    amount: 1299,
    currency: "USD",
  paymentMethod:     {
        method: TransactionRedirectRequestPaymentMethodMethod.Paypal,
        redirectUrl: "https://example.com/callback",
        currency: "USD",
        country: "US",
        externalIdentifier: "account-23423423",
      },
    antiFraudFingerprint: "yGeBAFYgFmM=",
    asyncCapture: true,
    browserInfo: {
      javaEnabled: true,
      javascriptEnabled: true,
      language: "en-GB",
      colorDepth: 32,
      screenHeight: 1080,
      screenWidth: 1920,
      timeZoneOffset: 60,
      userDevice: UserDevice.Desktop,
      userAgent: "Mozilla/5.0 (darwin) AppleWebKit/537.36
    (KHTML, like Gecko) jsdom/16.7.0",
      acceptHeader: "*/*",
    },
    buyerExternalIdentifier: "user-789123",
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
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
        categories: [
          "<value>",
        ],
        productType: ProductType.Physical,
      },
    ],
    connectionOptions: {
      cybersourceCard: {},
      cybersourceAntiFraud: {
        merchantDefinedData: {
          "1": "John Doe",
          "2": "trusted",
          "99": "recurring",
        },
      },
      forterAntiFraud: {
        cartItems: [
          {
            basicItemData: {
              type: TransactionRequestType.Tangible,
            },
            deliveryDetails: {
              deliveryType: TransactionRequestDeliveryType.Physical,
              deliveryMethod: "USPS - Ground Mail",
            },
            beneficiaries: [
              {
                personalDetails: {
                  firstName: "John",
                  lastName: "Smith",
                  email: "john@example.com",
                },
                address: {
                  country: "US",
                  address1: "235 Montgomery st.",
                  address2: "Ste. 1110",
                  zip: "94104",
                  region: "CA",
                  company: "Generic Corp. ltd.",
                  city: "San Francisco",
                },
                phone: [
                  {
                    phone: "15557654321",
                  },
                ],
                comments: {
                  userCommentsToMerchant: "Please wrap with care!!",
                  messageToBeneficiary: "Enjoy the gift John!",
                  merchantComments: "Shipping delayed",
                },
              },
            ],
          },
        ],
        totalDiscount: {
          couponCodeUsed: "FATHERSDAY2015",
          discountType: "COUPON",
          couponDiscountAmount: {
            amountUsd: "99.95",
            amountLocalCurrency: "105.55",
            currency: "CAD",
          },
          couponDiscountPercent: "20%",
        },
      },
      adyenCard: {
        additionalData: {
          "riskdata.operatorCode": "operatorCode,",
          "riskdata.operatorCountry": "operatorCountry",
        },
      },
      paypalPaypal: {
        additionalData: [
          {
            key: "test",
            value: "abc",
          },
        ],
      },
      paypalPaypalpaylater: {
        additionalData: [
          {
            key: "test",
            value: "abc",
          },
        ],
      },
      stripeCard: {
        stripeConnect: {},
      },
    },
    country: "US",
    externalIdentifier: "user-789123",
    giftCards: [
        {
          id: "e6cdf979-87e2-4796-8ff6-9784d5aed893",
          amount: 1299,
        },
    ],
    intent: TransactionRequestIntent.Capture,
    isSubsequentPayment: true,
    merchantInitiated: true,
    metadata: {
      "key": "value",
    },
    paymentSource: PaymentSource.Recurring,
    previousSchemeTransactionId: "123456789012345",
    shippingDetailsId: "47da6902-5eae-4b4b-88fd-856802d627d6",
    statementDescriptor: {
      name: "GR4VY",
      description: "Card payment",
      city: "London",
      phoneNumber: "+1234567890",
      url: "www.gr4vy.com",
    },
    store: true,
  threeDSecureData:     {
        cavv: "3q2+78r+ur7erb7vyv66vv8=",
        eci: "05",
        version: "<value>",
        directoryResponse: "C",
        scheme: ThreeDSecureDataV1Scheme.Visa,
        authenticationResponse: "Y",
        cavvAlgorithm: "<value>",
        xid: "<value>",
      },
    paymentServiceId: "47da6902-5eae-4b4b-88fd-856802d627d6",
  };
  
  const result = await sdk.transactions.newTransaction(idempotencyKey, transactionRequest);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                             | Type                                                                                                                                                                                                  | Required                                                                                                                                                                                              | Description                                                                                                                                                                                           | Example                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                                                                                                      | *string*                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                    | A unique key that identifies this request. Providing this header will make<br/>this an idempotent request. We recommend using V4 UUIDs, or another random<br/>string with enough entropy to avoid collisions. | [object Object]                                                                                                                                                                                       |
| `transactionRequest`                                                                                                                                                                                  | [components.TransactionRequest](../../models/components/transactionrequest.md)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                    | N/A                                                                                                                                                                                                   |                                                                                                                                                                                                       |
| `options`                                                                                                                                                                                             | RequestOptions                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                                 |                                                                                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                        |                                                                                                                                                                                                       |


### Response

**Promise<[components.Transaction](../../models/components/transaction.md)>**
### Errors

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.Error400BadRequest      | 400                            | application/json               |
| errors.Error401Unauthorized    | 401                            | application/json               |
| errors.Error409DuplicateRecord | 409                            | application/json               |
| errors.Error429TooManyRequests | 429                            | application/json               |
| errors.SDKError                | 4xx-5xx                        | */*                            |

## getTransaction

Get information about a transaction.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const transactionId = "fe26475d-ec3e-4884-9553-f7356683f7f9";
  
  const result = await sdk.transactions.getTransaction(transactionId);

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

**Promise<[components.Transaction](../../models/components/transaction.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## getTransactionActions

Gets actions for a given transaction.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
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

## captureTransaction

Captures a previously authorized transaction.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const transactionId = "fe26475d-ec3e-4884-9553-f7356683f7f9";
  const transactionCaptureRequest = {
    amount: 1299,
  };
  
  const result = await sdk.transactions.captureTransaction(transactionId, transactionCaptureRequest);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transactionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID for the transaction to get the information for.                                                                                                                         | [object Object]                                                                                                                                                                |
| `transactionCaptureRequest`                                                                                                                                                    | [components.TransactionCaptureRequest](../../models/components/transactioncapturerequest.md)                                                                                   | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.Transaction](../../models/components/transaction.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## getTransactionEvents

Get a list of events related to processing a transaction.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const transactionId = "fe26475d-ec3e-4884-9553-f7356683f7f9";
  
  const result = await sdk.transactions.getTransactionEvents(transactionId);

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

**Promise<[components.TransactionHistoryEvents](../../models/components/transactionhistoryevents.md)>**
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
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
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

## newRefund

Refunds a transaction, fully or partially.

If the transaction was not yet successfully captured, the
refund will not be processed. Authorized transactions can be
voided instead.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";
import { TransactionRefundRequestTargetType } from "@gr4vy/sdk/models/components";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const transactionId = "fe26475d-ec3e-4884-9553-f7356683f7f9";
  const transactionRefundRequest = {
    amount: 1299,
    targetType: TransactionRefundRequestTargetType.GiftCardRedemption,
    targetId: "c23ea83f-1b1c-4584-a0e8-78ef8c041949",
    reason: "Refund due to user request",
  };
  
  const result = await sdk.transactions.newRefund(transactionId, transactionRefundRequest);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transactionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID for the transaction to get the information for.                                                                                                                         | [object Object]                                                                                                                                                                |
| `transactionRefundRequest`                                                                                                                                                     | [components.TransactionRefundRequest](../../models/components/transactionrefundrequest.md)                                                                                     | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.Refund](../../models/components/refund.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## refundAll

Refunds a transaction fully across all instruments.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const transactionId = "fe26475d-ec3e-4884-9553-f7356683f7f9";
  const transactionRefundAllRequest = {
    reason: "Refund due to user request",
  };
  
  const result = await sdk.transactions.refundAll(transactionId, transactionRefundAllRequest);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transactionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID for the transaction to get the information for.                                                                                                                         | [object Object]                                                                                                                                                                |
| `transactionRefundAllRequest`                                                                                                                                                  | [components.TransactionRefundAllRequest](../../models/components/transactionrefundallrequest.md)                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.Refunds](../../models/components/refunds.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## getRefund

Gets information about a refund associated with a certain transaction.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
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

## getSingleRefund

Gets information about a refund.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const refundId = "8724fd24-5489-4a5d-90fd-0604df7d3b83";
  
  const result = await sdk.transactions.getSingleRefund(refundId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
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
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
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

## voidTransaction

Voids a transaction.

If the transaction was not yet successfully authorized, or was already
captured, the void will not be processed. Captured transactions can be
refunded instead.

Voiding zero-amount authorized transactions is not supported.

Once voided, the status of the transaction will be either `authorization_voided`,
`authorization_void_pending`, or if the void fails the original status will remain.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const transactionId = "fe26475d-ec3e-4884-9553-f7356683f7f9";
  
  const result = await sdk.transactions.voidTransaction(transactionId);

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

**Promise<[components.Transaction](../../models/components/transaction.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
