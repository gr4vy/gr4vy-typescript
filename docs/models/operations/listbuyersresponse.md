# ListBuyersResponse

## Example Usage

```typescript
import { ListBuyersResponse } from "@gr4vy/sdk/models/operations";

let value: ListBuyersResponse = {
    result: {
        items: [
            {
                merchantAccountId: "<value>",
                billingDetails: {
                    phoneNumber: "+442071838750",
                    address: {
                        country: "GB",
                        stateCode: "US-CA",
                    },
                },
                createdAt: new Date("2024-07-14T07:33:58.078Z"),
                updatedAt: new Date("2023-10-23T15:05:15.700Z"),
            },
        ],
    },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `result`                                                                 | [components.BuyerCollection](../../models/components/buyercollection.md) | :heavy_check_mark:                                                       | N/A                                                                      |