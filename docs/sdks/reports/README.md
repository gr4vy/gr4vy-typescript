# Reports
(*reports*)

## Overview

In Gr4vy, a report represents the configuration details to extract or
dump a set of data into a downloadable CSV file. The data extracted
by a report is configured via the reports API where you can specify:

* Which fields should be in the dataset.
* How the dataset should be sorted.
* How the dataset should be filtered.

Once a report is created, it may be executed on a one-off or recurring
basis. One-off reports are executed only once shortly after the report
is created, while recurring reports are executed periodically based on
its configured frequency, e.g. weekly or monthly.

During a report execution, the data is extracted and loaded into
a CSV file according to the report's configuration. The resulting file
may then be downloaded.

The reports API can be used to:

* Create and configure new reports.
* List all reports.
* View the configuration details of a report.
* List a report's executions.
* Reconfigure an existing report.
* Generate a temporary URL to download the result of a report execution
in CSV format.

### Available Operations

* [listAllReportExecutions](#listallreportexecutions) - List all report executions
* [getReportExecution](#getreportexecution) - Get report execution
* [listReports](#listreports) - List reports
* [getReport](#getreport) - Get report
* [listReportExecutions](#listreportexecutions) - List executions for report
* [generateDownloadUrl](#generatedownloadurl) - Generate report download URL

## listAllReportExecutions

Returns a list of executions belonging to any report.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";
import { ListAllReportExecutionsQueryParamStatus } from "@gr4vy/sdk/models/operations";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.reports.listAllReportExecutions({
    cursor: "ZXhhbXBsZTE",
    limit: 1,
    createdAtGte: "2022-01-01T12:00:00+08:00",
    createdAtLte: "2022-01-01T12:00:00+08:00",
    reportName: "Failed+Authorizations+042022",
    status: [
      ListAllReportExecutionsQueryParamStatus.Succeeded,
      ListAllReportExecutionsQueryParamStatus.Failed,
    ],
    creatorId: [
      "dba3bc4c-c5f2-477f-bfb0-abd61f89f979",
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAllReportExecutionsRequest](../../models/operations/listallreportexecutionsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[components.ReportExecutions](../../models/components/reportexecutions.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## getReportExecution

Retrieves the details of a single report execution.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const reportExecutionId = "8724fd24-5489-4a5d-90fd-0604df7d3b83";
  
  const result = await sdk.reports.getReportExecution(reportExecutionId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `reportExecutionId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a report execution.                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.ReportExecution](../../models/components/reportexecution.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## listReports

Returns a list of reports.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";
import { Schedule } from "@gr4vy/sdk/models/operations";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.reports.listReports({
    cursor: "ZXhhbXBsZTE",
    limit: 1,
    name: "Failed+Authorizations+042022",
    schedule: [
      Schedule.Once,
      Schedule.Monthly,
    ],
    scheduleEnabled: true,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListReportsRequest](../../models/operations/listreportsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[components.Reports](../../models/components/reports.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## getReport

Retrieves the details of a single report.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const reportId = "8724fd24-5489-4a5d-90fd-0604df7d3b83";
  
  const result = await sdk.reports.getReport(reportId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `reportId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a report.                                                                                                                                                    | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.Report](../../models/components/report.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## listReportExecutions

Returns a list of executions for a report. For a
one-off report there will only be one, where for scheduled ones
there may be more.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const reportId = "8724fd24-5489-4a5d-90fd-0604df7d3b83";
  const cursor = "ZXhhbXBsZTE";
  const limit = 1;
  
  const result = await sdk.reports.listReportExecutions(reportId, cursor, limit);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `reportId`                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                          | The unique ID for a report.                                                                                                                                                                                                                                                                                                                 | [object Object]                                                                                                                                                                                                                                                                                                                             |
| `cursor`                                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | A cursor that identifies the page of results to return. This is used to<br/>paginate the results of this API.<br/><br/>For the first page of results, this parameter can be left out.<br/>For additional pages, use the value returned by the API in<br/>the `next_cursor` field. Similarly the `previous_cursor` can be used to<br/>reverse backwards in the list. | [object Object]                                                                                                                                                                                                                                                                                                                             |
| `limit`                                                                                                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Defines the maximum number of items to return for this request.                                                                                                                                                                                                                                                                             | [object Object]                                                                                                                                                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                                                                                                                                   | RequestOptions                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                             |


### Response

**Promise<[components.ReportExecutions](../../models/components/reportexecutions.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## generateDownloadUrl

Generates a temporary signed URL to download the result of a report
execution.

### Example Usage

```typescript
import { SDK } from "@gr4vy/sdk";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const reportId = "8724fd24-5489-4a5d-90fd-0604df7d3b83";
  const reportExecutionId = "8724fd24-5489-4a5d-90fd-0604df7d3b83";
  
  const result = await sdk.reports.generateDownloadUrl(reportId, reportExecutionId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `reportId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a report.                                                                                                                                                    | [object Object]                                                                                                                                                                |
| `reportExecutionId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique ID for a report execution.                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[components.ReportExecutionUrl](../../models/components/reportexecutionurl.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Error401Unauthorized | 401                         | application/json            |
| errors.Error404NotFound     | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
