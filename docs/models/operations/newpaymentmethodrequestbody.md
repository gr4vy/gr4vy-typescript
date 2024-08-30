# NewPaymentMethodRequestBody

## Example Usage

```typescript
import { NewPaymentMethodRequestBody } from "@gr4vy/sdk/models/operations";

let value: NewPaymentMethodRequestBody = {
    method: "card",
    number: "4111111111111111",
    expirationDate: "11/25",
    securityCode: "123",
    externalIdentifier: "card-323444",
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    buyerExternalIdentifier: "user-789123",
    redirectUrl: "https://example.com/callback",
};
```

## Supported Types

### `components.CardRequest`

```typescript
const value: components.CardRequest = /* values here */
```

### `components.RedirectRequest`

```typescript
const value: components.RedirectRequest = /* values here */
```

### `components.CheckoutSessionRequest`

```typescript
const value: components.CheckoutSessionRequest = /* values here */
```

