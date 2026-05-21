# PazeConsumer

## Example Usage

```typescript
import { PazeConsumer } from "@gr4vy/sdk/models/components";

let value: PazeConsumer = {
  firstName: "Team",
  lastName: "Integrations",
  fullName: "Team Integrations",
  countryCode: "US",
  languageCode: "EN",
  emailAddress: "integrations@gr4vy.com",
  mobileNumber: {
    countryCode: "1",
    phoneNumber: "3213213211",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `firstName`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | First name of the consumer.                                                | Team                                                                       |
| `lastName`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | Last name of the consumer.                                                 | Integrations                                                               |
| `fullName`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | Full name of the consumer.                                                 | Team Integrations                                                          |
| `countryCode`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | ISO 3166-1 alpha-2 country code.                                           | US                                                                         |
| `languageCode`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | ISO 639-1 language code associated with the wallet.                        | EN                                                                         |
| `emailAddress`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | Email address of the consumer.                                             | integrations@gr4vy.com                                                     |
| `mobileNumber`                                                             | [components.PazeMobileNumber](../../models/components/pazemobilenumber.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |