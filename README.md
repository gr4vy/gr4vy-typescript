# @gr4vy/js

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge&labelColor=black" style="width: 100px; height: 28px;" />
    </a>
</div>


## SDK Installation

### NPM

```bash
yarn add @gr4vy/sdk
```

### Yarn

```bash
yarn add @gr4vy/sdk
```

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

## SDK Example Usage

### Example

```typescript
import fs from "fs";
import { SDK } from "@gr4vy/sdk";

async function run() {
    const sdk = new SDK({
        bearerAuth: withToken({
          privateKey: fs.readFileSync("private_key.pem", "utf8"),
        }),
    });

    const result = await sdk.transactions.listTransactions({});

    // Handle the result
    console.log(result);
}

run();

```

Alternatively, create a token once for use with the SDK or with your own client library.

```js
async function run() {
    const sdk = new SDK({
        bearerAuth: await getToken({
          privateKey: fs.readFileSync("private_key.pem", "utf8"),
        }),
    });

    const result = await sdk.transactions.listTransactions({});

    console.log(result);
}
```

> **Note:** This will only create a token once. Use `withToken` to dynamically generate a token
> for every request.

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [buyers](docs/sdks/buyers/README.md)

* [list](docs/sdks/buyers/README.md#list) - List all buyers
* [create](docs/sdks/buyers/README.md#create) - Add a buyer
* [get](docs/sdks/buyers/README.md#get) - Get a buyer
* [update](docs/sdks/buyers/README.md#update) - Update a buyer
* [delete](docs/sdks/buyers/README.md#delete) - Delete a buyer

### [buyers.billingDetails](docs/sdks/billingdetails/README.md)

* [get](docs/sdks/billingdetails/README.md#get) - Get buyer billing details
* [update](docs/sdks/billingdetails/README.md#update) - Update buyer billing details

### [buyers.shippingDetails](docs/sdks/shippingdetails/README.md)

* [list](docs/sdks/shippingdetails/README.md#list) - List buyer shipping details
* [create](docs/sdks/shippingdetails/README.md#create) - Add buyer shipping details
* [get](docs/sdks/shippingdetails/README.md#get) - Get buyer shipping details
* [update](docs/sdks/shippingdetails/README.md#update) - Update buyer shipping details
* [delete](docs/sdks/shippingdetails/README.md#delete) - Delete buyer shipping details
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Gr4vy } from "@gr4vy/sdk";
import { HTTPValidationError, SDKValidationError } from "@gr4vy/sdk/models/errors";

const gr4vy = new Gr4vy({
    bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
    let result;
    try {
        result = await gr4vy.buyers.list();

        for await (const page of result) {
            // Handle the page
            console.log(page);
        }
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof HTTPValidationError: {
                // Handle err.data$: HTTPValidationErrorData
                console.error(err);
                return;
            }
            default: {
                throw err;
            }
        }
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `production` | `https://api.{gr4vy_id}.gr4vy.app` | `gr4vy_id` (default is `example`) |
| `sandbox` | `https://api.sandbox.{gr4vy_id}.gr4vy.app` | `gr4vy_id` (default is `example`) |

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    server: "sandbox",
    bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
    const result = await gr4vy.buyers.list();

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```

#### Variables

Some of the server options above contain variables. If you want to set the values of those variables, the following optional parameters are available when initializing the SDK client instance:
 * `gr4vyId: string`

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    serverURL: "https://api.{gr4vy_id}.gr4vy.app",
    bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
    const result = await gr4vy.buyers.list();

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Gr4vy } from "@gr4vy/sdk";
import { HTTPClient } from "@gr4vy/sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Gr4vy({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                 | Type                 | Scheme               | Environment Variable |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `bearerAuth`         | http                 | HTTP Bearer          | `GR4VY_BEARER_AUTH`  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
    const result = await gr4vy.buyers.list();

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @gr4vy/sdk
```

### PNPM

```bash
pnpm add @gr4vy/sdk
```

### Bun

```bash
bun add @gr4vy/sdk
```

### Yarn

```bash
yarn add @gr4vy/sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
    const result = await gr4vy.buyers.list();

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
    const result = await gr4vy.buyers.list();

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
    const result = await gr4vy.buyers.list({
        retries: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
    });

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
    bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
    const result = await gr4vy.buyers.list();

    for await (const page of result) {
        // Handle the page
        console.log(page);
    }
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Summary [summary] -->
## Summary

Gr4vy: The Gr4vy API.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Pagination](#pagination)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [buyersBillingDetailsGet](docs/sdks/billingdetails/README.md#get)
- [buyersBillingDetailsUpdate](docs/sdks/billingdetails/README.md#update)
- [buyersCreate](docs/sdks/buyers/README.md#create)
- [buyersDelete](docs/sdks/buyers/README.md#delete)
- [buyersGet](docs/sdks/buyers/README.md#get)
- [buyersList](docs/sdks/buyers/README.md#list)
- [buyersShippingDetailsCreate](docs/sdks/shippingdetails/README.md#create)
- [buyersShippingDetailsDelete](docs/sdks/shippingdetails/README.md#delete)
- [buyersShippingDetailsGet](docs/sdks/shippingdetails/README.md#get)
- [buyersShippingDetailsList](docs/sdks/shippingdetails/README.md#list)
- [buyersShippingDetailsUpdate](docs/sdks/shippingdetails/README.md#update)
- [buyersUpdate](docs/sdks/buyers/README.md#update)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const sdk = new Gr4vy({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `GR4VY_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
