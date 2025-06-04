# DetailedSettlementReportSpec

## Example Usage

```typescript
import { DetailedSettlementReportSpec } from "@gr4vy/sdk/models/components";

let value: DetailedSettlementReportSpec = {
  params: {
    "filters": {
      "ingested_at": {
        "end": "day_end",
        "start": "day_start",
      },
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `model`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | The report model type.                                                       | detailed_settlement                                                          |
| `params`                                                                     | Record<string, *any*>                                                        | :heavy_check_mark:                                                           | The parameters for the detailed settlement report model.                     | {<br/>"filters": {<br/>"ingested_at": {<br/>"end": "day_end",<br/>"start": "day_start"<br/>}<br/>}<br/>} |