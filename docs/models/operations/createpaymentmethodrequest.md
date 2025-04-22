# CreatePaymentMethodRequest

## Example Usage

```typescript
import { CreatePaymentMethodRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePaymentMethodRequest = {
  requestBody: {
    id: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
    externalIdentifier: "card-12345",
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    buyerExternalIdentifier: "buyer-12345",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `timeoutInSeconds`                   | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `requestBody`                        | *operations.CreatePaymentMethodBody* | :heavy_check_mark:                   | N/A                                  |