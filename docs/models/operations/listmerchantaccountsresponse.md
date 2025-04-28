# ListMerchantAccountsResponse

## Example Usage

```typescript
import { ListMerchantAccountsResponse } from "@gr4vy/sdk/models/operations";

let value: ListMerchantAccountsResponse = {
  result: {
    items: [
      {
        id: "merchant-12345",
        displayName: "John Doe",
        outboundWebhookUrl: "https://example.com/callback",
        outboundWebhookUsername: "user-12345",
        outboundWebhookPassword: "password-12345",
        loonClientKey: "client-key-1234",
        loonSecretKey: "key-12345",
        loonAcceptedSchemes: [
          "visa",
        ],
        accountUpdaterRequestEncryptionKey: "key-1234",
        accountUpdaterRequestEncryptionKeyId: "key-id-1234",
        accountUpdaterResponseDecryptionKey: "key-1234",
        accountUpdaterResponseDecryptionKeyId: "key-id-1234",
        accountUpdaterEnabled: true,
        overCaptureAmount: 1299,
        overCapturePercentage: 25,
        visaNetworkTokensRequestorId: "id-12345",
        visaNetworkTokensAppId: "id-12345",
        amexNetworkTokensRequestorId: "id-12345",
        amexNetworkTokensAppId: "id-12345",
        mastercardNetworkTokensRequestorId: "id-12345",
        mastercardNetworkTokensAppId: "id-12345",
        createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
        updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      },
    ],
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: "Xkjss7asS",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.CollectionMerchantAccount](../../models/components/collectionmerchantaccount.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |