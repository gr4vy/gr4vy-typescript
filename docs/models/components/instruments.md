# Instruments

The name of the instrument to be used to process the transaction.
For `pan`, if a Payment Service token is available, the API will use that
for stored payment methods.


## Example Usage

```typescript
import { Instruments } from "@gr4vy/sdk/models/components";

let value: Instruments = "network_token";
```

## Values

```typescript
"network_token" | "pan"
```