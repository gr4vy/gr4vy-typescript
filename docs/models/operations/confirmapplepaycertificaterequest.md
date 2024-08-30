# ConfirmApplePayCertificateRequest

## Example Usage

```typescript
import { ConfirmApplePayCertificateRequest } from "@gr4vy/sdk/models/operations";
import { openAsBlob } from "node:fs";

let value: ConfirmApplePayCertificateRequest = {
    applePayCertificateId: "9dfc94d6-fecd-4799-b900-66a6d2d00035",
    bodyConfirmApplePayCertificate: {
        file: await openAsBlob("./sample-file"),
    },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `applePayCertificateId`                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `bodyConfirmApplePayCertificate`                                                                       | [components.BodyConfirmApplePayCertificate](../../models/components/bodyconfirmapplepaycertificate.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |