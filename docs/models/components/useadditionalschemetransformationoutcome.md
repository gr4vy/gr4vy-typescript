# UseAdditionalSchemeTransformationOutcome

Transformation to be applied when for card transaction
flow/routing action outcome.

This transformation forces the processing of a
transaction to use the first additional scheme
of the card instead of it's main scheme.

If the card doesn't have any additional schemes,
this outcome would be skipped.

## Example Usage

```typescript
import { UseAdditionalSchemeTransformationOutcome } from "@gr4vy/sdk/models/components";

let value: UseAdditionalSchemeTransformationOutcome = {
    name: "use_additional_scheme",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                             | [components.UseAdditionalSchemeTransformationOutcomeName](../../models/components/useadditionalschemetransformationoutcomename.md) | :heavy_minus_sign:                                                                                                                 | The name of the transformation. This will always be `use_additional_scheme`.                                                       | use_additional_scheme                                                                                                              |