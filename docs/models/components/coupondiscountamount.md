# CouponDiscountAmount

A monetary amount in USD or local currency.

## Example Usage

```typescript
import { CouponDiscountAmount } from "@gr4vy/sdk/models/components";

let value: CouponDiscountAmount = {
    amountUsd: "99.95",
    amountLocalCurrency: "105.55",
    currency: "CAD",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `amountUsd`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | Transaction amount in USD.                                                        | 99.95                                                                             |
| `amountLocalCurrency`                                                             | *string*                                                                          | :heavy_minus_sign:                                                                | Transaction amount in currency chosen by the buyer.                               | 105.55                                                                            |
| `currency`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | Transaction currency chosen by the buyer, 3-letter ISO-4217 format currency code. | CAD                                                                               |