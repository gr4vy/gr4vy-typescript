# Locale

## Example Usage

```typescript
import { Locale } from "@gr4vy/sdk/models/components";

let value: Locale = "en";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"en" | "en-GB" | "pt" | "pt-BR" | "es" | Unrecognized<string>
```