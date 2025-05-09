/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { merchantAccountsList } from "../../funcs/merchantAccountsList.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  search: z.nullable(z.string()).optional(),
};

export const tool$merchantAccountsList: ToolDefinition<typeof args> = {
  name: "merchant-accounts-list",
  description: `List all merchant accounts

List all merchant accounts in an instance.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await merchantAccountsList(
      client,
      args.cursor,
      args.limit,
      args.search,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value.result;

    return formatResult(value, apiCall);
  },
};
