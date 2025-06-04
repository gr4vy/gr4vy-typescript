# CreateGiftCardRequest

## Example Usage

```typescript
import { CreateGiftCardRequest } from "@gr4vy/sdk/models/operations";

let value: CreateGiftCardRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `merchantAccountId`                                                    | *string*                                                               | :heavy_minus_sign:                                                     | The ID of the merchant account to use for this request.                |
| `giftCardCreate`                                                       | [components.GiftCardCreate](../../models/components/giftcardcreate.md) | :heavy_check_mark:                                                     | N/A                                                                    |