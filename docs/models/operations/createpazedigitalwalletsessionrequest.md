# CreatePazeDigitalWalletSessionRequest

## Example Usage

```typescript
import { CreatePazeDigitalWalletSessionRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePazeDigitalWalletSessionRequest = {
  pazeSessionRequest: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `merchantAccountId`                                                            | *string*                                                                       | :heavy_minus_sign:                                                             | The ID of the merchant account to use for this request.                        |
| `pazeSessionRequest`                                                           | [components.PazeSessionRequest](../../models/components/pazesessionrequest.md) | :heavy_check_mark:                                                             | N/A                                                                            |