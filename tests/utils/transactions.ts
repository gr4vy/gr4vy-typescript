import { Gr4vy } from "../../src";
import { Transaction, TransactionCreate } from "../../src/models/components";
import { APPROVING_CARD, uniqueId } from "./fixtures";
import { putCheckoutSessionCard } from "./fields";

/**
 * Authorises (or captures) a transaction the way a real integration does: open a
 * checkout session, tokenise the approving test card into it, then create the
 * transaction against that session. Extra `TransactionCreate` fields can be
 * merged in via `overrides`.
 */
export const authorizeViaCheckoutSession = async (
  client: Gr4vy,
  amount: number,
  overrides: Partial<TransactionCreate> = {}
): Promise<Transaction> => {
  const session = await client.checkoutSessions.create();
  await putCheckoutSessionCard(session, APPROVING_CARD);
  return client.transactions.create({
    amount,
    currency: "USD",
    externalIdentifier: uniqueId("txn"),
    ...overrides,
    paymentMethod: { method: "checkout-session", id: session.id },
  });
};
