# Name

The specific event name.

## Example Usage

```typescript
import { Name } from "@gr4vy/sdk/models/components";

let value: Name = "transaction-api-request";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"transaction-updated-status" | "transaction-sync-event" | "transaction-sync-failed-event" | "transaction-modified-event" | "transaction-api-request" | "transaction-api-response" | "bin-lookup-request" | "three-d-secure-success" | "three-d-secure-request-error" | "three-d-secure-preparation-request" | "three-d-secure-authentication-request" | "three-d-secure-result-request" | "anti-fraud-decision" | "anti-fraud-decision-error" | "anti-fraud-decision-skipped" | "anti-fraud-webhook" | "anti-fraud-transaction-status-update" | "anti-fraud-transaction-status-update-error" | "anti-fraud-decision-update" | "anti-fraud-decision-update-error" | "gift-card-redemption-succeeded" | "gift-card-redemption-failed" | "gift-card-refund-succeeded" | "gift-card-refund-failed" | "gift-card-reversal-succeeded" | "payment-connector-response-transaction-authorization-succeeded" | "payment-connector-response-transaction-capture-succeeded" | "payment-connector-response-transaction-authorization-failed" | "payment-connector-response-transaction-declined" | "payment-connector-response-transaction-capture-failed" | "payment-connector-response-transaction-capture-declined" | "payment-connector-response-transaction-void-succeeded" | "payment-connector-response-transaction-void-declined" | "payment-connector-response-transaction-void-failed" | "payment-connector-external-transaction-request" | "payment-connector-report-transaction-settled" | "digital-wallet-apple-pay-token-decrypted" | "digital-wallet-google-pay-token-decrypted" | "digital-wallet-click-to-pay-token-decrypted" | "network-token-provision-succeeded" | "network-token-provision-failed" | "network-token-cryptogram-provision-succeeded" | "network-token-cryptogram-provision-failed" | "the-giving-block-transaction-conversion-succeeded" | "real-time-account-update" | Unrecognized<string>
```