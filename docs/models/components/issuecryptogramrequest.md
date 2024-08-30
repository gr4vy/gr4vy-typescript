# IssueCryptogramRequest

Request body for issue a cryptogram for a network token.

## Example Usage

```typescript
import { IssueCryptogramRequest } from "@gr4vy/sdk/models/components";

let value: IssueCryptogramRequest = {
    merchantInitiated: false,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `merchantInitiated`                                  | *boolean*                                            | :heavy_minus_sign:                                   | Defines if the request is merchant initiated or not. | false                                                |