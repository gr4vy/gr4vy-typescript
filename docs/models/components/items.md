# Items

## Example Usage

```typescript
import { Items } from "@gr4vy/sdk/models/components";

let value: Items = {
  type: "transaction-event",
  id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  name: "payment-connector-response-transaction-capture-failed",
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
  context: {
    paymentServiceTransactionId: "transaction-1234",
    code: "INVALID DATA",
    rawResponseCode: "incorrect-zip",
    rawResponseDescription: "The card's postal code is incorrect. Check the card's postal code or use a
  different card.",
    avsResponseCode: "partial_match_address",
    cvvResponseCode: "match",
    paymentMethodScheme: "visa",
  },
};
```

## Supported Types

### `components.BINLookupRequest`

```typescript
const value: components.BINLookupRequest = /* values here */
```

### `components.ThreeDSecureAuthenticationRequestEvent`

```typescript
const value: components.ThreeDSecureAuthenticationRequestEvent = /* values here */
```

### `components.ThreeDSecureSuccessEvent`

```typescript
const value: components.ThreeDSecureSuccessEvent = /* values here */
```

### `components.ThreeDSecureRequestErrorEvent`

```typescript
const value: components.ThreeDSecureRequestErrorEvent = /* values here */
```

### `components.ThreeDSecurePreparationRequestEvent`

```typescript
const value: components.ThreeDSecurePreparationRequestEvent = /* values here */
```

### `components.ThreeDSecureResultRequestEvent`

```typescript
const value: components.ThreeDSecureResultRequestEvent = /* values here */
```

### `components.AntiFraudDecisionEvent`

```typescript
const value: components.AntiFraudDecisionEvent = /* values here */
```

### `components.AntiFraudDecisionErrorEvent`

```typescript
const value: components.AntiFraudDecisionErrorEvent = /* values here */
```

### `components.AntiFraudDecisionSkippedEvent`

```typescript
const value: components.AntiFraudDecisionSkippedEvent = /* values here */
```

### `components.AntiFraudDecisionUpdateEvent`

```typescript
const value: components.AntiFraudDecisionUpdateEvent = /* values here */
```

### `components.AntiFraudDecisionUpdateErrorEvent`

```typescript
const value: components.AntiFraudDecisionUpdateErrorEvent = /* values here */
```

### `components.AntiFraudTransactionStatusUpdateEvent`

```typescript
const value: components.AntiFraudTransactionStatusUpdateEvent = /* values here */
```

### `components.AntiFraudTransactionStatusUpdateErrorEvent`

```typescript
const value: components.AntiFraudTransactionStatusUpdateErrorEvent = /* values here */
```

### `components.AntiFraudWebhookEvent`

```typescript
const value: components.AntiFraudWebhookEvent = /* values here */
```

### `components.DigitalWalletApplePayTokenDecrypted`

```typescript
const value: components.DigitalWalletApplePayTokenDecrypted = /* values here */
```

### `components.DigitalWalletClickToPayTokenDecrypted`

```typescript
const value: components.DigitalWalletClickToPayTokenDecrypted = /* values here */
```

### `components.DigitalWalletGooglePayTokenDecrypted`

```typescript
const value: components.DigitalWalletGooglePayTokenDecrypted = /* values here */
```

### `components.GiftCardRedemptionFailed`

```typescript
const value: components.GiftCardRedemptionFailed = /* values here */
```

### `components.GiftCardRedemptionSucceeded`

```typescript
const value: components.GiftCardRedemptionSucceeded = /* values here */
```

### `components.GiftCardRefundFailed`

```typescript
const value: components.GiftCardRefundFailed = /* values here */
```

### `components.GiftCardRefundSucceeded`

```typescript
const value: components.GiftCardRefundSucceeded = /* values here */
```

### `components.NetworkTokenCryptogramProvisionFailed`

```typescript
const value: components.NetworkTokenCryptogramProvisionFailed = /* values here */
```

### `components.NetworkTokenCryptogramProvisionSucceeded`

```typescript
const value: components.NetworkTokenCryptogramProvisionSucceeded = /* values here */
```

### `components.NetworkTokenProvisionFailed`

```typescript
const value: components.NetworkTokenProvisionFailed = /* values here */
```

### `components.NetworkTokenProvisionSucceeded`

```typescript
const value: components.NetworkTokenProvisionSucceeded = /* values here */
```

### `components.PaymentConnectorResponseTransactionAuthorizationSucceededEvent`

```typescript
const value: components.PaymentConnectorResponseTransactionAuthorizationSucceededEvent = /* values here */
```

### `components.PaymentConnectorResponseTransactionDeclinedEvent`

```typescript
const value: components.PaymentConnectorResponseTransactionDeclinedEvent = /* values here */
```

### `components.PaymentConnectorResponseTransactionAuthorizationFailedEvent`

```typescript
const value: components.PaymentConnectorResponseTransactionAuthorizationFailedEvent = /* values here */
```

### `components.PaymentConnectorResponseTransactionCaptureDeclinedEvent`

```typescript
const value: components.PaymentConnectorResponseTransactionCaptureDeclinedEvent = /* values here */
```

### `components.PaymentConnectorResponseTransactionCaptureFailedEvent`

```typescript
const value: components.PaymentConnectorResponseTransactionCaptureFailedEvent = /* values here */
```

### `components.PaymentConnectorResponseTransactionCaptureSucceededEvent`

```typescript
const value: components.PaymentConnectorResponseTransactionCaptureSucceededEvent = /* values here */
```

### `components.PaymentConnectorResponseTransactionVoidDeclinedEvent`

```typescript
const value: components.PaymentConnectorResponseTransactionVoidDeclinedEvent = /* values here */
```

### `components.PaymentConnectorResponseTransactionVoidFailedEvent`

```typescript
const value: components.PaymentConnectorResponseTransactionVoidFailedEvent = /* values here */
```

### `components.PaymentConnectorResponseTransactionVoidSucceededEvent`

```typescript
const value: components.PaymentConnectorResponseTransactionVoidSucceededEvent = /* values here */
```

### `components.PaymentConnectorExternalTransactionRequest`

```typescript
const value: components.PaymentConnectorExternalTransactionRequest = /* values here */
```

