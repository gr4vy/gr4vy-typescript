# ThreeDSecureScenarios

## Example Usage

```typescript
import { ThreeDSecureScenarios } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureScenarios = {
  items: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ThreeDSecureScenario](../../models/components/threedsecurescenario.md)[] | :heavy_check_mark:                                                                   | A list of items returned for this request.                                           |                                                                                      |
| `limit`                                                                              | *number*                                                                             | :heavy_minus_sign:                                                                   | The number of items for this page.                                                   | 20                                                                                   |
| `nextCursor`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | The cursor pointing at the next page of items.                                       | ZXhhbXBsZTE                                                                          |
| `previousCursor`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | The cursor pointing at the previous page of items.                                   | Xkjss7asS                                                                            |