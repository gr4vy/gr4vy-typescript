# ResumeNetworkTokenRequest

## Example Usage

```typescript
import { ResumeNetworkTokenRequest } from "@gr4vy/sdk/models/operations";

let value: ResumeNetworkTokenRequest = {
    paymentMethodId: "46973e9d-88a7-44a6-abfe-be4ff0134ff4",
    networkTokenId: "454f6a32-a572-4dda-b885-3e8674086123",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `paymentMethodId`                    | *string*                             | :heavy_check_mark:                   | The ID of the payment method.        | 46973e9d-88a7-44a6-abfe-be4ff0134ff4 |
| `networkTokenId`                     | *string*                             | :heavy_check_mark:                   | The ID of the network token.         | 454f6a32-a572-4dda-b885-3e8674086123 |