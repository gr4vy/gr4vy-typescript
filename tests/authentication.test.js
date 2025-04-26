import jwt from "jsonwebtoken";
import snakecaseKeys from "snakecase-keys";
import timekeeper from "timekeeper";
import { describe, expect, test } from "vitest";
import { version } from "../package.json";
import { getEmbedToken, getToken, JWTScope, updateToken } from "../src";

const privateKey = `-----BEGIN PRIVATE KEY-----
MIHuAgEAMBAGByqGSM49AgEGBSuBBAAjBIHWMIHTAgEBBEIBABM9jQu+HT87oIik
O6DiJjYeghr3V+VMBVNU2hCM3X/OAS6TUTylMbnjDnwWdmu7anVSnjvEY1a4KxQ9
WZ8E/PKhgYkDgYYABABRdv5VAtOsGb6THxeK/p7RAARPm6Zwb7FF4sZAYkkSB7h0
2jpj3UHSpyl92BQkiF/xakz7hMMD1A0ZTn5SuXWp3AG9qPHO3eB9WrZhPGYixwyo
XNjhnPEDhmkItKXteke9iBOTOOXB7AFQSh7EXRBmhBs4u3ZlTmrl+8VdBc3+jwAY
rw==
-----END PRIVATE KEY-----`;

const thumbprint = "va-SLs5AxJNfqKXD8LI5Y38BflpNvjZjY4RSWz66U1w";

const embedParams = {
  amount: 9000,
  currency: "USD",
  buyerExternalIdentifier: "user-123",
  connectionOptions: {
    "stripe-card": {
      stripe_connect: {
        key: "value",
      },
    },
  },
  metadata: {
    camelCaseKey: "value1",
    snake_case_key: "value2",
  },
  cartItems: [
    {
      name: "Joust Duffle Bag",
      quantity: 1,
      unitAmount: 9000,
      taxAmount: 0,
      categories: ["Gear", "Bags", "Test"],
    },
  ],
};

const checkoutSessionId = "0ebde6a1-f66c-43ea-bb8b-73751864c604";

describe(".getToken", () => {
  test("should create a valid signed JWT token", async () => {
    const token = await getToken({
      privateKey,
      scopes: [JWTScope.ReadAll, JWTScope.WriteAll],
      expiresIn: "1m",
    });

    const decoded = jwt.verify(token, privateKey, {
      algorithms: ["ES512"],
      complete: true,
    });

    expect(decoded.header.alg).toBe("ES512");
    expect(decoded.header.typ).toBe("JWT");
    expect(decoded.header.kid).toBe(thumbprint);
    expect(decoded.payload.scopes).toEqual(["*.read", "*.write"]);
    expect(typeof decoded.payload.iat).toBe("number");
    expect(typeof decoded.payload.nbf).toBe("number");
    expect(typeof decoded.payload.exp).toBe("number");
    expect(decoded.payload.iss.startsWith("Gr4vy Node SDK")).toBeTruthy();
    expect(decoded.payload.iss).toMatch("Gr4vy Node SDK");
    expect(decoded.payload.iss).toMatch(version);
  });

  test("should accept optional embed data", async () => {
    const token = await getToken({
      privateKey,
      scopes: [JWTScope.Embed],
      embedParams,
    });

    const decoded = jwt.verify(token, privateKey, {
      algorithms: ["ES512"],
      complete: true,
    });

    const connOptions =
      embedParams.connectionOptions || embedParams["connection_options"];
    const expected = snakecaseKeys(embedParams, { exclude: ["metadata"] });
    expected["connection_options"] = connOptions;

    expect(decoded.payload.scopes).toEqual(["embed"]);
    expect(decoded.payload.embed).toEqual(expected);
  });

  test("should ignore embed data if the embed scope was not set", async () => {
    const token = await getToken({
      privateKey,
      scopes: [JWTScope.ReadAll],
      embedParams,
    });

    const decoded = jwt.verify(token, privateKey, {
      algorithms: ["ES512"],
      complete: true,
    });

    expect(decoded.payload.scopes).toEqual(["*.read"]);
    expect(decoded.payload.embed).toBeUndefined();
  });
});

describe(".getEmbedToken", () => {
  test("should create a JWT token for use with Embed", async () => {
    const token = await getEmbedToken({
      privateKey,
      embedParams,
    });

    const decoded = jwt.verify(token, privateKey, {
      algorithms: ["ES512"],
      complete: true,
    });

    const connOptions =
      embedParams.connectionOptions || embedParams["connection_options"];
    const expected = snakecaseKeys(embedParams, { exclude: ["metadata"] });
    expected["connection_options"] = connOptions;

    expect(decoded.payload.scopes).toEqual(["embed"]);
    expect(decoded.payload.embed).toEqual(expected);
  });

  test("should take an optional checkout session ID", async () => {
    const token = await getEmbedToken({
      privateKey,
      embedParams,
      checkoutSessionId,
    });

    const decoded = jwt.verify(token, privateKey, {
      algorithms: ["ES512"],
      complete: true,
    });

    expect(decoded.payload.checkout_session_id).toEqual(checkoutSessionId);
  });
});

describe(".updateToken", () => {
  test("should resign a token with a new signature and expiration", async () => {
    timekeeper.freeze(Date.now());

    const originalToken = await getToken({ privateKey, expiresIn: "1m" });

    timekeeper.travel(Date.now() + 1000 * 90);

    const newToken = await updateToken({
      privateKey,
      token: originalToken,
      expiresIn: "1m",
    });

    const originalDecoded = jwt.decode(originalToken, { complete: true });
    const newDecoded = jwt.decode(newToken, { complete: true });

    expect(newDecoded.header).toEqual(originalDecoded.header);
    expect(newDecoded.payload.scopes).toEqual(originalDecoded.payload.scopes);
    expect(newDecoded.payload.embed).toEqual(originalDecoded.payload.embed);
    expect(newDecoded.payload.checkout_session_id).toEqual(
      originalDecoded.payload.checkout_session_id
    );
    expect(newDecoded.payload.iat).toBeGreaterThan(originalDecoded.payload.iat);
    expect(newDecoded.payload.exp).toBeGreaterThan(originalDecoded.payload.exp);
    expect(newDecoded.payload.nbf).toBeGreaterThan(originalDecoded.payload.nbf);
  });

  test("should allow an Embed token to be updated with new Embed params", async () => {
    timekeeper.freeze(Date.now());

    const originalToken = await getEmbedToken({
      privateKey,
      embedParams,
      checkoutSessionId,
      expiresIn: "1m",
    });

    timekeeper.travel(Date.now() + 1000 * 90);

    const newEmbedParams = {
      amount: 1299,
      currency: "USD",
    };

    const newToken = await updateToken({
      token: originalToken,
      expiresIn: "1m",
      embedParams: newEmbedParams,
      privateKey,
    });

    const originalDecoded = jwt.decode(originalToken, { complete: true });
    const newDecoded = jwt.decode(newToken, { complete: true });

    expect(newDecoded.payload.embed).toEqual(newEmbedParams);
    expect(newDecoded.payload.checkout_session_id).toEqual(
      originalDecoded.payload.checkout_session_id
    );
  });
});
