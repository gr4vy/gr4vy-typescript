# DigitalWalletUpdate

Request body for editing a registered digital wallet

## Example Usage

```typescript
import { DigitalWalletUpdate } from "@gr4vy/sdk/models/components";

let value: DigitalWalletUpdate = {
    merchantCountryCode: "DE",
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `merchantName`        | *string*              | :heavy_minus_sign:    | N/A                   |                       |
| `domainNames`         | *string*[]            | :heavy_minus_sign:    | N/A                   |                       |
| `merchantDisplayName` | *string*              | :heavy_minus_sign:    | N/A                   |                       |
| `merchantUrl`         | *string*              | :heavy_minus_sign:    | N/A                   |                       |
| `merchantCountryCode` | *string*              | :heavy_minus_sign:    | N/A                   | DE                    |