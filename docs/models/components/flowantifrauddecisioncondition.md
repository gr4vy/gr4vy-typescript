# FlowAntiFraudDecisionCondition

Anti-fraud decision condition with a name, operator, and value.

## Example Usage

```typescript
import { FlowAntiFraudDecisionCondition } from "@gr4vy/sdk/models/components";

let value: FlowAntiFraudDecisionCondition = {
    name: "anti_fraud_decision",
    operator: "is_one_of",
    value: ["exception"],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                 | [components.FlowAntiFraudDecisionConditionName](../../models/components/flowantifrauddecisionconditionname.md)         | :heavy_check_mark:                                                                                                     | The type of match made for this rule.                                                                                  | anti_fraud_decision                                                                                                    |
| `operator`                                                                                                             | [components.FlowAntiFraudDecisionConditionOperator](../../models/components/flowantifrauddecisionconditionoperator.md) | :heavy_check_mark:                                                                                                     | The comparison to make on the `value`.                                                                                 | is_one_of                                                                                                              |
| `value`                                                                                                                | [components.FlowAntiFraudDecisionConditionValue](../../models/components/flowantifrauddecisionconditionvalue.md)[]     | :heavy_check_mark:                                                                                                     | A list of anti-fraud decisions to match.                                                                               | [<br/>"exception"<br/>]                                                                                                |