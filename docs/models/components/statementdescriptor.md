# StatementDescriptor

Information to show the user on their payments statement

## Example Usage

```typescript
import { StatementDescriptor } from "@gr4vy/sdk/models/components";

let value: StatementDescriptor = {
    phoneNumber: "+14155552671",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |                    |
| `description`      | *string*           | :heavy_minus_sign: | N/A                |                    |
| `city`             | *string*           | :heavy_minus_sign: | N/A                |                    |
| `phoneNumber`      | *string*           | :heavy_minus_sign: | N/A                | +14155552671       |
| `url`              | *string*           | :heavy_minus_sign: | N/A                |                    |