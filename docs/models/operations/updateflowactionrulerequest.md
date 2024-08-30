# UpdateFlowActionRuleRequest

## Example Usage

```typescript
import { UpdateFlowActionRuleRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateFlowActionRuleRequest = {
    flow: "card-transaction",
    action: "decline-early",
    ruleId: "e6e0ac18-4c2b-49c2-87c8-8373a40e1942",
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