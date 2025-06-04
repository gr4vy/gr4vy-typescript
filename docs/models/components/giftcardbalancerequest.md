# GiftCardBalanceRequest

## Example Usage

```typescript
import { GiftCardBalanceRequest } from "@gr4vy/sdk/models/components";

let value: GiftCardBalanceRequest = {
  items: [],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `items`                                        | *components.Items*[]                           | :heavy_check_mark:                             | A list of gift cards to request a balance for. |