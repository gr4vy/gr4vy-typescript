# NetworkTokenCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { NetworkTokenCreate } from "@gr4vy/sdk/models/components";

let value: NetworkTokenCreate = {
    merchantInitiated: false,
    isSubsequentPayment: false,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `securityCode`        | *string*              | :heavy_minus_sign:    | N/A                   |
| `merchantInitiated`   | *boolean*             | :heavy_check_mark:    | N/A                   |
| `isSubsequentPayment` | *boolean*             | :heavy_check_mark:    | N/A                   |