# MerchantAccounts

## Example Usage

```typescript
import { MerchantAccounts } from "@gr4vy/sdk/models/components";

let value: MerchantAccounts = {
    items: [
        {
            type: "merchant-account",
            id: "plantly-uk",
            displayName: "Plantly UK",
            outboundWebhookUrl: "https://www.example.com/webhook",
            outboundWebhookUsername: "gr4vy",
            outboundWebhookPassword: "********",
            visaNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
            visaNetworkTokensAppId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
            amexNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
            amexNetworkTokensAppId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
            mastercardNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
            mastercardNetworkTokensAppId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
            loonClientKey: "7DD771287D0024BA418F8F7ECC7DF1CD",
            loonSecretKey: "********",
            loonAcceptedSchemes: ["mastercard", "visa"],
            createdAt: new Date("2022-02-01T14:20:00.000+00:00"),
            updatedAt: new Date("2022-02-01T14:20:00.000+00:00"),
        },
    ],
    limit: 1,
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: null,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                            | [components.MerchantAccount](../../models/components/merchantaccount.md)[]                                         | :heavy_minus_sign:                                                                                                 | A list of merchant accounts.                                                                                       |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |