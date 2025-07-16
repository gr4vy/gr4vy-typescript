# AdyenOptions

## Example Usage

```typescript
import { AdyenOptions } from "@gr4vy/sdk/models/components";

let value: AdyenOptions = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `additionalData`                                                     | Record<string, *string*>                                             | :heavy_minus_sign:                                                   | Passes additional data to the Adyen API when creating a transaction. | {<br/>"subMerchantID": "12345"<br/>}                                 |