# DeleteFlowActionRuleRequest

## Example Usage

```typescript
import { DeleteFlowActionRuleRequest } from "@gr4vy/sdk/models/operations";

let value: DeleteFlowActionRuleRequest = {
    flow: "redirect-transaction",
    action: "skip-3ds",
    ruleId: "4aa5f3ca-bd90-45a9-b2e0-56728227b2d3",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `flow`                                                         | [components.Flow](../../models/components/flow.md)             | :heavy_check_mark:                                             | An enumeration.                                                |
| `action`                                                       | [components.FlowAction](../../models/components/flowaction.md) | :heavy_check_mark:                                             | An enumeration.                                                |
| `ruleId`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |