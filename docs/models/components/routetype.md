# RouteType

## Example Usage

```typescript
import { RouteType } from "@gr4vy/sdk/models/components";

let value: RouteType = "round_trip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"round_trip" | "one_way" | Unrecognized<string>
```