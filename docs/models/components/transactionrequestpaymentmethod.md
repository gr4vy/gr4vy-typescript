# TransactionRequestPaymentMethod

The optional payment method to use for this transaction. This field is required if no `gift_cards` have been added.

## Example Usage

```typescript
import { TransactionRequestPaymentMethod } from "@gr4vy/sdk/models/components";

let value: TransactionRequestPaymentMethod = {
    method: "id",
    id: "46973e9d-88a7-44a6-abfe-be4ff0134ff4",
    redirectUrl: "https://example.com/callback",
    securityCode: "123",
};
```

## Supported Types

### `components.PaymentMethodCard`

```typescript
const value: components.PaymentMethodCard = /* values here */
```

### `components.Redirect`

```typescript
const value: components.Redirect = /* values here */
```

### `components.StoredPaymentMethodRequest`

```typescript
const value: components.StoredPaymentMethodRequest = /* values here */
```

### `components.ApplePayPaymentMethodRequest`

```typescript
const value: components.ApplePayPaymentMethodRequest = /* values here */
```

### `components.GooglePayPaymentMethodRequest`

```typescript
const value: components.GooglePayPaymentMethodRequest = /* values here */
```

### `components.PaymentMethodCheckoutSession`

```typescript
const value: components.PaymentMethodCheckoutSession = /* values here */
```

### `components.NetworkTokenPaymentMethodRequest`

```typescript
const value: components.NetworkTokenPaymentMethodRequest = /* values here */
```

### `components.ApplePayDecryptedToken`

```typescript
const value: components.ApplePayDecryptedToken = /* values here */
```

### `components.GooglePayDecryptedToken`

```typescript
const value: components.GooglePayDecryptedToken = /* values here */
```

