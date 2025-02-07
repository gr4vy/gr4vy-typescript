# ClickToPaySession

Base model with JSON encoders.

## Example Usage

```typescript
import { ClickToPaySession } from "@gr4vy/sdk/models/components";

let value: ClickToPaySession = {
  digitalPaymentApplicationId: "a0c3ef2e-9cdb-4cbf-aaff-5baac2928e1b",
  digitalPaymentApplicationName: "ACME",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `digitalPaymentApplicationId`                                   | *string*                                                        | :heavy_check_mark:                                              | The ID of the Click to Pay application.                         | a0c3ef2e-9cdb-4cbf-aaff-5baac2928e1b                            |
| `digitalPaymentApplicationName`                                 | *string*                                                        | :heavy_check_mark:                                              | The merchant name as configured ont he the Click to Pay wallet. | ACME                                                            |