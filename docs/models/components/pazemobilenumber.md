# PazeMobileNumber

## Example Usage

```typescript
import { PazeMobileNumber } from "@gr4vy/sdk/models/components";

let value: PazeMobileNumber = {
  countryCode: "1",
  phoneNumber: "3213213211",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `countryCode`                      | *string*                           | :heavy_check_mark:                 | ITU country dialing code.          | 1                                  |
| `phoneNumber`                      | *string*                           | :heavy_check_mark:                 | Phone number without country code. | 3213213211                         |