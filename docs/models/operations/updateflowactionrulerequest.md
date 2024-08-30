# UpdateFlowActionRuleRequest

## Example Usage

```typescript
import { UpdateFlowActionRuleRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateFlowActionRuleRequest = {
    flow: "non-card-transaction",
    action: "decline-early",
    ruleId: "91c8d975-e0e8-4419-98f8-4f144f3e07ed",
    requestBody: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `flow`                                                                                     | [components.Flow](../../models/components/flow.md)                                         | :heavy_check_mark:                                                                         | An enumeration.                                                                            |
| `action`                                                                                   | [components.FlowAction](../../models/components/flowaction.md)                             | :heavy_check_mark:                                                                         | An enumeration.                                                                            |
| `ruleId`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `requestBody`                                                                              | [operations.UpdateFlowActionRuleBody](../../models/operations/updateflowactionrulebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |