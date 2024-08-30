# ListBuyerPaymentMethodsRequest

## Example Usage

```typescript
import { ListBuyerPaymentMethodsRequest } from "@gr4vy/sdk/models/operations";

let value: ListBuyerPaymentMethodsRequest = {
    buyerId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    buyerExternalIdentifier: "user-12345",
    country: "US",
    currency: "USD",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `buyerId`                                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Filters the results to only the items for which the `buyer` has an<br/>`id` that matches this value.                           | 8724fd24-5489-4a5d-90fd-0604df7d3b83                                                                                           |
| `buyerExternalIdentifier`                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Filters the results to only the items for which the `buyer` has an<br/>`external_identifier` that matches this value.          | user-12345                                                                                                                     |
| `country`                                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Filters the results to only the items which support this country code. A<br/>country is formatted as 2-letter ISO country code. | US                                                                                                                             |
| `currency`                                                                                                                     | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Filters the results to only the items which support this currency code. A<br/>currency is formatted as 3-letter ISO currency code. | USD                                                                                                                            |