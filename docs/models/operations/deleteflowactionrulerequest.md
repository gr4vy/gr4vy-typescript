# DeleteFlowActionRuleRequest

## Example Usage

```typescript
import { DeleteFlowActionRuleRequest } from "@gr4vy/sdk/models/operations";

let value: DeleteFlowActionRuleRequest = {
    flow: "redirect-transaction",
    action: "select-payment-options",
    ruleId: "2e550557-56f5-4d56-90bd-0af2dfe13db4",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `flow`                                                         | [components.Flow](../../models/components/flow.md)             | :heavy_check_mark:                                             | An enumeration.                                                |
| `action`                                                       | [components.FlowAction](../../models/components/flowaction.md) | :heavy_check_mark:                                             | An enumeration.                                                |
| `ruleId`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |