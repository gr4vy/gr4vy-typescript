# Outcome

The outcome of the action.

## Example Usage

```typescript
import { Outcome } from "@gr4vy/sdk/models/components";

let value: Outcome = {
    type: "list",
    result: ["card", "paypal"],
};
```

## Supported Types

### `components.BooleanOutcome`

```typescript
const value: components.BooleanOutcome = /* values here */
```

### `components.PaymentMethodOutcome`

```typescript
const value: components.PaymentMethodOutcome = /* values here */
```

### `components.PaymentServiceOutcome`

```typescript
const value: components.PaymentServiceOutcome = /* values here */
```

### `components.UUIDsListOutcome`

```typescript
const value: components.UUIDsListOutcome = /* values here */
```

