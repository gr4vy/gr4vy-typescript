# Comments

Comments to merchant or beneficiary written by customer.

## Example Usage

```typescript
import { Comments } from "@gr4vy/sdk/models/components";

let value: Comments = {
    userCommentsToMerchant: "Please wrap with care!!",
    messageToBeneficiary: "Enjoy the gift John!",
    merchantComments: "Shipping delayed",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userCommentsToMerchant`                                            | *string*                                                            | :heavy_minus_sign:                                                  | Comments the customer left to the merchant.                         | Please wrap with care!!                                             |
| `messageToBeneficiary`                                              | *string*                                                            | :heavy_minus_sign:                                                  | Comments the customer left to the beneficiary of the purchase made. | Enjoy the gift John!                                                |
| `merchantComments`                                                  | *string*                                                            | :heavy_minus_sign:                                                  | Comments by the merchant.                                           | Shipping delayed                                                    |