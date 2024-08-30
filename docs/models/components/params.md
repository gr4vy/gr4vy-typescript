# Params

Parameters used to configure the report. Acceptable values for
this property depend on the value specified for `model`.

## Example Usage

```typescript
import { Params } from "@gr4vy/sdk/models/components";

let value: Params = {
    fields: ["id", "external_identifier"],
    filters: {
        status: ["authorization_failed"],
        currency: ["GBP"],
        method: ["card"],
        scheme: ["visa"],
        threeDSecureEci: ["05"],
        threeDSecureAuthResp: ["N"],
    },
    sort: [{}],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `fields`                                                                     | [components.ReportSpecFields](../../models/components/reportspecfields.md)[] | :heavy_minus_sign:                                                           | A list of fields for the report.                                             | [<br/>"id",<br/>"external_identifier"<br/>]                                  |
| `filters`                                                                    | [components.Filters](../../models/components/filters.md)                     | :heavy_minus_sign:                                                           | The filters for the report.                                                  | {<br/>"status": [<br/>"authorization_failed"<br/>]<br/>}                     |
| `sort`                                                                       | [components.Sort](../../models/components/sort.md)[]                         | :heavy_minus_sign:                                                           | A list of fields to sort the report.                                         | [<br/>{<br/>"field": "captured_at",<br/>"order": "desc"<br/>}<br/>]          |