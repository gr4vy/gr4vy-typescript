# OxxoOptions

## Example Usage

```typescript
import { OxxoOptions } from "@gr4vy/sdk/models/components";

let value: OxxoOptions = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `paymentMethodExpiresAt`                                                                     | *number*                                                                                     | :heavy_minus_sign:                                                                           | Defines a custom expiration time (unix time) after which Oxxo payment requests are cancelled | 1750074293                                                                                   |
| `approvalUrl`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Approval URL that will receive a charge payment method reference.                            | https://example.com                                                                          |