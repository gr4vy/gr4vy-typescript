# PaymentServiceDefinitionConfiguration

Configuration items for the payment service.

## Example Usage

```typescript
import { PaymentServiceDefinitionConfiguration } from "@gr4vy/sdk/models/components";

let value: PaymentServiceDefinitionConfiguration = {
    approvalUiHeight: "300px",
    approvalUiWidth: "300px",
    approvalUiTarget: "any",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `approvalUiHeight`                                                                                                    | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | Height of the approval interface in either pixels or view height (vh).                                                | 300px                                                                                                                 |
| `approvalUiWidth`                                                                                                     | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | Width of the approval interface in either pixels or view width (vw).                                                  | 300px                                                                                                                 |
| `approvalUiTarget`                                                                                                    | [components.ApprovalUiTarget](../../models/components/approvaluitarget.md)                                            | :heavy_minus_sign:                                                                                                    | The browser target that an approval URL must be opened in. If `any` or `null`, then there is no specific requirement. | any                                                                                                                   |