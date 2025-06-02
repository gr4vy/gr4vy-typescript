# CollectionNoCursorPaymentServiceToken

## Example Usage

```typescript
import { CollectionNoCursorPaymentServiceToken } from "@gr4vy/sdk/models/components";

let value: CollectionNoCursorPaymentServiceToken = {
  items: [
    {
      id: "07e70d14-a0c0-4ff5-bd4a-509959af0e4d",
      paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
      paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
      status: "succeeded",
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `items`                                                                            | [components.PaymentServiceToken](../../models/components/paymentservicetoken.md)[] | :heavy_check_mark:                                                                 | A list of items returned for this request.                                         |