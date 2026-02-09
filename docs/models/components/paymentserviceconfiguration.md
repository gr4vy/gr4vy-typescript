# PaymentServiceConfiguration

## Example Usage

```typescript
import { PaymentServiceConfiguration } from "@gr4vy/sdk/models/components";

let value: PaymentServiceConfiguration = {
  approvalUiTarget: "any",
  approvalUiHeight: "100px",
  approvalUiWidth: "100px",
  cartItemsLimit: 100,
  cartItemsRequired: true,
  cartItemsShouldMatchAmount: true,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `approvalUiTarget`                                                                             | [components.ApprovalTarget](../../models/components/approvaltarget.md)                         | :heavy_check_mark:                                                                             | N/A                                                                                            | any                                                                                            |
| `approvalUiHeight`                                                                             | *string*                                                                                       | :heavy_check_mark:                                                                             | Height of the approval interface in either pixels or view height (vh).                         | **Example 1:** 100px<br/>**Example 2:** 50vh                                                   |
| `approvalUiWidth`                                                                              | *string*                                                                                       | :heavy_check_mark:                                                                             | Width of the approval interface in either pixels or view width (vw).                           | **Example 1:** 100px<br/>**Example 2:** 50vw                                                   |
| `cartItemsLimit`                                                                               | *number*                                                                                       | :heavy_check_mark:                                                                             | The maximum number of cart items supported by this connector before we will truncate the list. | 100                                                                                            |
| `cartItemsRequired`                                                                            | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Defines if cart items are required by this connector.                                          | true                                                                                           |
| `cartItemsShouldMatchAmount`                                                                   | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Defines if the cart items sum value should match the transaction amount.                       | true                                                                                           |