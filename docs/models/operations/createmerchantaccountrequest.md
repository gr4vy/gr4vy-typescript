# CreateMerchantAccountRequest

## Example Usage

```typescript
import { CreateMerchantAccountRequest } from "@gr4vy/sdk/models/operations";

let value: CreateMerchantAccountRequest = {
  merchantAccountCreate: {
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
    outboundWebhookUrl: "https://example.com/callback",
    outboundWebhookUsername: "user-12345",
    outboundWebhookPassword: "password-12345",
    id: "merchant-12345",
    displayName: "Example",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `timeoutInSeconds`                                                                   | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `merchantAccountCreate`                                                              | [components.MerchantAccountCreate](../../models/components/merchantaccountcreate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |