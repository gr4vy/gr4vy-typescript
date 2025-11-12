# MockCardOptions

## Example Usage

```typescript
import { MockCardOptions } from "@gr4vy/sdk/models/components";

let value: MockCardOptions = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `merchantAdviceCode`                                                                                         | [components.MockCardMerchantAdviceCodeOptions](../../models/components/mockcardmerchantadvicecodeoptions.md) | :heavy_minus_sign:                                                                                           | Allows for mocking the merchant advice code.                                                                 |
| `skipRetry`                                                                                                  | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | When set to true, prevents retries on failed transactions.                                                   |