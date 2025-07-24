# TravelHubCustomData

## Example Usage

```typescript
import { TravelHubCustomData } from "@gr4vy/sdk/models/components";

let value: TravelHubCustomData = {
  name: "user_id",
  value: "user-123",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `name`                              | *string*                            | :heavy_check_mark:                  | The key of the custom data field.   | user_id                             |
| `value`                             | *string*                            | :heavy_check_mark:                  | The value of the custom data field. | user-123                            |
| `type`                              | *string*                            | :heavy_minus_sign:                  | The type of the custom data field.  |                                     |