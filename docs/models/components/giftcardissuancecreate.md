# GiftCardIssuanceCreate

The details used to issue a new virtual gift card.

## Example Usage

```typescript
import { GiftCardIssuanceCreate } from "@gr4vy/sdk/models/components";

let value: GiftCardIssuanceCreate = {
  theme: "031111372",
  amount: 5000,
  currency: "EUR",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `theme`                                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | The provider theme code to issue the gift card against.                               | 031111372                                                                             |
| `amount`                                                                              | *number*                                                                              | :heavy_check_mark:                                                                    | The amount to load onto the gift card, in the smallest denomination for the currency. | 5000                                                                                  |
| `currency`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | The ISO-4217 currency code for the `amount`.                                          | **Example 1:** EUR<br/>**Example 2:** GBP<br/>**Example 3:** USD                      |
| `externalIdentifier`                                                                  | *string*                                                                              | :heavy_minus_sign:                                                                    | An optional external identifier for this issuance.                                    | order-12345                                                                           |