# Params

Parameters used to configure the report. Acceptable values for
this property depend on the value specified for `model`.


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `fields`                                                                     | [components.ReportSpecFields](../../models/components/reportspecfields.md)[] | :heavy_minus_sign:                                                           | A list of fields for the report.                                             | [<br/>"id",<br/>"external_identifier"<br/>]                                  |
| `filters`                                                                    | [components.Filters](../../models/components/filters.md)                     | :heavy_minus_sign:                                                           | The filters for the report.                                                  | {<br/>"status": [<br/>"authorization_failed"<br/>]<br/>}                     |
| `sort`                                                                       | [components.Sort](../../models/components/sort.md)[]                         | :heavy_minus_sign:                                                           | A list of fields to sort the report.                                         | [<br/>{<br/>"field": "captured_at",<br/>"order": "desc"<br/>}<br/>]          |