# ApplePaySessionRequest

Initiates a new session with Apple Pay.

## Example Usage

```typescript
import { ApplePaySessionRequest } from "@gr4vy/sdk/models/components";

let value: ApplePaySessionRequest = {
    validationUrl: "https://moral-star.info",
    domainName: "physical-pegboard.info",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `validationUrl`                                                                   | *string*                                                                          | :heavy_check_mark:                                                                | Validation URL obtained from the event passed to a<br/>`onvalidatemerchant` callback. |
| `domainName`                                                                      | *string*                                                                          | :heavy_check_mark:                                                                | Fully qualified domain name of the merchant.                                      |