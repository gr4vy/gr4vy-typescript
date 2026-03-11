# UserDevice

The platform that is being used to access the website.

## Example Usage

```typescript
import { UserDevice } from "@gr4vy/sdk/models/components";

let value: UserDevice = "desktop";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"desktop" | "mobile" | Unrecognized<string>
```