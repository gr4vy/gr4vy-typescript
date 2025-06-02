# TransactionCapture

Request body for capturing an authorized transaction

## Example Usage

```typescript
import { TransactionCapture } from "@gr4vy/sdk/models/components";

let value: TransactionCapture = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                     | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The amount to capture. This normally needs to be equal or less than the authorized amount, unless over-capture is available. | 1299                                                                                                                         |
| `airline`                                                                                                                    | [components.Airline](../../models/components/airline.md)                                                                     | :heavy_minus_sign:                                                                                                           | The airline data to submit to the payment service during the capture call.                                                   |                                                                                                                              |