# UpdateFlowRulePathParamAction

Action for the given rule. Actions can only be used in
flows that support them.

* The `checkout` flow only supports the
`select-payment-options` action.
* The `card-transaction` supports the `route-transaction`,
`skip-3ds`, and `decline-early` actions.
* The `non-card-transaction` flow only supports the
`decline-early` action.
* The `redirect-transaction` flow only supports
the `route-transaction` action.


## Example Usage

```typescript
import { UpdateFlowRulePathParamAction } from "@gr4vy/sdk/models/operations";

let value: UpdateFlowRulePathParamAction = "select-payment-options";
```

## Values

```typescript
"select-payment-options" | "decline-early" | "route-transaction" | "skip-3ds"
```