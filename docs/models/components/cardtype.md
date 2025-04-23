# CardType

## Example Usage

```typescript
import { CardType } from "@gr4vy/sdk/models/components";

let value: CardType = "credit";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"credit" | "debit" | "prepaid" | Unrecognized<string>
```