# Filters

The filters for the report.

## Example Usage

```typescript
import { Filters } from "@gr4vy/sdk/models/components";

let value: Filters = {
    status: ["authorization_failed"],
    currency: ["GBP"],
    method: ["card"],
    scheme: ["visa"],
    threeDSecureEci: ["05"],
    threeDSecureAuthResp: ["N"],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `status`                                                                  | *string*[]                                                                | :heavy_minus_sign:                                                        | A list of status' to filter by.                                           | [<br/>"authorization_failed"<br/>]                                        |
| `createdAt`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | The created date and time to filter by.                                   |                                                                           |
| `updatedAt`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | The updated date and time to filter by.                                   |                                                                           |
| `authorizedAt`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | The authorized date and time to filter by.                                |                                                                           |
| `capturedAt`                                                              | *string*                                                                  | :heavy_minus_sign:                                                        | The captured date and time to filter by.                                  |                                                                           |
| `voidedAt`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | The voided date and time to filter by.                                    |                                                                           |
| `currency`                                                                | *string*[]                                                                | :heavy_minus_sign:                                                        | A list of currencies to filter by.                                        | [<br/>"GBP"<br/>]                                                         |
| `method`                                                                  | *string*[]                                                                | :heavy_minus_sign:                                                        | A list of methods to filter by.                                           | [<br/>"card"<br/>]                                                        |
| `scheme`                                                                  | *string*[]                                                                | :heavy_minus_sign:                                                        | A list of schemes to filter by.                                           | [<br/>"visa"<br/>]                                                        |
| `metadata`                                                                | *string*[]                                                                | :heavy_minus_sign:                                                        | A list of metadata to filter by.                                          |                                                                           |
| `isSubsequentPayment`                                                     | *boolean*                                                                 | :heavy_minus_sign:                                                        | A boolean indicating transactions with subsequent payments to filter by.  |                                                                           |
| `merchantInitiated`                                                       | *boolean*                                                                 | :heavy_minus_sign:                                                        | A boolean indicating transactions initiated by the merchant to filter by. |                                                                           |
| `paymentSource`                                                           | *string*[]                                                                | :heavy_minus_sign:                                                        | A list of transaction sources to filter by.                               |                                                                           |
| `threeDSecureStatus`                                                      | *string*[]                                                                | :heavy_minus_sign:                                                        | A list of 3DS status to filter by.                                        |                                                                           |
| `threeDSecureEci`                                                         | *string*[]                                                                | :heavy_minus_sign:                                                        | A list of electric commerce indicators to filter by.                      | [<br/>"05"<br/>]                                                          |
| `threeDSecureAuthResp`                                                    | *string*[]                                                                | :heavy_minus_sign:                                                        | A list of 3DS responses to filter by.                                     | [<br/>"N"<br/>]                                                           |