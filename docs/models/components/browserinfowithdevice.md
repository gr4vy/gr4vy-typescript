# BrowserInfoWithDevice

Base model with JSON encoders.

## Example Usage

```typescript
import { BrowserInfoWithDevice } from "@gr4vy/sdk/models/components";

let value: BrowserInfoWithDevice = {
    javascriptEnabled: false,
    javaEnabled: false,
    language: "<value>",
    colorDepth: 679393,
    screenHeight: 478596,
    screenWidth: 453697,
    timeZoneOffset: 677082,
    userAgent: "<value>",
    userDevice: "mobile",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `javascriptEnabled`                                            | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `javaEnabled`                                                  | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `language`                                                     | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `colorDepth`                                                   | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `screenHeight`                                                 | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `screenWidth`                                                  | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `timeZoneOffset`                                               | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `userAgent`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `userDevice`                                                   | [components.UserDevice](../../models/components/userdevice.md) | :heavy_check_mark:                                             | N/A                                                            |
| `acceptHeader`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |