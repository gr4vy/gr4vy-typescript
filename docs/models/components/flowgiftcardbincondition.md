# FlowGiftCardBINCondition

Gift card BIN range conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowGiftCardBINCondition } from "@gr4vy/sdk/models/components";

let value: FlowGiftCardBINCondition = {
    name: "gift_card_bin",
    operator: "is_one_of",
    value: ["414100000-424299999"],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                             | [components.FlowGiftCardBINConditionName](../../models/components/flowgiftcardbinconditionname.md)                                 | :heavy_check_mark:                                                                                                                 | The type of match made for this rule.                                                                                              | gift_card_bin                                                                                                                      |
| `operator`                                                                                                                         | [components.FlowGiftCardBINConditionOperator](../../models/components/flowgiftcardbinconditionoperator.md)                         | :heavy_check_mark:                                                                                                                 | The comparison to make on the `gift_card_bin` `value`.                                                                             | is_one_of                                                                                                                          |
| `value`                                                                                                                            | *string*[]                                                                                                                         | :heavy_check_mark:                                                                                                                 | Gift card BIN range to compare with gift card numbers used in<br/>the transaction to. A gift card BIN is 9 characters long at maximum. | [<br/>"414100000-424299999"<br/>]                                                                                                  |