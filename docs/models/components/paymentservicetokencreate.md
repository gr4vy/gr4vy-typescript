# PaymentServiceTokenCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { PaymentServiceTokenCreate } from "@gr4vy/sdk/models/components";

let value: PaymentServiceTokenCreate = {
    paymentServiceId: "94bb4f63-c969-4e9a-befa-77dfb14cd66a",
    redirectUrl: "https://exemplary-mover.biz",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `securityCode`     | *string*           | :heavy_minus_sign: | N/A                |
| `paymentServiceId` | *string*           | :heavy_check_mark: | N/A                |
| `redirectUrl`      | *string*           | :heavy_check_mark: | N/A                |