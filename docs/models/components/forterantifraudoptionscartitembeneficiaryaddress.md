# ForterAntiFraudOptionsCartItemBeneficiaryAddress

## Example Usage

```typescript
import { ForterAntiFraudOptionsCartItemBeneficiaryAddress } from "@gr4vy/sdk/models/components";

let value: ForterAntiFraudOptionsCartItemBeneficiaryAddress = {
  country: "DE",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `country`                                               | *string*                                                | :heavy_check_mark:                                      | The country code of the beneficiary's address.          | DE                                                      |
| `address1`                                              | *string*                                                | :heavy_minus_sign:                                      | First line of the beneficiary's address.                |                                                         |
| `address2`                                              | *string*                                                | :heavy_minus_sign:                                      | Second line of the beneficiary's address.               |                                                         |
| `zip`                                                   | *string*                                                | :heavy_minus_sign:                                      | Zip or postal code of the beneficiary's address.        |                                                         |
| `region`                                                | *string*                                                | :heavy_minus_sign:                                      | State or region of the beneficiary's address.           |                                                         |
| `company`                                               | *string*                                                | :heavy_minus_sign:                                      | Company name associated with the beneficiary's address. |                                                         |
| `city`                                                  | *string*                                                | :heavy_minus_sign:                                      | City of the beneficiary's address.                      |                                                         |