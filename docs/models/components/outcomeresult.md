# OutcomeResult

## Example Usage

```typescript
import { OutcomeResult } from "@gr4vy/sdk/models/components";

let value: OutcomeResult = {
    paymentServiceId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    instrument: "network_token",
    transformations: [
        {
            name: "force_mit",
        },
    ],
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `paymentServiceId`                                                                                                                                                       | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | ID of the payment service to be used when processing the transaction.                                                                                                    | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                                                                                     |
| `instrument`                                                                                                                                                             | [components.OutcomeInstrument](../../models/components/outcomeinstrument.md)                                                                                             | :heavy_minus_sign:                                                                                                                                                       | The name of the instrument to be used to process the transaction.<br/>For `pan`, if a Payment Service token is available, the API will use that<br/>for stored payment methods.<br/> | network_token                                                                                                                                                            |
| `transformations`                                                                                                                                                        | [components.OutcomeTransformations](../../models/components/outcometransformations.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                                                       | List of transformations to apply when processing the transaction.                                                                                                        |                                                                                                                                                                          |