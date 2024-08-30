# CheckoutSession

A short-lived checkout session.

## Example Usage

```typescript
import { CheckoutSession } from "@gr4vy/sdk/models/components";

let value: CheckoutSession = {
    type: "checkout-session",
    id: "8d3fe99b-1422-42e6-bbb3-932d95ae5f79",
    expiresAt: new Date("2022-01-01T00:00:00+00:00"),
    cartItems: [
        {
            name: "GoPro HERO9 Camcorder",
            quantity: 1,
            unitAmount: 37999,
            discountAmount: 0,
            taxAmount: 0,
            externalIdentifier: "item-789123",
            sku: "sku-789123",
            productUrl: "https://example.com/items/gopro",
            imageUrl: "https://example.com/images/items/gopro.png",
            productType: "physical",
        },
    ],
    metadata: {
        key: "value",
    },
    paymentMethod: {
        type: "payment_method",
        method: "card",
        scheme: "visa",
        label: "4242",
        details: {
            bin: "411111",
            cardType: "credit",
            cardCountry: "US",
        },
        fingerprint: "20eb353620155d2b5fc864cc46a73ea77cb92c725238650839da1813fa987a17",
    },
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         | Example                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                              | [components.CheckoutSessionType](../../models/components/checkoutsessiontype.md)                                                                                    | :heavy_minus_sign:                                                                                                                                                  | `checkout-session`.                                                                                                                                                 | checkout-session                                                                                                                                                    |
| `id`                                                                                                                                                                | *string*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | The ID of the Checkout Session.                                                                                                                                     | 8d3fe99b-1422-42e6-bbb3-932d95ae5f79                                                                                                                                |
| `expiresAt`                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                       | :heavy_minus_sign:                                                                                                                                                  | The date and time when the Checkout Session will expire.<br/>By default this will be set to 1 hour from the date of creation.                                       | 2022-01-01T00:00:00+00:00                                                                                                                                           |
| `cartItems`                                                                                                                                                         | [components.CartItem](../../models/components/cartitem.md)[]                                                                                                        | :heavy_minus_sign:                                                                                                                                                  | An array of cart items that represents the line items of a transaction.                                                                                             |                                                                                                                                                                     |
| `metadata`                                                                                                                                                          | Record<string, *string*>                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | Any additional information about the transaction that you would like to<br/>store as key-value pairs. This data is passed to payment service<br/>providers that support it. | {<br/>"key": "value"<br/>}                                                                                                                                          |
| `paymentMethod`                                                                                                                                                     | [components.CheckoutSessionPaymentMethod](../../models/components/checkoutsessionpaymentmethod.md)                                                                  | :heavy_minus_sign:                                                                                                                                                  | Details about the payment method for card type only.                                                                                                                |                                                                                                                                                                     |