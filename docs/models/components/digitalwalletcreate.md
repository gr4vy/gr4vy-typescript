# DigitalWalletCreate

Request body for registering a new digital wallet

## Example Usage

```typescript
import { DigitalWalletCreate } from "@gr4vy/sdk/models/components";

let value: DigitalWalletCreate = {
    provider: "apple",
    merchantName: "<value>",
    merchantCountryCode: "US",
    acceptTermsAndConditions: false,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `provider`                                                                           | [components.DigitalWalletProvider](../../models/components/digitalwalletprovider.md) | :heavy_check_mark:                                                                   | An enumeration.                                                                      |                                                                                      |
| `merchantName`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `merchantDisplayName`                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `merchantUrl`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `merchantCountryCode`                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | DE                                                                                   |
| `domainNames`                                                                        | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `acceptTermsAndConditions`                                                           | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |