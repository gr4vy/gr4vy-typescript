# ConfirmApplePayCertificateRequest

## Example Usage

```typescript
import { ConfirmApplePayCertificateRequest } from "@gr4vy/sdk/models/operations";
import { openAsBlob } from "node:fs";

let value: ConfirmApplePayCertificateRequest = {
    applePayCertificateId: "28227b2d-3094-470b-b7a4-fa87cf535a6f",
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