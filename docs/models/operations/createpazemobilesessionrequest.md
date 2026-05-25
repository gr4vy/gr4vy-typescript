# CreatePazeMobileSessionRequest

## Example Usage

```typescript
import { CreatePazeMobileSessionRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePazeMobileSessionRequest = {
  pazeMobileSessionCreateRequest: {
    client: {
      id: "0UVAS9Y03YNJ39XXYIN313F4DZNCjIGmqs4Iw32EPnZV0800o",
    },
    sessionId: "24e4dbb9-4f5e-43e8-8375-e9fd45650bc9",
    accessToken: "<value>",
    callbackURLScheme: "Gr4vyCallback",
    intent: "EXPRESS_CHECKOUT",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `merchantAccountId`                                                                                    | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The ID of the merchant account to use for this request.                                                |
| `pazeMobileSessionCreateRequest`                                                                       | [components.PazeMobileSessionCreateRequest](../../models/components/pazemobilesessioncreaterequest.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |