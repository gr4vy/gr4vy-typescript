# Webhooks
(*webhooks*)

## Overview

Endpoints related to webhooks to integrate Gr4vy with payment services
webhooks functionality.

### Available Operations

* [~~inboundWebhookDeprecated~~](#inboundwebhookdeprecated) - Inbound webhook :warning: **Deprecated**
* [inboundWebhook](#inboundwebhook) - Inbound webhook
* [inboundWebhooks](#inboundwebhooks) - Inbound webhook

## ~~inboundWebhookDeprecated~~

Inbound webhook endpoint to connect to payment services.

The response code and payload will depend on the payment
service definition.

**Warning**: this endpoint will be removed eventually, use
[Inbound webhook](#operation/inbound-webhook).

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK();

async function run() {
  await sdk.webhooks.inboundWebhookDeprecated("e4f7797af7cc56edb85cde7f94745a13");

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `hook`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Opaque token representing the payment service associated with<br/>the webhook endpoint.                                                                                        | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise\<void\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## inboundWebhook

Inbound webhook endpoint to connect to payment services.

The response code and payload will depend on the payment
service definition.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK();

async function run() {
  await sdk.webhooks.inboundWebhook("zian1_7ATUeO-gRKMrCbxmJyYWludHJlZS1jYXJk", "VKJw22zyhitK4UlofhFbktBT1esRVua1tN382mFDtrM");

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `payload`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Opaque data representing the service information associated with<br/>the webhook endpoint.                                                                                     | [object Object]                                                                                                                                                                |
| `signature`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Signature of the opaque data with the service information<br/>used for the webhook endpoint.                                                                                   | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise\<void\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## inboundWebhooks

Inbound webhook endpoint to receive data from external services.

The response code and payload depends on external service.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";
import { Resource } from "@gr4vy/sdk/models/operations";

const sdk = new SDK();

async function run() {
  await sdk.webhooks.inboundWebhooks(Resource.Ps, "zian1_7ATUeO-gRKMrCbxmJyYWludHJlZS1jYXJk", "VKJw22zyhitK4UlofhFbktBT1esRVua1tN382mFDtrM");

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resource`                                                                                                                                                                     | [operations.Resource](../../models/operations/resource.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | Resource type identifier to which the webhook data is related.                                                                                                                 | [object Object]                                                                                                                                                                |
| `payload`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Opaque data representing the service information associated with<br/>the webhook endpoint.                                                                                     | [object Object]                                                                                                                                                                |
| `signature`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Signature of the opaque data with the service information<br/>used for the webhook endpoint.                                                                                   | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise\<void\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
