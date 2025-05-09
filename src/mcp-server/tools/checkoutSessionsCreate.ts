/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { checkoutSessionsCreate } from "../../funcs/checkoutSessionsCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  requestBody: z.nullable(operations.CreateCheckoutSessionBody$inboundSchema)
    .optional(),
  timeoutInSeconds: z.number().default(1),
  merchantAccountId: z.nullable(z.string()).optional(),
};

export const tool$checkoutSessionsCreate: ToolDefinition<typeof args> = {
  name: "checkout-sessions-create",
  description: `Create checkout session

Create a new checkout session.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await checkoutSessionsCreate(
      client,
      args.requestBody,
      args.timeoutInSeconds,
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
