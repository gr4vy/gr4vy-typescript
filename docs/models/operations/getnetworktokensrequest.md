# GetNetworkTokensRequest

## Example Usage

```typescript
import { GetNetworkTokensRequest } from "@gr4vy/sdk/models/operations";

let value: GetNetworkTokensRequest = {
    paymentMethodId: "46973e9d-88a7-44a6-abfe-be4ff0134ff4",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `paymentMethodId`                                                                                            | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Filters for transactions that have a payment method with an ID that matches exactly with the provided value. | 46973e9d-88a7-44a6-abfe-be4ff0134ff4                                                                         |