# Cryptogram

## Example Usage

```typescript
import { Cryptogram } from "@gr4vy/sdk/models/components";

let value: Cryptogram = {
  cryptogram: "A3F9C2D47E1B56A9",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `type`                               | *"network-token-cryptogram"*         | :heavy_minus_sign:                   | Always `network-token-cryptogram`.   | network-token-cryptogram             |
| `cryptogram`                         | *string*                             | :heavy_check_mark:                   | The cryptogram of the network token. | A3F9C2D47E1B56A9                     |