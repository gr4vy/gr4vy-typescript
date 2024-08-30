# FlowMerchantInitiatedCondition

`merchant_initiated` flag conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowMerchantInitiatedCondition } from "@gr4vy/sdk/models/components";

let value: FlowMerchantInitiatedCondition = {
    name: "merchant_initiated",
    operator: "equal_to",
    value: true,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                 | [components.FlowMerchantInitiatedConditionName](../../models/components/flowmerchantinitiatedconditionname.md)         | :heavy_check_mark:                                                                                                     | The type of match made for this rule.                                                                                  | merchant_initiated                                                                                                     |
| `operator`                                                                                                             | [components.FlowMerchantInitiatedConditionOperator](../../models/components/flowmerchantinitiatedconditionoperator.md) | :heavy_check_mark:                                                                                                     | The comparison to make on the `merchant_initiated` flag `value`.                                                       | equal_to                                                                                                               |
| `value`                                                                                                                | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | `merchant_initiated` flag value to compare the transaction to.                                                         | true                                                                                                                   |