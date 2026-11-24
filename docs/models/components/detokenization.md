# Detokenization

## Example Usage

```typescript
import { Detokenization } from "@gr4vy/sdk/models/components";

let value: Detokenization = {
  encryptedPayload: "eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOi...",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | *"payment-method-detokenization"*                                          | :heavy_minus_sign:                                                         | Always `payment-method-detokenization`.                                    | payment-method-detokenization                                              |
| `encryptedPayload`                                                         | *string*                                                                   | :heavy_check_mark:                                                         | The card details, encrypted to the merchant's public key as a compact JWE. | eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOi...                                  |