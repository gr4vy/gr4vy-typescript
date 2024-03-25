# CardSchemeDefinitions
(*cardSchemeDefinitions*)

## Overview

Card Scheme definitions provide display information to a card scheme.

### Available Operations

* [listCardSchemeDefinitions](#listcardschemedefinitions) - List card scheme definitions

## listCardSchemeDefinitions

Returns a list of all available card scheme definitions.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.cardSchemeDefinitions.listCardSchemeDefinitions();

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


### Response

**Promise<[components.CardSchemeDefinitions](../../models/components/cardschemedefinitions.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
