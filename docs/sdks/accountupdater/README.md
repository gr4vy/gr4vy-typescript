# AccountUpdater
(*accountUpdater*)

## Overview

An Account Updater is a service provided by credit card issuers
(such as banks and financial institutions) to merchants who accept
recurring payments from customers. Its primary purpose is to help
merchants maintain accurate and up-to-date payment information for
their customers' credit or debit card accounts.

In Gr4vy, the Account Updater service is provided in an on-demand
and asynchronous fashion:

1. A merchant requests an update for a set of stored cards.
2. A request is submitted to a third-party service.
3. When results are ready, new card details are stored and left in standby.
4. Card details are updated when it gets determined that the original card
   is no longer valid (e.g. has expired).

### Available Operations

* [newAccountUpdaterJob](#newaccountupdaterjob) - Create Account Updater job

## newAccountUpdaterJob

Creates an Account Updater job.

A request is submitted to a third-party service, containing inquiries for a given
set of payment methods. The job is not processed right away, but once created, it
will store new card details automatically, if there are, when results are ready.

A payment method is considered for the job if the following conditions are met:
* It exists.
* It's in a valid state: `status` is either `succeeded` or `processing`.
* It corresponds to a card: `method` is `card`.
* Its scheme is supported: `scheme` is `amex`, `discover`, `mastercard` or `visa`.
* It doesn't have an in-progress inquiry already.

The endpoint works in a best-efforts basis and it doesn't return any error when a payment
method doesn't qualify for an inquiry. To determine what payment methods were considered
for the job, an `inquiries` field, returned in the response body, contains the submitted
inquiries. If none of the payment methods qualified for an inquiry, the job is not created
and a `204 No Content` status code is returned.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

const sdk = new SDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.accountUpdater.newAccountUpdaterJob({
    paymentMethodIds: [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AccountUpdaterJobCreate](../../models/components/accountupdaterjobcreate.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[components.AccountUpdaterJob](../../models/components/accountupdaterjob.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error400BadRequest   | 400                         | application/json            |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
