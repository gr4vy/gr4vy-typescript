# CreateClickToPayDigitalWalletSessionRequest

## Example Usage

```typescript
import { CreateClickToPayDigitalWalletSessionRequest } from "@gr4vy/sdk/models/operations";

let value: CreateClickToPayDigitalWalletSessionRequest = {
  clickToPaySessionRequest: {
    checkoutSessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `applicationName`                                                                          | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `clickToPaySessionRequest`                                                                 | [components.ClickToPaySessionRequest](../../models/components/clicktopaysessionrequest.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |