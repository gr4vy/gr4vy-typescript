# AssuranceDetails

Information about the validation performed on the payment data. (See https://developers.google.com/pay/api/web/reference/response-objects#assurance-details-specifications).

## Example Usage

```typescript
import { AssuranceDetails } from "@gr4vy/sdk/models/components";

let value: AssuranceDetails = {
    accountVerified: false,
    cardHolderAuthenticated: false,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accountVerified`                                                    | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates that card holder possession validation has been performed. | false                                                                |
| `cardHolderAuthenticated`                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates that identification and verifications was performed.       | false                                                                |