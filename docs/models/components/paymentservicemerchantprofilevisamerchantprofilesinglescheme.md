# PaymentServiceMerchantProfileVisaMerchantProfileSingleScheme

Merchant profile for Visa.

## Example Usage

```typescript
import { PaymentServiceMerchantProfileVisaMerchantProfileSingleScheme } from "@gr4vy/sdk/models/components";

let value: PaymentServiceMerchantProfileVisaMerchantProfileSingleScheme = {
    createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `merchantAcquirerBin`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Acquirer bin to use when calling 3DS through this scheme.                                     |                                                                                               |
| `merchantUrl`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | URL to send when calling 3DS through this scheme.                                             |                                                                                               |
| `merchantAcquirerId`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Merchant ID to use when calling 3DS through this scheme.                                      |                                                                                               |
| `merchantName`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Merchant name to use when calling 3DS through this scheme.                                    |                                                                                               |
| `merchantCountryCode`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Merchant country code to use when calling 3DS through this scheme.                            |                                                                                               |
| `merchantCategoryCode`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Merchant category code to use when calling 3DS through this scheme.                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when this profile was created.                                              | 2023-07-26T19:23:00.000+00:00                                                                 |