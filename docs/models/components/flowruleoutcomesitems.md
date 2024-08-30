# FlowRuleOutcomesItems

## Example Usage

```typescript
import { FlowRuleOutcomesItems } from "@gr4vy/sdk/models/components";

let value: FlowRuleOutcomesItems = {
    type: "transaction-route",
    id: "24c8211d-b9d9-4b06-8aa9-f350fd0ffd15",
    label: "Stripe",
    countries: ["US", "GB"],
    currencies: ["USD", "GBP"],
    instruments: ["network_token"],
    transformations: [
        {
            name: "use_additional_scheme",
        },
    ],
    networkTokensEnabled: false,
    networkTokensSetupForMerchant: true,
    openLoop: true,
};
```

## Supported Types

### `components.FlowPaymentOptionOutcome`

```typescript
const value: components.FlowPaymentOptionOutcome = /* values here */
```

### `components.FlowCardTransactionRoutingOutcome`

```typescript
const value: components.FlowCardTransactionRoutingOutcome = /* values here */
```

### `components.FlowRedirectTransactionRoutingOutcome`

```typescript
const value: components.FlowRedirectTransactionRoutingOutcome = /* values here */
```

