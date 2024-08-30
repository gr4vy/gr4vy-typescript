# RolePermissions

The permissions associated with a role.

## Example Usage

```typescript
import { RolePermissions } from "@gr4vy/sdk/models/components";

let value: RolePermissions = {
    allow: ["buyers.read", "payment-methods.read", "transactions.read"],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `allow`                                                        | *string*[]                                                     | :heavy_minus_sign:                                             | The list of permissions to allow for a role.                   | [<br/>"buyers.read",<br/>"payment-methods.read",<br/>"transactions.read"<br/>] |