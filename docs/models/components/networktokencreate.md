# NetworkTokenCreate

## Example Usage

```typescript
import { NetworkTokenCreate } from "@gr4vy/sdk/models/components";

let value: NetworkTokenCreate = {
  merchantInitiated: false,
  isSubsequentPayment: false,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `securityCode`                                                                                    | *string*                                                                                          | :heavy_minus_sign:                                                                                | The 3 or 4 digit security code often found on the card. This often referred to as the CVV or CVD. | 123                                                                                               |
| `merchantInitiated`                                                                               | *boolean*                                                                                         | :heavy_check_mark:                                                                                | Defines if the request is merchant initiated or not.                                              | false                                                                                             |
| `isSubsequentPayment`                                                                             | *boolean*                                                                                         | :heavy_check_mark:                                                                                | Defines if the request is a subsequent of another request or not.                                 | false                                                                                             |