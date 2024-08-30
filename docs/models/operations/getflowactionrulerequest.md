# GetFlowActionRuleRequest

## Example Usage

```typescript
import { GetFlowActionRuleRequest } from "@gr4vy/sdk/models/operations";

let value: GetFlowActionRuleRequest = {
    flow: "checkout",
    action: "select-payment-options",
    ruleId: "a6a4f77a-87ee-43e4-be75-2c65b34418e3",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `flow`                                                         | [components.Flow](../../models/components/flow.md)             | :heavy_check_mark:                                             | An enumeration.                                                |
| `action`                                                       | [components.FlowAction](../../models/components/flowaction.md) | :heavy_check_mark:                                             | An enumeration.                                                |
| `ruleId`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |