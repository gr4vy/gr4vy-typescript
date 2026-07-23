# GiftCards.Activations

## Overview

### Available Operations

* [create](#create) - Activate a gift card

## create

Activate a physical gift card through the primary gift card service.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="activate_gift_card" method="post" path="/gift-cards/activations" -->
```typescript
import { Gr4vy, withToken } from "@gr4vy/sdk";
import fs from "fs";

const gr4vy = new Gr4vy({
    id: "example",
    server: "sandbox",
    merchantAccountId: "default",
    bearerAuth: withToken({
      privateKey: fs.readFileSync("private_key.pem", "utf8"),
    }),
});

async function run() {
  const result = await gr4vy.giftCards.activations.create({
    number: "4123455541234561234",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Gr4vyCore } from "@gr4vy/sdk/core.js";
import { giftCardsActivationsCreate } from "@gr4vy/sdk/funcs/giftCardsActivationsCreate.js";

// Use `Gr4vyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gr4vy = new Gr4vyCore({
  merchantAccountId: "<id>",
  bearerAuth: process.env["GR4VY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await giftCardsActivationsCreate(gr4vy, {
    number: "4123455541234561234",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("giftCardsActivationsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `giftCardActivationCreate`                                                                                                                                                                                                                      | [components.GiftCardActivationCreate](../../models/components/giftcardactivationcreate.md)                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                             |
| `idempotencyKey`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                              | A unique key that identifies this request. If supported by the gift card service, the value will be forwarded to make the activation idempotent. We recommend using V4 UUIDs, or another random string with enough entropy to avoid collisions. |
| `merchantAccountId`                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                              | The ID of the merchant account to use for this request.                                                                                                                                                                                         |
| `options`                                                                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                  |
| `options.retries`                                                                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                |

### Response

**Promise\<[components.GiftCard](../../models/components/giftcard.md)\>**

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