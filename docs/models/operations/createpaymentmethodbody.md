# CreatePaymentMethodBody


## Supported Types

### `components.CardPaymentMethodCreate`

```typescript
const value: components.CardPaymentMethodCreate = {
  expirationDate: "12/30",
  number: "4111111111111111",
  buyerExternalIdentifier: "buyer-12345",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  externalIdentifier: "payment-method-12345",
  cardType: "credit",
  securityCode: "123",
};
```

### `components.RedirectPaymentMethodCreate`

```typescript
const value: components.RedirectPaymentMethodCreate = {
  method: "zippay",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  buyerExternalIdentifier: "buyer-12345",
  country: "GB",
  currency: "EUR",
  redirectUrl: "https://troubled-scale.name/",
  externalIdentifier: "payment-method-12345",
};
```

### `components.CheckoutSessionPaymentMethodCreate`

```typescript
const value: components.CheckoutSessionPaymentMethodCreate = {
  id: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
  externalIdentifier: "card-12345",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  buyerExternalIdentifier: "buyer-12345",
};
```

