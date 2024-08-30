# GetFlowActionRuleRequest

## Example Usage

```typescript
import { GetFlowActionRuleRequest } from "@gr4vy/sdk/models/operations";

let value: GetFlowActionRuleRequest = {
    flow: "card-transaction",
    action: "skip-3ds",
    ruleId: "fb901c6e-cbb4-4e24-bcf7-89ffafeda53e",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `flow`                                                         | [components.Flow](../../models/components/flow.md)             | :heavy_check_mark:                                             | An enumeration.                                                |
| `action`                                                       | [components.FlowAction](../../models/components/flowaction.md) | :heavy_check_mark:                                             | An enumeration.                                                |
| `ruleId`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |