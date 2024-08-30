# CheckoutSessionUpdateRequest

A request to update a checkout session.

## Example Usage

```typescript
import { CheckoutSessionUpdateRequest } from "@gr4vy/sdk/models/components";

let value: CheckoutSessionUpdateRequest = {
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
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         | Example                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cartItems`                                                                                                                                                         | [components.CartItem](../../models/components/cartitem.md)[]                                                                                                        | :heavy_minus_sign:                                                                                                                                                  | An array of cart items that represents the line items of a transaction.                                                                                             |                                                                                                                                                                     |
| `metadata`                                                                                                                                                          | Record<string, *string*>                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | Any additional information about the transaction that you would like to<br/>store as key-value pairs. This data is passed to payment service<br/>providers that support it. | {<br/>"key": "value"<br/>}                                                                                                                                          |