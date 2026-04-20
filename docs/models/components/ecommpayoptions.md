# EcommpayOptions

## Example Usage

```typescript
import { EcommpayOptions } from "@gr4vy/sdk/models/components";

let value: EcommpayOptions = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `bookingStartDate`                                                                        | *string*                                                                                  | :heavy_minus_sign:                                                                        | The start date of the booking in ISO 8601 format (YYYY-MM-DD). Required for certain MCCs. | 2030-12-01                                                                                |
| `bookingEndDate`                                                                          | *string*                                                                                  | :heavy_minus_sign:                                                                        | The end date of the booking in ISO 8601 format (YYYY-MM-DD). Required for certain MCCs.   | 2030-12-10                                                                                |