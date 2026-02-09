# MerchantAccountThreeDSConfiguration

## Example Usage

```typescript
import { MerchantAccountThreeDSConfiguration } from "@gr4vy/sdk/models/components";

let value: MerchantAccountThreeDSConfiguration = {
  merchantAcquirerBin: "516327",
  merchantAcquirerId: "123456789012345",
  merchantName: "Acme Inc.",
  merchantCountryCode: "840",
  merchantCategoryCode: "1234",
  merchantUrl: "https://example.com",
  id: "1ee985e3-7fbb-4a5f-8530-2ce7040a43df",
  merchantAccountId: "<id>",
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
  updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
  scheme: "visa",
  currency: "USD",
  metadata: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `merchantAcquirerBin`                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | Acquirer BIN to use when calling 3DS through this scheme.                                     | 516327                                                                                        |
| `merchantAcquirerId`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Merchant ID to use when calling 3DS through this scheme.                                      | 123456789012345                                                                               |
| `merchantName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Acme Inc.                                                                                     |
| `merchantCountryCode`                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The merchant's ISO 3166-1 numeric country code.                                               | 840                                                                                           |
| `merchantCategoryCode`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Merchant category code to use when calling 3DS through this scheme.                           | 1234                                                                                          |
| `merchantUrl`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | URL to send when calling 3DS through this scheme.                                             | https://example.com                                                                           |
| `type`                                                                                        | *"merchant-account.three-ds-configuration"*                                                   | :heavy_minus_sign:                                                                            | Always `merchant-account.three-ds-configuration`.                                             | merchant-account.three-ds-configuration                                                       |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the 3DS configuration                                                   |                                                                                               |
| `merchantAccountId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the associated merchant account                                                         |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time when this 3DS configuration was first created in our system.                | 2013-07-16T19:23:00.000+00:00                                                                 |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time when this 3DS configuration was last updated in our system.                 | 2013-07-16T19:23:00.000+00:00                                                                 |
| `scheme`                                                                                      | [components.CardScheme](../../models/components/cardscheme.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           | visa                                                                                          |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | ISO 4217 currency code (3 characters). If null, the configuration applies to all currencies.  | **Example 1:** USD<br/>**Example 2:** EUR<br/>**Example 3:** GBP                              |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | Additional information about the 3DS configuration, stored as key-value pairs.                |                                                                                               |