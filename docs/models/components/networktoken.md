# NetworkToken

## Example Usage

```typescript
import { NetworkToken } from "@gr4vy/sdk/models/components";

let value: NetworkToken = {
  id: "918f6c9b-5d11-4897-98dc-23fda6fe0055",
  expirationDate: "12/30",
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  status: "deleted",
  token: "4111123456789012",
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
  updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"network-token"*                                                                             | :heavy_minus_sign:                                                                            | Always `network-token`.                                                                       | network-token                                                                                 |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID for the network token.                                                                 | 918f6c9b-5d11-4897-98dc-23fda6fe0055                                                          |
| `expirationDate`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The expiration date for the network token.                                                    | 12/30                                                                                         |
| `paymentMethodId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the payment method used to generate this token                                      | ef9496d8-53a5-4aad-8ca2-00eb68334389                                                          |
| `status`                                                                                      | [components.NetworkTokenStatus](../../models/components/networktokenstatus.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `token`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The token value. Will be present if succeeded.                                                | 4111123456789012                                                                              |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time when this network token was first created in our system.                    | 2013-07-16T19:23:00.000+00:00                                                                 |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time when this network token was last updated in our system.                     | 2013-07-16T19:23:00.000+00:00                                                                 |