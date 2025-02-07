# GooglePaySession

Base model with JSON encoders.

## Example Usage

```typescript
import { GooglePaySession } from "@gr4vy/sdk/models/components";

let value: GooglePaySession = {
  gatewayMerchantId: "app.gr4vy.sandbox.example.default",
  token: "UouQUGXehuqwQ7FI",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `gatewayMerchantId`                                          | *string*                                                     | :heavy_check_mark:                                           | The gateway ID for the merchant as assigned by our platform. | app.gr4vy.sandbox.example.default                            |
| `token`                                                      | *string*                                                     | :heavy_check_mark:                                           | The session token for Google Pay.                            | UouQUGXehuqwQ7FI                                             |