# PazeSessionCompleteRequestTransactiontype

The type of transaction being completed. PURCHASE for a one-off checkout, CARD_ON_FILE to retain the card for future use, or BOTH.

## Example Usage

```typescript
import { PazeSessionCompleteRequestTransactiontype } from "@gr4vy/sdk/models/components";

let value: PazeSessionCompleteRequestTransactiontype = "PURCHASE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PURCHASE" | "CARD_ON_FILE" | "BOTH" | Unrecognized<string>
```