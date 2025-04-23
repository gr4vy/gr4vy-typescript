# AgeGroup

## Example Usage

```typescript
import { AgeGroup } from "@gr4vy/sdk/models/components";

let value: AgeGroup = "adult";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"adult" | "infant" | Unrecognized<string>
```