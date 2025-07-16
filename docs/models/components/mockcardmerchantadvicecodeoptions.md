# MockCardMerchantAdviceCodeOptions

## Example Usage

```typescript
import { MockCardMerchantAdviceCodeOptions } from "@gr4vy/sdk/models/components";

let value: MockCardMerchantAdviceCodeOptions = {
  accountNumber: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | The MAC to return for this request.                                                |
| `accountNumber`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | When set, the MAC is only returned if the card number matches this account number. |