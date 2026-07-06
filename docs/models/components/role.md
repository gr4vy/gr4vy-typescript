# Role

## Example Usage

```typescript
import { Role } from "@gr4vy/sdk/models/components";

let value: Role = {
  id: "44989d00-7bbd-498c-a44b-eef9bea9c6c6",
  name: "<value>",
  description:
    "see bah barring unaware rally indeed symbolise federate uneven bah",
  permissions: {
    allow: [],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | *"role"*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `description`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `permissions`                                                        | [components.PermissionSet](../../models/components/permissionset.md) | :heavy_check_mark:                                                   | N/A                                                                  |