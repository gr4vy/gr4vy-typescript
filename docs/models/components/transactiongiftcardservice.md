# TransactionGiftCardService

The gift card service used for this transaction.

## Example Usage

```typescript
import { TransactionGiftCardService } from "@gr4vy/sdk/models/components";

let value: TransactionGiftCardService = {
  type: "gift-card-service",
  id: "35b60feec-a7c7-4844-b503-f39b09192d81",
  giftCardServiceDefinitionId: "qwikcilver-gift-card",
  displayName: "Qwikcilver USA",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [components.TransactionGiftCardServiceType](../../models/components/transactiongiftcardservicetype.md)         | :heavy_minus_sign:                                                                                             | Always `gift-card-service`.                                                                                    | gift-card-service                                                                                              |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID for the gift card service.                                                                              | 35b60feec-a7c7-4844-b503-f39b09192d81                                                                          |
| `giftCardServiceDefinitionId`                                                                                  | [components.TransactionGiftCardServiceProvider](../../models/components/transactiongiftcardserviceprovider.md) | :heavy_check_mark:                                                                                             | The ID of the definition for this service.                                                                     | qwikcilver-gift-card                                                                                           |
| `displayName`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The display name for the gift card service.                                                                    | Qwikcilver USA                                                                                                 |