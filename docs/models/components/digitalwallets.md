# DigitalWallets

A list of registered digital wallets.

## Example Usage

```typescript
import { DigitalWallets } from "@gr4vy/sdk/models/components";

let value: DigitalWallets = {
    items: [
        {
            type: "digital-wallet",
            id: "8d3fe99b-1422-42e6-bbb3-932d95ae5f79",
            merchantAccountId: "default",
            provider: "apple",
            merchantName: "Gr4vy",
            merchantUrl: "https://example.com",
            merchantDisplayName: "Gr4vy",
            merchantCountryCode: "US",
            domainNames: ["example.com"],
            createdAt: new Date("2012-12-12T10:53:43+00:00"),
            updatedAt: new Date("2012-12-12T10:53:43+00:00"),
            activeCertificateCount: 1,
            pendingCertificateCount: 1,
            expiredCertificateCount: 1,
        },
    ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.DigitalWallet](../../models/components/digitalwallet.md)[] | :heavy_minus_sign:                                                     | A list of registered digital wallets.                                  |