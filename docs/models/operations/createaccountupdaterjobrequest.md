# CreateAccountUpdaterJobRequest

## Example Usage

```typescript
import { CreateAccountUpdaterJobRequest } from "@gr4vy/sdk/models/operations";

let value: CreateAccountUpdaterJobRequest = {
  accountUpdaterJobCreate: {
    paymentMethodIds: [
      "ef9496d8-53a5-4aad-8ca2-00eb68334389",
      "f29e886e-93cc-4714-b4a3-12b7a718e595",
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `timeoutInSeconds`                                                                       | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `accountUpdaterJobCreate`                                                                | [components.AccountUpdaterJobCreate](../../models/components/accountupdaterjobcreate.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |