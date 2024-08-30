# FlowHasGiftCardsCondition

`has_gift_cards` flag conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowHasGiftCardsCondition } from "@gr4vy/sdk/models/components";

let value: FlowHasGiftCardsCondition = {
    name: "has_gift_cards",
    operator: "equal_to",
    value: true,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | [components.FlowHasGiftCardsConditionName](../../models/components/flowhasgiftcardsconditionname.md)         | :heavy_check_mark:                                                                                           | The type of match made for this rule.                                                                        | has_gift_cards                                                                                               |
| `operator`                                                                                                   | [components.FlowHasGiftCardsConditionOperator](../../models/components/flowhasgiftcardsconditionoperator.md) | :heavy_check_mark:                                                                                           | The comparison to make on the `has_gift_cards` flag `value`.                                                 | equal_to                                                                                                     |
| `value`                                                                                                      | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | `has_gift_cards` flag value to compare the transaction to.                                                   | true                                                                                                         |