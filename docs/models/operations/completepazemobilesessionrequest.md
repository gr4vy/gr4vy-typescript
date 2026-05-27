# CompletePazeMobileSessionRequest

## Example Usage

```typescript
import { CompletePazeMobileSessionRequest } from "@gr4vy/sdk/models/operations";

let value: CompletePazeMobileSessionRequest = {
  pazeSessionCompleteRequest: {
    sessionId: "7c1cba03-d20e-4a3f-9d77-e5dc23a39ac2",
    code: "eyJhdWQiOm51bGwsImtpZCI6IjE3...",
    accessToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
    transactionType: "PURCHASE",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `merchantAccountId`                                                                            | *string*                                                                                       | :heavy_minus_sign:                                                                             | The ID of the merchant account to use for this request.                                        |
| `pazeSessionCompleteRequest`                                                                   | [components.PazeSessionCompleteRequest](../../models/components/pazesessioncompleterequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |