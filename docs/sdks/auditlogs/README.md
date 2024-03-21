# AuditLogs
(*auditLogs*)

## Overview

Audit Logs provide an historic record of changes made to your Gr4vy instance.

### Available Operations

* [listAuditLogs](#listauditlogs) - List audit logs

## listAuditLogs

Returns a list of audit logs.

### Example Usage

```typescript
import { Gr4vy } from "@gr4vy/sdk";
import { Action } from "@gr4vy/sdk/models/operations";

async function run() {
  const sdk = new Gr4vy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.auditLogs.listAuditLogs({
    limit: 1,
    cursor: "ZXhhbXBsZTE",
    userId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    action: Action.Created,
    resourceType: "buyer",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAuditLogsRequest](../../models/operations/listauditlogsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[components.AuditLogs](../../models/components/auditlogs.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
