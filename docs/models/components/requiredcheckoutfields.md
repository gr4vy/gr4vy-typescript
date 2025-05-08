# RequiredCheckoutFields

A collection of checkout fields and the conditions under which they are required.

## Example Usage

```typescript
import { RequiredCheckoutFields } from "@gr4vy/sdk/models/components";

let value: RequiredCheckoutFields = {
  requiredFields: [
    "address.line1",
    "address.country",
    "address.city",
    "address.postal_code",
  ],
  conditions: {
    "country": [
      "IN",
    ],
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `requiredFields`                                                                      | *string*[]                                                                            | :heavy_check_mark:                                                                    | A list of transaction fields that are required to process a payment for this service. | [<br/>"address.line1",<br/>"address.country",<br/>"address.city",<br/>"address.postal_code"<br/>] |
| `conditions`                                                                          | Record<string, *any*>                                                                 | :heavy_minus_sign:                                                                    | The conditions under which these fields are required                                  | {<br/>"country": [<br/>"IN"<br/>]<br/>}                                               |