# ReportCreateParams

Parameters used to configure the report. Acceptable values for
this property depend on the value specified for `model`.

## Example Usage

```typescript
import { ReportCreateParams } from "@gr4vy/sdk/models/components";

let value: ReportCreateParams = {
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `fields`                                                                         | [components.ReportCreateFields](../../models/components/reportcreatefields.md)[] | :heavy_minus_sign:                                                               | A list of fields for the report.                                                 | [<br/>"id",<br/>"external_identifier"<br/>]                                      |
| `filters`                                                                        | [components.ReportCreateFilters](../../models/components/reportcreatefilters.md) | :heavy_minus_sign:                                                               | The filters for the report.                                                      | {<br/>"status": [<br/>"authorization_failed"<br/>]<br/>}                         |
| `sort`                                                                           | [components.ReportCreateSort](../../models/components/reportcreatesort.md)[]     | :heavy_minus_sign:                                                               | A list of fields to sort the report.                                             | [<br/>{<br/>"field": "captured_at",<br/>"order": "desc"<br/>}<br/>]              |