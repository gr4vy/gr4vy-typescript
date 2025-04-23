# UserDevice

The platform that is being used to access the website.

## Example Usage

```typescript
import { UserDevice } from "@gr4vy/sdk/models/components";

let value: UserDevice = "desktop";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"desktop" | "mobile" | Unrecognized<string>
```