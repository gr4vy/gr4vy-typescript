# TransactionInstrumentType

The name of the instrument used to process the transaction.

## Example Usage

```typescript
import { TransactionInstrumentType } from "@gr4vy/sdk/models/components";

let value: TransactionInstrumentType = "pan";
```

## Values

```typescript
"pan" | "card_token" | "redirect" | "redirect_token" | "googlepay" | "applepay" | "network_token"
```