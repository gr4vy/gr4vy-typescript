# GiftCardSnapshot

A snapshot of a gift card used in a transaction.

## Example Usage

```typescript
import { GiftCardSnapshot } from "@gr4vy/sdk/models/components";

let value: GiftCardSnapshot = {
    type: "gift-card",
    id: "e6cdf979-87e2-4796-8ff6-9784d5aed893",
    bin: "412345",
    subBin: "554",
    last4: "1234",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [components.GiftCardSnapshotType](../../models/components/giftcardsnapshottype.md) | :heavy_minus_sign:                                                                 | The type of this resource.                                                         | gift-card                                                                          |
| `id`                                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | The ID of this gift card. This may be `null` if the gift<br/>card is not stored.   | e6cdf979-87e2-4796-8ff6-9784d5aed893                                               |
| `bin`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | The first 6 digits of the full gift card number.                                   | 412345                                                                             |
| `subBin`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | The 3 digits after the `bin` of the full gift card number.                         | 554                                                                                |
| `last4`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | The last 4 digits for the gift card.                                               | 1234                                                                               |