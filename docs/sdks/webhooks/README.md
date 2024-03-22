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

async function run() {
  const sdk = new SDK();

  const hook = "e4f7797af7cc56edb85cde7f94745a13";
  
  const result = await sdk.webhooks.inboundWebhookDeprecated(hook);

  // Handle the result
  console.log(result)
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

**Promise<[operations.InboundWebhookDeprecatedResponse](../../models/operations/inboundwebhookdeprecatedresponse.md)>**
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

async function run() {
  const sdk = new SDK();

  const payload = "zian1_7ATUeO-gRKMrCbxmJyYWludHJlZS1jYXJk";
  const signature = "VKJw22zyhitK4UlofhFbktBT1esRVua1tN382mFDtrM";
  
  const result = await sdk.webhooks.inboundWebhook(payload, signature);

  // Handle the result
  console.log(result)
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

**Promise<[operations.InboundWebhookResponse](../../models/operations/inboundwebhookresponse.md)>**
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

async function run() {
  const sdk = new SDK();

  const resource = Resource.Ps;
  const payload = "zian1_7ATUeO-gRKMrCbxmJyYWludHJlZS1jYXJk";
  const signature = "VKJw22zyhitK4UlofhFbktBT1esRVua1tN382mFDtrM";
  
  const result = await sdk.webhooks.inboundWebhooks(resource, payload, signature);

  // Handle the result
  console.log(result)
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

**Promise<[operations.InboundWebhooksResponse](../../models/operations/inboundwebhooksresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
