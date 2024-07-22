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

### [accountUpdater](docs/sdks/accountupdater/README.md)

* [newAccountUpdaterJob](docs/sdks/accountupdater/README.md#newaccountupdaterjob) - Create Account Updater job

### [apiLogs](docs/sdks/apilogs/README.md)

* [listApiLogs](docs/sdks/apilogs/README.md#listapilogs) - List API error logs

### [auditLogs](docs/sdks/auditlogs/README.md)

* [listAuditLogs](docs/sdks/auditlogs/README.md#listauditlogs) - List audit logs

### [buyers](docs/sdks/buyers/README.md)

* [listBuyers](docs/sdks/buyers/README.md#listbuyers) - List buyers
* [newBuyer](docs/sdks/buyers/README.md#newbuyer) - New buyer
* [getBuyer](docs/sdks/buyers/README.md#getbuyer) - Get buyer
* [updateBuyer](docs/sdks/buyers/README.md#updatebuyer) - Update buyer
* [deleteBuyer](docs/sdks/buyers/README.md#deletebuyer) - Delete buyer
* [listBuyerShippingDetails](docs/sdks/buyers/README.md#listbuyershippingdetails) - List buyer shipping details
* [newBuyerShippingDetail](docs/sdks/buyers/README.md#newbuyershippingdetail) - New buyer shipping detail
* [updateBuyerShippingDetail](docs/sdks/buyers/README.md#updatebuyershippingdetail) - Update buyer shipping details
* [deleteBuyerShippingDetail](docs/sdks/buyers/README.md#deletebuyershippingdetail) - Delete buyer shipping detail
* [getBuyerBillingDetails](docs/sdks/buyers/README.md#getbuyerbillingdetails) - Get buyer billing details
* [updateBuyerBillingDetails](docs/sdks/buyers/README.md#updatebuyerbillingdetails) - Update buyer billing details

### [giftCards](docs/sdks/giftcards/README.md)

* [listBuyerGiftCards](docs/sdks/giftcards/README.md#listbuyergiftcards) - List gift cards for buyer
* [listGiftCards](docs/sdks/giftcards/README.md#listgiftcards) - List gift cards
* [storeGiftCard](docs/sdks/giftcards/README.md#storegiftcard) - Store gift card
* [getGiftCard](docs/sdks/giftcards/README.md#getgiftcard) - Get gift card
* [deleteGiftCard](docs/sdks/giftcards/README.md#deletegiftcard) - Delete gift card
* [checkGiftCardBalances](docs/sdks/giftcards/README.md#checkgiftcardbalances) - Verify and check gift card balances

### [paymentMethods](docs/sdks/paymentmethods/README.md)

* [listBuyerPaymentMethods](docs/sdks/paymentmethods/README.md#listbuyerpaymentmethods) - List payment methods for buyer
* [listPaymentMethods](docs/sdks/paymentmethods/README.md#listpaymentmethods) - List payment methods
* [newPaymentMethod](docs/sdks/paymentmethods/README.md#newpaymentmethod) - New payment method
* [getPaymentMethod](docs/sdks/paymentmethods/README.md#getpaymentmethod) - Get payment method
* [deletePaymentMethod](docs/sdks/paymentmethods/README.md#deletepaymentmethod) - Delete payment method

### [cardSchemeDefinitions](docs/sdks/cardschemedefinitions/README.md)

* [listCardSchemeDefinitions](docs/sdks/cardschemedefinitions/README.md#listcardschemedefinitions) - List card scheme definitions

### [connections](docs/sdks/connections/README.md)

* [listConnections](docs/sdks/connections/README.md#listconnections) - List connections

### [connectionDefinitions](docs/sdks/connectiondefinitions/README.md)

* [listConnectionDefinitions](docs/sdks/connectiondefinitions/README.md#listconnectiondefinitions) - List connection definitions

### [checkoutSessions](docs/sdks/checkoutsessions/README.md)

* [newCheckoutSession](docs/sdks/checkoutsessions/README.md#newcheckoutsession) - New checkout session
* [getCheckoutSession](docs/sdks/checkoutsessions/README.md#getcheckoutsession) - Get checkout session
* [deleteCheckoutSession](docs/sdks/checkoutsessions/README.md#deletecheckoutsession) - Delete checkout session
* [updateCheckoutSession](docs/sdks/checkoutsessions/README.md#updatecheckoutsession) - Update checkout session
* [updateCheckoutSessionFields](docs/sdks/checkoutsessions/README.md#updatecheckoutsessionfields) - Update fields for checkout session

### [paymentMethodDefinitions](docs/sdks/paymentmethoddefinitions/README.md)

* [listPaymentMethodDefinitions](docs/sdks/paymentmethoddefinitions/README.md#listpaymentmethoddefinitions) - List payment method definitions

### [paymentOptions](docs/sdks/paymentoptions/README.md)

* [listPaymentOptions](docs/sdks/paymentoptions/README.md#listpaymentoptions) - List payment options
* [postListPaymentOptions](docs/sdks/paymentoptions/README.md#postlistpaymentoptions) - List payment options with POST

### [paymentServices](docs/sdks/paymentservices/README.md)

* [listPaymentServices](docs/sdks/paymentservices/README.md#listpaymentservices) - List payment services
* [newPaymentService](docs/sdks/paymentservices/README.md#newpaymentservice) - New payment service
* [getPaymentService](docs/sdks/paymentservices/README.md#getpaymentservice) - Get payment service
* [updatePaymentService](docs/sdks/paymentservices/README.md#updatepaymentservice) - Update payment service
* [deletePaymentService](docs/sdks/paymentservices/README.md#deletepaymentservice) - Delete payment service
* [createPaymentServiceSession](docs/sdks/paymentservices/README.md#createpaymentservicesession) - Create a session for a payment service by ID
* [verifyPaymentService](docs/sdks/paymentservices/README.md#verifypaymentservice) - Verify payment service credentials

### [paymentServiceDefinitions](docs/sdks/paymentservicedefinitions/README.md)

* [listPaymentServiceDefinitions](docs/sdks/paymentservicedefinitions/README.md#listpaymentservicedefinitions) - List payment service definitions
* [getPaymentServiceDefinition](docs/sdks/paymentservicedefinitions/README.md#getpaymentservicedefinition) - Get payment service definition
* [createPaymentServiceDefinitionSession](docs/sdks/paymentservicedefinitions/README.md#createpaymentservicedefinitionsession) - Create a session for a payment service

### [digitalWallets](docs/sdks/digitalwallets/README.md)

* [newDigitalWallet](docs/sdks/digitalwallets/README.md#newdigitalwallet) - Register digital wallet
* [listDigitalWallets](docs/sdks/digitalwallets/README.md#listdigitalwallets) - List digital wallets
* [getDigitalWallet](docs/sdks/digitalwallets/README.md#getdigitalwallet) - Get digital wallet
* [updateDigitalWallet](docs/sdks/digitalwallets/README.md#updatedigitalwallet) - Update digital wallet
* [deleteDigitalWallet](docs/sdks/digitalwallets/README.md#deletedigitalwallet) - De-register digital wallet
* [addDigitalWalletDomainName](docs/sdks/digitalwallets/README.md#adddigitalwalletdomainname) - Add digital wallet domain name
* [deleteDigitalWalletDomainName](docs/sdks/digitalwallets/README.md#deletedigitalwalletdomainname) - Remove digital wallet domain name
* [newApplePaySession](docs/sdks/digitalwallets/README.md#newapplepaysession) - New Apple Pay session
* [newClickToPaySession](docs/sdks/digitalwallets/README.md#newclicktopaysession) - New Click to Pay session
* [newGooglePaySession](docs/sdks/digitalwallets/README.md#newgooglepaysession) - New Google Pay session

### [transactions](docs/sdks/transactions/README.md)

* [listTransactions](docs/sdks/transactions/README.md#listtransactions) - List transactions
* [newTransaction](docs/sdks/transactions/README.md#newtransaction) - New transaction
* [getTransaction](docs/sdks/transactions/README.md#gettransaction) - Get transaction
* [getTransactionActions](docs/sdks/transactions/README.md#gettransactionactions) - List actions for transaction
* [captureTransaction](docs/sdks/transactions/README.md#capturetransaction) - Capture transaction
* [getTransactionEvents](docs/sdks/transactions/README.md#gettransactionevents) - List events for transaction
* [listTransactionRefunds](docs/sdks/transactions/README.md#listtransactionrefunds) - List refunds
* [newRefund](docs/sdks/transactions/README.md#newrefund) - Refund transaction
* [refundAll](docs/sdks/transactions/README.md#refundall) - Refund all instruments in a transaction
* [getRefund](docs/sdks/transactions/README.md#getrefund) - Get refund
* [getSingleRefund](docs/sdks/transactions/README.md#getsinglerefund) - Get refund
* [getTransactionSummary](docs/sdks/transactions/README.md#gettransactionsummary) - Get transaction summary
* [voidTransaction](docs/sdks/transactions/README.md#voidtransaction) - Void transaction

### [webhooks](docs/sdks/webhooks/README.md)

* [~~inboundWebhookDeprecated~~](docs/sdks/webhooks/README.md#inboundwebhookdeprecated) - Inbound webhook :warning: **Deprecated**
* [inboundWebhook](docs/sdks/webhooks/README.md#inboundwebhook) - Inbound webhook
* [inboundWebhooks](docs/sdks/webhooks/README.md#inboundwebhooks) - Inbound webhook

### [flow](docs/sdks/flow/README.md)

* [listFlowRules](docs/sdks/flow/README.md#listflowrules) - List flow rules
* [newFlowRule](docs/sdks/flow/README.md#newflowrule) - Create flow rule
* [getFlowRule](docs/sdks/flow/README.md#getflowrule) - Get rule
* [updateFlowRule](docs/sdks/flow/README.md#updateflowrule) - Update flow rule
* [deleteFlowRule](docs/sdks/flow/README.md#deleteflowrule) - Delete flow rule
* [listFlowOutcomes](docs/sdks/flow/README.md#listflowoutcomes) - List flow outcomes

### [giftCardServices](docs/sdks/giftcardservices/README.md)

* [newGiftCardService](docs/sdks/giftcardservices/README.md#newgiftcardservice) - New gift card service
* [getGiftCardService](docs/sdks/giftcardservices/README.md#getgiftcardservice) - Get gift card service
* [updateGiftCardService](docs/sdks/giftcardservices/README.md#updategiftcardservice) - Update gift card service
* [deleteGiftCardService](docs/sdks/giftcardservices/README.md#deletegiftcardservice) - Delete gift card service
* [verifyGiftCardService](docs/sdks/giftcardservices/README.md#verifygiftcardservice) - Verify gift card service credentials

### [giftCardServiceDefinitions](docs/sdks/giftcardservicedefinitions/README.md)

* [getGiftCardServiceDefinition](docs/sdks/giftcardservicedefinitions/README.md#getgiftcardservicedefinition) - Get gift card service definition

### [antiFraudServices](docs/sdks/antifraudservices/README.md)

* [newAntiFraudService](docs/sdks/antifraudservices/README.md#newantifraudservice) - New anti-fraud service
* [getAntiFraudService](docs/sdks/antifraudservices/README.md#getantifraudservice) - Get anti-fraud service
* [updateAntiFraudService](docs/sdks/antifraudservices/README.md#updateantifraudservice) - Update anti-fraud service
* [deleteAntiFraudService](docs/sdks/antifraudservices/README.md#deleteantifraudservice) - Delete anti-fraud service

### [antiFraudServiceDefinitions](docs/sdks/antifraudservicedefinitions/README.md)

* [getAntiFraudServiceDefinition](docs/sdks/antifraudservicedefinitions/README.md#getantifraudservicedefinition) - Get anti fraud service definition

### [reports](docs/sdks/reports/README.md)

* [listAllReportExecutions](docs/sdks/reports/README.md#listallreportexecutions) - List all report executions
* [getReportExecution](docs/sdks/reports/README.md#getreportexecution) - Get report execution
* [newReport](docs/sdks/reports/README.md#newreport) - New report
* [listReports](docs/sdks/reports/README.md#listreports) - List reports
* [getReport](docs/sdks/reports/README.md#getreport) - Get report
* [updateReport](docs/sdks/reports/README.md#updatereport) - Update report
* [listReportExecutions](docs/sdks/reports/README.md#listreportexecutions) - List executions for report
* [generateDownloadUrl](docs/sdks/reports/README.md#generatedownloadurl) - Generate report download URL

### [roles](docs/sdks/roles/README.md)

* [listRoles](docs/sdks/roles/README.md#listroles) - List roles
* [listRoleAssignments](docs/sdks/roles/README.md#listroleassignments) - List role assignments
* [newRoleAssignment](docs/sdks/roles/README.md#newroleassignment) - New role assignment
* [deleteRoleAssignment](docs/sdks/roles/README.md#deleteroleassignment) - Delete role assignment

### [merchantAccounts](docs/sdks/merchantaccounts/README.md)

* [listMerchantAccounts](docs/sdks/merchantaccounts/README.md#listmerchantaccounts) - List merchant accounts
* [newMerchantAccount](docs/sdks/merchantaccounts/README.md#newmerchantaccount) - New merchant account
* [getMerchantAccount](docs/sdks/merchantaccounts/README.md#getmerchantaccount) - Get merchant account
* [updateMerchantAccount](docs/sdks/merchantaccounts/README.md#updatemerchantaccount) - Update merchant account
* [deleteMerchantAccuont](docs/sdks/merchantaccounts/README.md#deletemerchantaccuont) - Delete merchant account

### [tokens](docs/sdks/tokens/README.md)

* [getPaymentServiceTokens](docs/sdks/tokens/README.md#getpaymentservicetokens) - Get payment service tokens
* [provisionPaymentServiceToken](docs/sdks/tokens/README.md#provisionpaymentservicetoken) - Provision payment service token
* [deletePaymentServiceToken](docs/sdks/tokens/README.md#deletepaymentservicetoken) - Delete payment service token
* [approvePaymentServiceTokenGet](docs/sdks/tokens/README.md#approvepaymentservicetokenget) - Approve payment service token
* [approvePaymentServiceTokenPost](docs/sdks/tokens/README.md#approvepaymentservicetokenpost) - Approve payment service token
* [getNetworkTokens](docs/sdks/tokens/README.md#getnetworktokens) - Get network tokens
* [provisionNetworkToken](docs/sdks/tokens/README.md#provisionnetworktoken) - Provision network token
* [deleteNetworkToken](docs/sdks/tokens/README.md#deletenetworktoken) - Delete network token
* [issueCryptogram](docs/sdks/tokens/README.md#issuecryptogram) - Issue cryptogram
* [suspendNetworkToken](docs/sdks/tokens/README.md#suspendnetworktoken) - Suspend network token
* [resumeNetworkToken](docs/sdks/tokens/README.md#resumenetworktoken) - Resume network token

### [vaultForward](docs/sdks/vaultforward/README.md)

* [makeVaultForward](docs/sdks/vaultforward/README.md#makevaultforward) - Forward PCI data

### [healthDashboard](docs/sdks/healthdashboard/README.md)

* [getHealthDashboardStatus](docs/sdks/healthdashboard/README.md#gethealthdashboardstatus) - Get Health Dashboard status
* [getHealthDashboardTotal](docs/sdks/healthdashboard/README.md#gethealthdashboardtotal) - Get Health Dashboard total
* [getHealthDashboardTotalVolume](docs/sdks/healthdashboard/README.md#gethealthdashboardtotalvolume) - Get Health Dashboard total volume
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Gr4vy } from "@gr4vy/sdk";
import { SDKValidationError } from "@gr4vy/sdk/models/errors";

const gr4vy = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    let result;
    try {
        result = await gr4vy.accountUpdater.newAccountUpdaterJob({
            paymentMethodIds: ["497f6eca-6276-4993-bfeb-53cbbbba6f08"],
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
            case err instanceof errors.Error400BadRequest: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.Error401Unauthorized: {
                console.error(err); // handle exception
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
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await gr4vy.accountUpdater.newAccountUpdaterJob({
        paymentMethodIds: ["497f6eca-6276-4993-bfeb-53cbbbba6f08"],
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
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await gr4vy.accountUpdater.newAccountUpdaterJob({
        paymentMethodIds: ["497f6eca-6276-4993-bfeb-53cbbbba6f08"],
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

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await gr4vy.accountUpdater.newAccountUpdaterJob({
        paymentMethodIds: ["497f6eca-6276-4993-bfeb-53cbbbba6f08"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/gr4vy/gr4vy-js
```

### PNPM

```bash
pnpm add https://github.com/gr4vy/gr4vy-js
```

### Bun

```bash
bun add https://github.com/gr4vy/gr4vy-js
```

### Yarn

```bash
yarn add https://github.com/gr4vy/gr4vy-js zod

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
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await gr4vy.accountUpdater.newAccountUpdaterJob({
        paymentMethodIds: ["497f6eca-6276-4993-bfeb-53cbbbba6f08"],
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
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await gr4vy.transactions.listTransactions({
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
        currency: ["USD", "GBP"],
        externalIdentifier: "user-12345",
        giftCardId: "be828248-56de-481e-a580-44b6e1d4df81",
        giftCardLast4: "7890",
        hasGiftCardRedemptions: true,
        hasRefunds: true,
        id: "be828248-56de-481e-a580-44b6e1d4df81",
        metadata: ['{"key": "value"}', '{"key_one": "value", "key_two": "value"}'],
        method: ["card"],
        paymentMethodId: "46973e9d-88a7-44a6-abfe-be4ff0134ff4",
        paymentMethodLabel: "1234",
        paymentServiceId: ["46973e9d-88a7-44a6-abfe-be4ff0134ff4"],
        paymentServiceTransactionId: "transaction_123",
        pendingReview: true,
        reconciliationId: "7EgeeeTX0DS45RBDNt4AEY",
        status: ["capture_succeeded", "processing"],
        updatedAtGte: new Date("2022-01-01T12:00:00+08:00"),
        updatedAtLte: new Date("2022-01-01T12:00:00+08:00"),
    });

    for await (const page of result) {
        // handle page
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
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await gr4vy.accountUpdater.newAccountUpdaterJob(
        {
            paymentMethodIds: ["497f6eca-6276-4993-bfeb-53cbbbba6f08"],
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
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await gr4vy.accountUpdater.newAccountUpdaterJob({
        paymentMethodIds: ["497f6eca-6276-4993-bfeb-53cbbbba6f08"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

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
