# GuestBuyerOutput

## Example Usage

```typescript
import { GuestBuyerOutput } from "@gr4vy/sdk/models/components";

let value: GuestBuyerOutput = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `displayName`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | The display name for the buyer.                                                      | John Doe                                                                             |
| `externalIdentifier`                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The merchant identifier for this buyer.                                              | buyer-12345                                                                          |
| `billingDetails`                                                                     | [components.BillingDetailsOutput](../../models/components/billingdetailsoutput.md)   | :heavy_minus_sign:                                                                   | The billing name, address, email, and other fields for this buyer.                   |                                                                                      |
| `accountNumber`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | The buyer account number                                                             |                                                                                      |
| `shippingDetails`                                                                    | [components.ShippingDetailsCreate](../../models/components/shippingdetailscreate.md) | :heavy_minus_sign:                                                                   | The optional shipping details for this buyer.                                        |                                                                                      |