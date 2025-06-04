# TransactionsReportSpec

## Example Usage

```typescript
import { TransactionsReportSpec } from "@gr4vy/sdk/models/components";

let value: TransactionsReportSpec = {
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
| `model`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | The report model type.                                                     | transactions                                                               |
| `params`                                                                   | Record<string, *any*>                                                      | :heavy_check_mark:                                                         | The parameters for the transactions report model.                          | {<br/>"fields": [<br/>"id",<br/>"status"<br/>],<br/>"filters": {<br/>"status": [<br/>"succeeded"<br/>]<br/>}<br/>} |