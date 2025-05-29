# DeleteCheckoutSessionRequest

## Example Usage

```typescript
import { DeleteCheckoutSessionRequest } from "@gr4vy/sdk/models/operations";

let value: DeleteCheckoutSessionRequest = {
  sessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `sessionId`                                             | *string*                                                | :heavy_check_mark:                                      | The ID of the checkout session.                         | 4137b1cf-39ac-42a8-bad6-1c680d5dab6b                    |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |