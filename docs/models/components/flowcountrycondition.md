# FlowCountryCondition

Country conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowCountryCondition } from "@gr4vy/sdk/models/components";

let value: FlowCountryCondition = {
    name: "country",
    operator: "is_one_of",
    value: ["US", "DE"],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `name`                                                                                             | [components.FlowCountryConditionName](../../models/components/flowcountryconditionname.md)         | :heavy_check_mark:                                                                                 | The type of match made for this rule.                                                              | country                                                                                            |
| `operator`                                                                                         | [components.FlowCountryConditionOperator](../../models/components/flowcountryconditionoperator.md) | :heavy_check_mark:                                                                                 | The comparison to make on the country code `value`.                                                | is_one_of                                                                                          |
| `value`                                                                                            | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | Country two-letter ISO codes to compare the transaction to.                                        | [<br/>"US",<br/>"DE"<br/>]                                                                         |