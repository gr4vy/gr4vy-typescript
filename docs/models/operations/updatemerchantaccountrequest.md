# UpdateMerchantAccountRequest

## Example Usage

```typescript
import { UpdateMerchantAccountRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateMerchantAccountRequest = {
  merchantAccountId: "merchant-12345",
  merchantAccountUpdate: {
    accountUpdaterRequestEncryptionKey: "key-1234",
    accountUpdaterRequestEncryptionKeyId: "key-id-1234",
    accountUpdaterResponseDecryptionKey: "key-1234",
    accountUpdaterResponseDecryptionKeyId: "key-id-1234",
    overCaptureAmount: 1299,
    overCapturePercentage: 25,
    loonClientKey: "client-key-1234",
    loonSecretKey: "key-12345",
    loonAcceptedSchemes: [
      "visa",
    ],
    visaNetworkTokensRequestorId: "id-12345",
    visaNetworkTokensAppId: "id-12345",
    amexNetworkTokensRequestorId: "id-12345",
    amexNetworkTokensAppId: "id-12345",
    mastercardNetworkTokensRequestorId: "id-12345",
    mastercardNetworkTokensAppId: "id-12345",
    displayName: "Example",
    outboundWebhookUrl: "https://example.com/callback",
    outboundWebhookUsername: "user-12345",
    outboundWebhookPassword: "password-12345",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `merchantAccountId`                                                                  | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the merchant account                                                       | merchant-12345                                                                       |
| `timeoutInSeconds`                                                                   | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `merchantAccountUpdate`                                                              | [components.MerchantAccountUpdate](../../models/components/merchantaccountupdate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |