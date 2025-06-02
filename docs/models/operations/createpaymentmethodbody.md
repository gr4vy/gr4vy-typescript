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
  method: "zippay",
  country: "GB",
  currency: "EUR",
  redirectUrl: "https://troubled-scale.name/",
};
```

### `components.CheckoutSessionPaymentMethodCreate`

```typescript
const value: components.CheckoutSessionPaymentMethodCreate = {
  id: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
};
```

