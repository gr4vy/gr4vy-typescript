# IntegrationClient

## Example Usage

```typescript
import { IntegrationClient } from "@gr4vy/sdk/models/components";

let value: IntegrationClient = "web";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"redirect" | "web" | "android" | "ios" | Unrecognized<string>
```