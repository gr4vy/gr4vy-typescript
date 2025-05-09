/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { giftCardsList } from "../../funcs/giftCardsList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListGiftCardsRequest$inboundSchema.optional(),
};

export const tool$giftCardsList: ToolDefinition<typeof args> = {
  name: "gift-cards-list",
  description: `List gift cards

Browser all gift cards.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await giftCardsList(
      client,
      args.request,
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
