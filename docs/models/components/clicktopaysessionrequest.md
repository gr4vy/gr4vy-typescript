# ClickToPaySessionRequest

## Example Usage

```typescript
import { ClickToPaySessionRequest } from "@gr4vy/sdk/models/components";

let value: ClickToPaySessionRequest = {
  checkoutSessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `checkoutSessionId`                                           | *string*                                                      | :heavy_check_mark:                                            | The checkout session ID to create a Click to Pay session for. | 4137b1cf-39ac-42a8-bad6-1c680d5dab6b                          |