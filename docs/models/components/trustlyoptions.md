# TrustlyOptions

## Example Usage

```typescript
import { TrustlyOptions } from "@gr4vy/sdk/models/components";

let value: TrustlyOptions = {
  urlScheme: "APP://SOME_RESOURCE",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `refreshSplitToken`                                                              | *boolean*                                                                        | :heavy_minus_sign:                                                               | Indicates to Gr4vy whether or not the stored Trustly agreement needs refreshing. | true                                                                             |
| `urlScheme`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | URL scheme for an app.                                                           | APP://SOME_RESOURCE                                                              |