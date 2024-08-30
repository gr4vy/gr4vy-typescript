# GetBuyerBillingDetailsRequest

## Example Usage

```typescript
import { GetBuyerBillingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: GetBuyerBillingDetailsRequest = {
    buyerId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    buyerExternalIdentifier: "user-12345",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `buyerId`                                                                                                         | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Filters the results to only the items for which the `buyer` has an<br/>`id` that matches this value.              | 8724fd24-5489-4a5d-90fd-0604df7d3b83                                                                              |
| `buyerExternalIdentifier`                                                                                         | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Filters the results to only the items for which the `buyer` has an<br/>`external_identifier` that matches this value. | user-12345                                                                                                        |