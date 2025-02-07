# ApplePaySessionRequest

Base model with JSON encoders.

## Example Usage

```typescript
import { ApplePaySessionRequest } from "@gr4vy/sdk/models/components";

let value: ApplePaySessionRequest = {
  validationUrl: "https://apple-pay-gateway-cert.apple.com",
  domainName: "example.com",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `validationUrl`                                                            | *string*                                                                   | :heavy_check_mark:                                                         | The validation URL as provided by the Apple SDK when processing a payment. | https://apple-pay-gateway-cert.apple.com                                   |
| `domainName`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | The domain on which Apple Pay is being loaded.                             | example.com                                                                |