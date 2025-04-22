# TransactionCreatePaymentMethod

The optional payment method to use for this transaction. This field is required if no `gift_cards` have been added.


## Supported Types

### `components.CardWithUrlPaymentMethodCreate`

```typescript
const value: components.CardWithUrlPaymentMethodCreate = {
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

### `components.TokenPaymentMethodCreate`

```typescript
const value: components.TokenPaymentMethodCreate = {
  id: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  securityCode: "123",
};
```

### `components.ApplePayPaymentMethodCreate`

```typescript
const value: components.ApplePayPaymentMethodCreate = {
  buyerExternalIdentifier: "buyer-12345",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  cardholderName: "John Luhn",
  cardSuffix: "1234",
  cardScheme: "visa",
  cardType: "credit",
  token: {
    "paymentData": {
      "data":
        "fU2SY4yjz/F8YkFMPjlbsY5uuIK3glAb3bJw2PZOSMld41CDqbGwBIXw6rVIPIzSvPtGoDwmWvzOT1AG8iOxPknMpaZmg4OKis/CtNpTNIbLR8VwuRzK3O7iffLiA17rnV8osXycxZPQrwSJIQl8XSMHfaU4bJW/X6hAlMiHJv5g22F7kFKNQyAkL3yX1F9Q4pZK8T9JW/jXoho30njRllrI+swinZ7Hyk4KaYw65HeAiPSWbPqWQZcjJX074CSk8y41nfTyCu+WoQnOpgMruRZS2AoxRc/cgk1/1tjwqDT4dyPRxZLZjyn7lHGTbIxZjrQ8kvSFcY6V4BxgMJqgEoZrxljS8cY7BBmUadGK7tkTp4oGCPvQ8RxPxPIfEU+7LAg8t1BBP+8yEVGOHGlBVRuiav/JYYq1xgIc/PFHTYw=",
      "header": {
        "ephemeralPublicKey":
          "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEgu7sidxY7MBgu5TPZdLJk4as3VnQ8IAD+qX0KLemH0rP+Nw0O9CdiNjAlYdtIvyfAgj7Lo7cB5ZQvjR3HsOR1w==",
        "publicKeyHash": "lfaT/5QFZe4Cnb1T4j3hsgLJJdtVvMhfB/4EBx9rOQI=",
        "transactionId":
          "bf84ca75845426f3faa1bdb30d07db9ef1cf68bdff766c57b44e45e0780d0b83",
      },
      "signature":
        "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",
      "version": "EC_v1",
    },
    "paymentMethod": {
      "displayName": "Visa 0224",
      "network": "Visa",
      "type": "debit",
    },
    "transactionIdentifier":
      "bf84ca75845426f3faa1bdb30d07db9ef1cf68bdff766c57b44e45e0780d0b83",
  },
};
```

### `components.ClickToPayPaymentMethodCreate`

```typescript
const value: components.ClickToPayPaymentMethodCreate = {
  token: "4111123456789012",
  cryptogram: "A3F9C2D47E1B56A9",
  expirationDate: "12/30",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  buyerExternalIdentifier: "buyer-12345",
  externalIdentifier: "payment-method-12345",
};
```

### `components.ClickToPayFPANPaymentMethodCreate`

```typescript
const value: components.ClickToPayFPANPaymentMethodCreate = {
  expirationDate: "12/30",
  number: "4111111111111111",
  buyerExternalIdentifier: "buyer-12345",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  externalIdentifier: "payment-method-12345",
  cardType: "credit",
  securityCode: "123",
};
```

### `components.GooglePayPaymentMethodCreate`

```typescript
const value: components.GooglePayPaymentMethodCreate = {
  buyerExternalIdentifier: "buyer-12345",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  cardholderName: "John Luhn",
  cardSuffix: "1234",
  cardScheme: "visa",
  cardType: "credit",
  token: "{\"signature\":\"MEUCIEg4a4A+pu+AUjgVjBpfz9msLqQOkT5kz7htz...",
  assuranceDetails: {
    accountVerified: true,
    cardHolderAuthenticated: true,
  },
};
```

### `components.GooglePayFPANPaymentMethodCreate`

```typescript
const value: components.GooglePayFPANPaymentMethodCreate = {
  expirationDate: "12/30",
  number: "4111111111111111",
  buyerExternalIdentifier: "buyer-12345",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  externalIdentifier: "payment-method-12345",
  cardType: "credit",
  securityCode: "123",
};
```

### `components.NetworkTokenPaymentMethodCreate`

```typescript
const value: components.NetworkTokenPaymentMethodCreate = {
  token: "4111123456789012",
  expirationDate: "12/30",
  cryptogram: "A3F9C2D47E1B56A9",
  cardSource: "apple-pay",
  cardScheme: "visa",
  cardSuffix: "1234",
  cardholderName: "John Luhn",
  eci: "05",
};
```

### `components.CheckoutSessionWithUrlPaymentMethodCreate`

```typescript
const value: components.CheckoutSessionWithUrlPaymentMethodCreate = {
  id: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
  externalIdentifier: "card-12345",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  buyerExternalIdentifier: "buyer-12345",
};
```

