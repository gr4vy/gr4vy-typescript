# CreateGooglePayDigitalWalletSessionRequest

## Example Usage

```typescript
import { CreateGooglePayDigitalWalletSessionRequest } from "@gr4vy/sdk/models/operations";

let value: CreateGooglePayDigitalWalletSessionRequest = {
  xGr4vyMerchantAccountId: "default",
  googlePaySessionRequest: {
    originDomain: "example.com",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `xGr4vyMerchantAccountId`                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the merchant account to use for this request.                                  | default                                                                                  |
| `googlePaySessionRequest`                                                                | [components.GooglePaySessionRequest](../../models/components/googlepaysessionrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |