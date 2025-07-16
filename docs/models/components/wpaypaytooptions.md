# WpayPaytoOptions

## Example Usage

```typescript
import { WpayPaytoOptions } from "@gr4vy/sdk/models/components";

let value: WpayPaytoOptions = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `instrument`                                                                               | [components.WpayPaytoResourceOptions](../../models/components/wpaypaytoresourceoptions.md) | :heavy_minus_sign:                                                                         | Options to pass to the `instrument` resource in the Wpay PayTo API.                        |
| `payment`                                                                                  | [components.WpayPaytoResourceOptions](../../models/components/wpaypaytoresourceoptions.md) | :heavy_minus_sign:                                                                         | Options to pass to the `payment` resource in the Wpay PayTo API.                           |
| `refund`                                                                                   | [components.WpayPaytoResourceOptions](../../models/components/wpaypaytoresourceoptions.md) | :heavy_minus_sign:                                                                         | Options to pass to the `refund` resource in the Wpay PayTo API.                            |