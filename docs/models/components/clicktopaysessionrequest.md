# ClickToPaySessionRequest

Return digital payment application details for Click to Pay.

## Example Usage

```typescript
import { ClickToPaySessionRequest } from "@gr4vy/sdk/models/components";

let value: ClickToPaySessionRequest = {
    checkoutSessionId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `checkoutSessionId`                              | *string*                                         | :heavy_check_mark:                               | The identifier for the current checkout session. | fe26475d-ec3e-4884-9553-f7356683f7f9             |