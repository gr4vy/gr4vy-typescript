/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { refundsGet } from "../../funcs/refundsGet.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  refundId: z.string(),
  merchantAccountId: z.nullable(z.string()).optional(),
};

export const tool$refundsGet: ToolDefinition<typeof args> = {
  name: "refunds-get",
  description: `Get refund

Fetch a refund.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await refundsGet(
      client,
      args.refundId,
      args.merchantAccountId,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
