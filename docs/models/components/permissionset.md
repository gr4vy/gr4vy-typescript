# PermissionSet

The permissions granted by a role.

## Example Usage

```typescript
import { PermissionSet } from "@gr4vy/sdk/models/components";

let value: PermissionSet = {
  allow: [
    "transactions.read",
    "reports.read",
  ],
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `allow`                                 | *string*[]                              | :heavy_check_mark:                      | The scopes granted by this role.        | [<br/>"transactions.read",<br/>"reports.read"<br/>] |