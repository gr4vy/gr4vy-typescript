# ListBuyersResponse

## Example Usage

```typescript
import { ListBuyersResponse } from "@gr4vy/sdk/models/operations";

let value: ListBuyersResponse = {
  result: {
    items: [
      {
        merchantAccountId: "default",
        createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
        updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `result`                                                                 | [components.CollectionBuyer](../../models/components/collectionbuyer.md) | :heavy_check_mark:                                                       | N/A                                                                      |