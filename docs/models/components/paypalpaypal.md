# PaypalPaypal

Additional options to be passed through to PayPal when processing
transactions.

## Example Usage

```typescript
import { PaypalPaypal } from "@gr4vy/sdk/models/components";

let value: PaypalPaypal = {
    additionalData: [
        {
            key: "test",
            value: "abc",
        },
    ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `additionalData`                                                                     | [components.AdditionalData](../../models/components/additionaldata.md)[]             | :heavy_minus_sign:                                                                   | An array with key-value objects representing additional<br/>data to be passed to PayPal. | [<br/>{<br/>"key": "test",<br/>"value": "abc"<br/>}<br/>]                            |