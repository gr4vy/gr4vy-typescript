/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { reportsExecutionsGet } from "../funcs/reportsExecutionsGet.js";
import { reportsExecutionsList } from "../funcs/reportsExecutionsList.js";
import { reportsExecutionsUrl } from "../funcs/reportsExecutionsUrl.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Executions extends ClientSDK {
  /**
   * List executions for report
   *
   * @remarks
   * List all executions of a specific report.
   */
  async list(
    reportId: string,
    cursor?: string | null | undefined,
    limit?: number | undefined,
    merchantAccountId?: string | null | undefined,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListReportExecutionsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(reportsExecutionsList(
      this,
      reportId,
      cursor,
      limit,
      merchantAccountId,
      options,
    ));
  }

  /**
   * Create URL for executed report
   *
   * @remarks
   * Creates a download URL for a specific execution of a report.
   */
  async url(
    reportId: string,
    reportExecutionId: string,
    merchantAccountId?: string | null | undefined,
    options?: RequestOptions,
  ): Promise<components.ReportExecutionUrl> {
    return unwrapAsync(reportsExecutionsUrl(
      this,
      reportId,
      reportExecutionId,
      merchantAccountId,
      options,
    ));
  }

  /**
   * Get executed report
   *
   * @remarks
   * Fetch a specific executed report.
   */
  async get(
    reportExecutionId: string,
    merchantAccountId?: string | null | undefined,
    options?: RequestOptions,
  ): Promise<components.ReportExecution> {
    return unwrapAsync(reportsExecutionsGet(
      this,
      reportExecutionId,
      merchantAccountId,
      options,
    ));
  }
}
