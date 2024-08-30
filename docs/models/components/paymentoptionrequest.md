# PaymentOptionRequest

Base model with JSON encoders.

## Example Usage

```typescript
import { PaymentOptionRequest } from "@gr4vy/sdk/models/components";

let value: PaymentOptionRequest = {
    country: "US",
    currency: "EUR",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                         | [components.PaymentOptionRequestMetadata](../../models/components/paymentoptionrequestmetadata.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `country`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | DE                                                                                                 |
| `currency`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | EUR                                                                                                |
| `amount`                                                                                           | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `locale`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `cartItems`                                                                                        | [components.CartItem](../../models/components/cartitem.md)[]                                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |