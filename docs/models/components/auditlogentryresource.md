# AuditLogEntryResource

## Example Usage

```typescript
import { AuditLogEntryResource } from "@gr4vy/sdk/models/components";

let value: AuditLogEntryResource = {
  type: "user",
  id: "d0f98bc9-8915-413c-a1de-d853eb658c1b",
  name: "Jane Zoe",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `type`                                | *string*                              | :heavy_check_mark:                    |  The type of the resource.            | user                                  |
| `id`                                  | *string*                              | :heavy_check_mark:                    | The ID of the resource.               | d0f98bc9-8915-413c-a1de-d853eb658c1b  |
| `name`                                | *string*                              | :heavy_check_mark:                    | The descriptive name of the resource. | Jane Zoe                              |