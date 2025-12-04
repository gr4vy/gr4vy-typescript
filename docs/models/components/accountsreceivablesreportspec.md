# AccountsReceivablesReportSpec

## Example Usage

```typescript
import { AccountsReceivablesReportSpec } from "@gr4vy/sdk/models/components";

let value: AccountsReceivablesReportSpec = {
  model: "accounts_receivables",
  params: {
    "filters": {
      "timestamp": {
        "end": "2024-05-31T23:59:59Z",
        "start": "2024-05-01T00:00:00Z",
      },
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `model`                                                                                            | *"accounts_receivables"*                                                                           | :heavy_check_mark:                                                                                 | The report model type.                                                                             | accounts_receivables                                                                               |
| `params`                                                                                           | Record<string, *any*>                                                                              | :heavy_check_mark:                                                                                 | The parameters for the accounts receivables report model.                                          | {<br/>"filters": {<br/>"timestamp": {<br/>"end": "2024-05-31T23:59:59Z",<br/>"start": "2024-05-01T00:00:00Z"<br/>}<br/>}<br/>} |