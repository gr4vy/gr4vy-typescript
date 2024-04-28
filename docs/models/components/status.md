# Status

The state of the payment method.

- `processing` - The payment method is stored but has not been used yet.
- `buyer_approval_required` - Storing the payment method requires
  the buyer to provide approval. Follow the `approval_url` for next steps.
- `succeeded` - The payment method is stored and has been used.
- `failed` - The payment method could not be stored, or failed first use.


## Values

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `Processing`            | processing              |
| `BuyerApprovalRequired` | buyer_approval_required |
| `Succeeded`             | succeeded               |
| `Failed`                | failed                  |