# UpdateCheckoutSessionFieldsRequest

## Example Usage

```typescript
import { UpdateCheckoutSessionFieldsRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateCheckoutSessionFieldsRequest = {
    sessionId: "4418e3bb-91c8-4d97-9e0e-8419d8f84f14",
    checkoutSessionSecureFields: {
        paymentMethod: {
            number: "<value>",
            expirationDate: "<value>",
        },
    },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `sessionId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `checkoutSessionSecureFields`                                                                    | [components.CheckoutSessionSecureFields](../../models/components/checkoutsessionsecurefields.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |