# CollectionMerchantAccount

## Example Usage

```typescript
import { CollectionMerchantAccount } from "@gr4vy/sdk/models/components";

let value: CollectionMerchantAccount = {
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.MerchantAccount](../../models/components/merchantaccount.md)[] | :heavy_check_mark:                                                         | A list of items returned for this request.                                 |                                                                            |
| `limit`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | The number of items for this page.                                         | 20                                                                         |
| `nextCursor`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | The cursor pointing at the next page of items.                             | ZXhhbXBsZTE                                                                |
| `previousCursor`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | The cursor pointing at the previous page of items.                         | Xkjss7asS                                                                  |