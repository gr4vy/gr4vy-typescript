# DigitalWalletProvider

## Example Usage

```typescript
import { DigitalWalletProvider } from "@gr4vy/sdk/models/components";

let value: DigitalWalletProvider = "click-to-pay";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"apple" | "google" | "click-to-pay" | Unrecognized<string>
```