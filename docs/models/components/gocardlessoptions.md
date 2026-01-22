# GoCardlessOptions

## Example Usage

```typescript
import { GoCardlessOptions } from "@gr4vy/sdk/models/components";

let value: GoCardlessOptions = {};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                | Example                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `purposeCode`                                                                                                                                              | [components.PurposeCode](../../models/components/purposecode.md)                                                                                           | :heavy_minus_sign:                                                                                                                                         | Specifies the high-level purpose of a mandate and/or payment using a set of pre-defined categories. Required for the PayTo scheme, optional for all others | mortgage                                                                                                                                                   |