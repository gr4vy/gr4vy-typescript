# GooglePayPaymentOptionContext

Base model with JSON encoders.

## Example Usage

```typescript
import { GooglePayPaymentOptionContext } from "@gr4vy/sdk/models/components";

let value: GooglePayPaymentOptionContext = {
  merchantName: "<value>",
  supportedSchemes: [
    "<value>",
  ],
  gateway: "<value>",
  gatewayMerchantId: "<id>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `merchantName`      | *string*            | :heavy_check_mark:  | N/A                 |
| `supportedSchemes`  | *string*[]          | :heavy_check_mark:  | N/A                 |
| `gateway`           | *string*            | :heavy_check_mark:  | N/A                 |
| `gatewayMerchantId` | *string*            | :heavy_check_mark:  | N/A                 |