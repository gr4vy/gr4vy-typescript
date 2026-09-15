# Tracking

## Example Usage

```typescript
import { Tracking } from "@gr4vy/sdk/models/components";

let value: Tracking = {
  number: "1Z999AA10123456784",
  carrier: "purolator",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `number`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | The tracking number for the shipment.                                    | 1Z999AA10123456784                                                       |
| `carrier`                                                                | [components.ShippingCarrier](../../models/components/shippingcarrier.md) | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `url`                                                                    | *string*                                                                 | :heavy_minus_sign:                                                       | The URL to track the shipment.                                           | https://www.ups.com/track?tracknum=1Z999AA10123456784                    |