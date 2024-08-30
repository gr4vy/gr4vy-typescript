# ApiRoutersPaymentServicesSchemasVerifyCredentials

Base model with JSON encoders.

## Example Usage

```typescript
import { ApiRoutersPaymentServicesSchemasVerifyCredentials } from "@gr4vy/sdk/models/components";

let value: ApiRoutersPaymentServicesSchemasVerifyCredentials = {
    paymentServiceDefinitionId: "<value>",
    fields: [
        {
            key: "<key>",
            value: "<value>",
        },
    ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `paymentServiceDefinitionId`                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `paymentServiceId`                                                                                                     | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `fields`                                                                                                               | [components.ApiRoutersPaymentServicesSchemasField](../../models/components/apirouterspaymentservicesschemasfield.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |