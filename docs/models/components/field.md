# Field

A field used in a payment service

## Example Usage

```typescript
import { Field } from "@gr4vy/sdk/models/components";

let value: Field = {
  key: "api_key",
  value: "key-12345",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `key`                              | *string*                           | :heavy_check_mark:                 | The ID of the configured field.    | api_key                            |
| `value`                            | *string*                           | :heavy_check_mark:                 | The value of the configured field. | key-12345                          |