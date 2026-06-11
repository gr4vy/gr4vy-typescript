# CaptureCollection

## Example Usage

```typescript
import { CaptureCollection } from "@gr4vy/sdk/models/components";

let value: CaptureCollection = {
  items: [
    {
      id: "b1e2c3d4-5678-1234-9abc-1234567890ab",
      merchantAccountId: "default",
      transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
      currency: "USD",
      amount: 1299,
      status: "succeeded",
      final: true,
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `items`                                                    | [components.Capture](../../models/components/capture.md)[] | :heavy_check_mark:                                         | A list of items returned for this request.                 |                                                            |
| `limit`                                                    | *number*                                                   | :heavy_minus_sign:                                         | The number of items for this page.                         | 20                                                         |
| `nextCursor`                                               | *string*                                                   | :heavy_minus_sign:                                         | The cursor pointing at the next page of items.             | ZXhhbXBsZTE                                                |
| `previousCursor`                                           | *string*                                                   | :heavy_minus_sign:                                         | The cursor pointing at the previous page of items.         | Xkjss7asS                                                  |