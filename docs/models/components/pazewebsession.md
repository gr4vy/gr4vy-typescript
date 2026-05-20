# PazeWebSession

## Example Usage

```typescript
import { PazeWebSession } from "@gr4vy/sdk/models/components";

let value: PazeWebSession = {
  id: "W8GT9RLCNME754Z7025613H3PDM2T4HF2CSAOi9w2kkP3D4S0",
  name: "ACME",
  profileId: "550e8400-e29b-41d4-a716-446655440000",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The Paze merchant data ID.                        | W8GT9RLCNME754Z7025613H3PDM2T4HF2CSAOi9w2kkP3D4S0 |
| `name`                                            | *string*                                          | :heavy_check_mark:                                | The merchant display name.                        | ACME                                              |
| `profileId`                                       | *string*                                          | :heavy_check_mark:                                | The Paze profile ID for the given domain.         | 550e8400-e29b-41d4-a716-446655440000              |