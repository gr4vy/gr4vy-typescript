# Gr4vy Typescript SDK (Beta)

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
import { Gr4vy, withToken } from "@gr4vy/sdk";

async function run() {
    const gr4vy = new Gr4vy({
        server: "sandbox",
        id: "example",
        bearerAuth: withToken({
          privateKey: fs.readFileSync("private_key.pem", "utf8"),
        }),
    });

    const result = await gr4vy.transactions.listTransactions({});

    // Handle the result
    console.log(result);
}

run();

```

## Bearer token generation

Alternatively, you can create a token for use with the SDK or with your own client library.

```js
import { getToken } from "@gr4vy/sdk";

async function run() {
    const token = await getToken({
          privateKey: fs.readFileSync("private_key.pem", "utf8"),
    });
    console.log(token);
}

run();
```

> **Note:** This will only create a token once. Use `withToken` to dynamically generate a token
> for every request.


## Embed token generation

Alternatively, you can create a token for use with Embed as follows.

```js
import { Gr4vy, getEmbedToken } from "@gr4vy/sdk";

async function run() {
    const privateKey = fs.readFileSync("private_key.pem", "utf8")

    const gr4vy = new Gr4vy({
        server: "sandbox",
        id: "example",
        bearerAuth: withToken({ privateKey }),
    });

    const checkoutSession = await gr4vy.checkoutSessions.create()

    const token = await getEmbedToken({ 
      privateKey,
      checkoutSessionId: checkoutSession.id,
      embedParams: {
        amount: 1299,
        currency: 'USD',
        buyerExternalIdentifier: 'user-1234',
      }
    });

    console.log(token);
}

run();
```

> **Note:** This will only create a token once. Use `withToken` to dynamically generate a token
> for every request.

## Merchant account ID selection

Depending on the key used, you might need to explicitly define a merchant account ID to use. In our API, 
this uses the `X-GR4VY-MERCHANT-ACCOUNT-ID` header. When using the SDK, you can set the `merchantAccountId`
on every request.

```js
const result = await gr4vy.transactions.list({
    merchantAccountId: 'merchant-12345'
})
```

Alternatively, the merchant account ID can also be set when initializing the SDK.

```js
const gr4vy = new Gr4vy({
    server: "sandbox",
    id: "example",
    merchantAccountId: 'merchant-12345',
    bearerAuth: withToken({ privateKey }),
});
```


## Webhooks verification

The SDK provides a `verifyWebhook` method to validate incoming webhook requests from Gr4vy. This ensures that the webhook payload is authentic and has not been tampered with.

```js
import { verifyWebhook } from "@gr4vy/sdk";

const payload = 'your-webhook-payload'
const secret = 'your-webhook-secret'
const signatureHeader = 'signatures-from-header'
const timestampHeader = 'timestamp-from-header'
const timestampTolerance = 300 // optional, in seconds (default: 0)

