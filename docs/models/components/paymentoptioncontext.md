# PaymentOptionContext

## Example Usage

```typescript
import { PaymentOptionContext } from "@gr4vy/sdk/models/components";

let value: PaymentOptionContext = {
  redirectRequiresPopup: false,
  requiresTokenizedRedirectPopup: false,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `approvalUi`                                                                                           | [components.PaymentOptionContextApprovalUI](../../models/components/paymentoptioncontextapprovalui.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `requiredFields`                                                                                       | Record<string, *components.RequiredFields*>                                                            | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `redirectRequiresPopup`                                                                                | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `requiresTokenizedRedirectPopup`                                                                       | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |