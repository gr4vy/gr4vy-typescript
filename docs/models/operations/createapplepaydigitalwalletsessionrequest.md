# CreateApplePayDigitalWalletSessionRequest

## Example Usage

```typescript
import { CreateApplePayDigitalWalletSessionRequest } from "@gr4vy/sdk/models/operations";

let value: CreateApplePayDigitalWalletSessionRequest = {
  applePaySessionRequest: {
    validationUrl: "https://apple-pay-gateway-cert.apple.com",
    domainName: "example.com",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `merchantAccountId`                                                                    | *string*                                                                               | :heavy_minus_sign:                                                                     | The ID of the merchant account to use for this request.                                |
| `applePaySessionRequest`                                                               | [components.ApplePaySessionRequest](../../models/components/applepaysessionrequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |