# ForceMITTransformationOutcome

Transformation to be applied when for card transaction
flow/routing action outcome.

This transformation forces the processing of a
transaction as an MIT one.

If the request to create a transaction was for MIT,
i.e. `merchant_initiated=true`, this transformation
won't have any effect.

## Example Usage

```typescript
import { ForceMITTransformationOutcome } from "@gr4vy/sdk/models/components";

let value: ForceMITTransformationOutcome = {
    name: "force_mit",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | [components.ForceMITTransformationOutcomeName](../../models/components/forcemittransformationoutcomename.md) | :heavy_minus_sign:                                                                                           | The name of the transformation. This will always be `force_mit`.                                             | force_mit                                                                                                    |