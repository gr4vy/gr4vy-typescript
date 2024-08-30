# FileT

## Example Usage

```typescript
import { FileT } from "@gr4vy/sdk/models/components";

let value: FileT = {
    fileName: "your_file_here",
    content: new TextEncoder().encode("0x997FC7E81A"),
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `fileName`         | *string*           | :heavy_check_mark: | N/A                |
| `content`          | *Uint8Array*       | :heavy_check_mark: | N/A                |