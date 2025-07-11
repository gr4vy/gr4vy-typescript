# AccountUpdaterJob

## Example Usage

```typescript
import { AccountUpdaterJob } from "@gr4vy/sdk/models/components";

let value: AccountUpdaterJob = {
  id: "cc18c7c6-c1d4-4194-92a7-d5a985108b68",
  merchantAccountId: "default",
  inquiries: [],
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
  updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Always `account-updater-job`                                                                         | account-updater-job                                                                                  |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID for the account updater job.                                                                  | cc18c7c6-c1d4-4194-92a7-d5a985108b68                                                                 |
| `merchantAccountId`                                                                                  | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the merchant account this job belongs to.                                                  | default                                                                                              |
| `inquiries`                                                                                          | [components.AccountUpdaterInquirySummary](../../models/components/accountupdaterinquirysummary.md)[] | :heavy_check_mark:                                                                                   | A list of the payment methods that have been scheduled for an update.                                |                                                                                                      |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | The date and time when this payment method was first created in our system.                          | 2013-07-16T19:23:00.000+00:00                                                                        |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | The date and time when this payment method was last updated in our system.                           | 2013-07-16T19:23:00.000+00:00                                                                        |