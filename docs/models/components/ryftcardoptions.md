# RyftCardOptions

## Example Usage

```typescript
import { RyftCardOptions } from "@gr4vy/sdk/models/components";

let value: RyftCardOptions = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `subAccountId`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Ryft linked sub-account ID, sent as the `Account` header.                                     | ac_123456789                                                                                  |
| `platformFee`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Platform Fee in the transaction currency's smallest unit. Sent as Ryft's `platformFee` field. | 205                                                                                           |