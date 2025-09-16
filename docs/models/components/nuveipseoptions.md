# NuveiPSEOptions

## Example Usage

```typescript
import { NuveiPSEOptions } from "@gr4vy/sdk/models/components";

let value: NuveiPSEOptions = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `userType`                                                        | *string*                                                          | :heavy_minus_sign:                                                | Customer type ("N" for persona natural, "J" for persona jurídica) | N                                                                 |
| `userFisNumber`                                                   | *string*                                                          | :heavy_minus_sign:                                                | Customer’s document type                                          | CC                                                                |
| `fiscalNumber`                                                    | *string*                                                          | :heavy_minus_sign:                                                | Customer’s document number                                        | CC                                                                |
| `bankCode`                                                        | *string*                                                          | :heavy_minus_sign:                                                | The bank code of the selected bank                                | 5432                                                              |