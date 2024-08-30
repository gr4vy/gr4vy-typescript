# BrowserInfo

Information about the browser used by the buyer.

## Example Usage

```typescript
import { BrowserInfo } from "@gr4vy/sdk/models/components";

let value: BrowserInfo = {
  javaEnabled: true,
  javascriptEnabled: true,
  language: "en-GB",
  colorDepth: 32,
  screenHeight: 1080,
  screenWidth: 1920,
  timeZoneOffset: 60,
  userDevice: "desktop",
  userAgent: "Mozilla/5.0 (darwin) AppleWebKit/537.36
(KHTML, like Gecko) jsdom/16.7.0",
  acceptHeader: "*/*",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `javaEnabled`                                                                | *boolean*                                                                    | :heavy_check_mark:                                                           | Indicates whether the client browser supports Java.                          | true                                                                         |
| `javascriptEnabled`                                                          | *boolean*                                                                    | :heavy_check_mark:                                                           | Indicates whether the client browser supports JavaScript.                    | true                                                                         |
| `language`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | The preferred language of the buyer,<br/>usually the language of the browser UI. | en-GB                                                                        |
| `colorDepth`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | The color depth of the screen.                                               | 32                                                                           |
| `screenHeight`                                                               | *number*                                                                     | :heavy_check_mark:                                                           | The height of the screen in pixels.                                          | 1080                                                                         |
| `screenWidth`                                                                | *number*                                                                     | :heavy_check_mark:                                                           | The width of the screen in pixels.                                           | 1920                                                                         |
| `timeZoneOffset`                                                             | *number*                                                                     | :heavy_check_mark:                                                           | Time-zone offset in minutes between UTC and buyer location.                  | 60                                                                           |
| `userDevice`                                                                 | [components.UserDevice](../../models/components/userdevice.md)               | :heavy_check_mark:                                                           | The platform that is being used to access the website.                       | desktop                                                                      |
| `userAgent`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | The user agent string for the current browser.                               | Mozilla/5.0 (darwin) AppleWebKit/537.36<br/>(KHTML, like Gecko) jsdom/16.7.0 |
| `acceptHeader`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | The `Accept` header of the request from the buyer's browser.                 | */*                                                                          |