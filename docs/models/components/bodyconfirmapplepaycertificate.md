# BodyConfirmApplePayCertificate

## Example Usage

```typescript
import { BodyConfirmApplePayCertificate } from "@gr4vy/sdk/models/components";
import { openAsBlob } from "node:fs";

let value: BodyConfirmApplePayCertificate = {
    file: await openAsBlob("./sample-file"),
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file`                                                                                                                                                                               | [File](https://developer.mozilla.org/en-US/docs/Web/API/File) \| [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) \| [components.FileT](../../models/components/filet.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |