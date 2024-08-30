# @gr4vy/js

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge&labelColor=black" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

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

### [Gr4vy SDK](docs/sdks/gr4vy/README.md)

* [createAccountUpdaterJob](docs/sdks/gr4vy/README.md#createaccountupdaterjob) - Add
* [listBuyerPaymentMethods](docs/sdks/gr4vy/README.md#listbuyerpaymentmethods) - For Buyer
* [listPaymentMethods](docs/sdks/gr4vy/README.md#listpaymentmethods) - Browse
* [addPaymentMethod](docs/sdks/gr4vy/README.md#addpaymentmethod) - Add
* [getPaymentMethod](docs/sdks/gr4vy/README.md#getpaymentmethod) - Read
* [deletePaymentMethod](docs/sdks/gr4vy/README.md#deletepaymentmethod) - Delete Payment Method
* [listPaymentServiceTokens](docs/sdks/gr4vy/README.md#listpaymentservicetokens) - Payment Service Tokens
* [createPaymentServiceToken](docs/sdks/gr4vy/README.md#createpaymentservicetoken) - Tokenize
* [listNetworkTokens](docs/sdks/gr4vy/README.md#listnetworktokens) - Network Tokens
* [createNetworkToken](docs/sdks/gr4vy/README.md#createnetworktoken) - Provision Network Token
* [createNetworkTokenCryptogram](docs/sdks/gr4vy/README.md#createnetworktokencryptogram) - Issue Cryptogram
* [deletePaymentServiceToken](docs/sdks/gr4vy/README.md#deletepaymentservicetoken) - Delete Payment Service Token
* [deleteNetworkToken](docs/sdks/gr4vy/README.md#deletenetworktoken) - Delete Network Token
* [suspendNetworkToken](docs/sdks/gr4vy/README.md#suspendnetworktoken) - Suspend Network Token
* [resumeNetworkToken](docs/sdks/gr4vy/README.md#resumenetworktoken) - Resume Network Token
* [approvePaymentMethod](docs/sdks/gr4vy/README.md#approvepaymentmethod) - Approve
* [approvePaymentServiceToken](docs/sdks/gr4vy/README.md#approvepaymentservicetoken) - Approve Payment Service Token
* [listGiftCardBalances](docs/sdks/gr4vy/README.md#listgiftcardbalances) - Get Balances
* [getGiftCard](docs/sdks/gr4vy/README.md#getgiftcard) - Read
* [deleteGiftCard](docs/sdks/gr4vy/README.md#deletegiftcard) - Delete
* [listGiftCards](docs/sdks/gr4vy/README.md#listgiftcards) - Browse
* [addGiftCard](docs/sdks/gr4vy/README.md#addgiftcard) - Add
* [listBuyerGiftCards](docs/sdks/gr4vy/README.md#listbuyergiftcards) - For Buyer
* [listBuyers](docs/sdks/gr4vy/README.md#listbuyers) - Browse
* [addBuyer](docs/sdks/gr4vy/README.md#addbuyer) - Add
* [listBuyerBillingDetails](docs/sdks/gr4vy/README.md#listbuyerbillingdetails) - Get Billing Details
* [updateBuyerBillingDetails](docs/sdks/gr4vy/README.md#updatebuyerbillingdetails) - Update Billing Details
* [getBuyer](docs/sdks/gr4vy/README.md#getbuyer) - Read
* [updateBuyer](docs/sdks/gr4vy/README.md#updatebuyer) - Edit
* [deleteBuyer](docs/sdks/gr4vy/README.md#deletebuyer) - Delete
* [listBuyerShippingDetails](docs/sdks/gr4vy/README.md#listbuyershippingdetails) - List Shipping Details For Buyer
* [addBuyerShippingDetails](docs/sdks/gr4vy/README.md#addbuyershippingdetails) - Add Shipping Details
* [getBuyerShippingDetails](docs/sdks/gr4vy/README.md#getbuyershippingdetails) - Get Shipping Details
* [updateBuyerShippingDetails](docs/sdks/gr4vy/README.md#updatebuyershippingdetails) - Update Shipping Details
* [deleteBuyerShippingDetails](docs/sdks/gr4vy/README.md#deletebuyershippingdetails) - Delete Shipping Details
* [listConnections](docs/sdks/gr4vy/README.md#listconnections) - Browse
* [listConnectionDefinitions](docs/sdks/gr4vy/README.md#listconnectiondefinitions) - Browse
* [listCardSchemeDefinitions](docs/sdks/gr4vy/README.md#listcardschemedefinitions) - Browse
* [listDigitalWallets](docs/sdks/gr4vy/README.md#listdigitalwallets) - Browse
* [addDigitalWallet](docs/sdks/gr4vy/README.md#adddigitalwallet) - Register
* [getAppleDigitalWallet](docs/sdks/gr4vy/README.md#getappledigitalwallet) - Read Apple Status
* [getDigitalWallet](docs/sdks/gr4vy/README.md#getdigitalwallet) - Read
* [updateDigitalWallet](docs/sdks/gr4vy/README.md#updatedigitalwallet) - Edit
* [deleteDigitalWallet](docs/sdks/gr4vy/README.md#deletedigitalwallet) - Delete
* [addGooglePaySession](docs/sdks/gr4vy/README.md#addgooglepaysession) - Google Pay Session
* [addApplePaySession](docs/sdks/gr4vy/README.md#addapplepaysession) - Apple Pay Session
* [registerDigitalWalletDomain](docs/sdks/gr4vy/README.md#registerdigitalwalletdomain) - Domain Registration
* [deregisterDigitalWalletDomain](docs/sdks/gr4vy/README.md#deregisterdigitalwalletdomain) - Domain Deregistration
* [addClickToPaySession](docs/sdks/gr4vy/README.md#addclicktopaysession) - Click To Pay Session
* [listTransactions](docs/sdks/gr4vy/README.md#listtransactions) - Browse
* [createTransaction](docs/sdks/gr4vy/README.md#createtransaction) - Add
* [getTransaction](docs/sdks/gr4vy/README.md#gettransaction) - Read
* [captureTransaction](docs/sdks/gr4vy/README.md#capturetransaction) - Capture
* [listTransactionRefunds](docs/sdks/gr4vy/README.md#listtransactionrefunds) - Browse Refunds
* [refundTransaction](docs/sdks/gr4vy/README.md#refundtransaction) - Add Refund
* [getTransactionRefund](docs/sdks/gr4vy/README.md#gettransactionrefund) - Read Transaction Refund
* [getRefund](docs/sdks/gr4vy/README.md#getrefund) - Read Standalone Refund
* [voidTransaction](docs/sdks/gr4vy/README.md#voidtransaction) - Void
* [refundAllTransactionMethods](docs/sdks/gr4vy/README.md#refundalltransactionmethods) - Refund All
* [listTransactionActions](docs/sdks/gr4vy/README.md#listtransactionactions) - Actions
* [getTransactionSummary](docs/sdks/gr4vy/README.md#gettransactionsummary) - Summary
* [listTransactionEvents](docs/sdks/gr4vy/README.md#listtransactionevents) - Events
* [listPaymentOptions](docs/sdks/gr4vy/README.md#listpaymentoptions) - Browse Post
* [listPaymentMethodDefinitions](docs/sdks/gr4vy/README.md#listpaymentmethoddefinitions) - Browse
* [listPaymentServiceDefinitions](docs/sdks/gr4vy/README.md#listpaymentservicedefinitions) - Browse
* [getPaymentServiceDefinition](docs/sdks/gr4vy/README.md#getpaymentservicedefinition) - Read
* [createPaymentServiceDefinitionSession](docs/sdks/gr4vy/README.md#createpaymentservicedefinitionsession) - Create Session
* [listPaymentServices](docs/sdks/gr4vy/README.md#listpaymentservices) - Browse
* [createPaymentService](docs/sdks/gr4vy/README.md#createpaymentservice) - Add
* [getPaymentService](docs/sdks/gr4vy/README.md#getpaymentservice) - Read
* [updatePaymentService](docs/sdks/gr4vy/README.md#updatepaymentservice) - Edit
* [deletePaymentService](docs/sdks/gr4vy/README.md#deletepaymentservice) - Delete
* [verifyPaymentServiceCredentials](docs/sdks/gr4vy/README.md#verifypaymentservicecredentials) - Verify
* [createPaymentServiceSession](docs/sdks/gr4vy/README.md#createpaymentservicesession) - Create Session
* [listAntiFraudServiceDefinitions](docs/sdks/gr4vy/README.md#listantifraudservicedefinitions) - Get
* [getAntiFraudService](docs/sdks/gr4vy/README.md#getantifraudservice) - Read
* [updateAntiFraudService](docs/sdks/gr4vy/README.md#updateantifraudservice) - Edit
* [deleteAntiFraudService](docs/sdks/gr4vy/README.md#deleteantifraudservice) - Delete
* [createAntiFraudService](docs/sdks/gr4vy/README.md#createantifraudservice) - Add
* [verifyAntiFraudServiceCredentials](docs/sdks/gr4vy/README.md#verifyantifraudservicecredentials) - Verify
* [getGiftCardServiceDefinition](docs/sdks/gr4vy/README.md#getgiftcardservicedefinition) - Get
* [getGiftCardService](docs/sdks/gr4vy/README.md#getgiftcardservice) - Read
* [updateGiftCardService](docs/sdks/gr4vy/README.md#updategiftcardservice) - Edit
* [deleteGiftCardService](docs/sdks/gr4vy/README.md#deletegiftcardservice) - Delete
* [createGiftCardService](docs/sdks/gr4vy/README.md#creategiftcardservice) - Add
* [verifyGiftCardServiceCredentials](docs/sdks/gr4vy/README.md#verifygiftcardservicecredentials) - Verify
* [refreshAuthSessionsPut](docs/sdks/gr4vy/README.md#refreshauthsessionsput) - Refresh
* [deleteAuthSessionsDelete](docs/sdks/gr4vy/README.md#deleteauthsessionsdelete) - Delete
* [createFlowActionRule](docs/sdks/gr4vy/README.md#createflowactionrule) - Add
* [getFlow](docs/sdks/gr4vy/README.md#getflow) - Browse Flow
* [getFlowActionRule](docs/sdks/gr4vy/README.md#getflowactionrule) - Get
* [updateFlowActionRule](docs/sdks/gr4vy/README.md#updateflowactionrule) - Edit
* [deleteFlowActionRule](docs/sdks/gr4vy/README.md#deleteflowactionrule) - Delete
* [listCheckoutFlowActionRuleOptionOutcomes](docs/sdks/gr4vy/README.md#listcheckoutflowactionruleoptionoutcomes) - Checkout Payment Options Outcomes
* [listCardFlowActionRuleRoutingOutcomes](docs/sdks/gr4vy/README.md#listcardflowactionruleroutingoutcomes) - Browse Card Transaction Routing Outcomes
* [listRedirectFlowActionRuleRoutingOutcomes](docs/sdks/gr4vy/README.md#listredirectflowactionruleroutingoutcomes) - Browse Redirect Transaction Routing Outcomes
* [listCardFlowActionRule3dsOutcomes](docs/sdks/gr4vy/README.md#listcardflowactionrule3dsoutcomes) - Skip 3Ds Payment Options Outcomes
* [listAuditLogs](docs/sdks/gr4vy/README.md#listauditlogs) - Browse
* [listApiLogs](docs/sdks/gr4vy/README.md#listapilogs) - Browse
* [listReports](docs/sdks/gr4vy/README.md#listreports) - Browse
* [createReport](docs/sdks/gr4vy/README.md#createreport) - Add
* [getReport](docs/sdks/gr4vy/README.md#getreport) - Read
* [updateReport](docs/sdks/gr4vy/README.md#updatereport) - Edit
* [listReportExecutions](docs/sdks/gr4vy/README.md#listreportexecutions) - Browse Executions
* [generateReportExecutionUrl](docs/sdks/gr4vy/README.md#generatereportexecutionurl) - Generate Download Url
* [listAllReportExecutions](docs/sdks/gr4vy/README.md#listallreportexecutions) - Browse Executions Any Report
* [getReportExecution](docs/sdks/gr4vy/README.md#getreportexecution) - Get Report Execution
* [addCheckoutSession](docs/sdks/gr4vy/README.md#addcheckoutsession) - Add
* [getCheckoutSession](docs/sdks/gr4vy/README.md#getcheckoutsession) - Get Session
* [updateCheckoutSession](docs/sdks/gr4vy/README.md#updatecheckoutsession) - Update
* [deleteCheckoutSession](docs/sdks/gr4vy/README.md#deletecheckoutsession) - Delete Session
* [updateCheckoutSessionFields](docs/sdks/gr4vy/README.md#updatecheckoutsessionfields) - Update Session Secure Fields
* [listRoles](docs/sdks/gr4vy/README.md#listroles) - Browse Roles
* [listRoleAssignments](docs/sdks/gr4vy/README.md#listroleassignments) - Browse
* [createRoleAssignments](docs/sdks/gr4vy/README.md#createroleassignments) - Add
* [deleteRoleAssignment](docs/sdks/gr4vy/README.md#deleteroleassignment) - Delete
* [listApplePayCertificates](docs/sdks/gr4vy/README.md#listapplepaycertificates) - Browse
* [generateApplePayCertificate](docs/sdks/gr4vy/README.md#generateapplepaycertificate) - Add
* [confirmApplePayCertificate](docs/sdks/gr4vy/README.md#confirmapplepaycertificate) - Edit
* [deleteApplePayCertificate](docs/sdks/gr4vy/README.md#deleteapplepaycertificate) - Delete
* [listMerchantAccounts](docs/sdks/gr4vy/README.md#listmerchantaccounts) - Browse
* [createMerchantAccount](docs/sdks/gr4vy/README.md#createmerchantaccount) - Add
* [getMerchantAccount](docs/sdks/gr4vy/README.md#getmerchantaccount) - Read
* [updateMerchantAccount](docs/sdks/gr4vy/README.md#updatemerchantaccount) - Edit
* [browseConfigVaultForwardConfigsPciForwardConfigIdGet](docs/sdks/gr4vy/README.md#browseconfigvaultforwardconfigspciforwardconfigidget) - Browse Config
* [browseAuthenticationVaultForwardConfigsPciForwardConfigIdAuthenticationsPciForwardConfigAuthenticationIdGet](docs/sdks/gr4vy/README.md#browseauthenticationvaultforwardconfigspciforwardconfigidauthenticationspciforwardconfigauthenticationidget) - Browse Authentication
* [editAuthenticationVaultForwardConfigsPciForwardConfigIdAuthenticationsPciForwardConfigAuthenticationIdPut](docs/sdks/gr4vy/README.md#editauthenticationvaultforwardconfigspciforwardconfigidauthenticationspciforwardconfigauthenticationidput) - Edit Authentication
* [deleteAuthenticationVaultForwardConfigsPciForwardConfigIdAuthenticationsPciForwardConfigAuthenticationIdDelete](docs/sdks/gr4vy/README.md#deleteauthenticationvaultforwardconfigspciforwardconfigidauthenticationspciforwardconfigauthenticationiddelete) - Delete Authentication
* [browseAuthenticationsVaultForwardConfigsPciForwardConfigIdAuthenticationsGet](docs/sdks/gr4vy/README.md#browseauthenticationsvaultforwardconfigspciforwardconfigidauthenticationsget) - Browse Authentications
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
    oAuth2PasswordBearer: "<YOUR_O_AUTH2_PASSWORD_BEARER_HERE>",
});

async function run() {
    let result;
    try {
        result = await gr4vy.createAccountUpdaterJob({
            paymentMethodIds: ["88e8fffc-c40a-4d66-83ff-49739007c7a2"],
        });
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

    // Handle the result
    console.log(result);
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
| `production` | `https://api.{gr4vy_id}.gr4vy.app` | `gr4vy_id` (default is `plantly`) |
| `sandbox` | `https://api.sandbox.{gr4vy_id}.gr4vy.app` | `gr4vy_id` (default is `plantly`) |

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    server: "sandbox",
    oAuth2PasswordBearer: "<YOUR_O_AUTH2_PASSWORD_BEARER_HERE>",
});

async function run() {
    const result = await gr4vy.createAccountUpdaterJob({
        paymentMethodIds: ["88e8fffc-c40a-4d66-83ff-49739007c7a2"],
    });

    // Handle the result
    console.log(result);
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
    oAuth2PasswordBearer: "<YOUR_O_AUTH2_PASSWORD_BEARER_HERE>",
});

async function run() {
    const result = await gr4vy.createAccountUpdaterJob({
        paymentMethodIds: ["88e8fffc-c40a-4d66-83ff-49739007c7a2"],
    });

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

| Name                   | Type                   | Scheme                 |
| ---------------------- | ---------------------- | ---------------------- |
| `oAuth2PasswordBearer` | oauth2                 | OAuth2 token           |

To authenticate with the API the `oAuth2PasswordBearer` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    oAuth2PasswordBearer: "<YOUR_O_AUTH2_PASSWORD_BEARER_HERE>",
});

async function run() {
    const result = await gr4vy.createAccountUpdaterJob({
        paymentMethodIds: ["88e8fffc-c40a-4d66-83ff-49739007c7a2"],
    });

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
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    oAuth2PasswordBearer: "<YOUR_O_AUTH2_PASSWORD_BEARER_HERE>",
});

async function run() {
    const result = await gr4vy.createAccountUpdaterJob({
        paymentMethodIds: ["88e8fffc-c40a-4d66-83ff-49739007c7a2"],
    });

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
    oAuth2PasswordBearer: "<YOUR_O_AUTH2_PASSWORD_BEARER_HERE>",
});

async function run() {
    const result = await gr4vy.listPaymentMethods({});

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
    oAuth2PasswordBearer: "<YOUR_O_AUTH2_PASSWORD_BEARER_HERE>",
});

async function run() {
    const result = await gr4vy.createAccountUpdaterJob(
        {
            paymentMethodIds: ["88e8fffc-c40a-4d66-83ff-49739007c7a2"],
        },
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
        }
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
    oAuth2PasswordBearer: "<YOUR_O_AUTH2_PASSWORD_BEARER_HERE>",
});

async function run() {
    const result = await gr4vy.createAccountUpdaterJob({
        paymentMethodIds: ["88e8fffc-c40a-4d66-83ff-49739007c7a2"],
    });

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

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Pagination](#pagination)
* [File uploads](#file-uploads)
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

- [addApplePaySession](docs/sdks/gr4vy/README.md#addapplepaysession)
- [addBuyerShippingDetails](docs/sdks/gr4vy/README.md#addbuyershippingdetails)
- [addBuyer](docs/sdks/gr4vy/README.md#addbuyer)
- [addCheckoutSession](docs/sdks/gr4vy/README.md#addcheckoutsession)
- [addClickToPaySession](docs/sdks/gr4vy/README.md#addclicktopaysession)
- [addDigitalWallet](docs/sdks/gr4vy/README.md#adddigitalwallet)
- [addGiftCard](docs/sdks/gr4vy/README.md#addgiftcard)
- [addGooglePaySession](docs/sdks/gr4vy/README.md#addgooglepaysession)
- [addPaymentMethod](docs/sdks/gr4vy/README.md#addpaymentmethod)
- [approvePaymentMethod](docs/sdks/gr4vy/README.md#approvepaymentmethod)
- [approvePaymentServiceToken](docs/sdks/gr4vy/README.md#approvepaymentservicetoken)
- [browseAuthenticationVaultForwardConfigsPciForwardConfigIdAuthenticationsPciForwardConfigAuthenticationIdGet](docs/sdks/gr4vy/README.md#browseauthenticationvaultforwardconfigspciforwardconfigidauthenticationspciforwardconfigauthenticationidget)
- [browseAuthenticationsVaultForwardConfigsPciForwardConfigIdAuthenticationsGet](docs/sdks/gr4vy/README.md#browseauthenticationsvaultforwardconfigspciforwardconfigidauthenticationsget)
- [browseConfigVaultForwardConfigsPciForwardConfigIdGet](docs/sdks/gr4vy/README.md#browseconfigvaultforwardconfigspciforwardconfigidget)
- [captureTransaction](docs/sdks/gr4vy/README.md#capturetransaction)
- [confirmApplePayCertificate](docs/sdks/gr4vy/README.md#confirmapplepaycertificate)
- [createAccountUpdaterJob](docs/sdks/gr4vy/README.md#createaccountupdaterjob)
- [createAntiFraudService](docs/sdks/gr4vy/README.md#createantifraudservice)
- [createFlowActionRule](docs/sdks/gr4vy/README.md#createflowactionrule)
- [createGiftCardService](docs/sdks/gr4vy/README.md#creategiftcardservice)
- [createMerchantAccount](docs/sdks/gr4vy/README.md#createmerchantaccount)
- [createNetworkTokenCryptogram](docs/sdks/gr4vy/README.md#createnetworktokencryptogram)
- [createNetworkToken](docs/sdks/gr4vy/README.md#createnetworktoken)
- [createPaymentServiceDefinitionSession](docs/sdks/gr4vy/README.md#createpaymentservicedefinitionsession)
- [createPaymentServiceSession](docs/sdks/gr4vy/README.md#createpaymentservicesession)
- [createPaymentServiceToken](docs/sdks/gr4vy/README.md#createpaymentservicetoken)
- [createPaymentService](docs/sdks/gr4vy/README.md#createpaymentservice)
- [createReport](docs/sdks/gr4vy/README.md#createreport)
- [createRoleAssignments](docs/sdks/gr4vy/README.md#createroleassignments)
- [createTransaction](docs/sdks/gr4vy/README.md#createtransaction)
- [deleteAntiFraudService](docs/sdks/gr4vy/README.md#deleteantifraudservice)
- [deleteApplePayCertificate](docs/sdks/gr4vy/README.md#deleteapplepaycertificate)
- [deleteAuthSessionsDelete](docs/sdks/gr4vy/README.md#deleteauthsessionsdelete)
- [deleteAuthenticationVaultForwardConfigsPciForwardConfigIdAuthenticationsPciForwardConfigAuthenticationIdDelete](docs/sdks/gr4vy/README.md#deleteauthenticationvaultforwardconfigspciforwardconfigidauthenticationspciforwardconfigauthenticationiddelete)
- [deleteBuyerShippingDetails](docs/sdks/gr4vy/README.md#deletebuyershippingdetails)
- [deleteBuyer](docs/sdks/gr4vy/README.md#deletebuyer)
- [deleteCheckoutSession](docs/sdks/gr4vy/README.md#deletecheckoutsession)
- [deleteDigitalWallet](docs/sdks/gr4vy/README.md#deletedigitalwallet)
- [deleteFlowActionRule](docs/sdks/gr4vy/README.md#deleteflowactionrule)
- [deleteGiftCardService](docs/sdks/gr4vy/README.md#deletegiftcardservice)
- [deleteGiftCard](docs/sdks/gr4vy/README.md#deletegiftcard)
- [deleteNetworkToken](docs/sdks/gr4vy/README.md#deletenetworktoken)
- [deletePaymentMethod](docs/sdks/gr4vy/README.md#deletepaymentmethod)
- [deletePaymentServiceToken](docs/sdks/gr4vy/README.md#deletepaymentservicetoken)
- [deletePaymentService](docs/sdks/gr4vy/README.md#deletepaymentservice)
- [deleteRoleAssignment](docs/sdks/gr4vy/README.md#deleteroleassignment)
- [deregisterDigitalWalletDomain](docs/sdks/gr4vy/README.md#deregisterdigitalwalletdomain)
- [editAuthenticationVaultForwardConfigsPciForwardConfigIdAuthenticationsPciForwardConfigAuthenticationIdPut](docs/sdks/gr4vy/README.md#editauthenticationvaultforwardconfigspciforwardconfigidauthenticationspciforwardconfigauthenticationidput)
- [generateApplePayCertificate](docs/sdks/gr4vy/README.md#generateapplepaycertificate)
- [generateReportExecutionUrl](docs/sdks/gr4vy/README.md#generatereportexecutionurl)
- [getAntiFraudService](docs/sdks/gr4vy/README.md#getantifraudservice)
- [getAppleDigitalWallet](docs/sdks/gr4vy/README.md#getappledigitalwallet)
- [getBuyerShippingDetails](docs/sdks/gr4vy/README.md#getbuyershippingdetails)
- [getBuyer](docs/sdks/gr4vy/README.md#getbuyer)
- [getCheckoutSession](docs/sdks/gr4vy/README.md#getcheckoutsession)
- [getDigitalWallet](docs/sdks/gr4vy/README.md#getdigitalwallet)
- [getFlowActionRule](docs/sdks/gr4vy/README.md#getflowactionrule)
- [getFlow](docs/sdks/gr4vy/README.md#getflow)
- [getGiftCardServiceDefinition](docs/sdks/gr4vy/README.md#getgiftcardservicedefinition)
- [getGiftCardService](docs/sdks/gr4vy/README.md#getgiftcardservice)
- [getGiftCard](docs/sdks/gr4vy/README.md#getgiftcard)
- [getMerchantAccount](docs/sdks/gr4vy/README.md#getmerchantaccount)
- [getPaymentMethod](docs/sdks/gr4vy/README.md#getpaymentmethod)
- [getPaymentServiceDefinition](docs/sdks/gr4vy/README.md#getpaymentservicedefinition)
- [getPaymentService](docs/sdks/gr4vy/README.md#getpaymentservice)
- [getRefund](docs/sdks/gr4vy/README.md#getrefund)
- [getReportExecution](docs/sdks/gr4vy/README.md#getreportexecution)
- [getReport](docs/sdks/gr4vy/README.md#getreport)
- [getTransactionRefund](docs/sdks/gr4vy/README.md#gettransactionrefund)
- [getTransactionSummary](docs/sdks/gr4vy/README.md#gettransactionsummary)
- [getTransaction](docs/sdks/gr4vy/README.md#gettransaction)
- [listAllReportExecutions](docs/sdks/gr4vy/README.md#listallreportexecutions)
- [listAntiFraudServiceDefinitions](docs/sdks/gr4vy/README.md#listantifraudservicedefinitions)
- [listApiLogs](docs/sdks/gr4vy/README.md#listapilogs)
- [listApplePayCertificates](docs/sdks/gr4vy/README.md#listapplepaycertificates)
- [listAuditLogs](docs/sdks/gr4vy/README.md#listauditlogs)
- [listBuyerBillingDetails](docs/sdks/gr4vy/README.md#listbuyerbillingdetails)
- [listBuyerGiftCards](docs/sdks/gr4vy/README.md#listbuyergiftcards)
- [listBuyerPaymentMethods](docs/sdks/gr4vy/README.md#listbuyerpaymentmethods)
- [listBuyerShippingDetails](docs/sdks/gr4vy/README.md#listbuyershippingdetails)
- [listBuyers](docs/sdks/gr4vy/README.md#listbuyers)
- [listCardFlowActionRule3dsOutcomes](docs/sdks/gr4vy/README.md#listcardflowactionrule3dsoutcomes)
- [listCardFlowActionRuleRoutingOutcomes](docs/sdks/gr4vy/README.md#listcardflowactionruleroutingoutcomes)
- [listCardSchemeDefinitions](docs/sdks/gr4vy/README.md#listcardschemedefinitions)
- [listCheckoutFlowActionRuleOptionOutcomes](docs/sdks/gr4vy/README.md#listcheckoutflowactionruleoptionoutcomes)
- [listConnectionDefinitions](docs/sdks/gr4vy/README.md#listconnectiondefinitions)
- [listConnections](docs/sdks/gr4vy/README.md#listconnections)
- [listDigitalWallets](docs/sdks/gr4vy/README.md#listdigitalwallets)
- [listGiftCardBalances](docs/sdks/gr4vy/README.md#listgiftcardbalances)
- [listGiftCards](docs/sdks/gr4vy/README.md#listgiftcards)
- [listMerchantAccounts](docs/sdks/gr4vy/README.md#listmerchantaccounts)
- [listNetworkTokens](docs/sdks/gr4vy/README.md#listnetworktokens)
- [listPaymentMethodDefinitions](docs/sdks/gr4vy/README.md#listpaymentmethoddefinitions)
- [listPaymentMethods](docs/sdks/gr4vy/README.md#listpaymentmethods)
- [listPaymentOptions](docs/sdks/gr4vy/README.md#listpaymentoptions)
- [listPaymentServiceDefinitions](docs/sdks/gr4vy/README.md#listpaymentservicedefinitions)
- [listPaymentServiceTokens](docs/sdks/gr4vy/README.md#listpaymentservicetokens)
- [listPaymentServices](docs/sdks/gr4vy/README.md#listpaymentservices)
- [listRedirectFlowActionRuleRoutingOutcomes](docs/sdks/gr4vy/README.md#listredirectflowactionruleroutingoutcomes)
- [listReportExecutions](docs/sdks/gr4vy/README.md#listreportexecutions)
- [listReports](docs/sdks/gr4vy/README.md#listreports)
- [listRoleAssignments](docs/sdks/gr4vy/README.md#listroleassignments)
- [listRoles](docs/sdks/gr4vy/README.md#listroles)
- [listTransactionActions](docs/sdks/gr4vy/README.md#listtransactionactions)
- [listTransactionEvents](docs/sdks/gr4vy/README.md#listtransactionevents)
- [listTransactionRefunds](docs/sdks/gr4vy/README.md#listtransactionrefunds)
- [listTransactions](docs/sdks/gr4vy/README.md#listtransactions)
- [refreshAuthSessionsPut](docs/sdks/gr4vy/README.md#refreshauthsessionsput)
- [refundAllTransactionMethods](docs/sdks/gr4vy/README.md#refundalltransactionmethods)
- [refundTransaction](docs/sdks/gr4vy/README.md#refundtransaction)
- [registerDigitalWalletDomain](docs/sdks/gr4vy/README.md#registerdigitalwalletdomain)
- [resumeNetworkToken](docs/sdks/gr4vy/README.md#resumenetworktoken)
- [suspendNetworkToken](docs/sdks/gr4vy/README.md#suspendnetworktoken)
- [updateAntiFraudService](docs/sdks/gr4vy/README.md#updateantifraudservice)
- [updateBuyerBillingDetails](docs/sdks/gr4vy/README.md#updatebuyerbillingdetails)
- [updateBuyerShippingDetails](docs/sdks/gr4vy/README.md#updatebuyershippingdetails)
- [updateBuyer](docs/sdks/gr4vy/README.md#updatebuyer)
- [updateCheckoutSessionFields](docs/sdks/gr4vy/README.md#updatecheckoutsessionfields)
- [updateCheckoutSession](docs/sdks/gr4vy/README.md#updatecheckoutsession)
- [updateDigitalWallet](docs/sdks/gr4vy/README.md#updatedigitalwallet)
- [updateFlowActionRule](docs/sdks/gr4vy/README.md#updateflowactionrule)
- [updateGiftCardService](docs/sdks/gr4vy/README.md#updategiftcardservice)
- [updateMerchantAccount](docs/sdks/gr4vy/README.md#updatemerchantaccount)
- [updatePaymentService](docs/sdks/gr4vy/README.md#updatepaymentservice)
- [updateReport](docs/sdks/gr4vy/README.md#updatereport)
- [verifyAntiFraudServiceCredentials](docs/sdks/gr4vy/README.md#verifyantifraudservicecredentials)
- [verifyGiftCardServiceCredentials](docs/sdks/gr4vy/README.md#verifygiftcardservicecredentials)
- [verifyPaymentServiceCredentials](docs/sdks/gr4vy/README.md#verifypaymentservicecredentials)
- [voidTransaction](docs/sdks/gr4vy/README.md#voidtransaction)


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
<!-- End Debugging [debug] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Gr4vy } from "@gr4vy/sdk";
import { openAsBlob } from "node:fs";

const gr4vy = new Gr4vy({
    oAuth2PasswordBearer: "<YOUR_O_AUTH2_PASSWORD_BEARER_HERE>",
});

async function run() {
    const result = await gr4vy.confirmApplePayCertificate("91063e0e-bdc3-4ea8-a7c8-e8719dea3789", {
        file: await openAsBlob("./sample-file"),
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

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
