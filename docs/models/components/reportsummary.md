# ReportSummary

## Example Usage

```typescript
import { ReportSummary } from "@gr4vy/sdk/models/components";

let value: ReportSummary = {
  id: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
  merchantAccountId: "merchant-account-12345",
  name: "Monthly Transaction Report",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Always `report`.                                                             | report                                                                       |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The unique ID for the report.                                                | a1b2c3d4-5678-90ab-cdef-1234567890ab                                         |
| `merchantAccountId`                                                          | *string*                                                                     | :heavy_check_mark:                                                           | The merchant account ID this report belongs to.                              | merchant-account-12345                                                       |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The name of the report.                                                      | Monthly Transaction Report                                                   |
| `creatorId`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | The ID of the user who created the report.                                   | d290f1ee-6c54-4b01-90e6-d701748f0851                                         |
| `creatorDisplayName`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | The display name of the report creator.                                      | Jane Doe                                                                     |
| `creatorType`                                                                | [components.ReportCreatorType](../../models/components/reportcreatortype.md) | :heavy_minus_sign:                                                           | The type of the report creator.                                              | user                                                                         |