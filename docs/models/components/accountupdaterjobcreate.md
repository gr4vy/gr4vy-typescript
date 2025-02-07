# AccountUpdaterJobCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { AccountUpdaterJobCreate } from "@gr4vy/sdk/models/components";

let value: AccountUpdaterJobCreate = {
  paymentMethodIds: [
    "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    "f29e886e-93cc-4714-b4a3-12b7a718e595",
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `paymentMethodIds`                                                                 | *string*[]                                                                         | :heavy_check_mark:                                                                 | A list of payment method IDs to request an update for.                             | [<br/>"ef9496d8-53a5-4aad-8ca2-00eb68334389",<br/>"f29e886e-93cc-4714-b4a3-12b7a718e595"<br/>] |