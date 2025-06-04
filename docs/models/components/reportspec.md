# ReportSpec

## Example Usage

```typescript
import { ReportSpec } from "@gr4vy/sdk/models/components";

let value: ReportSpec = {
  model: "transaction_retries",
  params: {
    "fields": [
      "id",
      "status",
    ],
    "filters": {
      "status": [
        "succeeded",
      ],
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `model`                                                                    | [components.ReportSpecModel](../../models/components/reportspecmodel.md)   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `params`                                                                   | Record<string, *any*>                                                      | :heavy_check_mark:                                                         | The parameters for the report model.                                       | {<br/>"fields": [<br/>"id",<br/>"status"<br/>],<br/>"filters": {<br/>"status": [<br/>"succeeded"<br/>]<br/>}<br/>} |