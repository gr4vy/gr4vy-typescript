# GiftCardServices
(*giftCardServices*)

## Overview

In Gr4vy, a gift card service represents a configured provider for processing
gift cards.

### Available Operations

* [getGiftCardService](#getgiftcardservice) - Get gift card service
* [deleteGiftCardService](#deletegiftcardservice) - Delete gift card service

## getGiftCardService

Retrieves the details of a single configured gift card service.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/node";

async function run() {
  const sdk = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const giftCardServiceId = "541b126f-44c5-4c5e-a06b-d0e0d54c7d3f";
  
  const result = await sdk.giftCardServices.getGiftCardService(giftCardServiceId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `giftCardServiceId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID of the gift card service.                                                                                                                                        | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.GiftCardService](../../models/components/giftcardservice.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## deleteGiftCardService

Deletes a specific gift card service.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/node";

async function run() {
  const sdk = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const giftCardServiceId = "541b126f-44c5-4c5e-a06b-d0e0d54c7d3f";
  
  const result = await sdk.giftCardServices.deleteGiftCardService(giftCardServiceId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `giftCardServiceId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID of the gift card service.                                                                                                                                        | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.DeleteGiftCardServiceResponse](../../models/operations/deletegiftcardserviceresponse.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
