# CybersourceAntiFraud

Additional options for Cybersource Decision Manager (anti-fraud).

## Example Usage

```typescript
import { CybersourceAntiFraud } from "@gr4vy/sdk/models/components";

let value: CybersourceAntiFraud = {
    merchantDefinedData: {
        "1": "John Doe",
        "2": "trusted",
        "99": "recurring",
    },
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                | Example                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `metaKeyMerchantId`                                                                                                                                                        | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | An override for the merchant ID configured for the connector,<br/>used in combination with meta keys.                                                                      |                                                                                                                                                                            |
| `merchantDefinedData`                                                                                                                                                      | Record<string, *string*>                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | This is a key-value object for merchant defined data. Each key needs to be a<br/>numeric string identifying the MDD field to set. For example, for field 1 set<br/>the key to "1". | {<br/>"1": "John Doe",<br/>"2": "trusted",<br/>"99": "recurring"<br/>}                                                                                                     |
| `shippingMethod`                                                                                                                                                           | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | Shipping method for the order.                                                                                                                                             |                                                                                                                                                                            |