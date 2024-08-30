# PaymentOptionApprovalUI

Configuration for the approval interface that should be shown to the buyer.

## Example Usage

```typescript
import { PaymentOptionApprovalUI } from "@gr4vy/sdk/models/components";

let value: PaymentOptionApprovalUI = {
    height: "300px",
    width: "300px",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `height`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | Height of the approval interface in either pixels or view height (vh). | 300px                                                                  |
| `width`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Width of the approval interface in either pixels or view width (vw).   | 300px                                                                  |