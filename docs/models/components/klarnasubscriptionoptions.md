# KlarnaSubscriptionOptions

## Example Usage

```typescript
import { KlarnaSubscriptionOptions } from "@gr4vy/sdk/models/components";

let value: KlarnaSubscriptionOptions = {
  name: "Premium Membership {{{{12394832}}}}",
  interval: "DAY",
  intervalCount: 1,
  reference: "a0366204-2365-45fd-af60-23d0a59fdea9",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The name of the subscription product. The recommended format includes a subscription id and double curly brackets. | Premium Membership {{{{12394832}}}}                                                                                |
| `interval`                                                                                                         | [components.Interval](../../models/components/interval.md)                                                         | :heavy_check_mark:                                                                                                 | The cadence unit for the subscription plan.                                                                        | **Example 1:** DAY<br/>**Example 2:** WEEK<br/>**Example 3:** MONTH<br/>**Example 4:** YEAR                        |
| `intervalCount`                                                                                                    | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | The number corresponding to the interval unit.                                                                     | **Example 1:** 1<br/>**Example 2:** 2<br/>**Example 3:** 3                                                         |
| `reference`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Reference to a SKU in the transaction's cart items to link subscription to.                                        | a0366204-2365-45fd-af60-23d0a59fdea9                                                                               |