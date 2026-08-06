# WorldpayVapOptions

## Example Usage

```typescript
import { WorldpayVapOptions } from "@gr4vy/sdk/models/components";

let value: WorldpayVapOptions = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `reportGroup`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Overrides the default report group to pass to the Worldpay VAP API.                                 |                                                                                                     |
| `orderId`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Overrides the `orderId` passed to the Worldpay VAP API, which defaults to the Gr4vy transaction ID. | order-123                                                                                           |