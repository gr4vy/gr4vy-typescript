# CreatePaymentMethodBody


## Supported Types

### `components.CardPaymentMethodCreate`

```typescript
const value: components.CardPaymentMethodCreate = {
  expirationDate: "12/30",
  number: "4111111111111111",
};
```

### `components.RedirectPaymentMethodCreate`

```typescript
const value: components.RedirectPaymentMethodCreate = {
  method: "paypal",
  country: "DE",
  currency: "EUR",
  redirectUrl: "https://oblong-convection.name",
};
```

### `components.CheckoutSessionPaymentMethodCreate`

```typescript
const value: components.CheckoutSessionPaymentMethodCreate = {
  id: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
};
```

### `components.PlaidPaymentMethodCreate`

```typescript
const value: components.PlaidPaymentMethodCreate = {
  token: "public-sandbox-7147ceee-816c-4272-a7f4-544f5c3d4d16",
};
```

