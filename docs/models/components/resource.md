# Resource

The resource that was changed.

## Example Usage

```typescript
import { Resource } from "@gr4vy/sdk/models/components";

let value: Resource = {
    type: "buyer",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    name: "Samuel J",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `type`                                | *string*                              | :heavy_minus_sign:                    | The type of the resource.             | buyer                                 |
| `id`                                  | *string*                              | :heavy_minus_sign:                    | The ID of the resource.               | fe26475d-ec3e-4884-9553-f7356683f7f9  |
| `name`                                | *string*                              | :heavy_minus_sign:                    | The descriptive name of the resource. | Samuel J                              |