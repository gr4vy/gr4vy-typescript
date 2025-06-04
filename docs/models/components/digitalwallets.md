# DigitalWallets

## Example Usage

```typescript
import { DigitalWallets } from "@gr4vy/sdk/models/components";

let value: DigitalWallets = {
  items: [
    {
      id: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
      merchantAccountId: "default",
      provider: "apple",
      merchantName: "ACME Inc.",
      domainNames: [
        "example.com",
      ],
      activeCertificateCount: 2,
      pendingCertificateCount: 1,
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.DigitalWallet](../../models/components/digitalwallet.md)[] | :heavy_check_mark:                                                     | A list of items returned for this request.                             |