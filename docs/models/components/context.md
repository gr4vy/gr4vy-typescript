# Context


## Supported Types

### `components.WalletPaymentOptionContext`

```typescript
const value: components.WalletPaymentOptionContext = {
  merchantName: "<value>",
  supportedSchemes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `components.GooglePayPaymentOptionContext`

```typescript
const value: components.GooglePayPaymentOptionContext = {
  merchantName: "<value>",
  supportedSchemes: [
    "<value 1>",
    "<value 2>",
  ],
  gateway: "<value>",
  gatewayMerchantId: "<id>",
};
```

### `components.PaymentOptionContext`

```typescript
const value: components.PaymentOptionContext = {
  redirectRequiresPopup: false,
  requiresTokenizedRedirectPopup: true,
};
```

