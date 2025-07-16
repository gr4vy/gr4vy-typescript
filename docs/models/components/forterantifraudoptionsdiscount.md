# ForterAntiFraudOptionsDiscount

## Example Usage

```typescript
import { ForterAntiFraudOptionsDiscount } from "@gr4vy/sdk/models/components";

let value: ForterAntiFraudOptionsDiscount = {
  couponCodeUsed: "<value>",
  discountType: "<value>",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `couponCodeUsed`                                                                                                                               | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The coupon code applied to the order.                                                                                                          |
| `discountType`                                                                                                                                 | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The type of discount applied to the order.                                                                                                     |
| `couponDiscountAmount`                                                                                                                         | [components.ForterAntiFraudOptionsDiscountCouponDiscountAmount](../../models/components/forterantifraudoptionsdiscountcoupondiscountamount.md) | :heavy_minus_sign:                                                                                                                             | Monetary details of the discount amount.                                                                                                       |
| `couponDiscountPercent`                                                                                                                        | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The percentage discount applied via the coupon.                                                                                                |