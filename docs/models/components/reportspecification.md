# ReportSpecification

The specifications of the report.

## Example Usage

```typescript
import { ReportSpecification } from "@gr4vy/sdk/models/components";

let value: ReportSpecification = {
    model: "transactions",
    params: {
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
    },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                                 | [components.ReportCreateModel](../../models/components/reportcreatemodel.md)                                            | :heavy_check_mark:                                                                                                      | The model (dataset) that the data used for the report is retrieved<br/>from.                                            | transactions                                                                                                            |
| `params`                                                                                                                | [components.ReportCreateParams](../../models/components/reportcreateparams.md)                                          | :heavy_check_mark:                                                                                                      | Parameters used to configure the report. Acceptable values for<br/>this property depend on the value specified for `model`. |                                                                                                                         |