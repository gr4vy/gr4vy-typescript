import { CheckoutSession } from "../../src/models/components";

const FIELDS_BASE_URL = "https://api.sandbox.e2e.gr4vy.app";

/**
 * Submits payment-method fields to a checkout session.
 *
 * `PUT /checkout/sessions/{id}/fields` is an Embed/secure-fields endpoint that is
 * intentionally not exposed through the SDK (it is normally called by the
 * client-side SDKs, not the server SDK). The original checkout-sessions test
 * called it inline with a raw `fetch`; this helper centralises that so the
 * lifecycle flows can tokenise a card into a session without duplicating it.
 *
 * Returns nothing; throws if the API does not return the expected `204`.
 */
const putFields = async (
  session: CheckoutSession,
  paymentMethod: Record<string, unknown>
): Promise<void> => {
  const response = await fetch(
    `${FIELDS_BASE_URL}/checkout/sessions/${session.id}/fields`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ payment_method: paymentMethod }),
    }
  );

  if (response.status !== 204) {
    const body = await response.text().catch(() => "");
    throw new Error(
      `Unexpected status ${response.status} submitting checkout session fields: ${body}`
    );
  }
};

export interface RawCard {
  number: string;
  expiration_date: string;
  security_code: string;
}

/** Tokenises a raw card into the checkout session. */
export const putCheckoutSessionCard = (
  session: CheckoutSession,
  card: RawCard
): Promise<void> =>
  putFields(session, {
    method: "card",
    number: card.number,
    expiration_date: card.expiration_date,
    security_code: card.security_code,
  });

/** Attaches a previously stored payment method to the checkout session. */
export const putCheckoutSessionStoredMethod = (
  session: CheckoutSession,
  paymentMethodId: string,
  securityCode?: string
): Promise<void> =>
  putFields(session, {
    method: "id",
    id: paymentMethodId,
    ...(securityCode ? { security_code: securityCode } : {}),
  });
