# PaymentServiceOutcome

Defines the outcome of a rule in a flow where the result
is a list of dictionaries that define the payment service,
instrument and transformation to be used to process a
transaction.

## Example Usage

```typescript
import { PaymentServiceOutcome } from "@gr4vy/sdk/models/components";

let value: PaymentServiceOutcome = {
    type: "card-routing",
    result: [
        {
            paymentServiceId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
            instrument: "network_token",
            transformations: [
                {
                    name: "force_mit",
                },
            ],
        },
        {
            paymentServiceId: "d88aca32-07fb-46cd-a43f-86da02b73c21",
            instrument: "pan",
            transformations: [
                {
                    name: "force_mit",
                },
            ],
        },
    ],
    version: 2,
};
```

## Fields

| Field                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                              | [components.FlowRuleServiceOutcomeOutcomeType](../../models/components/flowruleserviceoutcomeoutcometype.md)                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                  | The type of action outcome for the given rule.                                                                                                                                                                                                                      | card-routing                                                                                                                                                                                                                                                        |
| `result`                                                                                                                                                                                                                                                            | [components.OutcomeResult](../../models/components/outcomeresult.md)[]                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                  | Results for a given flow action.                                                                                                                                                                                                                                    | [<br/>{<br/>"payment_service_id": "fe26475d-ec3e-4884-9553-f7356683f7f9",<br/>"instrument\"": "network_token",<br/>"transformations": []<br/>},<br/>{<br/>"payment_service_id": "d88aca32-07fb-46cd-a43f-86da02b73c21",<br/>"instrument": "pan",<br/>"transformations": [<br/>{<br/>"name": "force_mit"<br/>}<br/>]<br/>}<br/>] |
| `version`                                                                                                                                                                                                                                                           | [components.OutcomeVersion](../../models/components/outcomeversion.md)                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                  | Version of the rule outcome. Current version is `2`.                                                                                                                                                                                                                | 2                                                                                                                                                                                                                                                                   |