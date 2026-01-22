# PurposeCode

## Example Usage

```typescript
import { PurposeCode } from "@gr4vy/sdk/models/components";

let value: PurposeCode = "mortgage";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"mortgage" | "utility" | "loan" | "dependant_support" | "gambling" | "retail" | "salary" | "personal" | "government" | "pension" | "tax" | "other" | Unrecognized<string>
```