# ShippingDetailsList

Base model with JSON encoders.

## Example Usage

```typescript
import { ShippingDetailsList } from "@gr4vy/sdk/models/components";

let value: ShippingDetailsList = {
    items: [
        {
            phoneNumber: "+14155552671",
            address: {
                country: "GB",
                stateCode: "GB-LND",
            },
        },
    ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.ShippingDetails](../../models/components/shippingdetails.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |