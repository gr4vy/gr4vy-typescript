# CreateCheckoutSessionRequest

## Example Usage

```typescript
import { CreateCheckoutSessionRequest } from "@gr4vy/sdk/models/operations";

let value: CreateCheckoutSessionRequest = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `applicationName`                                                                    | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `merchantAccountId`                                                                  | *string*                                                                             | :heavy_minus_sign:                                                                   | The ID of the merchant account to use for this request.                              |
| `checkoutSessionCreate`                                                              | [components.CheckoutSessionCreate](../../models/components/checkoutsessioncreate.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |