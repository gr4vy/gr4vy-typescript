# UpdateCheckoutSessionFieldsRequest

## Example Usage

```typescript
import { UpdateCheckoutSessionFieldsRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateCheckoutSessionFieldsRequest = {
    sessionId: "9acb3ecf-da8d-40c5-89ef-03004978a61f",
    checkoutSessionSecureFields: {
        paymentMethod: {
            id: "1cf20688-f77c-41ff-871d-ca163f2a3c80",
        },
    },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `sessionId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `checkoutSessionSecureFields`                                                                    | [components.CheckoutSessionSecureFields](../../models/components/checkoutsessionsecurefields.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |