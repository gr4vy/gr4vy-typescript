# CreatePaymentServiceDefinitionSessionRequest

## Example Usage

```typescript
import { CreatePaymentServiceDefinitionSessionRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePaymentServiceDefinitionSessionRequest = {
  paymentServiceDefinitionId: "adyen-ideal",
  requestBody: {
    "key": "<value>",
  },
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `paymentServiceDefinitionId` | *string*                     | :heavy_check_mark:           | N/A                          | adyen-ideal                  |
| `requestBody`                | Record<string, *any*>        | :heavy_check_mark:           | N/A                          |                              |