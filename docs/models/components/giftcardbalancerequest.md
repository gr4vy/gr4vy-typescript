# GiftCardBalanceRequest

Base model with JSON encoders.

## Example Usage

```typescript
import { GiftCardBalanceRequest } from "@gr4vy/sdk/models/components";

let value: GiftCardBalanceRequest = {
    items: [
        {
            id: "59890afa-563e-4251-afe4-c8b711e5b7fd",
        },
    ],
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `items`              | *components.Items*[] | :heavy_check_mark:   | N/A                  |