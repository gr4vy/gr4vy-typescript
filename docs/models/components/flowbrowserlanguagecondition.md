# FlowBrowserLanguageCondition

Browser language conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowBrowserLanguageCondition } from "@gr4vy/sdk/models/components";

let value: FlowBrowserLanguageCondition = {
    name: "browser_language",
    operator: "is_one_of",
    value: ["en", "de", "fr"],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                             | [components.FlowBrowserLanguageConditionName](../../models/components/flowbrowserlanguageconditionname.md)         | :heavy_check_mark:                                                                                                 | The type of match made for this rule.                                                                              | browser_language                                                                                                   |
| `operator`                                                                                                         | [components.FlowBrowserLanguageConditionOperator](../../models/components/flowbrowserlanguageconditionoperator.md) | :heavy_check_mark:                                                                                                 | The comparison to make on the browser language `value`.                                                            | is_one_of                                                                                                          |
| `value`                                                                                                            | *string*[]                                                                                                         | :heavy_check_mark:                                                                                                 | Browser language two-letter ISO 639-1 codes to compare the transaction to.                                         | [<br/>"en",<br/>"de",<br/>"fr"<br/>]                                                                               |