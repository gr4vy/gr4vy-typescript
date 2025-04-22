# ErrorDetail

## Example Usage

```typescript
import { ErrorDetail } from "@gr4vy/sdk/models/components";

let value: ErrorDetail = {
  location: "header",
  pointer: "<value>",
  message: "Unknown ISO 4217 currency code: USX",
  type: "value_error",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `location`                                                           | [components.ErrorLocation](../../models/components/errorlocation.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
| `pointer`                                                            | *string*                                                             | :heavy_check_mark:                                                   | A JSON pointer for the particular property that caused the error.    |                                                                      |
| `message`                                                            | *string*                                                             | :heavy_check_mark:                                                   | A human-readdable explanation of the error.                          | Unknown ISO 4217 currency code: USX                                  |
| `type`                                                               | *string*                                                             | :heavy_check_mark:                                                   | The type of error that was raised for this property.                 | value_error                                                          |