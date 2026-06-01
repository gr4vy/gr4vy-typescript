import crypto from "crypto";
import {
  Address,
  BillingDetails,
  BuyerCreate,
  CardPaymentMethodCreate,
  CartItem,
  Transaction,
} from "../../src/models/components";
import { RawCard } from "./fields";

/**
 * Capture/void/cancel return either a bare {@link Transaction} or a wrapper that
 * nests it under `transaction` (depending on the `Prefer` header). This narrows
 * both shapes to the underlying transaction.
 */
export const unwrapTransaction = (
  result: Transaction | { transaction: Transaction }
): Transaction => ("transaction" in result ? result.transaction : result);

/**
 * Generates a process-unique identifier. Namespaced with a random suffix so
 * external identifiers never collide across parallel test files / CI shards.
 */
export const uniqueId = (prefix = "ts-e2e"): string =>
  `${prefix}-${crypto.randomBytes(6).toString("hex")}`;

/**
 * The `mock-card` connector used by the test merchant accepts this Visa test
 * number and authorises it. Used both as raw fields (checkout sessions) and as
 * an SDK `CardPaymentMethodCreate`.
 */
export const APPROVING_CARD: RawCard = {
  number: "4111111111111111",
  // Far-future expiry so the fixture never lapses and gets rejected as expired.
  expiration_date: "12/35",
  security_code: "123",
};

export const cardPaymentMethod = (
  overrides: Partial<CardPaymentMethodCreate> = {}
): CardPaymentMethodCreate => ({
  method: "card",
  number: APPROVING_CARD.number,
  expirationDate: APPROVING_CARD.expiration_date,
  securityCode: APPROVING_CARD.security_code,
  ...overrides,
});

export const address = (overrides: Partial<Address> = {}): Address => ({
  city: "London",
  country: "US",
  postalCode: "94110",
  state: "CA",
  line1: "123 Example Street",
  line2: "Apt 4",
  organization: "Gr4vy",
  ...overrides,
});

export const billingDetails = (
  overrides: Partial<BillingDetails> = {}
): BillingDetails => ({
  firstName: "John",
  lastName: "Doe",
  emailAddress: "john.doe@example.com",
  phoneNumber: "+14155551234",
  address: address(),
  ...overrides,
});

export const buyer = (overrides: Partial<BuyerCreate> = {}): BuyerCreate => ({
  displayName: "John Doe",
  externalIdentifier: uniqueId("buyer"),
  billingDetails: billingDetails(),
  ...overrides,
});

export const cartItem = (overrides: Partial<CartItem> = {}): CartItem => ({
  name: "Joust Duffle Bag",
  quantity: 1,
  unitAmount: 1299,
  ...overrides,
});
