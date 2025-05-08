# DefinitionFieldFormat

## Example Usage

```typescript
import { DefinitionFieldFormat } from "@gr4vy/sdk/models/components";

let value: DefinitionFieldFormat = "timezone";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "multiline" | "number" | "timezone" | "boolean" | Unrecognized<string>
```