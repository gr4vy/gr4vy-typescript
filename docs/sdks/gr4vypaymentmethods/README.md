# Gr4vyPaymentMethods
(*buyers.paymentMethods*)

## Overview

### Available Operations

* [list](#list) - List payment methods for a buyer

## list

List all the stored payment methods for a specific buyer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_buyer_payment_methods" method="get" path="/buyers/payment-methods" -->
```typescript
import { Gr4vy } from "@gr4vy/sdk";

const gr4vy = new Gr4vy({
    server: "sandbox",
    id: "example",
    bearerAuth: withToken({
      privateKey: fs.readFileSync("private_key.pem", "utf8"),
    }),
});;

async function run() {
  const result = await gr4vy.buyers.paymentMethods.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { withToken } from "@gr4vy/sdk/lib/auth.js";
import { buyersPaymentMethodsList } from "@gr4vy/sdk/funcs/buyersPaymentMethodsList.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  merchantAccountId: "<id>",
  server: "sandbox",
  id: "example",
  bearerAuth: withToken({
    privateKey: fs.readFileSync("private_key.pem", "utf8"),
  }),
});

async function run() {
  const res = await buyersPaymentMethodsList(gr4vy);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("buyersPaymentMethodsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListBuyerPaymentMethodsRequest](../../models/operations/listbuyerpaymentmethodsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaymentMethodSummaries](../../models/components/paymentmethodsummaries.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.Error400            | 400                        | application/json           |
| errors.Error401            | 401                        | application/json           |
| errors.Error403            | 403                        | application/json           |
| errors.Error404            | 404                        | application/json           |
| errors.Error405            | 405                        | application/json           |
| errors.Error409            | 409                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.Error425            | 425                        | application/json           |
| errors.Error429            | 429                        | application/json           |
| errors.Error500            | 500                        | application/json           |
| errors.Error502            | 502                        | application/json           |
| errors.Error504            | 504                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |