# MerchantProfile

An object containing a key for each supported card scheme (Amex,
Discover, Mastercard and Visa), and for each key an object with
the merchant profile for this service and the corresponding scheme.

## Example Usage

```typescript
import { MerchantProfile } from "@gr4vy/sdk/models/components";

let value: MerchantProfile = {
    amex: {
        createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
    },
    dankort: {
        createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
    },
    discover: {
        createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
    },
    jcb: {
        createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
    },
    mastercard: {
        createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
    },
    unionpay: {
        createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
    },
    visa: {
        createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
    },
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `amex`                                                                                                                                                                         | [components.MerchantProfileSingleScheme](../../models/components/merchantprofilesinglescheme.md)                                                                               | :heavy_minus_sign:                                                                                                                                                             | Merchant profile for Amex.                                                                                                                                                     |
| `dankort`                                                                                                                                                                      | [components.PaymentServiceMerchantProfileSingleScheme](../../models/components/paymentservicemerchantprofilesinglescheme.md)                                                   | :heavy_minus_sign:                                                                                                                                                             | Merchant profile for Dankort.                                                                                                                                                  |
| `discover`                                                                                                                                                                     | [components.PaymentServiceMerchantProfileMerchantProfileSingleScheme](../../models/components/paymentservicemerchantprofilemerchantprofilesinglescheme.md)                     | :heavy_minus_sign:                                                                                                                                                             | Merchant profile for Discover.                                                                                                                                                 |
| `jcb`                                                                                                                                                                          | [components.PaymentServiceMerchantProfileJcbMerchantProfileSingleScheme](../../models/components/paymentservicemerchantprofilejcbmerchantprofilesinglescheme.md)               | :heavy_minus_sign:                                                                                                                                                             | Merchant profile for JCB.                                                                                                                                                      |
| `mastercard`                                                                                                                                                                   | [components.PaymentServiceMerchantProfileMastercardMerchantProfileSingleScheme](../../models/components/paymentservicemerchantprofilemastercardmerchantprofilesinglescheme.md) | :heavy_minus_sign:                                                                                                                                                             | Merchant profile for Mastercard.                                                                                                                                               |
| `unionpay`                                                                                                                                                                     | [components.PaymentServiceMerchantProfileUnionpayMerchantProfileSingleScheme](../../models/components/paymentservicemerchantprofileunionpaymerchantprofilesinglescheme.md)     | :heavy_minus_sign:                                                                                                                                                             | Merchant profile for UnionPay.                                                                                                                                                 |
| `visa`                                                                                                                                                                         | [components.PaymentServiceMerchantProfileVisaMerchantProfileSingleScheme](../../models/components/paymentservicemerchantprofilevisamerchantprofilesinglescheme.md)             | :heavy_minus_sign:                                                                                                                                                             | Merchant profile for Visa.                                                                                                                                                     |