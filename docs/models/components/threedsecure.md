# ThreeDSecure

## Example Usage

```typescript
import { ThreeDSecure } from "@gr4vy/sdk/models/components";

let value: ThreeDSecure = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                              | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The amount to be used for 3DS authentication. Optionally set this value to authenticate a greater amount than the transaction amount. |