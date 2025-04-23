# OrderBy

The direction to sort the payment methods in.

## Example Usage

```typescript
import { OrderBy } from "@gr4vy/sdk/models/operations";

let value: OrderBy = "desc";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"asc" | "desc" | Unrecognized<string>
```