# FlowCardCountryCondition

Card country condition with a name, operator, and value.

## Example Usage

```typescript
import { FlowCardCountryCondition } from "@gr4vy/sdk/models/components";

let value: FlowCardCountryCondition = {
    name: "card_country",
    operator: "is_one_of",
    value: ["ES", "GB"],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | [components.FlowCardCountryConditionName](../../models/components/flowcardcountryconditionname.md)         | :heavy_check_mark:                                                                                         | The type of match made for this rule.                                                                      | card_country                                                                                               |
| `operator`                                                                                                 | [components.FlowCardCountryConditionOperator](../../models/components/flowcardcountryconditionoperator.md) | :heavy_check_mark:                                                                                         | The comparison to make on the `value`.                                                                     | is_one_of                                                                                                  |
| `value`                                                                                                    | *string*[]                                                                                                 | :heavy_check_mark:                                                                                         | Countries to compare the card originating country to<br/>in `ISO-3166` 2 character format.                 | [<br/>"ES",<br/>"GB"<br/>]                                                                                 |