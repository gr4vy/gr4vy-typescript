# CreateFlowActionRuleRequest

## Example Usage

```typescript
import { CreateFlowActionRuleRequest } from "@gr4vy/sdk/models/operations";

let value: CreateFlowActionRuleRequest = {
    flow: "redirect-transaction",
    action: "decline-early",
    requestBody: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `flow`                                                                                     | [components.Flow](../../models/components/flow.md)                                         | :heavy_check_mark:                                                                         | An enumeration.                                                                            |
| `action`                                                                                   | [components.FlowAction](../../models/components/flowaction.md)                             | :heavy_check_mark:                                                                         | An enumeration.                                                                            |
| `requestBody`                                                                              | [operations.CreateFlowActionRuleBody](../../models/operations/createflowactionrulebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |