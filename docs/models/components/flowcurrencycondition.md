# FlowCurrencyCondition

Currency conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowCurrencyCondition } from "@gr4vy/sdk/models/components";

let value: FlowCurrencyCondition = {
    name: "currency",
    operator: "is_one_of",
    value: ["USD", "EUR", "GBP"],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | [components.FlowCurrencyConditionName](../../models/components/flowcurrencyconditionname.md)         | :heavy_check_mark:                                                                                   | The type of match made for this rule.                                                                | currency                                                                                             |
| `operator`                                                                                           | [components.FlowCurrencyConditionOperator](../../models/components/flowcurrencyconditionoperator.md) | :heavy_check_mark:                                                                                   | The comparison to make on the currency code `value`.                                                 | is_one_of                                                                                            |
| `value`                                                                                              | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | Currency ISO codes to compare the transaction to.                                                    | [<br/>"USD",<br/>"EUR",<br/>"GBP"<br/>]                                                              |