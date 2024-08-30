# Context

Additional context specific to the payment option.
This is currently only returned for Apple Pay and Google Pay.

## Example Usage

```typescript
import { Context } from "@gr4vy/sdk/models/components";

let value: Context = {
    approvalUi: {
        height: "300px",
        width: "300px",
    },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `gateway`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | Gateway used for Google Pay payments.                                                    |
| `gatewayMerchantId`                                                                      | *string*                                                                                 | :heavy_minus_sign:                                                                       | Gateway merchant identifier used for Google Pay payments.                                |
| `merchantName`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | Display name of the merchant as registered with the digital wallet<br/>provider.         |
| `supportedSchemes`                                                                       | *string*[]                                                                               | :heavy_minus_sign:                                                                       | Card schemes supported by the digital wallet provider.                                   |
| `approvalUi`                                                                             | [components.PaymentOptionApprovalUI](../../models/components/paymentoptionapprovalui.md) | :heavy_minus_sign:                                                                       | Configuration for the approval interface that should be shown to the buyer.              |
| `requiredFields`                                                                         | [components.RequiredFields](../../models/components/requiredfields.md)                   | :heavy_minus_sign:                                                                       | The fields that are required to process a transaction for this payment option.           |