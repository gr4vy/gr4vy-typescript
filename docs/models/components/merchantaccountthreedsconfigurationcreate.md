# MerchantAccountThreeDSConfigurationCreate

## Example Usage

```typescript
import { MerchantAccountThreeDSConfigurationCreate } from "@gr4vy/sdk/models/components";

let value: MerchantAccountThreeDSConfigurationCreate = {
  merchantAcquirerBin: "516327",
  merchantAcquirerId: "123456789012345",
  merchantName: "Acme Inc.",
  merchantCountryCode: "840",
  merchantCategoryCode: "1234",
  merchantUrl: "https://example.com",
  scheme: "visa",
  metadata: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `merchantAcquirerBin`                                                                                   | *string*                                                                                                | :heavy_check_mark:                                                                                      | Acquirer BIN to use when calling 3DS through this scheme.                                               | 516327                                                                                                  |
| `merchantAcquirerId`                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | Merchant ID to use when calling 3DS through this scheme.                                                | 123456789012345                                                                                         |
| `merchantName`                                                                                          | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | Acme Inc.                                                                                               |
| `merchantCountryCode`                                                                                   | *string*                                                                                                | :heavy_check_mark:                                                                                      | The merchant's ISO 3166-1 numeric country code.                                                         | 840                                                                                                     |
| `merchantCategoryCode`                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | Merchant category code to use when calling 3DS through this scheme.                                     | 1234                                                                                                    |
| `merchantUrl`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | URL to send when calling 3DS through this scheme.                                                       | https://example.com                                                                                     |
| `scheme`                                                                                                | [components.CardScheme](../../models/components/cardscheme.md)                                          | :heavy_check_mark:                                                                                      | N/A                                                                                                     | visa                                                                                                    |
| `currency`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | ISO 4217 currency code (3 characters). If left null, the configuration will apply to all currencies.    | **Example 1:** USD<br/>**Example 2:** EUR<br/>**Example 3:** GBP                                        |
| `metadata`                                                                                              | Record<string, *string*>                                                                                | :heavy_check_mark:                                                                                      | Any additional information about the 3DS configuration that you would like to store as key-value pairs. |                                                                                                         |