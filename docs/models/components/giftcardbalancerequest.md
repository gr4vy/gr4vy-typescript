# GiftCardBalanceRequest

## Example Usage

```typescript
import { GiftCardBalanceRequest } from "@gr4vy/sdk/models/components";

let value: GiftCardBalanceRequest = {
  items: [
    {
      number: "4123455541234561234",
      pin: "1234",
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `items`                                        | *components.Items*[]                           | :heavy_check_mark:                             | A list of gift cards to request a balance for. |