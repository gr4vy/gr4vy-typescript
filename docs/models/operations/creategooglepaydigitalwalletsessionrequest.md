# CreateGooglePayDigitalWalletSessionRequest

## Example Usage

```typescript
import { CreateGooglePayDigitalWalletSessionRequest } from "@gr4vy/sdk/models/operations";

let value: CreateGooglePayDigitalWalletSessionRequest = {
  googlePaySessionRequest: {
    originDomain: "example.com",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `applicationName`                                                                        | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `merchantAccountId`                                                                      | *string*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the merchant account to use for this request.                                  |
| `googlePaySessionRequest`                                                                | [components.GooglePaySessionRequest](../../models/components/googlepaysessionrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |