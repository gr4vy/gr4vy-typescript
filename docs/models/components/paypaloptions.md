# PaypalOptions

## Example Usage

```typescript
import { PaypalOptions } from "@gr4vy/sdk/models/components";

let value: PaypalOptions = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `additionalData`                                                                                 | Record<string, *string*>[]                                                                       | :heavy_minus_sign:                                                                               | Additional Set Transaction Context Values (STC) to be sent to PayPal as part of the transaction. | {<br/>"sender_account_id": "customer-1234"<br/>}                                                 |