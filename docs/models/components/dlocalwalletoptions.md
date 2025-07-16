# DlocalWalletOptions

## Example Usage

```typescript
import { DlocalWalletOptions } from "@gr4vy/sdk/models/components";

let value: DlocalWalletOptions = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `name`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | Passes `wallet.name` to the dLocal API for those connectors that need it.     | John Doe                                                                      |
| `email`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | Passes `wallet.email` to the dLocal API for those connectors that need it.    | john@example.com                                                              |
| `token`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | Passes `wallet.token` to the dLocal API for those connectors that need it.    | 123456                                                                        |
| `username`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | Passes `wallet.username` to the dLocal API for those connectors that need it. | johnd                                                                         |
| `verify`                                                                      | *boolean*                                                                     | :heavy_minus_sign:                                                            | Passes `wallet.verify` to the dLocal API for those connectors that need it.   | true                                                                          |