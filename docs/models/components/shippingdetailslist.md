# ShippingDetailsList

Base model with JSON encoders.

## Example Usage

```typescript
import { ShippingDetailsList } from "@gr4vy/sdk/models/components";

let value: ShippingDetailsList = {
    items: [
        {
            phoneNumber: "+442071838750",
            address: {
                country: "DE",
                stateCode: "US-CA",
            },
        },
    ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.ShippingDetails](../../models/components/shippingdetails.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |