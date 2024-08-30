# TotalDiscount

The `totalDiscount` object that's sent to Forter's validation API.
It represents the discount that was given to the customer.

## Example Usage

```typescript
import { TotalDiscount } from "@gr4vy/sdk/models/components";

let value: TotalDiscount = {
    couponCodeUsed: "FATHERSDAY2015",
    discountType: "COUPON",
    couponDiscountAmount: {
        amountUsd: "99.95",
        amountLocalCurrency: "105.55",
        currency: "CAD",
    },
    couponDiscountPercent: "20%",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `couponCodeUsed`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | The coupon code used.                                                              | FATHERSDAY2015                                                                     |
| `discountType`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | The discount type.                                                                 | COUPON                                                                             |
| `couponDiscountAmount`                                                             | [components.CouponDiscountAmount](../../models/components/coupondiscountamount.md) | :heavy_minus_sign:                                                                 | A monetary amount in USD or local currency.                                        |                                                                                    |
| `couponDiscountPercent`                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | Coupon discount percentage.                                                        | 20%                                                                                |