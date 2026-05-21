# PazeSessionReviewLinks

## Example Usage

```typescript
import { PazeSessionReviewLinks } from "@gr4vy/sdk/models/components";

let value: PazeSessionReviewLinks = {
  changeCard: "https://checkout.wallet.uat.earlywarning.io/...",
  changeShippingAddress: "https://checkout.wallet.uat.earlywarning.io/...",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `changeCard`                                    | *string*                                        | :heavy_check_mark:                              | Follow-up link to change the selected card.     | https://checkout.wallet.uat.earlywarning.io/... |
| `changeShippingAddress`                         | *string*                                        | :heavy_check_mark:                              | Follow-up link to change the shipping address.  | https://checkout.wallet.uat.earlywarning.io/... |