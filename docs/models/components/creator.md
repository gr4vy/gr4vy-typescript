# Creator

The user who created the Vault Forward authentication method.

## Example Usage

```typescript
import { Creator } from "@gr4vy/sdk/models/components";

let value: Creator = {
    id: "77a76f7e-d2de-4bbc-ada9-d6a0015e6bd5",
    name: "John L",
    emailAddress: "john@example.com",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_minus_sign:                   | The ID of the user.                  | 77a76f7e-d2de-4bbc-ada9-d6a0015e6bd5 |
| `name`                               | *string*                             | :heavy_minus_sign:                   | The name of the user.                | John L                               |
| `emailAddress`                       | *string*                             | :heavy_minus_sign:                   | The email address for this user.     | john@example.com                     |