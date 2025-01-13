# CollectionNoCursorNetworkToken

## Example Usage

```typescript
import { CollectionNoCursorNetworkToken } from "@gr4vy/sdk/models/components";

let value: CollectionNoCursorNetworkToken = {
  items: [
    {
      type: "network-token",
      id: "918f6c9b-5d11-4897-98dc-23fda6fe0055",
      expirationDate: "12/30",
      paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
      status: "active",
      token: "4111123456789012",
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.NetworkToken](../../models/components/networktoken.md)[] | :heavy_check_mark:                                                   | A list of items returned for this request.                           |