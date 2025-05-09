/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { paymentMethodsPaymentServiceTokensList } from "../../funcs/paymentMethodsPaymentServiceTokensList.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  paymentMethodId: z.string(),
  paymentServiceId: z.nullable(z.string()).optional(),
  merchantAccountId: z.nullable(z.string()).optional(),
};

export const tool$paymentMethodsPaymentServiceTokensList: ToolDefinition<
  typeof args
> = {
  name: "payment-methods-payment-service-tokens-list",
  description: `List payment service tokens

List all gateway tokens stored for a payment method.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await paymentMethodsPaymentServiceTokensList(
      client,
      args.paymentMethodId,
      args.paymentServiceId,
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
