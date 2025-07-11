# GiftCards

## Example Usage

```typescript
import { GiftCards } from "@gr4vy/sdk/models/components";

let value: GiftCards = {
  items: [
    {
      id: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
      merchantAccountId: "default",
      giftCardService: {
        id: "35b60feec-a7c7-4844-b503-f39b09192d81",
        giftCardServiceDefinitionId: "mock-gift-card",
        displayName: "Qwikcilver USA",
      },
      bin: "412345",
      subBin: "554",
      last4: "1234",
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `items`                                                      | [components.GiftCard](../../models/components/giftcard.md)[] | :heavy_check_mark:                                           | A list of items returned for this request.                   |                                                              |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | The number of items for this page.                           | 20                                                           |
| `nextCursor`                                                 | *string*                                                     | :heavy_minus_sign:                                           | The cursor pointing at the next page of items.               | ZXhhbXBsZTE                                                  |
| `previousCursor`                                             | *string*                                                     | :heavy_minus_sign:                                           | The cursor pointing at the previous page of items.           | Xkjss7asS                                                    |