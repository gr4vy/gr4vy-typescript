# GiftCardStoreRequest

The gift card details to store.

## Example Usage

```typescript
import { GiftCardStoreRequest } from "@gr4vy/sdk/models/components";

let value: GiftCardStoreRequest = {
    number: "4123455541234561234",
    pin: "1234",
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    buyerExternalIdentifier: "user-789123",
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `number`                                                                                                                                      | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The 16-19 digit number for this gift card.                                                                                                    | 4123455541234561234                                                                                                                           |
| `pin`                                                                                                                                         | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The PIN for this gift card.                                                                                                                   | 1234                                                                                                                                          |
| `buyerId`                                                                                                                                     | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of the buyer to associate this gift card to. If this field is<br/>provided then the `buyer_external_identifier` field needs to be unset. | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                                                          |
| `buyerExternalIdentifier`                                                                                                                     | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The `external_identifier` of the buyer to associate this gift card<br/>to. If this field is provided then the `buyer_id` field<br/>needs to be unset. | user-789123                                                                                                                                   |