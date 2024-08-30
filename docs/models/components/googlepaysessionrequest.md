# GooglePaySessionRequest

Initiates a new session with Google Pay.

## Example Usage

```typescript
import { GooglePaySessionRequest } from "@gr4vy/sdk/models/components";

let value: GooglePaySessionRequest = {
    originDomain: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `originDomain`                               | *string*                                     | :heavy_check_mark:                           | Fully qualified domain name of the merchant. |