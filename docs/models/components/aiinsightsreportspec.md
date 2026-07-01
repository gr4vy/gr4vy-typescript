# AIInsightsReportSpec

## Example Usage

```typescript
import { AIInsightsReportSpec } from "@gr4vy/sdk/models/components";

let value: AIInsightsReportSpec = {
  model: "ai_insights",
  params: {
    "filters": {
      "prompt_key": "payment_performance",
    },
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `model`                                                | *"ai_insights"*                                        | :heavy_check_mark:                                     | The report model type.                                 | ai_insights                                            |
| `params`                                               | Record<string, *any*>                                  | :heavy_check_mark:                                     | The parameters for the AI insights report model.       | {<br/>"filters": {<br/>"prompt_key": "payment_performance"<br/>}<br/>} |