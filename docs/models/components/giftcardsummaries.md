# GiftCardSummaries

## Example Usage

```typescript
import { GiftCardSummaries } from "@gr4vy/sdk/models/components";

let value: GiftCardSummaries = {
  items: [
    {
      merchantAccountId: "default",
      bin: "412345",
      subBin: "554",
      last4: "1234",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.GiftCardSummary](../../models/components/giftcardsummary.md)[] | :heavy_check_mark:                                                         | A list of items returned for this request.                                 |