# PazeDeliveryContactDetails

## Example Usage

```typescript
import { PazeDeliveryContactDetails } from "@gr4vy/sdk/models/components";

let value: PazeDeliveryContactDetails = {
  contactFullName: "Team Integrations",
  contactPhoneNumber: {
    countryCode: "1",
    phoneNumber: "3213213211",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `contactFullName`                                                          | *string*                                                                   | :heavy_check_mark:                                                         | Consumer-provided name of the contact person.                              | Team Integrations                                                          |
| `contactPhoneNumber`                                                       | [components.PazeMobileNumber](../../models/components/pazemobilenumber.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |