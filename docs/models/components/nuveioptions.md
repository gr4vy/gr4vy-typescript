# NuveiOptions

## Example Usage

```typescript
import { NuveiOptions } from "@gr4vy/sdk/models/components";

let value: NuveiOptions = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `customData`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | General data about the customer provided by the merchant.                                | user=123,trusted=false                                                                   |
| `airlineData`                                                                            | [components.NuveiAirlineDataOptions](../../models/components/nuveiairlinedataoptions.md) | :heavy_minus_sign:                                                                       | Provides additional airline data for Nuvei payments.                                     |                                                                                          |