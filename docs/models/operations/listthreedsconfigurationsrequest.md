# ListThreeDsConfigurationsRequest

## Example Usage

```typescript
import { ListThreeDsConfigurationsRequest } from "@gr4vy/sdk/models/operations";

let value: ListThreeDsConfigurationsRequest = {
  merchantAccountId: "merchant-12345",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `merchantAccountId`                                                 | *string*                                                            | :heavy_check_mark:                                                  | The ID of the merchant account.                                     | merchant-12345                                                      |
| `currency`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | ISO 4217 currency code (3 characters) to filter 3DS configurations. | **Example 1:** USD<br/>**Example 2:** EUR<br/>**Example 3:** GBP    |