try {
  verifyWebhook(
    payload,
    secret,
    signatureHeader,
    timestampHeader,
    timestampTolerance
  )
  console.log('Webhook verified successfully!')
} catch (error) {
  console.error('Webhook verification failed:', error.message)
}
```

### Parameters

- **`payload`**: The raw payload string received in the webhook request.
- **`secret`**: The secret used to sign the webhook. This is provided in your Gr4vy dashboard.
- **`signatureHeader`**: The `X-Gr4vy-Signature` header from the webhook request.
- **`timestampHeader`**: The `X-Gr4vy-Timestamp` header from the webhook request.
- **`timestampTolerance`**: _(Optional)_ The maximum allowed difference (in seconds) between the current time and the timestamp in the webhook. Defaults to `0` (no tolerance).


<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accountUpdater](docs/sdks/accountupdater/README.md)


#### [accountUpdater.jobs](docs/sdks/jobs/README.md)

* [create](docs/sdks/jobs/README.md#create) - Create account updater job

### [auditLogs](docs/sdks/auditlogs/README.md)

* [list](docs/sdks/auditlogs/README.md#list) - List audit log entries

### [buyers](docs/sdks/buyers/README.md)

* [list](docs/sdks/buyers/README.md#list) - List all buyers
* [create](docs/sdks/buyers/README.md#create) - Add a buyer
* [get](docs/sdks/buyers/README.md#get) - Get a buyer
* [update](docs/sdks/buyers/README.md#update) - Update a buyer
* [delete](docs/sdks/buyers/README.md#delete) - Delete a buyer

#### [buyers.giftCards](docs/sdks/gr4vygiftcards/README.md)

* [list](docs/sdks/gr4vygiftcards/README.md#list) - List gift cards for a buyer

#### [buyers.paymentMethods](docs/sdks/gr4vypaymentmethods/README.md)

* [list](docs/sdks/gr4vypaymentmethods/README.md#list) - List payment methods for a buyer

#### [buyers.shippingDetails](docs/sdks/shippingdetails/README.md)

* [create](docs/sdks/shippingdetails/README.md#create) - Add buyer shipping details
* [list](docs/sdks/shippingdetails/README.md#list) - List a buyer's shipping details
* [get](docs/sdks/shippingdetails/README.md#get) - Get buyer shipping details
* [update](docs/sdks/shippingdetails/README.md#update) - Update a buyer's shipping details
* [delete](docs/sdks/shippingdetails/README.md#delete) - Delete a buyer's shipping details

### [cardSchemeDefinitions](docs/sdks/cardschemedefinitions/README.md)

* [list](docs/sdks/cardschemedefinitions/README.md#list) - List card scheme definitions

### [checkoutSessions](docs/sdks/checkoutsessions/README.md)

* [create](docs/sdks/checkoutsessions/README.md#create) - Create checkout session
* [update](docs/sdks/checkoutsessions/README.md#update) - Update checkout session
* [get](docs/sdks/checkoutsessions/README.md#get) - Get checkout session
* [delete](docs/sdks/checkoutsessions/README.md#delete) - Delete checkout session

### [digitalWallets](docs/sdks/digitalwallets/README.md)

* [create](docs/sdks/digitalwallets/README.md#create) - Register digital wallet
* [list](docs/sdks/digitalwallets/README.md#list) - List digital wallets
* [get](docs/sdks/digitalwallets/README.md#get) - Get digital wallet
* [delete](docs/sdks/digitalwallets/README.md#delete) - Delete digital wallet
* [update](docs/sdks/digitalwallets/README.md#update) - Update digital wallet

#### [digitalWallets.domains](docs/sdks/domains/README.md)

* [create](docs/sdks/domains/README.md#create) - Register a digital wallet domain
* [delete](docs/sdks/domains/README.md#delete) - Remove a digital wallet domain

#### [digitalWallets.sessions](docs/sdks/sessions/README.md)

* [googlePay](docs/sdks/sessions/README.md#googlepay) - Create a Google Pay session
* [applePay](docs/sdks/sessions/README.md#applepay) - Create a Apple Pay session
* [clickToPay](docs/sdks/sessions/README.md#clicktopay) - Create a Click to Pay session

### [giftCards](docs/sdks/giftcards/README.md)

* [get](docs/sdks/giftcards/README.md#get) - Get gift card
* [delete](docs/sdks/giftcards/README.md#delete) - Delete a gift card
* [create](docs/sdks/giftcards/README.md#create) - Create gift card
* [list](docs/sdks/giftcards/README.md#list) - List gift cards

#### [giftCards.balances](docs/sdks/balances/README.md)

* [list](docs/sdks/balances/README.md#list) - List gift card balances


### [merchantAccounts](docs/sdks/merchantaccounts/README.md)

* [list](docs/sdks/merchantaccounts/README.md#list) - List all merchant accounts
* [create](docs/sdks/merchantaccounts/README.md#create) - Create a merchant account
* [get](docs/sdks/merchantaccounts/README.md#get) - Get a merchant account
* [update](docs/sdks/merchantaccounts/README.md#update) - Update a merchant account

### [paymentMethods](docs/sdks/paymentmethods/README.md)

* [list](docs/sdks/paymentmethods/README.md#list) - List all payment methods
* [create](docs/sdks/paymentmethods/README.md#create) - Create payment method
* [get](docs/sdks/paymentmethods/README.md#get) - Get payment method
* [delete](docs/sdks/paymentmethods/README.md#delete) - Delete payment method

#### [paymentMethods.networkTokens](docs/sdks/networktokens/README.md)

* [list](docs/sdks/networktokens/README.md#list) - List network tokens
* [create](docs/sdks/networktokens/README.md#create) - Provision network token
* [suspend](docs/sdks/networktokens/README.md#suspend) - Suspend network token
* [resume](docs/sdks/networktokens/README.md#resume) - Resume network token
* [delete](docs/sdks/networktokens/README.md#delete) - Delete network token

#### [paymentMethods.networkTokens.cryptogram](docs/sdks/cryptogram/README.md)

* [create](docs/sdks/cryptogram/README.md#create) - Provision network token cryptogram

#### [paymentMethods.paymentServiceTokens](docs/sdks/paymentservicetokens/README.md)

* [list](docs/sdks/paymentservicetokens/README.md#list) - List payment service tokens
* [create](docs/sdks/paymentservicetokens/README.md#create) - Create payment service token
* [delete](docs/sdks/paymentservicetokens/README.md#delete) - Delete payment service token

### [paymentOptions](docs/sdks/paymentoptions/README.md)

* [list](docs/sdks/paymentoptions/README.md#list) - List payment options

### [paymentServiceDefinitions](docs/sdks/paymentservicedefinitions/README.md)

* [list](docs/sdks/paymentservicedefinitions/README.md#list) - List payment service definitions
* [get](docs/sdks/paymentservicedefinitions/README.md#get) - Get a payment service definition
* [session](docs/sdks/paymentservicedefinitions/README.md#session) - Create a session for apayment service definition

### [paymentServices](docs/sdks/paymentservices/README.md)

* [list](docs/sdks/paymentservices/README.md#list) - List payment services
* [create](docs/sdks/paymentservices/README.md#create) - Update a configured payment service
* [get](docs/sdks/paymentservices/README.md#get) - Get payment service
* [update](docs/sdks/paymentservices/README.md#update) - Configure a payment service
* [delete](docs/sdks/paymentservices/README.md#delete) - Delete a configured payment service
* [verify](docs/sdks/paymentservices/README.md#verify) - Verify payment service credentials
* [session](docs/sdks/paymentservices/README.md#session) - Create a session for apayment service definition

### [payouts](docs/sdks/payouts/README.md)

* [list](docs/sdks/payouts/README.md#list) - List payouts created.
* [create](docs/sdks/payouts/README.md#create) - Create a payout.
* [get](docs/sdks/payouts/README.md#get) - Get a payout.

### [refunds](docs/sdks/refunds/README.md)

* [get](docs/sdks/refunds/README.md#get) - Get refund

### [transactions](docs/sdks/transactions/README.md)

* [list](docs/sdks/transactions/README.md#list) - List transactions
* [create](docs/sdks/transactions/README.md#create) - Create transaction
* [get](docs/sdks/transactions/README.md#get) - Get transaction
* [capture](docs/sdks/transactions/README.md#capture) - Capture transaction
* [void](docs/sdks/transactions/README.md#void) - Void transaction
* [summary](docs/sdks/transactions/README.md#summary) - Get transaction summary
* [sync](docs/sdks/transactions/README.md#sync) - Sync transaction

#### [transactions.refunds](docs/sdks/gr4vyrefunds/README.md)

* [list](docs/sdks/gr4vyrefunds/README.md#list) - List transaction refunds
* [create](docs/sdks/gr4vyrefunds/README.md#create) - Create transaction refund
* [get](docs/sdks/gr4vyrefunds/README.md#get) - Get transaction refund

#### [transactions.refunds.all](docs/sdks/all/README.md)

* [create](docs/sdks/all/README.md#create) - Create batch transaction refund

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `create` method may throw the following errors:

| Error Type                 | Status Code | Content Type     |
| -------------------------- | ----------- | ---------------- |
| errors.Error400            | 400         | application/json |
| errors.Error401            | 401         | application/json |
| errors.Error403            | 403         | application/json |
| errors.Error403Forbidden   | 403         | application/json |
| errors.Error403Active      | 403         | application/json |
| errors.Error404            | 404         | application/json |
| errors.Error405            | 405         | application/json |
| errors.Error409            | 409         | application/json |
| errors.HTTPValidationError | 422         | application/json |
| errors.Error425            | 425         | application/json |
| errors.Error429            | 429         | application/json |
| errors.Error500            | 500         | application/json |
| errors.Error502            | 502         | application/json |
| errors.Error504            | 504         | application/json |
| errors.SDKError            | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { Gr4vy } from "@gr4vy/sdk";
import {
  Error400,
  Error401,
  Error403,
  Error403Active,
  Error403Forbidden,
  Error404,
  Error405,
  Error409,
  Error425,
  Error429,
  Error500,
  Error502,
  Error504,
  HTTPValidationError,
  SDKValidationError,
} from "@gr4vy/sdk/models/errors";

const gr4vy = new Gr4vy({
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  let result;
  try {
    result = await gr4vy.accountUpdater.jobs.create(
      {
        paymentMethodIds: [
          "ef9496d8-53a5-4aad-8ca2-00eb68334389",
          "f29e886e-93cc-4714-b4a3-12b7a718e595",
        ],
      },
      1,
      "default",
    );

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof Error400): {
        // Handle err.data$: Error400Data
        console.error(err);
        return;
      }
      case (err instanceof Error401): {
        // Handle err.data$: Error401Data
        console.error(err);
        return;
      }
      case (err instanceof Error403): {
        // Handle err.data$: Error403Data
        return;
      }
      case (err instanceof Error403Forbidden): {
        // Handle err.data$: Error403ForbiddenData
        return;
      }
      case (err instanceof Error403Active): {
        // Handle err.data$: Error403ActiveData
        return;
      }
      case (err instanceof Error404): {
        // Handle err.data$: Error404Data
        console.error(err);
        return;
      }
      case (err instanceof Error405): {
        // Handle err.data$: Error405Data
        console.error(err);
        return;
      }
      case (err instanceof Error409): {
        // Handle err.data$: Error409Data
        console.error(err);
        return;
      }
      case (err instanceof HTTPValidationError): {
        // Handle err.data$: HTTPValidationErrorData
        console.error(err);
        return;
      }
      case (err instanceof Error425): {
        // Handle err.data$: Error425Data
        console.error(err);
        return;
      }
      case (err instanceof Error429): {
        // Handle err.data$: Error429Data
        console.error(err);
        return;
      }
      case (err instanceof Error500): {
        // Handle err.data$: Error500Data
        console.error(err);
        return;
      }
      case (err instanceof Error502): {
        // Handle err.data$: Error502Data
        console.error(err);
        return;
      }
      case (err instanceof Error504): {
        // Handle err.data$: Error504Data
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name         | Server                               | Variables | Description |
| ------------ | ------------------------------------ | --------- | ----------- |
| `production` | `https://api.example.gr4vy.app`      | `id`      |             |
| `sandbox`    | `https://api.sandbox.{id}.gr4vy.app` | `id`      |             |

If the selected server has variables, you may override its default values through the additional parameters made available in the SDK constructor:

| Variable | Parameter    | Default     | Description                            |
| -------- | ------------ | ----------- | -------------------------------------- |
| `id`     | `id: string` | `"example"` | The subdomain for your Gr4vy instance. |

#### Example

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  server: "sandbox",
  id: "<id>",
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const result = await gr4vy.accountUpdater.jobs.create(
    {
      paymentMethodIds: [
        "ef9496d8-53a5-4aad-8ca2-00eb68334389",
        "f29e886e-93cc-4714-b4a3-12b7a718e595",
      ],
    },
    1,
    "default",
  );

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
  serverURL: "https://api.example.gr4vy.app",
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const result = await gr4vy.accountUpdater.jobs.create(
    {
      paymentMethodIds: [
        "ef9496d8-53a5-4aad-8ca2-00eb68334389",
        "f29e886e-93cc-4714-b4a3-12b7a718e595",
      ],
    },
    1,
    "default",
  );

  // Handle the result
  console.log(result);
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

| Name         | Type | Scheme      | Environment Variable |
| ------------ | ---- | ----------- | -------------------- |
| `bearerAuth` | http | HTTP Bearer | `GR4VY_BEARER_AUTH`  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
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
  const result = await gr4vy.accountUpdater.jobs.create(
    {
      paymentMethodIds: [
        "ef9496d8-53a5-4aad-8ca2-00eb68334389",
        "f29e886e-93cc-4714-b4a3-12b7a718e595",
      ],
    },
    1,
    "default",
  );

  // Handle the result
  console.log(result);
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



### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Gr4vy": {
      "command": "npx",
      "args": [
        "-y", "--package", "@gr4vy/sdk",
        "--",
        "mcp", "start",
        "--bearer-auth", "...",
        "--merchant-account-id", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Gr4vy": {
      "command": "npx",
      "args": [
        "-y", "--package", "@gr4vy/sdk",
        "--",
        "mcp", "start",
        "--bearer-auth", "...",
        "--merchant-account-id", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @gr4vy/sdk -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
  const result = await gr4vy.accountUpdater.jobs.create(
    {
      paymentMethodIds: [
        "ef9496d8-53a5-4aad-8ca2-00eb68334389",
        "f29e886e-93cc-4714-b4a3-12b7a718e595",
      ],
    },
    1,
    "default",
  );

  // Handle the result
  console.log(result);
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
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const result = await gr4vy.buyers.list({
    cursor: "ZXhhbXBsZTE",
    search: "John",
    externalIdentifier: "buyer-12345",
  });

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
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const result = await gr4vy.accountUpdater.jobs.create(
    {
      paymentMethodIds: [
        "ef9496d8-53a5-4aad-8ca2-00eb68334389",
        "f29e886e-93cc-4714-b4a3-12b7a718e595",
      ],
    },
    1,
    "default",
    {
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
    },
  );

  // Handle the result
  console.log(result);
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
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const result = await gr4vy.accountUpdater.jobs.create(
    {
      paymentMethodIds: [
        "ef9496d8-53a5-4aad-8ca2-00eb68334389",
        "f29e886e-93cc-4714-b4a3-12b7a718e595",
      ],
    },
    1,
    "default",
  );

  // Handle the result
  console.log(result);
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
<!-- $toc-max-depth=2 -->
* [Gr4vy Typescript SDK (Beta)](#gr4vy-typescript-sdk-beta)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Bearer token generation](#bearer-token-generation)
  * [Embed token generation](#embed-token-generation)
  * [Merchant account ID selection](#merchant-account-id-selection)
  * [Webhooks verification](#webhooks-verification)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [SDK Installation](#sdk-installation-1)
  * [SDK Example Usage](#sdk-example-usage-1)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Standalone functions](#standalone-functions)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

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

- [`accountUpdaterJobsCreate`](docs/sdks/jobs/README.md#create) - Create account updater job
- [`auditLogsList`](docs/sdks/auditlogs/README.md#list) - List audit log entries
- [`buyersCreate`](docs/sdks/buyers/README.md#create) - Add a buyer
- [`buyersDelete`](docs/sdks/buyers/README.md#delete) - Delete a buyer
- [`buyersGet`](docs/sdks/buyers/README.md#get) - Get a buyer
- [`buyersGiftCardsList`](docs/sdks/gr4vygiftcards/README.md#list) - List gift cards for a buyer
- [`buyersList`](docs/sdks/buyers/README.md#list) - List all buyers
- [`buyersPaymentMethodsList`](docs/sdks/gr4vypaymentmethods/README.md#list) - List payment methods for a buyer
- [`buyersShippingDetailsCreate`](docs/sdks/shippingdetails/README.md#create) - Add buyer shipping details
- [`buyersShippingDetailsDelete`](docs/sdks/shippingdetails/README.md#delete) - Delete a buyer's shipping details
- [`buyersShippingDetailsGet`](docs/sdks/shippingdetails/README.md#get) - Get buyer shipping details
- [`buyersShippingDetailsList`](docs/sdks/shippingdetails/README.md#list) - List a buyer's shipping details
- [`buyersShippingDetailsUpdate`](docs/sdks/shippingdetails/README.md#update) - Update a buyer's shipping details
- [`buyersUpdate`](docs/sdks/buyers/README.md#update) - Update a buyer
- [`cardSchemeDefinitionsList`](docs/sdks/cardschemedefinitions/README.md#list) - List card scheme definitions
- [`checkoutSessionsCreate`](docs/sdks/checkoutsessions/README.md#create) - Create checkout session
- [`checkoutSessionsDelete`](docs/sdks/checkoutsessions/README.md#delete) - Delete checkout session
- [`checkoutSessionsGet`](docs/sdks/checkoutsessions/README.md#get) - Get checkout session
- [`checkoutSessionsUpdate`](docs/sdks/checkoutsessions/README.md#update) - Update checkout session
- [`digitalWalletsCreate`](docs/sdks/digitalwallets/README.md#create) - Register digital wallet
- [`digitalWalletsDelete`](docs/sdks/digitalwallets/README.md#delete) - Delete digital wallet
- [`digitalWalletsDomainsCreate`](docs/sdks/domains/README.md#create) - Register a digital wallet domain
- [`digitalWalletsDomainsDelete`](docs/sdks/domains/README.md#delete) - Remove a digital wallet domain
- [`digitalWalletsGet`](docs/sdks/digitalwallets/README.md#get) - Get digital wallet
- [`digitalWalletsList`](docs/sdks/digitalwallets/README.md#list) - List digital wallets
- [`digitalWalletsSessionsApplePay`](docs/sdks/sessions/README.md#applepay) - Create a Apple Pay session
- [`digitalWalletsSessionsClickToPay`](docs/sdks/sessions/README.md#clicktopay) - Create a Click to Pay session
- [`digitalWalletsSessionsGooglePay`](docs/sdks/sessions/README.md#googlepay) - Create a Google Pay session
- [`digitalWalletsUpdate`](docs/sdks/digitalwallets/README.md#update) - Update digital wallet
- [`giftCardsBalancesList`](docs/sdks/balances/README.md#list) - List gift card balances
- [`giftCardsCreate`](docs/sdks/giftcards/README.md#create) - Create gift card
- [`giftCardsDelete`](docs/sdks/giftcards/README.md#delete) - Delete a gift card
- [`giftCardsGet`](docs/sdks/giftcards/README.md#get) - Get gift card
- [`giftCardsList`](docs/sdks/giftcards/README.md#list) - List gift cards
- [`merchantAccountsCreate`](docs/sdks/merchantaccounts/README.md#create) - Create a merchant account
- [`merchantAccountsGet`](docs/sdks/merchantaccounts/README.md#get) - Get a merchant account
- [`merchantAccountsList`](docs/sdks/merchantaccounts/README.md#list) - List all merchant accounts
- [`merchantAccountsUpdate`](docs/sdks/merchantaccounts/README.md#update) - Update a merchant account
- [`paymentMethodsCreate`](docs/sdks/paymentmethods/README.md#create) - Create payment method
- [`paymentMethodsDelete`](docs/sdks/paymentmethods/README.md#delete) - Delete payment method
- [`paymentMethodsGet`](docs/sdks/paymentmethods/README.md#get) - Get payment method
- [`paymentMethodsList`](docs/sdks/paymentmethods/README.md#list) - List all payment methods
- [`paymentMethodsNetworkTokensCreate`](docs/sdks/networktokens/README.md#create) - Provision network token
- [`paymentMethodsNetworkTokensCryptogramCreate`](docs/sdks/cryptogram/README.md#create) - Provision network token cryptogram
- [`paymentMethodsNetworkTokensDelete`](docs/sdks/networktokens/README.md#delete) - Delete network token
- [`paymentMethodsNetworkTokensList`](docs/sdks/networktokens/README.md#list) - List network tokens
- [`paymentMethodsNetworkTokensResume`](docs/sdks/networktokens/README.md#resume) - Resume network token
- [`paymentMethodsNetworkTokensSuspend`](docs/sdks/networktokens/README.md#suspend) - Suspend network token
- [`paymentMethodsPaymentServiceTokensCreate`](docs/sdks/paymentservicetokens/README.md#create) - Create payment service token
- [`paymentMethodsPaymentServiceTokensDelete`](docs/sdks/paymentservicetokens/README.md#delete) - Delete payment service token
- [`paymentMethodsPaymentServiceTokensList`](docs/sdks/paymentservicetokens/README.md#list) - List payment service tokens
- [`paymentOptionsList`](docs/sdks/paymentoptions/README.md#list) - List payment options
- [`paymentServiceDefinitionsGet`](docs/sdks/paymentservicedefinitions/README.md#get) - Get a payment service definition
- [`paymentServiceDefinitionsList`](docs/sdks/paymentservicedefinitions/README.md#list) - List payment service definitions
- [`paymentServiceDefinitionsSession`](docs/sdks/paymentservicedefinitions/README.md#session) - Create a session for apayment service definition
- [`paymentServicesCreate`](docs/sdks/paymentservices/README.md#create) - Update a configured payment service
- [`paymentServicesDelete`](docs/sdks/paymentservices/README.md#delete) - Delete a configured payment service
- [`paymentServicesGet`](docs/sdks/paymentservices/README.md#get) - Get payment service
- [`paymentServicesList`](docs/sdks/paymentservices/README.md#list) - List payment services
- [`paymentServicesSession`](docs/sdks/paymentservices/README.md#session) - Create a session for apayment service definition
- [`paymentServicesUpdate`](docs/sdks/paymentservices/README.md#update) - Configure a payment service
- [`paymentServicesVerify`](docs/sdks/paymentservices/README.md#verify) - Verify payment service credentials
- [`payoutsCreate`](docs/sdks/payouts/README.md#create) - Create a payout.
- [`payoutsGet`](docs/sdks/payouts/README.md#get) - Get a payout.
- [`payoutsList`](docs/sdks/payouts/README.md#list) - List payouts created.
- [`refundsGet`](docs/sdks/refunds/README.md#get) - Get refund
- [`transactionsCapture`](docs/sdks/transactions/README.md#capture) - Capture transaction
- [`transactionsCreate`](docs/sdks/transactions/README.md#create) - Create transaction
- [`transactionsGet`](docs/sdks/transactions/README.md#get) - Get transaction
- [`transactionsList`](docs/sdks/transactions/README.md#list) - List transactions
- [`transactionsRefundsAllCreate`](docs/sdks/all/README.md#create) - Create batch transaction refund
- [`transactionsRefundsCreate`](docs/sdks/gr4vyrefunds/README.md#create) - Create transaction refund
- [`transactionsRefundsGet`](docs/sdks/gr4vyrefunds/README.md#get) - Get transaction refund
- [`transactionsRefundsList`](docs/sdks/gr4vyrefunds/README.md#list) - List transaction refunds
- [`transactionsSummary`](docs/sdks/transactions/README.md#summary) - Get transaction summary
- [`transactionsSync`](docs/sdks/transactions/README.md#sync) - Sync transaction
- [`transactionsVoid`](docs/sdks/transactions/README.md#void) - Void transaction

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
