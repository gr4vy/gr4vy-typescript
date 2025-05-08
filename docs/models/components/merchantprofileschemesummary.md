# MerchantProfileSchemeSummary

## Example Usage

```typescript
import { MerchantProfileSchemeSummary } from "@gr4vy/sdk/models/components";

let value: MerchantProfileSchemeSummary = {
  merchantAcquirerBin: "516327",
  merchantUrl: "https://example.com",
  merchantAcquirerId: "123456789012345",
  merchantName: "Acme Inc.",
  merchantCountryCode: "USD",
  merchantCategoryCode: "1234",
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `merchantAcquirerBin`                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | Acquirer BIN to use when calling 3DS through this scheme.                                     | 516327                                                                                        |
| `merchantUrl`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | URL to send when calling 3DS through this scheme.                                             | https://example.com                                                                           |
| `merchantAcquirerId`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Merchant ID to use when calling 3DS through this scheme.                                      | 123456789012345                                                                               |
| `merchantName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Acme Inc.                                                                                     |
| `merchantCountryCode`                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | Merchant country code to use when calling 3DS through this scheme.                            | USD                                                                                           |
| `merchantCategoryCode`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Merchant category code to use when calling 3DS through this scheme.                           | 1234                                                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time when this profile was first created in our system.                          | 2013-07-16T19:23:00.000+00:00                                                                 |