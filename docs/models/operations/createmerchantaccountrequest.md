# CreateMerchantAccountRequest

## Example Usage

```typescript
import { CreateMerchantAccountRequest } from "@gr4vy/sdk/models/operations";

let value: CreateMerchantAccountRequest = {
  merchantAccountCreate: {
    id: "merchant-12345",
    displayName: "Example",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `applicationName`                                                                    | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `merchantAccountCreate`                                                              | [components.MerchantAccountCreate](../../models/components/merchantaccountcreate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |