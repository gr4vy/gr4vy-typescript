# UpdateMerchantAccountRequest

## Example Usage

```typescript
import { UpdateMerchantAccountRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateMerchantAccountRequest = {
    merchantAccountId: "plantly-uk",
    merchantAccountUpdate: {
        displayName: "Plantly UK",
        outboundWebhookUrl: "https://www.example.com/webhook",
        outboundWebhookUsername: "gr4vy",
        outboundWebhookPassword: "super-secret-password",
        visaNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
        visaNetworkTokensAppId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
        amexNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
        amexNetworkTokensAppId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
        mastercardNetworkTokensRequestorId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
        mastercardNetworkTokensAppId: "e50fa0da-903d-4d54-aacc-4cac57d48df2",
        loonAcceptedSchemes: ["visa"],
    },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `merchantAccountId`                                                                  | *string*                                                                             | :heavy_check_mark:                                                                   | The unique ID for a merchant account.                                                | plantly-uk                                                                           |
| `merchantAccountUpdate`                                                              | [components.MerchantAccountUpdate](../../models/components/merchantaccountupdate.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |