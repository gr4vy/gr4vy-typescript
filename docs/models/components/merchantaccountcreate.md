# MerchantAccountCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { MerchantAccountCreate } from "@gr4vy/sdk/models/components";

let value: MerchantAccountCreate = {
    id: "<id>",
    displayName: "Elenora.Cartwright24",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `loonClientKey`                                                  | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `loonSecretKey`                                                  | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `loonAcceptedSchemes`                                            | [components.CardScheme](../../models/components/cardscheme.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `visaNetworkTokensRequestorId`                                   | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `visaNetworkTokensAppId`                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `amexNetworkTokensRequestorId`                                   | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `amexNetworkTokensAppId`                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `mastercardNetworkTokensRequestorId`                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `mastercardNetworkTokensAppId`                                   | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `outboundWebhookUrl`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `outboundWebhookUsername`                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `outboundWebhookPassword`                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `displayName`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |