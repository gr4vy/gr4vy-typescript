# PaymentServiceRequestMerchantProfileUnionpayMerchantProfileSingleScheme

Merchant profile for UnionPay.

## Example Usage

```typescript
import { PaymentServiceRequestMerchantProfileUnionpayMerchantProfileSingleScheme } from "@gr4vy/sdk/models/components";

let value: PaymentServiceRequestMerchantProfileUnionpayMerchantProfileSingleScheme = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `merchantAcquirerBin`                                               | *string*                                                            | :heavy_minus_sign:                                                  | Acquirer bin to use when calling 3DS through this scheme.           |
| `merchantUrl`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | URL to send when calling 3DS through this scheme.                   |
| `merchantAcquirerId`                                                | *string*                                                            | :heavy_minus_sign:                                                  | Merchant ID to use when calling 3DS through this scheme.            |
| `merchantName`                                                      | *string*                                                            | :heavy_minus_sign:                                                  | Merchant name to use when calling 3DS through this scheme.          |
| `merchantCountryCode`                                               | *string*                                                            | :heavy_minus_sign:                                                  | Merchant country code to use when calling 3DS through this scheme.  |
| `merchantCategoryCode`                                              | *string*                                                            | :heavy_minus_sign:                                                  | Merchant category code to use when calling 3DS through this scheme. |