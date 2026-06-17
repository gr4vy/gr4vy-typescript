# DefinitionFieldFormat

## Example Usage

```typescript
import { DefinitionFieldFormat } from "@gr4vy/sdk/models/components";

let value: DefinitionFieldFormat = "number";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"text" | "multiline" | "file" | "number" | "timezone" | "boolean" | Unrecognized<string>
```