# VaultForward
(*vaultForward*)

## Overview

Vault Forwarding is a way to perform requests where, provided a template,
Gr4vy will evaluate it to inject PCI data and forward it to third party
services that have been vetted to receive such data.

### Available Operations

* [makeVaultForward](#makevaultforward) - Forward PCI data

## makeVaultForward

Forward an API call to a PCI endpoint. The request body is evaluated and any template fields are replaced by the card data before the request is sent to the given destination.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";
import { XVaultForwardHttpMethod } from "@gr4vy/sdk/models/operations";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.vaultForward.makeVaultForward({
    xVaultForwardPaymentMethods: "faaad066-30b4-4997-a438-242b0752d7e1,faaad066-30b4-4997-a438-242b0752d7e2",
    xVaultForwardUrl: "https://api.amadeus.com/booking",
    xVaultForwardHttpMethod: XVaultForwardHttpMethod.Post,
    xVaultForwardHEADERHEADERNAME: "x-vault-forward-header-x-frame-options",
    xVaultForwardTimeout: 10,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MakeVaultForwardRequest](../../models/operations/makevaultforwardrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[string](../../models/.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
